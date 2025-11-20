"use client";

import { Poppins } from "next/font/google";
import {
    categoryHeroImages,
    type CurriculumType,
    type SoftwareType,
    type VideosType,
    type WhatLearn,
} from "../../utils/courseTypes";
import DreamsSection from "../DreamSection";
import Image from "next/image";
import { Button } from "../ui/button";
import ApplyNowForm from "../ApplyNowForm";
import { useEffect, useRef, useState } from "react";


import CourseHero from "../courseDetails/courseDetails";
import ComboPack from "../courseDetails/ComboPack";
import CourseFeatures from "../courseDetails/courseFeature";
import Customizecourse from "../courseDetails/CustomizePack";
import WhyChooseUs from "../courseDetails/WhyChooseUs";
import AdmissionProcess from "../Courses/AdmissionProcess";
import HighlightsSection from "../Courses/HighlightsSection";
import CareerProspects from "../Courses/CareerProspects";
import CurriculumSection from "../Courses/CurriculumSection";
import IndustryPartners from "../Courses/Partners";
import TestimonialSlider from "../Courses/TestimonialSlider";
import FAQSection from "../Courses/FAQSection";

import { FaCubes, FaDraftingCompass } from "react-icons/fa";
import {
    SiAutodesk,       // For AutoCAD & Revit
    SiSketchup,       // SketchUp icon
    SiAdobephotoshop, // Photoshop icon
    Si3M,             // 3ds Max substitute icon (closest available)
} from "react-icons/si";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});
const tools = [
    {
        name: "AutoCAD",
        category: "Drafting & Technical Drawing",
        icon: <FaDraftingCompass className="text-4xl text-blue-600" />,
        color: "from-blue-100 to-cyan-100",
        textColor: "text-blue-600"
    },
    {
        name: "SketchUp",
        category: "3D Modeling",
        icon: <SiSketchup className="text-4xl text-red-600" />,
        color: "from-red-100 to-orange-100",
        textColor: "text-red-600"
    },
    {
        name: "3ds Max",
        category: "3D Visualization",
        icon: <FaCubes className="text-4xl text-purple-600" />,
        color: "from-purple-100 to-pink-100",
        textColor: "text-purple-600"
    },
    {
        name: "Revit",
        category: "BIM & Architectural Modeling",
        icon: <SiAutodesk className="text-4xl text-green-600" />,
        color: "from-green-100 to-teal-100",
        textColor: "text-green-600"
    },
    {
        name: "Photoshop",
        category: "Image Editing",
        icon: <SiAdobephotoshop className="text-4xl text-blue-700" />,
        color: "from-blue-100 to-indigo-100",
        textColor: "text-blue-700"
    }
];
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

const InteriorDesignComponent = ({
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

    const careers = [
        {
            title: "Interior Designer",
            items: ["Residential", "Commercial", "Hospitality"],
        },
        {
            title: "Design Consultant",
            items: ["Freelance Designer", "Design Firm Partner", "Project Manager"],
        },
        {
            title: "Specialized Roles",
            items: [
                "3D Visualization Expert",
                "Sustainable Design Specialist",
                "Lighting Designer",
            ],
        },
    ];
    const fallbackHeroImage =
        "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1600&q=80";

    const [isFormOpen, setIsFormOpen] = useState(false);
    const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setIsFormOpen(true);
    };

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
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

                {/* < div id="career" >
                    <CareerProspects />
                </div> */}

                {/* icons */}
                <section ref={sectionRef} className="py-16 bg-gradient-to-b from-gray-50 to-white">
                    {/* Enhanced Heading */}
                    <div className="text-center mb-10 px-4">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-600 bg-clip-text text-transparent bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-1000">
                                Software You Will Master
                            </span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Master industry-leading tools and software that will elevate your creative and technical skills to professional levels.
                        </p>
                    </div>

                    {/* Enhanced Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
                        {tools.map((tool, index) => (
                            <div
                                key={index}
                                className={`
                    flex flex-col items-center p-6 rounded-2xl 
                    bg-gradient-to-br from-white to-gray-50 
                    shadow-lg border border-gray-100 
                    transition-all duration-400 ease-out
                    hover:scale-105 hover:shadow-xl
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                                style={{
                                    transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                                    animationDelay: `${index * 0.2}s`
                                }}
                            >
                                {/* Icon Container */}
                                <div
                                    className={`
                mb-4 p-3 rounded-full bg-gradient-to-r 
                ${tool.color} 
                animate-float
              `}
                                >
                                    <div className="filter drop-shadow-md">
                                        {tool.icon}
                                    </div>
                                </div>

                                {/* Tool Name */}
                                <p className="font-semibold text-gray-800 text-center mb-1">
                                    {tool.name}
                                </p>

                                {/* Category */}
                                <span className={`text-xs ${tool.textColor} mt-1 font-medium`}>
                                    {tool.category}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>



                <section className="py-6 bg-white">
                    {/* Heading */}
                    <h2 className="text-4xl font-extrabold text-start mb-14 text-black">
                        <span className="text-gray-800">Career Prospects</span>
                    </h2>

                    {/* 3 Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-8xl mx-auto px-4">
                        {careers.map((career, index) => (
                            <div
                                key={index}
                                className="
  p-8
  bg-[#040a11]            /* Dark Blue Background */
  rounded-xl
  border border-yellow-500
  shadow-[0_0_20px_rgba(250,204,21,0.25)]
  hover:shadow-[0_0_35px_rgba(250,204,21,0.55)]
  transition-all duration-300
  hover:-translate-y-3
"

                            >
                                {/* Card Heading */}
                                <h3 className="text-2xl font-bold mb-6 text-white tracking-wide">
                                    <span className="text-gray-100">{career.title}</span>
                                </h3>

                                {/* List */}
                                <ul className="space-y-3">
                                    {career.items.map((item, i) => (
                                        <li
                                            key={i}
                                            className="text-gray-200 font-medium flex items-center gap-3"
                                        >
                                            {/* Yellow Dot */}
                                            <span className="w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_6px_#FACC15]"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </section>


                {
                    curriculum && (
                        <div id="curriculum" >
                            <CurriculumSection curriculum={curriculum} />
                        </div>
                    )
                }




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

export default InteriorDesignComponent;
