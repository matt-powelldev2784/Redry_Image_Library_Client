import { render, screen, fireEvent } from '@testing-library/react'
import { Form } from '../Form'
import { useFormikProps } from '../../hooks/useFormik'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../../../../redux/slice/dataSlice'
import imageUploadReducer from '../../../../redux/slice/imageUploadSlice'

jest.mock('../../hooks/useFormik')
jest.mock('../../../../redux/hooks/reduxHooks')

const useFormikPropsMock = useFormikProps as jest.Mock

const mockStore = configureStore({
  reducer: {
    dataReducer,
    imageUploadReducer,
  },
})

const FormComponent = (
  <Provider store={mockStore}>
    <Form />
  </Provider>
)

describe('Form', () => {
  beforeEach(() => {
    useFormikPropsMock.mockReturnValue({
      handleSubmit: jest.fn(),
      values: {
        uploadedBy: '',
        description: '',
        tags: '',
        file: null,
      },
      setFieldValue: jest.fn(),
      touched: {},
      errors: {},
    })
  })

  it('renders all the elements correctly', () => {
    render(FormComponent)

    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toHaveTextContent('Upload Image')
    expect(h1).toBeInTheDocument()

    expect(screen.getByLabelText('Uploader Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Image Description')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Image Tags')).toBeInTheDocument()

    const submitButton = screen.getByRole('button', { name: 'Upload Image' })
    expect(submitButton).toBeInTheDocument()
  })

  it('calls the handleSubmit function when the form is submitted', () => {
    const handleSubmit = jest.fn()
    useFormikPropsMock.mockReturnValue({
      handleSubmit,
      values: {
        uploadedBy: '',
        description: '',
        tags: '',
        file: null,
      },
      setFieldValue: jest.fn(),
      touched: {},
      errors: {},
    })

    render(FormComponent)
    const submitButton = screen.getByRole('button', { name: 'Upload Image' })
    fireEvent.click(submitButton)
    expect(handleSubmit).toHaveBeenCalled()
  })
})
