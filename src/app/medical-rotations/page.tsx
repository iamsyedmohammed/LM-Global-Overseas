import React from "react";
import { Metadata } from "next";
import { Section, Container } from "@/components/ui/Section";
import { MedicalRotationsContent } from "@/components/rotations/MedicalRotationsContent";

export const metadata: Metadata = {
    title: "Medical Rotations | LM Global Overseas",
    description: "Explore our medical rotation programs for students and professionals.",
};

export default function MedicalRotationsPage() {
    return (
        <>
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary via-primary/90 to-primary text-white py-20">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Medical Rotations</h1>
                    <p className="text-xl text-white/80">Gain hands-on clinical experience with our premier medical rotation programs.</p>
                </Container>
            </div>

            {/* Content Section */}
            <Section className="bg-page">
                <Container>
                    <MedicalRotationsContent />
                </Container>
            </Section>
        </>
    );
}
