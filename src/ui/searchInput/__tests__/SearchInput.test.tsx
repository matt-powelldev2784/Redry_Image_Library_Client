import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { SearchInput } from '../SearchInput'
import * as dataSlice from '../../../redux/slice/dataSlice'
import { configureStore } from '@reduxjs/toolkit'

const mockHandleSearch = jest.fn()
jest.spyOn(dataSlice, 'handleSearch').mockImplementation(mockHandleSearch)

const mockStore = configureStore({
  reducer: () => ({}),
  middleware: [],
})

mockStore.dispatch = jest.fn()

test('input should be in the document', () => {
  render(
    <Provider store={mockStore}>
      <SearchInput placeholderText="Search Images" />
    </Provider>
  )
  const inputElement = screen.getByPlaceholderText('Search Images')
  expect(inputElement).toBeInTheDocument()
})

test('calls handleSearch on key down with Enter key after typing text', () => {
  render(
    <Provider store={mockStore}>
      <SearchInput placeholderText="Search Images" />
    </Provider>
  )
  const inputElement = screen.getByPlaceholderText('Search Images')

  fireEvent.click(inputElement)
  fireEvent.change(inputElement, { target: { value: 'test' } })
  fireEvent.keyDown(inputElement, {
    key: 'Enter',
    code: 'Enter',
  })

  expect(mockHandleSearch).toHaveBeenCalled()

  expect(mockStore.dispatch).toHaveBeenCalledWith(
    mockHandleSearch({
      key: 'Enter',
      type: 'keydown',
    })
  )
})
