import useGAEventTracker from "../hooks/useGAEventTracker"
import { Icons } from "./Icons"

export function ProjectCard ({project}) {
    const localProject = {
        link: project.link || null,
        image: project.image || null,
        title: project.title || null,
        year: project.year || null,
        tech: project.tech || [],
        xOffset: project.xOffset || 0
    }

    const cardStyles = { transform: `translateX(${localProject.xOffset}px)` }

    // Google Analytics tracking
    const gaEventTracker = useGAEventTracker('Projects')
    const handleLinkClick = (linkTitle) => gaEventTracker(`project_click_${linkTitle}`)

    return (
        <div className="project-card" style={cardStyles}>
            <img loading="lazy" src={localProject.image} alt={`${localProject.title} webpage screenshot`}/>
            <div className="text-container">
                <div className="description-text">
                    <div>
                        <h3>{localProject.title}</h3>
                        <p>{localProject.year}</p>
                    </div>
                    <a onClick={() => handleLinkClick(localProject.title)} href={localProject.link} target="_blank">view project</a>
                </div>
                <div className="technologies">
                    {localProject.tech.map((tech, i) => <Icons key={i} iconName={tech}/>)}
                </div>
            </div>
        </div>
    )
}