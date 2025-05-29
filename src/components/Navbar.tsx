"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "./language-switcher";
import { useLocale } from "../../context/localContext";
import NavLink from "./navLinks";
import { NavItemsProps } from "@/common/types";

export default function VagaNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { dictionary } = useLocale();
  const navbarItems = dictionary.navbar;

  const handleTrialClick = () => {
    console.log("Trial started");
    // Add your trial logic here
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/90 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="">
            <div className="font-semibold text-xl rounded-sm overflow-hidden">
              <span className="bg-black text-white pl-2">Green-</span>
              <span className="bg-greenly text-black pr-2">-Genius</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 rtl:space-x-reverse">
            {navbarItems?.navItems.map((item: NavItemsProps, index: number) => (
              <NavLink
                item={item}
                scrollToSection={scrollToSection}
                key={index}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={handleTrialClick}
              className="bg-greenly text-black px-6 py-2 rounded-lg hover:bg-black hover:text-white transition-colors font-medium"
            >
              {navbarItems?.ctaButton.label}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navbarItems?.navItems.map(
                (item: NavItemsProps, index: number) => (
                  <NavLink
                    item={item}
                    key={index}
                    scrollToSection={scrollToSection}
                    mobileMenuOpen={mobileMenuOpen}
                  />
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
