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
        className="flex gap-2 items-center rounded-lg w-28 p-2 hover:opacity-75"
      >
        <FontAwesomeIcon icon={icon} className="h-3 w-3" />
        <span className="xs:hidden lg:flex">{label}</span>
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        'flex gap-2 items-center rounded-lg transition-colors w-28 p-3 hover:opacity-75',
        href === pathName ? 'bg-slate-200 text-black' : ''
      )}
    >
      <FontAwesomeIcon icon={icon} className="h-3 w-3" />
      <span>{label}</span>
    </Link>
  );
});
