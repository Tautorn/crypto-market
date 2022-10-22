import logo from './assets/logo.png'
import Market from './containers/Market'

function App() {
  return (
    <div>
      <header>
        <img src={logo} alt="logo" width="64px" height="64px" />
      </header>
      <section>
        <Market />
      </section>
    </div>
  )
}

export default App
