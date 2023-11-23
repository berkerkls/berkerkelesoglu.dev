'use-client';

import { MenuItem } from './menu-item';
import { Navigations } from '@/data/constants';
import { LinkType } from '@/models/models';

export const NavigationItems = () => {
  return (
    <div className="card w-96 transition-colors dark:bg-slate-900 shadow-xl">
      <div className="card-body">
        <ul className="menu rounded-box">
          {Navigations &&
            Navigations.map((item: LinkType) => (
              <MenuItem
                href={item.href}
                icon={item.icon}
                label={item.label}
                key={item.href}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};