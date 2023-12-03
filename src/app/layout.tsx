import { Lato } from 'next/font/google';
const lato = Lato({ subsets: ['latin'], weight: '400' });
import './globals.css';
import type { Metadata } from 'next';
import { MenuItems } from '@/components/menu-items';
import { TopTools } from '@/components/top-tools';

export const metadata: Metadata = {
  metadataBase: new URL('https://berkerkelesoglu.dev'),
  title: {
    default: 'Berker Keleşoğlu',
    template: '%s | Berker',
  },
  description: 'Software Developer and Musician based in Istanbul',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4  '],
    shortcut: ['/apple-touch-icon.png'],
  },
  openGraph: {
    title: 'Berker Keleşoğlu',
    description: 'Software Developer',
    images: ['/berkerkelesogludev.png'],
  },
  twitter: {
    title: 'Berker Keleşoğlu',
    description: 'Software Developer',
    images: ['/berkerkelesogludev.png'],
    card: 'summary_large_image',
    creator: '@berkerkls',
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
