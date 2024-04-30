import React from 'react'
import '../styles/icons.css'

export function Icons({iconName}) {
    const iconURL = `../assets/svg/${iconName}.svg`;
    const iconStyles = { maskImage: `url(${iconURL})` }

    return (
        <>
            <span
                className={`icon icon-${iconName}`}
                style={iconStyles}>
            </span>
        </>
    )
}