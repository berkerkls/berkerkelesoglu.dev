import { ProfileCard } from '@/components/profile-card';
import { MenuItems } from '@/components/menu-items';
import { NavigationItems } from '@/components/navigation-items';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between bg-white">
      <div className="flex flex-col gap-y-12 items-left w-1/4 h-screen">
        <ProfileCard />
        <NavigationItems />
        <MenuItems />
      </div>
      <div className="flex justify-center items-center w-3/4">
        <h2 className="text-black">Main Page</h2>
      </div>
    </main>
  );
}
