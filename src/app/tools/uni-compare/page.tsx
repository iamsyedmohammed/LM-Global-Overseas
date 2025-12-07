"use client";

import React, { useState } from "react";
import { Container, Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Check, X, Scale } from "lucide-react";

export default function UniComparePage() {
    // comparison logic will be added here
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-primary text-white py-16">
                <Container>
                    <h1 className="text-4xl font-bold mb-4">University Comparator</h1>
                    <p className="text-xl text-blue-100 max-w-2xl">
                        Compare top universities side-by-side to make an informed decision.
                    </p>
                </Container>
            </div>
            <Section>
                <Container>
                    <div className="max-w-4xl mx-auto text-center py-12">
                        <Card className="p-12">
                            <Scale className="h-16 w-16 text-gray-300 mx-auto mb-6" />
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Comparison Tool Coming Soon</h2>
                            <p className="text-gray-600">We are currently updating our university database to provide you with the most accurate comparisons.</p>
                        </Card>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
