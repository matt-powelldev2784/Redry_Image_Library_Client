export const SearchText = () => {
  return (
    <div className="relative mb-2 flex w-11/12 flex-col items-center justify-center overflow-hidden rounded-lg bg-red-500 p-2 sm:hidden md:block md:w-[30rem]">
      <p className="text-red overflow-hidden text-center text-white">
        Suggested user journey for users browsing portfolio:
      </p>
      <p className="overflow-hidden text-center text-white">
        Search for "happy" or "animal" to preview the search feature or click
        the upload image menu to upload your own image.
      </p>
    </div>
  )
}
