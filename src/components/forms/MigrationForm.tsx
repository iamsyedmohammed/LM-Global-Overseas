"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

export function MigrationForm() {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-light">
            <h3 className="text-2xl font-bold mb-6 text-primary">Choose the Destination to migrate</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Nationality"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                        />
                    </div>
                    {/* New Fields */}
                    <div>
                        <select
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-500 bg-white"
                        >
                            <option value="">Marital Status</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="widowed">Widowed</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Current Occupation"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                        />
                    </div>
                    <div>
                        <select
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-500 bg-white"
                        >
                            <option value="">Level of Study</option>
                            <option value="high-school">High School</option>
                            <option value="bachelors">Bachelor's Degree</option>
                            <option value="masters">Master's Degree</option>
                            <option value="phd">PhD/Doctorate</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <select
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-500 bg-white"
                        >
                            <option value="">Select Destination</option>
                            <option value="usa">USA</option>
                            <option value="uk">UK</option>
                            <option value="canada">Canada</option>
                            <option value="australia">Australia</option>
                            <option value="germany">Germany</option>
                        </select>
                    </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                    <input type="checkbox" id="terms" className="rounded border-gray-300 text-primary focus:ring-primary" />
                    <label htmlFor="terms" className="text-sm text-gray-500">I agree to the terms and privacy policy</label>
                </div>

                <div className="pt-2 text-right">
                    <Button className="w-full md:w-auto px-8 bg-primary hover:bg-primary/90 text-white rounded-full">
                        Apply Now →
                    </Button>
                </div>
            </form>
        </div>
    );
}
