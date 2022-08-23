import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import HomeImg from "../assets/home-img.jpg"

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero home={true} img={HomeImg}/>
            <Footer />
        </div>
    )
}