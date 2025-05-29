export interface NavLinkProps {
  ctaButton: { label: string };
  navItems: NavItemsProps[];
}

export interface NavItemsProps {
  label: string;
  section: string;
}
export interface HeroSectionStatsProps {
  label: string;
  value: string;
}
