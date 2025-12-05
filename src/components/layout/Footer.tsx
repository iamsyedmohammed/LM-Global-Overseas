import React from "react";
import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand & About */}
                    <div>
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-2xl font-bold text-white">LM Global</span>
                            <span className="block text-sm text-gray-400">Overseas</span>
                        </Link>
                        <p className="text-gray-400 mb-6">
                            Your trusted education and immigration consultant. Empowering students and professionals to achieve their global education and career dreams.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/lm_globaloverseas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-pink-500 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/lm-global-overseas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-500 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="https://wa.me/917997051424"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-green-500 transition-colors"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-accent transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-400 hover:text-accent transition-colors">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/countries" className="text-gray-400 hover:text-accent transition-colors">
                                    Countries
                                </Link>
                            </li>
                            <li>
                                <Link href="/tools" className="text-gray-400 hover:text-accent transition-colors">
                                    Visa Tools
                                </Link>
                            </li>
                            <li>
                                <Link href="/testimonials" className="text-gray-400 hover:text-accent transition-colors">
                                    Success Stories
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-accent transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/services/study-visa" className="text-gray-400 hover:text-accent transition-colors">
                                    Study Visa
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/work-visa" className="text-gray-400 hover:text-accent transition-colors">
                                    Work Visa
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/pr-visa" className="text-gray-400 hover:text-accent transition-colors">
                                    PR Visa
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/visitor-visa" className="text-gray-400 hover:text-accent transition-colors">
                                    Visitor Visa
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/dependent-visa" className="text-gray-400 hover:text-accent transition-colors">
                                    Dependent Visa
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                                <span className="text-gray-400">
                                    Hyderabad, Telangana, <br />
                                    India
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-accent shrink-0" />
                                <a href="tel:+917997051424" className="text-gray-400 hover:text-accent transition-colors">
                                    +91 79970 51424
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-accent shrink-0" />
                                <a href="mailto:info@lmglobaloverseas.com" className="text-gray-400 hover:text-accent transition-colors">
                                    info@lmglobaloverseas.com
                                </a>
                            </li>
                        </ul>
                        <p className="text-xs text-gray-500 mt-4">
                            Mon-Sat: 12:00 PM - 8:00 PM
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} LM Global Overseas. All rights reserved.</p>
                    <div className="mt-2 space-x-4">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
