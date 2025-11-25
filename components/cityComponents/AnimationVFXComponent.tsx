"use client";

import { Poppins } from "next/font/google";
import {
    categoryHeroImages,
    type CurriculumType,
    type VideosType,
    type WhatLearn,
} from "../../utils/courseTypes";
import DreamsSection from "../DreamSection";
import Image from "next/image";
import { Button } from "../ui/button";
import ApplyNowForm from "../ApplyNowForm";
import { useEffect, useRef, useState } from "react";
import AdmissionProcess from "../Courses/AdmissionProcess";
import HighlightsSection from "../Courses/HighlightsSection";
import IndustryPartners from "../Courses/Partners";
import TestimonialSlider from "../Courses/TestimonialSlider";
import FAQSection from "../Courses/FAQSection";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Card, CardContent } from "../ui/card";

import {
    SiMeta,
    SiGoogle,
    SiSemrush,
    SiWhatsapp,
    SiMaildotru,
    SiGooglemessages
} from "react-icons/si";
import {
    FaEnvelope,
    FaChartLine,
    FaSearch,
    FaChartBar,
    FaMagic,
    FaImage,
    FaBlender,
    FaCube,
    FaEye,
    FaFilm,
    FaRobot
} from "react-icons/fa";


import { BsBook } from "react-icons/bs";

const learnItems = [
    {
        title: "Search Engine Optimization (SEO)",
        desc: "Master technical and on-page SEO techniques",
    },
    {
        title: "Social Media Marketing",
        desc: "Create and manage campaigns across platforms",
    },
    {
        title: "Content Marketing",
        desc: "Develop strategic content plans and marketing materials",
    },
    {
        title: "Google Analytics",
        desc: "Track and analyze website performance metrics",
    },
    {
        title: "Digital Advertising",
        desc: "Run paid campaigns on Google and social media",
    },
];


