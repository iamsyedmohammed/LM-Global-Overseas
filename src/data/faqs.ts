export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: "General" | "Visa" | "Admission" | "Cost" | "Tests";
}

export const faqs: FAQ[] = [
    {
        id: "1",
        question: "What services does LM Global Overseas provide?",
        answer: "We provide end-to-end study abroad services including career counseling, university selection, application assistance, visa guidance, pre-departure briefing, and accommodation assistance.",
        category: "General",
    },
    {
        id: "2",
        question: "Do you charge for counseling?",
        answer: "Our initial counseling sessions are completely free. We help you understand your options and the process without any financial commitment.",
        category: "General",
    },
    {
        id: "3",
        question: "How long does the student visa process take?",
        answer: "The visa processing time varies by country. Generally, it takes 2-4 weeks for the UK and Australia, 4-8 weeks for Canada, and 2-3 weeks for the USA. We recommend applying at least 3 months in advance.",
        category: "Visa",
    },
    {
        id: "4",
        question: "What are the English language requirements?",
        answer: "Most universities require an English proficiency test like IELTS, TOEFL, or PTE. The score requirements depend on the university and the course level (UG/PG).",
        category: "Tests",
    },
    {
        id: "5",
        question: "Can I work while studying abroad?",
        answer: "Yes, most countries allow international students to work part-time (usually 20 hours per week) during the term and full-time during breaks.",
        category: "General",
    },
    {
        id: "6",
        question: "What is the cost of studying in the UK?",
        answer: "Tuition fees in the UK range from £12,000 to £25,000 per year depending on the course and university. Living expenses are approximately £9,000 - £12,000 per year.",
        category: "Cost",
    },
    {
        id: "7",
        question: "Do you help with scholarships?",
        answer: "Yes, we help identify scholarship opportunities you are eligible for and assist you with the application process to maximize your chances of receiving financial aid.",
        category: "Admission",
    },
    {
        id: "8",
        question: "What documents are required for university application?",
        answer: "Commonly required documents include academic transcripts, SOP (Statement of Purpose), LORs (Letters of Recommendation), resume/CV, and passport copy.",
        category: "Admission",
    },
];
