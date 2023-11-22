import './globals.css';
import type { Metadata } from 'next';
import { MenuItems } from '@/components/menu-items';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-between bg-white overflow-hidden">
        <div className="flex flex-col gap-y-12 items-left w-1/4">
          <MenuItems />
        </div>
        <div className="flex justify-center bg-white items-center w-3/4">
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
