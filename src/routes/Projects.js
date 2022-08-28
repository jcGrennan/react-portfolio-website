// importing and rendering components and passing simple text props to the Hero component

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Work from "../components/Work"
import Footer from "../components/Footer"

export default function Projects() {
    return (
        <div>
            <Navbar />
            <Hero heading="PROJECTS." text="Some of my latest work"/>
            <Work />
            <Footer />
        </div>
    )
}