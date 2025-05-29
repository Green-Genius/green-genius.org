// i18n.config.ts
export type Locale = "en" | "fr" | "ar";

export const i18n = {
  defaultLocale: "en" as Locale,
  locales: ["en", "fr", "ar"] as Locale[],
  localeDetection: true,
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};
export const localeSlugs: Record<Locale, string> = {
  en: "en",
  fr: "fr",
  ar: "ar",
};

export const localeFlags: Record<Locale, string> = {
  en: "/en.svg",
  fr: "/fr.svg",
  ar: "/tn.svg",
};

export type RouteKey = "home" | "pricing" | "faq" | "request" | "contact";

export function getDirection(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}
