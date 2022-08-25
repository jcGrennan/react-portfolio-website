import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ProjectCard from "../components/ProjectCard"
import data from "../projectData.js"
import Footer from "../components/Footer"

export default function Projects() {

    const projectElements = data.map(project => {
        return (
            <ProjectCard
                key={project.id}
                {...project}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <Hero heading="PROJECTS." text="Some of my latest work"/>
            {projectElements}
            <Footer />
        </div>
    )
}