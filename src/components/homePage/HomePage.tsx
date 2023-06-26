import { NavBar } from '../componentIndex'
import { Hero } from './components/Hero'
import { HomePageText } from './components/HomePageText'
import { SearchResults } from '../searchResults/SearchResults'

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <section className="relative flex min-h-screen w-screen min-w-[320px] flex-col items-center justify-start">
        <Hero />
        <HomePageText />
        <SearchResults randomImages={true} />
      </section>
    </>
  )
}
