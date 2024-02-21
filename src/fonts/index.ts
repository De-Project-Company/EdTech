import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';

export const Helvetica = localFont({
  src: [
    {
      path: './Helvetica-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './Helvetica-BoldOblique.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: './Helvetica-Oblique.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: './Helvetica.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './Helvetica-Bold.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './Helvetica-LightOblique.woff2',
      weight: '300',
      style: 'italic'
    }
  ],
  variable: '--font-Helvetica'
});

export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '200', '100', '400', '500', '600', '700', '800', '900'],
  style: ['italic', 'normal']
});
