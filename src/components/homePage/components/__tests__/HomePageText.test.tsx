import { render, screen } from '@testing-library/react'
import { HomePageText } from '../HomePageText'
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

const homePageTextComponent = (
  <Provider store={mockStore}>
    <Router>
      <Routes>
        <Route path="/" element={<HomePageText />} />
      </Routes>
    </Router>
  </Provider>
)

test('hero component renders background image, search input and button', () => {
  render(homePageTextComponent)

  const h1 = screen.getByRole('heading', { level: 1 })
  expect(h1).toHaveTextContent('User Generated Image Library')

  const h2 = screen.getByRole('heading', { level: 2 })
  expect(h2).toHaveTextContent(
    'Your destination for stunning, high-quality images. Explore our collection and find the perfect visuals for your next project.'
  )

  const images = screen.getAllByRole('img')
  expect(images).toHaveLength(2)
})
