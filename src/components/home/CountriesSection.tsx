import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section, Container } from "../ui/Section";
import { Card } from "../ui/Card";
import { countries } from "@/data/countries";

export function CountriesSection() {
    return (
        <Section className="bg-gray-50">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold md:text-4xl mb-4">Choose Your Destination</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore opportunities in top global destinations. We provide expert guidance for visas to these countries.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {countries.map((country) => (
                        <Link key={country.id} href={`/countries/${country.slug}`} className="group">
                            <Card hoverEffect className="h-full overflow-hidden p-0 border-0 shadow-md">
                                <div className="h-48 bg-gray-200 relative overflow-hidden">
                                    <Image
                                        src={country.image}
                                        alt={country.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {country.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                                        {country.description}
                                    </p>
                                    <div className="flex items-center text-primary font-medium text-sm">
                                        Explore Options <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
