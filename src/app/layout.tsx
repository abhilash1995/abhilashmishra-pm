import type { Metadata, Viewport } from 'next';
import { Header, Footer } from '@/components/ui';
import { profile } from '@/data/content';
import './globals.css';

const url = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: { default: 'Abhilash Mishra — Enterprise Product Manager', template: '%s | Abhilash Mishra' },
  description: 'Portfolio of Abhilash Mishra, an enterprise product manager working across B2B SaaS, developer APIs, environmental data, connected devices, and AI-assisted workflows.',
  applicationName: 'Abhilash Mishra — Portfolio',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Abhilash Mishra — Product Manager',
    description: 'Selected work across enterprise platforms, APIs, geospatial data, connected devices, and AI-assisted workflows.',
    type: 'website',
    locale: 'en_IN',
    url,
    siteName: 'Abhilash Mishra — Product Manager',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#f5f3ed', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
