import React from "react";
import { Metadata } from "next";
import { Section, Container } from "@/components/ui/Section";
import { Target, Eye, Award, Users } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us | LM Global Overseas",
    description: "Learn about LM Global Overseas, our mission, vision, and the team dedicated to your immigration success.",
};

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <div className="bg-primary text-white py-20">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-xl text-blue-100 max-w-2xl">
                        We are dedicated to making your dream of studying, working, or settling abroad a reality through honest and transparent guidance.
                    </p>
                </Container>
            </div>

            {/* Mission & Vision */}
            <Section>
                <Container>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-blue-50 p-8 rounded-2xl">
                            <div className="h-12 w-12 bg-primary text-white rounded-lg flex items-center justify-center mb-6">
                                <Target className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed">
                                To provide accurate, reliable, and ethical immigration services to aspiring individuals. We aim to simplify the complex visa processes and empower our clients to achieve their global ambitions with confidence.
                            </p>
                        </div>
                        <div className="bg-yellow-50 p-8 rounded-2xl">
                            <div className="h-12 w-12 bg-accent text-primary-dark rounded-lg flex items-center justify-center mb-6">
                                <Eye className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                            <p className="text-gray-600 leading-relaxed">
                                To be the most trusted and preferred immigration consultancy globally, known for our integrity, professionalism, and high success rates in helping people build a better future abroad.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Company Story */}
            <Section variant="muted">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="relative h-[400px] bg-gray-300 rounded-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                                    alt="Immigration consultation"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
                            <p className="text-gray-600 mb-4">
                                Founded with a vision to bridge the gap between talent and opportunity, LM Global Overseas has grown from a small consultancy to a leading name in the immigration industry.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Over the years, we have helped thousands of students and professionals navigate the complexities of international visas. Our team of experts stays updated with the latest immigration laws to ensure the highest chances of success for our clients.
                            </p>
                            <p className="text-gray-600">
                                We believe in building long-term relationships based on trust and transparency. Your success is our success.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Stats/Values */}
            <Section>
                <Container>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div className="p-6 border rounded-xl">
                            <div className="mx-auto h-12 w-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                <Award className="h-6 w-6" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">98%</h3>
                            <p className="text-gray-600">Success Rate</p>
                        </div>
                        <div className="p-6 border rounded-xl">
                            <div className="mx-auto h-12 w-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">5000+</h3>
                            <p className="text-gray-600">Happy Clients</p>
                        </div>
                        <div className="p-6 border rounded-xl">
                            <div className="mx-auto h-12 w-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                                <Target className="h-6 w-6" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
                            <p className="text-gray-600">Years Experience</p>
                        </div>
                        <div className="p-6 border rounded-xl">
                            <div className="mx-auto h-12 w-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                                <Eye className="h-6 w-6" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">6+</h3>
                            <p className="text-gray-600">Countries</p>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
