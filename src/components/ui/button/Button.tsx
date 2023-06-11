import React from 'react'

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  optionalClasses?: string
  buttonText: string
}

export const Button = ({
  onClick,
  optionalClasses,
  buttonText,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl border-2 border-darkBlack bg-primaryGreen font-semibold text-darkBlack ${optionalClasses}`}
    >
      {buttonText}
    </button>
  )
}
