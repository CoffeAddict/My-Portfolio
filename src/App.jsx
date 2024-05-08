import './styles/app.css'
import { useRef } from 'react'
import { NavList } from './componets/NavList'
import { Welcome } from './componets/Welcome'
import { AboutMe } from './componets/AboutMe'
import { Projects } from './componets/Projects'
import { Skills } from './componets/Skills'

function App() {
  const refList = {
    welcomeRef: useRef(null),
    aboutMeRef: useRef(null),
    projectsRef: useRef(null),
    skillsRef: useRef(null)
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
          {/* <Skills ref={refList.skillsRef}/> */}
        </main>
      </div>
    </>
  )
}

export default App
