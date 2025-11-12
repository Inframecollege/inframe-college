import { LOGOS } from "../utils/constant";
import React from "react";
import { Poppins } from "next/font/google"; // Importing Google Fonts via next/font
import Image from "next/image";

// Using the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Including various font weights
});

const InfiniteSlider: React.FC = () => {
  return (
 <div className="relative overflow-hidden py-10 bg-white">
  <h2
    className={`text-center text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 ${poppins.className}`}
  >
    INDUSTRY & PLACEMENT PARTNER
  </h2>

  <p
    className={`text-center text-sm sm:text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto px-4 ${poppins.className}`}
  >
    Inframe’s strong industry partnerships provide students with unparalleled
    career opportunities and real-world experience to excel in design and business.
  </p>

  {/* Scrolling Logo Section */}
  <div className="relative w-full overflow-hidden">
    <div className="flex animate-[scroll_20s_linear_infinite] space-x-8 sm:space-x-12 px-4 sm:px-6 md:px-10">
      {LOGOS.map((logo, index) => (
        <div
          key={`logo-${index}`}
          className="flex flex-col items-center justify-center text-slate-800 flex-shrink-0"
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 shadow-md border bg-white border-gray-200 rounded-md flex items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.name || "Company Logo"}
              width={192}
              height={192}
              className="object-contain w-full h-full p-4"
            />
          </div>
          <span
            className={`mt-2 text-center text-xs sm:text-sm md:text-base text-gray-700 ${poppins.className}`}
          >
            {logo.name}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Optional: Add gradient fade on edges for nicer visual */}
  <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent"></div>
  <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent"></div>
</div>

  );
};

export default InfiniteSlider;
