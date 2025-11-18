"use client";

import { Poppins } from "next/font/google";
import HighlightsSection from "./HighlightsSection";
import CareerProspects from "./CareerProspects";
import CurriculumSection from "./CurriculumSection";
import SoftwareLogos from "./SoftwareLogos";
import TestimonialSlider from "./TestimonialSlider";
import FAQSection from "./FAQSection";
import {
    categoryHeroImages,
    type CurriculumType,
    type SoftwareType,
    type VideosType,
    type WhatLearn,
} from "../../utils/courseTypes";
import IndustryPartners from "./Partners";
import AdmissionProcess from "./AdmissionProcess";
import WhatYouWillLearn from "./WhatYouWillLearn";
import DreamsSection from "../DreamSection";
import Image from "next/image";
import { Button } from "../ui/button";
import ApplyNowForm from "../ApplyNowForm";
import { useState } from "react";


import CourseHero from "../courseDetails/courseDetails";
import ComboPack from "../courseDetails/ComboPack";
import CourseFeatures from "../courseDetails/courseFeature";
import Customizecourse from "../courseDetails/CustomizePack";
import WhyChooseUs from "../courseDetails/WhyChooseUs";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

interface CourseContentProps {
    title: string;
    duration: string;
    description: string;
    content: string;
    index: number;
    category: string;
    curriculum?: CurriculumType;
    software?: any;
    whatYouWillLearn?: WhatLearn[];
    videos?: VideosType[];
}

const CityPageComponent = ({
    title,
    duration,
    description,
    content,
    index = 0,
    category,
    curriculum,
    software,
    whatYouWillLearn,
    videos = [],
}: CourseContentProps) => {
    const heroImagesForCategory = categoryHeroImages[category] || [];
    const heroImage = heroImagesForCategory[index] || heroImagesForCategory[0];
    const fallbackHeroImage =
        "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1600&q=80";

    const [isFormOpen, setIsFormOpen] = useState(false);
    const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setIsFormOpen(true);
    };

    return (
        <div className="bg-white text-black" >

            <div className="relative h-[95vh] overflow-hidden" id="overview" >
                <Image
                    src={heroImage || fallbackHeroImage}
                    alt={`${title} Hero Image`
                    }
                    layout="fill"
                    objectFit="cover"
                    className="opacity-90"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black" />
                <div className="absolute inset-0 flex items-center justify-center" >
                    <div className="text-center max-w-6xl mx-auto px-4" >
                        <div className="bg-yellow-400 text-black mb-6 px-4 py-2 mt-14 text-lg inline-block rounded-full" >
                            {duration}
                        </div>
                        < h1 className="text-4xl md:text-7xl font-bold mb-6 text-white" >
                            {title}
                        </h1>
                        < p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-300 mb-8" >
                            {description}
                        </p>
                    </div>
                </div>
            </div>


            < div className="max-w-7xl mx-auto px-4 py-16" >
                <div className="grid md:grid-cols-3 gap-8" >
                    <div className="md:col-span-2" >
                        <h2 className={`text-3xl font-bold mb-6 ${poppins.className}`}>
                            Course Overview
                        </h2>
                        < p className="text-lg leading-relaxed text-gray-700" > {content} </p>
                    </div>
                    < div className="sm:w-[413px] p-14 sm:h-[300px] rounded-lg border bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600" >
                        <h3
                            className={`text-2xl ${poppins.className} text-center py-5 font-bold text-black`}
                        >
                            Step into the World of {title.split(" in ")[1] || "Design"}
                        </h3>
                        < div className="flex items-center gap-6" >
                            <Button onClick={handleApplyClick} className="bg-white text-black hover:bg-yellow-500 px-4 py-2" >
                                Apply Now
                            </Button>

                            < ApplyNowForm
                                isFormOpen={isFormOpen}
                                setIsFormOpen={setIsFormOpen}
                                isScrolled={false}
                            />
                            <Button
                                onClick={
                                    () =>
                                        document
                                            .getElementById("curriculum")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="hover:bg-white hover:text-black transition-all duration-200 font-bold"
                            >
                                Curriculum
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            < div className="max-w-7xl mx-auto px-4" >
                <div id="admission" >
                    <AdmissionProcess />
                    < DreamsSection />
                </div>

                < div id="highlights" >
                    <HighlightsSection />
                </div>

                < div id="career" >
                    <CareerProspects />
                </div>

                {
                    curriculum && (
                        <div id="curriculum" >
                            <CurriculumSection curriculum={curriculum} />
                        </div>
                    )
                }

                {/* {software?.length > 0 && (
                    <div className="my-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
                            🛠️ Tools You'll Master
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
                            {software.map((item : string) => {
                                const logoMap: Record<string, string> = {
                                    Photoshop: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
                                    Illustrator: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
                                    "Corel Draw": "https://upload.wikimedia.org/wikipedia/commons/4/43/CorelDRAW_X7_icon.svg",
                                    Maya: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Autodesk_Maya_logo.svg",
                                    "After Effects": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Adobe_After_Effects_CC_icon.svg",
                                    Blender: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg",
                                    Adobe: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Adobe_Corporate_logo.svg",
                                };
                                const logo = logoMap[item] || "https://via.placeholder.com/64";

                                return (
                                    <div
                                        key={item}
                                        className="flex flex-col items-center justify-center p-4 rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="w-16 h-16 relative mb-2">
                                            <Image
                                                src={logo}
                                                alt={item}
                                                fill
                                                className="object-contain"
                                                priority
                                            />
                                        </div>
                                        <p className="text-sm sm:text-base font-semibold text-center">
                                            {item}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )} */}



                <div id="partners" >
                    <IndustryPartners />
                </div>

                {
                    videos.length > 0 && (
                        <div id="testimonials" >
                            <TestimonialSlider videos={videos} />
                        </div>
                    )
                }

                <div id="faq" >

                </div>
            </div>


            < div className="max-w-5xl mx-auto py-10 px-4" >
                <h1 className="text-2xl font-bold mb-6 text-gray-900" >
                    Course Content
                </h1>
                < FAQSection />
            </div>
        </div>
    );
};

export default CityPageComponent;
