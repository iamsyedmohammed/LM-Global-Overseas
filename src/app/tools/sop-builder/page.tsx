"use client";

import React, { useState } from "react";
import { Container, Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Form";
import { Card } from "@/components/ui/Card";
import { FileText, Copy, Download } from "lucide-react";

export default function SopBuilderPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        targetCourse: "",
        targetUniversity: "",
        academicBackground: "",
        workExperience: "",
        futureGoals: "",
        whyThisCourse: "",
    });
    const [generatedSop, setGeneratedSop] = useState("");

    const handleGenerate = () => {
        const sop = `STATEMENT OF PURPOSE

To,
The Admissions Committee,
${formData.targetUniversity || "[University Name]"}

Respected Sir/Madam,

My name is ${formData.fullName || "[Name]"}, and I am writing this statement to express my sincere interest in pursuing the ${formData.targetCourse || "[Course Name]"} at your esteemed university.

Academic Background:
${formData.academicBackground || "[Details about academic history, achievements, and major projects.]"}

Professional Experience:
${formData.workExperience || "[Details about work experience, internships, and skills acquired.]"}

Why ${formData.targetCourse || "[Course Name]"}?:
${formData.whyThisCourse || "[Reason for choosing this specific field and how it aligns with interests.]"}

Why ${formData.targetUniversity || "[University Name]"}?:
I have chosen to apply to ${formData.targetUniversity || "[University Name]"} because of its excellent curriculum, distinguished faculty, and state-of-the-art research facilities.

Future Goals:
${formData.futureGoals || "[Short-term and long-term career objectives after graduation.]"}

I am confident that my academic background and passion for this field make me a suitable candidate for this program. I look forward to the opportunity to contribute to and learn from the academic community at your university.

Sincerely,
${formData.fullName || "[Name]"}`;

        setGeneratedSop(sop);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedSop);
        alert("SOP copied to clipboard!");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-primary text-white py-16">
                <Container>
                    <h1 className="text-4xl font-bold mb-4">SOP Builder</h1>
                    <p className="text-xl text-blue-100 max-w-2xl">
                        Create a strong draft for your Statement of Purpose (SOP) in minutes.
                    </p>
                </Container>
            </div>

            <Section>
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12">
                        <Card className="p-8 bg-white shadow-lg rounded-2xl h-fit">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <FileText className="mr-2 h-6 w-6 text-primary" />
                                Enter Your Details
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <Input
                                        placeholder="John Doe"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Target Course</label>
                                        <Input
                                            placeholder="MSc Computer Science"
                                            value={formData.targetCourse}
                                            onChange={(e) => setFormData({ ...formData, targetCourse: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Target University</label>
                                        <Input
                                            placeholder="University of Oxford"
                                            value={formData.targetUniversity}
                                            onChange={(e) => setFormData({ ...formData, targetUniversity: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Academic Background</label>
                                    <Textarea
                                        placeholder="Briefly describe your previous degree and key achievements..."
                                        value={formData.academicBackground}
                                        onChange={(e) => setFormData({ ...formData, academicBackground: e.target.value })}
                                        rows={3}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Work Experience</label>
                                    <Textarea
                                        placeholder="Describe any relevant work experience or internships..."
                                        value={formData.workExperience}
                                        onChange={(e) => setFormData({ ...formData, workExperience: e.target.value })}
                                        rows={3}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Why this Course?</label>
                                    <Textarea
                                        placeholder="What motivates you to study this subject?"
                                        value={formData.whyThisCourse}
                                        onChange={(e) => setFormData({ ...formData, whyThisCourse: e.target.value })}
                                        rows={3}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Future Goals</label>
                                    <Textarea
                                        placeholder="What do you want to achieve after graduating?"
                                        value={formData.futureGoals}
                                        onChange={(e) => setFormData({ ...formData, futureGoals: e.target.value })}
                                        rows={3}
                                    />
                                </div>

                                <Button size="lg" className="w-full mt-4" onClick={handleGenerate}>
                                    Generate Draft SOP
                                </Button>
                            </div>
                        </Card>

                        <div className="flex flex-col h-full">
                            <Card className="p-8 bg-white shadow-lg rounded-2xl flex-1 flex flex-col">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900">Your Draft SOP</h2>
                                    <Button variant="outline" size="sm" onClick={copyToClipboard} disabled={!generatedSop}>
                                        <Copy className="mr-2 h-4 w-4" /> Copy
                                    </Button>
                                </div>
                                <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-6 font-mono text-sm leading-relaxed whitespace-pre-wrap overflow-y-auto max-h-[600px]">
                                    {generatedSop ? generatedSop : (
                                        <span className="text-gray-400 italic">
                                            Your generated Statement of Purpose will appear here. Fill in the details on the left and click "Generate".
                                        </span>
                                    )}
                                </div>
                                <p className="text-xs text-red-500 mt-4">
                                    * This is an automated draft. Please review and edit it carefully before submitting for any official application.
                                </p>
                            </Card>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
