import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { PrimeReactProvider } from 'primereact/api';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FZB Emlak - İstanbul\'un En İyi Konut Projeleri',
  description: 'İstanbul\'un en prestijli konut projelerinde güvenilir yatırım fırsatları.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <PrimeReactProvider>
          <div className="layout-wrapper">
            {children}
          </div>
        </PrimeReactProvider>
      </body>
    </html>
  );
}