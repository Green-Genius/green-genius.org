"use client";
import { useLocale } from "../../context/localContext";
import { goToBilan } from "@/common/utils";
import { PopupButton } from "@typeform/embed-react";

export default function CTASection() {
  const { dictionary } = useLocale();
  const ctaSection = dictionary.ctaSection;

  return (
    <section className="py-20 relative overflow-hidden rounded-3xl mx-4 md:mx-8 my-8">
      <div className="absolute inset-0 bg-white"></div>

      {/* SVG Background */}
      <div className="absolute inset-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1424 570"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="jsx-3245ea0002f5e8d0 w-full h-full object-cover"
        >
          <defs className="jsx-3245ea0002f5e8d0">
            <filter
              id="filter0_f_0_97"
              x="126"
              y="-124.679"
              width="790"
              height="759"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
              className="jsx-3245ea0002f5e8d0"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
                className="jsx-3245ea0002f5e8d0"
              ></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
                className="jsx-3245ea0002f5e8d0"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_0_97"
                className="jsx-3245ea0002f5e8d0"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter1_iii_0_97"
              x="51.7895"
              y="-794.387"
              width="1320.42"
              height="1373.03"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
              className="jsx-3245ea0002f5e8d0"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
                className="jsx-3245ea0002f5e8d0"
              ></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
                className="jsx-3245ea0002f5e8d0"
              ></feBlend>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
                className="jsx-3245ea0002f5e8d0"
              ></feColorMatrix>
              <feOffset
                dy="157.816"
                className="jsx-3245ea0002f5e8d0"
              ></feOffset>
              <feGaussianBlur
                stdDeviation="105.211"
                className="jsx-3245ea0002f5e8d0"
              ></feGaussianBlur>
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
                className="jsx-3245ea0002f5e8d0"
              ></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0352941 0 0 0 0 0.160784 0 0 0 0 0.0784314 0 0 0 1 0"
                className="jsx-3245ea0002f5e8d0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_0_97"
                className="jsx-3245ea0002f5e8d0"
              ></feBlend>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
                className="jsx-3245ea0002f5e8d0"
              ></feColorMatrix>
              <feOffset
                dy="52.6053"
                className="jsx-3245ea0002f5e8d0"
              ></feOffset>
              <feGaussianBlur
                stdDeviation="39.4539"
                className="jsx-3245ea0002f5e8d0"
              ></feGaussianBlur>
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
                className="jsx-3245ea0002f5e8d0"
              ></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.109804 0 0 0 0 0.486275 0 0 0 0 0.239216 0 0 0 1 0"
                className="jsx-3245ea0002f5e8d0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="effect1_innerShadow_0_97"
                result="effect2_innerShadow_0_97"
                className="jsx-3245ea0002f5e8d0"
              ></feBlend>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
                className="jsx-3245ea0002f5e8d0"
              ></feColorMatrix>
              <feOffset
                dy="6.57566"
                className="jsx-3245ea0002f5e8d0"
              ></feOffset>
              <feGaussianBlur
                stdDeviation="9.86349"
                className="jsx-3245ea0002f5e8d0"
              ></feGaussianBlur>
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
                className="jsx-3245ea0002f5e8d0"
              ></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.509804 0 0 0 0 0.886275 0 0 0 0 0.639216 0 0 0 1 0"
                className="jsx-3245ea0002f5e8d0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_0_97"
                result="effect3_innerShadow_0_97"
                className="jsx-3245ea0002f5e8d0"
              ></feBlend>
            </filter>
            <filter
              id="filter2_f_0_97"
              x="506"
              y="-349.679"
              width="810"
              height="777"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
              className="jsx-3245ea0002f5e8d0"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
                className="jsx-3245ea0002f5e8d0"
              ></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
                className="jsx-3245ea0002f5e8d0"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_0_97"
                className="jsx-3245ea0002f5e8d0"
              ></feGaussianBlur>
            </filter>
            <filter
              id="filter3_iii_0_97"
              x="241.926"
              y="-650.128"
              width="940.14"
              height="977.275"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
              className="jsx-3245ea0002f5e8d0"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
                className="jsx-3245ea0002f5e8d0"
              ></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
                className="jsx-3245ea0002f5e8d0"
              ></feBlend>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
                className="jsx-3245ea0002f5e8d0"
              ></feColorMatrix>
              <feOffset
                dy="112.365"
                className="jsx-3245ea0002f5e8d0"
              ></feOffset>
              <feGaussianBlur
                stdDeviation="74.9099"
                className="jsx-3245ea0002f5e8d0"
              ></feGaussianBlur>
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
                className="jsx-3245ea0002f5e8d0"
              ></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0352941 0 0 0 0 0.160784 0 0 0 0 0.0784314 0 0 0 1 0"
                className="jsx-3245ea0002f5e8d0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_0_97"
                className="jsx-3245ea0002f5e8d0"
              ></feBlend>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
                className="jsx-3245ea0002f5e8d0"
              ></feColorMatrix>
              <feOffset
                dy="37.4549"
                className="jsx-3245ea0002f5e8d0"
              ></feOffset>
              <feGaussianBlur
                stdDeviation="28.0912"
                className="jsx-3245ea0002f5e8d0"
              ></feGaussianBlur>
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
                className="jsx-3245ea0002f5e8d0"
              ></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.109804 0 0 0 0 0.486275 0 0 0 0 0.239216 0 0 0 1 0"
                className="jsx-3245ea0002f5e8d0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="effect1_innerShadow_0_97"
                result="effect2_innerShadow_0_97"
                className="jsx-3245ea0002f5e8d0"
              ></feBlend>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
                className="jsx-3245ea0002f5e8d0"
              ></feColorMatrix>
              <feOffset
                dy="4.68187"
                className="jsx-3245ea0002f5e8d0"
              ></feOffset>
              <feGaussianBlur
                stdDeviation="7.0228"
                className="jsx-3245ea0002f5e8d0"
              ></feGaussianBlur>
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
                className="jsx-3245ea0002f5e8d0"
              ></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.509804 0 0 0 0 0.886275 0 0 0 0 0.639216 0 0 0 1 0"
                className="jsx-3245ea0002f5e8d0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_0_97"
                result="effect3_innerShadow_0_97"
                className="jsx-3245ea0002f5e8d0"
              ></feBlend>
            </filter>
            <filter
              id="filter4_f_0_97"
              x="162"
              y="-597.679"
              width="810"
              height="777"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
              className="jsx-3245ea0002f5e8d0"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
                className="jsx-3245ea0002f5e8d0"
              ></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
                className="jsx-3245ea0002f5e8d0"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_0_97"
                className="jsx-3245ea0002f5e8d0"
              ></feGaussianBlur>
            </filter>
            <clipPath id="clip0_0_97" className="jsx-3245ea0002f5e8d0">
              <rect
                y="0.823242"
                width="1424"
                height="568.381"
                rx="24"
                fill="white"
                className="jsx-3245ea0002f5e8d0"
              ></rect>
            </clipPath>
          </defs>
          <g clipPath="url(#clip0_0_97)" className="jsx-3245ea0002f5e8d0">
            <rect
              y="0.823242"
              width="1424"
              height="568.381"
              rx="24"
              fill="#101010"
              className="jsx-3245ea0002f5e8d0"
            ></rect>
            <g opacity="0.3" className="jsx-3245ea0002f5e8d0">
              <g filter="url(#filter0_f_0_97)" className="jsx-3245ea0002f5e8d0">
                <ellipse
                  cx="521"
                  cy="254.821"
                  rx="195"
                  ry="179.5"
                  transform="rotate(180 521 254.821)"
                  fill="#1C7C3D"
                  className="jsx-3245ea0002f5e8d0"
                ></ellipse>
              </g>
              <g
                filter="url(#filter1_iii_0_97)"
                className="jsx-3245ea0002f5e8d0"
              >
                <rect
                  x="1267"
                  y="420.823"
                  width="1110"
                  height="1110"
                  rx="555"
                  transform="rotate(180 1267 420.823)"
                  fill="#060213"
                  clipPath="0.5"
                  className="jsx-3245ea0002f5e8d0"
                ></rect>
              </g>
              <g filter="url(#filter2_f_0_97)" className="jsx-3245ea0002f5e8d0">
                <ellipse
                  cx="911"
                  cy="38.8214"
                  rx="205"
                  ry="188.5"
                  transform="rotate(180 911 38.8214)"
                  fill="#1C7C3D"
                  className="jsx-3245ea0002f5e8d0"
                ></ellipse>
              </g>
              <g
                filter="url(#filter3_iii_0_97)"
                className="jsx-3245ea0002f5e8d0"
              >
                <rect
                  x="1107.16"
                  y="214.782"
                  width="790.32"
                  height="790"
                  rx="395"
                  transform="rotate(180 1107.16 214.782)"
                  fill="#060213"
                  fillOpacity="0.5"
                  className="jsx-3245ea0002f5e8d0"
                ></rect>
              </g>
              <g filter="url(#filter4_f_0_97)" className="jsx-3245ea0002f5e8d0">
                <ellipse
                  cx="567"
                  cy="-209.179"
                  rx="205"
                  ry="188.5"
                  transform="rotate(180 567 -209.179)"
                  fill="#1C7C3D"
                  className="jsx-3245ea0002f5e8d0"
                ></ellipse>
              </g>
            </g>
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          {ctaSection?.title}
        </h2>
        <p className="text-xl text-gray-300 mb-8">{ctaSection?.description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={goToBilan}
            className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
          >
            {ctaSection?.ctaButton.label}
          </button>
          <PopupButton
            id="kWWxv9dD"
            className="border border-gray-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all text-white hover:border-green-500"
          >
            {ctaSection?.ctaButton.viewDemo}
          </PopupButton>
        </div>
        <p className="text-sm text-gray-400 mt-6">{ctaSection?.footer}</p>
      </div>

      {/* Add the required CSS for radial gradient */}
      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(
            circle at center,
            var(--tw-gradient-stops)
          );
        }
      `}</style>
    </section>
  );
}
