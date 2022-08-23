import "./Hero.css"
import IntroImg from "../assets/intro-img.jpg"
import {Link} from "react-router-dom"

export default function Hero() {
    return (
        <div className="hero">

            <div className="hero--mask">
                <img className="intro-img" src={IntroImg} alt="low lit desk and computer"/>
            </div>

            <div className="content">

                <p>WELCOME TO MY PORTFOLIO</p>
                <h1>React & JS Developer.</h1>
                <div>
                    <Link to="/project" className="btn">
                        Projects
                    </Link>
                    <Link to="/contact" className=" btn btn-light">
                        Contact
                    </Link>
                </div>

            </div>

        </div>
    )
}