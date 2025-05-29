"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { PopupButton } from "@typeform/embed-react";
import { useLocale } from "../../context/localContext";
import { BasePlan, SaaSPlan } from "@/common/types";

export default function PricingSection() {
  const { dictionary } = useLocale();
  const pricing = dictionary.pricingSection;
  const saasPlans = pricing.saasPlan;
  const selfHostedPlans = pricing.selfHostedPlan;
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    "saas" | "selfhosted"
  >("saas");

  const getCurrentPlans = () => {
    switch (selectedCategory) {
      case "saas":
        return saasPlans;
      case "selfhosted":
        return selfHostedPlans;
      default:
        return saasPlans;
    }
  };

  const formatPrice = (price: number) => {
    if (selectedCategory === "saas" && isAnnual && price > 0) {
      return Math.round(price * 0.8);
    }
    return price;
  };

  return (
    <section
      id="pricing"
      className="py-20 relative bg-gradient-to-b from-white to-gray-50"
    >
      {/* <Sidetab id="kWWxv9dD" buttonText="click to open" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            {pricing.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {pricing.description}
          </p>

          <div className="flex flex-col gap-4 items-center">
            {/* Category Selection */}
            <div className="mt-8 inline-flex items-center bg-black/10 rounded-full p-1 backdrop-blur-sm">
              <button
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === "saas"
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-black"
                }`}
                onClick={() => setSelectedCategory("saas")}
              >
                SaaS
              </button>
              <button
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === "selfhosted"
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-black"
                }`}
                onClick={() => setSelectedCategory("selfhosted")}
              >
                Self-Hosted
              </button>
            </div>

            {/* Monthly/Annual Toggle - Only show for SaaS */}
            {selectedCategory === "saas" && (
              <div className="mt-4 inline-flex items-center bg-gray-100 rounded-full p-1">
                <button
                  className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${
                    !isAnnual
                      ? "bg-white text-black shadow-sm"
                      : "text-gray-600 hover:text-black"
                  }`}
                  onClick={() => setIsAnnual(false)}
                >
                  {pricing.monthlyButton}
                </button>
                <button
                  className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${
                    isAnnual
                      ? "bg-white text-black shadow-sm"
                      : "text-gray-600 hover:text-black"
                  }`}
                  onClick={() => setIsAnnual(true)}
                >
                  {pricing.annualButton}
                </button>
              </div>
            )}
          </div>
        </div>

        <div
          className={`grid gap-8  mx-auto ${
            getCurrentPlans().length === 1
              ? "md:grid-cols-1 max-w-md"
              : getCurrentPlans().length === 2
              ? "md:grid-cols-2 max-w-3xl"
              : "md:grid-cols-3"
          }`}
        >
          {getCurrentPlans().map((plan: BasePlan | SaaSPlan, index: number) => (
            <div
              key={index}
              className={`relative bg-white/95 backdrop-blur-lg border border-black/10 p-8 rounded-3xl hover:bg-white hover:border-black/30 hover:scale-105 transition-all duration-300 shadow-sm ${
                (plan as SaaSPlan).featured
                  ? "bg-white border-black/30 scale-105"
                  : ""
              }`}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-black">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="text-4xl font-bold mb-2 text-black">
                  {plan.price === 0
                    ? "0 TND"
                    : `${formatPrice(plan.price).toLocaleString()} TND`}
                </div>
                <div className="text-gray-600">{plan.period}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                  >
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <PopupButton
                id="kWWxv9dD"
                className={`w-full py-3 rounded-lg transition-all font-semibold ${
                  plan.buttonStyle === "primary"
                    ? "bg-greenly text-black hover:bg-black hover:text-white shadow-lg"
                    : "border border-black/30 text-black hover:bg-black/10 backdrop-blur-sm"
                }`}
              >
                {plan.buttonText}
              </PopupButton>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {selectedCategory === "saas" && (
            <>
              <p className="text-gray-600 mb-4">{pricing.footerSaasTitle}</p>
              <p className="text-sm text-gray-500">{pricing.footerSaasText}</p>
            </>
          )}
          {selectedCategory === "selfhosted" && (
            <>
              <p className="text-gray-600 mb-4">
                {pricing.footerSelfHostedTitle}
              </p>
              <p className="text-sm text-gray-500">
                {pricing.footerSelfHostedText}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
