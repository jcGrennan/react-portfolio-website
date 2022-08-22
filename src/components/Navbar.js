import "./Navbar.css"
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <div className="nav">
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
        </div>
    )
}