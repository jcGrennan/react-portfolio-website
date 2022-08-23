import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import HeroImg from "../assets/hero-other.jpg"
import Footer from "../components/Footer"

export default function About() {
    return (
        <div>
            <Navbar />
            <Hero img={HeroImg} heading="About." text="Reliable Front-End Developer." />
            <Footer />
        </div>
    )
}