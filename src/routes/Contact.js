import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import HeroImg from "../assets/hero-other.jpg"
import Footer from "../components/Footer"

export default function Contact() {
    return (
        <div>
            <Navbar />
            <Hero img={HeroImg} heading="Contact." text="Connect with me"/>
            <Footer />
        </div>
    )
}