import {
  HomePage,
  SearchResultsPage,
  UploadImagePage,
} from './components/componentIndex'
import { store } from './redux/store/store'
import { Provider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/upload-image" element={<UploadImagePage />} />
        </Routes>
      </div>
    </Provider>
  )
}

export default App
