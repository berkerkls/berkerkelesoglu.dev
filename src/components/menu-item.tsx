'use client';
import { memo } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuItemType } from '@/models/models';
import { usePathname } from 'next/navigation';

export const MenuItem = memo(({ href, label, icon }: MenuItemType) => {
  const pathName = usePathname();
  const isInternal = href[0] === '/';

  const cn = (...args: Array<string>) => {
    return twMerge(...args);
  };

  if (!isInternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-3 items-center rounded-lg transition-colors w-36 p-5 hover:opacity-75"
      >
        <FontAwesomeIcon icon={icon} className="h-5 w-5" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        'flex gap-3 items-center rounded-lg transition-colors w-36 p-5 hover:opacity-75',
        href === pathName ? 'bg-slate-200 text-black' : ''
      )}
    >
      <FontAwesomeIcon icon={icon} className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );
});
