import { NavBar } from '../navBar/NavBar'
import { SearchNav } from '../../ui/ui-index'
import { SearchResults } from './SearchResults'

export const SearchResultsPage = () => {
  return (
    <>
      <NavBar />
      <SearchNav />
      <section className="min-h-screen">
        <SearchResults />
      </section>
    </>
  )
}
