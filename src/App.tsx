import { Hero, PrimaryNav, SearchResults } from './components'
import { store } from './redux/store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PrimaryNav />
        <Hero />
        {/* <SearchResults /> */}
      </div>
    </Provider>
  )
}

export default App
