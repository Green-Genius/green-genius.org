"use client";
import Link from "next/link";
import { useLocale } from "../../context/localContext";

export default function CTASection() {
  const { dictionary } = useLocale();
  const ctaSection = dictionary.ctaSection;

  return (
    <section className="py-20 relative overflow-hidden rounded-3xl mx-4 md:mx-8 my-8">
      <div className="absolute inset-0 bg-white"></div>

      {/* SVG Background */}
      <div className="absolute inset-0 w-fit">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1424 570"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter
              id="filter0_f_0_97"
              x="126"
              y="-124.679"
              width="790"
              height="759"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_0_97"
              />
            </filter>
            <filter
              id="filter1_iii_0_97"
              x="51.7895"
              y="-794.387"
              width="1320.42"
              height="1373.03"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="157.816" />
              <feGaussianBlur stdDeviation="105.211" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0352941 0 0 0 0 0.160784 0 0 0 0 0.0784314 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_0_97"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="52.6053" />
              <feGaussianBlur stdDeviation="39.4539" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.109804 0 0 0 0 0.486275 0 0 0 0 0.239216 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow_0_97"
                result="effect2_innerShadow_0_97"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="6.57566" />
              <feGaussianBlur stdDeviation="9.86349" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.509804 0 0 0 0 0.886275 0 0 0 0 0.639216 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_0_97"
                result="effect3_innerShadow_0_97"
              />
            </filter>
            <filter
              id="filter2_f_0_97"
              x="506"
              y="-349.679"
              width="810"
              height="777"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_0_97"
              />
            </filter>
            <filter
              id="filter3_iii_0_97"
              x="241.926"
              y="-650.128"
              width="940.14"
              height="977.275"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="112.365" />
              <feGaussianBlur stdDeviation="74.9099" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0352941 0 0 0 0 0.160784 0 0 0 0 0.0784314 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_0_97"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="37.4549" />
              <feGaussianBlur stdDeviation="28.0912" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.109804 0 0 0 0 0.486275 0 0 0 0 0.239216 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow_0_97"
                result="effect2_innerShadow_0_97"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4.68187" />
              <feGaussianBlur stdDeviation="7.0228" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.509804 0 0 0 0 0.886275 0 0 0 0 0.639216 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_0_97"
                result="effect3_innerShadow_0_97"
              />
            </filter>
            <filter
              id="filter4_f_0_97"
              x="162"
              y="-597.679"
              width="810"
              height="777"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_0_97"
              />
            </filter>
            <clipPath id="clip0_0_97">
              <rect
                y="0.823242"
                width="1424"
                height="568.381"
                rx="24"
                fill="white"
              />
            </clipPath>
          </defs>

          <g clipPath="url(#clip0_0_97)">
            <rect
              y="0.823242"
              width="1424"
              height="568.381"
              rx="24"
              fill="#101010"
            />
            <g opacity="0.3">
              <g filter="url(#filter0_f_0_97)">
                <ellipse
                  cx="521"
                  cy="254.821"
                  rx="195"
                  ry="179.5"
                  transform="rotate(180 521 254.821)"
                  fill="#1C7C3D"
                />
              </g>
              <g filter="url(#filter1_iii_0_97)">
                <rect
                  x="1267"
                  y="420.823"
                  width="1110"
                  height="1110"
                  rx="555"
                  transform="rotate(180 1267 420.823)"
                  fill="#060213"
                  fillOpacity="0.5"
                />
              </g>
              <g filter="url(#filter2_f_0_97)">
                <ellipse
                  cx="911"
                  cy="38.8214"
                  rx="205"
                  ry="188.5"
                  transform="rotate(180 911 38.8214)"
                  fill="#1C7C3D"
                />
              </g>
              <g filter="url(#filter3_iii_0_97)">
                <rect
                  x="1107.16"
                  y="214.782"
                  width="790.32"
                  height="790"
                  rx="395"
                  transform="rotate(180 1107.16 214.782)"
                  fill="#060213"
                  fillOpacity="0.5"
                />
              </g>
              <g filter="url(#filter4_f_0_97)">
                <ellipse
                  cx="567"
                  cy="-209.179"
                  rx="205"
                  ry="188.5"
                  transform="rotate(180 567 -209.179)"
                  fill="#1C7C3D"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          {ctaSection.title}
        </h2>
        <p className="text-xl text-gray-300 mb-8">{ctaSection.description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="https://app.green-genius.org/register"
            className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
          >
            {ctaSection.ctaButton.label}
          </Link>
          <Link
            href="https://app.green-genius.org/register"
            className="border border-gray-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all text-white hover:border-green-500"
          >
            {ctaSection.ctaButton.viewDemo}
          </Link>
        </div>
        <p className="text-sm text-gray-400 mt-6">{ctaSection.footer}</p>
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
