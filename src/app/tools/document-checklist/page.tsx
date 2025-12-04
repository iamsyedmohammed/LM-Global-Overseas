"use client";

import React, { useState } from "react";
import { Section, Container } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Form";
import { CheckCircle, Download } from "lucide-react";

export default function DocumentChecklistPage() {
    const [visaType, setVisaType] = useState("");
    const [country, setCountry] = useState("");
    const [showChecklist, setShowChecklist] = useState(false);

    const checklists: Record<string, string[]> = {
        "study-visa": [
            "Valid Passport (minimum 6 months validity)",
            "Passport-size photographs",
            "Letter of Acceptance from University",
            "Academic transcripts and certificates",
            "Language proficiency test results (IELTS/TOEFL/PTE)",
            "Proof of funds (bank statements, scholarship letters)",
            "Statement of Purpose (SOP)",
            "Letters of Recommendation",
            "Resume/CV",
            "Medical examination certificate",
            "Police clearance certificate",
            "Visa application form",
            "Visa fee payment receipt",
        ],
        "work-visa": [
            "Valid Passport",
            "Job offer letter from employer",
            "Employment contract",
            "Educational certificates",
            "Work experience letters",
            "Professional certifications (if applicable)",
            "Language test results",
            "Police clearance certificate",
            "Medical examination",
            "Passport-size photographs",
            "Proof of funds",
            "Visa application form",
        ],
        "pr-visa": [
            "Valid Passport",
            "Educational Credential Assessment (ECA)",
            "Language test results (IELTS/CELPIP/TEF)",
            "Work reference letters",
            "Employment contracts",
            "Proof of funds",
            "Police clearance certificates",
            "Medical examination",
            "Birth certificate",
            "Marriage certificate (if applicable)",
            "Passport-size photographs",
            "Application forms",
        ],
        "visitor-visa": [
            "Valid Passport",
            "Completed visa application form",
            "Passport-size photographs",
            "Travel itinerary",
            "Hotel bookings",
            "Flight tickets (confirmed or provisional)",
            "Bank statements (last 6 months)",
            "Employment letter",
            "Invitation letter (if visiting family/friends)",
            "Travel insurance",
            "Proof of ties to home country",
        ],
    };

    const handleGenerate = (e: React.FormEvent) => {
        e.preventDefault();
        setShowChecklist(true);
    };

    const currentChecklist = checklists[visaType] || [];

    return (
        <>
            <div className="bg-primary text-white py-20">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Document Checklist Generator</h1>
                    <p className="text-xl text-blue-100 max-w-2xl">
                        Get a personalized list of documents required for your visa application.
                    </p>
                </Container>
            </div>

            <Section>
                <Container>
                    <div className="max-w-2xl mx-auto">
                        <Card className="p-8">
                            <form onSubmit={handleGenerate} className="space-y-6">
                                <Select
                                    label="Select Country"
                                    options={[
                                        { label: "Canada", value: "canada" },
                                        { label: "Australia", value: "australia" },
                                        { label: "UK", value: "uk" },
                                        { label: "USA", value: "usa" },
                                        { label: "Germany", value: "germany" },
                                    ]}
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    required
                                />

                                <Select
                                    label="Select Visa Type"
                                    options={[
                                        { label: "Study Visa", value: "study-visa" },
                                        { label: "Work Visa", value: "work-visa" },
                                        { label: "PR Visa", value: "pr-visa" },
                                        { label: "Visitor Visa", value: "visitor-visa" },
                                    ]}
                                    value={visaType}
                                    onChange={(e) => setVisaType(e.target.value)}
                                    required
                                />

                                <Button type="submit" className="w-full" size="lg">
                                    Generate Checklist
                                </Button>
                            </form>

                            {showChecklist && currentChecklist.length > 0 && (
                                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                                    <h3 className="text-2xl font-bold mb-6 text-gray-900">
                                        Required Documents for {visaType.replace("-", " ").toUpperCase()} - {country.toUpperCase()}
                                    </h3>
                                    <ul className="space-y-3 mb-6">
                                        {currentChecklist.map((doc, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{doc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button variant="secondary" className="w-full">
                                        <Download className="mr-2 h-4 w-4" />
                                        Download as PDF
                                    </Button>
                                    <p className="text-sm text-gray-600 mt-4 text-center">
                                        * Requirements may vary. Consult with our experts for personalized guidance.
                                    </p>
                                </div>
                            )}
                        </Card>
                    </div>
                </Container>
            </Section>
        </>
    );
}