const tools = [
    {
        name: "Maya",
        category: "3D Animation",
        icon: <FaRobot className="text-4xl text-teal-600" />,
        color: "from-teal-100 to-blue-100",
        textColor: "text-teal-600"
    },
    {
        name: "3DS Max",
        category: "3D Modeling",
        icon: <FaCube className="text-4xl text-blue-600" />,
        color: "from-blue-100 to-indigo-100",
        textColor: "text-blue-600"
    },
    {
        name: "Blender",
        category: "3D Modeling",
        icon: <FaBlender className="text-4xl text-orange-500" />,
        color: "from-orange-100 to-yellow-100",
        textColor: "text-orange-500"
    },
    {
        name: "Nuke",
        category: "Compositing",
        icon: <FaEye className="text-4xl text-purple-600" />,
        color: "from-purple-100 to-pink-100",
        textColor: "text-purple-600"
    },
    {
        name: "After Effects",
        category: "Motion Graphics",
        icon: <FaFilm className="text-4xl text-purple-500" />,
        color: "from-purple-100 to-indigo-100",
        textColor: "text-purple-500"
    },
    {
        name: "Photoshop",
        category: "Image Editing",
        icon: <FaImage className="text-4xl text-blue-700" />,
        color: "from-blue-100 to-cyan-100",
        textColor: "text-blue-700"
    },
    {
        name: "Houdini",
        category: "VFX & Simulation",
        icon: <FaMagic className="text-4xl text-orange-600" />,
        color: "from-orange-100 to-red-100",
        textColor: "text-orange-600"
    }
];

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export const digitalMarketingCurriculum = {
    "1st Year": {
        title: "1st Year",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        imageAlt: "Digital marketing fundamentals and strategy",
        semesters: {
            "Semester 1": [
                "Digital Marketing Fundamentals",
                "Consumer Behavior & Psychology",
                "Content Marketing Basics",
                "Social Media Marketing Introduction",
                "Marketing Principles & Strategy",
                "Digital Analytics Overview"
            ],
            "Semester 2": [
                "Search Engine Optimization (SEO)",
                "Search Engine Marketing (SEM)",
                "Email Marketing Strategies",
                "Social Media Advertising",
                "Web Analytics & Google Analytics",
                "Content Creation & Copywriting"
            ]
        }
    },

    "2nd Year": {
        title: "2nd Year",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        imageAlt: "Advanced digital marketing channels and tools",
        semesters: {
            "Semester 3": [
                "Advanced SEO & Technical SEO",
                "PPC Campaign Management",
                "Social Media Strategy & Management",
                "Marketing Automation Tools",
                "Conversion Rate Optimization",
                "Mobile Marketing Strategies"
            ],
            "Semester 4": [
                "Content Strategy & Planning",
                "Video Marketing & YouTube SEO",
                "E-commerce Marketing",
                "Affiliate Marketing",
                "Marketing Analytics & Reporting",
                "CRM & Marketing Technology"
            ]
        }
    },

    "3rd Year": {
        title: "3rd Year",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
        imageAlt: "Digital marketing specialization and career preparation",
        semesters: {
            "Semester 5": [
                "Digital Marketing Strategy Development",
                "Data-Driven Marketing Decisions",
                "Advanced Social Media Advertising",
                "Marketing Funnel Optimization",
                "Professional Portfolio Creation",
                "Client Management & Pitching"
            ],
            "Semester 6": [
                "Entrepreneurship in Digital Marketing",
                "Marketing Agency Management",
                "Industry Internship Program",
                "Capstone Marketing Campaign",
                "Career Preparation & Networking",
                "Graduate Portfolio Project"
            ]
        }
    },

    "4th Year": {
        title: "4th Year",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
        imageAlt: "Advanced digital marketing mastery and leadership",
        semesters: {
            "Semester 7": [
                "AI & Machine Learning in Marketing",
                "Advanced Marketing Analytics",
                "Marketing Leadership & Team Management",
                "Global Digital Marketing Strategies",
                "Marketing Technology Stack Management",
                "Brand Strategy & Management"
            ],
            "Semester 8": [
                "Digital Marketing Entrepreneurship",
                "Advanced Personal Branding",
                "Industry Specialization Project",
                "Marketing Consultancy Project",
                "Thesis & Research Project",
                "Career Launch & Industry Placement"
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

const AnimationVFXComponent = ({
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
    const [active, setActive] = useState(0);

    const careers = [
        {
            title: "Jewellery Designer",
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
                <div id="curriculum" className="max-w-7xl mx-auto px-1 py-2 bg-white">
                    <h2 className="text-3xl font-bold mb-8 text-yellow-400">
                        Course Curriculum
                    </h2>

                    {/* Year Tabs */}
                    <Tabs defaultValue="1st Year" className="w-full">
                        <TabsList className="md:w-full flex flex-wrap h-10 mb-6 bg-zinc-200 rounded-lg p-1 gap-2">
                            {Object.keys(digitalMarketingCurriculum).map((year) => (
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
                        {Object.entries(digitalMarketingCurriculum).map(([year, data]) => (
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

                {/* what you will learn section */}
                <section className="w-full py-6 px-4 max-w-7xl mx-auto">
                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
                        WHAT YOU WILL LEARN
                    </h2>

                    {/* Yellow underline */}
                    <div className="w-32 h-[3px] bg-yellow-500 mb-10"></div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {learnItems.map((item, i) => (
                            <div
                                key={i}
                                onClick={() => setActive(i)}
                                className={`
              border rounded-xl p-6 cursor-pointer transition-all
              hover:shadow-md bg-white
              flex flex-col gap-2
              ${active === i
                                        ? "border-yellow-500 shadow-md"
                                        : "border-gray-300"
                                    }
            `}
                            >
                                <div className="flex items-center gap-3">
                                    <BsBook
                                        className={`text-2xl ${active === i ? "text-yellow-500" : "text-yellow-600"
                                            }`}
                                    />
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                </div>

                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

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

export default AnimationVFXComponent;
