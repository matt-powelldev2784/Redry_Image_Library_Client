import { SearchInput } from '../ui-index'

export const SearchNav = () => {
  return (
    <div className="flex w-full items-center justify-center  bg-primaryGreen md:justify-between md:pl-1 md:pr-5">
      <SearchInput
        wrapperClassNames="m-2 w-[94%] max-w-[500px] md:m-4"
        inputClassNames="w-full text-center md:pl-12 md:text-left min-w-[280px] p-1 md:p-2 rounded-xl text-left text-base outline-none border-2 border-white focus:border-darkBlack"
        placeholderText="Search Image Library"
      />
      <button className="hidden h-8 items-center justify-center rounded border-2 border-darkBlack p-2 md:flex">
        <img className="h-5" src="/search_dark_black.svg" alt="Redry logo" />
        <p className="pl-2">Advanced Search</p>
      </button>
    </div>
  )
}
