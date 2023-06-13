import { SearchInput } from '../ui/ui-index'

export const SearchResultsNav = () => {
  return (
    <div className="realative z-50 flex h-20 w-full items-center justify-between gap-4 bg-primaryGreen">
      <div className="ml-8 flex w-7/12 flex-row gap-4">
        <img
          className="w-12"
          src="/re_dry_flower_circle_black.svg"
          alt="Redry logo"
        />
        <SearchInput
          optionalClassNames="w-full rounded-xl px-3 py-2 text-left text-base bg-slate-100 outline-none border-2 focus:border-slate-500"
          placeholderText="Search Image Library"
        />
      </div>

      <div className="m-8 flex flex-row gap-8">
        <p className="p-1 px-2">Developer API</p>
        <p className="rounded border-2 border-darkBlack/75 p-1 px-2">
          Upload Image
        </p>
      </div>
    </div>
  )
}
