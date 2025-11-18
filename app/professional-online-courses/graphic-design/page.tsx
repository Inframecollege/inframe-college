"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import HeroSection from '../components/heroSection';
import Footer from '../components/footer';
import QuickPayment from '../components/quickPayment';
import RelevantToolsAndFeatures from '../components/relevantToolsAndFeatures';
import Testimonials from '../components/testimonials';
import Carrousal from '../components/carrousal';
import CourseInfo from '../components/courseDetails';
import FAQSection from '../components/faq';
import StudentsWork from '../components/studentsWork';
import TestimonialCarousel from '../../../components/TestimonialSection ';
import { SiAdobephotoshop, SiAdobeillustrator, SiCoreldraw } from "react-icons/si";
import FeaturesSection from '../components/featureSection';

export default function LandingPage() {
    const router = useRouter();

    const works = [
        "/landingImages/graphic-design/360_F_145774524_G35kjiqkhRjmeJIUgHkmpoB5qFiW7AuD.jpg",
        "/landingImages/graphic-design/360_F_473827438_sQmZTzoB4BQn55PRjaQOomEX8KMc54Pd.jpg",
        "/landingImages/graphic-design/add790229925431.Y3JvcCwxNTM0LDEyMDAsMTgsMA.png",
        "/landingImages/graphic-design/images (1).jpg",
        "/landingImages/graphic-design/images (2).jpg",
        "/landingImages/graphic-design/images (3).jpg",
        "/landingImages/graphic-design/photoshop-poster-tutorial-c.jpg"
    ];
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

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
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection backgroundImage="/landingImages/GrapLandscape-01.jpg" />

            {/* Course Details Section */}
            <div className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="max-w-6xl mx-auto">
                        {/* Main Course Info */}
                        <CourseInfo title="Graphic Design Course" />
                        {/* AI Description Section */}
                        <div className="my-14 sm:my-20 bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-2xl shadow-2xl p-8 sm:p-12 border border-yellow-500/40 relative overflow-hidden">

                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.18),transparent_75%)]"></div>

                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-6 relative z-10 tracking-tight">
                                🤖 Learn Tools Faster with AI Assistant
                            </h3>

                            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto text-center relative z-10">
                                Master industry-leading tools like
                                <span className="text-yellow-400 font-semibold"> Adobe Photoshop</span>,
                                <span className="text-yellow-400 font-semibold"> Adobe Illustrator</span>,
                                <span className="text-yellow-400 font-semibold"> CorelDRAW</span>,
                                {/* <span className="text-yellow-400 font-semibold"> Photoshop</span> and more —
                                with the help of our intelligent */}
                                <span className="text-yellow-400 font-bold"> AI-powered learning assistant.</span>
                            </p>

                            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg font-semibold relative z-10 max-w-4xl mx-auto">
                                <li className="flex items-center gap-3">
                                    <span className="text-yellow-400 text-2xl">⚡</span> Step-by-step tool explanations
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-yellow-400 text-2xl">🎯</span> Personalized learning suggestions
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-yellow-400 text-2xl">💡</span> Instant answers to all tool-related queries
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-yellow-400 text-2xl">🚀</span> Learn 5× faster with AI support
                                </li>
                            </ul>

                            <p className="text-center text-yellow-400 mt-10 text-xl font-bold relative z-10">
                                AI Assistant — Your Personal Guide for Every Software You Learn
                            </p>
                        </div>

                        {/* Course Level & Online Mode Notice */}
                        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 sm:p-8 rounded-xl border-2 border-yellow-300 mb-12 sm:mb-16 shadow-lg">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 text-center leading-snug">
                                🎓 Designed for Class 10+ Students & Above
                            </h3>

                            <p className="text-lg sm:text-xl text-black font-semibold text-center leading-relaxed max-w-3xl mx-auto">
                                This is a <span className="text-red-600 font-bold">100% Online Course</span> that includes
                                <span className="font-bold"> Pre-Recorded Video Lessons</span> along with
                                <span className="font-bold"> Live Doubt-Clearing Sessions</span> for complete support.
                            </p>
                        </div>
                        {/* pricing banner Section */}
                        <div className="relative w-full  bg-black overflow-hidden">
                            {/* Blurred Background */}
                            <div className="absolute inset-0">
                                <Image
                                    src={"/landingImages/GrapLandscape-01.jpg"}
                                    alt="Blur Background"
                                    fill
                                    className="object-cover blur-xl opacity-40"
                                    priority
                                />
                            </div>

                            {/* Center Foreground Banner */}
                            <div className="relative z-10 w-full flex items-center justify-center py-6">
                                <Image
                                    src={"/landingImages/GrapLandscape-01.jpg"}
                                    alt="Hero Banner"
                                    width={900}
                                    height={600}
                                    className="w-full max-w-[900px] h-auto object-contain"
                                    priority
                                />
                            </div>

                        </div>
                        {/* tools */}
                        {/* <RelevantToolsAndFeatures /> */}
                        {/* <RelevantToolsAndFeatures
                            tools={[
                                "Adobe Photoshop",
                                "Adobe Illustrator",
                                "CorelDRAW",
                                // "Figma",
                                // "After Effects"
                            ]}
                        /> */}


                        <div className="my-16 px-4">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-12">
                                🛠️ Master Industry-Relevant Tools
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {/* Photoshop Card */}
                                <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                                    <div className="mb-3">
                                        <SiAdobephotoshop className="text-blue-600 w-12 h-12" />
                                    </div>
                                    <h3 className="font-semibold text-lg text-center">Adobe Photoshop</h3>
                                </div>

                                {/* Illustrator Card */}
                                <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                                    <div className="mb-3">
                                        <SiAdobeillustrator className="text-orange-500 w-12 h-12" />
                                    </div>
                                    <h3 className="font-semibold text-lg text-center">Adobe Illustrator</h3>
                                </div>

                                {/* CorelDRAW Card */}
                                <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                                    <div className="mb-3">
                                        <SiCoreldraw className="text-green-600 w-12 h-12" />
                                    </div>
                                    <h3 className="font-semibold text-lg text-center">CorelDRAW</h3>
                                </div>
                            </div>
                        </div>


                        {/* Who Should Join */}
                        <div className="my-12 sm:my-16">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-10 text-center tracking-tight">
                                👥 Who Should Join This Course?
                            </h3>

                            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-5 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
                                {targetAudience.map((audience, index) => (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
                           text-black px-7 py-4 sm:px-9 sm:py-5 rounded-3xl 
                           font-semibold text-lg sm:text-xl 
                           border border-yellow-700/40
                           shadow-[0_4px_12px_rgba(0,0,0,0.15)]
                           hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)]
                           hover:scale-[1.06] transition-all duration-300 
                           flex items-center gap-2"
                                    >
                                        {audience}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Projects Highlight */}
                        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 sm:p-8 rounded-xl border-l-4 border-yellow-500 border-2 border-yellow-200 mb-12 sm:mb-16 text-center shadow-lg">
                            <p className="text-xl sm:text-2xl text-black font-bold">
                                🚀 Yes 4+ hands on projects that make your CV look great.
                            </p>
                        </div>

                        {/* Testimonials Section */}
                        {/* <Testimonials /> */}

                        {/* success student Section */}
                        <div className="relative w-full mb-10 bg-black overflow-hidden">
                            {/* Blurred Background */}
                            <div className="absolute inset-0">
                                <Image
                                    src={"/landingImages/12-01-2.jpg"}
                                    alt="Blur Background"
                                    fill
                                    className="object-cover blur-xl opacity-40"
                                    priority
                                />
                            </div>

                            {/* Center Foreground Banner */}
                            <div className="relative z-10 w-full flex items-center justify-center py-6">
                                <Image
                                    src={"/landingImages/12-01-2.jpg"}
                                    alt="Hero Banner"
                                    width={900}
                                    height={600}
                                    className="w-full max-w-[900px] h-auto object-contain"
                                    priority
                                />
                            </div>

                        </div>

                        {/* Testimonials Section */}
                        {/* <Testimonials /> */}
                        <TestimonialCarousel />
                        {/* <StudentsWork images={works} title={'Our Student Works'} /> */}
                        <StudentsWork
                            images={works}
                            title="Our Students’ Creative Gallery"
                            description="This gallery celebrates the visual imagination and storytelling power of our Graphic Design students. Every piece reflects a strong sense of creativity, brand awareness, and communication strategy. Students explore color psychology, layout balance, visual hierarchy, and creative composition to produce designs that speak clearly and emotionally. From bold advertising concepts to refined brand identities and artistic digital visuals, this work showcases their ability to transform ideas into eye-catching and meaningful designs. Their projects reflect both artistic expression and professional design thinking, ready for industry-level presentation."
                        />

                        {/* placement partners */}
                        <Carrousal />

                        {/* Final CTA Section */}
                        <div className="bg-gradient-to-r mt-10 from-yellow-400 to-yellow-500  p-8 sm:p-12 text-center shadow-2xl border-4 border-yellow-300 mb-12 sm:mb-16">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
                                🎁 Special New Year Offer!
                            </h3>
                            <p className="text-lg sm:text-xl text-black mb-6 font-semibold">
                                Enroll now and get exclusive benefits:
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-2xl mx-auto">
                                <li className="flex items-center justify-center text-black font-semibold">
                                    <span className="text-green-600 mr-2">✓</span> Free Portfolio Building
                                </li>
                                <li className="flex items-center justify-center text-black font-semibold">
                                    <span className="text-green-600 mr-2">✓</span> 1-on-1 Career Guidance
                                </li>
                                <li className="flex items-center justify-center text-black font-semibold">
                                    <span className="text-green-600 mr-2">✓</span> Industry Certifications
                                </li>
                                <li className="flex items-center justify-center text-black font-semibold">
                                    <span className="text-green-600 mr-2">✓</span> Lifetime Access to Resources
                                </li>
                            </ul>
                        </div>

                        {/* CTA Button */}
                        {/* Floating Buy Now Button */}
                        <div className="fixed bottom-4 right-4 z-50">
                            <QuickPayment />
                        </div>
                        <FeaturesSection />

                        <FAQSection />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}