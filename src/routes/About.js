import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AboutContent from "../components/AboutContent"
import Footer from "../components/Footer"

export default function About() {
    return (
        <div>
            <Navbar />
            <Hero heading="ABOUT." text="Reliable Front-End Developer." />
            <AboutContent />
            <Footer />
        </div>
    )
}