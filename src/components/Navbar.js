import "./Navbar.css"
import {Link} from "react-router-dom"

export default function Navbar() {

    return (

        <div className="nav">

            <Link to="/">
                <h1>Portfolio</h1>
            </Link>

            <ul className="nav--menu">
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/project">Project</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

        </div>

    )
}