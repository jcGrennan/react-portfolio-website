// importing css, Link for routing between pages, and a background img for the Home page.
import "./Hero.css"
import {Link} from "react-router-dom"
import HomeImg from "../assets/home-img.jpg"


/* composing and exporting the reusable Home page using props.
    will be used on every page. Home page styling is different to others 
    so used conditonal rendering.*/
export default function Hero(props) {
    return (
        
        <div className={props.home ? "hero" : "hero-other"}>

            {props.home && <div className="hero--mask">
                <img 
                    className="hero--img"
                    src={HomeImg}
                    alt="low lit desk and computer"
                />
            </div>}

            <div className={props.home ? "content" : "content-other"}>

                {props.home ? <p>J.C. GRENNAN</p> : <h1>{props.heading}</h1>}
                {props.home ? <h1>React & JS Developer.</h1> : <p>{props.text}</p>}
                
                {props.home && <div>
                    <Link to="/projects" className="btn">
                        Projects
                    </Link>
                    <Link to="/contact" className="btn btn-light">
                        Contact
                    </Link>
                </div>}

            </div>

        </div>
    )
}