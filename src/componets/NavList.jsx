import { UseNavigation } from '../hooks/useNavigation'
import { NavItem } from './NavItem'
import tabList from '../json/tab-list.json'
import { useEffect } from 'react'

export function NavList ({refList}) {
    const tabs = tabList.tabs
    const { currentTab, handleTabClick } = UseNavigation(tabList, refList)

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