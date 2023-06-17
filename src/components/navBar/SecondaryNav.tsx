import { SearchInput } from '../ui/ui-index'

export const SecondaryNav = () => {
  return (
    <div className="relative z-50 flex h-fit w-full min-w-[320px] flex-wrap items-center justify-center bg-primaryGreen md:justify-between">
      {/* <img
        src="/world_green_light_nav_bg1.jpg"
        alt="Green light bulb background"
        className="absolute z-0 h-full w-full object-cover"
      /> */}
      <div className="z-20 flex w-11/12 flex-col items-center justify-center md:ml-2 md:w-fit md:flex-row">
        <img
          className="mb-2 mt-3 hidden w-12 md:mr-2 md:block"
          src="/re_dry_flower_black.svg"
          alt="Redry logo"
        />
        <img
          className="mb-2 mt-3 block h-10 md:hidden"
          src="/re_dry_logo_whte_flower.svg"
          alt="Redry logo"
        />
        <SearchInput
          optionalClassNames="w-full min-w-[280px] md:w-[400px] lg:w-[600px] mb-3 p-2 md:m-0 rounded-xl text-left text-base bg-slate-100 outline-none border-2 border-white focus:border-darkBlack"
          placeholderText="Search Image Library"
        />
      </div>

      <div className="m-4 hidden flex-row gap-4 md:z-10 md:mr-8 md:flex">
        <p className="p-1 px-2">Developer API</p>
        <p className="rounded border-2 border-darkBlack/75 p-1 px-2">
          Upload Image
        </p>
      </div>
    </div>
  )
}
