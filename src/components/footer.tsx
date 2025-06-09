"use client";
import Link from "next/link";
import React from "react";
import { useLocale } from "../../context/localContext";
import { FooterLink, FooterSection } from "@/common/types";
import { PopupButton } from "@typeform/embed-react";

function Footer() {
  const { dictionary } = useLocale();
  const footer = dictionary.footer;

  return (
    <footer className="flex flex-col items-center gap-4 py-8 text-white bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="font-semibold text-xl rounded-sm overflow-hidden">
                <span className="bg-black text-white pl-2">Green-</span>
                <span className="bg-greenly text-black pr-2">-Genius</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              {footer?.websiteDescription}
            </p>
          </div>
          {footer?.footerSections.map(
            (section: FooterSection, index: number) => (
              <div key={index}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {section.links.map((link: FooterLink, linkIndex: number) =>
                    link.openPopUp ? (
                      <PopupButton
                        key={linkIndex}
                        id="kWWxv9dD"
                        className="hover:text-white transition-colors"
                      >
                        {link.label}
                      </PopupButton>
                    ) : (
                      <li key={linkIndex}>
                        <a
                          href={link.url}
                          target={link.isExternal ? "_blank" : "_self"}
                          className="hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )
          )}
        </div>
      </div>

      <p className="py-8 text-base leading-6 text-center text-white">
        © {new Date().getFullYear()}{" "}
        <Link href={"https://diva-software.com"} target="_blank">
          <strong>DIVA SOFTWARE</strong>
        </Link>
        , {dictionary?.allright}
      </p>
    </footer>
  );
}

export default Footer;
