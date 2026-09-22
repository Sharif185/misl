import Link from 'next/link';
import { Card } from '@/components/ui';
import type { Project } from '@/lib/portfolio-data';

interface PortfolioCardProps {
  project: Project;
}

/**
 * Visual initials used as a graceful placeholder when no real project
 * image asset is available. Replace `image`/placeholder with next/image
 * once real assets are supplied.
 */
function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

export function PortfolioCard({ project }: PortfolioCardProps) {
  const initials = getInitials(project.name);
  const href = `/portfolio/${project.slug}`;

  return (
    <Card className="group flex h-full flex-col overflow-hidden p-0">
      {/* Visual placeholder */}
      <div
        aria-hidden="true"
        className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A192F] via-[#0A192F] to-[#0f2547]"
      >
        <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,#00FFAB_1px,transparent_0)] [background-size:22px_22px]" />
        <span className="relative text-4xl font-semibold tracking-[0.15em] text-[#00FFAB]">
          {initials}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#00FFAB]">
          {project.category}
        </p>

        <h3 className="mt-2 text-lg font-semibold text-white">
          <Link
            href={href}
            className="rounded-sm outline-none transition-colors hover:text-[#00FFAB] focus-visible:ring-2 focus-visible:ring-[#00FFAB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A192F]"
          >
            {project.name}
          </Link>
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-300">
          {project.summary}
        </p>

        <ul
          aria-label={`Technologies used in ${project.name}`}
          className="mt-4 flex flex-wrap gap-2"
        >
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-200"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-4 border-t border-white/10">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#00FFAB] outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#00FFAB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A192F]"
          >
            View Project
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </Card>
  );
}