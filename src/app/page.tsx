import { Hero } from "@/components/home/Hero";
import { CountriesSection } from "@/components/home/CountriesSection";
import { MbbsCountriesSection } from "@/components/home/MbbsCountriesSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaSection } from "@/components/home/CtaSection";
import { FeaturedCoursesSection } from "@/components/home/FeaturedCoursesSection";
import { ToolsSection } from "@/components/home/ToolsSection";
import { FaqSection } from "@/components/home/FaqSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesSection />
      <CountriesSection />
      <MbbsCountriesSection />
      <FeaturedCoursesSection />
      <ToolsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
