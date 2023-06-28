interface NavItemProps {
  onClick: () => void
  text: string
  imgPath: string
}

export const NavItem = ({ onClick, text, imgPath }: NavItemProps) => {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-8">
      <button
        onClick={onClick}
        className="flex flex-col items-center justify-center"
      >
        <img className="h-7" src={imgPath} alt="" />
        <p className="hidden md:block">{text}</p>
      </button>
    </div>
  )
}
