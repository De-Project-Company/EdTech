import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import { Helvetica } from '../fonts';
import './styles/globals.scss';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans'
});

export const metadata: Metadata = {
  title: 'EdTech',
  description:
    'This platform bridges the gap between curriculum delivery and student engagement while empowering teachers with effective tools for content creation, assessment, and streamlined communication.'
  // image: ""
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
