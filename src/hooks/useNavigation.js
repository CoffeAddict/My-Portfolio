import { useState, useEffect } from "react"
import useGAEventTracker from "./useGAEventTracker"
import tabList from '../json/tab-list.json'

export function UseNavigation (mainRef, refList) {
    const [currentTab, setCurrenttab] = useState(0)
    const [sectionIndex, setSectionIndex] = useState(0)
    const refValues = Object.values(refList)

    const gaEventTracker = useGAEventTracker('Sidebar')

    const handleScroll = () => {
        const mainContentPosition = mainRef.current?.scrollTop

        // Map the sections to get the distance from the bottom of the sections to the top of the scroll area
        const sectionsPositions = refValues.map((elRef, i) => {
            const customOffset = 250 // move action point for better UX
            const offsetTop = elRef?.current?.offsetTop - customOffset
            const clientHeight = elRef?.current?.clientHeight

            return { value: offsetTop + clientHeight, index: i }
        })

        const filteredSections = sectionsPositions.filter(sectionPos => sectionPos.value >= mainContentPosition )
        setSectionIndex(filteredSections[0].index)
    }

    useEffect(() => {
        toggleEventListener(mainRef, handleScroll)
        setCurrenttab(sectionIndex)

      return () => {
        toggleEventListener(mainRef, handleScroll, false)
      }
    }, [sectionIndex])

    const handleTabClick = (tabIndex) => {
        const refValues = Object.values(refList)
        const tabRef = refValues[tabIndex]
        const tabEl = tabRef.current

        const currentTab = tabList.tabs[tabIndex]
        gaEventTracker(`menu_button_click_${currentTab.title}`)

        tabEl.scrollIntoView({behavior: 'smooth'})
    }

    const toggleEventListener = (elRef, func, enable = true) => {
        enable ?
        elRef?.current.addEventListener('scroll', func) :
        elRef?.current.removeEventListener('scroll', func)
    }

    return { currentTab, handleTabClick }
}