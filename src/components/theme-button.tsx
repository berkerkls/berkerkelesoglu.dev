'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ delay: 0.2 }}
      className="relative transition-colors"
    >
      <input
        type="checkbox"
        className="toggle absolute right-0 flex mt-4 mr-4"
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
        className=" 
          absolute inset-y-0 right-6 mt-5 w-2.5 flex items-center pointer-events-none text-white dark:text-transparent
        "
      />
      <FontAwesomeIcon
        icon={faSun}
        className=" 
           absolute inset-y-0 right-11  mt-5 w-3 flex items-center pointer-events-none text-transparent dark:text-orange-300
        "
      />
    </motion.div>
  );
};
