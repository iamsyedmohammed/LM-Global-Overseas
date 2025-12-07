import { Country } from "../../types/country";

export const canada: Country = {
    id: "canada",
    name: "Canada",
    slug: "canada",
    description: "Top destination for students and skilled workers with high quality of life.",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80",
    details: {
        overview: "Canada is one of the most welcoming countries for immigrants, offering excellent education, healthcare, and career opportunities. With programs like Express Entry and PNP, Canada makes it easier to obtain permanent residency.",
        visaTypes: [
            { name: "Study Permit", description: "For international students pursuing education in Canada" },
            { name: "Work Permit (LMIA)", description: "For skilled workers with a job offer" },
            { name: "Express Entry (PR)", description: "Points-based system for permanent residency" },
        ],
        whyChoose: [
            "High quality of life and safety",
            "World-class education system",
            "Pathway to permanent residency",
            "Multicultural society",
            "Strong economy and job market",
        ],
        popularVisas: [
            {
                title: "Express Entry (PR)",
                description: "Fast-track permanent residency for skilled workers.",
                icon: "green-card",
                slug: "express-entry"
            },
            {
                title: "Study Permit",
                description: "Study at top Canadian institutions with work rights.",
                icon: "student",
                slug: "study-permit"
            },
            {
                title: "Work Permit",
                description: "Work in Canada with an LMIA-approved offer.",
                icon: "work",
                slug: "work-permit"
            }
        ],
        visaCategories: {
            immigrant: [
                "Express Entry (Federal Skilled Worker)",
                "Provincial Nominee Program (PNP)",
                "Family Sponsorship",
                "Quebec-Selected Skilled Workers"
            ],
            nonImmigrant: [
                "Study Permit",
                "Post-Graduation Work Permit (PGWP)",
                "Visitor Visa",
                "Super Visa (for parents/grandparents)"
            ]
        },
        faqs: [
            { question: "How can I get PR in Canada?", answer: "The most common way is through the Express Entry system, which ranks candidates based on age, education, work experience, and language skills." },
        ]
    }
};
