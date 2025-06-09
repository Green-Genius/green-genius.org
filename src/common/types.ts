export interface NavLinkProps {
  ctaButton: { label: string };
  navItems: NavItemsProps[];
}

export interface NavItemsProps {
  label: string;
  section: string;
  isExternal?: boolean;
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
export interface FeaturesSectionProps {
  title: string;
  description: {
    firstNormalChunk: string;
    firstBoldChunk: string;
    thirdNormalChunk: string;
    secondNormalChunk: string;
    secondBoldChunk: string;
  };
  features: {
    title: string;
    featuresList: FeaturesProps[];
  }[];
}
export interface WhyTunisiaBenefitsProps {
  title: string;
  description: string;
}
export interface BasePlan {
  name: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  buttonText: string;
  buttonStyle: "primary" | "secondary";
  openPopUp: boolean;
  openHref: boolean;
}

export interface SaaSPlan extends BasePlan {
  annualPrice?: number;
  featured?: boolean;
  reportHosting?: string;
  customDomain?: boolean;
}
export interface FooterLink {
  label: string;
  url: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}
