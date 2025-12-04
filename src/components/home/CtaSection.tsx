import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Container } from "../ui/Section";
import { Button } from "../ui/Button";

export function CtaSection() {
    return (
        <Section className="bg-primary text-white">
            <Container className="text-center">
                <h2 className="text-3xl font-bold md:text-4xl mb-6">
                    Ready to Start Your Journey?
                </h2>
                <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
                    Check your eligibility for free or book a consultation with our experts to get a personalized roadmap.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/tools/eligibility-checker">
                        <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                            Check Eligibility Free
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 hover:text-white">
                            Contact Us Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </Container>
        </Section>
    );
}
