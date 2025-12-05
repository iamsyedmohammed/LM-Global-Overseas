import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Section, Container } from "../ui/Section";
import { Card } from "../ui/Card";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
    return (
        <Section>
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold md:text-4xl mb-4">Success Stories</h2>
                    <p className="text-neutral-cool max-w-2xl mx-auto">
                        Don't just take our word for it. Hear from our happy clients who have successfully moved abroad.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="bg-white border-neutral-light shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-1 mb-4 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-neutral-cool mb-6 italic">"{testimonial.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-neutral-light/20 overflow-hidden relative">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-neutral-dark">{testimonial.name}</p>
                                    <p className="text-xs text-neutral-cool">{testimonial.visaType}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
