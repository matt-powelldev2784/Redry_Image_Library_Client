import { render, fireEvent, screen } from '@testing-library/react'
import { InputField } from '../InputField'

describe('InputField', () => {
  const mockFormik = {
    handleChange: jest.fn(),
    handleBlur: jest.fn(),
    values: {},
    touched: {},
    errors: {},
  }

  const inputField = (
    <InputField
      formik={mockFormik}
      htmlFor="test"
      labelText="Test Label"
      inputType="text"
    />
  )

  it('renders the input field with the correct label and type', () => {
    render(inputField)

    expect(screen.getByLabelText('Test Label')).toBeInTheDocument()
    expect(screen.getByLabelText('Test Label')).toHaveAttribute('type', 'text')
  })

  it('calls the formik handleChange function when the input value is changed', () => {
    render(
      <InputField
        formik={mockFormik}
        htmlFor="test"
        labelText="Test Label"
        inputType="text"
      />
    )

    const input = screen.getByLabelText('Test Label')
    fireEvent.change(input, { target: { value: 'test' } })

    expect(mockFormik.handleChange).toHaveBeenCalled()
  })

  it('calls the formik handleBlur function when the input loses focus', () => {
    render(
      <InputField
        formik={mockFormik}
        htmlFor="test"
        labelText="Test Label"
        inputType="text"
      />
    )

    const input = screen.getByLabelText('Test Label')
    fireEvent.blur(input)

    expect(mockFormik.handleBlur).toHaveBeenCalled()
  })

  it('displays the error element when the input goes into focus and then into blur', () => {
    render(
      <InputField
        formik={{
          ...mockFormik,
          touched: { test: true },
          errors: { test: 'Test Error' },
        }}
        htmlFor="test"
        labelText="Test Label"
        inputType="text"
      />
    )

    const input = screen.getByLabelText('Test Label')
    fireEvent.focus(input)
    fireEvent.blur(input)

    expect(screen.getByText('Test Error')).toBeInTheDocument()
  })
})
