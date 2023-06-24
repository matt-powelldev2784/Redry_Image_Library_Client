import { useEffect } from 'react'
import { useAppSelector } from '../../redux/hooks/reduxHooks'
import { ImageItem } from './ImageItem'
import { handleSearch, setSearchTerm } from '../../redux/slice/dataSlice'
import { useAppDispatch } from '../../redux/hooks/reduxHooks'

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
      <div className="flex w-screen items-center justify-center">
        <div className="mb-12 mt-6 flex w-full flex-wrap items-center justify-center gap-8 md:mx-4 lg:mx-8 lg:gap-14">
          {imageItems}
        </div>
      </div>
    </div>
  )
}
