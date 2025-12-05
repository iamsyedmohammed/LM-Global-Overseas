import React from "react";
import { Metadata } from "next";
import { Section, Container } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
    title: "Privacy Policy | LM Global Overseas",
    description: "Privacy Policy for LM Global Overseas immigration consultancy services.",
};

export default function PrivacyPolicyPage() {
    return (
        <>
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary via-primary/90 to-primary text-white py-20">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-xl text-white/80">Last updated: December 5, 2025</p>
                </Container>
            </div>

            {/* Content Section */}
            <Section className="bg-page">
                <Container>
                    <Card className="max-w-4xl mx-auto p-8 md:p-12 shadow-md border-neutral-light">
                        <div className="prose prose-lg max-w-none text-neutral-cool">
                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8 first:mt-0">1. Information We Collect</h2>
                            <p className="mb-4">
                                We collect personal information that you provide to us when using our services, including but not limited to:
                                name, email address, phone number, passport details, educational qualifications, and work experience.
                            </p>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">2. How We Use Your Information</h2>
                            <p className="mb-4">We use the information we collect to:</p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>Process your visa applications</li>
                                <li>Provide immigration consultation services</li>
                                <li>Communicate with you about your application status</li>
                                <li>Improve our services</li>
                                <li>Comply with legal obligations</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">3. Information Sharing</h2>
                            <p className="mb-4">
                                We do not sell or rent your personal information to third parties. We may share your information with:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>Immigration authorities as required for visa processing</li>
                                <li>Educational institutions or employers (with your consent)</li>
                                <li>Service providers who assist us in our operations</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">4. Data Security</h2>
                            <p className="mb-4">
                                We implement appropriate technical and organizational measures to protect your personal information against
                                unauthorized access, alteration, disclosure, or destruction.
                            </p>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">5. Your Rights</h2>
                            <p className="mb-4">You have the right to:</p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>Access your personal information</li>
                                <li>Correct inaccurate information</li>
                                <li>Request deletion of your information</li>
                                <li>Withdraw consent for data processing</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">6. Contact Us</h2>
                            <p className="mb-4">
                                If you have any questions about this Privacy Policy, please contact us at:
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
