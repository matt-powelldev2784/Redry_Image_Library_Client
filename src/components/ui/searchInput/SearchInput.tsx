import { handleSearch } from '../../../redux/slice/dataSlice'
import { useAppDispatch } from '../../../redux/hooks/reduxHooks'

interface SearchInputProps {
  optionalClassNames?: string
  placeholderText: string
}

interface HandleSearchProps {
  key?: string
  type: string
}

export const SearchInput = ({
  optionalClassNames,
  placeholderText,
}: SearchInputProps) => {
  const dispatch = useAppDispatch()

  const dispatchHandleSerach = (event: HandleSearchProps) => {
    if (event.key === 'Enter') {
      dispatch(handleSearch(event))
    }
  }

  return (
    <input
      className={`${optionalClassNames}`}
      placeholder={placeholderText}
      onKeyDown={dispatchHandleSerach}
    ></input>
  )
}
