import "./Work.css"
import ProjectCard from "./ProjectCard"
import data from "../projectData"

export default function Work() {

    const projectElements = data.map(project => {
        return (
            <ProjectCard
                key={project.id}
                {...project}
            />
        )
    })

    return (

        <div className="project-container">
            {projectElements}
        </div>

    )
}