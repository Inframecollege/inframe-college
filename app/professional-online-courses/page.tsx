"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
// import dotenv from 'dotenv'
// dotenv.config()
export default function LandingPage() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 24,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);
    const handleBuyNow = async () => {
        // Optional: fetch order details from your backend (recommended for real payments)
        // Example: const res = await fetch("/api/create-order"); const data = await res.json();

        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // 🔸 replace with your Razorpay test key
            amount: 16600, // amount in paise (166 × 100 = ₹166)
            currency: "INR",
            name: "Inframe College",
            description: "Interior Design Course Enrollment",
            image: "/pixelcut-export4.png",
            handler: function (response: { razorpay_payment_id: string; }) {
                alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
                // Here you can call backend to verify payment or redirect
            },
            prefill: {
                name: "",
                email: "",
                contact: "",
            },
            notes: {
                course: "Interior Design",
            },
            theme: {
                color: "#FACC15", // yellow theme
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime.seconds > 0) {
                    return { ...prevTime, seconds: prevTime.seconds - 1 };
                } else if (prevTime.minutes > 0) {
                    return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
                } else if (prevTime.hours > 0) {
                    return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
                } else {
                    clearInterval(timer);
                    return prevTime;
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const features = [
        "Become a Interior Designer in 12 months",
        "4+ Tools & 4+ Hands on projects",
        "Programme expert from industry",
        "100% Placement guarantee",
        "4.5 Lacs + CTC"
    ];

    const tools = ["Autocad", "Sketchup", "3ds Max", "Photoshop", "Corel"];

    const additionalFeatures = [
        "EMI Options",
        "Scholarships",
        "Industry Visit",
        "Educational Trip",
        "Equipped Labs",
        "Live Projects",
        "Internship"
    ];

    const courses = ["Diploma", "Advance Diploma", "B.Sc.", "B. Voc", "B. Des"];

    const targetAudience = ["Furniture Experts", "Interior Enthusiasts"];

    const testimonials = [
        {
            name: "Priya Sharma",
            course: "Interior Design Diploma",
            message: "This course transformed my career! The hands-on projects and industry exposure helped me land my dream job."
        },
        {
            name: "Rahul Verma",
            course: "B.Sc. Interior Design",
            message: "The faculty is amazing and the curriculum is perfectly designed for industry requirements. 100% recommended!"
        },
        {
            name: "Anjali Patel",
            course: "Advanced Diploma",
            message: "The placement assistance and practical training made all the difference. Got placed with a 5L package!"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-screen bg-black">
                <img
                    src="/images/gallery/1721738128651.jpg"
                    alt="Design School Background"
                    className="w-full h-full object-cover opacity-80"
                />

                {/* Fixed Logo in Top Left Corner */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
                    <Image
                        src="/pixelcut-export4.png"
                        alt="Inframe College Banner"
                        width={120}
                        height={50}
                        className="object-contain rounded-xl sm:w-40 sm:h-16"
                        priority
                    />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 flex items-center justify-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
                        <div className="max-w-4xl mx-auto">
                            {/* Discount Badge with Animation */}
                            <div className="inline-block bg-yellow-500 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full text-lg sm:text-xl font-bold mb-6 sm:mb-8 border-2 border-white shadow-lg animate-pulse">
                                🎉 FLAT 20% OFF 🎉
                            </div>

                            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 text-yellow-400 drop-shadow-2xl">
                                NEW YEAR
                            </h1>

                            {/* Timer Section */}
                            <div className="mb-8 sm:mb-10">
                                <p className="text-xl sm:text-2xl mb-4 sm:mb-6 text-white font-semibold">Offer ends In</p>
                                <div className="flex justify-center gap-2 sm:gap-4 lg:gap-6 text-xl sm:text-2xl lg:text-3xl font-mono">
                                    <div className="bg-yellow-500 text-black px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 rounded-lg sm:rounded-xl border-2 border-white shadow-lg min-w-[70px] sm:min-w-[90px] lg:min-w-[100px]">
                                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                                        <div className="text-xs sm:text-sm">HOURS</div>
                                    </div>
                                    <div className="bg-yellow-500 text-black px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 rounded-lg sm:rounded-xl border-2 border-white shadow-lg min-w-[70px] sm:min-w-[90px] lg:min-w-[100px]">
                                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                                        <div className="text-xs sm:text-sm">MINUTES</div>
                                    </div>
                                    <div className="bg-yellow-500 text-black px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 rounded-lg sm:rounded-xl border-2 border-white shadow-lg min-w-[70px] sm:min-w-[90px] lg:min-w-[100px]">
                                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                                        <div className="text-xs sm:text-sm">SECONDS</div>
                                    </div>
                                </div>
                            </div>

                            {/* Seats Available */}
                            <div className="mb-6 sm:mb-8">
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
                                    <span className="text-lg sm:text-2xl text-white font-semibold">Available seats</span>
                                    <div className="bg-yellow-500 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-lg sm:text-xl border-2 border-white shadow-lg">
                                        🚀 12/15
                                    </div>
                                </div>
                            </div>

                            {/* Scroll Indicator */}
                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                                <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
                                    <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Details Section */}
            <div className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="max-w-6xl mx-auto">
                        {/* Main Course Info */}
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black mb-4 sm:mb-6">
                                Interior Design Course
                            </h2>
                            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-6 sm:mb-8 font-semibold">
                                🎓 Learn from Masters
                            </p>

                            {/* Price Section */}
                            <div className="mb-6 sm:mb-8">
                                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
                                    Only at <span className="text-yellow-600 text-3xl sm:text-4xl lg:text-5xl">₹166/-</span> per-day
                                </p>
                                <p className="text-sm sm:text-base text-gray-600 mt-2">💰 Less than your daily coffee!</p>
                            </div>

                            {/* Description */}
                            <p className="text-lg sm:text-xl text-gray-800 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto">
                                Get growth in your career with UGC entitled diploma/UG/PG degree programme.
                                <span className="block font-semibold text-yellow-600 mt-3 sm:mt-4 text-xl sm:text-2xl">🎯 Jobs ready.</span>
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="mb-12 sm:mb-16">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 sm:mb-10 text-center">✨ Course Features:</h3>
                            <ul className="space-y-4 sm:space-y-6 max-w-2xl mx-auto">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-lg sm:text-xl text-gray-800 bg-gradient-to-r from-yellow-50 to-white p-4 sm:p-5 rounded-lg border-2 border-yellow-200 shadow-sm hover:shadow-md transition-shadow">
                                        <span className="text-yellow-500 mr-3 sm:mr-4 text-xl sm:text-2xl">✅</span>
                                        <span className="font-semibold">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tools Section */}
                        <div className="mb-12 sm:mb-16">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 sm:mb-10 text-center">
                                🛠️ Master Industry Relevant Tools:
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
                                {tools.map((tool, index) => (
                                    <div key={index} className="bg-black text-yellow-400 px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg border-2 border-yellow-500 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                                        💻 {tool}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Additional Features */}
                        <div className="mb-12 sm:mb-16">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 sm:mb-10 text-center">🌟 Additional Features:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                                {additionalFeatures.map((feature, index) => (
                                    <div key={index} className="bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-200 p-4 sm:p-5 rounded-xl text-center hover:shadow-lg hover:border-yellow-300 transition-all duration-300 group">
                                        <div className="text-yellow-500 text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform">⭐</div>
                                        <span className="text-black font-bold text-base sm:text-lg">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Courses Offered */}
                        <div className="mb-12 sm:mb-16">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 sm:mb-10 text-center">📚 Courses Offered:</h3>
                            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
                                {courses.map((course, index) => (
                                    <div key={index} className="bg-white border-2 border-black px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg text-black hover:bg-yellow-50 hover:border-yellow-500 hover:shadow-lg transition-all duration-300">
                                        🎓 {course}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Who Should Join */}
                        <div className="mb-12 sm:mb-16">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 sm:mb-10 text-center">👥 Who Should Join?</h3>
                            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
                                {targetAudience.map((audience, index) => (
                                    <div key={index} className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-4 sm:px-8 sm:py-5 rounded-full font-bold text-lg sm:text-xl border-2 border-black shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                                        👨‍💼 {audience}
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

                        {/* Video Section */}
                        <div className="mb-12 sm:mb-16">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 sm:mb-10 text-center">🎥 Course Preview</h3>
                            <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400">
                                <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-black to-gray-800 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="bg-yellow-500 rounded-full p-4 sm:p-6 inline-block mb-4 hover:scale-110 transition-transform cursor-pointer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="white"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-8 h-8 sm:w-12 sm:h-12"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M5.25 5.25v13.5L19.5 12 5.25 5.25z"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-white text-lg sm:text-2xl font-semibold">
                                            Watch Course Introduction
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonials Section */}
                        <div className="mb-12 sm:mb-16">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 sm:mb-10 text-center">💬 Student Success Stories</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="bg-white border-2 border-yellow-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                        <div className="text-yellow-500 text-4xl mb-4">❝</div>
                                        <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.message}"</p>
                                        <div className="border-t border-yellow-200 pt-4">
                                            <h4 className="font-bold text-black text-lg">{testimonial.name}</h4>
                                            <p className="text-yellow-600 text-sm">{testimonial.course}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Final CTA Section */}
                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 sm:p-12 text-center shadow-2xl border-4 border-yellow-300 mb-12 sm:mb-16">
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
                        <div className="text-center">
                            <button
                                onClick={handleBuyNow}
                                className="bg-gradient-to-r from-black to-gray-800 text-white px-8 py-4 sm:px-12 sm:py-5 lg:px-16 lg:py-5 rounded-full text-xl sm:text-2xl font-bold hover:from-gray-800 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-yellow-500 hover:shadow-3xl mb-4"
                            >
                                Buy Now
                            </button>
                            <p className="text-base sm:text-lg text-gray-600 flex items-center justify-center gap-2">
                                <span className="text-yellow-500">⚡</span>
                                Limited time offer - Don't miss out!
                            </p>
                        </div>
                        {/* Additional Info */}
                        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                            <div className="bg-gradient-to-b from-white to-yellow-50 p-5 sm:p-6 rounded-xl border-2 border-yellow-300 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="text-3xl sm:text-4xl font-bold text-yellow-600">12+</div>
                                <div className="text-black text-lg sm:text-xl font-semibold">Months Program</div>
                            </div>
                            <div className="bg-gradient-to-b from-white to-yellow-50 p-5 sm:p-6 rounded-xl border-2 border-yellow-300 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="text-3xl sm:text-4xl font-bold text-yellow-600">100%</div>
                                <div className="text-black text-lg sm:text-xl font-semibold">Placement Guarantee</div>
                            </div>
                            <div className="bg-gradient-to-b from-white to-yellow-50 p-5 sm:p-6 rounded-xl border-2 border-yellow-300 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="text-3xl sm:text-4xl font-bold text-yellow-600">4.5L+</div>
                                <div className="text-black text-lg sm:text-xl font-semibold">Average CTC</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gradient-to-b from-black to-gray-900 text-white py-8 sm:py-12 border-t-4 border-yellow-500">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <div className="mb-4 sm:mb-6 flex justify-center">
                        <Image
                            src="/pixelcut-export4.png"
                            alt="Inframe College Banner"
                            width={120}
                            height={50}
                            className="object-contain rounded-xl sm:w-40 sm:h-16"
                        />
                    </div>
                    <p className="text-lg sm:text-xl mb-3">© 2024 Inframe College. All rights reserved.</p>
                    <p className="text-yellow-400 text-base sm:text-lg">🎨 Transform your career with expert-led interior design education</p>
                    <div className="mt-6 flex justify-center space-x-6">
                        <span className="text-gray-400">📞 +91 9649 9649 37</span>
                        <span className="text-gray-400">📧 info@inframeschool.com</span>
                        {/* <span className="text-gray-400">🏠 Mumbai, India</span> */}
                    </div>
                </div>
            </footer>
        </div>
    );
}