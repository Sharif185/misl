'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a subtle background blur after scrolling down
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-cyan/10 bg-navy/90 backdrop-blur-md'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white transition-colors hover:text-cyan focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-navy rounded-sm"
          aria-label="MISL Technologies — go to home"
        >
          MISL<span className="text-cyan">.</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    className={[
                      'rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200',
                      'focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-navy',
                      active
                        ? 'text-cyan'
                        : 'text-[#8892B0] hover:text-white',
                    ].join(' ')}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className={[
              'inline-flex items-center gap-2 rounded-lg border border-cyan px-4 py-2',
              'text-sm font-semibold text-cyan transition-colors duration-200',
              'hover:bg-cyan/10',
              'focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-navy',
            ].join(' ')}
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-md p-2 text-[#8892B0] transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-navy md:hidden"
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-cyan/10 bg-navy/95 backdrop-blur-md md:hidden"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col px-4 pb-4 pt-2">
              {navLinks.map(({ label, href }) => {
                const active = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={active ? 'page' : undefined}
                      className={[
                        'block rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-200',
                        active
                          ? 'text-cyan'
                          : 'text-[#8892B0] hover:text-white',
                      ].join(' ')}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
              <li className="mt-3 border-t border-cyan/10 pt-3">
                <Link
                  href="/contact"
                  className={[
                    'block rounded-lg border border-cyan px-4 py-2.5 text-center',
                    'text-sm font-semibold text-cyan transition-colors hover:bg-cyan/10',
                  ].join(' ')}
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
