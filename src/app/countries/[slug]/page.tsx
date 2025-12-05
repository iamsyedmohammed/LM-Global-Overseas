import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
    Globe,
    GraduationCap,
    Briefcase,
    Home,
    TrendingUp,
    FileText,
    CheckCircle,
    Users,
    Phone,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section, Container } from "@/components/ui/Section";
import { countries } from "@/data/countries";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const country = countries.find((c) => c.slug === slug);

    if (!country) {
        return {
            title: "Country Not Found",
        };
    }

    return {
        title: `Study & Work in ${country.name} | LM Global Overseas`,
        description: country.description,
    };
}

export default async function CountryPage({ params }: Props) {
    const { slug } = await params;
    const country = countries.find((c) => c.slug === slug);

    if (!country) {
        notFound();
    }

    return (
        <>
            {/* Hero Section */}
            <div className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={country.image}
                        alt={country.name}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40" />
                </div>
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <Globe className="h-4 w-4 text-blue-200" />
                            <span className="text-sm font-medium text-blue-100">Study & Immigration Destination</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                            Study & Work in {country.name}
                        </h1>
                        <p className="text-xl text-blue-100 leading-relaxed">
                            {country.description}
                        </p>
                    </div>
                </Container>
            </div>

            {/* Quick Stats */}
            <Section className="bg-white border-b">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="h-12 w-12 bg-blue-100 text-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                                <GraduationCap className="h-6 w-6" />
                            </div>
                            <p className="text-2xl font-bold text-gray-900">Top</p>
                            <p className="text-sm text-gray-600">Universities</p>
                        </div>
                        <div className="text-center">
                            <div className="h-12 w-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                                <Briefcase className="h-6 w-6" />
                            </div>
                            <p className="text-2xl font-bold text-gray-900">Work</p>
                            <p className="text-sm text-gray-600">Opportunities</p>
                        </div>
                        <div className="text-center">
                            <div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                                <Home className="h-6 w-6" />
                            </div>
                            <p className="text-2xl font-bold text-gray-900">PR</p>
                            <p className="text-sm text-gray-600">Pathways</p>
                        </div>
                        <div className="text-center">
                            <div className="h-12 w-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                                <TrendingUp className="h-6 w-6" />
                            </div>
                            <p className="text-2xl font-bold text-gray-900">High</p>
                            <p className="text-sm text-gray-600">Success Rate</p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Overview */}
            <Section>
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Studying & Working in {country.name}</h2>
                            <div className="w-20 h-1 bg-primary mx-auto"></div>
                        </div>
                        <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-50 to-white border-blue-100">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                {country.details.overview}
                            </p>
                        </Card>
                    </div>
                </Container>
            </Section>

            {/* Visa Types */}
            <Section variant="muted">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Visa & Immigration Options</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Explore the different pathways to study, work, and settle in {country.name}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {country.details.visaTypes.map((visa, index) => (
                            <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white">
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 bg-gradient-to-br from-primary to-blue-600 text-white rounded-lg flex items-center justify-center shrink-0">
                                        <FileText className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-xl mb-2 text-gray-900">{visa.name}</h3>
                                        <p className="text-gray-600 leading-relaxed">{visa.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Why Choose */}
            <Section>
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose {country.name}?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover the key benefits and opportunities that make {country.name} an ideal destination
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {country.details.whyChoose.map((reason, index) => (
                            <Card key={index} className="p-6 hover:shadow-md transition-shadow bg-white">
                                <div className="flex items-start gap-4">
                                    <div className="h-8 w-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                        <CheckCircle className="h-5 w-5" />
                                    </div>
                                    <p className="text-gray-700 text-lg leading-relaxed">{reason}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* How We Help */}
            <Section variant="muted">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Help You Succeed</h2>
                            <p className="text-gray-600">
                                Our comprehensive support throughout your {country.name} immigration journey
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Card className="p-6 text-center bg-white">
                                <div className="h-16 w-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="h-8 w-8" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Profile Assessment</h3>
                                <p className="text-gray-600 text-sm">
                                    Evaluate your eligibility and recommend the best pathway
                                </p>
                            </Card>
                            <Card className="p-6 text-center bg-white">
                                <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <GraduationCap className="h-8 w-8" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">University Selection</h3>
                                <p className="text-gray-600 text-sm">
                                    Help you choose the right institution and program
                                </p>
                            </Card>
                            <Card className="p-6 text-center bg-white">
                                <div className="h-16 w-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FileText className="h-8 w-8" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Visa Application</h3>
                                <p className="text-gray-600 text-sm">
                                    Complete documentation and visa filing support
                                </p>
                            </Card>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
                <Container className="text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Start Your {country.name} Journey?
                        </h2>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                            Our immigration experts specialize in {country.name} visas and have helped hundreds of students and professionals achieve their dreams. Book a free consultation today!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                            <a
                                href="https://wa.me/917997051424"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="lg" variant="secondary" className="w-full sm:w-auto shadow-xl">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call +91 79970 51424
                                </Button>
                            </a>
                            <Link href="/contact">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary transition-all">
                                    Book Free Consultation
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                        <p className="text-sm text-blue-200">
                            ✓ Free consultation · ✓ Expert guidance · ✓ 98% success rate
                        </p>
                    </div>
                </Container>
            </Section>
        </>
    );
}
