import { useState, ChangeEvent } from 'react'
import { handleSearch } from '../../../redux/slice/dataSlice'
import { useAppDispatch } from '../../../redux/hooks/reduxHooks'

interface SearchInputProps {
  optionalClassNames?: string
  placeholderText: string
}

export const SearchInput = ({
  optionalClassNames,
  placeholderText,
}: SearchInputProps) => {
  const [searchText, setSearchText] = useState('')
  const dispatch = useAppDispatch()

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value
    setSearchText(searchText)
  }

  const dispatchHandleSerach = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      dispatch(handleSearch(searchText))
    }
  }

  return (
    <input
      className={`${optionalClassNames}`}
      placeholder={placeholderText}
      onKeyDown={dispatchHandleSerach}
      onChange={onInputChange}
    ></input>
  )
}
