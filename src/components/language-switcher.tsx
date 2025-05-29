"use client";

import { useState } from "react";
import { useLocale } from "../../context/localContext";
import { i18n, localeFlags, localeNames } from "../../i18n.config";

export default function LanguageSwitcher() {
  const { locale, changeLocale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 bg-white border rounded-md flex items-center gap-2"
      >
        <span>{localeFlags[locale]}</span>
        <span>{localeNames[locale]}</span>
        <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.5 7l4.5 4 4.5-4" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md z-10">
          {i18n.locales.map((loc) =>
            loc === locale ? null : (
              <button
                key={loc}
                onClick={() => changeLocale(loc)}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                {localeFlags[loc]} {localeNames[loc]}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
