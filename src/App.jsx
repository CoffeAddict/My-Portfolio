import './styles/reset.css'
import './styles/fonts.css'
import './App.css'
import { NavList } from './componets/NavList'

function App() {
  return (
    <>
      <header>
        <p>{'</>'}</p>
      </header>
      <div className="main-container">
        <aside>
          <NavList/>
        </aside>
        <main>Main Cntent</main>
      </div>
    </>
  )
}

export default App
