import '../styles/contact.css'
import React from 'react'
import { Icons } from "./Icons"
import { Title } from "./Title"
import contactList from '../json/contact.json'
import useGAEventTracker from '../hooks/useGAEventTracker'
import { getPlatform } from '../utils/getPlatform'

export const Contact = React.forwardRef(function Contact (_props, ref) {
    const { contactMethods } = contactList
    const currentPlatform = getPlatform()

    // Google Analytics tracking
    const gaEventTracker = useGAEventTracker('Contact')
    const handleLinkClick = (linkTitle) => gaEventTracker(`link_click_${linkTitle}`)

    return (
        <section className="contact" ref={ref}>
            <Icons iconName={'svg-13'}/>
            <Title text="Contact" elementType="h2"/>
            <p>Feel free to reach out! <br /> Here's how you can get in contact with me:</p>
            <ul className="contact-list">
                {contactMethods.map((contact) => {
                    if (currentPlatform === contact.excludePlatform) return null

                    // mailto:/tel: are handed off to an external handler without unloading
                    // the page, so target="_blank" only leaves a stray blank tab (Firefox/Safari)
                    const isProtocolLink = /^(mailto:|tel:)/i.test(contact.link)
                    const newTabProps = isProtocolLink ? {} : { target: '_blank', rel: 'noopener noreferrer' }

                    return (
                        <li key={contact.title}>
                            <a onClick={() => handleLinkClick(contact.title)} href={contact.link} {...newTabProps}>{contact.title}</a>
                        </li>
                    )
                })}
            </ul>
            <div className="final-comment">made with&nbsp;&nbsp;💙&nbsp;&nbsp;using react</div>
        </section>
    )
})