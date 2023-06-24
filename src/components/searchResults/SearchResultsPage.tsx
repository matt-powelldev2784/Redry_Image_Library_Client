import { NavBar } from '../navBar/NavBar'
import { SearchNav } from '../../ui/ui-index'
import { SearchResults } from './SearchResults'
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
        <h1 className="mx-8 mt-4 overflow-y-hidden text-center text-2xl">
          Search Results for: {currentSearchTerm}
        </h1>
        <SearchResults />
      </section>
    </>
  )
}
