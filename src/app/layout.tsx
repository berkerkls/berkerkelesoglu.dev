import './globals.css';
import type { Metadata } from 'next';
import { MenuItems } from '@/components/menu-items';
export const metadata: Metadata = {
  title: 'Berker Kelesoglu',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white overflow-hidden">
        <div></div>
        <div className="flex min-h-screen items-center justify-between ">
          <div className="lg:flex md:hidden sm:hidden">
            <div className="flex flex-col gap-y-12 items-left w-1/4">
              <MenuItems />
            </div>
          </div>
          <div className="flex justify-center bg-white items-center w-3/4">
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
