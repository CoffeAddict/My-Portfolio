import { useNavigation } from '../hooks/useNavigation'
import { NavItem } from './NavItem'
import tabList from '../json/tab-list.json'

export function NavList ({mainRef, refList}) {
    const { tabs } = tabList
    const { currentTab, handleTabClick } = useNavigation(mainRef, refList)

    return (
        <ul className="nav">
            {tabs.map((tab, i) => (
                <NavItem
                    key={tab.title}
                    tabId={i}
                    icon={tab.icon}
                    title={tab.title}
                    currentTab={currentTab}
                    onClick={(i) => handleTabClick(i)}/>
            ))}
        </ul>
    )
}