import { IconProp } from '@fortawesome/fontawesome-svg-core';
export interface LinkType {
  href: string;
  label: string;
  icon: IconProp;
}

export interface MenuItemType {
  href: string,
  label: string,
  icon: IconProp
}

export interface Theme {
  theme: string
}

export interface JourneyItemType {
  title: string,
  company: string | null,
  university: string | null,
  startDate: string,
  endDate: string | null,
  description: string
}