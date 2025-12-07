"use client";

import React, { useState } from "react";
import { Container, Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Form";
import { Card } from "@/components/ui/Card";
import { FileCheck, AlertCircle, CheckCircle } from "lucide-react";

export default function VisaPredictorPage() {
    const [formData, setFormData] = useState({
        country: "USA",
        age: "",
        gap: "0",
        englishScore: "",
        funds: "medium"
    });
    const [chance, setChance] = useState<number | null>(null);
    const [message, setMessage] = useState("");

    const handlePredict = () => {
        let score = 60; // Base score

        // Gap Penalty
        const gap = parseInt(formData.gap);
        if (gap > 2) score -= 10;
        if (gap > 5) score -= 20;

        // English Score Bonus
        const eng = parseFloat(formData.englishScore);
        if (eng >= 7.5) score += 20;
        else if (eng >= 6.5) score += 10;
        else if (eng < 6.0) score -= 15;

        // Funds Bonus
        if (formData.funds === "high") score += 15;
        if (formData.funds === "low") score -= 15;

        // Age Factor
        const age = parseInt(formData.age);
        if (age > 30) score -= 10;

        // Cap score
        if (score > 98) score = 98;
        if (score < 10) score = 10;

        setChance(score);

        if (score > 80) setMessage("Excellent! You have a very high approval probability.");
        else if (score > 50) setMessage("Good chance. Ensure your documentation is perfect to avoid risks.");
        else setMessage("Moderate risk. Focus on a strong Statement of Purpose and financial proof.");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-primary text-white py-16">
                <Container>
                    <h1 className="text-4xl font-bold mb-4">Visa Chance Predictor</h1>
                    <p className="text-xl text-blue-100 max-w-2xl">
                        AI-powered assessment to estimate your visa approval probability for top destinations.
                    </p>
                </Container>
            </div>

            <Section>
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <Card className="p-8 bg-white shadow-lg rounded-2xl">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Enter Profile Details</h2>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Country</label>
                                    <Select
                                        value={formData.country}
                                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                        options={[
                                            { label: "USA", value: "USA" },
                                            { label: "UK", value: "UK" },
                                            { label: "Canada", value: "Canada" },
                                            { label: "Australia", value: "Australia" },
                                        ]}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                                        <Input
                                            type="number"
                                            placeholder="e.g. 24"
                                            value={formData.age}
                                            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Study Gap (Years)</label>
                                        <Input
                                            type="number"
                                            placeholder="e.g. 1"
                                            value={formData.gap}
                                            onChange={(e) => setFormData({ ...formData, gap: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">IELTS / PTE / TOEFL Score</label>
                                    <Input
                                        type="number"
                                        placeholder="e.g. 7.0"
                                        value={formData.englishScore}
                                        onChange={(e) => setFormData({ ...formData, englishScore: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Financial Status</label>
                                    <Select
                                        value={formData.funds}
                                        onChange={(e) => setFormData({ ...formData, funds: e.target.value })}
                                        options={[
                                            { label: "High (Full Tuition + Living Covered)", value: "high" },
                                            { label: "Medium (Tuition Covered)", value: "medium" },
                                            { label: "Low (Applying for Loan)", value: "low" },
                                        ]}
                                    />
                                </div>

                                <Button size="lg" className="w-full mt-4" onClick={handlePredict}>
                                    Check My Chances
                                </Button>
                            </div>
                        </Card>

                        <div className="lg:pl-8">
                            {/* Result Card */}
                            <Card className={`p-8 shadow-xl border-t-8 transition-all duration-500 ${!chance ? 'border-gray-200 bg-gray-50' : chance > 70 ? 'border-green-500 bg-white' : chance > 40 ? 'border-yellow-500 bg-white' : 'border-red-500 bg-white'}`}>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                    <FileCheck className="mr-3 h-6 w-6 text-primary" />
                                    Prediction Result
                                </h3>

                                {chance !== null ? (
                                    <div className="text-center">
                                        <div className="relative h-40 w-40 mx-auto mb-6 flex items-center justify-center">
                                            {/* Simple CSS Doughnut */}
                                            <div
                                                className="absolute inset-0 rounded-full border-[12px]"
                                                style={{
                                                    borderColor: '#e5e7eb',
                                                    borderTopColor: chance > 70 ? '#22c55e' : chance > 40 ? '#eab308' : '#ef4444',
                                                    transform: `rotate(${(chance / 100) * 360}deg)`,
                                                    transition: 'all 1s ease-out'
                                                }}
                                            />
                                            {/* Full circle background for track */}
                                            <div className="absolute inset-0 rounded-full border-[12px] border-gray-200 opacity-30" />

                                            <div className="text-4xl font-bold text-gray-900">{chance}%</div>
                                        </div>

                                        <h4 className="text-2xl font-bold mb-3" style={{ color: chance > 70 ? '#16a34a' : chance > 40 ? '#ca8a04' : '#dc2626' }}>
                                            {chance > 80 ? 'High Probability' : chance > 50 ? 'Medium Probability' : 'Low Probability'}
                                        </h4>
                                        <p className="text-gray-600 mb-8">{message}</p>

                                        <div className="bg-blue-50 p-4 rounded-lg text-left">
                                            <h5 className="font-semibold text-blue-900 mb-2 flex items-center text-sm">
                                                <AlertCircle className="h-4 w-4 mr-2" />
                                                Expert Tip:
                                            </h5>
                                            <p className="text-sm text-blue-800">
                                                {chance > 70
                                                    ? "Your profile looks strong. Ensure your financial documents are recent and verifiable."
                                                    : "Consider retaking IELTS to boost your score above 7.0, or provide strong work experience letters to cover the gap."
                                                }
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center py-12 text-gray-400">
                                        <div className="bg-white h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-200 shadow-sm">
                                            <FileCheck className="h-10 w-10 text-gray-300" />
                                        </div>
                                        <p>Fill out the form to see your visa approval chances.</p>
                                    </div>
                                )}
                            </Card>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
