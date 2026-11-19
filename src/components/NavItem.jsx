import { Icons } from './Icons'

export function NavItem ({title, icon, tabId, currentTab, onClick}) {
    const tabClasses = currentTab === tabId ? 'selected' : ''

    return (
        <li className={tabClasses}>
            <button type="button" aria-label={title} aria-current={currentTab === tabId ? 'location' : undefined} onClick={() => onClick(tabId)}>
                <span className="nav-label">{title}</span>
                <Icons iconName={icon}/>
            </button>
        </li>
    )
}
