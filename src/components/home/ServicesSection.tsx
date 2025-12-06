import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Container } from "../ui/Section";
import { Card } from "../ui/Card";
import { Button, buttonVariants, buttonSizes, buttonBaseStyles, cn } from "../ui/Button";
import { services } from "@/data/services";

export function ServicesSection() {
    return (
        <Section>
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold md:text-4xl mb-4">Our Services</h2>
                    <p className="text-neutral-cool max-w-2xl mx-auto">
                        Comprehensive immigration solutions tailored to your needs. From study to settlement, we are with you every step of the way.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <Link key={service.id} href={`/services/${service.slug}`} className="group">
                                <Card hoverEffect className="h-full bg-white p-8 flex flex-col">
                                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-page text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-neutral-cool mb-6 text-sm">
                                        {service.description}
                                    </p>
                                    <div className={cn(buttonBaseStyles, buttonVariants.primary, buttonSizes.sm, "w-fit mt-auto group-hover:bg-accent")}>
                                        Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}
