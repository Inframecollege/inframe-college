"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import HeroSection from '../components/heroSection';
import AdditionalInfo from '../components/additionalInfo';
import Footer from '../components/footer';
import QuickPayment from '../components/quickPayment';
import RelevantToolsAndFeatures from '../components/relevantToolsAndFeatures';
import Testimonials from '../components/testimonials';
import { Poppins } from "next/font/google";
export const poppins = Poppins({
    subsets: ["latin"],
    weight
        : ["400", "500", "700"], // Including various font weights
});
export const LOGOS = [
    { src: "/company logo/logo (1).png", name: "OneClick" },
    { src: "/company logo/KA LOGO.png", name: "Kartik Acharya Architects" },
    { src: "/company logo/architect era logo.jpg", name: "Architect Era" },
    { src: "/company logo/Art Maker  2.png", name: "Art Maker" },
    {
        src: "/company logo/DesignDailyLandscape.png",
        name: "Design Daily Landscape",
    },
    { src: "/company logo/download (1).png", name: "Hunarship" },
    { src: "/company logo/download.png", name: "Being Nest" },
    { src: "/company logo/GM_Final-Logo02.png", name: "GM Final" },
    { src: "/company logo/hqdefault_live.jpg", name: "Paper Out Academy" },
    { src: "/company logo/images.jpg", name: "Shambhav" },
    {
        src: "/company logo/InFrame-Design-Institute.jpg",
        name: "InFrame Design Institute",
    },
    {
        src: "/company logo/InframeEntertainment5.jpg",
        name: "Inframe Entertainment",
    },
    { src: "/company logo/landscap-300x88.png", name: "Himalian" },
    { src: "/company logo/logo.png", name: "Prime Tech" },
    { src: "/company logo/prime tech logo.png", name: "Prime Tech" },
    { src: "/company logo/Urban Foundry_Logo.jpg", name: "Urban Foundry" },
];
function Carrousal() {
    return (
        <section className="relative bg-gray-900   text-white py-6 sm:py-16 overflow-hidden animate-slide-up-smooth">

            {/* FADE GRADIENT LEFT */}
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black text-white to-transparent z-20"></div>

            {/* FADE GRADIENT RIGHT */}
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black text-white to-transparent z-20"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                <h2
                    className={`text-center text-2xl sm:text-3xl md:text-5xl font-bold text-gray-300 mb-4 drop-shadow-md ${poppins.className}`}
                >
                    INDUSTRY & PLACEMENT PARTNERS
                </h2>

                <p
                    className={`text-center text-base sm:text-lg text-gray-300 mb-10 max-w-3xl mx-auto ${poppins.className}`}
                >
                    Inframe's strong industry partnerships offer students real-world opportunities
                    and access to global brands for faster career growth.
                </p>

                {/* Infinite Scroll Container */}
                <div className="flex space-x-10 animate-scroll overflow-visible">
                    {[...LOGOS, ...LOGOS].map((logo, index) => (
                        <div
                            key={`logo-${index}`}
                            className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
                        >
                            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 
                                            bg-white rounded-xl border border-gray-200 shadow-xl
                                            flex items-center justify-center hover:shadow-2xl transition-all duration-300">
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    width={192}
                                    height={192}
                                    className="object-contain w-full h-full p-4"
                                />
                            </div>

                            <span
                                className={`mt-3 text-center text-sm sm:text-base md:text-lg text-gray-300 font-medium drop-shadow ${poppins.className}`}
                            >
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Carrousal