import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PaperChat',
  description: 'App which lets you chat to your PDFs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className='light'
    >
      <body className={cn('min-h-screen font-san antialiased grainy', inter.className)}>{children}</body>
    </html>
  );
}
