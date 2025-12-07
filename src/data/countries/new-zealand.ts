import { Country } from "../../types/country";

export const newZealand: Country = {
    id: "new-zealand",
    name: "New Zealand",
    slug: "new-zealand",
    description: "Stunning landscapes and excellent education with work opportunities.",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80",
    details: {
        overview: "New Zealand offers world-class education in a safe, welcoming environment with stunning natural beauty.",
        visaTypes: [
            { name: "Student Visa", description: "For full-time study" },
        ],
        whyChoose: [
            "Safe and peaceful environment",
            "High-quality education",
            "Post-study work opportunities",
        ],
        popularVisas: [
            { title: "Skilled Migrant", description: "Residents visa for people with skills NZ needs.", icon: "green-card", slug: "skilled-migrant" },
            { title: "Fee Paying Student Visa", description: "Study full-time at an approved provider.", icon: "student", slug: "fee-paying-student-visa" },
            { title: "Accredited Employer Work Visa", description: "Work for an accredited employer.", icon: "work", slug: "accredited-employer-work-visa" }
        ],
        visaCategories: {
            immigrant: [
                "Skilled Migrant Category Resident Visa",
                "Green List Straight to Residence Visa"
            ],
            nonImmigrant: [
                "Fee Paying Student Visa",
                "Post Study Work Visa",
                "Visitor Visa"
            ]
        },
        faqs: [
            { question: "Is education free in New Zealand?", answer: "Domestic students get first year free. International students pay full fees but can work part-time." }
        ]
    },
};
