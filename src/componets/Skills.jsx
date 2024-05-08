import React from 'react'
import { Icons } from "./Icons"
import { Title } from "./Title"

export const Skills = React.forwardRef((props, ref) => {
    return (
        <section className="skills" ref={ref}>
            <Icons iconName={'svg-11'}/>
            <Title text="Skills" elementType="h2"/>
            <p>Here's a peek into my preferred tech stack (you can check the rest of it on my <a href="https://github.com/CoffeAddict" target="_blank">GitHub profile 😉</a>). <br /> Dive in and see what powers my projects:</p>
        </section>
    )
})