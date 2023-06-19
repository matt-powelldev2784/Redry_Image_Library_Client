import { Hero, SearchResults, UploadImage } from './components/componentIndex'
import { store } from './redux/store/store'
import { Provider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/upload-image" element={<UploadImage />} />
        </Routes>
      </div>
    </Provider>
  )
}

export default App
