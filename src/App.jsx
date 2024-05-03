import './styles/app.css'
import { useRef } from 'react'
import { NavList } from './componets/NavList'
import { Welcome } from './componets/Welcome'
import { AboutMe } from './componets/AboutMe'

function App() {
  const refList = {
    mainContentRef: useRef(null),
    welcomeRef: useRef(null),
    aboutMeRef: useRef(null)
  }

  return (
    <>
      <header>
        <p className="header-logo">{'<Andy/>'}</p>
      </header>
      <div className="main-container">
        <aside>
          <NavList refList={refList}/>
        </aside>
        <main ref={refList.mainContentRef}>
          <Welcome ref={refList.welcomeRef}/>
          <AboutMe ref={refList.aboutMeRef}/>
        </main>
      </div>
    </>
  )
}

export default App
