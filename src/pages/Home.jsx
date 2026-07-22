import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import About from "../components/About";
import Testimonial from "../components/Testimonial";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
import { useReveal } from "../hooks/useReveal";

export default function Home() {
  useReveal();

  return (
    <div className="antialiased overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Testimonial />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}