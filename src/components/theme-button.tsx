'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // if (!mounted) {
  //   return null;
  // }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center rounded-lg p-6 transition-colors float-right hover:bg-transparent"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'light' || !resolvedTheme ? (
        <FontAwesomeIcon
          icon={faLightbulb}
          className="h-5 w-5 text-slate-800"
        />
      ) : (
        <FontAwesomeIcon
          icon={faLightbulb}
          className="h-5 w-5 text-orange-300"
        />
      )}
    </button>
  );
};
