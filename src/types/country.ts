export interface Country {
    id: string;
    name: string;
    slug: string;
    description: string;
    image: string;
    details: {
        overview: string;
        visaTypes: { name: string; description: string }[]; // Keeping for backward compatibility if needed, but we'll prefer the new structure
        whyChoose: string[];
        popularVisas: {
            title: string;
            description: string;
            icon: "green-card" | "student" | "work" | "tourist" | "business";
            slug: string;
            content?: {
                intro: string;
                keyFeatures: string[];
                eligibility: string[];
                documents: string[];
            }
        }[];
        visaCategories: {
            immigrant: string[];
            nonImmigrant: string[];
        };
        faqs: { question: string; answer: string }[];
        mbbsContent?: {
            title: string;
            description: string;
            metaDescription: string;
            highlights: { label: string; value: string }[];
            aboutCourse: string;
            whyStudy: { title: string; description: string }[];
            universities: string[];
            eligibility: string[];
            documents: string[];
            admissionProcess: string[];
            syllabus: { semester: string; subjects: string[] }[];
            additionalSections: { title: string; content: string }[];
            faqs: { question: string; answer: string }[];
        };
    };
}
