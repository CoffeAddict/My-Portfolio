import '../styles/projects.css'
import '../styles/project-card.css'
import React from 'react'
import { Icons } from "./Icons"
import { Title } from "./Title"
import { ProjectCard } from './ProjectCard'
import projectList from '../json/projects.json'

export const Projects = React.forwardRef((props, ref) => {
    const { projects } = projectList

    return (
        <section className="projects" ref={ref}>
            <Icons iconName={'svg-11'}/>
            <Title text="Projects" elementType="h2"/>
            <p>Here are some front-end projects I've worked on. They showcase my skills in HTML, CSS, and JavaScript. Take a look and dive into my Web Development Journey</p>
            <form onSubmit={(e) => e.preventDefault()}>
                {projects.map((project, i) => <ProjectCard key={i} project={project}/>)}
            </form>
        </section>
    )
})