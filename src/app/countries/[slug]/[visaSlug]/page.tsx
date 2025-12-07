import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
    Briefcase,
    GraduationCap,
    CheckCircle2,
    ArrowLeft,
    FileCheck,
    ListChecks,
    Plane,
    Building2,
    Users
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section, Container } from "@/components/ui/Section";
import { countries } from "@/data/countries";

interface Props {
    params: Promise<{
        slug: string;
        visaSlug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug, visaSlug } = await params;
    const country = countries.find((c) => c.slug === slug);
    const visa = country?.details.popularVisas.find((v) => v.slug === visaSlug);

    if (!country || !visa) {
        return {
            title: "Visa Not Found",
        };
    }

    return {
        title: `${visa.title} - ${country.name} | LM Global Overseas`,
        description: visa.description,
    };
}

export default async function VisaPage({ params }: Props) {
    const { slug, visaSlug } = await params;
    const country = countries.find((c) => c.slug === slug);
    const visa = country?.details.popularVisas.find((v) => v.slug === visaSlug);

    if (!country || !visa) {
        notFound();
    }

    // Helper for icons
    const getIcon = (type: string) => {
        switch (type) {
            case "green-card": return <Briefcase className="h-12 w-12 text-white" />;
            case "student": return <GraduationCap className="h-12 w-12 text-white" />;
            case "work": return <Building2 className="h-12 w-12 text-white" />;
            default: return <Plane className="h-12 w-12 text-white" />;
        }
    };

    return (
        <>
            {/* Hero Section */}
            <div className="relative min-h-[50vh] flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={country.image}
                        alt={country.name}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-neutral-900/80" />
                </div>
                <Container className="relative z-10 text-white">
                    <div className="max-w-4xl">
                        <Link
                            href={`/countries/${country.slug}`}
                            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to {country.name}
                        </Link>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary rounded-xl">
                                {getIcon(visa.icon)}
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                {visa.title}
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl">
                            {visa.description}
                        </p>
                    </div>
                </Container>
            </div>

            {/* Content Section */}
            <Section className="bg-neutral-50/50">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-16">

                            {/* Intro */}
                            {visa.content?.intro && (
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
                                    <h2 className="text-2xl font-bold mb-4 text-neutral-dark border-b border-neutral-100 pb-4">
                                        Overview
                                    </h2>
                                    <p className="text-lg text-neutral-600 leading-relaxed">
                                        {visa.content.intro}
                                    </p>
                                </div>
                            )}

                            {/* Key Features */}
                            {visa.content?.keyFeatures && (
                                <div>
                                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-neutral-dark">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <CheckCircle2 className="h-6 w-6 text-primary" />
                                        </div>
                                        Key Features
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {visa.content.keyFeatures.map((feature, idx) => (
                                            <Card key={idx} className="p-6 border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white group ring-1 ring-neutral-100">
                                                <div className="font-medium text-neutral-700 group-hover:text-primary transition-colors flex gap-3">
                                                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                                                    {feature}
                                                </div>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Eligibility */}
                            {visa.content?.eligibility && (
                                <div>
                                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-neutral-dark">
                                        <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                            <ListChecks className="h-6 w-6 text-accent" />
                                        </div>
                                        Eligibility Criteria
                                    </h3>
                                    <div className="space-y-4">
                                        {visa.content.eligibility.map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-neutral-100 shadow-sm hover:border-accent/30 transition-colors">
                                                <div className="h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center shrink-0 font-bold shadow-sm">
                                                    {idx + 1}
                                                </div>
                                                <span className="text-neutral-600 font-medium py-1">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Documents */}
                            {visa.content?.documents && (
                                <div>
                                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-neutral-dark">
                                        <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                                            <FileCheck className="h-6 w-6 text-secondary" />
                                        </div>
                                        Required Documents
                                    </h3>
                                    <div className="bg-white border border-neutral-100 rounded-2xl p-8 shadow-md">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                                            {visa.content.documents.map((doc, idx) => (
                                                <div key={idx} className="flex items-start gap-3 text-neutral-600 group">
                                                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                                    <span className="group-hover:text-neutral-900 transition-colors">{doc}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <Card className="p-8 bg-neutral-900 text-white sticky top-24 shadow-2xl border-none overflow-hidden relative">
                                {/* Abstract Shapes */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8" />
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-tr-full -ml-8 -mb-8" />

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-4">Need Expert Guidance?</h3>
                                    <p className="mb-8 text-neutral-300 leading-relaxed">
                                        Our immigration experts can help you navigate the entire {visa.title} application process smoothly and error-free.
                                    </p>

                                    <div className="space-y-4">
                                        <Button size="lg" className="w-full bg-primary hover:bg-primary-dark text-white border-none h-12 text-base font-semibold shadow-lg shadow-primary/25">
                                            Book Free Consultation
                                        </Button>
                                        <Button size="lg" variant="outline" className="w-full border-neutral-700 text-white hover:bg-white/5 hover:text-white h-12 text-base">
                                            Check My Eligibility
                                        </Button>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-white/10">
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                                <Users className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Talk to an Expert</p>
                                                <p className="text-xl font-bold text-white tracking-wide">+91 79970 51424</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
