import '../styles/about-me.css'
import React from 'react'
import { Icons } from "./Icons"
import { Title } from "./Title"
import useGAEventTracker from '../hooks/useGAEventTracker'

export const AboutMe = React.forwardRef((props, ref) => {
    // Google Analytics tracking
    const gaEventTracker = useGAEventTracker('About Me')
    const handleLinkClick = () => gaEventTracker(`link_click_hypercubo`)

    return (
        <section className="about-me" ref={ref}>
            <Icons iconName={'svg-2'}/>
            <Title text="About Me" elementType="h2"/>
            <div className="text-container">
                <p>
                    Hey! I'm Andrés Rodríguez, a front-end developer from Argentina. I've been working on making the Internet a better place since 2018. <br /> Today, I'm at <a onClick={handleLinkClick} href="https://www.dosalcubo.com/" target='_blank'>Dos al Cubo</a>, focused on creating amazing features and enhancing our client's experience.
                </p>
                <Icons iconName={'svg-8'}/>
            </div>
            <div className="text-container">
                <p>
                    Between pixels and code, I'm always eager to explore new frontiers, whether diving into the latest development technologies or scientific topics.
                </p>
                <Icons iconName={'svg-9'}/>
            </div>
            <div className="text-container">
                <p>
                    I'm currently pursuing a degree in Video Game Development to expand my skills and knowledge in the field. In my spare time, I like to play video games, which serves as a hobby and a source of inspiration for my studies.
                </p>
                <Icons iconName={'svg-10'}/>
            </div>
        </section>
    )
})