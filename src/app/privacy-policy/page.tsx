import React from "react";
import { Metadata } from "next";
import { Section, Container } from "@/components/ui/Section";

export const metadata: Metadata = {
    title: "Privacy Policy | LM Global Overseas",
    description: "Privacy Policy for LM Global Overseas immigration consultancy services.",
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <div className="bg-primary text-white py-20">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-xl text-blue-100">Last updated: December 2024</p>
                </Container>
            </div>

            <Section>
                <Container>
                    <div className="prose max-w-4xl mx-auto">
                        <h2>1. Information We Collect</h2>
                        <p>
                            We collect personal information that you provide to us when using our services, including but not limited to:
                            name, email address, phone number, passport details, educational qualifications, and work experience.
                        </p>

                        <h2>2. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Process your visa applications</li>
                            <li>Provide immigration consultation services</li>
                            <li>Communicate with you about your application status</li>
                            <li>Improve our services</li>
                            <li>Comply with legal obligations</li>
                        </ul>

                        <h2>3. Information Sharing</h2>
                        <p>
                            We do not sell or rent your personal information to third parties. We may share your information with:
                        </p>
                        <ul>
                            <li>Immigration authorities as required for visa processing</li>
                            <li>Educational institutions or employers (with your consent)</li>
                            <li>Service providers who assist us in our operations</li>
                        </ul>

                        <h2>4. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal information against
                            unauthorized access, alteration, disclosure, or destruction.
                        </p>

                        <h2>5. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access your personal information</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your information</li>
                            <li>Withdraw consent for data processing</li>
                        </ul>

                        <h2>6. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:
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
