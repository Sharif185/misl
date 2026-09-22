import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button, Container, Section } from '@/components/ui';
import { getProjectBySlug, projects } from '@/lib/portfolio-data';

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Project not found | MISL Technologies' };
  return {
    title: `${project.name} | MISL Technologies`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <Section>
      <Container>
        <Link
          href="/portfolio"
          className="text-sm font-medium text-[#00FFAB] outline-none hover:text-white focus-visible:ring-2 focus-visible:ring-[#00FFAB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A192F]"
        >
          ← Back to portfolio
        </Link>

        <div className="mt-8 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#00FFAB]">
            {project.category}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {project.name}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            {project.description}
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Technologies
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {project.outcome ? (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Outcome
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {project.outcome}
              </p>
            </div>
          ) : null}
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <h2 className="text-xl font-semibold text-white">
            Interested in something similar?
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-300">
            We would be glad to discuss how a similar approach could apply to
            your context.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <Button variant="primary">Get in touch</Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}