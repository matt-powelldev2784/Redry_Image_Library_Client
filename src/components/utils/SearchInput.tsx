import React from 'react'

interface SearchInputProps {
  optionalClassNames?: string
  placeholderText: string
}

export const SearchInput = ({
  optionalClassNames,
  placeholderText,
}: SearchInputProps) => {
  return (
    <input
      className={`${optionalClassNames}`}
      placeholder={placeholderText}
    ></input>
  )
}
