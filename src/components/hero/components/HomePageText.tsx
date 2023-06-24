export const HomePageText = () => {
  return (
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
  )
}
