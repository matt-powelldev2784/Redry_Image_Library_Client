import React from 'react'

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void
  optionalClasses?: string
  type?: 'submit' | 'reset' | 'button'
  buttonText: string
}

export const Button = ({
  onClick,
  optionalClasses,
  buttonText,
  type,
  onSubmit,
}: ButtonProps) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      onSubmit={onSubmit}
      className={`rounded-xl border-2 border-primaryGreen bg-primaryGreen font-semibold text-darkBlack outline-none focus:border-2 focus:border-darkBlack ${optionalClasses}`}
    >
      {buttonText}
    </button>
  )
}
