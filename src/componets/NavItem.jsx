import { Icons } from './Icons'

export function NavItem ({title, icon, tabId, currentTab, onClick}) {
    const tabClasses = currentTab == tabId ? 'selected' : ''

    return (
        <li className={tabClasses} onClick={() => onClick(tabId)}>
            <div>{title}</div>
            <Icons iconName={icon}/>
        </li>
    )
}