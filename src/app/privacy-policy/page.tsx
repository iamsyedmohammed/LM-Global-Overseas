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
                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8 first:mt-0">1. Introduction</h2>
                            <p className="mb-4">
                                LM Global Overseas ("the Company," "we," "us," or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, and share the personal information you provide when using our immigration consultation services.
                            </p>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">2. Information We Collect</h2>
                            <p className="mb-4">
                                We collect personal information necessary to provide our services and comply with legal obligations. This information may include:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li><strong>Identity Data:</strong> Name, date of birth, gender, nationality, passport details, family status.</li>
                                <li><strong>Contact Data:</strong> Email address, phone number, physical address.</li>
                                <li><strong>Professional/Educational Data:</strong> Educational qualifications, employment history, work experience, resumes/CVs.</li>
                                <li><strong>Financial Data:</strong> Payment details for services (handled securely via third-party payment processors) and financial documents required for visa applications.</li>
                                <li><strong>Sensitive Personal Data:</strong> Where required for visa processing, this may include biometric data, medical information, and criminal background checks.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">3. How We Use Your Information (Purpose of Processing)</h2>
                            <p className="mb-4">
                                We use the information we collect solely for the following purposes:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>To deliver the agreed-upon services, including assessing eligibility and preparing visa/immigration applications.</li>
                                <li>To communicate with you regarding your application status, updates, and service-related matters.</li>
                                <li>To verify your identity and the accuracy of the information provided.</li>
                                <li>To comply with our legal and regulatory obligations, including anti-money laundering and know-your-client requirements.</li>
                                <li>To improve our services and client support experience.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">4. Legal Basis for Processing</h2>
                            <p className="mb-4">
                                We process your personal data based on the following legal grounds:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li><strong>Contractual Necessity:</strong> Processing is necessary for the performance of the service agreement between you and LM Global Overseas.</li>
                                <li><strong>Legal Obligation:</strong> Processing is necessary for compliance with a legal obligation to which we are subject (e.g., government reporting).</li>
                                <li><strong>Your Explicit Consent:</strong> Processing of sensitive data or sharing with non-essential third parties will be based on your explicit consent, which you may withdraw at any time.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">5. Information Sharing and Disclosure</h2>
                            <p className="mb-4">
                                We do not sell, rent, or trade your personal information. We may share your information only with the following parties, strictly for the purpose of providing the agreed-upon services:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li><strong>Immigration Authorities:</strong> Sharing data as required for the processing of your visa or immigration applications (e.g., High Commissions, Embassies, or relevant government bodies).</li>
                                <li><strong>Third-Party Service Providers:</strong> Vendors who perform services on our behalf (e.g., secure payment processors, IT support, cloud hosting). These parties are contractually obligated to protect your data.</li>
                                <li><strong>With Your Consent:</strong> Educational institutions, credential evaluators, or potential employers, only where we have obtained your specific and informed consent.</li>
                                <li><strong>Legal Requirements:</strong> If required by law, court order, or governmental regulation.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">6. Data Security</h2>
                            <p className="mb-4">
                                We are committed to ensuring the security of your personal information. We employ appropriate technical and organizational measures, including encryption, access controls, and secure storage solutions, to protect your data from unauthorized access, accidental loss, disclosure, alteration, or destruction. However, no electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
                            </p>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">7. Data Retention</h2>
                            <p className="mb-4">
                                We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including for the purpose of satisfying any legal, accounting, or reporting requirements. Typically, client files are retained for a period of seven years after the completion or termination of the service to meet legal and professional audit obligations.
                            </p>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">8. Your Data Protection Rights</h2>
                            <p className="mb-4">
                                You have the following rights concerning your personal information, subject to certain legal limitations:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li><strong>Right of Access:</strong> To request a copy of the personal data we hold about you.</li>
                                <li><strong>Right to Rectification:</strong> To request correction of inaccurate or incomplete data.</li>
                                <li><strong>Right to Erasure ('Right to be Forgotten'):</strong> To request the deletion of your personal data, where legally permissible.</li>
                                <li><strong>Right to Withdraw Consent:</strong> To withdraw your consent at any time where processing is based on consent.</li>
                                <li><strong>Right to Restriction of Processing:</strong> To request us to limit how we use your personal data.</li>
                            </ul>
                            <p className="mb-4">To exercise any of these rights, please contact us using the details below.</p>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">9. Changes to this Privacy Policy</h2>
                            <p className="mb-4">
                                We may update this Privacy Policy from time to time. The "Last updated" date at the top of this policy indicates when the latest changes took effect. We encourage you to review this policy periodically.
                            </p>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">10. Contact Us</h2>
                            <p className="mb-4">
                                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
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
