import localFont from 'next/font/local';

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
