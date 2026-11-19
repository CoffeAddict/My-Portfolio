import '../styles/experience.css'
import React from 'react'
import { Icons } from './Icons'
import { Title } from './Title'

const previousRoles = [
    { company: 'Dos al Cubo', role: 'Frontend Developer', dates: 'Sep 2023–Feb 2025', work: 'Built and maintained digital newspaper sites on Thinkindot CMS using jQuery, Lit, and SCSS. Also worked with Node.js and SQL.' },
    { company: 'Simplistic', role: 'Frontend Developer', dates: 'Aug 2020–Sep 2023', work: 'Worked with designers to build and improve Shopify storefronts, using JavaScript, React, and SCSS to refine the shopping experience.' },
    { company: 'Opratel', role: 'Vue.js Developer', dates: 'Oct 2019–Aug 2020', work: 'Helped migrate Todosgamers from a legacy PHP app to Vue.js and Laravel. Made the site responsive with TypeScript and SCSS.' },
    { company: 'FNET Systems', role: 'Frontend Developer', dates: 'Nov 2018–Oct 2019', work: 'Built and maintained web apps for police inventory, government traffic-camera support, and Claro Argentina using Vue.js, PHP, MySQL, and Node.js.' }
]

export const Experience = React.forwardRef(function Experience (_props, ref) {
    return (
        <section className="experience" ref={ref}>
            <Icons iconName="svg-11"/>
            <Title text="Experience" elementType="h2"/>
            <div className="experience-content">
                <article className="current-role">
                    <h3>Scalestack</h3>
                    <p className="role-dates">Full-Stack Developer · Feb 2025–Present</p>
                    <p>I work with designers and engineers on AI workflow features. My contributions span React and TypeScript interfaces, Python APIs, AWS data pipelines, and tooling for audit history and release recovery.</p>
                </article>
                <ol className="previous-roles" aria-label="Previous roles">
                    {previousRoles.map(({ company, role, dates, work }) => (
                        <li key={company}>
                            <h3>{company}</h3>
                            <p className="role-dates">{role} · {dates}</p>
                            <p>{work}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
})
