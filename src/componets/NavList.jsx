import { useState } from 'react'
import { NavItem } from './NavItem'
import './NavList.css'

export function NavList () {
    const [currentTab, setCurrenttab] = useState(0)

    const tabList = [
        {
            title: 'home',
            icon: 'svg-1'
        },
        {
            title: 'about me',
            icon: 'svg-2'
        },
        {
            title: 'projects',
            icon: 'svg-3'
        },
        {
            title: 'skilss',
            icon: 'svg-4'
        },
        {
            title: 'contact',
            icon: 'svg-5'
        }
    ]

    const handleTabClick = (tabId) => {
        setCurrenttab(tabId)
    }

    return (
        <ul className="nav">
            {tabList.map((tab, i) => (
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