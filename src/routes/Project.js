import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import HeroImg from "../assets/hero-other.jpg"
import Footer from "../components/Footer"

export default function Project() {
    return (
        <div>
            <Navbar />
            <Hero img={HeroImg} heading="Projects." text="Some of my latest work"/>
            <Footer />
        </div>
    )
}