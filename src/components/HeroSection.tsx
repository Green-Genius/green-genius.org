"use client";

import { HeroSectionStatsProps } from "@/common/types";
import { useLocale } from "../../context/localContext";
import { goToBilan } from "@/common/utils";
import { PopupButton } from "@typeform/embed-react";

export default function HeroSection() {
  const { dictionary } = useLocale();
  const heroSection = dictionary.heroSection;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Static background shapes - no animation */}
      <div className="absolute inset-0">
        <div
          className="absolute w-20 h-20 bg-black/5 rounded-full blur-sm"
          style={{ left: "10%", top: "20%" }}
        ></div>
        <div
          className="absolute w-32 h-32 bg-black/10 rounded-full blur-md"
          style={{ right: "15%", top: "10%" }}
        ></div>
        <div
          className="absolute w-16 h-16 bg-black/5 rounded-full blur-sm"
          style={{ left: "70%", top: "60%" }}
        ></div>
        <div
          className="absolute w-24 h-24 bg-black/10 rounded-full blur-md"
          style={{ left: "20%", bottom: "20%" }}
        ></div>
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
               linear-gradient(rgba(0, 0, 0, 0.15) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0, 0, 0, 0.15) 1px, transparent 1px)
             `,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="py-24 md:py-24 lg:py-0">
          <h1 className="text-5xl rtl:text-6xl rtl:font-bolder md:text-7xl font-bold mb-6 leading-tight text-black">
            {heroSection?.title.bold}
            <br />
            <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
              {heroSection?.title.span}
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
            {heroSection?.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={goToBilan}
              className="bg-greenly text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition-all transform hover:scale-105 shadow-lg"
            >
              {heroSection?.ctaButton.label}
            </button>
            <PopupButton
              id="kWWxv9dD"
              className="border border-black/30 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-black/10 transition-all text-black backdrop-blur-sm"
            >
              {heroSection?.ctaButton.viewDemo}
            </PopupButton>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {heroSection?.stats.map(
            (stat: HeroSectionStatsProps, index: number) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-black">
                  {stat.label}
                </div>
                <div className="text-gray-600">{stat.value}</div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
