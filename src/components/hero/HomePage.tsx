import { SearchInput, Button } from '../../ui/ui-index'
import { NavBar } from '../componentIndex'
import { useAppDispatch } from '../../redux/hooks/reduxHooks'
import { handleSearch, setSearchTerm } from '../../redux/slice/dataSlice'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
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
    <>
      <NavBar />
      <section className="relative flex min-h-screen w-screen min-w-[320px] flex-col items-center justify-start">
        <div className="relative h-[200px] w-screen overflow-y-hidden md:h-[250px]">
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

        <div className="relative flex w-full flex-col items-center justify-center lg:mx-16 lg:w-[40rem]">
          <h1 className="mt-6 overflow-hidden text-center text-lg font-semibold md:text-3xl">
            User Generated Image Library
          </h1>

          <h2 className="mx-4 mt-2 text-center text-base md:w-[500px] md:text-center md:text-xl lg:mx-0">
            Your destination for stunning, high-quality images. Explore our
            collection and find the perfect visuals for your next project.
          </h2>

          <img
            src="/light_circle_trans2.png"
            alt=""
            className="absolute mt-40 h-48 opacity-40 md:mt-36"
          />

          <img
            src="/re_dry_logo_green_slogan.svg"
            alt="Redry logo with slogan"
            className="z-20 mb-16 mt-20 h-16 md:mt-16 md:h-24"
          />
        </div>
      </section>
    </>
  )
}
