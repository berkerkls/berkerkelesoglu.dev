import { ProfileCard } from './profile-card';
import { NavigationItems } from './navigation-items';
import { OnlineLinks } from './online-links';

export const MenuItems = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen sticky top-0 z-10 transition-colors">
      <ProfileCard />
      <NavigationItems />
      <OnlineLinks />
    </div>
  );
};
