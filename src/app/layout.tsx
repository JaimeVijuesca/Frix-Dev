import type { Metadata } from 'next';
import './globals.css';
import { cn } from '../lib/utils';
import { Toaster } from '../components/ui/toaster';
import Header from '../components/header';
import Footer from '../components/footer';
import { DigitalAgent } from '../components/digital-agent';

export const metadata: Metadata = {
  title: {
    default: 'Frix Dev | Desarrollo Web Profesional',
    template: '%s | Frix Dev',
  },
  description:
    'Desarrollador web especializado en Next.js, React y SEO. Webs rápidas, modernas y optimizadas para convertir.',
  metadataBase: new URL('https://frix-dev.vercel.app'),
  openGraph: {
    title: 'Frix Dev | Desarrollo Web Profesional',
    description:
      'Webs modernas, rápidas y optimizadas para SEO con Next.js.',
    url: 'https://frix-dev.vercel.app',
    siteName: 'Frix Dev',
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
      <meta name="google-site-verification" content="T1U4A58A9wSHXZA5dEONz58kmdWE0a5ZCMcxm_Cxa7c" />
      
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased flex flex-col')}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
        <DigitalAgent />
      </body>
    </html>
  );
}
