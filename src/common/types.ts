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
export interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}
export interface WhyTunisiaBenefitsProps {
  title: string;
  description: string;
}
