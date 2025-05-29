"use client";

import { NavItemsProps } from "@/common/types";

interface Props {
  readonly item: NavItemsProps;
  readonly scrollToSection: (sectionId: string) => void;
  readonly mobileMenuOpen?: boolean;
}
export default function NavLink({
  item,
  scrollToSection,
  mobileMenuOpen,
}: Props) {
  if (mobileMenuOpen) {
    return (
      <button
        onClick={() => scrollToSection(item.section)}
        className="text-black hover:text-gray-600 transition-colors py-2 text-left"
      >
        {item.label}
      </button>
    );
  }
  return (
    <button
      onClick={() => scrollToSection(item.section)}
      className="text-black hover:text-green-800 group transition-colors"
    >
      {item.label}
      <span className="font-bold text-3xl text-greenly group-hover:text-green-800 p-0 m-0 leading-none">
        .
      </span>
    </button>
  );
}
