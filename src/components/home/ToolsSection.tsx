import React from "react";
import Link from "next/link";
import {
    Calculator, CheckCircle, ArrowRight, FileCheck, FileText, Coins, Scale, ArrowLeftRight, ClipboardList
} from "lucide-react";
import { Section, Container } from "../ui/Section";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { tools as toolsData } from "@/data/tools";

const iconMap: any = {
    CheckCircle,
    Calculator,
    FileCheck,
    FileText,
    Coins,
    Scale,
    ArrowLeftRight,
    ClipboardList
};

export function ToolsSection() {
    return (
        <Section className="bg-gray-50">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold md:text-4xl mb-4 text-black">
                            Student Tools
                        </h2>
                        <p className="text-neutral-cool max-w-xl">
                            Use our free tools to plan your study abroad journey better.
                        </p>
                    </div>
                    <Link href="/tools">
                        <Button variant="outline" className="hidden md:flex bg-white hover:bg-gray-100">
                            View All Tools <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {toolsData.slice(0, 4).map((tool) => {
                        const Icon = iconMap[tool.icon] || CheckCircle;
                        // Map specific dynamic routes or fallback to /tools
                        // The shared data has correct hrefs now
                        return (
                            <Link key={tool.title} href={tool.href} className="group h-full">
                                <Card hoverEffect className="p-6 h-full flex flex-col items-start gap-4 bg-white border-none shadow-md hover:shadow-xl transition-all">
                                    <div className={`h-12 w-12 rounded-xl bg-${tool.color}-50 flex items-center justify-center shrink-0 text-${tool.color}-600 mb-2`}>
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold mb-2 text-neutral-dark group-hover:text-primary transition-colors">{tool.title}</h3>
                                        <p className="text-sm text-neutral-cool mb-4 line-clamp-2">{tool.description}</p>
                                    </div>
                                    <Button className="w-full" size="sm">
                                        Try Now <ArrowRight className="ml-2 h-3 w-3" />
                                    </Button>
                                </Card>
                            </Link>
                        );
                    })}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/tools">
                        <Button variant="outline" className="w-full bg-white">
                            View All Tools <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </Container>
        </Section>
    );
}
