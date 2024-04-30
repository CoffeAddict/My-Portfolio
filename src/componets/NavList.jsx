import { useState } from 'react'
import { NavItem } from './NavItem'
import '../styles/navList.css'
import tabList from '../mocks/tab-list.json'

export function NavList () {
    const [currentTab, setCurrenttab] = useState(0)

    const tabs = tabList.tabs

    const handleTabClick = (tabId) => {
        setCurrenttab(tabId)
    }

    return (
        <ul className="nav">
            {tabs.map((tab, i) => (
                <NavItem
                    key={i}
                    tabId={i}
                    title={tab.title}
                    icon={tab.icon}
                    currentTab={currentTab}
                    onClick={(tabId) => handleTabClick(tabId)}/>
            ))}
        </ul>
    )
}