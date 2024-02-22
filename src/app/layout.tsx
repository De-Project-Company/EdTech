import type { Metadata } from 'next';
import '../styles/globals.scss';
import { Helvetica, poppins } from '@/fonts';
import { cn } from '@/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'EdTech',
  description:
    'This platform bridges the gap between curriculum delivery and student engagement while empowering teachers with effective tools for content creation, assessment, and streamlined communication.'
  // image: ""
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${Helvetica.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
