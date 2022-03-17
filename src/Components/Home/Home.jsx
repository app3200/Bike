import { Hero } from "../HeroSection/Hero";
import { Navbar } from "../Navbar/Navbar";
import { Ackolove } from "./LandingSection/AckoLove";
import { CompanyLogs } from "./LandingSection/CompanyLogos";
import { Footer } from "./LandingSection/Footer";
import { Reviews } from "./LandingSection/Reviews";

export function Home(){
    return <div >
        <Navbar></Navbar>
        <Hero></Hero>
        <Reviews></Reviews>
        <CompanyLogs></CompanyLogs>
        <Ackolove></Ackolove>
        <Footer></Footer>
    </div>
}