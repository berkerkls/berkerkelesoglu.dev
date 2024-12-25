"use client";
import { memo } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { MenuItemType } from "@/models/models";
import { usePathname } from "next/navigation";

export const MenuItem = memo(({ href, label, icon }: MenuItemType) => {
  const pathName = usePathname();
  const isInternal = href[0] === "/";

  const cn = (...args: Array<string>) => {
    return twMerge(...args);
  };

  if (!isInternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center text-darkSecondary hover:opacity-75 hover:underline"
      >
        <span className="xs:hidden lg:flex">{label}</span>
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "flex justify-center items-center rounded-full transition-colors w-28 py-2 hover:opacity-75",
        href === pathName ? "bg-darkPrimary text-white" : "text-darkSecondary"
      )}
    >
      <span>{label}</span>
    </Link>
  );
});
