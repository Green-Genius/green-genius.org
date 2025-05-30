import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/footer";
import VagaNavbar from "@/components/Navbar";
import { i18n, Locale } from "../../../i18n.config";
import { getDictionary } from "../../../dictionaries";
import { LocaleProvider } from "../../../context/localContext";

// Dynamically generate metadata based on locale and dictionary
export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ locale: Locale }> }>): Promise<Metadata> {
  const locale = (await params).locale;
  const dictionary = await getDictionary(locale);
  // Fallbacks in case meta is missing
  const meta = dictionary.meta || {};
  return {
    title: meta.title || "Green Genius",
    description: meta.description || "CRM SaaS Tunisie",
    openGraph: {
      title: meta.title || "Green Genius",
      description: meta.description || "CRM SaaS Tunisie",
      url: "https://green-genius.org",
      siteName: "Green Genius",
      locale: locale === "en" ? "en_US" : locale === "fr" ? "fr_FR" : "ar_TN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title || "VAGA",
      description: meta.description || "CRM SaaS Tunisie",
    },
    // viewport: {
    //   width: "device-width",
    //   initialScale: 1,
    // },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

// Define a function to get meta information
async function getMetaInfo(locale: Locale) {
  const dictionary = await getDictionary(locale);

  return {
    dictionary,
    canonicalUrl: `https://gren-genius.org/${locale}`,
    ogLocale: locale === "en" ? "en_US" : locale === "fr" ? "fr_FR" : "ar_TN",
    isRtl: locale === "ar",
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;

  // Get meta info and dictionary
  const { dictionary, isRtl } = await getMetaInfo(locale);

  return (
    <html
      suppressHydrationWarning
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className="scroll-smooth"
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins antialiased bg-white text-black overflow-x-hidden">
        {/* Background Elements - Fixed positioning for consistent backdrop */}
        <div className="fixed inset-0 -z-10">
          {/* Primary gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Main content wrapper */}
        <LocaleProvider locale={locale} dictionary={dictionary}>
          <div className="relative z-10 min-h-screen flex flex-col">
            {/* Navigation will be inserted here */}
            <VagaNavbar />

            {/* Main content area */}
            <main className="flex-1">{children}</main>

            {/* Footer will be inserted here */}
            <Footer></Footer>
          </div>
        </LocaleProvider>

        {/* Static background shapes - no animation */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          {/* Shape 1 - Top left */}
          <div
            className="absolute w-20 h-20 bg-black/5 rounded-full blur-xl"
            style={{ left: "10%", top: "20%" }}
          />

          {/* Shape 2 - Top right */}
          <div
            className="absolute w-32 h-32 bg-black/10 rounded-full blur-2xl"
            style={{ right: "15%", top: "10%" }}
          />

          {/* Shape 3 - Center right */}
          <div
            className="absolute w-16 h-16 bg-black/5 rounded-full blur-lg"
            style={{ left: "70%", top: "60%" }}
          />

          {/* Shape 4 - Bottom left */}
          <div
            className="absolute w-24 h-24 bg-black/10 rounded-full blur-xl"
            style={{ left: "20%", bottom: "20%" }}
          />

          {/* Shape 5 - Bottom center */}
          <div
            className="absolute w-28 h-28 bg-black/5 rounded-full blur-2xl"
            style={{ left: "50%", bottom: "30%" }}
          />
        </div>
      </body>
    </html>
  );
}
