import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { Navigations } from '@/data/constants';
import { MenuItem } from './menu-item';
import { LinkType } from '@/models/models';

export const DropdownNavbar = () => {
  const [isActive, setIsActive] = useState(false);
  const dropdown = useRef<HTMLDivElement>(null);
  const hamburger = useRef<SVGSVGElement>(null);
  const cn = (...args: Array<string>) => {
    return twMerge(...args);
  };
  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleOutSideClick = ({ target }: MouseEvent): void => {
      if (
        !dropdown.current?.contains(target as Node) &&
        !hamburger.current?.contains(target as Node)
      ) {
        setIsActive(false);
      }
    };
    window.addEventListener('mousedown', handleOutSideClick);
  }, []);
  return (
    <div className="transition-colors lg:hidden absolute left-2 mt-5">
      <FontAwesomeIcon
        ref={hamburger}
        size={'lg'}
        onClick={handleClick}
        icon={faBars}
      />
      <div ref={dropdown} className={cn('w-full', !isActive ? 'hidden' : '')}>
        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-black dark:border-white">
          {Navigations.map((el: LinkType, index: number) => (
            <li onClick={() => setIsActive(false)} key={index}>
              <MenuItem href={el.href} label={el.label} icon={el.icon} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
