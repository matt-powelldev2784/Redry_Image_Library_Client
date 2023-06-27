import { render, screen, act } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

describe('App', () => {
  it('renders the home page by default', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      )
    })

    expect(screen.getByText('User Generated Image Library')).toBeInTheDocument()
  })

  it('renders the search results page when the URL is /search-results', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/search-results']}>
          <App />
        </MemoryRouter>
      )
    })

    expect(screen.getByAltText('search icon')).toBeInTheDocument()
  })

  it('renders the upload image page when the URL is /upload-image', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/upload-image']}>
          <App />
        </MemoryRouter>
      )
    })

    expect(screen.getByText('Drag & Drop your image here')).toBeInTheDocument()
  })
})
