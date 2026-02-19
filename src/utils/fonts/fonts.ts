import { Open_Sans, Rubik } from 'next/font/google';

export const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
  weight: ['400', '500','600', '700'],
});

export const openSans = Open_Sans({
  subsets: ['latin'], // Specify necessary subsets for optimization
  display: 'swap', // 'swap' ensures a fallback font is shown until Open Sans loads
  variable: '--font-open-sans', // Use a CSS variable for easy access
});