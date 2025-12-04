import React from "react";
import { Metadata } from "next";
import { Section, Container } from "@/components/ui/Section";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
    title: "Success Stories | LM Global Overseas",
    description: "Read testimonials from our happy clients who successfully obtained their visas with our help.",
};

export default function TestimonialsPage() {
    return (
        <>
            <div className="bg-primary text-white py-20">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h1>
                    <p className="text-xl text-blue-100 max-w-2xl">
                        Real stories from real people who trusted us with their immigration journey.
                    </p>
                </Container>
            </div>

            <TestimonialsSection />

            <Section variant="muted">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Want to Be Our Next Success Story?</h2>
                        <p className="text-gray-600 mb-8">
                            Join thousands of satisfied clients who have achieved their immigration goals with our expert guidance.
                        </p>
                    </div>
                </Container>
            </Section>

            <CtaSection />
        </>
    );
}
