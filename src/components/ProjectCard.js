/* composing and exporting the ProjectCard component 
 with props to take in the projectData in the Work Component */

export default function ProjectCard(props) {
    return (

        <div className="project-card">

            <img src={props.img} alt="project screenshot" />

            <h2 className="project-title">{props.title}</h2>

            <div className="project-details">

                <p>{props.details}</p>

                <div className="project-btns">

                    <a 
                        href={props.viewUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className ="btn"
                    >
                        View
                    </a>
                       
                    <a 
                        href={props.sourceUrl} 
                        target="_blank"
                        rel="noreferrer"
                        className ="btn"
                    >
                        Source
                    </a>

                </div>

            </div>

        </div>

    )
}