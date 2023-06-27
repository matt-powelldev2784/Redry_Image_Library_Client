import { render, screen, fireEvent } from '@testing-library/react'
import { ImageItem } from '../ImageItem'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../../../redux/slice/dataSlice'

const mockImageData = {
  thumbnailPath: '/test-image.png',
  uploadedBy: 'Test User',
  description: 'Test Description',
  _id: 'test-id',
  path: 'www.google.com/image.jpg',
  tags: ['test1', 'test2'],
}

const mockStore = configureStore({
  reducer: {
    dataReducer,
  },
  preloadedState: {
    dataReducer: {
      imageData: [mockImageData],
      isLoading: false,
      totalImagesFound: '',
      totalImagesReturned: '',
      searchTerm: '',
      errors: null,
    },
  },
})

const ImageItemComponent = (
  <Provider store={mockStore}>
    <ImageItem imageData={mockImageData} />
  </Provider>
)

test('renders image and shows download button on hover', () => {
  render(ImageItemComponent)

  const image = screen.getByAltText('Test Description')
  expect(image).toBeInTheDocument()

  fireEvent.mouseOver(image)

  const downloadButton = screen.getByRole('button', { name: /download/i })
  expect(downloadButton).toBeInTheDocument()
})

test('onDownloadClick downloads image', () => {
  const spyWindowOpen = jest.spyOn(window, 'open')
  spyWindowOpen.mockImplementation(jest.fn())

  render(ImageItemComponent)

  const image = screen.getByAltText('Test Description')
  fireEvent.mouseOver(image)

  const downloadButton = screen.getByRole('button', { name: /download/i })
  fireEvent.click(downloadButton)

  expect(spyWindowOpen).toHaveBeenCalledWith(mockImageData.path)
})
