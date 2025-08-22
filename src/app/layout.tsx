import type { Metadata } from 'next';
import { Inter, Fjalla_One } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import QueryProvider from '@/components/providers/query-provider';
import '@/lib/env';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const fjallaOne = Fjalla_One({
  variable: '--font-fjalla-one',
  subsets: ['cyrillic-ext'],
  weight: '400',
  style: 'normal',
});

export const metadata: Metadata = {
  title: 'Fairpoint Software',
  description: 'Your trusted partner in accounting software solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${fjallaOne.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
