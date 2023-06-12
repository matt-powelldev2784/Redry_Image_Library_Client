import { Hero, Nav, HomeContent } from './components'
import { store } from './redux/store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        <Hero />
        <HomeContent />
      </div>
    </Provider>
  )
}

export default App
