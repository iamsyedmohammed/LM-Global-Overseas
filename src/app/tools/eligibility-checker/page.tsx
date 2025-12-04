"use client";

import React, { useState } from "react";
import { Section, Container } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Form";
import { CheckCircle, XCircle } from "lucide-react";

export default function EligibilityCheckerPage() {
    const [formData, setFormData] = useState({
        age: "",
        education: "",
        experience: "",
        language: "",
        country: "",
    });
    const [result, setResult] = useState<"eligible" | "not-eligible" | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simple eligibility logic (can be enhanced)
        const score =
            (parseInt(formData.age) || 0) +
            (parseInt(formData.education) || 0) +
            (parseInt(formData.experience) || 0) +
            (parseInt(formData.language) || 0);

        setResult(score >= 60 ? "eligible" : "not-eligible");
    };

    return (
        <>
            <div className="bg-primary text-white py-20">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Eligibility Checker</h1>
                    <p className="text-xl text-blue-100 max-w-2xl">
                        Answer a few questions to check if you qualify for your desired visa.
                    </p>
                </Container>
            </div>

            <Section>
                <Container>
                    <div className="max-w-2xl mx-auto">
                        <Card className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <Select
                                    label="Target Country"
                                    options={[
                                        { label: "Canada", value: "canada" },
                                        { label: "Australia", value: "australia" },
                                        { label: "UK", value: "uk" },
                                        { label: "Germany", value: "germany" },
                                    ]}
                                    value={formData.country}
                                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                    required
                                />

                                <Select
                                    label="Age Group"
                                    options={[
                                        { label: "18-25 years", value: "25" },
                                        { label: "26-30 years", value: "20" },
                                        { label: "31-35 years", value: "15" },
                                        { label: "36-40 years", value: "10" },
                                        { label: "41+ years", value: "5" },
                                    ]}
                                    value={formData.age}
                                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                    required
                                />

                                <Select
                                    label="Highest Education"
                                    options={[
                                        { label: "PhD/Doctorate", value: "25" },
                                        { label: "Master's Degree", value: "23" },
                                        { label: "Bachelor's Degree", value: "21" },
                                        { label: "Diploma", value: "15" },
                                        { label: "High School", value: "5" },
                                    ]}
                                    value={formData.education}
                                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                                    required
                                />

                                <Select
                                    label="Work Experience"
                                    options={[
                                        { label: "5+ years", value: "15" },
                                        { label: "3-5 years", value: "13" },
                                        { label: "1-3 years", value: "11" },
                                        { label: "Less than 1 year", value: "9" },
                                        { label: "No experience", value: "0" },
                                    ]}
                                    value={formData.experience}
                                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                    required
                                />

                                <Select
                                    label="English Language Proficiency"
                                    options={[
                                        { label: "IELTS 8+ / PTE 79+", value: "20" },
                                        { label: "IELTS 7-7.5 / PTE 65-78", value: "16" },
                                        { label: "IELTS 6-6.5 / PTE 50-64", value: "12" },
                                        { label: "IELTS 5-5.5 / PTE 36-49", value: "6" },
                                        { label: "No test taken", value: "0" },
                                    ]}
                                    value={formData.language}
                                    onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                                    required
                                />

                                <Button type="submit" className="w-full" size="lg">
                                    Check Eligibility
                                </Button>
                            </form>

                            {result && (
                                <div className={`mt-8 p-6 rounded-lg ${result === "eligible" ? "bg-green-50" : "bg-red-50"}`}>
                                    <div className="flex items-center gap-4 mb-4">
                                        {result === "eligible" ? (
                                            <CheckCircle className="h-12 w-12 text-green-600" />
                                        ) : (
                                            <XCircle className="h-12 w-12 text-red-600" />
                                        )}
                                        <div>
                                            <h3 className={`text-2xl font-bold ${result === "eligible" ? "text-green-900" : "text-red-900"}`}>
                                                {result === "eligible" ? "You May Be Eligible!" : "Not Eligible Yet"}
                                            </h3>
                                            <p className={result === "eligible" ? "text-green-700" : "text-red-700"}>
                                                {result === "eligible"
                                                    ? "Based on your profile, you may qualify for immigration. Book a consultation for detailed assessment."
                                                    : "Your current profile may not meet the minimum requirements. Our experts can help improve your chances."}
                                            </p>
                                        </div>
                                    </div>
                                    <Button variant="secondary" className="w-full">
                                        Book Free Consultation
                                    </Button>
                                </div>
                            )}
                        </Card>

                        <p className="text-center text-sm text-gray-500 mt-6">
                            * This is a preliminary assessment. Actual eligibility depends on official immigration criteria.
                        </p>
                    </div>
                </Container>
            </Section>
        </>
    );
}
