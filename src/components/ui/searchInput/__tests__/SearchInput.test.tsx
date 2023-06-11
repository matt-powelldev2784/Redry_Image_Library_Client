import { render, screen, fireEvent } from '@testing-library/react'
import { SearchInput } from '../SearchInput'
import { handleSearch } from '../handleSearch'

jest.mock('../handleSearch')

test('input should be in the document', () => {
  render(<SearchInput placeholderText="Search Images" />)
  const inputElement = screen.getByPlaceholderText('Search Images')
  expect(inputElement).toBeInTheDocument()
})

test('calls handleSearch on key down with Enter key after typing text', () => {
  render(<SearchInput placeholderText="Search Images" />)
  const inputElement = screen.getByPlaceholderText('Search Images')

  fireEvent.click(inputElement)
  fireEvent.change(inputElement, { target: { value: 'test' } })
  fireEvent.keyDown(inputElement, {
    key: 'Enter',
    code: 'Enter',
  })

  expect(handleSearch).toHaveBeenCalled()
})
