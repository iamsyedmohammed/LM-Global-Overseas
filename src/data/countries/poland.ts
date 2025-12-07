import { Country } from "../../types/country";

export const poland: Country = {
    id: "poland",
    name: "Poland",
    slug: "poland",
    description: "Affordable education and gateway to the European Union.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    details: {
        overview: "Poland is an emerging destination for international students due to its affordable tuition fees.",
        visaTypes: [
            { name: "Student Visa", description: "For students" },
        ],
        whyChoose: [
            "Affordable tuition",
            "EU member state",
            "Low cost of living",
        ],
        popularVisas: [
            { title: "Type D National Visa", description: "For stays over 90 days (e.g., work, study).", icon: "green-card", slug: "type-d-national-visa" },
            { title: "Student Visa", description: "Study at Polish universities.", icon: "student", slug: "student-visa" },
            { title: "Work Permit (Type A)", description: "Standard work permit for foreigners.", icon: "work", slug: "work-permit-type-a" }
        ],
        visaCategories: {
            immigrant: [
                "Temporary Residence Permit (Karta Pobytu)",
                "Permanent Residence Permit"
            ],
            nonImmigrant: [
                "National Visa (Type D)",
                "Schengen Visa (Type C)"
            ]
        },
        faqs: [
            { question: "Can I work in other EU countries?", answer: "A Polish student visa allows you to travel in Schengen, but working usually requires a specific permit for that country." }
        ]
    },
};
