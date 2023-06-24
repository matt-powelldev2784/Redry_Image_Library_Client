import { render, screen } from '@testing-library/react'
import { Hero } from '../HomePage'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const mockStore = configureStore({
  reducer: () => ({}),
  middleware: [],
})

test('renders Hero component', () => {
  render(
    <Provider store={mockStore}>
      <Hero />
    </Provider>
  )

  const backgroundImage = screen.getByAltText('Green light bulb background')
  expect(backgroundImage).toBeInTheDocument()

  const h1 = screen.getByRole('heading', { level: 1 })
  expect(h1).toBeInTheDocument()

  const h2 = screen.getByRole('heading', { level: 2 })
  expect(h2).toBeInTheDocument()
})
