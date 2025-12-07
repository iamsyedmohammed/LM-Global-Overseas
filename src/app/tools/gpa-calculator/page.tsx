"use client";

import React, { useState } from "react";
import { Container, Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Form";
import { Card } from "@/components/ui/Card";
import { Plus, Trash2, Calculator, Info } from "lucide-react";

interface Subject {
    id: string;
    name: string;
    grade: string;
    credits: string;
}

const gradeScales = {
    "4.0": { A: 4.0, "A-": 3.7, "B+": 3.3, B: 3.0, "B-": 2.7, "C+": 2.3, C: 2.0, "C-": 1.7, D: 1.0, F: 0.0 },
    "10.0": { O: 10, "A+": 9, A: 8, "B+": 7, B: 6, C: 5, P: 4, F: 0 }
};

export default function GpaCalculatorPage() {
    const [subjects, setSubjects] = useState<Subject[]>([
        { id: "1", name: "", grade: "", credits: "" },
        { id: "2", name: "", grade: "", credits: "" },
        { id: "3", name: "", grade: "", credits: "" },
    ]);
    const [scale, setScale] = useState<"4.0" | "percentage">("4.0");
    const [result, setResult] = useState<number | null>(null);

    const addSubject = () => {
        setSubjects([...subjects, { id: Date.now().toString(), name: "", grade: "", credits: "" }]);
    };

    const removeSubject = (id: string) => {
        if (subjects.length > 1) {
            setSubjects(subjects.filter((s) => s.id !== id));
        }
    };

    const updateSubject = (id: string, field: keyof Subject, value: string) => {
        setSubjects(subjects.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
    };

    const calculateGPA = () => {
        let totalPoints = 0;
        let totalCredits = 0;
        let valid = true;

        subjects.forEach((s) => {
            if (!s.grade || !s.credits) return;

            const credits = parseFloat(s.credits);
            if (isNaN(credits)) {
                valid = false;
                return;
            }

            if (scale === "4.0") {
                const gradePoint = gradeScales["4.0"][s.grade.toUpperCase() as keyof typeof gradeScales["4.0"]];
                if (gradePoint !== undefined) {
                    totalPoints += gradePoint * credits;
                    totalCredits += credits;
                }
            } else {
                // Percentage Calculation
                const percentage = parseFloat(s.grade);
                if (!isNaN(percentage)) {
                    // Simple US Conversion: (Percentage / 20) roughly maps to 5.0 scale, -1 for 4.0? 
                    // Let's use standard WES approx: 
                    // 90-100 = 4.0, 80-89 = 3.33, etc.
                    // For simplicity, we will output weighted percentage.
                    totalPoints += percentage * credits;
                    totalCredits += credits;
                }
            }
        });

        if (totalCredits > 0 && valid) {
            setResult(totalPoints / totalCredits);
        } else {
            alert("Please enter valid grades and credits.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-primary text-white py-16">
                <Container>
                    <h1 className="text-4xl font-bold mb-4">GPA Calculator</h1>
                    <p className="text-xl text-blue-100 max-w-2xl">
                        Easily calculate your Cumulative Grade Point Average (CGPA) or major GPA to see where you stand for university admissions.
                    </p>
                </Container>
            </div>

            <Section>
                <Container>
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            <Card className="p-6 bg-white shadow-sm border border-gray-200">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold text-gray-900">Enter Your Grades</h2>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-500">Scale:</span>
                                        <select
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2"
                                            value={scale}
                                            onChange={(e) => {
                                                setScale(e.target.value as any);
                                                setResult(null);
                                            }}
                                        >
                                            <option value="4.0">4.0 Scale (Letter Grades)</option>
                                            <option value="percentage">Percentage (0-100)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="grid grid-cols-12 gap-4 text-sm font-semibold text-gray-500 mb-2 px-2">
                                        <div className="col-span-1">#</div>
                                        <div className="col-span-5">Subject Name (Optional)</div>
                                        <div className="col-span-3">Grade {scale === '4.0' ? '(e.g. A, B+)' : '(%)'}</div>
                                        <div className="col-span-2">Credits</div>
                                        <div className="col-span-1"></div>
                                    </div>

                                    {subjects.map((subject, index) => (
                                        <div key={subject.id} className="grid grid-cols-12 gap-4 items-center">
                                            <div className="col-span-1 text-center text-gray-400 font-medium">{index + 1}</div>
                                            <div className="col-span-5">
                                                <Input
                                                    placeholder="e.g. Math"
                                                    value={subject.name}
                                                    onChange={(e) => updateSubject(subject.id, "name", e.target.value)}
                                                />
                                            </div>
                                            <div className="col-span-3">
                                                <Input
                                                    placeholder={scale === '4.0' ? "A" : "85"}
                                                    value={subject.grade}
                                                    onChange={(e) => updateSubject(subject.id, "grade", e.target.value)}
                                                />
                                            </div>
                                            <div className="col-span-2">
                                                <Input
                                                    placeholder="3"
                                                    type="number"
                                                    value={subject.credits}
                                                    onChange={(e) => updateSubject(subject.id, "credits", e.target.value)}
                                                />
                                            </div>
                                            <div className="col-span-1 flex justify-center">
                                                <button
                                                    onClick={() => removeSubject(subject.id)}
                                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                                    <Button variant="outline" onClick={addSubject} className="border-dashed border-gray-300 text-gray-600 hover:border-primary hover:text-primary">
                                        <Plus className="mr-2 h-4 w-4" /> Add Subject
                                    </Button>
                                    <Button onClick={calculateGPA} className="ml-auto w-full sm:w-auto">
                                        Calculate GPA
                                    </Button>
                                </div>
                            </Card>
                        </div>

                        <div className="lg:col-span-1">
                            <Card className="p-6 bg-white shadow-lg border-t-4 border-primary sticky top-24">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                    <Calculator className="mr-2 h-5 w-5 text-primary" />
                                    Your Results
                                </h3>

                                {result !== null ? (
                                    <div className="text-center py-8">
                                        <div className="text-sm text-gray-500 mb-1">Your Calculated GPA</div>
                                        <div className="text-5xl font-bold text-primary mb-2">
                                            {result.toFixed(2)}
                                        </div>
                                        <div className="text-sm text-green-600 font-medium bg-green-50 inline-block px-3 py-1 rounded-full">
                                            {scale === '4.0' ? 'Out of 4.0' : '% Weighted Average'}
                                        </div>
                                        <p className="mt-6 text-sm text-gray-500">
                                            {scale === '4.0' && result >= 3.5 && "Excellent! You are eligible for top tier universities."}
                                            {scale === '4.0' && result >= 3.0 && result < 3.5 && "Great score! Most good universities are within reach."}
                                            {scale === '4.0' && result < 3.0 && "Good effort. Consider focusing on your Statement of Purpose."}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="text-center py-12 text-gray-400">
                                        <p>Enter your grades and click calculate to see your result.</p>
                                    </div>
                                )}

                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                                        <Info className="h-4 w-4 mr-2 text-blue-500" />
                                        Did you know?
                                    </h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        Most US universities require a minimum GPA of 3.0 on a 4.0 scale for Master's programs. However, a holistic profile with strong LORs and SOP can offset a lower GPA.
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
