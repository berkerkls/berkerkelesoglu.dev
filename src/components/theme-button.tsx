'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

export const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, [resolvedTheme]);

  const cn = (...args: Array<string>) => {
    return twMerge(...args);
  };

  // if (!mounted) {
  //   return null;
  // }

  return (
    <div className="flex relative float-right transition-colors ">
      <input
        type="checkbox"
        className="toggle toggle-lg flex items-center justify-center mt-4 mr-4 text-transparent border-box"
        onChange={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        value={resolvedTheme}
        checked={
          resolvedTheme == 'light'
            ? false
            : resolvedTheme == 'dark'
            ? true
            : false
        }
      ></input>

      <FontAwesomeIcon
        icon={faMoon}
        className={cn(
          'absolute inset-y-0 right-7 mt-6 flex items-center pointer-events-none text-white dark:text-transparent'
        )}
      />
      <FontAwesomeIcon
        icon={faSun}
        className={cn(
          'absolute inset-y-0 left-2.5 mt-6 flex items-center pointer-events-none text-transparent dark:text-orange-300'
        )}
      />
    </div>
  );
};
