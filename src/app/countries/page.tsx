import React from "react";
import { Metadata } from "next";
import { Section, Container } from "@/components/ui/Section";
import { CountriesSection } from "@/components/home/CountriesSection";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
    title: "Countries We Serve | LM Global Overseas",
    description: "Explore immigration opportunities in Canada, UK, Australia, Germany, Poland, UAE and more.",
};

export default function CountriesPage() {
    return (
        <>
            <div className="bg-primary text-white py-20">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Countries We Serve</h1>
                    <p className="text-xl text-blue-100 max-w-2xl">
                        Discover your ideal destination for study, work, or permanent residency.
                    </p>
                </Container>
            </div>

            <CountriesSection />

            <Section variant="muted">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Not Sure Which Country?</h2>
                        <p className="text-gray-600 mb-8">
                            Our experts can help you choose the best country based on your profile, budget, and career goals.
                        </p>
                    </div>
                </Container>
            </Section>

            <CtaSection />
        </>
    );
}
