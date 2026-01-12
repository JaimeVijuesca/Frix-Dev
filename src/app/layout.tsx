import type { Metadata } from 'next';
import './globals.css';
import { cn } from '../lib/utils';
import { Toaster } from '../components/ui/toaster';
import Header from '../components/header';
import Footer from '../components/footer';
import { DigitalAgent } from '../components/digital-agent';

export const metadata: Metadata = {
  title: 'Frix - Creación de Sitios Web Rápidos y Sencillos',
  description: 'Desarrollo web a medida con las últimas tecnologías. Rápido, sencillo y profesional.',
  verification: {
    google: 'T1U4A58A9wSHXZA5dEONz58kmdWE0a5ZCMcxm_Cxa7c',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,701&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />
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
