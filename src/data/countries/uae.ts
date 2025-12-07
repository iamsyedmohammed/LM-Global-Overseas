import { Country } from "../../types/country";

export const uae: Country = {
    id: "uae",
    name: "UAE",
    slug: "uae",
    description: "Tax-free income and luxury lifestyle in the Middle East.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    details: {
        overview: "The UAE offers a tax-free income, modern infrastructure, and a cosmopolitan lifestyle.",
        visaTypes: [
            { name: "Employment Visa", description: "For professionals" },
        ],
        whyChoose: [
            "Tax-free income",
            "Luxury lifestyle",
            "Safety",
        ],
        popularVisas: [
            { title: "Golden Visa", description: "Long-term residency for investors and talents.", icon: "green-card", slug: "golden-visa" },
            { title: "Employment Visa", description: "Standard work visa sponsored by employer.", icon: "work", slug: "employment-visa" },
            { title: "Remote Work Visa", description: "Live in Dubai while working for an overseas employer.", icon: "business", slug: "remote-work-visa" }
        ],
        visaCategories: {
            immigrant: [
                "Golden Visa (10 Years)",
                "Green Visa (5 Years)"
            ],
            nonImmigrant: [
                "Employment Visa",
                "Visit Visa",
                "Student Visa"
            ]
        },
        faqs: [
            { question: "Do I pay tax on my income?", answer: "No, there is currently no personal income tax in the UAE." }
        ]
    },
};
