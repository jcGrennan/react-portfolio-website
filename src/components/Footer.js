import "./Footer.css"
import {
    FaHome, 
    FaPhone, 
    FaMailBulk, 
    FaLinkedin, 
    FaGithubSquare
} from "react-icons/fa"

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
                                style={{color:"#fff",                  marginRight:"2rem"}} 
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
                            jgrennan94@gmail.com
                        </h4>
                    </div>

                </div>

                <div className="footer--right">

                    <h4>About Me</h4>
                    <p>Joshua C. Grennan, React and JS Developer. Always looking to learn and be challenged. Thank you for your time.</p>

                    <div className="footer--social">
                        <FaLinkedin 
                            size={30} 
                            style={{color:"#fff", marginRight:"1rem"}}
                        />
                        <FaGithubSquare
                            size={30}
                            style={{color:"#fff", marginRight:"1rem"}}
                        />

                    </div>

                </div>

            </div>

        </div>
    )
}