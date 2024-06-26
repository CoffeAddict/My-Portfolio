import '../styles/welcome.css'
import React from 'react'
import { Icons } from "./Icons"
import { Title } from "./Title"

export const Welcome = React.forwardRef((props, ref) => {
    return (
        <section className="welcome" ref={ref}>
            <Icons iconName={'svg-6'}/>
            <Title text="Welcome"/>
            <p> Explore around and get to know me a bit better. <br/> I'm excited to share my journey with you! </p>
            <Icons iconName={'svg-7'}/>
        </section>
    )
})