import { Lato } from 'next/font/google';
const lato = Lato({ subsets: ['latin'], weight: '400' });
import './globals.css';
import type { Metadata } from 'next';
import { MenuItems } from '@/components/menu-items';
import { TopTools } from '@/components/top-tools';

export const metadata: Metadata = {
  title: {
    default: 'Berker Keleşoğlu',
    template: '%s | Berker',
  },
  description: 'Software Developer and Musician based in Istabnbul',
  icons: {
    icon: '/berker.jpg',
    apple: '/berker.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className} suppressHydrationWarning>
      <body>
        <main className="min-h-screen w-screen">
          <TopTools />
          <div className="lg:flex transition-colors">
            <div className="lg:flex md:hidden sm:hidden xs:hidden min-h-screen">
              <div className="w-1/4">
                <MenuItems />
              </div>
            </div>
            <div className="flex w-screen min-h-screen py-12">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
