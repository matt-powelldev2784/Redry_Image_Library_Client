import { apiCall } from '../../lib/apiCall'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ImageDetails } from '../../TS/interfaces'

export interface ImageUploadState {
  isLoading: boolean
  errors: string[] | null
  fileSizeError: string | null
  uploadImageUrl: string | null
  uploadImageThumbnailUrl: string | null
}

const initialState: ImageUploadState = {
  isLoading: false,
  errors: null,
  fileSizeError: null,
  uploadImageUrl: null,
  uploadImageThumbnailUrl: null,
}

export const addImageToBucket = createAsyncThunk(
  'data/addImageToBucket',
  async (file: File): Promise<any> => {
    try {
      const preSignedUrl = await apiCall({
        httpMethod: 'GET',
        route: 'get-presigned-url',
      })
      const { url } = await preSignedUrl

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

export const addImageDetailsToDb = createAsyncThunk(
  'data/addImageDetailsToDb',
  async (imageDetails: ImageDetails): Promise<any> => {
    try {
      const { imageUrl, uploadedBy, description, tags } = imageDetails
      const tagsArray = tags.toLowerCase().split(',')
      const tagsArrayTrimmed = tagsArray.map((tag) => {
        return tag.trim()
      })

      const imageProp = {
        path: imageUrl,
        uploadedBy: uploadedBy,
        description: description,
        tags: tagsArrayTrimmed,
      }

      const url = 'add-image-details-to-db'

      const newImage = await apiCall({
        httpMethod: 'POST',
        route: url,
        body: imageProp,
      })

      return newImage
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
        state.errors = null
        state.uploadImageThumbnailUrl = null
        state.uploadImageUrl = null
      })
      .addCase(addImageToBucket.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.uploadImageThumbnailUrl = null
        state.uploadImageUrl = payload
      })
      .addCase(addImageToBucket.rejected, (state, { error }: any) => {
        state.isLoading = false
        state.errors = [error.message]
      })
      //---------------------------------------------------------------------
      .addCase(addImageDetailsToDb.pending, (state) => {
        state.isLoading = true
        state.errors = null
      })
      .addCase(addImageDetailsToDb.fulfilled, (state, { payload }) => {
        const { thumbnailPath } = payload.data
        state.isLoading = false
        state.uploadImageThumbnailUrl = thumbnailPath
      })
      .addCase(addImageDetailsToDb.rejected, (state, { error }: any) => {
        state.isLoading = false
        state.errors = [error.message]
      })
  },
})

export const {
  toggleLoadingState,
  setImageUploadErrorState,
  resetImageUploadErrorState,
} = imageUploadSlice.actions

export default imageUploadSlice.reducer
