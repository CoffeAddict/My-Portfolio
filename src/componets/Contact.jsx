import '../styles/contact.css'
import React from 'react'
import { Icons } from "./Icons"
import { Title } from "./Title"
import contactList from '../json/contact.json'
import useGAEventTracker from '../hooks/useGAEventTracker'

export const Contact = React.forwardRef((props, ref) => {
    const { contactMethods } = contactList
    const currentPlatform = navigator?.userAgentData?.platform

    // Google Analytics tracking
    const gaEventTracker = useGAEventTracker('Contact')
    const handleLinkClick = (linkTitle) => gaEventTracker(`link_click_${linkTitle}`)

    return (
        <section className="contact" ref={ref}>
            <Icons iconName={'svg-13'}/>
            <Title text="Contact" elementType="h2"/>
            <p>Feel free to reach out! <br /> Here's how you can get in contact with me:</p>
            <ul className="contact-list">
                {contactMethods.map((contact, i) => {
                    return currentPlatform === contact.excludePlatform ? null : (
                        <li key={i}>
                            <a onClick={() => handleLinkClick(contact.title)} href={contact.link} target='_blank'>{contact.title}</a>
                        </li>
                    )
                })}
            </ul>
            <div className="final-comment">made with&nbsp;&nbsp;💙&nbsp;&nbsp;using react</div>
        </section>
    )
})