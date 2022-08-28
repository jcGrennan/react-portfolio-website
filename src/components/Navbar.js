// importing css, React State Hook, Link from react-router-dom, and some icons from a dependency
import "./Navbar.css"
import {useState} from "react"
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"


// composing and exporting the Navbar component. Will be used on every page
export default function Navbar() {


    // setting up a state and function to handle the burger when on small screens
    const [click, setClick] = useState(false)
    function handleClick() {setClick(!click)}

    // setting up a state and function to handle the opacity of the navbar when scrolling
    const [color, setColor] = useState(false)
    function changeColor() {
        window.scrollY >= 100 ? setColor(true) : setColor(false)
    }

    window.addEventListener("scroll", changeColor) // event listener to call the above function when scrolled


    // composing the JSX with some conditonal rendering scrolling and the burger
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