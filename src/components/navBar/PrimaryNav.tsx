import { useNavigate } from 'react-router-dom'

export const PrimaryNav = () => {
  const navigate = useNavigate()

  const handleNavigateClick = (route: string) => {
    navigate(route)
  }

  const handleHrefClick = (route: string) => {
    window.location.href = route
  }

  return (
    <nav className="absolute z-50 flex h-20 w-full min-w-[320px] items-center justify-center gap-4 bg-lightGrey/50">
      <button
        className="p-1 px-2"
        onClick={() => {
          handleHrefClick(
            'https://github.com/matt-powelldev2784/AWS_EC2_Lamda_Image_Library'
          )
        }}
      >
        Developer API
      </button>
      <button
        className="rounded border-2 border-darkBlack/75 p-1 px-2"
        onClick={() => handleNavigateClick('/upload-image')}
      >
        Upload Image
      </button>
    </nav>
  )
}
