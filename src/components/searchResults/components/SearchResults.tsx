import { useEffect } from 'react'
import { useAppSelector } from '../../../redux/hooks/reduxHooks'
import { ImageItem } from './ImageItem'
import { handleSearch, setSearchTerm } from '../../../redux/slice/dataSlice'
import { useAppDispatch } from '../../../redux/hooks/reduxHooks'
import { Error } from './Error'
import { Loading } from './Loading'

interface SearchResultsProps {
  randomImages?: boolean
}

export const SearchResults = ({ randomImages }: SearchResultsProps) => {
  const dispatch = useAppDispatch()
  const searchResults = useAppSelector((state) => state.dataReducer.imageData)

  useEffect(() => {
    if (randomImages) {
      dispatch(handleSearch(''))
      dispatch(setSearchTerm(''))
    }
  }, [dispatch, randomImages])

  const imageItems = searchResults.map((imageData) => {
    const { _id } = imageData
    return <ImageItem key={_id} imageData={imageData} />
  })

  return (
    <div className="flex w-screen flex-col items-center justify-center">
      <Error />
      <Loading />
      <div className="mb-12 mt-6 flex w-full flex-wrap items-center justify-center gap-4 md:mx-4 lg:mx-6 lg:gap-8">
        {imageItems}
      </div>
    </div>
  )
}
