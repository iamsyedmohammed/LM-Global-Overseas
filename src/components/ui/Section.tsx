import React from "react";
import { cn } from "./Button";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    variant?: "default" | "muted" | "primary" | "dark";
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, variant = "default", children, ...props }, ref) => {
        const variants = {
            default: "bg-white text-gray-900",
            muted: "bg-gray-50 text-gray-900",
            primary: "bg-primary text-white",
            dark: "bg-gray-900 text-white",
        };

        return (
            <section
                ref={ref}
                className={cn("py-16 md:py-24", variants[variant], className)}
                {...props}
            >
                {children}
            </section>
        );
    }
);
Section.displayName = "Section";

export const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("container mx-auto px-4 md:px-6", className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);
Container.displayName = "Container";
