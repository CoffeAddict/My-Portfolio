import { useState, useEffect } from "react"

export function UseNavigation (tabs, refList) {
    const [currentTab, setCurrenttab] = useState(0);
    const { mainContentRef, welcomeRef, aboutMeRef } = refList

    useEffect(() => {
        const content = mainContentRef.current

        const handleScroll = () => {}

        content.addEventListener('scroll', handleScroll)

      return () => {
        content.removeEventListener('scroll', handleScroll)
      }
    }, [])

    const handleTabClick = (tabIndex) => {
        setCurrenttab(tabIndex)

        const refValues = Object.values(refList)
        const tabRef = refValues[tabIndex + 1] // Because refList also contains mainContentRef
        const tabEl = tabRef.current

        console.log(tabEl)

        tabEl.scrollIntoView({behavior: 'smooth'})
    }

    const getSectionsOffset = () => {
        
    }

    return { currentTab, handleTabClick }
}