import { useState } from 'react'
import { NavItem } from './NavItem'
import tabList from '../json/tab-list.json'

export function NavList () {
    const [currentTab, setCurrenttab] = useState(0)

    const tabs = tabList.tabs

    const handleTabClick = (tabIndex) => {
        setCurrenttab(tabIndex)
        const elementSelector = tabs[tabIndex]?.elementSelector
        const element = document.querySelector(elementSelector)
        console.log(element);
        element?.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <ul className="nav">
            {tabs.map((tab, i) => (
                <NavItem
                    key={i}
                    tabId={i}
                    icon={tab.icon}
                    title={tab.title}
                    currentTab={currentTab}
                    onClick={(i) => handleTabClick(i)}/>
            ))}
        </ul>
    )
}