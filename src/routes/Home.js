import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Work from "../components/Work"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero home={true}/>
            <Work />
            <Footer />
        </div>
    )
}