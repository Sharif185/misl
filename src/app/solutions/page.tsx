import type { Metadata } from 'next';
import { Section, Container, Grid } from '@/components/ui';
import { IndustryCard } from '@/components/services/IndustryCard';
import { SolutionsHero } from '@/components/services/SolutionsHero';

export const metadata: Metadata = {
    title: 'Solutions | MISL Technologies',
    description:
        'MISL Technologies delivers industry-specific solutions across FinTech, HealthTech, Logistics, and EdTech.',
};

// ── Industry cards data ─────────────────────────────────────────────────────

const industries = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" />
            </svg>
        ),
        industry: 'FinTech',
        description:
            'We build secure, compliant financial platforms — from payment processing and fraud detection systems to algorithmic trading tools and open banking integrations. Speed, precision, and regulatory alignment are non-negotiable.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        ),
        industry: 'HealthTech',
        description:
            'From patient data platforms and clinical decision support tools to telemedicine infrastructure and medical imaging AI, we help healthcare organisations deliver better outcomes through technology — while keeping data secure and HIPAA-compliant.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
        ),
        industry: 'Logistics',
        description:
            'We help logistics and supply chain businesses move smarter — with route optimisation engines, real-time tracking platforms, warehouse automation systems, and predictive demand forecasting powered by machine learning.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
        ),
        industry: 'EdTech',
        description:
            'We design adaptive learning platforms, intelligent tutoring systems, and data-driven assessment tools that personalise education at scale — helping institutions and edtech startups deliver measurable learning outcomes.',
    },
];

// ── Page ────────────────────────────────────────────────────────────────────

export default function SolutionsPage() {
    return (
        <main className="bg-navy min-h-screen">

            {/* Hero */}
            <SolutionsHero />

            {/* Industry Cards */}
            <Section id="industries">
                <Container>
                    <div className="mb-12">
                        <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                            Our Industry Verticals
                        </h2>
                        <p className="text-[#8892B0] max-w-2xl">
                            Four sectors where we've built deep expertise and delivered
                            production-grade solutions for real clients.
                        </p>
                    </div>

                    <Grid cols={2} gap="gap-6">
                        {industries.map((item, index) => (
                            <IndustryCard
                                key={item.industry}
                                icon={item.icon}
                                industry={item.industry}
                                description={item.description}
                                index={index}
                            />
                        ))}
                    </Grid>
                </Container>
            </Section>

        </main>
    );
}
