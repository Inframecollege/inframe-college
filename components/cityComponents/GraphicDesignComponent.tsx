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
// import { useState } from "react";


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



import { useState, useEffect, useRef } from "react";

import { SiAdobe, SiAdobephotoshop, SiBlender, SiAutodesk, SiAdobepremierepro, SiCoreldraw } from "react-icons/si";
import { FaTools, FaPaintBrush, FaFilm, FaMagic, FaCube, FaCubes, FaPenNib } from "react-icons/fa";

const tools = [
    {
        name: "Adobe Suite",
        category: "Creative Tools",
        icon: <SiAdobe className="text-4xl text-purple-600" />,
        color: "from-purple-100 to-pink-100",
        textColor: "text-purple-600"
    },
    {
        name: "Corel Draw",
        category: "Vector Graphics",
        icon: <FaPenNib className="text-4xl text-blue-600" />,
        color: "from-blue-100 to-cyan-100",
        textColor: "text-blue-600"
    },
    {
        name: "Photoshop",
        category: "Image Editing",
        icon: <FaMagic className="text-4xl text-blue-700" />,
        color: "from-blue-100 to-indigo-100",
        textColor: "text-blue-700"
    },
    {
        name: "Maya",
        category: "3D Modeling",
        icon: <FaCube className="text-4xl text-red-600" />,
        color: "from-red-100 to-orange-100",
        textColor: "text-red-600"
    },
    {
        name: "After Effects",
        category: "Motion Graphics",
        icon: <FaFilm className="text-4xl text-purple-600" />,
        color: "from-purple-100 to-pink-100",
        textColor: "text-purple-600"
    },
    {
        name: "Illustrator",
        category: "Vector Design",
        icon: <FaPaintBrush className="text-4xl text-orange-500" />,
        color: "from-orange-100 to-yellow-100",
        textColor: "text-orange-500"
    },
    {
        name: "Blender",
        category: "3D Creation",
        icon: <FaCubes className="text-4xl text-orange-600" />,
        color: "from-orange-100 to-red-100",
        textColor: "text-orange-600"
    },
    {
        name: "More Tools",
        category: "Expanding Library",
        icon: <FaTools className="text-4xl text-green-600" />,
        color: "from-green-100 to-teal-100",
        textColor: "text-green-600"
    },
];
// const tools = [
//     { name: "Adobe", icon: <SiAdobe className="text-4xl" /> },
//     { name: "Corel Draw", icon: <SiCoreldraw className="text-4xl" /> },
//     { name: "Photoshop", icon: <SiAdobephotoshop className="text-4xl" /> },
//     { name: "Maya (Autodesk)", icon: <SiAutodesk className="text-4xl" /> },
//     { name: "After Effect (Adobe)", icon: <SiAdobepremierepro className="text-4xl" /> },
//     { name: "Adobe Illustrator", icon: <SiAdobe className="text-4xl" /> },
//     { name: "Blender", icon: <SiBlender className="text-4xl" /> },
// ];


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

const GraphicDesignComponent = ({
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
            title: "Graphic Designer",
            items: ["Brand Identity Designer", "Print Designer", "Marketing Designer"],
        },
        {
            title: "Digital & Creative Roles",
            items: [
                "UI/UX Graphic Designer",
                "Social Media Designer",
                "Motion Graphics Artist",
            ],
        },
        {
            title: "Specialized Creative Roles",
            items: [
                "Illustrator",
                "Packaging Designer",
                "Creative Art Director",
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

                <section className="py-6 bg-white">
                    {/* Heading */}
                    <h2 className="text-4xl font-extrabold text-start mb-14 text-black">
                        <span className="text-gray-800">Career Prospects</span>
                    </h2>

                    {/* 3 Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-8xl mx-auto px-0">
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


                {/* icons */}
                <section ref={sectionRef} className="py-16 bg-gradient-to-b from-gray-50 to-white">
                    {/* Enhanced Heading */}
                    <div className="text-center mb-16 px-4">
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

export default GraphicDesignComponent;
