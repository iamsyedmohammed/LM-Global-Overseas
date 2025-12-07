import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Container } from "../ui/Section";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

const mbbsCountries = [
    {
        name: "Georgia",
        image: "https://images.unsplash.com/photo-1539550298564-8a06769aa728?auto=format&fit=crop&q=80&w=1000",
        slug: "georgia"
    },
    {
        name: "Russia",
        image: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?auto=format&fit=crop&q=80&w=1000",
        slug: "russia"
    },
    {
        name: "Belarus",
        image: "https://images.unsplash.com/photo-1558642084-fd07fae5282e?auto=format&fit=crop&q=80&w=1000",
        slug: "belarus"
    }
];

export function MbbsCountriesSection() {
    return (
        <Section className="bg-white">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold md:text-4xl mb-4 text-black">
                        Most Popular Countries for MBBS
                    </h2>
                    <p className="text-neutral-cool max-w-2xl mx-auto text-lg">
                        With LM Global Overseas you can get MBBS Admission in renowned Medical Universities Worldwide
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {mbbsCountries.map((country, idx) => (
                        <Link key={idx} href={`/mbbs-in-${country.slug}`} className="group block">
                            <Card className="p-0 overflow-hidden border-0 shadow-lg group-hover:shadow-2xl transition-all duration-300 rounded-2xl">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={country.image}
                                        alt={`MBBS in ${country.name}`}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-4 bg-white border-t border-neutral-100 relative z-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-neutral-800 group-hover:text-primary transition-colors">
                                            MBBS in {country.name}
                                        </h3>
                                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                                            <ArrowRight className="h-4 w-4 text-primary" />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                        View All MBBS Destinations
                    </Button>
                </div>
            </Container>
        </Section>
    );
}
