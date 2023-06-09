import { handleSearch } from '../utils/handleSerach'

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
      onKeyDown={handleSearch}
    ></input>
  )
}
