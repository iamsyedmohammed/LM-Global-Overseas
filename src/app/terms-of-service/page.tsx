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
                                By accessing, engaging with, or utilizing the immigration consultation services provided by LM Global Overseas ("the Company," "we," "us," or "our"), you ("the Client," "you") hereby acknowledge, accept, and agree to be legally bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                            </p>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">2. Services Provided</h2>
                            <p className="mb-4">
                                LM Global Overseas offers professional immigration consultation services, which may include, but are not limited to:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>Initial eligibility assessments and consultations.</li>
                                <li>Assistance with the preparation, review, and submission of visa and immigration applications.</li>
                                <li>Documentation support and advice.</li>
                                <li>Communication with relevant immigration authorities on your behalf (where authorized).</li>
                            </ul>
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                                <p className="font-bold text-yellow-800">Crucial Disclaimer:</p>
                                <p className="text-yellow-700">
                                    We act solely as a consulting and administrative support service. We do not guarantee the approval of any visa, permit, or application. The final decision rests exclusively with the relevant government or immigration authorities, and we cannot influence these outcomes.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">3. Client Responsibilities and Obligations</h2>
                            <p className="mb-4">The Client is solely responsible for:</p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>Providing accurate, truthful, and complete personal and financial information, documentation, and representations as requested by the Company or required by immigration authorities.</li>
                                <li>Submitting all required documents and information to us in a timely manner as specified in the service agreement or by our consultants.</li>
                                <li>Promptly paying all agreed-upon service fees and any third-party charges (e.g., government application fees, medical exam fees).</li>
                                <li>Complying with the professional advice and instructions provided by the Company throughout the service period.</li>
                                <li>Informing us immediately of any changes to your circumstances that may affect your application.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">4. Fees, Payments, and Refund Policy</h2>
                            <p className="mb-4">
                                <strong>4.1. Fees:</strong> All service fees will be clearly defined and agreed upon in a separate service agreement or engagement letter before the commencement of any paid services.
                            </p>
                            <p className="mb-4">
                                <strong>4.2. Payment:</strong> Payments must be made according to the schedule outlined in your service agreement. Failure to make timely payments may result in the suspension or termination of services.
                            </p>
                            <p className="mb-4">
                                <strong>4.3. Refunds:</strong> Fees paid for services are generally non-refundable once the Company has commenced work on your file, as our fees compensate for the time and expertise already expended (including consultation, file review, and document preparation). Refunds will only be considered in cases where the Company is unable to deliver the agreed-upon services due to its own default.
                            </p>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">5. Limitation of Liability and Indemnification</h2>
                            <h3 className="text-xl font-semibold text-neutral-dark mb-2 mt-4">5.1. Limitation of Liability</h3>
                            <p className="mb-4">
                                LM Global Overseas shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>Visa or application refusal, denial, withdrawal, or delay by any government or immigration authority.</li>
                                <li>Any consequences arising from the Client's failure to provide accurate, complete, or truthful information.</li>
                                <li>Decisions or actions taken by the government or immigration authorities.</li>
                            </ul>
                            <p className="mb-4">
                                Our total liability to you for any claim arising out of or relating to these Terms of Service or our services shall be limited to the total fees you paid to us for the specific service in question.
                            </p>

                            <h3 className="text-xl font-semibold text-neutral-dark mb-2 mt-4">5.2. Indemnification</h3>
                            <p className="mb-4">
                                The Client agrees to indemnify, defend, and hold harmless LM Global Overseas, its employees, and agents from and against all claims, liabilities, damages, losses, and costs arising out of your use of the services or violation of these Terms of Service.
                            </p>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">6. Intellectual Property</h2>
                            <p className="mb-4">
                                All content on our website and materials provided to you, including text, graphics, logos, and service names, are the intellectual property of LM Global Overseas and are protected by applicable copyright and trademark law. You may not reproduce, distribute, or use any of our intellectual property without our express written permission.
                            </p>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">7. Confidentiality and Data Protection</h2>
                            <p className="mb-4">
                                We adhere to a strict policy of client confidentiality. All non-public information and data you provide will be treated as confidential and will only be used in accordance with our Privacy Policy and for the purpose of providing the agreed-upon services or as required by law.
                            </p>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">8. Termination of Service</h2>
                            <p className="mb-4">
                                <strong>8.1. By Client:</strong> The Client may terminate the service agreement at any time with written notice. In such a case, fees for services already rendered remain payable, and the refund policy (Section 4.3) will apply.
                            </p>
                            <p className="mb-4">
                                <strong>8.2. By Company:</strong> We reserve the right to terminate the agreement immediately upon written notice if the Client:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>Fails to pay fees when due.</li>
                                <li>Provides false, misleading, or fraudulent information.</li>
                                <li>Fails to cooperate or follow our professional advice, thereby jeopardizing the application process.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">9. Governing Law and Dispute Resolution</h2>
                            <p className="mb-4">
                                These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any dispute arising from these terms or the services provided shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana.
                            </p>

                            <h2 className="text-2xl font-bold text-neutral-dark mb-4 mt-8">10. Contact Information</h2>
                            <p className="mb-4">
                                For any questions regarding these Terms of Service, please contact us at:
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
