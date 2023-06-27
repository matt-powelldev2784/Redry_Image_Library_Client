import { render, screen, fireEvent } from '@testing-library/react'
import { ImageItem } from '../ImageItem'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../../../redux/slice/dataSlice'

const mockStore = configureStore({
  reducer: {
    dataReducer,
  },
})

const imageData = {
  thumbnailPath: '/test-image.png',
  uploadedBy: 'Test User',
  description: 'Test Description',
  _id: 'test-id',
  path: 'www.google.com/image.jpg',
  tags: ['test1', 'test2'],
}

const ImageItemComponent = (
  <Provider store={mockStore}>
    <ImageItem imageData={imageData} />
  </Provider>
)

describe('ImageItem', () => {
  test('renders image and shows download button on hover', () => {
    render(ImageItemComponent)

    const image = screen.getByAltText('Test Description')
    expect(image).toBeInTheDocument()

    fireEvent.mouseOver(image)

    const downloadButton = screen.getByRole('button', { name: /download/i })
    expect(downloadButton).toBeInTheDocument()
  })
})
