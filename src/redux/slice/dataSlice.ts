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

export const handleSearch = createAsyncThunk(
  'data/handleSearch',
  async (searchText: string): Promise<any> => {
    const searchWordArray = searchText.split(' ')
    let searchQuery = ''

    for (const word of searchWordArray) {
      const query = `tags=${word}&`
      const newQuery = searchQuery.concat(query)
      searchQuery = newQuery
    }

    searchQuery = searchQuery.slice(0, -1)

    try {
      const response = await apiCall({
        httpMethod: 'GET',
        route: `search-images?${searchQuery}`,
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