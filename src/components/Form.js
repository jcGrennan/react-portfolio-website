import "./Form.css"

export default function Form() {
    return (

        <div className="form">

            <form>

                <label for="name">Your Name</label>
                <input id="name" type="text"></input>

                <label for="email">Email</label>
                <input id="email" type="email"></input>

                <label for="subject">Subject</label>
                <input id="subject" type="text"></input>

                <label for="message">Message</label>
                <textarea id="message" rows="6" placeholder="Type your message here" />

                <button className="btn">Submit</button>
            </form>

        </div>
    )
}