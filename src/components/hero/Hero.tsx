import { SearchInput, Button } from '../ui/ui-index'
import { handleSearch } from '../ui/searchInput/handleSearch'

export const Hero = () => {
  return (
    <section className="relative flex h-screen min-h-[800px] w-screen min-w-[320px] items-start justify-center md:items-center">
      <img
        src="/world_green_light_extended5.jpg"
        alt="Green light bulb background"
        className="absolute h-full w-full object-cover"
      />

      <div className="z-20 mt-20 flex w-full flex-col items-center justify-center md:m-0 lg:mx-16 lg:w-[40rem]">
        <img
          src="/re_dry_logo_green_slogan.svg"
          alt="Redry logo with slogan"
          className="m-4 h-20 md:h-24"
        />

        <h1 className="mt-8 overflow-hidden text-center text-lg font-semibold md:text-3xl">
          User Generated Image Library
        </h1>
        <h2 className="mx-4 mt-4 text-center text-base md:w-[500px] md:text-xl lg:mx-0">
          Your destination for stunning, high-quality images. Explore our
          collection and find the perfect visuals for your next project.
        </h2>

        <div className="mt-12 flex w-11/12 max-w-[500px] flex-col md:w-1/2 lg:w-[500px]">
          <SearchInput
            inputClassNames="w-full rounded-xl px-3 py-2 text-center text-base"
            placeholderText="Search Image Library"
          />

          <Button
            onClick={handleSearch}
            optionalClasses="w-full my-2 mt-4 rounded-xl border-2 border-darkBlack bg-primaryGreen px-4 py-1 text-xl font-semibold text-darkBlack"
            buttonText="Search"
          />
        </div>
      </div>
    </section>
  )
}
