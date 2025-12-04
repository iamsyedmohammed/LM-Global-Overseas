import React from "react";
import { Metadata } from "next";
import { Section, Container } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us | LM Global Overseas",
    description: "Get in touch with LM Global Overseas for expert immigration consultation. Visit our office or contact us online.",
};

export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <div className="bg-primary text-white py-20">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-blue-100 max-w-2xl">
                        Have questions about your visa application? We are here to help. Reach out to us today.
                    </p>
                </Container>
            </div>

            <Section>
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 bg-blue-50 text-primary rounded-lg flex items-center justify-center shrink-0">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">Visit Our Office</h3>
                                        <p className="text-gray-600">
                                            Hyderabad, Telangana, <br />
                                            India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 bg-blue-50 text-primary rounded-lg flex items-center justify-center shrink-0">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                                        <p className="text-gray-600 mb-1">
                                            <a href="tel:+917997051424" className="hover:text-primary transition-colors">
                                                +91 79970 51424
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 bg-blue-50 text-primary rounded-lg flex items-center justify-center shrink-0">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                                        <p className="text-gray-600">
                                            <a href="mailto:info@lmglobaloverseas.com" className="hover:text-primary transition-colors">
                                                info@lmglobaloverseas.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 bg-blue-50 text-primary rounded-lg flex items-center justify-center shrink-0">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">Working Hours</h3>
                                        <p className="text-gray-600">Monday - Saturday: 12:00 PM - 8:00 PM</p>
                                        <p className="text-gray-600">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Embed */}
                            <div className="mt-12 h-64 bg-gray-200 rounded-xl overflow-hidden relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160419477!2d78.24323209999999!3d17.412608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0"
                                />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
