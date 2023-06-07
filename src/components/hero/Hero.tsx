export const Hero = () => {
  return (
    <section className="relative flex h-screen w-screen items-center justify-start">
      <img
        src="/world_green_light_full.jpg"
        alt="Green leaves background"
        className="absolute h-full w-full object-cover"
      />
      <div className="z-10 ml-32 flex w-[40rem] flex-col items-start justify-start gap-2">
        <h1 className="text-7xl font-semibold">RE:DRY</h1>
        <p className="text-3xl">Capture the world in a new light.</p>
        <p className="text-justify text-xl">
          Welcome to Redry - your destination for stunning, high-quality images.
          Explore our collection and find the perfect visuals for your next
          project.
        </p>

        <input
          className="mt-4 w-[28rem] rounded-xl px-3 py-2 text-base"
          placeholder="Search Image Library"
        ></input>
        <button className="my-2 rounded-xl bg-primaryGreen px-4 py-1 font-semibold text-darkBlack">
          Search
        </button>
      </div>
    </section>
  )
}
