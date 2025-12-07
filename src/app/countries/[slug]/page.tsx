import React from "react";
import { Metadata } from "next";
import { FaArrowRight } from "react-icons/fa";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
    Globe,
    GraduationCap,
    Briefcase,
    Building2,
    Plane,
    CheckCircle2,
    Phone,
    ArrowRight,
    MapPin,
    FileCheck,
    Users
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section, Container } from "@/components/ui/Section";
import { countries } from "@/data/countries";
import { Accordion } from "@/components/ui/Accordion";
import { MigrationForm } from "@/components/forms/MigrationForm";

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
        title: `Migrate to ${country.name} | LM Global Overseas`,
        description: country.description,
    };
}

export default async function CountryPage({ params }: Props) {
    const { slug } = await params;
    const country = countries.find((c) => c.slug === slug);

    if (!country) {
        notFound();
    }

    // Helper for icons
    const getIcon = (type: string) => {
        switch (type) {
            case "green-card": return <Briefcase className="h-8 w-8 text-primary" />;
            case "student": return <GraduationCap className="h-8 w-8 text-accent" />;
            case "work": return <Building2 className="h-8 w-8 text-secondary" />;
            default: return <Plane className="h-8 w-8 text-primary" />;
        }
    };

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
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 to-neutral-900/40" />
                </div>
                <Container className="relative z-10 text-white">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                            {country.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 font-light">
                            {country.description}
                        </p>
                    </div>
                </Container>
            </div>

            {/* Why Migrate Section */}
            <Section className="bg-neutral-50/50">
                <Container>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6 text-neutral-dark">Why Migrate to {country.name}?</h2>
                        <div className="prose prose-lg text-neutral-cool mx-auto max-w-none whitespace-pre-line leading-relaxed">
                            <p>{country.details.overview}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {country.details.whyChoose.map((reason, idx) => (
                            <div key={idx} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-neutral-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110" />

                                <div className="relative z-10">
                                    <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-primary/30">
                                        <CheckCircle2 className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <p className="text-lg font-semibold text-neutral-800 leading-relaxed">
                                        {reason}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Popular Visa Categories */}
            {country.details.popularVisas && country.details.popularVisas.length > 0 && (
                <Section variant="muted">
                    <Container>
                        <h2 className="text-3xl font-bold mb-10 text-neutral-dark">Popular {country.name} Visa Categories</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {country.details.popularVisas.map((visa, idx) => (
                                <Card key={idx} className="p-8 hover:shadow-xl transition-all duration-300">
                                    <div className="mb-6 p-4 bg-white rounded-full w-fit shadow-sm">
                                        {getIcon(visa.icon)}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-primary">{visa.title}</h3>
                                    <p className="text-neutral-cool leading-relaxed text-sm mb-6">
                                        {visa.description}
                                    </p>
                                    <Link href={`/countries/${country.slug}/${visa.slug}`}>
                                        <Button className="w-fit px-6 gap-3 bg-primary/5 hover:bg-primary text-primary hover:text-white transition-colors duration-300 flex items-center group">
                                            Read More
                                            <FaArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </Card>
                            ))}
                        </div>
                    </Container>
                </Section>
            )}

            {/* Types of Immigration Visas */}
            <Section>
                <Container>
                    <h2 className="text-3xl font-bold mb-2 text-neutral-dark">Types of {country.name} Immigration Visas</h2>
                    <p className="text-neutral-cool mb-10">There are several pathways to migrate depending on your goals and eligibility.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Immigrant Visas */}
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Briefcase className="h-6 w-6 text-primary" />
                                Immigrant Visas
                            </h3>
                            <ul className="space-y-4">
                                {country.details.visaCategories.immigrant.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-neutral-cool">
                                        <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Non-Immigrant Visas */}
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Plane className="h-6 w-6 text-accent" />
                                Non-Immigrant Visas
                            </h3>
                            <ul className="space-y-4">
                                {country.details.visaCategories.nonImmigrant.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-neutral-cool">
                                        <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-page text-primary rounded-lg text-sm">
                        <p><strong>Note:</strong> Visa requirements and categories change frequently. Consult our experts for the latest information.</p>
                    </div>
                </Container>
            </Section>

            {/* Expert Banner */}
            <section className="py-12 bg-primary text-white">
                <Container>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <p className="text-accent font-medium mb-1 uppercase tracking-wider text-sm">Confused about the process?</p>
                            <h2 className="text-3xl font-bold">For further assistance Ask our Expert</h2>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white gap-2">
                                <Phone className="h-5 w-5" />
                                +91 79970 51424
                            </Button>
                            <Button size="lg" className="bg-white hover:bg-gray-100 text-primary gap-2 border-none">
                                <Users className="h-5 w-5" />
                                Make an Appointment
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* How LM Global Supports You */}
            <Section>
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-dark">How LM Global Overseas supports you</h2>
                        <p className="text-neutral-cool max-w-2xl mx-auto">
                            Our team of experienced consultants will guide you through every step of your journey to {country.name}.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Profile Evaluation", desc: "Expert assessment of your eligibility.", icon: FileCheck, color: "text-primary", bg: "bg-white" },
                            { title: "University/Job Search", desc: "Finding the right fit for your goals.", icon: Building2, color: "text-accent", bg: "bg-page" },
                            { title: "Visa Documentation", desc: "Error-free application filing support.", icon: FileCheck, color: "text-primary", bg: "bg-white" },
                            { title: "Post-Landing Support", desc: "Accommodation and settlement help.", icon: MapPin, color: "text-accent-muted", bg: "bg-gray-50" }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                                <div className={`h-12 w-12 ${item.bg} ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-neutral-cool">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* FAQs */}
            {country.details.faqs && country.details.faqs.length > 0 && (
                <Section variant="muted">
                    <Container>
                        <h2 className="text-3xl font-bold mb-8 text-center text-neutral-dark">FAQs</h2>
                        <div className="max-w-3xl mx-auto">
                            <Accordion
                                items={country.details.faqs.map(f => ({
                                    title: f.question,
                                    content: f.answer
                                }))}
                            />
                        </div>
                    </Container>
                </Section>
            )}

            {/* Destination Form */}
            <Section className="bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <p className="text-primary font-medium mb-2">With our Resources</p>
                            <h2 className="text-3xl font-bold text-neutral-dark">Choose the Destination to migrate</h2>
                        </div>
                        <MigrationForm />
                    </div>
                </Container>
            </Section>
        </>
    );
}
