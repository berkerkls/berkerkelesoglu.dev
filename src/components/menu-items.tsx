import { ProfileCard } from './profile-card';
import { NavigationItems } from './navigation-items';
import { OnlineLinks } from './online-links';

export const MenuItems = () => {
  return (
    <div className="card flex flex-col justify-between min-h-screen fixed top-0 z-10 transition-colors">
      <ProfileCard />
      <NavigationItems />
      <OnlineLinks />
    </div>
  );
};
