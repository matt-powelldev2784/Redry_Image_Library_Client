import { useNavigate } from 'react-router-dom'

export const SecondaryNav = () => {
  const navigate = useNavigate()

  const handleHrefClick = (route: string) => {
    window.location.href = route
  }

  const handleApiClick = () => {
    handleHrefClick(
      'https://github.com/matt-powelldev2784/AWS_EC2_Lamda_Image_Library'
    )
  }

  const handleNavigateClick = (route: string) => {
    navigate(route)
  }

  return (
    <nav className="relative z-50 flex w-screen min-w-[320px] flex-wrap items-center justify-center bg-white">
      <div className="flex w-full min-w-[320px] items-center justify-between p-3 pl-3 pr-3">
        <img
          className="h-7 md:h-10"
          src="/re_dry_logo_green.svg"
          alt="Redry logo"
        />

        <div className="flex items-center justify-center gap-4 md:gap-8">
          <button onClick={handleApiClick} className="flex flex-col">
            <img className="h-7" src="/cog.svg" alt="" />
            <p className="hidden md:block">Developer Api</p>
          </button>

          <button
            onClick={() => handleNavigateClick('/upload-image')}
            className="flex flex-col"
          >
            <img className="h-7" src="/upload_simple.svg" alt="" />
            <p className="hidden md:block">Upload Image</p>
          </button>
        </div>
      </div>
    </nav>
  )
}
