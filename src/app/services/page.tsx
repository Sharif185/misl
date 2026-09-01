import type { Metadata } from 'next';
import { Section, Container, Grid } from '@/components/ui';
import { ServiceCard } from '@/components/services/ServiceCard';
import { ServicesAccordion } from '@/components/services/ServicesAccordion';
import { PipelineTimeline } from '@/components/services/PipelineTimeline';
import { ServicesHero } from '@/components/services/ServicesHero';

export const metadata: Metadata = {
    title: 'Services | MISL Technologies',
    description:
        'Explore MISL Technologies services — AI & Machine Learning, Custom Software Development, Cloud & DevOps, and Data Engineering.',
};

// ── Service cards data ──────────────────────────────────────────────────────

const services = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.5 2.122m-6 0a2.25 2.25 0 001.5-2.122M15 3.104c.251.023.501.05.75.082M15 3.104a24.301 24.301 0 014.5 0" />
            </svg>
        ),
        title: 'AI & Machine Learning',
        description:
            'We design and deploy intelligent systems — from predictive models and NLP pipelines to computer vision and recommendation engines — built to scale.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        ),
        title: 'Custom Software Development',
        description:
            'From MVPs to enterprise platforms, we build robust, maintainable software tailored to your exact business requirements and user expectations.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
            </svg>
        ),
        title: 'Cloud & DevOps',
        description:
            'We architect cloud-native infrastructure and automate CI/CD pipelines so your team ships faster, stays secure, and scales without friction.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
        ),
        title: 'Data Engineering',
        description:
            'We build the data foundations your organisation needs — pipelines, warehouses, and analytics layers that turn raw data into actionable intelligence.',
    },
];

// ── Accordion data ──────────────────────────────────────────────────────────

const accordionItems = [
    {
        title: 'AI & Machine Learning',
        content:
            'Our AI practice covers the full spectrum: data strategy and preparation, model development and training, MLOps, and production monitoring. Whether you need a bespoke LLM integration or a real-time anomaly detection system, we build it to last.',
    },
    {
        title: 'Custom Software Development',
        content:
            'We follow agile methodologies with a strong emphasis on code quality, testing, and documentation. Our teams work as an extension of yours — fully transparent, iterative, and focused on delivering real business value at every sprint.',
    },
    {
        title: 'Cloud & DevOps',
        content:
            'From multi-cloud migrations to Kubernetes orchestration and Infrastructure as Code, we bring cloud-native expertise across AWS, Azure, and GCP. Our DevOps practice reduces deployment friction and improves system reliability.',
    },
    {
        title: 'Data Engineering',
        content:
            'We design and implement scalable ETL/ELT pipelines, data lakes, and real-time streaming architectures. Our data engineers ensure your data is clean, governed, and ready for analytics or AI consumption.',
    },
];

// ── Page ────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
    return (
        <main className="bg-navy min-h-screen">

            {/* Hero */}
            <ServicesHero />

            {/* Service Cards */}
            <Section id="services">
                <Container>
                    <h2 className="mb-10 text-2xl font-bold text-white md:text-3xl">
                        Our Core Services
                    </h2>
                    <Grid cols={4} gap="gap-6">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={service.title}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                index={index}
                            />
                        ))}
                    </Grid>
                </Container>
            </Section>

            {/* Accordion */}
            <Section id="details" className="border-t border-cyan/10">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                            Explore Each Service
                        </h2>
                        <p className="mb-10 text-[#8892B0]">
                            Click any service to learn more about how we deliver it.
                        </p>
                        <ServicesAccordion items={accordionItems} />
                    </div>
                </Container>
            </Section>

            {/* Pipeline Timeline */}
            <Section id="pipeline" className="border-t border-cyan/10">
                <Container>
                    <div className="mb-12 max-w-2xl">
                        <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                            How We Deliver
                        </h2>
                        <p className="text-[#8892B0]">
                            Our proven delivery pipeline takes you from initial discovery all the
                            way through to a supported, production-ready product.
                        </p>
                    </div>
                    <PipelineTimeline />
                </Container>
            </Section>

        </main>
    );
}
