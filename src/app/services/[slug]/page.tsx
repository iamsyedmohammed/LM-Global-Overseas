import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, Container } from "@/components/ui/Section";
import { services } from "@/data/services";
import { CheckCircle, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/Schema";

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.title} | LM Global Overseas`,
        description: service.description,
    };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;
    const baseUrl = "https://lmglobaloverseas.com";

    return (
        <>
            <ServiceSchema
                name={service.title}
                description={service.description}
                url={`${baseUrl}/services/${slug}`}
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: baseUrl },
                    { name: "Services", url: `${baseUrl}/services` },
                    { name: service.title, url: `${baseUrl}/services/${slug}` }
                ]}
            />
            {/* Hero */}
            <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80')] bg-cover bg-center" />
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <Icon className="h-5 w-5" />
                            <span className="text-sm font-medium">Immigration Service</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{service.title}</h1>
                        <p className="text-xl text-blue-100 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                </Container>
            </div>

            {/* Overview */}
            <Section>
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Need to Know</h2>
                            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                        </div>
                        <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-50 to-white border-blue-100">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                {service.details.overview}
                            </p>
                        </Card>
                    </div>
                </Container>
            </Section>

            {/* Eligibility & Documents */}
            <Section variant="muted">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Eligibility */}
                        <Card className="p-8 bg-white border-green-100 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-12 w-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                                    <CheckCircle className="h-6 w-6" />
                                </div>
                                <h2 className="text-2xl font-bold">Eligibility Requirements</h2>
                            </div>
                            <ul className="space-y-4">
                                {service.details.eligibility.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 group">
                                        <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                            <CheckCircle className="h-4 w-4" />
                                        </div>
                                        <span className="text-gray-700 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        {/* Documents */}
                        <Card className="p-8 bg-white border-blue-100 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                                    <FileText className="h-6 w-6" />
                                </div>
                                <h2 className="text-2xl font-bold">Required Documents</h2>
                            </div>
                            <ul className="space-y-4">
                                {service.details.documents.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 group">
                                        <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <FileText className="h-4 w-4" />
                                        </div>
                                        <span className="text-gray-700 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </Container>
            </Section>

            {/* Process Timeline */}
            <Section>
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Step-by-Step Application Process</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Follow our proven process to maximize your chances of visa approval
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {service.details.process.map((step, index) => (
                                <div key={index} className="flex gap-6 mb-8 last:mb-0 group">
                                    <div className="flex flex-col items-center">
                                        <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                            {index + 1}
                                        </div>
                                        {index < service.details.process.length - 1 && (
                                            <div className="w-0.5 flex-1 bg-gradient-to-b from-blue-300 to-blue-100 mt-4"></div>
                                        )}
                                    </div>
                                    <div className="flex-1 pb-8">
                                        <Card className="p-6 hover:shadow-md transition-shadow bg-white">
                                            <h3 className="font-bold text-xl mb-2 text-gray-900">{step}</h3>
                                            <p className="text-gray-600 text-sm">We'll guide you through this step with expert support</p>
                                        </Card>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
                <Container className="text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                            Let our immigration experts guide you through every step of the {service.title.toLowerCase()} process. Book a free consultation today and take the first step toward your global dreams.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg" variant="secondary" className="w-full sm:w-auto shadow-xl hover:shadow-2xl transition-shadow">
                                    Book Free Consultation
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/tools/eligibility-checker">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary transition-all">
                                    Check Eligibility
                                </Button>
                            </Link>
                        </div>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            {[
                                "Free consultation",
                                "Expert guidance",
                                "98% success rate"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white font-medium text-sm">
                                    <div className="h-5 w-5 rounded-full bg-green-500 text-white flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
