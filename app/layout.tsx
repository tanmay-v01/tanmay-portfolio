import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Tanmay Vaity — UI/UX Designer & Digital Product Builder',
  description:
    'Tanmay Vaity is a detail-driven UI/UX Designer with 3+ years of experience crafting intuitive digital product interfaces, scalable design systems, and interactive prototypes.',
  keywords: [
    'Tanmay Vaity',
    'UI/UX Designer',
    'Digital Product Designer',
    'Web Designer',
    'Design Systems',
    'Figma',
    'Interactive Prototyping',
    'Mumbai Designer',
    'India Product Designer',
  ],
  authors: [{ name: 'Tanmay Vaity' }],
  openGraph: {
    title: 'Tanmay Vaity — UI/UX Designer & Digital Product Builder',
    description:
      'Creating intuitive digital product interfaces, scalable design systems, and interactive prototypes.',
    type: 'website',
    url: 'https://tanmayvaity.design',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tanmay Vaity — UI/UX Designer',
    description:
      'UI/UX Designer creating intuitive digital product interfaces and interactive prototypes.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300..800;1,9..40,300..800&family=Gochi+Hand&family=Homemade+Apple&family=League+Spartan:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
