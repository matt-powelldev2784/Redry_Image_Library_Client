import { apiCall } from '../../components/utils/apiCall'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface ImageUploadState {
  isLoading: boolean
  errors: string[] | null
  fileSizeError: string | null
}

const initialState: ImageUploadState = {
  isLoading: false,
  errors: null,
  fileSizeError: null,
}

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
})

// Action creators are generated for each case reducer function
export const {
  toggleLoadingState,
  setImageUploadErrorState,
  resetImageUploadErrorState,
} = imageUploadSlice.actions

export default imageUploadSlice.reducer
