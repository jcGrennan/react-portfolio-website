import "./Form.css"
import {useState} from "react"
import {send} from "@emailjs/browser"

export default function Form() {

    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            subject: "",
            message: "",
        }
    )

    function handleChange(event) {

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        })

    }

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