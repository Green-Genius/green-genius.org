"use client";
import {
  Users,
  BarChart3,
  Shield,
  Calculator,
  FileText,
  Globe,
  LucideIcon,
  Leaf,
} from "lucide-react";
import { useLocale } from "../../context/localContext";
import { FeaturesSectionProps } from "@/common/types";
import React from "react";

const iconMap: Record<string, LucideIcon> = {
  Calculator,
  BarChart3,
  Users,
  FileText,
  Globe,
  Shield,
  Leaf,
};

export default function FeaturesSection() {
  const { dictionary } = useLocale();
  const featuresSection: FeaturesSectionProps = dictionary.featuresSection;

  return (
    <section
      id="features"
      className="py-20  bg-gradient-to-b from-white to-gray-50"
    >
      <div className=" z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            {featuresSection?.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {featuresSection?.description.firstNormalChunk}{" "}
            <strong>{featuresSection?.description.firstBoldChunk} </strong>
            {featuresSection?.description.secondNormalChunk}{" "}
            <strong>{featuresSection?.description.secondBoldChunk} </strong>
            {featuresSection?.description.thirdNormalChunk}{" "}
          </p>
        </div>
        <div className="flex flex-col lg:gap-32 gap-4 relative">
          {featuresSection.features.map((element, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 relative lg:grid lg:grid-cols-[28%,1fr] lg:gap-8 lg:min-h-[80vh] lg:relative"
            >
              <div className="lg:sticky lg:top-36 lg:self-start">
                <h2 className="text-xl md:text-5xl font-bold text-left  text-black">
                  {element.title}
                </h2>
              </div>

              <div className="flex lg:overflow-x-visible overflow-x-scroll gap-4 lg:gap-x-20 snap-x snap-mandatory lg:grid md:grid-cols-2 lg:grid-cols-2 ">
                {element.featuresList.map((feature, index) => {
                  const IconComponent = iconMap[feature.icon];
                  return (
                    <div
                      key={index}
                      className=" snap-center min-w-[450px] bg-white/95 backdrop-blur-lg border border-black/10 p-8 rounded-2xl hover:bg-white hover:border-black/20  transition-all duration-300 shadow-sm"
                    >
                      <div className="w-12 h-12 bg-greenly rounded-lg flex items-center justify-center mb-6">
                        {IconComponent && (
                          <IconComponent className="w-6 h-6 text-black" />
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-black">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
