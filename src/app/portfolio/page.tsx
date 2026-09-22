import type { Metadata } from 'next';
import Link from 'next/link';
import { Button, Container, Section } from '@/components/ui';
import { PortfolioGrid } from '@/components/portfolio';
import { projects } from '@/lib/portfolio-data';

export const metadata: Metadata = {
  title: 'Portfolio | MISL Technologies',
  description:
    'Selected projects and case studies from MISL Technologies — intelligent systems, modern web platforms, and cloud engineering.',
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#00FFAB]">
              Portfolio
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Work that moves businesses forward.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              A selection of platforms, products and intelligent systems we have
              designed and built. Each engagement is grounded in the same
              principle — technology should solve a real problem, cleanly.
            </p>
          </div>
        </Container>
      </Section>

      {/* Project grid */}
      <Section id="projects" aria-label="Portfolio projects">
        <Container>
          <PortfolioGrid projects={projects} />
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0A192F] via-[#0A192F] to-[#0f2547] p-8 sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#00FFAB]/10 blur-3xl"
            />
            <div className="relative max-w-2xl">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Have a project in mind?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Tell us what you are building. We will help you scope it,
                pressure-test the approach, and deliver it with the same care
                you see above.
              </p>
              <div className="mt-6">
                <Link href="/contact">
                  <Button variant="primary">Start a conversation</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}