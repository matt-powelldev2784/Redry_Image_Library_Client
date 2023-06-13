import { useAppSelector } from '../../redux/hooks/reduxHooks'
import { ImageItem } from './ImageItem'

export const SearchResults = () => {
  const searchResults = useAppSelector((state) => state.dataReducer.imageData)

  const imageItems = searchResults.map((imageData) => {
    const { _id } = imageData
    return <ImageItem key={_id} imageData={imageData} />
  })

  return (
    <section className="flex w-screen items-center justify-center">
      <div className="mb-12 mt-12 flex w-full flex-wrap items-center justify-center gap-8 md:mx-4 lg:mx-8 lg:gap-14">
        {imageItems}
      </div>
    </section>
  )
}
