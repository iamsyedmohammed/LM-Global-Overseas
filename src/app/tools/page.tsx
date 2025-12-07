import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Section, Container } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button, buttonVariants, buttonSizes, buttonBaseStyles, cn } from "@/components/ui/Button";
import {
    Calculator, CheckSquare, FileCheck, FileText, Coins, Scale, ArrowLeftRight, ClipboardList, CheckCircle
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
    title: "Visa Tools | LM Global Overseas",
    description: "Use our free visa tools to check eligibility, calculate points, generate SOPs, and more.",
};

const iconMap: any = {
    CheckCircle,
    Calculator,
    FileCheck,
    FileText,
    Coins,
    Scale,
    ArrowLeftRight,
    ClipboardList,
    CheckSquare // Fallback or extra
};

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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tools.map((tool) => {
                            const Icon = iconMap[tool.icon] || CheckCircle;
                            return (
                                <Link key={tool.title} href={tool.href} className="group">
                                    <Card hoverEffect className="h-full p-8 flex flex-col">
                                        <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-${tool.color}-50 text-${tool.color}-600`}>
                                            <Icon className="h-8 w-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                            {tool.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 flex-grow">
                                            {tool.description}
                                        </p>
                                        <div className={cn(buttonBaseStyles, buttonVariants.primary, buttonSizes.sm, "w-fit mt-auto group-hover:bg-accent")}>
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
                            <Button variant="primary" size="lg">
                                Book a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </Container>
            </Section>
        </>
    );
}
