import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Section, Container } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Calculator, CheckSquare, FileCheck } from "lucide-react";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Visa Tools | LM Global Overseas",
    description: "Use our free visa tools to check eligibility, calculate points, and generate document checklists.",
};

const tools = [
    {
        title: "Eligibility Checker",
        description: "Find out if you qualify for your desired visa with our quick assessment tool.",
        icon: CheckSquare,
        href: "/tools/eligibility-checker",
        color: "blue",
    },
    {
        title: "Document Checklist",
        description: "Get a personalized list of documents required for your visa application.",
        icon: FileCheck,
        href: "/tools/document-checklist",
        color: "green",
    },
    {
        title: "Points Calculator",
        description: "Calculate your CRS score for Canada Express Entry or Australia PR.",
        icon: Calculator,
        href: "/tools/points-calculator",
        color: "purple",
    },
];

export default function ToolsPage() {
    return (
        <>
            <div className="bg-primary text-white py-20">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Free Visa Tools</h1>
                    <p className="text-xl text-blue-100 max-w-2xl">
                        Use our free online tools to assess your eligibility and prepare for your visa application.
                    </p>
                </Container>
            </div>

            <Section>
                <Container>
                    <div className="grid md:grid-cols-3 gap-8">
                        {tools.map((tool) => {
                            const Icon = tool.icon;
                            return (
                                <Link key={tool.title} href={tool.href} className="group">
                                    <Card hoverEffect className="h-full p-8">
                                        <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-${tool.color}-50 text-${tool.color}-600`}>
                                            <Icon className="h-8 w-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                            {tool.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6">
                                            {tool.description}
                                        </p>
                                        <div className="flex items-center text-primary font-medium">
                                            Use Tool <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </Card>
                                </Link>
                            );
                        })}
                    </div>
                </Container>
            </Section>

            <Section variant="muted">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Need Expert Guidance?</h2>
                        <p className="text-gray-600 mb-8">
                            While our tools provide valuable insights, nothing beats personalized advice from our immigration experts.
                        </p>
                        <Link href="/contact">
                            <span className="inline-flex items-center text-primary font-semibold text-lg hover:underline">
                                Book a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                            </span>
                        </Link>
                    </div>
                </Container>
            </Section>
        </>
    );
}
