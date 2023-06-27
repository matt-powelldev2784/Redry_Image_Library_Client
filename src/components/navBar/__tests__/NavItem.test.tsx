import { render, screen, fireEvent } from '@testing-library/react'
import { NavItem } from '../NavItem'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk'

const mockStore = configureStore({
  reducer: () => ({}),
  middleware: [thunk],
})

const onClick = jest.fn()

const NavItemComponent = (
  <Provider store={mockStore}>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <NavItem
              onClick={onClick}
              text="Test Text"
              imgPath="/test-image.png"
            />
          }
        />
      </Routes>
    </Router>
  </Provider>
)

test('renders image and text', () => {
  render(NavItemComponent)

  const image = screen.getByRole('img')
  expect(image).toHaveAttribute('src', '/test-image.png')

  const text = screen.queryByText('Test Text')
  expect(text).toBeInTheDocument()
})

test('calls onClick when clicked', () => {
  render(NavItemComponent)

  const button = screen.getByRole('button')
  console.log('button', button)
  fireEvent.click(button)

  expect(onClick).toHaveBeenCalledTimes(1)
})
