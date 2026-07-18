import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";
import ServiceSection from "@/components/ServiceSection";
import { Roadmap } from "@/components/Roadmap";
import ArchitectureLayers from "@/components/ArchitectureLayers";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { WhyRevaya } from "@/components/WhyRevaya";
import Portfolio from '../components/Portfolio';


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProcessSection />
      <ServiceSection />
      <Roadmap />
      <Portfolio />

      <ArchitectureLayers />
      <WhyRevaya />

      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
