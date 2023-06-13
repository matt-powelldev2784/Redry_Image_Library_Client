import { apiCall } from '../../components/utils/apiCall'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

export interface DataState {
  isLoading: boolean
  imageData: []
  totalImagesFound: string
  totalImagesReturned: string
}

const initialState: DataState = {
  isLoading: false,
  imageData: [],
  totalImagesFound: '',
  totalImagesReturned: '',
}

interface HandleSearchProps {
  key?: string
  type: string
}

export const handleSearch = createAsyncThunk(
  'data/handleSearch',
  async (event: HandleSearchProps): Promise<any> => {
    try {
      const response = await apiCall({
        httpMethod: 'GET',
        route: `search-images?tags=man&tags=dog`,
      })
      const searchResults = response.data
      console.log('searchResults', searchResults)
      return searchResults
    } catch (err) {
      console.log(err)
    }
  }
)

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    dummyReducer: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      //---------------------------------------------------------------------
      .addCase(handleSearch.pending, (state) => {
        state.isLoading = true
        state.imageData = []
        state.totalImagesFound = ''
        state.totalImagesReturned = ''
      })
      .addCase(handleSearch.fulfilled, (state, { payload }) => {
        const { images, returned, total } = payload
        state.isLoading = false
        state.imageData = images
        state.totalImagesReturned = returned
        state.totalImagesFound = total
      })
      .addCase(handleSearch.rejected, (state, { error }: any) => {
        state.isLoading = false
        state.imageData = []
        state.totalImagesFound = ''
        state.totalImagesReturned = ''
      })
  },
})

// Action creators are generated for each case reducer function
export const { dummyReducer } = dataSlice.actions

export default dataSlice.reducer
