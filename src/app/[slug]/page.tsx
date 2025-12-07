import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
    GraduationCap,
    CheckCircle2,
    ArrowLeft,
    BookOpen,
    Building2,
    Stethoscope,
    Phone,
    Users
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { Section, Container } from "@/components/ui/Section";
import { countries } from "@/data/countries";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    // Check if this is an MBBS page request
    if (!slug.startsWith("mbbs-in-")) {
        return { title: "Page Not Found" };
    }

    const countrySlug = slug.replace("mbbs-in-", "");
    const country = countries.find((c) => c.slug === countrySlug);

    if (!country) {
        return { title: "Country Not Found" };
    }

    return {
        title: `MBBS in ${country.name} - Fees, Admission 2025 | LM Global Overseas`,
        description: `Study MBBS in ${country.name}. Top medical universities, low tuition fees, and direct admission for Indian students. Apply now!`,
    };
}

// Helper to parse simple markdown-like bold syntax
function parseBold(text: string) {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-bold text-neutral-900">{part.slice(2, -2)}</strong>;
        }
        return part;
    });
}

export default async function MbbsPage({ params }: Props) {
    const { slug } = await params;

    // Route Validation
    if (!slug.startsWith("mbbs-in-")) {
        notFound();
    }

    const countrySlug = slug.replace("mbbs-in-", "");
    const country = countries.find((c) => c.slug === countrySlug);

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
                        alt={`MBBS in ${country.name}`}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-neutral-900/80" />
                </div>
                <Container className="relative z-10 text-white">
                    <div className="max-w-4xl">
                        <Link
                            href="/"
                            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Home
                        </Link>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                                <Stethoscope className="h-10 w-10 text-white" />
                            </div>
                            <span className="text-blue-200 font-semibold tracking-wide uppercase text-sm">Medical Education</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                            Study MBBS in {country.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 font-light max-w-2xl leading-relaxed">
                            {country.description} Join thousands of successful doctors who started their journey in {country.name}.
                        </p>

                    </div>
                </Container>
            </div>

            {/* Main Content */}
            <Section>
                <Container>
                    <div className="max-w-7xl mx-auto space-y-12">
                        <div className="space-y-12">
                            {/* Overview */}
                            <div className="prose prose-lg text-neutral-cool max-w-none">
                                <h1 className="text-3xl font-bold text-black mb-6">{country.details.mbbsContent?.title || `Study MBBS in ${country.name}`}</h1>
                                <p className="lead">{country.details.mbbsContent?.description || country.details.overview}</p>

                                {country.details.mbbsContent && (
                                    <>
                                        {/* Highlights Matrix */}
                                        <div className="my-8">
                                            <h3 className="text-xl font-bold text-black mb-4 border-l-4 border-primary pl-3">Key Highlights</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {country.details.mbbsContent.highlights.map((highlight, idx) => (
                                                    <div key={idx} className="flex justify-between items-center p-4 bg-white shadow-sm border border-neutral-100 rounded-lg">
                                                        <span className="font-medium text-neutral-500">{highlight.label}</span>
                                                        <span className="font-bold text-primary">{highlight.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* About Course Text */}
                                        <div className="lead whitespace-pre-line text-neutral-600 mb-8 text-justify">
                                            {country.details.mbbsContent.aboutCourse}
                                        </div>

                                        {/* Why Study (Detailed Advantages) */}
                                        {country.details.mbbsContent.whyStudy && (
                                            <div className="mb-12">
                                                <h3 className="text-2xl font-bold text-black mb-6">Why Study MBBS in {country.name}?</h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                    {country.details.mbbsContent.whyStudy.map((item, idx) => (
                                                        <div key={idx} className="flex gap-4 p-5 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-primary/20 transition-colors">
                                                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-lg text-neutral-800 mb-2">{item.title}</h4>
                                                                <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>



                            {/* Eligibility & Documents */}
                            {country.details.mbbsContent && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Eligibility */}
                                    <Card className="p-6 border-t-4 border-t-accent">
                                        <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-accent" />
                                            Eligibility Criteria
                                        </h3>
                                        <ul className="space-y-3">
                                            {country.details.mbbsContent.eligibility.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm text-neutral-600">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>

                                    {/* Documents */}
                                    <Card className="p-6 border-t-4 border-t-secondary">
                                        <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                                            <BookOpen className="h-5 w-5 text-secondary" />
                                            Documents Required
                                        </h3>
                                        <ul className="space-y-3">
                                            {country.details.mbbsContent.documents.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm text-neutral-600">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>
                                </div>

                            )}

                            {/* Mid-Page Counselling Form */}
                            <div className="my-16">
                                <Card className="p-8 md:p-12 bg-neutral-900 text-white shadow-2xl border-none overflow-hidden relative rounded-2xl">
                                    {/* Abstract Shapes */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full -ml-12 -mb-12 blur-2xl" />

                                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                        <div>
                                            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
                                            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                                                Get expert guidance for your medical career in Georgia. Our counselors will help you with university selection, admissions, and visa process.
                                            </p>
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                                                        <Phone className="h-5 w-5 text-blue-400" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-neutral-400">Call Us Directly</p>
                                                        <p className="text-xl font-bold text-white">+91 79970 51424</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="text-sm font-medium text-neutral-300 block mb-2">Your Name</label>
                                                    <input type="text" placeholder="Enter your name" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white placeholder:text-neutral-500 transition-colors" />
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium text-neutral-300 block mb-2">Phone Number</label>
                                                    <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white placeholder:text-neutral-500 transition-colors" />
                                                </div>
                                                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-500 text-white border-none h-12 text-lg">
                                                    Get Free Counselling
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>

                            {/* Why Choose Generic - Fallback or Addition */}
                            {!country.details.mbbsContent && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { title: "Affordable Fees", desc: "Low tuition compared to private colleges in India." },
                                        { title: "Global Recognition", desc: "Degrees valid in India, USA, UK, and Europe." },
                                        { title: "No Capitation", desc: "Direct admission purely based on merit/eligibility." },
                                        { title: "English Medium", desc: "Entire course curriculum taught in English." }
                                    ].map((item, idx) => (
                                        <Card key={idx} className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-shadow bg-neutral-50/50">
                                            <h3 className="font-bold text-lg text-neutral-dark mb-2">{item.title}</h3>
                                            <p className="text-neutral-cool text-sm">{item.desc}</p>
                                        </Card>
                                    ))}
                                </div>
                            )}

                            {/* Admission Process */}
                            {country.details.mbbsContent?.admissionProcess && (
                                <div>
                                    <h3 className="text-2xl font-bold text-black mb-6">Admission Process</h3>
                                    <div className="space-y-4">
                                        {country.details.mbbsContent.admissionProcess.map((step, idx) => (
                                            <div key={idx} className="flex gap-4">
                                                <div className="flex flex-col items-center">
                                                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                                                        {idx + 1}
                                                    </div>
                                                    {idx !== country.details.mbbsContent!.admissionProcess.length - 1 && (
                                                        <div className="w-0.5 h-full bg-neutral-200 my-2" />
                                                    )}
                                                </div>
                                                <div className="pb-6">
                                                    <p className="text-neutral-700 font-medium">{step}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Syllabus */}
                            {country.details.mbbsContent?.syllabus && (
                                <div>
                                    <h3 className="text-2xl font-bold text-black mb-6">MBBS Syllabus</h3>
                                    <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden divide-y divide-neutral-200">
                                        {country.details.mbbsContent.syllabus.map((term, idx) => (
                                            <div key={idx} className="p-4">
                                                <h4 className="font-bold text-primary mb-2">{term.semester}</h4>
                                                <p className="text-sm text-neutral-600">{term.subjects.join(", ")}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Additional Sections (Fees, Hostel, etc) */}
                            {country.details.mbbsContent?.additionalSections && (
                                <div className="space-y-8">
                                    {country.details.mbbsContent.additionalSections.map((section, idx) => (
                                        <Card key={idx} className="p-6 md:p-8 hover:shadow-lg transition-shadow border-neutral-200">
                                            <h3 className="text-2xl font-bold text-black mb-6 border-b border-neutral-100 pb-4">
                                                {section.title}
                                            </h3>
                                            <div className="space-y-3 leading-relaxed">
                                                {section.content.split('\n').map((line, i) => {
                                                    const trimmed = line.trim();
                                                    if (!trimmed) return <div key={i} className="h-2" />;

                                                    // Handle Bullet Points
                                                    if (trimmed.startsWith('- ')) {
                                                        const content = trimmed.substring(2);
                                                        return (
                                                            <div key={i} className="flex gap-3 items-start">
                                                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                                                <span className="text-neutral-600">{parseBold(content)}</span>
                                                            </div>
                                                        );
                                                    }

                                                    // Handle Numbered Lists
                                                    if (/^\d+\./.test(trimmed)) {
                                                        const [num, ...rest] = trimmed.split('.');
                                                        const content = rest.join('.').trim();
                                                        return (
                                                            <div key={i} className="flex gap-3 items-start">
                                                                <span className="font-bold text-primary min-w-[20px]">{num}.</span>
                                                                <span className="text-neutral-600">{parseBold(content)}</span>
                                                            </div>
                                                        );
                                                    }

                                                    // Regular paragraph
                                                    return <p key={i} className="text-neutral-600">{parseBold(line)}</p>;
                                                })}
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            )}

                            {/* FAQs */}
                            {country.details.mbbsContent?.faqs && (
                                <div className="bg-neutral-50 p-8 rounded-2xl">
                                    <h3 className="text-2xl font-bold text-black mb-6">Frequently Asked Questions</h3>
                                    <Accordion
                                        items={country.details.mbbsContent.faqs.map(faq => ({
                                            title: faq.question,
                                            content: faq.answer
                                        }))}
                                    />
                                </div>
                            )}

                            {/* Advantages List Fallback */}
                            {!country.details.mbbsContent && (
                                <div>
                                    <h3 className="text-2xl font-bold text-black mb-6">Advantages of Studying in {country.name}</h3>
                                    <ul className="space-y-4">
                                        {country.details.whyChoose.map((reason, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                                                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                                                </div>
                                                <span className="text-neutral-700">{reason}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </Section >
        </>
    );
}
