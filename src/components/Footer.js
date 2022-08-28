// importing css, Link to route between pages, and some social icons from a dependency
import "./Footer.css"
import {Link} from "react-router-dom"
import {
    FaHome, 
    FaPhone, 
    FaMailBulk, 
    FaLinkedin, 
    FaGithubSquare
} from "react-icons/fa"


// composing and exporting the Footer component. Will be used on all pages.
export default function Footer() {
    return (
        <div className="footer">

            <div className="footer--container">

                <div className= "footer--left">

                    <div className="footer--location">
                        <FaHome  
                            size={20} 
                            style={{color:"#fff", marginRight:"2rem"}}
                        />
                        <div>
                            <p>Cork City</p>
                            <p>Ireland</p>
                        </div>
                    </div>


                    <div className="footer--phone">
                        <h4>
                            <FaPhone 
                                size={20} 
                                style={{color:"#fff", marginRight:"2rem"}} 
                            />
                            +353-87-711-4012
                        </h4>
                    </div>

                    <div className="footer--email">
                        <h4>
                            <FaMailBulk 
                                size={20} 
                                style={{color:"#fff", marginRight:"2rem"}} 
                            />
                            <Link to="/contact">jgrennan94@gmail.com</Link>
                        </h4>
                    </div>

                </div>

                <div className="footer--right">

                    <h4>About Me</h4>
                    <p>Joshua C. Grennan, React and JS Developer. Always looking to learn and grow. Ready for a challenge!</p>

                    <div className="footer--social">

                        <a 
                            href="https://www.linkedin.com/in/jc-grennan" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            <FaLinkedin 
                                size={30} 
                                style={{color:"#fff", marginRight:"1rem"}}
                            />  
                        </a>

                        <a 
                            href="https://github.com/jcGrennan" target="_blank" 
                            rel="noreferrer"
                        >
                            <FaGithubSquare
                                size={30}
                                style={{color:"#fff", marginRight:"1rem"}}
                            />
                        </a>

                        <a  
                            className="btn portfolio-source"
                            href="https://github.com/jcGrennan/react-portfolio-website"
                            target="_blank"
                            rel="noreferrer"
                        >
                            portfolio source
                        </a>
            

                    </div>

                </div>

            </div>


        </div>
    )
}