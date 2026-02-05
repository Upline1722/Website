import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import TopNav from '@/components/general/TopNav';
import Footer from '@/components/general/Footer';

export const metadata: Metadata = {
  title: 'Upline Systems Consulting',
  description: 'Proving IT and systems solutions that suit your needs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
