import { SearchInput, Button } from '../../../ui/ui-index'
import { useAppDispatch } from '../../../redux/hooks/reduxHooks'
import { handleSearch, setSearchTerm } from '../../../redux/slice/dataSlice'
import { useNavigate } from 'react-router-dom'

export const Hero = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleButtonSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const elements = form.elements as HTMLFormControlsCollection
    const searchInput = elements.namedItem('search-input') as HTMLInputElement
    const searchText = searchInput.value

    dispatch(handleSearch(searchText))
    dispatch(setSearchTerm(searchText))
    navigate('/search-results')
  }

  return (
    <div className="relative h-[200px] w-screen overflow-y-hidden md:h-[350px]">
      <img
        src="/world_green_light_extended6.jpg"
        alt="Green light bulb background"
        className="absolute h-full w-full object-cover md:h-[400px]"
      />

      <div className="relative flex h-full w-screen items-center justify-center">
        <form
          onSubmit={handleButtonSearch}
          className="relative flex flex-col items-center justify-center md:w-[500px]"
        >
          <div className="flex w-[90%] items-center justify-center ">
            <SearchInput
              wrapperClassNames=""
              inputClassNames="px-3 py-2 text-center text-base"
              placeholderText="Search Image Library"
            />
          </div>
          <div className="mt-2 flex w-full items-center justify-center">
            <Button
              optionalClasses="relative w-[90%] rounded-xl px-4 py-1 text-xl font-semibold text-darkBlack"
              buttonText="Search"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
