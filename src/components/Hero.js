import "./Hero.css"
import {Link} from "react-router-dom"

export default function Hero(props) {
    return (
        <div className="hero">

            <div className="hero--mask">
                <img className="intro-img" src={props.img} alt="low lit desk and computer"/>
            </div>

            <div className="content">

                {props.home ? <p>WELCOME TO MY PORTFOLIO</p> : <h1>{props.heading}</h1>}
                {props.home ? <h1>React & JS Developer.</h1> : <p>{props.text}</p>}
                
                {props.home && <div>
                    <Link to="/projects" className="btn">
                        Projects
                    </Link>
                    <Link to="/contact" className=" btn btn-light">
                        Contact
                    </Link>
                </div>}

            </div>

        </div>
    )
}