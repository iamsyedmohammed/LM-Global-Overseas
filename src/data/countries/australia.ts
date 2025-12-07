import { Country } from "../../types/country";

export const australia: Country = {
    id: "australia",
    name: "Australia",
    slug: "australia",
    description: "Great weather, lifestyle, and post-study work opportunities.",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80",
    details: {
        overview: "Australia is known for its high standard of living, beautiful landscapes, and excellent education system. The country offers generous post-study work rights and clear pathways to permanent residency.",
        visaTypes: [
            { name: "Student Visa (Subclass 500)", description: "For international students" },
        ],
        whyChoose: [
            "High quality of life",
            "Excellent weather and outdoor lifestyle",
            "Strong job market",
            "Post-study work rights",
            "Pathway to PR",
        ],
        popularVisas: [
            { title: "Skilled Independent Visa", description: "Points-based permanent visa for skilled workers.", icon: "green-card", slug: "skilled-independent-visa" },
            { title: "Student Visa", description: "Study and work part-time in Australia.", icon: "student", slug: "student-visa" },
            { title: "Temporary Graduate Visa", description: "Work in Australia after your studies.", icon: "work", slug: "temporary-graduate-visa" }
        ],
        visaCategories: {
            immigrant: [
                "Skilled Independent Visa (189)",
                "Skilled Nominated Visa (190)",
                "Employer Nomination Scheme (186)"
            ],
            nonImmigrant: [
                "Student Visa (Subclass 500)",
                "Temporary Skill Shortage Visa (482)",
                "Visitor Visa (600)",
                "Working Holiday Visa (417/462)"
            ]
        },
        faqs: [
            { question: "Can I migrate to Australia without a job offer?", answer: "Yes, the Skilled Independent Visa (Subclass 189) allows you to live and work in Australia as a permanent resident without needing an employer sponsor." },
            { question: "How long can I stay on a student visa?", answer: "You can stay for up to 5 years, in line with your enrollment." },
            { question: "What are the PR pathways?", answer: "Common pathways include the General Skilled Migration program (189, 190, 491 visas) and employer-sponsored visas." }
        ]
    },
};
