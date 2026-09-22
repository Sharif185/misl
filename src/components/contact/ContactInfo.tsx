interface ContactChannel {
  label: string;
  value: string;
  href: string;
  description: string;
}

/**
 * Contact details are placeholders pending confirmation from MISL
 * Technologies. Replace `value`/`href` once the official channels are
 * available — the layout does not need to change.
 */
const channels: ContactChannel[] = [
  {
    label: 'Email',
    value: 'contact@misltechnologies.com',
    href: 'mailto:contact@misltechnologies.com',
    description: 'For project enquiries, partnerships, and general questions.',
  },
  {
    label: 'Phone',
    value: '+1 (000) 000-0000',
    href: 'tel:+10000000000',
    description: 'Available on business days during standard working hours.',
  },
  {
    label: 'Location',
    value: 'Remote-first',
    href: '#',
    description: 'We collaborate with teams across time zones.',
  },
];

const socials: { label: string; href: string }[] = [
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'X', href: '#' },
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-white">Get in touch</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Tell us a bit about what you are working on. We read every message
          and respond as quickly as we can.
        </p>
      </div>

      <ul className="space-y-6">
        {channels.map((channel) => (
          <li key={channel.label} className="border-l-2 border-[#00FFAB]/60 pl-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              {channel.label}
            </p>
            <a
              href={channel.href}
              className="mt-1 block text-sm font-medium text-white outline-none transition-colors hover:text-[#00FFAB] focus-visible:ring-2 focus-visible:ring-[#00FFAB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A192F]"
            >
              {channel.value}
            </a>
            <p className="mt-1 text-xs text-slate-400">{channel.description}</p>
          </li>
        ))}
      </ul>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Find us online
        </p>
        <ul className="mt-3 flex flex-wrap gap-3">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                aria-label={social.label}
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 outline-none transition-colors hover:border-[#00FFAB]/60 hover:text-[#00FFAB] focus-visible:ring-2 focus-visible:ring-[#00FFAB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A192F]"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}