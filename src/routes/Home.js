// importing and rendering components. This will serve as the homepage.

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Work from "../components/Work"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero home={true}/> {/*passing a prop for conditionally rendering the correct Hero component*/}
            <Work />
            <Footer />
        </div>
    )
}