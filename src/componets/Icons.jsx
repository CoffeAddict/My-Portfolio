import React from 'react'
import './Icons.css'

export function Icons({iconName, color, width, height}) {

    const iconURL = `../assets/svg/${iconName}.svg`;

    const iconStyles = {
        maskImage: `url(${iconURL})`
    }

    return (
        <>
            <span
                className={`icon icon-${iconName}`}
                style={iconStyles}>
            </span>
        </>
    )
}