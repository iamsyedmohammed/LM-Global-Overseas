export interface Course {
    id: string;
    name: string;
    level: "UG" | "PG" | "Diploma" | "PhD";
    duration: string;
    fee: string;
    intake: string[];
}

export interface University {
    id: string;
    name: string;
    country: string;
    city: string;
    ranking?: number;
    image: string;
    description: string;
    courses: Course[];
}

export const universities: University[] = [
    {
        id: "uni-1",
        name: "University of Oxford",
        country: "UK",
        city: "Oxford",
        ranking: 1,
        image: "https://images.unsplash.com/photo-1531643681334-127dfdf63d85?auto=format&fit=crop&q=80&w=800",
        description: "The University of Oxford is a collegiate research university in Oxford, England. There is evidence of teaching as early as 1096, making it the oldest university in the English-speaking world.",
        courses: [
            {
                id: "c-1",
                name: "MSc Computer Science",
                level: "PG",
                duration: "1 Year",
                fee: "£32,000",
                intake: ["September"],
            },
            {
                id: "c-2",
                name: "BA Jurisprudence",
                level: "UG",
                duration: "3 Years",
                fee: "£28,000",
                intake: ["October"],
            },
        ],
    },
    {
        id: "uni-2",
        name: "Harvard University",
        country: "USA",
        city: "Cambridge",
        ranking: 2,
        image: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&q=80&w=800",
        description: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Founded in 1636 as Harvard College and named for its first benefactor, the Puritan clergyman John Harvard, it is the oldest institution of higher learning in the United States.",
        courses: [
            {
                id: "c-3",
                name: "MBA",
                level: "PG",
                duration: "2 Years",
                fee: "$75,000",
                intake: ["August"],
            },
            {
                id: "c-4",
                name: "BSc Computer Science",
                level: "UG",
                duration: "4 Years",
                fee: "$55,000",
                intake: ["August"],
            },
        ],
    },
    {
        id: "uni-3",
        name: "University of Toronto",
        country: "Canada",
        city: "Toronto",
        ranking: 18,
        image: "https://images.unsplash.com/photo-1626125345510-4603468eedfb?auto=format&fit=crop&q=80&w=800",
        description: "The University of Toronto is a public research university in Toronto, Ontario, Canada, located on the grounds that surround Queen's Park.",
        courses: [
            {
                id: "c-5",
                name: "MSc Data Science",
                level: "PG",
                duration: "1.5 Years",
                fee: "CAD 45,000",
                intake: ["September", "January"],
            },
            {
                id: "c-6",
                name: "BEng Civil Engineering",
                level: "UG",
                duration: "4 Years",
                fee: "CAD 50,000",
                intake: ["September"],
            },
        ],
    },
    {
        id: "uni-4",
        name: "University of Melbourne",
        country: "Australia",
        city: "Melbourne",
        ranking: 33,
        image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800",
        description: "The University of Melbourne is a public research university located in Melbourne, Australia. Founded in 1853, it is Australia's second oldest university and the oldest in Victoria.",
        courses: [
            {
                id: "c-7",
                name: "Master of Information Technology",
                level: "PG",
                duration: "2 Years",
                fee: "AUD 48,000",
                intake: ["February", "July"],
            },
            {
                id: "c-8",
                name: "Bachelor of Commerce",
                level: "UG",
                duration: "3 Years",
                fee: "AUD 42,000",
                intake: ["February", "July"],
            },
        ],
    },
    {
        id: "uni-5",
        name: "Technical University of Munich",
        country: "Germany",
        city: "Munich",
        ranking: 50,
        image: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&q=80&w=800",
        description: "The Technical University of Munich is a public research university in Munich, Germany. It specializes in engineering, technology, medicine, and the applied and natural sciences.",
        courses: [
            {
                id: "c-9",
                name: "MSc Informatics",
                level: "PG",
                duration: "2 Years",
                fee: "€0 (Public)",
                intake: ["October", "April"],
            },
            {
                id: "c-10",
                name: "BSc Mechanical Engineering",
                level: "UG",
                duration: "3 Years",
                fee: "€0 (Public)",
                intake: ["October"],
            },
        ],
    },
];
