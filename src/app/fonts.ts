import { Noto_Sans } from 'next/font/google';

const noto = Noto_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font',
});

export const fontClassNames = noto.variable;
