"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import HeroSection from '../components/heroSection';
import Footer from '../components/footer';
import QuickPayment from '../components/quickPayment';
// import RelevantToolsAndFeatures from '../components/relevantToolsAndFeatures';
import Carrousal from '../components/carrousal';
import CourseInfo from '../components/courseDetails';
import FAQSection from '../components/faq';
import StudentsWork from '../components/studentsWork';
import TestimonialCarousel from '../../../components/TestimonialSection ';
import FeaturesSection from '../components/featureSection';


function CivilArch() {
    const [expanded, setExpanded] = useState(true);


    const course = {
        title: "Civil & Architecture Drawing Course (2D)",
        preSkill: "AutoCAD",
        content: [
            "Presentation Plan, Working Plan, Center Line, Excavation Plan",
            "Water Tank Detail, 2D Elevation, RCC Slab Detail",
            "Door/Window Schedule, Beam & Staircase Detail",
            "Electrical, Plumbing, Sanitary, AC & Flooring Plan",
        ],
    };
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const works = [
        "/landingImages/civil/SURESH JI  3D 2.jpg",
        "/landingImages/civil/resort 3d render 1 ..jpg",
        "/landingImages/civil/pawan ji   3d render.jpg",
        "/landingImages/civil/open restaurant 2 3d.jpg",
        "/landingImages/civil/3d render 3.jpg",
        "/landingImages/civil/3d render 2.jpg",
        "/landingImages/civil/3d House 3 render.jpg",

        "/landingImages/interior-design/2 daining render copy.jpg",
        "/landingImages/interior-design/Celebrity-Homes-Mollywood-Malayalam-Actor-Anoop-Menons-Guest-House-Done-by-Dlife-interiors-.jpg",
        "/landingImages/interior-design/fainal nighat ji render 1.jpg",
        "/landingImages/interior-design/FINAL-LIV-2-360x300.webp",
        "/landingImages/interior-design/hq720.jpg",
        "/landingImages/interior-design/images.jpg",
        // "/landingImages/interior-design/istockphoto-1365110240-612x612.jpg",
        // "/landingImages/interior-design/istockphoto-1490571644-612x612.jpg",
        // "/landingImages/interior-design/pexels-fotoaibe-1571458.jpg",
        "/landingImages/interior-design/nighat ji dining 1 render .jpg",
        "/landingImages/interior-design/nighat ji second render copy.jpg",
        "/landingImages/interior-design/open restaurant jalore 3d.jpg",
    ];

    const targetAudience = [
        "Furniture Experts",
        "Interior Enthusiasts",
        "10th Pass",
        "Professionals",
        "Vendors",
        "Carpenters",
        "Architects",
        "Interior Decorators",
        "Teachers"
    ];
    return (
        <div className="min-h-screen min-w-full bg-white">
            {/* Hero Section */}
            <HeroSection backgroundImage="/landingImages/GrapLandscape-01.jpg" />
            <div className="relative w-full h-[30vh] sm:h-[60vh] md:h-[70vh] lg:h-[94vh] overflow-hidden">
                <Image
                    src="/landingImages/we banner.png"
                    alt="Hero Banner"
                    fill
                    priority
                    className="object-contain sm:object-cover object-top animate-fade-in"
                />
            </div>
            {/* Course Details Section */}
            <div className="py-1 sm:py-12 min-w-full bg-white">
                <div className="container mx-auto min-w-full px-4 sm:px-0">
                    <div className="max-w-full mx-auto">


                        
                        {/* Main Course Info */}
                        <div className="animate-slide-up">
                            <CourseInfo title="Interior Design Course" priceWithDiscount="7496" originalPrice='24,986' />
                        </div>

                        {/* Pricing Banner Section */}
                        <div className="relative mt-10 w-full h-[35vh] sm:h-[45vh] md:h-[85vh] overflow-hidden">
                            <Image
                                src={"/landingImages/CIVIL 8-01.jpg"}
                                alt="Hero Banner"
                                fill
                                priority
                                className="object-contain object-top  transition-transform duration-700"
                            />
                        </div>

                        {/* AI Description Section */}
                        <div className="my-2 px-1 sm:px-8 lg:px-20">
                            <div className="bg-gradient-to-r from-black via-gray-900 to-black 
                    text-white rounded-2xl shadow-2xl p-6 sm:p-10 
                    border border-yellow-500/30 relative overflow-hidden animate-fade-in-up">

                                {/* Soft Glow Background */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15),transparent_70%)]"></div>

                                {/* Heading */}
                                <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-4 relative z-10">
                                    🤖 Learn Tools Faster with AI Assistant
                                </h3>

                                {/* Description */}
                                <p className="text-sm sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto text-center relative z-10">
                                    Master industry-leading tools like
                                    <span className="text-yellow-400 font-semibold"> Photoshop</span>,
                                    <span className="text-yellow-400 font-semibold"> Illustrator</span>,
                                    <span className="text-yellow-400 font-semibold"> CorelDRAW</span>,
                                    and more — with the help of our intelligent
                                    <span className="text-yellow-400 font-bold"> AI-powered learning assistant.</span>
                                </p>

                                {/* Feature List */}
                                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-base font-semibold relative z-10 max-w-3xl mx-auto">
                                    {[
                                        { icon: "⚡", text: "Step-by-step tool explanations" },
                                        { icon: "🎯", text: "Personalized learning suggestions" },
                                        { icon: "💡", text: "Instant answers to all tool queries" },
                                        { icon: "🚀", text: "Learn 5× faster with AI support" }
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-3 animate-slide-in-left"
                                            style={{ animationDelay: `${300 + index * 120}ms` }}
                                        >
                                            <span className="text-yellow-400 text-lg sm:text-xl">{item.icon}</span>
                                            <span className="text-sm sm:text-base">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Bottom Highlight Text */}
                                <p className="text-center text-yellow-400 mt-8 text-base sm:text-lg font-bold relative z-10">
                                    AI Assistant — Your Personal Guide for Every Software You Learn
                                </p>
                            </div>
                        </div>

                        {/* Course Level & Online Mode Notice */}
                        <div className="px-4 sm:px-8 lg:px-20 my-10">
                            <div className="
                                bg-gradient-to-r from-yellow-300 to-yellow-400 
                                    p-6 sm:p-8 lg:p-12 
                                    rounded-xl border border-yellow-300 
                                    shadow-md 
                                    animate-scale-in
                                    text-center
                                ">

                                {/* Heading */}
                                <h3 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-black mb-3">
                                    🎓 Designed for Class 10+ Students & Above
                                </h3>

                                {/* Description */}
                                <p className="
                                                text-sm sm:text-lg lg:text-xl 
                                                text-black 
                                                font-medium 
                                                max-w-3xl mx-auto 
                                                leading-relaxed
                                            ">
                                    This is a
                                    <span className="text-red-600 font-bold animate-pulse"> 100% Online Course</span>
                                    that includes
                                    <span className="font-bold"> Pre-Recorded Video Lessons</span>
                                    along with
                                    <span className="font-bold"> Live Doubt-Clearing Sessions</span>
                                    for complete support.
                                </p>

                            </div>
                        </div>



                        {/* Who Should Join */}
                        <div className="my-6 pb-5">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-5 tracking-tight">
                                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                    👥 Who Should Join This Course?
                                </span>
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
                                {targetAudience.map((audience, index) => (
                                    <div
                                        key={index}
                                        className="
                bg-white
                border border-gray-300
                shadow-sm
                hover:shadow-xl
                transition-all duration-300
                rounded-2xl p-6
                flex items-center gap-4
                hover:border-gray-400
                hover:-translate-y-1
                relative
            "
                                    >
                                        {/* Highlight Glow */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-200/40 via-yellow-200/40 to-orange-200/40 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                                        {/* Icon */}
                                        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-800 text-xl shadow-inner">
                                            ⭐
                                        </div>

                                        {/* Text */}
                                        <p className="text-gray-900 font-semibold text-lg relative z-10">
                                            {audience}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>


                        {/* Projects Highlight */}
                        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 sm:p-8  border-l-4 border-yellow-500 border-2 0 mb-12 sm:mb-16 text-center shadow-lg">
                            <p className="text-xl sm:text-4xl text-black font-bold">
                                🚀 Yes 4+ hands on projects that make your CV look great.
                            </p>
                        </div>



                        {/* Testimonials Section */}
                        {/* <Testimonials /> */}

                        {/* Success Student Section */}
                        <div className="relative w-full mb-8 bg-black overflow-hidden animate-zoom-in">
                            <div className="absolute inset-0">
                                <Image
                                    src={"/landingImages/12-02-3.jpg"}
                                    alt="Blur Background"
                                    fill
                                    className="object-cover blur-xl opacity-40"
                                    priority
                                />
                            </div>
                            <div className="relative z-10 w-full flex items-center justify-center py-4">
                                <Image
                                    src={"/landingImages/12-02-3.jpg"}
                                    alt="Hero Banner"
                                    width={900}
                                    height={600}
                                    className="w-full max-w-[900px] h-auto object-contain hover:scale-105 transition-transform duration-500"
                                    priority
                                />
                            </div>
                        </div>
                        {/* <Testimonials /> */}
                        <TestimonialCarousel />
                        {/* <StudentsWork images={works} title={'Our Student Works'} />
                         */}
                        <StudentsWork
                            images={works}
                            title="Our Students’ Creative Gallery"
                            description="This showcase highlights the practical thinking and structural creativity of our Civil Engineering students. Each project reflects their ability to transform concepts into functional, safe, and efficient designs. From site planning and surveying to load-bearing structures and environmental considerations, students demonstrate a deep understanding of how real-world infrastructure is imagined and refined. Their work shows problem-solving, analytical skills, and an engineer’s mindset—balancing innovation with practicality. These projects represent the future builders of our communities, presenting designs that are thoughtful, sustainable, and ready for real-world application."
                        />
                        <div className="w-44 mb-10 h-1 bg-yellow-500 mx-auto rounded-full"></div>

                        {/* placement partners */}
                        <Carrousal />


                        {/* CEO Banner Section */}
                        <div className="relative w-full h-[28vh] sm:h-[60vh] md:h-[50vh] lg:h-[84vh] overflow-hidden">
                            <Image
                                src={"/landingImages/website.png"}
                                alt="Hero Banner"
                                fill
                                priority
                                className="object-contain sm:object-cover object-top animate-fade-in"
                            />
                        </div>

                        {/* Final CTA Section */}
                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 mt-10 p-6 sm:p-8 text-center shadow-xl border-2 border-yellow-300">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-black mb-2">
                                🎁 Special New Year Offer!
                            </h3>

                            <p className="text-black font-semibold text-base sm:text-lg mb-4">
                                Enroll now and get exclusive benefits:
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 max-w-xl mx-auto">
                                <li className="flex items-center justify-center text-black font-medium">
                                    <span className="text-green-600 mr-2">✓</span> Free Portfolio Building
                                </li>
                                <li className="flex items-center justify-center text-black font-medium">
                                    <span className="text-green-600 mr-2">✓</span> 1-on-1 Career Guidance
                                </li>
                                <li className="flex items-center justify-center text-black font-medium">
                                    <span className="text-green-600 mr-2">✓</span> Industry Certifications
                                </li>
                                <li className="flex items-center justify-center text-black font-medium">
                                    <span className="text-green-600 mr-2">✓</span> Lifetime Access to Resources
                                </li>
                            </ul>
                        </div>

                        {/* CTA Button */}
                        {/* Floating Buy Now Button */}
                        {/* Floating Buy Now Button */}
                        <div className="fixed bottom-4 right-4 z-50 animate-bounce hover:animate-pulse">
                            <QuickPayment />
                        </div>


                        <FeaturesSection />
                        <div className="my-12 sm:my-10 px-4 sm:px-8 lg:px-60">
                            <FAQSection />
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default CivilArch
