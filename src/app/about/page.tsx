import type { Metadata } from 'next';
import Link from 'next/link';
import { Button, Container, Section } from '@/components/ui';
import { MissionVision, ValuesSection, type Value } from '@/components/about';

export const metadata: Metadata = {
  title: 'About | MISL Technologies',
  description:
    'MISL Technologies builds intelligent systems, modern software, and cloud platforms. Learn about our mission, vision, and values.',
};

// Placeholder copy — replace with verified MISL Technologies content when
// it becomes available. Deliberately free of statistics, client names,
// awards or certifications.
const values: Value[] = [
  {
    title: 'Craftsmanship',
    description:
      'We treat software as a craft. Clean architecture, readable code, and maintainability are not optional extras.',
  },
  {
    title: 'Curiosity',
    description:
      'We stay close to emerging technology — not to chase trends, but to recognise when a new tool genuinely solves a problem better.',
  },
  {
    title: 'Integrity',
    description:
      'We give honest assessments, surface trade-offs early, and avoid over-engineering solutions where a simpler answer fits.',
  },
  {
    title: 'Partnership',
    description:
      'We work with clients, not around them. Clear communication and shared context are part of how we deliver.',
  },
  {
    title: 'Impact',
    description:
      'We measure success by the outcomes our software enables, not by the volume of code we write.',
  },
  {
    title: 'Clarity',
    description:
      'Complex systems demand clear thinking. We favour understandable designs over clever ones.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#00FFAB]">
              About MISL Technologies
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Beyond Code. Building Intelligence.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              MISL Technologies is a technology company focused on building
              intelligent, reliable software for organisations that need more
              than off-the-shelf tools.
            </p>
          </div>
        </Container>
      </Section>

      {/* Introduction */}
      <Section>
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Who we are
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                <p>
                  We design and build modern software — from web and mobile
                  products to data platforms and applied AI systems. Our work
                  spans the full lifecycle: discovery, architecture,
                  implementation, and long-term evolution.
                </p>
                <p>
                  Our name reflects how we think about engineering. Code is
                  only the beginning; the real value comes from turning it into
                  something that behaves intelligently — systems that adapt,
                  inform, and reduce friction for the people who use them.
                </p>
                <p>
                  We work in small, senior teams. That means fewer layers
                  between the people with the problem and the people solving
                  it, and a tighter feedback loop from idea to working software.
                </p>
              </div>
            </div>
            <aside
              aria-label="What we do"
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00FFAB]">
                What we do
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                <li>• Applied AI &amp; intelligent systems</li>
                <li>• Modern web &amp; mobile products</li>
                <li>• Data platforms &amp; analytics</li>
                <li>• Cloud architecture &amp; DevOps</li>
                <li>• Technical advisory &amp; systems design</li>
              </ul>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section>
        <Container>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Mission &amp; Vision
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
            The principles that anchor how we work and where we are heading.
          </p>
          <div className="mt-8">
            <MissionVision
              mission={{
                title: 'Mission',
                body: 'To build intelligent, dependable technology that helps organisations operate more effectively — and to make that technology understandable to the people who rely on it.',
              }}
              vision={{
                title: 'Vision',
                body: 'To be a trusted long-term partner for organisations navigating digital and AI-driven change, known for engineering depth and clarity of thought.',
              }}
            />
          </div>
        </Container>
      </Section>

      {/* Core values */}
      <Section>
        <Container>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Core values
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
            The standards we hold ourselves to on every engagement.
          </p>
          <div className="mt-8">
            <ValuesSection values={values} />
          </div>
        </Container>
      </Section>

      {/* Differentiators + Technology */}
      <Section>
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                What sets us apart
              </h2>
              <ul className="mt-6 space-y-5">
                {[
                  {
                    title: 'Senior engineering, end-to-end',
                    body: 'The people who scope the work are the people who build it.',
                  },
                  {
                    title: 'Outcome-driven decisions',
                    body: 'We optimise for the outcome, not for the most elaborate solution.',
                  },
                  {
                    title: 'Long-term thinking',
                    body: 'Systems we build are designed to be maintained, extended, and understood years later.',
                  },
                  {
                    title: 'Cross-domain fluency',
                    body: 'We work across product, data, cloud, and AI as one connected practice.',
                  },
                ].map((item) => (
                  <li
                    key={item.title}
                    className="border-l-2 border-[#00FFAB]/60 pl-4"
                  >
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0A192F] via-[#0A192F] to-[#0f2547] p-8">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Technology &amp; innovation
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                We work with a deliberately modern stack — TypeScript, React,
                Next.js, Python, PostgreSQL, and cloud platforms — and apply AI
                where it earns its place, not as a default.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Innovation, for us, is the disciplined application of new tools
                to problems they genuinely fit. We favour proven foundations
                with selective, well-justified bets on emerging technology.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Work with MISL Technologies
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              Whether you are starting something new or evolving an existing
              system, we would be glad to hear about it.
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <Button variant="primary">Get in touch</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}