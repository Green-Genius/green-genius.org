import { NextRequest, NextResponse } from "next/server";
import { i18n, Locale } from "./../i18n.config";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware for static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.match(/\.(svg|png|jpg|jpeg|gif|webp|ico|js|css|woff|woff2)$/)
  ) {
    return NextResponse.next();
  }

  // Check if pathname already includes a locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Determine preferred locale
  const locale = getPreferredLocale(request);

  // Redirect to locale-prefixed URL
  const newUrl = new URL(
    `/${locale}${pathname === "/" ? "" : pathname}`,
    request.url
  );

  return NextResponse.redirect(newUrl);
}

function getPreferredLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") || "";

  const acceptedLanguages = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim().toLowerCase());

  const lang = acceptedLanguages[0];

  if (i18n.locales.includes(lang as Locale)) return lang;

  const languageCode = lang.split("-")[0];
  if (i18n.locales.includes(languageCode as Locale)) return languageCode;

  return i18n.defaultLocale;
}

// Only run middleware for non-static routes
export const config = {
  matcher: [
    /*
     * Exclude paths that:
     * - start with _next (Next.js internals)
     * - start with api (API routes)
     * - are static files (like .svg, .png, .js, etc.)
     */
    "/((?!_next|api|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|js|css|json|woff2?|ttf)$).*)",
  ],
};
