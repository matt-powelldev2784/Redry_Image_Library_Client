import { apiCall } from '../../components/utils/apiCall'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface ImageUploadState {
  isLoading: boolean
  errors: string[]
}

const initialState: ImageUploadState = {
  isLoading: false,
  errors: [],
}

export const imageUploadSlice = createSlice({
  name: 'imageUpload',
  initialState,
  reducers: {
    toggleLoadingState: (state, { payload }) => {
      state.isLoading = !state.isLoading
    },
    setErrorState: (state, { payload }) => {
      state.errors = [payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleLoadingState, setErrorState } = imageUploadSlice.actions

export default imageUploadSlice.reducer
