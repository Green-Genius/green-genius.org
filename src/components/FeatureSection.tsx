"use client";
import {
  Users,
  BarChart3,
  Shield,
  Calculator,
  FileText,
  Globe,
  LucideIcon,
} from "lucide-react";
import { useLocale } from "../../context/localContext";
import { FeaturesProps } from "@/common/types";

const iconMap: Record<string, LucideIcon> = {
  Calculator,
  BarChart3,
  Users,
  FileText,
  Globe,
  Shield,
};

export default function FeaturesSection() {
  const { dictionary } = useLocale();
  const featuresSection = dictionary.featuresSection;

  return (
    <section
      id="features"
      className="py-20 relative bg-gradient-to-b from-white to-gray-50"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            {featuresSection.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {featuresSection.description.firstNormalChunk}{" "}
            <strong>{featuresSection.description.firstBoldChunk} </strong>
            {featuresSection.description.secondNormalChunk}{" "}
            <strong>{featuresSection.description.secondBoldChunk} </strong>
            {featuresSection.description.thirdNormalChunk}{" "}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresSection.features.map(
            (feature: FeaturesProps, index: number) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-lg border border-black/10 p-8 rounded-2xl hover:bg-white hover:border-black/20 hover:-translate-y-2 transition-all duration-300 shadow-sm"
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
            }
          )}
        </div>
      </div>
    </section>
  );
}
