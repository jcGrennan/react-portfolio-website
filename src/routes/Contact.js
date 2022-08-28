// importing and rendering components and passing simple text props to the Hero component

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Form from "../components/Form"
import Footer from "../components/Footer"

export default function Contact() {
    return (
        <div>
            <Navbar />
            <Hero heading="CONTACT." text="Connect with me"/>
            <Form />
            <Footer />
        </div>
    )
}