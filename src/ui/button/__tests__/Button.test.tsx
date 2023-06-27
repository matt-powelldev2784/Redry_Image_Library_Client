import { render, fireEvent, screen } from '@testing-library/react'
import { Button } from '../Button'

describe('Button', () => {
  it('renders the button with the correct text', () => {
    render(<Button buttonText="Test Button" />)

    expect(screen.getByText('Test Button')).toBeInTheDocument()
  })

  it('calls the onClick function when the button is clicked', () => {
    const mockOnClick = jest.fn()
    render(<Button buttonText="Test Button" onClick={mockOnClick} />)

    const button = screen.getByText('Test Button')
    fireEvent.click(button)

    expect(mockOnClick).toHaveBeenCalled()
  })

  it('renders the button with the correct type', () => {
    render(<Button buttonText="Test Button" type="submit" />)

    expect(screen.getByText('Test Button')).toHaveAttribute('type', 'submit')
  })
})
