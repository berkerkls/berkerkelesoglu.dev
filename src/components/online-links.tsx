'use-client';

import { MenuItem } from './menu-item';
import { Links } from '@/data/constants';
import { LinkType } from '@/models/models';

export const OnlineLinks = () => {
  return (
    <div className="card w-96 transition-colors dark:bg-slate-900 shadow-xl">
      <div className="card-body">
        <h2 className="card-title dark:text-white">Online</h2>
        <ul className="menu rounded-box">
          {Links &&
            Links.map((item: LinkType) => (
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
