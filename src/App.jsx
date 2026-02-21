import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Trust from "./components/Trust";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import InfoBar from "./components/InfoBar";
import ClinicGallery from "./components/ClinicGallery";
import TextRibbon from "./components/TextRibbon";
import CTA from "./components/CTA";
import Homeopathy from "./components/Homeopathy";
import HomeopathyBanner from "./components/HomeopathyBanner";

function App() {
  const bannerHeight = 456;

  const [marginBottom, setMarginBottom] = useState(`${bannerHeight}px`);

  // Update margin dynamically for tablets
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setMarginBottom("400px"); // tablet adjustment
      } else {
        setMarginBottom(`${bannerHeight}px`);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App selection:bg-primary selection:text-white">
      {/* Scrollable Site Content (Upper Layer) */}
      <div
        className="relative z-[30] bg-background rounded-b-[40px] sm:rounded-b-[60px] overflow-hidden"
        style={{ marginBottom }}
      >
        <Navbar />
        <Hero />
        <InfoBar />
        <TextRibbon />
        <Services />
        <Trust />
        <About />
        <ClinicGallery />
        <Testimonials />
        <Homeopathy />
        <FAQ />
        <CTA />
        <Footer />
      </div>

      {/* Fixed Reveal Layer: Banner (Lower Layer) */}
      <div className="fixed bottom-0 left-0 w-full h-[456px] z-[20] pointer-events-none lg:pointer-events-auto">
        <HomeopathyBanner />
      </div>

      {/* <Appointment /> */}
      {/* <FloatingWhatsApp /> */}
    </div>
  );
}

export default App;
