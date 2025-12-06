"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "../ui/Button";

const navItems = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Countries", href: "/countries" },
    { name: "Courses", href: "/courses" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Tools", href: "/tools" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header
            suppressHydrationWarning
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-neutral-light"
                    : "bg-white border-b border-neutral-light"
            )}
        >
            <div className="container mx-auto flex h-32 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative h-24 w-auto aspect-[3/1]">
                        <img
                            src="/logo.png"
                            alt="LM Global Overseas"
                            className="h-full w-auto object-contain"
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="px-4 py-2 text-lg font-medium text-neutral-dark hover:text-accent transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-3">
                    <a
                        href="https://wa.me/917997051424"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden lg:block"
                    >
                        <Button variant="secondary" size="lg" className="shadow-md hover:shadow-lg transition-shadow hover:scale-105 active:scale-95 duration-200 text-base">
                            <Phone className="mr-2 h-5 w-5" />
                            +91 79970 51424
                        </Button>
                    </a>

                    <button
                        className={cn(
                            "lg:hidden p-2 rounded-lg transition-colors",
                            isOpen ? "bg-primary text-primary-foreground" : "text-neutral-dark hover:bg-gray-100"
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="border-t bg-gradient-to-b from-white to-gray-50">
                    <div className="container mx-auto px-4 py-6">
                        <nav className="flex flex-col gap-2 mb-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-4 py-3 text-lg text-neutral-dark hover:text-accent font-medium transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="pt-4 border-t border-gray-200">
                            <a
                                href="https://wa.me/917997051424"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="w-full shadow-lg hover:shadow-xl transition-shadow" variant="primary" size="lg">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Book Free Consultation
                                </Button>
                            </a>
                            <p className="text-center text-xs text-gray-500 mt-3">
                                Available Mon-Sat, 12:00 PM - 8:00 PM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
