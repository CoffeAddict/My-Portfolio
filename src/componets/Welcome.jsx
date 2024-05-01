import { Icons } from "./Icons"
import { Title } from "./Title"
import '../styles/welcome.css'

export function Welcome () {
    return (
        <section className="welcome">
            <Icons iconName={'svg-6'}/>
            <Title text="Welcome"/>
            <p> Explore around and get to know me a bit better. <br/> I'm excited to share my journey with you! </p>
            <Icons iconName={'svg-7'}/>
        </section>
    )
}