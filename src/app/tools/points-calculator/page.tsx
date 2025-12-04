"use client";

import React, { useState } from "react";
import { Section, Container } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Select, Input } from "@/components/ui/Form";

export default function PointsCalculatorPage() {
    const [formData, setFormData] = useState({
        age: "",
        education: "",
        experience: "",
        language: "",
        spouse: "",
        canadianExperience: "",
    });
    const [totalPoints, setTotalPoints] = useState<number | null>(null);

    const calculatePoints = (e: React.FormEvent) => {
        e.preventDefault();

        const points =
            parseInt(formData.age || "0") +
            parseInt(formData.education || "0") +
            parseInt(formData.experience || "0") +
            parseInt(formData.language || "0") +
            parseInt(formData.spouse || "0") +
            parseInt(formData.canadianExperience || "0");

        setTotalPoints(points);
    };

    const getRecommendation = (points: number) => {
        if (points >= 470) return { text: "Excellent! You have a very high chance of receiving an ITA.", color: "green" };
        if (points >= 400) return { text: "Good score! You may receive an ITA in upcoming draws.", color: "blue" };
        if (points >= 350) return { text: "Moderate score. Consider improving language scores or gaining more experience.", color: "yellow" };
        return { text: "Low score. We recommend improving your profile before applying.", color: "red" };
    };

    return (
        <>
            <div className="bg-primary text-white py-20">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">CRS Points Calculator</h1>
                    <p className="text-xl text-blue-100 max-w-2xl">
                        Calculate your Comprehensive Ranking System (CRS) score for Canada Express Entry.
                    </p>
                </Container>
            </div>

            <Section>
                <Container>
                    <div className="max-w-2xl mx-auto">
                        <Card className="p-8">
                            <form onSubmit={calculatePoints} className="space-y-6">
                                <Select
                                    label="Age"
                                    options={[
                                        { label: "18-19 years (99 points)", value: "99" },
                                        { label: "20-29 years (110 points)", value: "110" },
                                        { label: "30 years (105 points)", value: "105" },
                                        { label: "31 years (99 points)", value: "99" },
                                        { label: "32 years (94 points)", value: "94" },
                                        { label: "33 years (88 points)", value: "88" },
                                        { label: "34 years (83 points)", value: "83" },
                                        { label: "35 years (77 points)", value: "77" },
                                        { label: "36 years (72 points)", value: "72" },
                                        { label: "37 years (66 points)", value: "66" },
                                        { label: "38 years (61 points)", value: "61" },
                                        { label: "39 years (55 points)", value: "55" },
                                        { label: "40 years (50 points)", value: "50" },
                                        { label: "41 years (39 points)", value: "39" },
                                        { label: "42 years (28 points)", value: "28" },
                                        { label: "43 years (17 points)", value: "17" },
                                        { label: "44 years (6 points)", value: "6" },
                                        { label: "45+ years (0 points)", value: "0" },
                                    ]}
                                    value={formData.age}
                                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                    required
                                />

                                <Select
                                    label="Education Level"
                                    options={[
                                        { label: "PhD (150 points)", value: "150" },
                                        { label: "Master's Degree (135 points)", value: "135" },
                                        { label: "Two or more degrees (128 points)", value: "128" },
                                        { label: "Bachelor's Degree (120 points)", value: "120" },
                                        { label: "Diploma (90 points)", value: "90" },
                                        { label: "High School (30 points)", value: "30" },
                                    ]}
                                    value={formData.education}
                                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                                    required
                                />

                                <Select
                                    label="Canadian Work Experience"
                                    options={[
                                        { label: "None (0 points)", value: "0" },
                                        { label: "1 year (40 points)", value: "40" },
                                        { label: "2 years (53 points)", value: "53" },
                                        { label: "3 years (64 points)", value: "64" },
                                        { label: "4 years (72 points)", value: "72" },
                                        { label: "5+ years (80 points)", value: "80" },
                                    ]}
                                    value={formData.canadianExperience}
                                    onChange={(e) => setFormData({ ...formData, canadianExperience: e.target.value })}
                                    required
                                />

                                <Select
                                    label="Foreign Work Experience"
                                    options={[
                                        { label: "None (0 points)", value: "0" },
                                        { label: "1 year (25 points)", value: "25" },
                                        { label: "2 years (31 points)", value: "31" },
                                        { label: "3+ years (50 points)", value: "50" },
                                    ]}
                                    value={formData.experience}
                                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                    required
                                />

                                <Select
                                    label="First Official Language (English/French)"
                                    options={[
                                        { label: "CLB 10+ (136 points)", value: "136" },
                                        { label: "CLB 9 (124 points)", value: "124" },
                                        { label: "CLB 8 (112 points)", value: "112" },
                                        { label: "CLB 7 (100 points)", value: "100" },
                                        { label: "CLB 6 (88 points)", value: "88" },
                                        { label: "CLB 5 (76 points)", value: "76" },
                                        { label: "CLB 4 or less (0 points)", value: "0" },
                                    ]}
                                    value={formData.language}
                                    onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                                    required
                                />

                                <Select
                                    label="Spouse/Partner Factors"
                                    options={[
                                        { label: "No spouse (0 points)", value: "0" },
                                        { label: "Spouse with CLB 5+ (20 points)", value: "20" },
                                        { label: "Spouse with Bachelor's (10 points)", value: "10" },
                                        { label: "Spouse with Canadian work experience (10 points)", value: "10" },
                                    ]}
                                    value={formData.spouse}
                                    onChange={(e) => setFormData({ ...formData, spouse: e.target.value })}
                                    required
                                />

                                <Button type="submit" className="w-full" size="lg">
                                    Calculate CRS Score
                                </Button>
                            </form>

                            {totalPoints !== null && (
                                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                                    <div className="text-center mb-6">
                                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Your Estimated CRS Score</h3>
                                        <div className="text-6xl font-bold text-primary mb-4">{totalPoints}</div>
                                        <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium bg-${getRecommendation(totalPoints).color}-100 text-${getRecommendation(totalPoints).color}-800`}>
                                            {getRecommendation(totalPoints).text}
                                        </div>
                                    </div>
                                    <div className="border-t pt-4">
                                        <p className="text-sm text-gray-600 text-center mb-4">
                                            * This is an estimated score. Actual CRS calculation may vary based on additional factors.
                                        </p>
                                        <Button variant="secondary" className="w-full">
                                            Book Consultation for Detailed Assessment
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </Card>
                    </div>
                </Container>
            </Section>
        </>
    );
}
