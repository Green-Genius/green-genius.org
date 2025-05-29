// i18n.config.ts
export type Locale = "fr" | "en" | "ar";

export const i18n = {
  defaultLocale: "fr" as Locale,
  locales: ["fr", "en", "ar"] as Locale[],
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

export function getDirection(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}
