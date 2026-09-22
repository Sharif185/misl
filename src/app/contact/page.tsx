import type { Metadata } from 'next';
import { Container, Section } from '@/components/ui';
import { ContactForm, ContactInfo } from '@/components/contact';

export const metadata: Metadata = {
  title: 'Contact | MISL Technologies',
  description:
    'Get in touch with MISL Technologies to discuss a project, partnership, or question.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#00FFAB]">
              Contact
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Let&rsquo;s talk about what you are building.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              Share a bit of context and we will get back to you. The more
              detail you provide, the more useful our first reply can be.
            </p>
          </div>
        </Container>
      </Section>

      {/* Form + info */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <ContactForm />
              </div>
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}