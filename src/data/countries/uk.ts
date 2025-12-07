import { Country } from "../../types/country";

export const uk: Country = {
    id: "uk",
    name: "United Kingdom",
    slug: "uk",
    description: "World-class education and career opportunities in the heart of Europe.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    details: {
        overview: "The UK offers prestigious universities, a rich cultural heritage, and excellent post-study work opportunities. The Graduate Route allows international students to work for 2-3 years after graduation.",
        visaTypes: [
            { name: "Student Visa (Tier 4)", description: "For students enrolled in UK universities" },
            { name: "Skilled Worker Visa (Tier 2)", description: "For professionals with a job offer" },
        ],
        whyChoose: [
            "World-renowned universities (Oxford, Cambridge, LSE)",
            "Post-study work opportunities (Graduate Route)",
            "Gateway to Europe with easy travel connections",
            "Rich history, culture, and iconic landmarks",
            "English-speaking country with no language barrier",
            "Free healthcare access via NHS (National Health Service)",
            "Shorter duration Master's degrees (typically 1 year)",
            "Diverse, multicultural, and inclusive society",
            "Strong economy with global financial hubs like London"
        ],
        popularVisas: [
            {
                title: "Skilled Worker Visa",
                description: "For professionals with a job offer from a UK licensed sponsor.",
                icon: "work",
                slug: "skilled-worker-visa",
                content: {
                    intro: "The Skilled Worker visa allows you to come to or stay in the UK to do an eligible job with an approved employer. This visa has replaced the Tier 2 (General) work visa.",
                    keyFeatures: [
                        "Stay for up to 5 years before needing to extend.",
                        "Work in an eligible job code.",
                        "Bring your partner and children as 'dependants'.",
                        "Pathway to Indefinite Leave to Remain (ILR) after 5 years."
                    ],
                    eligibility: [
                        "You must have a confirmed job offer from a UK employer that's approved by the Home Office.",
                        "You must have a 'certificate of sponsorship' from your employer.",
                        "Your job must be on the list of eligible occupations.",
                        "You must be paid a minimum salary (usually £26,200 or the 'going rate' for your job, whichever is higher).",
                        "You must meet the English language requirement."
                    ],
                    documents: [
                        "Certificate of Sponsorship reference number.",
                        "Proof of knowledge of English.",
                        "A valid passport.",
                        "Job title and annual salary.",
                        "Job's occupation code.",
                        "Name of your employer and their sponsor license number."
                    ]
                }
            },
            {
                title: "Student Visa",
                description: "Study at world-renowned UK universities.",
                icon: "student",
                slug: "student-visa",
                content: {
                    intro: "The Student visa allows you to come to the UK to study for a course with a licensed student sponsor. It was formerly known as the Tier 4 (General) Student visa.",
                    keyFeatures: [
                        "Study at a world-class institution.",
                        "Work up to 20 hours per week during term time.",
                        "Bring family members (dependants) in certain circumstances.",
                        "Apply for the Graduate Route after completing your course."
                    ],
                    eligibility: [
                        "Have an unconditional offer of a place on a course with a licensed student sponsor.",
                        "Have enough money to support yourself and pay for your course - this will vary depending on your circumstances.",
                        "Can speak, read, write and understand English.",
                        "Have consent from your parents if you're 16 or 17 years old."
                    ],
                    documents: [
                        "Confirmation of Acceptance for Studies (CAS).",
                        "Current passport.",
                        "Proof of financial support.",
                        "ATAS certificate (if required by your course).",
                        "Tuberculosis test results (if you're from a listed country)."
                    ]
                }
            },
            {
                title: "Graduate Route",
                description: "Work for 2 years after graduating from a UK university.",
                icon: "business",
                slug: "graduate-route",
                content: {
                    intro: "The Graduate route gives you permission to stay in the UK to study for a course with a licensed student sponsor. It was formerly known as the Tier 4 (General) Student visa.",
                    keyFeatures: [
                        "Work in most jobs.",
                        "Look for work.",
                        "Self-employment is permitted.",
                        "Bring your partner and children if they were dependants on your Student visa.",
                        "No minimum salary requirement.",
                        "No need for a job offer to apply."
                    ],
                    eligibility: [
                        "You must be in the UK.",
                        "Your current visa must be a Student visa or Tier 4 (General) student visa.",
                        "You must have studied a UK bachelor's degree, postgraduate degree or other eligible course for a minimum period of time with your Student visa or Tier 4 (General) student visa.",
                        "Your education provider has told the Home Office you've successfully completed your course."
                    ],
                    documents: [
                        "A valid passport.",
                        "Biometric Residence Permit (BRP), if you were given one when you applied for your Student visa.",
                        "Reference number from your most recent CAS."
                    ]
                }
            },
        ],
        visaCategories: {
            immigrant: [
                "Indefinite Leave to Remain (ILR)",
                "Innovator Founder Visa",
                "Global Talent Visa"
            ],
            nonImmigrant: [
                "Student Visa",
                "Skilled Worker Visa",
                "Graduate Route Visa",
                "Standard Visitor Visa"
            ]
        },
        faqs: [
            { question: "Can I stay in the UK after graduation?", answer: "Yes, the Graduate Route visa allows you to stay and work in the UK for 2 years (3 years for PhD) after completing your degree." },
            { question: "Do I need a job offer for a Student Visa?", answer: "No, you need an offer of a place on a course from a licensed student sponsor (university)." },
            { question: "What is the Skilled Worker Visa?", answer: "It allows you to come to or stay in the UK to do an eligible job with an approved employer." }
        ]
    },
};
