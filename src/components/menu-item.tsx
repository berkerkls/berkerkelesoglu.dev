import { memo } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuItemType } from '@/models/models';

export const MenuItem = memo(({ href, label, icon }: MenuItemType) => {
  const isInternal = href[0] === '/';
  if (!isInternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-3 items-center rounded-lg transition-colors w-36 p-4"
      >
        <FontAwesomeIcon icon={icon} className="h-5 w-5" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="flex gap-3 items-center rounded-lg transition-colors w-36 p-2"
    >
      <FontAwesomeIcon icon={icon} className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );
});
