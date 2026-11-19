import '../styles/about-me.css'

import { Icons } from "./Icons"
import React from 'react'
import { Title } from "./Title"
import useGAEventTracker from '../hooks/useGAEventTracker'

export const AboutMe = React.forwardRef(function AboutMe (_props, ref) {
    // Google Analytics tracking
    const gaEventTracker = useGAEventTracker('About Me')
    const handleLinkClick = () => gaEventTracker('link_click_scalestack')

    return (
        <section className="about-me" ref={ref}>
            <Icons iconName={'svg-2'}/>
            <Title text="About Me" elementType="h2"/>
            <div className="text-container">
                <p>
                    I'm Andrés Rodríguez, a full-stack developer based in Buenos Aires. I've been building web products since 2018, from Shopify storefronts and digital newspapers to AI-powered workflows.
                </p>
                <Icons iconName={'svg-8'}/>
            </div>
            <div className="text-container">
                <p>
                    I started in frontend development. At <a onClick={handleLinkClick} href="https://scalestack.ai/" target="_blank" rel="noopener noreferrer">Scalestack</a>, my work grew from building React and TypeScript interfaces to developing the Python APIs, background services, and AWS data pipelines behind them.
                </p>
                <Icons iconName={'svg-9'}/>
            </div>
            <div className="text-container">
                <p>
                    I'm also pursuing a degree in Physics at the Universidad de Buenos Aires. In my spare time, I enjoy playing video games.
                </p>
                <Icons iconName={'svg-10'}/>
            </div>
        </section>
    )
})
