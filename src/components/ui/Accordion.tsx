"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/components/ui/Button";

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onClick?: () => void;
}

export const AccordionItem = ({ title, children, isOpen, onClick }: AccordionItemProps) => {
    return (
        <div className="border border-neutral-light rounded-lg overflow-hidden mb-4 bg-white">
            <button
                className="w-full flex items-center justify-between p-4 text-left font-medium text-black hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={onClick}
            >
                {title}
                <ChevronDown
                    className={cn(
                        "h-5 w-5 text-neutral-cool transition-transform duration-200",
                        isOpen && "transform rotate-180"
                    )}
                />
            </button>
            <div
                className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="p-4 pt-0 text-neutral-cool leading-relaxed border-t border-gray-100/50">
                    {children}
                </div>
            </div>
        </div>
    );
};

export const Accordion = ({ items }: { items: { title: string; content: string }[] }) => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(index === openIndex ? null : index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};
