"use client";

import React, { useState } from "react";
import { faqs, FAQ } from "@/data/faqs";
import { Container, Section } from "@/components/ui/Section";
import { Input } from "@/components/ui/Form";
import { Search, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { cn } from "@/components/ui/Button";

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg bg-white overflow-hidden mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
            >
                <span className="font-medium text-gray-900">{question}</span>
                {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
            </button>
            <div
                className={cn(
                    "transition-all duration-300 ease-in-out overflow-hidden",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="p-4 pt-0 text-gray-600 border-t border-gray-100 mt-2">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const categories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))];

    const filteredFAQs = faqs.filter((faq) => {
        const matchesSearch =
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory =
            selectedCategory === "All" || faq.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <div className="bg-primary text-white py-20">
                <Container>
                    <div className="flex flex-col items-center text-center">
                        <HelpCircle className="h-16 w-16 mb-6 text-blue-200" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-xl text-blue-100 max-w-2xl mb-8">
                            Find answers to common questions about studying abroad, visas, and our services.
                        </p>

                        {/* Search */}
                        <div className="w-full max-w-xl relative">
                            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                            <Input
                                placeholder="Search for a question..."
                                className="pl-10 h-12 rounded-full border-none shadow-lg text-gray-900"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </Container>
            </div>

            <Section>
                <Container>
                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Sidebar Categories */}
                        <div className="md:col-span-1">
                            <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                                <h3 className="font-semibold text-gray-900 mb-4 px-2">
                                    Categories
                                </h3>
                                <div className="space-y-1">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={cn(
                                                "w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                                                selectedCategory === category
                                                    ? "bg-primary/10 text-primary"
                                                    : "text-gray-600 hover:bg-gray-50"
                                            )}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* FAQ List */}
                        <div className="md:col-span-3">
                            {filteredFAQs.length > 0 ? (
                                <div>
                                    {filteredFAQs.map((faq) => (
                                        <AccordionItem
                                            key={faq.id}
                                            question={faq.question}
                                            answer={faq.answer}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
                                    <p className="text-gray-500">
                                        No questions found matching your search.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
