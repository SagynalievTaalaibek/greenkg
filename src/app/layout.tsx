import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Geist_Mono } from 'next/font/google'; // Проверь доступность
import clsx from 'clsx';
import { Providers } from '@/app/providers';
import './globals.css';

const geistSans = Montserrat({
  variable: '--font-m-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Green KG',
  description: 'Green KG',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={clsx(geistSans.variable, geistMono.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
