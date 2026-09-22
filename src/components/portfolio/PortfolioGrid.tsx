import { Grid } from '@/components/ui';
import { PortfolioCard } from './PortfolioCard';
import type { Project } from '@/lib/portfolio-data';

interface PortfolioGridProps {
  projects: Project[];
}

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  if (projects.length === 0) {
    return (
      <p className="text-sm text-slate-300">
        No projects to display yet. Please check back soon.
      </p>
    );
  }

  return (
    <Grid cols={3} gap="6">
      {projects.map((project) => (
        <PortfolioCard key={project.slug} project={project} />
      ))}
    </Grid>
  );
}