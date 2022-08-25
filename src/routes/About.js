import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

export default function About() {
    return (
        <div>
            <Navbar />
            <Hero heading="ABOUT." text="Reliable Front-End Developer." />
            <Footer />
        </div>
    )
}