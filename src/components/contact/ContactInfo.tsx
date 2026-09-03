import React from 'react';

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  title: string;
  lines: string[];
  href?: string;
  hrefLabel?: string;
}

function InfoCard({ icon, label, title, lines, href, hrefLabel }: InfoCardProps) {
  return (
    <div
      className={[
        'rounded-xl border border-cyan/20 bg-navy p-6',
        'transition-all duration-300',
        'hover:border-cyan hover:shadow-lg hover:shadow-cyan/10',
      ].join(' ')}
    >
      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-cyan/20 bg-cyan/10 text-cyan">
        {icon}
      </div>

      {/* Label */}
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-cyan">
        {label}
      </p>

      {/* Title */}
      <h3 className="mb-3 text-base font-semibold text-white">{title}</h3>

      {/* Lines */}
      <div className="space-y-1">
        {lines.map((line) => (
          <p key={line} className="text-sm text-[#8892B0]">
            {line}
          </p>
        ))}
      </div>

      {/* Optional link */}
      {href && hrefLabel && (
        <a
          href={href}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-cyan transition-colors hover:text-cyan/80"
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {hrefLabel}
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      )}
    </div>
  );
}

export function ContactInfo() {
  const cards: InfoCardProps[] = [
    {
      label: 'Email Us',
      title: 'Drop Us a Line',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
        </svg>
      ),
      lines: ['hello@misltechnologies.com', 'support@misltechnologies.com'],
      href: 'mailto:hello@misltechnologies.com',
      hrefLabel: 'Send an email',
    },
    {
      label: 'Call Us',
      title: 'Speak to the Team',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      lines: ['+1 (555) 000-0000', '+1 (555) 000-0001'],
      href: 'tel:+15550000000',
      hrefLabel: 'Call now',
    },
    {
      label: 'Visit Us',
      title: 'Our Office',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      lines: ['123 Tech Avenue, Suite 400', 'San Francisco, CA 94105', 'United States'],
      href: 'https://maps.google.com',
      hrefLabel: 'Get directions',
    },
    {
      label: 'Business Hours',
      title: 'When We\'re Available',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      lines: ['Monday – Friday: 9 AM – 6 PM PST', 'Saturday: 10 AM – 2 PM PST', 'Sunday: Closed'],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {cards.map((card) => (
        <InfoCard key={card.label} {...card} />
      ))}
    </div>
  );
}
