"use client";

import { useState } from "react";
import { useLocale } from "../../context/localContext";
import { i18n, localeFlags, localeSlugs } from "../../i18n.config";
import Image from "next/image";

export default function LanguageSwitcher() {
  const { locale, changeLocale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="px-3 py-1 bg-white border border-gray-300 rounded-md flex items-center gap-2 shadow-sm hover:bg-gray-50"
      >
        <Image src={localeFlags[locale]} alt={locale} width={20} height={20} />
        <span className="text-xl">{localeSlugs[locale]}</span>
        <svg
          className="w-4 h-4 ml-1 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.5 7l4.5 4 4.5-4" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-md z-10">
          {i18n.locales
            .filter((loc) => loc !== locale)
            .map((loc) => (
              <button
                key={loc}
                onClick={() => {
                  changeLocale(loc);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2"
              >
                <Image
                  src={localeFlags[loc]}
                  alt={locale}
                  width={20}
                  height={20}
                />

                <span className="text-xl">{localeSlugs[loc]}</span>
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
