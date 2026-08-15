import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Navigation from '@/components/navigation/Navigation';
import './globals.css';
import Footer from '@/components/footer/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Atelier',
  description:
    'Systems, trust infrastructure, software craft, and architecture by Uru Onyemaobi.',
  openGraph: {
    title: 'Atelier',
    description:
      'Systems, trust infrastructure, software craft, and architecture by Uru Onyemaobi.',
    images: [
      {
        url: '/previews/atelier-open-graph.png',
        width: 1200,
        height: 630,
        alt: 'Atelier',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Atelier',
    description:
      'Systems, trust infrastructure, software craft, and architecture by Uru Onyemaobi.',
    images: ['/previews/atelier-open-graph.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-[#0b0f19] text-white">
        <Navigation />
        {children}

        <Footer />
      </body>
    </html>
  );
}
