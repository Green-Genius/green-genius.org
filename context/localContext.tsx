"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { Locale, getDirection } from "../i18n.config";

type Dictionary = Record<string, any>;

interface LocaleContextType {
  locale: Locale;
  dictionary: Dictionary;
  dir: "ltr" | "rtl";
  changeLocale: (newLocale: Locale) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

interface LocaleProviderProps {
  children: ReactNode;
  locale: Locale;
  dictionary: Dictionary;
}

export function LocaleProvider({
  children,
  locale,
  dictionary,
}: LocaleProviderProps) {
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);
  const [currentDictionary, setCurrentDictionary] =
    useState<Dictionary>(dictionary);
  const [dir, setDir] = useState<"ltr" | "rtl">(getDirection(locale));

  const router = useRouter();

  useEffect(() => {
    setCurrentLocale(locale);
    setCurrentDictionary(dictionary);
    setDir(getDirection(locale));
  }, [locale, dictionary]);

  const changeLocale = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    const newPath = `/${newLocale}`;
    router.push(newPath);
  };

  // Function to get translations with nested key support (e.g. 'nav.home')
  const t = (key: string): string => {
    const keys = key.split(".");
    let result = currentDictionary;

    for (const k of keys) {
      if (result && typeof result === "object" && k in result) {
        result = result[k];
      } else {
        // Return the key if translation not found
        return key;
      }
    }

    return typeof result === "string" ? result : key;
  };

  return (
    <LocaleContext.Provider
      value={{
        locale: currentLocale,
        dictionary: currentDictionary,
        dir,
        changeLocale,
        t,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
