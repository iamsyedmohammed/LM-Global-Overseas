"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "../ui/Button";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Countries", href: "/countries" },
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
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-100"
                    : "bg-white/80 backdrop-blur-md border-b border-gray-200"
            )}
        >
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                            <span className="text-white font-bold text-lg">LM</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-primary leading-none">LM Global</span>
                            <span className="text-xs font-medium text-gray-500 leading-none">Overseas</span>
                        </div>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                                    isActive
                                        ? "text-primary bg-blue-50"
                                        : "text-gray-700 hover:text-primary hover:bg-gray-50"
                                )}
                            >
                                {item.name}
                                {isActive && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-3">
                    <a
                        href="https://wa.me/917997051424"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden lg:block"
                    >
                        <Button variant="secondary" size="sm" className="shadow-md hover:shadow-lg transition-shadow">
                            <Phone className="mr-2 h-4 w-4" />
                            +91 79970 51424
                        </Button>
                    </a>

                    <button
                        className={cn(
                            "lg:hidden p-2 rounded-lg transition-colors",
                            isOpen ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-100"
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all duration-200",
                                            isActive
                                                ? "bg-primary text-white shadow-md"
                                                : "text-gray-700 hover:bg-blue-50 hover:text-primary"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span>{item.name}</span>
                                        {isActive && <div className="h-2 w-2 rounded-full bg-white" />}
                                    </Link>
                                );
                            })}
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
