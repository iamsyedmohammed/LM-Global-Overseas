import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Section, Container } from "../ui/Section";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { universities } from "@/data/universities";

export function FeaturedCoursesSection() {
    // Flatten courses to get a list
    const featuredCourses = universities.flatMap(uni =>
        uni.courses.map(course => ({
            ...course,
            universityName: uni.name,
            universityImage: uni.image,
            country: uni.country,
            city: uni.city
        }))
    ).slice(0, 3); // Take first 3

    return (
        <Section className="bg-white">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold md:text-4xl mb-4 text-black">
                            Featured Courses
                        </h2>
                        <p className="text-neutral-cool max-w-xl">
                            Explore top-rated courses from world-class universities.
                        </p>
                    </div>
                    <Link href="/courses">
                        <Button variant="outline" className="hidden md:flex">
                            View All Courses <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {featuredCourses.map((item) => (
                        <Link key={item.id} href="/courses" className="group">
                            <Card hoverEffect className="h-full p-0 overflow-hidden flex flex-col border border-neutral-light shadow-sm">
                                <div className="h-48 relative overflow-hidden bg-gray-100">
                                    <img
                                        src={item.universityImage}
                                        alt={item.universityName}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                                        {item.level}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="text-xs text-neutral-cool mb-2 flex items-center">
                                        <MapPin className="h-3 w-3 mr-1" />
                                        {item.universityName}, {item.country}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 text-neutral-dark group-hover:text-primary transition-colors line-clamp-2">
                                        {item.name}
                                    </h3>
                                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-neutral-cool">
                                        <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> {item.duration}</span>
                                        <span className="font-semibold text-neutral-dark">{item.fee}</span>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/courses">
                        <Button variant="outline" className="w-full">
                            View All Courses <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </Container>
        </Section>
    );
}
