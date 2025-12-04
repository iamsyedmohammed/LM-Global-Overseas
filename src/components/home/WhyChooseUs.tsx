import React from "react";
import Image from "next/image";
import { CheckCircle, Clock, Shield, Users } from "lucide-react";
import { Section, Container } from "../ui/Section";

const features = [
    {
        title: "100% Transparency",
        description: "No hidden charges or false promises. We believe in complete honesty with our clients.",
        icon: Shield,
    },
    {
        title: "Fast Processing",
        description: "Our streamlined process ensures your application is submitted and processed as quickly as possible.",
        icon: Clock,
    },
    {
        title: "Expert Consultants",
        description: "Our team consists of certified immigration experts with years of experience.",
        icon: Users,
    },
    {
        title: "High Success Rate",
        description: "We have a proven track record of successful visa approvals across multiple countries.",
        icon: CheckCircle,
    },
];

export function WhyChooseUs() {
    return (
        <Section variant="muted">
            <Container>
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div>
                        <h2 className="text-3xl font-bold md:text-4xl mb-6">
                            Why Choose LM Global Overseas?
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            We understand that immigration is a life-changing decision. That's why we are committed to providing the best guidance and support to make your dream a reality.
                        </p>
                        <div className="grid gap-6 sm:grid-cols-2">
                            {features.map((feature) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={feature.title} className="flex gap-4">
                                        <div className="shrink-0">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-primary">
                                                <Icon className="h-5 w-5" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                                            <p className="text-sm text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                            alt="Team working together"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
}
