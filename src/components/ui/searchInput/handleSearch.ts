import { apiCall } from '../../utils/apiCall'

interface HandleSearchProps {
  key?: string
  type: string
}

export const handleSearch = async (event: HandleSearchProps) => {
  const getSearchResults = async () => {
    const response = await apiCall({
      httpMethod: 'GET',
      route: `search-images?tags=man&tags=dog`,
    })
    const searchResults = response.data
    console.log('searchResults', searchResults)
    return searchResults
  }

  if (event.key === 'Enter' || event.type === 'click') {
    return getSearchResults()
  }
}
