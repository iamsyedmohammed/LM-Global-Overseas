import React from "react";
import { Section, Container } from "../ui/Section";
import { Accordion } from "../ui/Accordion";
import { faqs } from "@/data/faqs";

export function FaqSection() {
    // Take only first 5 FAQs for home page to avoid clutter
    const faqItems = faqs.slice(0, 5).map(f => ({ title: f.question, content: f.answer }));

    return (
        <Section className="bg-white">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold md:text-4xl mb-4 text-black">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-neutral-cool max-w-2xl mx-auto">
                        Everything you need to know about studying abroad with LM Global Overseas.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <Accordion items={faqItems} />
                </div>
            </Container>
        </Section>
    );
}
