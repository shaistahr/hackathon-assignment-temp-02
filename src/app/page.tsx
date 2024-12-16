
import FeaturesSection from "./components/Features-section";
import Footer from "./components/footer";
import HeroBanner from "./components/Hero-banner";
import HeroSection from "./components/Hero-section";
import { Navbar } from "./components/Navbar";
import NewsletterSection from "./components/News";



export default function Home() {
  return (
    <>
   
    <HeroBanner />
    <FeaturesSection/>
    <HeroSection/>
    <NewsletterSection/>
   
    </>
  )
}

