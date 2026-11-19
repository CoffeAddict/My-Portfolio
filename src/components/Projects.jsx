import '../styles/projects.css'
import '../styles/project-card.css'
import React from 'react'
import { Icons } from "./Icons"
import { Title } from "./Title"
import { ProjectCard } from './ProjectCard'
import projectList from '../json/projects.json'
import useGAEventTracker from '../hooks/useGAEventTracker'

export const Projects = React.forwardRef(function Projects (_props, ref) {
    const { featuredProject, projects } = projectList
    const gaEventTracker = useGAEventTracker('Projects')

    return (
        <section className="projects" ref={ref}>
            <Icons iconName={'svg-11'}/>
            <Title text="Projects" elementType="h2"/>
            <article className="featured-project">
                <a className="featured-project-image" href={featuredProject.image} target="_blank" rel="noopener noreferrer" aria-label="View full-size Scalestack screenshot">
                    <img loading="lazy" src={featuredProject.image} alt={featuredProject.imageAlt} width="2560" height="1582"/>
                </a>
                <div className="featured-project-content">
                    <div className="featured-project-heading">
                        <h3>{featuredProject.title}</h3>
                        <p>{featuredProject.year}</p>
                    </div>
                    <p>{featuredProject.description}</p>
                    <ul className="featured-project-tech" aria-label="Technologies">
                        {featuredProject.tech.map((technology) => <li key={technology}>{technology}</li>)}
                    </ul>
                    <a href={featuredProject.link} target="_blank" rel="noopener noreferrer" onClick={() => gaEventTracker('project_click_scalestack')}>Visit Scalestack</a>
                </div>
            </article>
            <form onSubmit={(e) => e.preventDefault()}>
                {projects.map((project) => <ProjectCard key={project.title} project={project}/>)}
            </form>
            <span className="copyright-text">
                Some projects have involved teamwork and I have contributed to development tasks alongside other team members. Please note that the intellectual property rights of these projects may not belong to me.
            </span>
        </section>
    )
})
