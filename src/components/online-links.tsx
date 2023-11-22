'use-client';

import { MenuItem } from './menu-item';
import { Links } from '@/lib/contants';
import { LinkType } from '@/models/models';

export const OnlineLinks = () => {
  return (
    <div className="card w-96 bg-slate-50 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-black">Reach Me</h2>
        <ul className="menu rounded-box">
          {Links &&
            Links.map((item: LinkType) => (
              <MenuItem href={item.href} icon={item.icon} label={item.label} />
            ))}
        </ul>
      </div>
    </div>
  );
};
