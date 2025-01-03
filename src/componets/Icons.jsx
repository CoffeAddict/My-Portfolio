import React from 'react'
import '../styles/icons.css'
import { toPascalCase } from "../utils/textTransform"

export function Icons({iconName}) {
    const iconURL = `../assets/svg/${iconName}.svg`;
    const iconStyles = { maskImage: `url(${iconURL})` }
    const formattedName = toPascalCase(iconName)

    return <span title={formattedName} aria-label={iconName} className={`icon icon-${iconName}`} style={iconStyles}/>
}