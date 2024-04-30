import './styles/app.css'
import { NavList } from './componets/NavList'
import { Welcome } from './componets/Welcome'


function App() {
  return (
    <>
      <header>
        <p className="header-logo">{'<Andy/>'}</p>
      </header>
      <div className="main-container">
        <aside>
          <NavList/>
        </aside>
        <main>
          <Welcome/>
        </main>
      </div>
    </>
  )
}

export default App
