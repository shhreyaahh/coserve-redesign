import Hero from "../components/Hero";
import AIProducts from "../components/AIProducts";
import About from "../components/About";
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";
import Industries from "../components/Industries";
import Partners from "../components/Partners";
import Insights from "../components/Insights";
import CTASection from "../components/CtaSection";

export default function Home() {
  return (
    <>
      <Hero showSignalStrip={false} />
      <AIProducts />
      <About />
      <Clients />
      <Testimonials />
      <Industries />
      <Partners />
      <Insights />
      <CTASection />
    </>
  );
}
