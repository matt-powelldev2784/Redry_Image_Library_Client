import {
  Hero,
  PrimaryNav,
  SearchResults,
  UploadImage,
} from './components/componentIndex'
import { store } from './redux/store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PrimaryNav />
        <Hero />
        <SearchResults />
        <UploadImage />
      </div>
    </Provider>
  )
}

export default App
