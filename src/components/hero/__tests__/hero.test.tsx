import { render, screen } from '@testing-library/react'
import { Hero } from '../Hero'

describe('Hero', () => {
  test('renders Hero component', () => {
    render(<Hero />)

    expect(
      screen.getByAltText('Green light bulb background')
    ).toBeInTheDocument()
    expect(screen.getByAltText('Redry logo with slogan')).toBeInTheDocument()
    expect(screen.getByText('User Generated Image Library')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Your destination for stunning, high-quality images. Explore our collection and find the perfect visuals for your next project.'
      )
    ).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Search Image Library')
    ).toBeInTheDocument()
    expect(screen.getByText('Search')).toBeInTheDocument()
  })
})
