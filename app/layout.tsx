import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import { Helvetica } from '../fonts';
import StateContextProvider from '../context/stateContext';
import './styles/globals.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <StateContextProvider>
        <body
          className={`${workSans.className} ${Helvetica.variable}`}
          suppressHydrationWarning={true}
        >
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {children}
        </body>
      </StateContextProvider>
    </html>
  );
}
