import React from "react";
import { Metadata } from "next";
import { Section, Container } from "@/components/ui/Section";

export const metadata: Metadata = {
    title: "Terms of Service | LM Global Overseas",
    description: "Terms of Service for LM Global Overseas immigration consultancy services.",
};

export default function TermsOfServicePage() {
    return (
        <>
            <div className="bg-primary text-white py-20">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
                    <p className="text-xl text-blue-100">Last updated: December 2024</p>
                </Container>
            </div>

            <Section>
                <Container>
                    <div className="prose max-w-4xl mx-auto">
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the services of LM Global Overseas, you accept and agree to be bound by these Terms of Service.
                        </p>

                        <h2>2. Services Provided</h2>
                        <p>
                            LM Global Overseas provides immigration consultation services including but not limited to visa application assistance,
                            documentation support, and eligibility assessment. We do not guarantee visa approval as final decisions rest with
                            immigration authorities.
                        </p>

                        <h2>3. Client Responsibilities</h2>
                        <p>Clients are responsible for:</p>
                        <ul>
                            <li>Providing accurate and complete information</li>
                            <li>Submitting required documents in a timely manner</li>
                            <li>Paying agreed fees on time</li>
                            <li>Following our professional advice</li>
                        </ul>

                        <h2>4. Fees and Payments</h2>
                        <p>
                            Service fees will be communicated clearly before engagement. Fees are non-refundable once services have commenced,
                            except in cases of service non-delivery by LM Global Overseas.
                        </p>

                        <h2>5. Limitation of Liability</h2>
                        <p>
                            LM Global Overseas shall not be liable for visa refusals, delays, or any consequences arising from decisions made
                            by immigration authorities. We provide consultation services only and cannot influence government decisions.
                        </p>

                        <h2>6. Confidentiality</h2>
                        <p>
                            We maintain strict confidentiality of all client information and will not disclose it to third parties except
                            as required for visa processing or by law.
                        </p>

                        <h2>7. Termination</h2>
                        <p>
                            Either party may terminate the service agreement with written notice. Fees for services already rendered will
                            remain payable.
                        </p>

                        <h2>8. Contact Information</h2>
                        <p>
                            For questions about these Terms of Service, contact us at:
                            <br />
                            Email: info@lmglobaloverseas.com
                            <br />
                            Phone: +91 98765 43210
                        </p>
                    </div>
                </Container>
            </Section>
        </>
    );
}
