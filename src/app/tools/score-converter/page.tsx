"use client";

import React, { useState } from "react";
import { Container, Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Form";
import { Card } from "@/components/ui/Card";
import { ArrowLeftRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function ScoreConverterPage() {
    const [scoreType, setScoreType] = useState("IELTS");
    const [score, setScore] = useState("");
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState("");

    const convert = () => {
        setError("");
        setResult(null);

        const val = parseFloat(score);
        if (isNaN(val)) {
            setError("Please enter a valid numeric score.");
            return;
        }

        let output = { ielts: "-", toefl: "-", pte: "-" };

        // Ranges based on common concordance tables
        // Logic: Convert input to a common baseline (approx IELTS score) then map to others

        let estimatedIelts = 0;

        if (scoreType === "IELTS") {
            if (val < 0 || val > 9) { setError("IELTS score must be between 0 and 9."); return; }
            estimatedIelts = val;
        } else if (scoreType === "TOEFL") {
            if (val < 0 || val > 120) { setError("TOEFL score must be between 0 and 120."); return; }
            if (val >= 118) estimatedIelts = 9.0;
            else if (val >= 115) estimatedIelts = 8.5;
            else if (val >= 110) estimatedIelts = 8.0;
            else if (val >= 102) estimatedIelts = 7.5;
            else if (val >= 94) estimatedIelts = 7.0;
            else if (val >= 79) estimatedIelts = 6.5;
            else if (val >= 60) estimatedIelts = 6.0;
            else if (val >= 46) estimatedIelts = 5.5;
            else if (val >= 35) estimatedIelts = 5.0;
            else estimatedIelts = 4.5; // Simplified lower bound
        } else if (scoreType === "PTE") {
            if (val < 10 || val > 90) { setError("PTE score must be between 10 and 90."); return; }
            if (val >= 89) estimatedIelts = 9.0;
            else if (val >= 83) estimatedIelts = 8.5;
            else if (val >= 78) estimatedIelts = 8.0;
            else if (val >= 73) estimatedIelts = 7.5;
            else if (val >= 65) estimatedIelts = 7.0;
            else if (val >= 58) estimatedIelts = 6.5;
            else if (val >= 50) estimatedIelts = 6.0;
            else if (val >= 42) estimatedIelts = 5.5;
            else if (val >= 36) estimatedIelts = 5.0;
            else estimatedIelts = 4.5;
        }

        // Generate outputs from estimated IELTS baseline
        output.ielts = estimatedIelts.toString(); // Exact mapping

        // Map IELTS to TOEFL range
        if (estimatedIelts >= 9.0) output.toefl = "118-120";
        else if (estimatedIelts >= 8.5) output.toefl = "115-117";
        else if (estimatedIelts >= 8.0) output.toefl = "110-114";
        else if (estimatedIelts >= 7.5) output.toefl = "102-109";
        else if (estimatedIelts >= 7.0) output.toefl = "94-101";
        else if (estimatedIelts >= 6.5) output.toefl = "79-93";
        else if (estimatedIelts >= 6.0) output.toefl = "60-78";
        else if (estimatedIelts >= 5.5) output.toefl = "46-59";
        else output.toefl = "35-45";

        // Map IELTS to PTE range
        if (estimatedIelts >= 9.0) output.pte = "89-90";
        else if (estimatedIelts >= 8.5) output.pte = "83-88";
        else if (estimatedIelts >= 8.0) output.pte = "78-82";
        else if (estimatedIelts >= 7.5) output.pte = "73-77";
        else if (estimatedIelts >= 7.0) output.pte = "65-72";
        else if (estimatedIelts >= 6.5) output.pte = "58-64";
        else if (estimatedIelts >= 6.0) output.pte = "50-57";
        else if (estimatedIelts >= 5.5) output.pte = "42-49";
        else output.pte = "36-41";

        setResult(output);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white py-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/grid-pattern.svg')]"></div>
                <Container className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Score Converter</h1>
                    <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
                        Instantly convert your English proficiency scores. Compare IELTS, TOEFL, and PTE equivalents with high accuracy.
                    </p>
                </Container>
            </div>

            <Section className="py-12 -mt-10">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <Card className="p-8 bg-white shadow-xl rounded-2xl mb-12 border-0">
                            <div className="flex flex-col md:flex-row items-end gap-6">
                                <div className="flex-1 w-full">
                                    <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Test Type</label>
                                    <Select
                                        value={scoreType}
                                        onChange={(e) => setScoreType(e.target.value)}
                                        options={[
                                            { label: "IELTS", value: "IELTS" },
                                            { label: "TOEFL iBT", value: "TOEFL" },
                                            { label: "PTE Academic", value: "PTE" }
                                        ]}
                                        className="h-12 text-lg"
                                    />
                                </div>
                                <div className="flex-1 w-full">
                                    <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Your Score</label>
                                    <Input
                                        placeholder={`Enter ${scoreType} score...`}
                                        value={score}
                                        onChange={(e) => setScore(e.target.value)}
                                        type="number"
                                        className="h-12 text-lg"
                                    />
                                </div>
                                <Button onClick={convert} size="lg" className="w-full md:w-auto h-12 px-8 text-lg font-bold">
                                    Convert Score
                                </Button>
                            </div>

                            {error && (
                                <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-xl flex items-center animate-pulse">
                                    <AlertCircle className="w-5 h-5 mr-2" />
                                    {error}
                                </div>
                            )}
                        </Card>

                        {result && (
                            <div className="grid md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <ScoreCard
                                    label="IELTS"
                                    score={result.ielts}
                                    color="blue"
                                    active={scoreType === "IELTS"}
                                />
                                <ScoreCard
                                    label="TOEFL iBT"
                                    score={result.toefl}
                                    color="green"
                                    active={scoreType === "TOEFL"}
                                />
                                <ScoreCard
                                    label="PTE Academic"
                                    score={result.pte}
                                    color="orange"
                                    active={scoreType === "PTE"}
                                />
                            </div>
                        )}

                        {/* Quick Reference Table */}
                        <div className="mt-16">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <ArrowLeftRight className="mr-3 text-primary" />
                                Quick Reference Guide
                            </h3>
                            <Card className="overflow-hidden shadow-lg border-0 rounded-2xl">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left">
                                        <thead className="text-xs text-white uppercase bg-gray-800">
                                            <tr>
                                                <th className="px-6 py-4">IELTS</th>
                                                <th className="px-6 py-4">TOEFL iBT</th>
                                                <th className="px-6 py-4">PTE Academic</th>
                                                <th className="px-6 py-4">Proficiency Level</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            <TableRow ielts="9.0" toefl="118-120" pte="89-90" level="Expert" />
                                            <TableRow ielts="8.5" toefl="115-117" pte="83-88" level="Very Good" />
                                            <TableRow ielts="8.0" toefl="110-114" pte="78-82" level="Very Good" />
                                            <TableRow ielts="7.5" toefl="102-109" pte="73-77" level="Good" />
                                            <TableRow ielts="7.0" toefl="94-101" pte="65-72" level="Good" />
                                            <TableRow ielts="6.5" toefl="79-93" pte="58-64" level="Competent" />
                                            <TableRow ielts="6.0" toefl="60-78" pte="50-57" level="Competent" />
                                            <TableRow ielts="5.5" toefl="46-59" pte="42-49" level="Modest" />
                                        </tbody>
                                    </table>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}

function ScoreCard({ label, score, color, active }: { label: string, score: string, color: string, active: boolean }) {
    const colorClasses: any = {
        blue: "bg-blue-50 border-blue-100 text-blue-900 ring-blue-500",
        green: "bg-emerald-50 border-emerald-100 text-emerald-900 ring-emerald-500",
        orange: "bg-orange-50 border-orange-100 text-orange-900 ring-orange-500",
    };

    return (
        <div className={`
             relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-300
             ${colorClasses[color]} 
             ${active ? "ring-2 shadow-lg scale-105 bg-white z-10" : "border shadow-sm hover:shadow-md"}
        `}>
            {active && (
                <div className="absolute top-0 right-0 p-2">
                    <CheckCircle2 className={`w-6 h-6 text-${color}-600`} />
                </div>
            )}
            <div className={`text-sm uppercase font-bold tracking-wider mb-3 opacity-70`}>{label}</div>
            <div className="text-4xl md:text-5xl font-extrabold tracking-tight">{score}</div>
        </div>
    );
}

function TableRow({ ielts, toefl, pte, level }: any) {
    return (
        <tr className="bg-white hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 font-medium text-gray-900">{ielts}</td>
            <td className="px-6 py-4 text-gray-600">{toefl}</td>
            <td className="px-6 py-4 text-gray-600">{pte}</td>
            <td className="px-6 py-4">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {level}
                </span>
            </td>
        </tr>
    );
}
