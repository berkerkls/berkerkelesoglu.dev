import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { Navigations } from '@/data/constants';
import { MenuItem } from './menu-item';
export const DropdownNavbar = () => {
  const [isActive, setIsActive] = useState(false);
  const dropdown = useRef(null);
  const cn = (...args: Array<string>) => {
    return twMerge(...args);
  };

  useEffect(() => {
    const handleOutSideClick = (event: Event) => {
      if (!dropdown.current?.contains(event.target)) {
        setIsActive(false);
      }
    };
    window.addEventListener('mousedown', handleOutSideClick);
  }, [dropdown]);
  return (
    <div className="transition-colors lg:hidden absolute left-2 mt-5">
      <FontAwesomeIcon
        size={'lg'}
        onClick={() => setIsActive(!isActive)}
        icon={faBars}
      />
      <div ref={dropdown} className={cn('w-full', !isActive ? 'hidden' : '')}>
        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          {Navigations.map((el: any, index: number) => (
            <li onClick={() => setIsActive(false)} key={index}>
              <MenuItem href={el.href} label={el.label} icon={el.icon} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
