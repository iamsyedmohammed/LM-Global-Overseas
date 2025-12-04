import React from "react";
import { Metadata } from "next";
import { Section, Container } from "@/components/ui/Section";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
    title: "Our Services | LM Global Overseas",
    description: "Explore our wide range of immigration services including Study Visa, Work Visa, PR Visa, and more.",
};

export default function ServicesPage() {
    return (
        <>
            <div className="bg-primary text-white py-20">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl text-blue-100 max-w-2xl">
                        We offer end-to-end immigration solutions to help you achieve your global dreams.
                    </p>
                </Container>
            </div>

            <ServicesSection />

            <Section variant="muted">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Need Help Choosing?</h2>
                        <p className="text-gray-600 mb-8">
                            Not sure which visa is right for you? Our experts can assess your profile and recommend the best pathway.
                        </p>
                    </div>
                </Container>
            </Section>

            <CtaSection />
        </>
    );
}
