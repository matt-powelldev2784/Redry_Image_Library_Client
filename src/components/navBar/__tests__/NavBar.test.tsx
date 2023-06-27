import { render, screen, fireEvent } from '@testing-library/react'
import { NavBar } from '../NavBar'
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

const NavBarComponent = (
  <Provider store={mockStore}>
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />} />
      </Routes>
    </Router>
  </Provider>
)

test('renders logo and NavItems', () => {
  render(NavBarComponent)

  const logo = screen.getByAltText('Redry logo')
  expect(logo).toBeInTheDocument()

  const navItems = screen.getAllByRole('button')
  expect(navItems).toHaveLength(3)
})

test('navigates to upload image page when upload image NavItem clicked', () => {
  render(NavBarComponent)

  const uploadImageNavItem = screen.getByText('Upload Image')
  fireEvent.click(uploadImageNavItem)

  expect(mockedUsedNavigate).toHaveBeenCalledWith('/upload-image')
})

test('navigates to developer api page when upload image NavItem clicked', () => {
  render(NavBarComponent)

  const developerApiNavItem = screen.getByText('Developer Api')
  fireEvent.click(developerApiNavItem)

  expect(mockedUsedNavigate).toHaveBeenCalledWith('/upload-image')
})

test('navigates to search images page when upload image NavItem clicked', () => {
  render(NavBarComponent)

  const developerApiNavItem = screen.getByText('Search Images')
  fireEvent.click(developerApiNavItem)

  expect(mockedUsedNavigate).toHaveBeenCalledWith('/upload-image')
})
