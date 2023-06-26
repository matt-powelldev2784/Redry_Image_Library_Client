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

      <div className="flex w-full justify-center">
        <img
          src="/light_circle_trans2.png"
          alt=""
          className="absolute h-48 opacity-40"
        />

        <img
          src="/re_dry_logo_green_slogan.svg"
          alt="Redry logo with slogan"
          className="z-20 mb-16 mt-16 h-16 md:mt-16 md:h-20"
        />
      </div>
    </div>
  )
}
