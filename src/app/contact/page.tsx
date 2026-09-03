import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | MISL Technologies',
    description:
        'Get in touch with MISL Technologies. Whether you have a project in mind or just want to explore what we can build together, we\'d love to hear from you.',
};

export default function ContactPage() {
    return (
        <main>
            {/* ── Hero ─────────────────────────────────────────────── */}
            <Section className="relative overflow-hidden border-b border-cyan/10 pb-12 pt-12 md:pb-16 md:pt-16">
                {/* Background glow */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan/5 blur-3xl"
                />

                <Container>
                    <div className="mx-auto max-w-3xl text-center">
                        {/* Eyebrow */}
                        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan">
                            Get in Touch
                        </p>

                        {/* Heading */}
                        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                            Let&apos;s Build Something{' '}
                            <span className="text-cyan">Together</span>
                        </h1>

                        {/* Sub-heading */}
                        <p className="text-lg leading-relaxed text-[#8892B0] md:text-xl">
                            Have a project in mind, a problem to solve, or just want to explore
                            what&apos;s possible? Drop us a message — we typically respond within
                            one business day.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* ── Contact Info Cards ───────────────────────────────── */}
            <Section id="contact-info">
                <Container>
                    <ContactInfo />
                </Container>
            </Section>

            {/* ── Divider ──────────────────────────────────────────── */}
            <div className="border-t border-cyan/10" aria-hidden="true" />

            {/* ── Contact Form ─────────────────────────────────────── */}
            <Section id="contact-form">
                <Container>
                    <div className="mx-auto max-w-2xl">
                        {/* Section heading */}
                        <div className="mb-10 text-center">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan">
                                Send a Message
                            </p>
                            <h2 className="text-3xl font-bold text-white md:text-4xl">
                                We&apos;d Love to Hear From You
                            </h2>
                            <p className="mt-3 text-[#8892B0]">
                                Fill in the form below and someone from our team will be in touch.
                            </p>
                        </div>

                        <ContactForm />
                    </div>
                </Container>
            </Section>

            {/* ── Footer CTA strip ─────────────────────────────────── */}
            <section className="border-t border-cyan/10 bg-cyan/5 py-12" aria-label="Footer call to action">
                <Container>
                    <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
                        <div>
                            <p className="text-sm font-semibold text-white">Prefer a direct conversation?</p>
                            <p className="text-sm text-[#8892B0]">
                                Schedule a free 30-minute discovery call with our team.
                            </p>
                        </div>
                        <a
                            href="mailto:hello@misltechnologies.com"
                            className={[
                                'inline-flex shrink-0 items-center gap-2 rounded-lg border border-cyan',
                                'px-6 py-3 text-sm font-semibold text-cyan',
                                'transition-colors duration-200 hover:bg-cyan/10',
                                'focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-navy',
                            ].join(' ')}
                        >
                            Book a Call
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </Container>
            </section>
        </main>
    );
}
