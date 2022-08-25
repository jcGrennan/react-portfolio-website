import {NavLink} from "react-router-dom"

export default function ProjectCard(props) {
    return (

        <div className="project-card">

            <img src={props.img} alt="project screenshot" />

            <h2 className="project-title">{props.title}</h2>

            <div className="project-details">

                <p>{props.details}</p>

                <div className="project-btns">

                    <NavLink to={props.viewUrl} className ="btn">View</NavLink>
                       
                    <NavLink to={props.sourceUrl} className ="btn">Source</NavLink>

                </div>

            </div>

        </div>

    )
}