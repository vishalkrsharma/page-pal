import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PagePal',
  description: 'App which lets you chat to your PDFs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className='light'
    >
      <body className={cn('min-h-screen font-san antialiased grainy', inter.className)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
