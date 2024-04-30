import { useState } from 'react'
import { NavItem } from './NavItem'
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
                    icon={tab.icon}
                    title={tab.title}
                    currentTab={currentTab}
                    onClick={(tabId) => handleTabClick(tabId)}/>
            ))}
        </ul>
    )
}