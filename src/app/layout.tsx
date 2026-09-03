import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/common/Navbar';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'MISL Technologies',
  description: 'Beyond Code. Building Intelligence.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="pt-[72px]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
