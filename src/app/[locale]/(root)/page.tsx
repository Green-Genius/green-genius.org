import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeatureSection";
import WhyTunisiaSection from "@/components/WhyTunisiaSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import { getDictionary } from "../../../../dictionaries";
import { Locale } from "../../../../i18n.config";

// Dynamically generate metadata based on locale and dictionary
export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ locale: Locale }> }>): Promise<Metadata> {
  const locale = (await params).locale;

  const dictionary = await getDictionary(locale);
  const meta = dictionary.meta || {};
  const metaRecord = meta as Record<string, unknown>;
  const keywords: string[] = Array.isArray(metaRecord.keywords)
    ? (metaRecord.keywords as string[])
    : [];
  return {
    title: meta.title || "GreenGenius",
    description: meta.description || "Calculateur Bilan Carbone 100% Tunisien.",
    keywords,
    openGraph: {
      title: meta.title || "GreenGenius",
      description:
        meta.description || "Calculateur Bilan Carbone 100% Tunisien.",
      url: "https://green-genius.org",
      siteName: "GreenGenius",
      locale: locale === "en" ? "en_US" : locale === "fr" ? "fr_FR" : "ar_TN",
      type: "website",
      images: [
        {
          url: "/og-image-greengenius.jpg",
          width: 1200,
          height: 630,
          alt:
            meta.title ||
            "GreenGenius - Calculateur Bilan Carbone 100% Tunisien",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title || "GreenGenius",
      description:
        meta.description || "Calculateur Bilan Carbone 100% Tunisien.",
      images: ["/twitter-image-greengenius.jpg"],
    },
    alternates: {
      canonical: "https://green-genius.org",
    },
    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon-57x57.png", sizes: "57x57" },
        { url: "/apple-touch-icon-60x60.png", sizes: "60x60" },
        { url: "/apple-touch-icon-72x72.png", sizes: "72x72" },
        { url: "/apple-touch-icon-76x76.png", sizes: "76x76" },
        { url: "/apple-touch-icon-114x114.png", sizes: "114x114" },
        { url: "/apple-touch-icon-120x120.png", sizes: "120x120" },
        { url: "/apple-touch-icon-144x144.png", sizes: "144x144" },
        { url: "/apple-touch-icon-152x152.png", sizes: "152x152" },
        { url: "/apple-touch-icon-180x180.png", sizes: "180x180" },
      ],
      other: [
        { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#22c55e" },
      ],
    },
    manifest: "/manifest.json",
    other: {
      "msapplication-TileColor": "#22c55e",
      "msapplication-config": "/browserconfig.xml",
      "theme-color": "#22c55e",
    },
  };
}

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "GreenGenius",
  description:
    "Premier calculateur de bilan carbone 100% Tunisien pour les entreprises et consultants environnementaux",
  url: "https://green-genius.org",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Environmental Management Software",
  operatingSystem: "Web",
  offers: [
    {
      "@type": "Offer",
      name: "Essai Gratuit",
      price: "0",
      priceCurrency: "TND",
      billingIncrement: "P14D",
      description: "Essai gratuit de 14 jours",
    },
    {
      "@type": "Offer",
      name: "Plan Entreprise",
      price: "149",
      priceCurrency: "TND",
      billingIncrement: "P1M",
      description: "Pour les entreprises individuelles",
    },
    {
      "@type": "Offer",
      name: "Plan Consultant",
      price: "299",
      priceCurrency: "TND",
      billingIncrement: "P1M",
      description: "Multi-entreprises pour consultants",
    },
  ],
  provider: {
    "@type": "Organization",
    name: "GreenGenius",
    url: "https://green-genius.org",
    logo: "https://green-genius.org/logo.png",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TN",
      addressLocality: "Tunis",
      addressRegion: "Tunis",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+216-XX-XXX-XXX",
      contactType: "customer service",
      availableLanguage: ["French", "Arabic"],
    },
  },
  featureList: [
    "Calcul automatisé du bilan carbone",
    "Rapports personnalisés et exports",
    "Tableau de bord analytique en temps réel",
    "Gestion d'équipes RSE",
    "Hébergement sécurisé des rapports",
    "Domaine personnalisé pour consultants",
    "Conformité réglementaire tunisienne",
    "Support bilingue français/arabe",
    "Données hébergées localement en Tunisie",
  ],
  category: "Environmental Management",
  audience: {
    "@type": "Audience",
    audienceType: "Business",
    geographicArea: {
      "@type": "Country",
      name: "Tunisia",
    },
  },
  inLanguage: "fr-TN",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://green-genius.org",
  },
  sameAs: [
    "https://www.linkedin.com/company/greengenius-tn",
    "https://www.facebook.com/GreenGeniusTunisia",
    "https://twitter.com/GreenGeniusTN",
  ],
};

// FAQ Structured Data for better SEO
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qu'un bilan carbone et pourquoi est-il important ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un bilan carbone mesure les émissions de gaz à effet de serre d'une entreprise. Il est essentiel pour identifier les sources d'émissions, réduire l'impact environnemental et respecter les réglementations en vigueur en Tunisie.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi choisir GreenGenius plutôt qu'une solution internationale ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GreenGenius est adapté au contexte tunisien avec des facteurs d'émission locaux, un hébergement des données en Tunisie, un support bilingue français/arabe, et une conformité aux réglementations tunisiennes.",
      },
    },
    {
      "@type": "Question",
      name: "Qui peut utiliser GreenGenius ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GreenGenius s'adresse aux entreprises tunisiennes souhaitant calculer leur bilan carbone, ainsi qu'aux consultants environnementaux gérant plusieurs clients avec notre plan multi-entreprises.",
      },
    },
    {
      "@type": "Question",
      name: "Vos données restent-elles en Tunisie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, toutes les données sont hébergées localement en Tunisie avec chiffrement SSL et sauvegardes automatiques, garantissant la souveraineté des données.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* Main Software Application Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* FAQ Schema for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      {/* Main Page Content */}
      <div className="min-h-screen  text-gray-900 overflow-x-hidden">
        <HeroSection />
        <FeaturesSection />
        <CTASection />
        <WhyTunisiaSection />
        <PricingSection />
      </div>
    </>
  );
}
