import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Trust from "./components/Trust";
import Testimonials from "./components/Testimonials";
import Appointment from "./components/Appointment";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import InfoBar from "./components/InfoBar";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <InfoBar />
      <Services />
      <Trust />
      <About />
      <Testimonials />
      <Appointment />
      <FAQ />
      <Footer />
      {/* <FloatingWhatsApp /> */}
    </div>
  );
}

export default App;
