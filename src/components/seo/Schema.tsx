import React from 'react';

interface OrganizationSchemaProps {
    name?: string;
    description?: string;
    url?: string;
}

export function OrganizationSchema({
    name = "LM Global Overseas",
    description = "Your trusted education and immigration consultant. Empowering students and professionals to achieve their global education and career dreams.",
    url = "https://lmglobaloverseas.com"
}: OrganizationSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": name,
        "description": description,
        "url": url,
        "logo": `${url}/logo.png`,
        "image": `${url}/og-image.png`,
        "telephone": "+91-79970-51424",
        "email": "info@lmglobaloverseas.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "addressCountry": "IN"
        },
        "sameAs": [
            "https://www.instagram.com/lm_globaloverseas",
            "https://www.linkedin.com/company/lm-global-overseas"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-79970-51424",
            "contactType": "Customer Service",
            "availableLanguage": ["English", "Hindi"],
            "areaServed": "IN"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "12:00",
                "closes": "20:00"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface ServiceSchemaProps {
    name: string;
    description: string;
    url: string;
}

export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": name,
        "name": name,
        "description": description,
        "provider": {
            "@type": "Organization",
            "name": "LM Global Overseas",
            "telephone": "+91-79970-51424",
            "email": "info@lmglobaloverseas.com"
        },
        "areaServed": {
            "@type": "Country",
            "name": "India"
        },
        "url": url
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface BreadcrumbSchemaProps {
    items: Array<{ name: string; url: string }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface ReviewSchemaProps {
    reviews: Array<{
        author: string;
        rating: number;
        text: string;
        date: string;
    }>;
}

export function ReviewSchema({ reviews }: ReviewSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "LM Global Overseas",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": reviews.length,
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": reviews.map(review => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": review.author
            },
            "datePublished": review.date,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating,
                "bestRating": "5",
                "worstRating": "1"
            },
            "reviewBody": review.text
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface FAQSchemaProps {
    faqs: Array<{ question: string; answer: string }>;
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface WebsiteSchemaProps {
    url?: string;
    name?: string;
}

export function WebsiteSchema({
    url = "https://lmglobaloverseas.com",
    name = "LM Global Overseas"
}: WebsiteSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": name,
        "url": url,
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${url}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
