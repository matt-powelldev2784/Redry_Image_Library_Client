import { useAppSelector } from '../../redux/hooks/reduxHooks'
import { ImageItem } from './ImageItem'
import { SearchInput } from '../ui/ui-index'

export const SearchResults = () => {
  const searchResults = useAppSelector((state) => state.dataReducer.imageData)

  const imageItems = searchResults.map((imageData) => {
    const { _id } = imageData
    return <ImageItem key={_id} imageData={imageData} />
  })

  return (
    <section className="flex w-screen flex-col items-center justify-center">
      <SearchInput
        optionalClassNames="mt-12 w-11/12 bg-slate-200 rounded-xl px-3 py-2 text-center text-base md:w-1/2 lg:w-[28rem]"
        placeholderText="Search Image Library"
      />
      <h1 className="mt-16 text-3xl">Serach Results for: </h1>
      <div className="flex w-screen items-center justify-center">
        <div className="mb-12 mt-12 flex w-full flex-wrap items-center justify-center gap-8 md:mx-4 lg:mx-8 lg:gap-14">
          {imageItems}
        </div>
      </div>
    </section>
  )
}
