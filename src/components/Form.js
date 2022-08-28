// importing css, the React State Hook, and a function for sending the form data through email
import "./Form.css"
import {useState} from "react"
import {send} from "@emailjs/browser"


// composing and exporting the Form component. Will be used to contact me through the Contact page.
export default function Form() {


    // setting up an object to hold the form data using state.
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            subject: "",
            message: "",
        }
    )

    // declaring a function that will keep the form values and formData state in sync on every keystroke.
    function handleChange(event) {

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        })

    }

    // declaring a function that will send the form data in an email when Submit is pressed using the function imported.
    function handleSubmit(event) {
        event.preventDefault()
        send(
            "service_267eytq",
            "template_fc5etz8",
            formData,
            "OTdqKSgT56Kw6TOIT"
        )
            .then(response => {
                (alert("Email Sent! I will respond shortly!"))
            })
            .catch(response => {
                (alert("Oops! Something went wrong!"))
            })
    }

    
    // composing the JSX
    return (
        <div className="form">
            

            <form onSubmit={handleSubmit}>

                <label for="name">Your Name</label>
                <input 
                    name="name" 
                    type="text" 
                    value={formData.name}
                    onChange={handleChange}
                />

                <label for="email">Email</label>
                <input 
                    name="email" 
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label for="subject">Subject</label>
                <input 
                    name="subject" 
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                />

                <label for="message">Message</label>
                <textarea 
                    name="message" 
                    rows="6" 
                    placeholder="Type your message here" 
                    value={formData.message}
                    onChange={handleChange}
                />

                <button className="btn">Submit</button>
            </form>

        </div>
    )
}