import React from "react";
import { Metadata } from "next";
import { Section, Container } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
    title: "Terms of Service | LM Global Overseas",
    description: "Terms of Service for LM Global Overseas immigration consultancy services.",
};

export default function TermsOfServicePage() {
    return (
        <>
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary via-primary/90 to-primary text-white py-20">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
                    <p className="text-xl text-white/80">Last updated: December 5, 2025</p>
                </Container>
            </div>

            {/* Content Section */}
            <Section className="bg-page">
                <Container>
                    <Card className="max-w-4xl mx-auto p-8 md:p-12 shadow-md border-neutral-light">
                        <div className="prose prose-lg max-w-none text-neutral-cool">
                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8 first:mt-0">1. Acceptance of Terms</h2>
                            <p className="mb-4">
                                By accessing and using the services of LM Global Overseas, you accept and agree to be bound by these Terms of Service.
                            </p>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">2. Services Provided</h2>
                            <p className="mb-4">
                                LM Global Overseas provides immigration consultation services including but not limited to visa application assistance,
                                documentation support, and eligibility assessment. We do not guarantee visa approval as final decisions rest with
                                immigration authorities.
                            </p>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">3. Client Responsibilities</h2>
                            <p className="mb-4">Clients are responsible for:</p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>Providing accurate and complete information</li>
                                <li>Submitting required documents in a timely manner</li>
                                <li>Paying agreed fees on time</li>
                                <li>Following our professional advice</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">4. Fees and Payments</h2>
                            <p className="mb-4">
                                Service fees will be communicated clearly before engagement. Fees are non-refundable once services have commenced,
                                except in cases of service non-delivery by LM Global Overseas.
                            </p>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">5. Limitation of Liability</h2>
                            <p className="mb-4">
                                LM Global Overseas shall not be liable for visa refusals, delays, or any consequences arising from decisions made
                                by immigration authorities. We provide consultation services only and cannot influence government decisions.
                            </p>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">6. Confidentiality</h2>
                            <p className="mb-4">
                                We maintain strict confidentiality of all client information and will not disclose it to third parties except
                                as required for visa processing or by law.
                            </p>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">7. Termination</h2>
                            <p className="mb-4">
                                Either party may terminate the service agreement with written notice. Fees for services already rendered will
                                remain payable.
                            </p>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">8. Contact Information</h2>
                            <p className="mb-4">
                                For questions about these Terms of Service, contact us at:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg border border-neutral-light">
                                <p className="mb-2">
                                    <strong className="text-neutral-dark">Email:</strong>{" "}
                                    <a href="mailto:info@lmglobaloverseas.com" className="text-primary hover:text-accent transition-colors">
                                        info@lmglobaloverseas.com
                                    </a>
                                </p>
                                <p>
                                    <strong className="text-neutral-dark">Phone:</strong>{" "}
                                    <a href="tel:+917997051424" className="text-primary hover:text-accent transition-colors">
                                        +91 79970 51424
                                    </a>
                                </p>
                            </div>
                        </div>
                    </Card>
                </Container>
            </Section>
        </>
    );
}
