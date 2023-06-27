import {
  render,
  screen,
  fireEvent,
  getByRole,
  getByTestId,
} from '@testing-library/react'
import { DropFile } from '../DropFile'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../../../../redux/slice/dataSlice'
import imageUploadReducer from '../../../../redux/slice/imageUploadSlice'

const mockStore = configureStore({
  reducer: {
    dataReducer,
    imageUploadReducer,
  },
})

const mockSetFieldValue = jest.fn()

const mockFormik = {
  values: {
    uploadedBy: '',
    description: '',
    tags: '',
    file: null,
  },
  errors: {},
  touched: {},
  isSubmitting: false,
  isValidating: false,
  submitCount: 0,
  setFieldValue: mockSetFieldValue,
}

const DropFileComponent = (
  <Provider store={mockStore}>
    <DropFile formik={mockFormik} />
  </Provider>
)

test('onSelectFile is called when a file is selected', () => {
  render(DropFileComponent)

  const fileInput = screen.getByTestId('file-input')
  const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' })
  fireEvent.change(fileInput, { target: { files: [file] } })

  expect(mockSetFieldValue).toHaveBeenCalledWith('file', file)
})

test('text chnages to filename when onSelectFile is called', () => {
  render(DropFileComponent)

  const fileInput = screen.getByTestId('file-input')
  const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' })
  fireEvent.change(fileInput, { target: { files: [file] } })

  const fileNameElement = screen.getByTestId('file-name-text')
  expect(fileNameElement).toBeInTheDocument()

  expect(mockSetFieldValue).toHaveBeenCalledWith('file', file)
})

test('error message is displayed when file is too big', () => {
  render(DropFileComponent)

  const fileInput = screen.getByTestId('file-input')
  const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' })
  Object.defineProperty(file, 'size', { value: 1024 * 1024 * 3 }) // Set the file size to be bigger than the max allowed size
  fireEvent.change(fileInput, { target: { files: [file] } })

  expect(screen.getByText('File must be smaller than 2MB')).toBeInTheDocument()
})

test('changes the background color of the label when a file is dragged into it', () => {
  render(DropFileComponent)

  const label = screen.getByTestId('file-label')
  expect(label).not.toHaveClass('bg-primaryGreen/50')

  fireEvent.dragEnter(label)
  expect(label).toHaveClass('bg-primaryGreen/50')
})
