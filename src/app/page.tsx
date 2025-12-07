import { Hero } from "@/components/home/Hero";
import { CountriesSection } from "@/components/home/CountriesSection";
import { MbbsCountriesSection } from "@/components/home/MbbsCountriesSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CountriesSection />
      <MbbsCountriesSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
