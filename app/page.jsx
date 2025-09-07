'use client';

import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";

export default function Home() {
    return(
        <div className="main">
            <Hero/>
            <About/>
            <Services/>
            <Contact/>
            <Footer/>
        </div>
    )
}