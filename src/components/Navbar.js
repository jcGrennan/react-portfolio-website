import "./Navbar.css"
import {useState} from "react"
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"

export default function Navbar() {

    const [click, setClick] = useState(false)
    function handleClick() {setClick(!click)}

    const [color, setColor] = useState(false)
    function changeColor() {
        window.scrollY >= 100 ? setColor(true) : setColor(false)
    }

    window.addEventListener("scroll", changeColor)

    return (
        <div className={color ? "nav nav-bg" : "nav"}>

            <Link to="/">
                <h1>Portfolio.</h1>
            </Link>

            <ul className={click ? "nav--menu active" : "nav--menu"}>

                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/projects">Projects</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>

            </ul>

            <div className="hamburger" onClick={handleClick}>

                {click ? (
                    <FaTimes size={20} style={{ color: "#fff" }}/>
                    ) : (
                    <FaBars size={20} style={{ color: "#fff" }}/>
                )}

            </div>

        </div>
    )
}