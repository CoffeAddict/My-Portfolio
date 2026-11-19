import '../styles/welcome.css'
import React from 'react'
import { Icons } from "./Icons"
import { Title } from "./Title"

export const Welcome = React.forwardRef(function Welcome (_props, ref) {
    return (
        <section className="welcome" ref={ref}>
            <Icons iconName={'svg-6'}/>
            <Title text="Welcome"/>
            <p> Hi, I'm Andrés, a full-stack developer from Argentina. <br/> Explore around and get to know me and my work a bit better! </p>
            <Icons iconName={'svg-7'}/>
        </section>
    )
})
