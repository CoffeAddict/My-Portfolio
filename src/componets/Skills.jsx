import '../styles/skills.css'
import React from 'react'
import { Icons } from "./Icons"
import { Title } from "./Title"
import techList from '../json/tech-stack.json'

export const Skills = React.forwardRef((props, ref) => {
    const { techStack } = techList

    console.log(techStack);

    return (
        <section className="skills" ref={ref}>
            <Icons iconName={'svg-12'}/>
            <Title text="Skills" elementType="h2"/>
            <p>Here's a peek into my preferred tech stack (you can check the rest of it on my <a href="https://github.com/CoffeAddict" target="_blank">GitHub profile 😉</a>). <br /> Dive in and see what powers my projects:</p>
            <div className="tech-stack-container">
                <Icons iconName={'big-square'}/>
                <ul className="tech-list">
                    {techStack.map(tech => {
                        return (
                            <li>
                                <p>{tech.title}</p>
                                <Icons iconName={tech.icon}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
})