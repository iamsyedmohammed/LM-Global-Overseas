import { Country } from "../../types/country";

export const germany: Country = {
    id: "germany",
    name: "Germany",
    slug: "germany",
    description: "Tuition-free education and strong job market for skilled professionals.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    details: {
        overview: "Germany offers tuition-free or low-cost education at public universities and has a booming economy.",
        visaTypes: [
            { name: "Student Visa", description: "For students" },
        ],
        whyChoose: [
            "Tuition-free education",
            "Strong economy",
            "Central Europe location",
        ],
        popularVisas: [
            { title: "EU Blue Card", description: "For highly skilled workers with a university degree.", icon: "work", slug: "eu-blue-card" },
            { title: "Student Visa", description: "Access free education at public universities.", icon: "student", slug: "student-visa" },
            { title: "Job Seeker Visa", description: "6 months to look for a job in Germany.", icon: "business", slug: "job-seeker-visa" }
        ],
        visaCategories: {
            immigrant: [
                "Settlement Permit (Niederlassungserlaubnis)",
                "EU Blue Card (leads to PR)"
            ],
            nonImmigrant: [
                "Student Visa",
                "Job Seeker Visa",
                "Schengen Visa"
            ]
        },
        faqs: [
            { question: "Is university really free?", answer: "Public universities are tuition-free for most programs, even for international students. You only pay a semester contribution." }
        ]
    },
};
