export const Hero = () => {
  return (
    <section className="relative flex h-screen w-screen min-w-[320px] items-center justify-center">
      <img
        src="/world_green_light_extended4.jpg"
        alt="Green leaves background"
        className="absolute h-full w-full object-cover"
      />
      <div className="z-20 flex w-full flex-col items-center justify-center lg:mx-16 lg:w-[40rem]">
        <img
          src="/re_dry_logo_green_slogan.svg"
          alt=""
          className="m-4 h-20 md:h-24"
        />
        <p className="mt-8 text-center text-lg font-semibold md:text-3xl">
          User Generated Image Library
        </p>
        <p className="mx-4 mt-4 text-center text-base md:w-[500px] md:text-xl lg:mx-0">
          Your destination for stunning, high-quality images. Explore our
          collection and find the perfect visuals for your next project.
        </p>
        <input
          className="mt-12 w-11/12 rounded-xl px-3 py-2 text-center text-base md:w-1/2 lg:w-[28rem]"
          placeholder="Search Image Library"
        ></input>
        <button className="my-2 mt-4 rounded-xl border-2 border-darkBlack bg-primaryGreen px-4 py-1 text-xl font-semibold text-darkBlack lg:w-[28rem]">
          Search
        </button>
        {/* <p className="text-3xl sm:text-red-500 md:text-blue-500 lg:text-orange-500">
          TEXT
        </p> */}
      </div>
    </section>
  )
}
