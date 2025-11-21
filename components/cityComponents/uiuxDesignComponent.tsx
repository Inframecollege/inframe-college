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
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiFigma,
    SiAdobexd,
} from "react-icons/si";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});
const tools = [
    {
        name: "Figma",
        category: "UI/UX Design",
        icon: <SiFigma className="text-4xl text-pink-600" />,
        color: "from-pink-100 to-rose-100",
        textColor: "text-pink-600"
    },
    {
        name: "Adobe XD",
        category: "UI/UX Prototyping",
        icon: <SiAdobexd className="text-4xl text-purple-600" />,
        color: "from-purple-100 to-pink-100",
        textColor: "text-purple-600"
    },
    {
        name: "Photoshop",
        category: "Image Editing",
        icon: <SiAdobephotoshop className="text-4xl text-blue-700" />,
        color: "from-blue-100 to-indigo-100",
        textColor: "text-blue-700"
    },
    {
        name: "Illustrator",
        category: "Vector Graphics",
        icon: <SiAdobeillustrator className="text-4xl text-orange-600" />,
        color: "from-orange-100 to-yellow-100",
        textColor: "text-orange-600"
    }
];

export const uiUxDesignCurriculum = {
    "1st Year": {
        title: "1st Year",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
        imageAlt: "UI/UX design fundamentals and research",
        semesters: {
            "Semester 1": [
                "Design Fundamentals & Principles",
                "User Research Methods",
                "Wireframing & Prototyping",
                "Design Thinking Process"
            ],
            "Semester 2": [
                "Visual Design & Typography",
                "Color Theory & Psychology",
                "Information Architecture",
                "Usability Testing Basics"
            ]
        }
    },

    "2nd Year": {
        title: "2nd Year",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
        imageAlt: "Advanced UI/UX tools and interaction design",
        semesters: {
            "Semester 3": [
                "Advanced Prototyping",
                "Interaction Design Patterns",
                "Design Systems Creation",
                "Accessibility & Inclusive Design"
            ],
            "Semester 4": [
                "Mobile App Design",
                "Web Design Principles",
                "UX Writing & Microcopy",
                "Design Collaboration Tools"
            ]
        }
    },

    "3rd Year": {
        title: "3rd Year",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
        imageAlt: "Specialized UI/UX and career preparation",
        semesters: {
            "Semester 5": [
                "Advanced UX Research",
                "Data-Driven Design Decisions",
                "Product Management Basics",
                "Portfolio Development"
            ],
            "Semester 6": [
                "UX Leadership & Strategy",
                "Design Sprint Facilitation",
                "Industry Internship",
                "Capstone Project Part 1"
            ]
        }
    },

    "4th Year": {
        title: "4th Year",
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0",
        imageAlt: "Advanced specialization and professional mastery",
        semesters: {
            "Semester 7": [
                "AI & Machine Learning in UX",
                "Advanced Design Systems",
                "Service Design & CX Strategy",
                "Design Ops & Team Management"
            ],
            "Semester 8": [
                "Entrepreneurship & Design Startups",
                "Advanced Portfolio & Personal Branding",
                "Industry Specialization Project",
                "Capstone Project Part 2 & Thesis Defense"
            ]
        }
    }
};

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

