import { useState, useEffect } from "react"
import useGAEventTracker from "./useGAEventTracker"
import tabList from '../json/tab-list.json'

export function useNavigation (mainRef, refList) {
    const [currentTab, setCurrentTab] = useState(0)

    const gaEventTracker = useGAEventTracker('Sidebar')

    useEffect(() => {
        const mainEl = mainRef.current
        if (!mainEl) return

        const refValues = Object.values(refList)

        const handleScroll = () => {
            const mainContentPosition = mainEl.scrollTop

            // Map the sections to the distance from their bottom to the top of the scroll area
            const sectionsPositions = refValues.map((elRef, i) => {
                const customOffset = 250 // move action point for better UX
                const offsetTop = (elRef?.current?.offsetTop ?? 0) - customOffset
                const clientHeight = elRef?.current?.clientHeight ?? 0

                return { value: offsetTop + clientHeight, index: i }
            })

            const filteredSections = sectionsPositions.filter(sectionPos => sectionPos.value >= mainContentPosition)
            // Once scrolled past every section, keep the last tab highlighted
            const nextTab = filteredSections.length ? filteredSections[0].index : refValues.length - 1
            setCurrentTab(nextTab)
        }

        mainEl.addEventListener('scroll', handleScroll)
        return () => mainEl.removeEventListener('scroll', handleScroll)
    }, [mainRef, refList]) // refs are stable for the lifetime of the app

    const handleTabClick = (tabIndex) => {
        const tabEl = Object.values(refList)[tabIndex]?.current

        const tab = tabList.tabs[tabIndex]
        gaEventTracker(`menu_button_click_${tab.title}`)

        tabEl?.scrollIntoView({ behavior: 'smooth' })
    }

    return { currentTab, handleTabClick }
}
