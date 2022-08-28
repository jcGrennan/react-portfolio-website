// importing css, ProjectCard component and the project data
import "./Work.css"
import ProjectCard from "./ProjectCard"
import data from "../projectData"


// composing and exporting the Work component
export default function Work() {

    // mapping the project data 
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