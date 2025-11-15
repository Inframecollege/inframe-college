import React from "react";
import { SiAdobephotoshop, SiAdobeillustrator, SiCoreldraw } from "react-icons/si";

interface RelevantToolsAndFeaturesProps {
  tools: string[];
}

export default function RelevantToolsAndFeatures({ tools }: RelevantToolsAndFeaturesProps) {



    // const tools = ["Autocad", "Sketchup", "3ds Max", "Photoshop"];

    const additionalFeatures = [
        "Library Access",
        "200+ Editable Templates (SVG)",
        "SKP Files Access",
        "Industry Visits",
        "Educational Trips",
        "Live Projects",
        "Internship Opportunities"
    ];

    return (
        <>
            {/* ⭐ Tools Section */}
            <div className="mt-16 mb-20">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-12">
                    🛠️ Master Industry-Relevant Tools
                </h3>

                <div className="flex flex-wrap justify-center gap-8 px-4">
                    {tools.map((tool, index) => (
                        <div
                            key={index}
                            className="
                        group relative
                        bg-white 
                        px-8 py-7
                        sm:px-10 sm:py-9 
                        rounded-2xl 
                        shadow-[0px_4px_20px_rgba(0,0,0,0.08)]
                        hover:shadow-[0px_8px_30px_rgba(0,0,0,0.12)]
                        transition-all duration-500 
                        cursor-pointer 
                        flex items-center gap-6
                        border border-gray-200
                        hover:border-yellow-400
                        hover:scale-[1.04]
                    "
                        >
                            {/* Icon */}
                            {/* <div
                                className="
                            w-16 h-16 sm:w-20 sm:h-20
                            rounded-2xl 
                            bg-gradient-to-br from-yellow-400 to-yellow-500
                            flex items-center justify-center
                            shadow-[0_4px_15px_rgba(255,193,7,0.4)]
                            text-white text-4xl sm:text-5xl
                            transition-transform duration-500
                            group-hover:scale-110
                        "
                            >
                                ⭐
                            </div> */}

                            {/* Text */}
                            <span className="text-xl sm:text-2xl font-semibold text-gray-800 tracking-wide">
                                {tool}
                            </span>

                            {/* Glow */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 bg-yellow-300 transition duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ⭐ Additional Features */}
            <div className="mb-20">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-12">
                    🌟 Additional Benefits
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    {additionalFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="
                        bg-white 
                        p-6 
                        rounded-2xl 
                        shadow-[0_4px_15px_rgba(0,0,0,0.08)]
                        hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                        border border-gray-200
                        hover:border-yellow-400
                        transition-all duration-300
                        text-center
                    "
                        >
                            <div className="text-yellow-500 text-4xl mb-3">✨</div>
                            <p className="text-gray-900 font-semibold text-lg">{feature}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

