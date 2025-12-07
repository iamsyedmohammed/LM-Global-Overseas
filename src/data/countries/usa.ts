import { Country } from "../../types/country";

export const usa: Country = {
    id: "usa",
    name: "United States of America",
    slug: "usa",
    description: "Home to top universities and endless career opportunities.",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&q=80",
    details: {
        overview: "The United States has been a beacon of opportunity for millions around the globe. Known for its robust economy, world-leading education system, and diverse cultural landscape, the US offers unparalleled avenues for personal and professional growth.\n\nFrom the tech hubs of Silicon Valley to the financial districts of New York, the opportunities are endless. Whether you are seeking higher education, specialized medical training, or career advancement, the US provides a dynamic environment to achieve your American Dream.",
        visaTypes: [
            { name: "F-1 Student Visa", description: "For academic studies at US universities" },
            { name: "H-1B Work Visa", description: "For specialty occupation workers" },
        ],
        whyChoose: [
            "Top-ranked universities globally",
            "Diverse career opportunities",
            "Innovation and technology hub",
            "OPT work authorization for students",
            "Pathway to Green Card",
        ],
        popularVisas: [
            { title: "Employment-Based Green Card", description: "Permanent residence for skilled workers in fields with labor shortages or exceptional ability.", icon: "green-card", slug: "employment-green-card" },
            { title: "Student Visa (F1, M1)", description: "The primary gateway for international students to study at accredited US institutions.", icon: "student", slug: "student-visa-f1-m1" },
            { title: "Work Visa (H-1B, L-1)", description: "For specialized professionals and intra-company transferees to work in the US.", icon: "work", slug: "work-visa-h1b" }
        ],
        visaCategories: {
            immigrant: [
                "Family-Sponsored Visas (F1, F2, F3, F4)",
                "Employment-Based Visas (EB-1, EB-2, EB-3)",
                "Diversity Visa (Green Card Lottery)",
                "Adoption Visas"
            ],
            nonImmigrant: [
                "Business & Tourist Visas (B1/B2)",
                "Student Visas (F-1, M-1)",
                "Exchange Visitor Visa (J-1)",
                "Temporary Work Visas (H-1B, L-1, O-1)"
            ]
        },
        faqs: [
            { question: "What is the difference between an immigrant and non-immigrant visa?", answer: "Immigrant visas are for growing permanently in the US (Green Card), while non-immigrant visas are for temporary stays like tourism, study, or work." },
            { question: "Can foreign students work in the USA?", answer: "Yes, F-1 students can work on-campus part-time. They can also work off-campus through OPT (Optional Practical Training) and CPT (Curricular Practical Training)." },
            { question: "What is H-1B Visa?", answer: "The H-1B is a non-immigrant visa that allows US companies to employ graduate level workers in specialty occupations." },
            { question: "How can I obtain a Green Card?", answer: "Common pathways include employment sponsorship (EB visas), family sponsorship, or the Diversity Visa Lottery." },
            { question: "What is the J-1 Visa?", answer: "The J-1 visa is for individuals approved to participate in work-and-study-based exchange visitor programs." },
            { question: "Do I need an IELTS/TOEFL score?", answer: "Most universities require English proficiency tests, but requirements vary. Some work visas do not explicitly require them, but employers might." },
            { question: "How long does the visa process take?", answer: "Processing times vary significantly by visa type and country of origin, ranging from a few weeks (for students) to several months or years (for some green cards)." }
        ]
    },
};
