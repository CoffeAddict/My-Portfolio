import './styles/app.css'
import { useRef } from 'react'
import { NavList } from './componets/NavList'
import { Welcome } from './componets/Welcome'
import { AboutMe } from './componets/AboutMe'
import { Projects } from './componets/Projects'
import { Skills } from './componets/Skills'
import { Contact } from './componets/Contact'

function App() {
  const refList = {
    welcomeRef: useRef(null),
    aboutMeRef: useRef(null),
    projectsRef: useRef(null),
    skillsRef: useRef(null),
    contactRef: useRef(null)
  }

  const mainRef = useRef(null)

  return (
    <>
      <header>
        <p className="header-logo">{'<Andy/>'}</p>
      </header>
      <div className="main-container">
        <aside>
          <NavList
            refList={refList}
            mainRef={mainRef}/>
        </aside>
        <main ref={mainRef}>
          <Welcome ref={refList.welcomeRef}/>
          <AboutMe ref={refList.aboutMeRef}/>
          <Projects ref={refList.projectsRef}/>
          <Skills ref={refList.skillsRef}/>
          <Contact ref={refList.contactRef}/>
        </main>
      </div>
    </>
  )
}

export default App
