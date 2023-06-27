import { render, fireEvent, screen } from '@testing-library/react'
import { SearchInput } from '../SearchInput'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}))

describe('SearchInput', () => {
  const mockStore = configureStore({
    reducer: () => ({}),
    middleware: [thunk],
  })

  const searchInuptComponent = (
    <Provider store={mockStore}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<SearchInput placeholderText="Test Placeholder" />}
          />
        </Routes>
      </Router>
    </Provider>
  )

  it('renders the search input with the correct placeholder text', () => {
    render(searchInuptComponent)

    expect(screen.getByPlaceholderText('Test Placeholder')).toBeInTheDocument()
  })

  it('updates the search text when the input value is changed', () => {
    render(searchInuptComponent)

    const input = screen.getByPlaceholderText('Test Placeholder')
    fireEvent.change(input, { target: { value: 'test' } })

    expect(input).toHaveValue('test')
  })

  it('calls the handleSearch function when the enter key is pressed', () => {
    render(searchInuptComponent)

    const input = screen.getByPlaceholderText('Test Placeholder')
    fireEvent.keyDown(input, { key: 'Enter' })

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/search-results')
  })
})
