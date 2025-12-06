import React from "react";
import { Metadata } from "next";
import { successStories } from "@/data/success-stories";
import { Card } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Section";
import { Quote, GraduationCap, MapPin } from "lucide-react";

export const metadata: Metadata = {
    title: "Success Stories | LM Global Overseas",
    description: "Read inspiring stories of students who achieved their study abroad dreams with LM Global Overseas.",
};

export default function SuccessStoriesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <div className="bg-primary text-white py-20">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h1>
                    <p className="text-xl text-blue-100 max-w-2xl">
                        Join thousands of students who have successfully started their global journey with us.
                    </p>
                </Container>
            </div>

            {/* Stories Grid */}
            <Section>
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {successStories.map((story) => (
                            <Card key={story.id} hoverEffect className="flex flex-col h-full relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Quote className="h-24 w-24 text-primary" />
                                </div>

                                <div className="flex items-center gap-4 mb-6 relative z-10">
                                    <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-primary/20">
                                        <img
                                            src={story.image}
                                            alt={story.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900">{story.name}</h3>
                                        <p className="text-sm text-gray-500">{story.year}</p>
                                    </div>
                                </div>

                                <div className="mb-6 flex-grow relative z-10">
                                    <p className="text-gray-600 italic leading-relaxed">
                                        "{story.quote}"
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-gray-100 space-y-2 text-sm text-gray-600 relative z-10">
                                    <div className="flex items-center">
                                        <GraduationCap className="h-4 w-4 mr-2 text-primary" />
                                        <span className="font-medium">{story.university}</span>
                                    </div>
                                    <div className="flex items-center pl-6">
                                        <span className="text-gray-500">{story.course}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                                        <span>{story.country}</span>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    );
}
