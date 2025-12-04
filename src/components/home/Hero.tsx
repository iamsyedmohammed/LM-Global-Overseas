import React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Section";

export function Hero() {
    return (
        <section className="relative flex min-h-[80vh] items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 opacity-20 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80')" }}
            />

            <Container className="relative z-10 grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:leading-tight">
                        Your Trusted <span className="text-accent">Education & Immigration</span> Partner
                    </h1>
                    <p className="text-lg text-gray-200 md:text-xl max-w-lg">
                        Empowering students and professionals to achieve their global education and career dreams. Expert guidance for Study, Work, and PR visas worldwide.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://wa.me/917997051424"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                                <Phone className="mr-2 h-5 w-5" />
                                Chat on WhatsApp
                            </Button>
                        </a>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 hover:text-white">
                                Book Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                    <div className="pt-8 flex items-center gap-8 text-sm text-gray-300">
                        <div>
                            <p className="font-bold text-2xl text-white">500+</p>
                            <p>Visas Approved</p>
                        </div>
                        <div>
                            <p className="font-bold text-2xl text-white">98%</p>
                            <p>Success Rate</p>
                        </div>
                        <div>
                            <p className="font-bold text-2xl text-white">10+</p>
                            <p>Years Experience</p>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="hidden md:block relative">
                    <div className="relative h-[500px] w-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 shadow-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
                            alt="Immigration Success"
                            className="h-full w-full rounded-xl object-cover"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
