import { apiCall } from '../../components/utils/apiCall'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface ImageUploadState {
  isLoading: boolean
  errors: string[] | null
  fileSizeError: string | null
  uploadImageUrl: string | null
}

const initialState: ImageUploadState = {
  isLoading: false,
  errors: null,
  fileSizeError: null,
  uploadImageUrl: null,
}

export const addImageToBucket = createAsyncThunk(
  'data/addImageToBucket',
  async (file: File): Promise<any> => {
    try {
      const preSignedUrl = await fetch(
        'http://18.134.11.162:5001/get-presigned-url'
      )
      const { url } = await preSignedUrl.json()

      //upload image to s3 bucket
      await apiCall({
        httpMethod: 'PUT',
        route: url,
        body: file,
        options: { headers: { 'Content-Type': 'multipart/form-data' } },
        noBasePath: true,
      })

      const imageUrl = url.split('?')[0]

      return imageUrl
    } catch (err) {
      console.log(err)
      throw err
    }
  }
)

export const imageUploadSlice = createSlice({
  name: 'imageUpload',
  initialState,
  reducers: {
    toggleLoadingState: (state, { payload }) => {
      state.isLoading = !state.isLoading
    },
    setImageUploadErrorState: (state, { payload }) => {
      state.fileSizeError = payload
    },
    resetImageUploadErrorState: (state) => {
      state.fileSizeError = null
    },
  },
  extraReducers: (builder) => {
    builder
      //---------------------------------------------------------------------
      .addCase(addImageToBucket.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addImageToBucket.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.uploadImageUrl = payload
        console.log('payload', payload)
      })
      .addCase(addImageToBucket.rejected, (state, { error }: any) => {
        state.isLoading = false
        state.errors = [error.message]
        console.warn('rejected-------------------------')
      })
  },
})

// Action creators are generated for each case reducer function
export const {
  toggleLoadingState,
  setImageUploadErrorState,
  resetImageUploadErrorState,
} = imageUploadSlice.actions

export default imageUploadSlice.reducer
