import { useState, ChangeEvent } from 'react'
import { handleSearch, setSearchTerm } from '../../redux/slice/dataSlice'
import { useAppDispatch } from '../../redux/hooks/reduxHooks'
import { useNavigate } from 'react-router-dom'

interface SearchInputProps {
  inputClassNames?: string
  wrapperClassNames?: string
  placeholderText: string
}

export const SearchInput = ({
  inputClassNames,
  wrapperClassNames,
  placeholderText,
}: SearchInputProps) => {
  const [searchText, setSearchText] = useState('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value
    setSearchText(searchText)
  }

  const dispatchHandleSearch = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      dispatch(setSearchTerm(searchText))
      dispatch(handleSearch(searchText))
      navigate('/search-results')
    }
  }

  return (
    <div className={`relative h-full w-full ${wrapperClassNames}`}>
      <img src="/search.svg" alt="" className="absolute left-0 h-full" />

      <input
        id="search-input"
        name="search-input"
        className={`h-full w-full rounded-xl border-2 border-slate-500 outline-none focus:border-2 focus:border-slate-800 ${inputClassNames}`}
        placeholder={placeholderText}
        onKeyDown={dispatchHandleSearch}
        onChange={onInputChange}
        type="search"
      ></input>
    </div>
  )
}
