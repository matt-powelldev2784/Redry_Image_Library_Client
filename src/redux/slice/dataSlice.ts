import { apiCall } from '../../lib/apiCall'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ImageData } from '../../TS/interfaces'

export interface DataState {
  isLoading: boolean
  imageData: ImageData[]
  totalImagesFound: string
  totalImagesReturned: string
  searchTerm: string
  errors: string[] | null
}

const initialState: DataState = {
  isLoading: false,
  imageData: sessionStorage.getItem('imageData')
    ? JSON.parse(sessionStorage.getItem('imageData') as string)
    : ([] as ImageData[]),
  totalImagesFound: '',
  totalImagesReturned: '',
  searchTerm: '',
  errors: null,
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

    searchQuery = searchQuery.slice(0, -1).toLowerCase()
    try {
      const response = await apiCall({
        httpMethod: 'GET',
        route: `search-images?${searchQuery}`,
      })
      const searchResults = response.data
      return searchResults
    } catch (err) {
      console.log(err)
      throw err
    }
  }
)

export const getSingleImage = createAsyncThunk(
  'data/getSingleImage',
  async (id: string): Promise<any> => {
    try {
      const response = await apiCall({
        httpMethod: 'GET',
        route: `single-image?id=${id}`,
      })
      const searchResult = response.data
      return searchResult
    } catch (err) {
      console.log(err)
      throw err
    }
  }
)

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload
    },
  },
  extraReducers: (builder) => {
    builder
      //---------------------------------------------------------------------
      .addCase(handleSearch.pending, (state) => {
        state.isLoading = true
        state.imageData = []
        state.totalImagesFound = ''
        state.totalImagesReturned = ''
        state.errors = null
      })
      .addCase(handleSearch.fulfilled, (state, { payload }) => {
        const { images, returned, total } = payload
        state.isLoading = false
        state.imageData = images
        state.totalImagesReturned = returned
        state.totalImagesFound = total
        sessionStorage.setItem('imageData', JSON.stringify(images))
      })
      .addCase(handleSearch.rejected, (state, { error }: any) => {
        state.isLoading = false
        state.imageData = []
        state.errors = [error.message]
      })
      //---------------------------------------------------------------------
      .addCase(getSingleImage.pending, (state) => {
        state.isLoading = true
        state.imageData = []
        state.totalImagesFound = ''
        state.totalImagesReturned = ''
      })
      .addCase(getSingleImage.fulfilled, (state, { payload }) => {
        const images = payload
        images[0].thumbnailPath = images[0].path
        state.isLoading = false
        state.imageData = images
      })
      .addCase(getSingleImage.rejected, (state, { error }: any) => {
        state.isLoading = false
        state.errors = [error.message]
      })
  },
})

export const { setSearchTerm } = dataSlice.actions

export default dataSlice.reducer