const UIUXDesignComponent = ({
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
            title: "UI/UX Designer",
            items: [
                "Mobile App Designer",
                "Web UI Designer",
                "Interaction Designer"
            ],
        },
        {
            title: "UX Research & Strategy",
            items: [
                "UX Researcher",
                "User Testing Specialist",
                "Product Strategist"
            ],
        },
        {
            title: "Product & Visual Design",
            items: [
                "Product Designer",
                "Visual/Graphic UI Designer",
                "Design System Specialist"
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
                            Step into the World of Jewellery Design
                            {/* {title.split(" in ")[1] || "Design"} */}
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
                                onClick={() =>
                                    document.getElementById("curriculum")?.scrollIntoView({ behavior: "smooth" })
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
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
                        {tools.map((tool, index) => (
                            <div
                                key={index}
                                className={`
                flex flex-col items-center p-6 rounded-2xl 
                bg-gradient-to-br from-white to-gray-50 
                shadow-lg border border-gray-100 
                transition-all duration-300 ease-out
                hover:scale-105 hover:shadow-xl
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
                                style={{
                                    transitionDelay: isVisible ? `${index * 120}ms` : '0ms'
                                }}
                            >
                                {/* ICON WRAPPER */}
                                <div
                                    className={`
                    mb-4 p-6 rounded-full bg-gradient-to-r 
                    ${tool.color}
                    flex items-center justify-center 
                    shadow-md animate-float
                `}
                                >
                                    <div className="text-7xl filter drop-shadow-lg">
                                        {tool.icon}
                                    </div>
                                </div>

                                {/* NAME */}
                                <p className="font-semibold text-gray-900 text-center text-lg">
                                    {tool.name}
                                </p>

                                {/* CATEGORY */}
                                <span className={`text-sm ${tool.textColor} font-medium mt-1`}>
                                    {tool.category}
                                </span>
                            </div>
                        ))}
                    </div>

                </section>


                {/* career prospects section */}
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
                                className="p-8 bg-[#040a11]          
                                  /* Dark Blue Background */
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

                {/* curriculam section */}
                {/* curriculam section */}
                <div id="curriculum" className="max-w-7xl mx-auto px-1 py-2 bg-white">
                    <h2 className="text-3xl font-bold mb-8 text-yellow-400">
                        Course Curriculum
                    </h2>

                    {/* Year Tabs */}
                    <Tabs defaultValue="1st Year" className="w-full">
                        <TabsList className="md:w-full flex flex-wrap h-10 mb-6 bg-zinc-200 rounded-lg p-1 gap-2">
                            {Object.keys(uiUxDesignCurriculum).map((year) => (
                                <TabsTrigger
                                    key={year}
                                    value={year}
                                    className="flex-1 data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
                                >
                                    {year}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {/* Year Content */}
                        {Object.entries(uiUxDesignCurriculum).map(([year, data]) => (
                            <TabsContent key={year} value={year}>
                                <div className="mb-8">

                                    {/* Banner Image */}
                                    <div className="relative w-full h-64 mb-8 overflow-hidden rounded-lg">
                                        <Image
                                            src={data.image}
                                            alt={data.imageAlt}
                                            fill
                                            className="object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                                            {data.title}
                                        </h3>
                                    </div>

                                    {/* Semester Tabs */}
                                    <Tabs defaultValue={Object.keys(data.semesters)[0]} className="w-full">
                                        <TabsList className="md:w-full flex flex-wrap mb-6 rounded-lg bg-zinc-200 p-1 gap-2">
                                            {Object.keys(data.semesters).map((semester) => (
                                                <TabsTrigger
                                                    key={semester}
                                                    value={semester}
                                                    className="flex-1 data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
                                                >
                                                    {semester}
                                                </TabsTrigger>
                                            ))}
                                        </TabsList>

                                        {/* Semester Subjects */}
                                        {Object.entries(data.semesters).map(([semester, subjects]) => (
                                            <TabsContent key={semester} value={semester}>
                                                <Card className="bg-white border-none">
                                                    <CardContent className="p-6">
                                                        <div className="grid gap-4">
                                                            {subjects.map((subject, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="p-4 bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-colors"
                                                                >
                                                                    <p className="text-black font-bold">
                                                                        {subject}
                                                                    </p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </TabsContent>
                                        ))}
                                    </Tabs>
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>


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
            </div>


            < div className="max-w-5xl mx-auto py-10 px-4" >
                <h1 className="text-2xl font-bold mb-6 text-gray-900" >
                    Course Content
                </h1>
                < FAQSection />
            </div>

            <div className="fixed bottom-14 right-2 z-50 floating-btn">
                <Button
                    onClick={handleApplyClick}
                    className="
            bg-gradient-to-r from-yellow-600 to-yellow-400
            text-black font-extrabold
            px-10 py-6 text-xl
            rounded-xl
            shadow-[0_0_25px_6px_rgba(255,200,0,0.55)]
            hover:shadow-[0_0_35px_12px_rgba(255,200,0,0.75)]
            hover:scale-110
            transition-all duration-300
        "
                >
                    🚀 Apply Now
                </Button>
            </div>

        </div>
    );
};

export default UIUXDesignComponent;
