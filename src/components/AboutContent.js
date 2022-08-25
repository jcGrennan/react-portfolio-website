import "./AboutContent.css"
import {Link} from "react-router-dom"
import reactImg from "../assets/react.jpg"
import profile from "../assets/profile.jpeg"

export default function AboutContent() {
    return (
        <div className="about">

            <div className="about--left">

                <h1>Who Am I?</h1>

                <p>I am a front-end developer with a natural aptitude for coding. I am excited by the prospect of committing to a position where I can combine my new skills with my proven abilities in management, communication and problem-solving.</p>

                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>

            </div>

            <div className="about--right">

                <div className="img-container">

                    <div className="img-top">
                        <img className="img"
                        src={profile}
                        alt="me"></img>
                    </div>

                    <div className="img-bottom">
                        <img 
                            className="img" 
                            src={reactImg} 
                            alt="computer with React code">
                        </img>
                    </div>

                </div>
            </div>

        </div>
    )
}