import { render, screen, fireEvent } from '@testing-library/react'
import { Hero } from '../Hero'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk'

const mockStore = configureStore({
  reducer: () => ({}),
  middleware: [thunk],
})

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}))

const heroComponent = (
  <Provider store={mockStore}>
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </Router>
  </Provider>
)

test('hero component renders background image, search input and button', () => {
  render(heroComponent)

  const backgroundImage = screen.getByAltText('Green light bulb background')
  expect(backgroundImage).toBeInTheDocument()

  const searchInput = screen.getByRole('searchbox')
  expect(searchInput).toBeInTheDocument()

  const button = screen.getByRole('button')
  expect(button).toBeInTheDocument()
})

test('user can type in search input', () => {
  render(heroComponent)

  const searchInput = screen.getByRole('searchbox') as HTMLInputElement
  expect(searchInput).toBeInTheDocument()

  fireEvent.change(searchInput, { target: { value: 'text' } })

  expect(searchInput.value).toBe('text')
})

test('navigates to search results when enter key pressed from search input', async () => {
  render(heroComponent)

  const searchInput = screen.getByRole('searchbox')
  fireEvent.change(searchInput, { target: { value: 'test' } })

  fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' })

  expect(mockedUsedNavigate).toHaveBeenCalledWith('/search-results')
})

test('navigates to search results when search button is pressed', async () => {
  render(heroComponent)

  const searchInput = screen.getByRole('searchbox')
  fireEvent.change(searchInput, { target: { value: 'test' } })

  const button = screen.getByRole('button')

  fireEvent.click(button)

  expect(mockedUsedNavigate).toHaveBeenCalledWith('/search-results')
})
