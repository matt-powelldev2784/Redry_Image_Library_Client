import { render, screen } from '@testing-library/react'
import { SearchResults } from '../SearchResults'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../../../../redux/slice/dataSlice'

const mockStore = (initialState: any) =>
  configureStore({
    reducer: {
      dataReducer,
    },
    preloadedState: initialState,
  })

describe('SearchResults', () => {
  test('renders ImageItems', () => {
    const store = mockStore({
      dataReducer: {
        imageData: [
          {
            thumbnailPath: '/test-image-1.png',
            uploadedBy: 'Test User 1',
            description: 'Test Description 1',
            _id: 'test-id-1',
          },
          {
            thumbnailPath: '/test-image-2.png',
            uploadedBy: 'Test User 2',
            description: 'Test Description 2',
            _id: 'test-id-2',
          },
        ],
      },
    })

    render(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    )

    const imageItems = screen.getAllByRole('article')
    expect(imageItems).toHaveLength(2)
  })
})
