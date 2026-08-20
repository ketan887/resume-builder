import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import TemplatesPreview from "../components/TemplatesPreview";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}

export default Home;