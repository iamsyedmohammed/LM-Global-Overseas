"use client";

import React, { useState, useMemo } from "react";
import { universities, University, Course } from "@/data/universities";
import { Card } from "@/components/ui/Card";
import { Button, buttonVariants, buttonBaseStyles, cn } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Form";
import { Search, MapPin, BookOpen, DollarSign, Clock, GraduationCap } from "lucide-react";
import { Container, Section } from "@/components/ui/Section";
import Link from "next/link";

export default function CourseFinderPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("");

    // Extract unique countries
    const countries = useMemo(() => {
        const uniqueCountries = new Set(universities.map((u) => u.country));
        return Array.from(uniqueCountries).map((c) => ({ label: c, value: c }));
    }, []);

    // Extract unique levels
    const levels = useMemo(() => {
        const uniqueLevels = new Set<string>();
        universities.forEach((u) => {
            u.courses.forEach((c) => uniqueLevels.add(c.level));
        });
        return Array.from(uniqueLevels).map((l) => ({ label: l, value: l }));
    }, []);

    // Filter logic
    const filteredResults = useMemo(() => {
        let results: { university: University; course: Course }[] = [];

        universities.forEach((uni) => {
            if (selectedCountry && uni.country !== selectedCountry) return;

            uni.courses.forEach((course) => {
                if (selectedLevel && course.level !== selectedLevel) return;

                const query = searchQuery.toLowerCase();
                if (
                    query &&
                    !uni.name.toLowerCase().includes(query) &&
                    !course.name.toLowerCase().includes(query) &&
                    !uni.city.toLowerCase().includes(query)
                ) {
                    return;
                }

                results.push({ university: uni, course: course });
            });
        });

        return results;
    }, [searchQuery, selectedCountry, selectedLevel]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-primary text-white py-16">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Find Your Dream Course
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mb-8">
                        Search through hundreds of universities and courses to find the perfect match for your career goals.
                    </p>

                    {/* Search Bar */}
                    <div className="bg-white p-4 rounded-xl shadow-lg grid md:grid-cols-4 gap-4">
                        <div className="md:col-span-2 relative">
                            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                                placeholder="Search by university, course, or city..."
                                className="pl-10 border-none bg-gray-50 focus:ring-0"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div>
                            <Select
                                options={countries}
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.target.value)}
                                className="border-none bg-gray-50 focus:ring-0"
                                placeholder="All Countries"
                            />
                        </div>
                        <div>
                            <Select
                                options={levels}
                                value={selectedLevel}
                                onChange={(e) => setSelectedLevel(e.target.value)}
                                className="border-none bg-gray-50 focus:ring-0"
                                placeholder="All Levels"
                            />
                        </div>
                    </div>
                </Container>
            </div>

            {/* Results Section */}
            <Section>
                <Container>
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-gray-900">
                            {filteredResults.length} Courses Found
                        </h2>
                        {(selectedCountry || selectedLevel || searchQuery) && (
                            <Button
                                variant="ghost"
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedCountry("");
                                    setSelectedLevel("");
                                }}
                                className="text-red-500 hover:text-red-600 hover:bg-red-50"
                            >
                                Clear Filters
                            </Button>
                        )}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredResults.map(({ university, course }, index) => (
                            <Card key={`${university.id}-${course.id}`} hoverEffect className="flex flex-col h-full">
                                <div className="mb-4 flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="h-12 w-12 rounded-lg bg-gray-100 overflow-hidden">
                                            <img
                                                src={university.image}
                                                alt={university.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 line-clamp-1">
                                                {university.name}
                                            </h3>
                                            <div className="flex items-center text-xs text-gray-500">
                                                <MapPin className="h-3 w-3 mr-1" />
                                                {university.city}, {university.country}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4 flex-grow">
                                    <h4 className="text-lg font-semibold text-primary mb-2">
                                        {course.name}
                                    </h4>
                                    <div className="space-y-2 text-sm text-gray-600">
                                        <div className="flex items-center">
                                            <GraduationCap className="h-4 w-4 mr-2 text-gray-400" />
                                            {course.level}
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="h-4 w-4 mr-2 text-gray-400" />
                                            {course.duration}
                                        </div>
                                        <div className="flex items-center">
                                            <DollarSign className="h-4 w-4 mr-2 text-gray-400" />
                                            {course.fee}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-gray-100 mt-auto">
                                    <Link
                                        href="/contact"
                                        className={cn(buttonBaseStyles, buttonVariants.primary, "w-full")}
                                    >
                                        Enquire Now
                                    </Link>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {filteredResults.length === 0 && (
                        <div className="text-center py-20">
                            <div className="bg-gray-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="h-10 w-10 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                No courses found
                            </h3>
                            <p className="text-gray-500">
                                Try adjusting your filters or search query.
                            </p>
                        </div>
                    )}
                </Container>
            </Section>
        </div>
    );
}
