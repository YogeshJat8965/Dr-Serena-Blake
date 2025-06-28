import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr. Serena Blake - Licensed Clinical Psychologist | Therapy & Counseling',
  description: 'Professional therapy services by Dr. Serena Blake, Ph.D. Specializing in anxiety, depression, trauma, and couples counseling. Book your free consultation today.',
  keywords: 'therapist, psychologist, therapy, counseling, anxiety, depression, trauma, couples therapy, San Francisco',
  openGraph: {
    title: 'Dr. Serena Blake - Licensed Clinical Psychologist',
    description: 'Compassionate, evidence-based therapy to help you navigate life\'s challenges and discover your inner strength.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}