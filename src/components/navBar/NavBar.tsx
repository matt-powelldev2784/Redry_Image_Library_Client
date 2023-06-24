import { useNavigate } from 'react-router-dom'
import { handleHrefClick } from '../../lib/lib-index'
import { NavItem } from './NavItem'

export const NavBar = () => {
  const navigate = useNavigate()

  const githublink =
    'https://github.com/matt-powelldev2784/AWS_EC2_Lamda_Image_Library'

  return (
    <nav className="relative z-50 flex w-screen min-w-[320px] flex-wrap items-center justify-center bg-white">
      <div className="flex w-full min-w-[320px] items-center justify-between p-3 pl-3 pr-3 md:pr-5">
        <a href="/">
          <img
            className="h-7 md:ml-4 md:h-10"
            src="/re_dry_logo_green.svg"
            alt="Redry logo"
          />
        </a>

        <div className="flex items-center justify-center gap-4 md:gap-8">
          <NavItem
            onClick={() => {
              handleHrefClick(githublink)
            }}
            imgPath="/cog.svg"
            text="Developer Api"
          />

          <NavItem
            onClick={() => navigate('/upload-image')}
            imgPath="/upload_simple.svg"
            text="Upload Image"
          />
        </div>
      </div>
    </nav>
  )
}
