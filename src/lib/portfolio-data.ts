/**
 * Portfolio project data.
 *
 * These entries are generic placeholders so the UI can be built and demoed.
 * Replace them with real MISL Technologies case studies — the shape of the
 * `Project` interface is stable and consumed by <PortfolioCard> /
 * <PortfolioGrid> and the /portfolio/[slug] route.
 */

export type ProjectCategory =
  | 'Artificial Intelligence'
  | 'Web Development'
  | 'Mobile'
  | 'Cloud & DevOps'
  | 'Data & Analytics';

export interface Project {
  /** URL-safe identifier used in /portfolio/[slug] */
  slug: string;
  name: string;
  category: ProjectCategory;
  /** One-line summary shown on the card */
  summary: string;
  /** Longer copy shown on the detail page */
  description: string;
  technologies: string[];
  /** Optional, high-level outcome. Kept qualitative to avoid fabricated metrics. */
  outcome?: string;
}

export const projects: Project[] = [
  {
    slug: 'intelligent-analytics-platform',
    name: 'Intelligent Analytics Platform',
    category: 'Data & Analytics',
    summary:
      'A real-time analytics workspace that turns operational data into decision-ready insight.',
    description:
      'A modular analytics platform that ingests operational data from multiple sources, normalises it, and surfaces it through interactive dashboards. Designed for teams that need a single, trustworthy view of their operations.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Apache Kafka'],
    outcome:
      'Consolidated reporting across previously siloed data sources into a single platform.',
  },
  {
    slug: 'conversational-support-assistant',
    name: 'Conversational Support Assistant',
    category: 'Artificial Intelligence',
    summary:
      'An AI assistant that helps support teams triage and respond to incoming requests.',
    description:
      'A retrieval-augmented assistant trained on internal documentation. It classifies incoming requests, drafts responses, and hands off to human agents when confidence is low.',
    technologies: ['Python', 'LangChain', 'OpenAI', 'pgvector'],
    outcome:
      'Reduced first-response time for common request categories.',
  },
  {
    slug: 'enterprise-design-system',
    name: 'Enterprise Design System',
    category: 'Web Development',
    summary:
      'A shared component library and design language for a multi-product organisation.',
    description:
      'A TypeScript-first component library with theming, accessibility primitives, and documentation. Adopted across multiple product teams to keep interfaces consistent and reduce duplication.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
    outcome:
      'Standardised UI across products and accelerated feature delivery.',
  },
  {
    slug: 'field-operations-app',
    name: 'Field Operations App',
    category: 'Mobile',
    summary:
      'A cross-platform mobile app for field teams working in low-connectivity environments.',
    description:
      'An offline-first mobile application that lets field teams capture structured data, attach media, and sync opportunistically when connectivity returns.',
    technologies: ['React Native', 'Expo', 'SQLite', 'TypeScript'],
    outcome: 'Enabled reliable data capture in low-bandwidth field conditions.',
  },
  {
    slug: 'cloud-migration-toolkit',
    name: 'Cloud Migration Toolkit',
    category: 'Cloud & DevOps',
    summary:
      'An internal toolkit that standardises service deployment and observability.',
    description:
      'A set of infrastructure templates and CI/CD pipelines that give product teams a consistent, secure path from commit to production with built-in observability.',
    technologies: ['Terraform', 'AWS', 'Docker', 'GitHub Actions'],
    outcome: 'Reduced deployment friction and standardised operational practices.',
  },
  {
    slug: 'document-intelligence-service',
    name: 'Document Intelligence Service',
    category: 'Artificial Intelligence',
    summary:
      'A service that extracts structured data from unstructured business documents.',
    description:
      'A document-processing pipeline that combines OCR, layout understanding, and LLM-based extraction to convert unstructured documents into structured records ready for downstream systems.',
    technologies: ['Python', 'FastAPI', 'PyTorch', 'OpenAI'],
    outcome: 'Automated manual data-entry work for high-volume document types.',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}