import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ServicesSummary from "@/components/sections/ServicesSummary";
import DVEducation from "@/components/sections/DVEducation";
import TotalLossEducation from "@/components/sections/TotalLossEducation";
import PricingSection from "@/components/sections/PricingSection";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <ServicesSummary />
        <DVEducation />
        <TotalLossEducation />
        <PricingSection />
        <HowItWorks />
        <WhyChooseUs />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
