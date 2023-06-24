import { useAppSelector } from '../../redux/hooks/reduxHooks'
import { ImageItem } from './ImageItem'
import { NavBar } from '../navBar/NavBar'
import { SearchNav } from '../../ui/ui-index'

export const SearchResultsPage = () => {
  const searchResults = useAppSelector((state) => state.dataReducer.imageData)
  const currentSearchTerm = useAppSelector(
    (state) => state.dataReducer.searchTerm
  )

  const imageItems = searchResults.map((imageData) => {
    const { _id } = imageData
    return <ImageItem key={_id} imageData={imageData} />
  })

  return (
    <section className="min-h-screen">
      <NavBar />
      <SearchNav />
      <div className="flex w-screen flex-col items-center justify-center">
        <h1 className="mx-8 mt-8 text-center text-3xl">
          Search Results for: {currentSearchTerm}
        </h1>
        <div className="flex w-screen items-center justify-center">
          <div className="mb-12 mt-12 flex w-full flex-wrap items-center justify-center gap-8 md:mx-4 lg:mx-8 lg:gap-14">
            {imageItems}
          </div>
        </div>
      </div>
    </section>
  )
}
