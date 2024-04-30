import './styles/reset.css'
import './styles/fonts.css'
import './styles/animations.css'
import './styles/app.css'
import './styles/header.css'
import { NavList } from './componets/NavList'

function App() {
  const enableAnimations = true
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
          <textarea name="" id="" cols="100" rows="100"></textarea>
        </main>
      </div>
    </>
  )
}

export default App
