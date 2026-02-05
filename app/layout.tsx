import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import TopNav from '@/components/general/TopNav';
import Footer from '@/components/general/Footer';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

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
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
