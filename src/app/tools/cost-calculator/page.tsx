"use client";

import React, { useState } from "react";
import { Container, Section } from "@/components/ui/Section";
import { Select } from "@/components/ui/Form";
import { Card } from "@/components/ui/Card";
import { Coins, MapPin, Home, ShoppingBasket, Bus, Wifi, Zap } from "lucide-react";

const cityData: any = {
    "London, UK": { rent: 800, food: 300, transport: 150, misc: 200, currency: "£" },
    "New York, USA": { rent: 1500, food: 500, transport: 120, misc: 300, currency: "$" },
    "Toronto, Canada": { rent: 1200, food: 400, transport: 100, misc: 200, currency: "C$" },
    "Sydney, Australia": { rent: 1400, food: 450, transport: 130, misc: 250, currency: "A$" },
    "Berlin, Germany": { rent: 600, food: 250, transport: 80, misc: 150, currency: "€" },
    "Dubai, UAE": { rent: 3000, food: 1500, transport: 300, misc: 500, currency: "AED " },
};

export default function CostCalculatorPage() {
    const [city, setCity] = useState("London, UK");
    const [lifestyle, setLifestyle] = useState("Moderate");

    const data = cityData[city];
    const multiplier = lifestyle === "Frugal" ? 0.8 : lifestyle === "Luxury" ? 1.5 : 1;

    const costs = {
        rent: Math.round(data.rent * multiplier),
        food: Math.round(data.food * multiplier),
        transport: Math.round(data.transport * multiplier),
        misc: Math.round(data.misc * multiplier),
    };

    const total = Object.values(costs).reduce((a, b) => a + b, 0);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white py-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/grid-pattern.svg')]"></div>
                <Container className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Cost of Living Calculator</h1>
                    <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
                        Plan your finances effectively. Estimate your monthly expenses in top student cities worldwide with our smart calculator.
                    </p>
                </Container>
            </div>

            <Section className="py-12 -mt-10">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        {/* Controls */}
                        <Card className="p-8 bg-white shadow-xl rounded-2xl mb-10 border-0">
                            <div className="grid md:grid-cols-2 gap-8 items-end">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Select Your City</label>
                                    <Select
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        options={Object.keys(cityData).map(c => ({ label: c, value: c }))}
                                        className="h-12 text-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Lifestyle Preference</label>
                                    <Select
                                        value={lifestyle}
                                        onChange={(e) => setLifestyle(e.target.value)}
                                        options={[
                                            { label: "Frugal (Student Budget)", value: "Frugal" },
                                            { label: "Moderate (Standard)", value: "Moderate" },
                                            { label: "Luxury (Comfortable)", value: "Luxury" },
                                        ]}
                                        className="h-12 text-lg"
                                    />
                                </div>
                            </div>
                        </Card>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Detailed Breakdown */}
                            <div className="lg:col-span-2 space-y-6">
                                <Card className="bg-white shadow-xl rounded-2xl overflow-hidden border-0">
                                    <div className="p-8 border-b border-gray-100 bg-gray-50/50">
                                        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                                            <MapPin className="mr-3 h-6 w-6 text-primary" />
                                            Estimated Monthly Expenses in <span className="text-primary ml-2">{city}</span>
                                        </h2>
                                    </div>
                                    <div className="p-8 space-y-6">
                                        <ExpenseItem
                                            icon={<Home className="w-5 h-5 text-blue-500" />}
                                            label="Rent (Shared Accommodation)"
                                            amount={costs.rent}
                                            currency={data.currency}
                                        />
                                        <ExpenseItem
                                            icon={<ShoppingBasket className="w-5 h-5 text-green-500" />}
                                            label="Food & Groceries"
                                            amount={costs.food}
                                            currency={data.currency}
                                        />
                                        <ExpenseItem
                                            icon={<Bus className="w-5 h-5 text-purple-500" />}
                                            label="Public Transport"
                                            amount={costs.transport}
                                            currency={data.currency}
                                        />
                                        <ExpenseItem
                                            icon={<Wifi className="w-5 h-5 text-orange-500" />}
                                            label="Miscellaneous (Phone, Internet)"
                                            amount={costs.misc}
                                            currency={data.currency}
                                        />

                                        <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-100 flex flex-col md:flex-row justify-between items-center bg-blue-50/50 p-6 rounded-xl">
                                            <span className="text-lg font-bold text-gray-600 mb-2 md:mb-0">Total Estimated Cost</span>
                                            <div className="text-right">
                                                <span className="text-4xl font-extrabold text-primary block">{data.currency}{total}</span>
                                                <span className="text-sm text-gray-500 font-medium">per month</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>

                            {/* Sidebar / Tips */}
                            <div className="lg:col-span-1">
                                <Card className="p-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-xl rounded-2xl h-full border-0">
                                    <div className="flex items-center mb-6">
                                        <div className="p-2 bg-white/20 rounded-lg mr-3">
                                            <Coins className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="font-bold text-xl">Smart Budgeting Tips</h3>
                                    </div>
                                    <ul className="space-y-4 text-sm text-blue-50 leading-relaxed">
                                        <li className="flex items-start">
                                            <Zap className="h-4 w-4 mr-2 mt-1 shrink-0 text-yellow-300" />
                                            <span>Cook at home often. Meal prepping can save you significant amounts compared to eating out.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Zap className="h-4 w-4 mr-2 mt-1 shrink-0 text-yellow-300" />
                                            <span>Check for student discounts on public transport passes; most cities offer them.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Zap className="h-4 w-4 mr-2 mt-1 shrink-0 text-yellow-300" />
                                            <span>Shared accommodation is key. Splitting bills and rent is the best way to cut costs.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Zap className="h-4 w-4 mr-2 mt-1 shrink-0 text-yellow-300" />
                                            <span>Look for on-campus jobs or part-time work (up to 20hrs/week) to supplement your income.</span>
                                        </li>
                                    </ul>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}

function ExpenseItem({ icon, label, amount, currency }: { icon: React.ReactNode, label: string, amount: number, currency: string }) {
    return (
        <div className="flex items-center justify-between group hover:bg-gray-50 p-2 rounded-lg transition-colors">
            <div className="flex items-center">
                <div className="p-2 bg-gray-100 rounded-lg mr-4 group-hover:bg-white group-hover:shadow-sm transition-all">
                    {icon}
                </div>
                <span className="text-gray-700 font-medium">{label}</span>
            </div>
            <span className="font-bold text-lg text-gray-900">{currency}{amount}</span>
        </div>
    );
}
