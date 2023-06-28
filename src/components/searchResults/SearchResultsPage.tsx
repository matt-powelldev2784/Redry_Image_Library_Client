import { NavBar } from '../navBar/NavBar'
import { SearchNav } from '../../ui/ui-index'
import { SearchResults } from './components/SearchResults'
import { useAppSelector } from '../../redux/hooks/reduxHooks'

export const SearchResultsPage = () => {
  const currentSearchTerm = useAppSelector(
    (state) => state.dataReducer.searchTerm
  )

  return (
    <>
      <NavBar />
      <SearchNav />
      <section className="min-h-screen">
        <div className="mx-8 mt-4 flex flex-wrap items-center justify-center overflow-hidden">
          <div className="flex w-full flex-row items-center justify-center">
            <img
              className="m-2 h-6"
              src="/search_dark_green.svg"
              alt="search icon"
            />
            <h1 className="overflow-y-hidden text-center text-2xl">
              {currentSearchTerm
                ? `Search Results for: ${currentSearchTerm}`
                : 'Random Images'}
            </h1>
          </div>
        </div>
        <SearchResults />
      </section>
    </>
  )
}
