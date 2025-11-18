"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSection({ backgroundImage = "/images/gallery/1721738128651.jpg" }) {
    const [timeLeft, setTimeLeft] = useState({
        hours: 3,
        minutes: 12,
        seconds: 0,
    });

    // TIMER LOGIC
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                let { hours, minutes, seconds } = prev;

                if (seconds > 0) return { ...prev, seconds: seconds - 1 };
                if (minutes > 0) return { hours, minutes: minutes - 1, seconds: 59 };
                if (hours > 0) return { hours: hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full  bg-black">

            {/* ===========================================================
               🔥 HEADER BAR (OFFER + SEATS + TIMER)
            ============================================================ */}
            <div className="w-full bg-white/10 backdrop-blur-2xl border-b border-yellow-400 shadow-[0_0_20px_rgba(255,215,0,0.3)] py-2 z-20 relative overflow-hidden">


                <div className="max-w-6xl mx-auto">
                    {/* MARQUEE WRAPPER */}
                    <div className="relative overflow-hidden">
                        {/* The track contains 2 copies of the same content for seamless loop */}
                        <div className="marquee-track">
                            {[0, 1].map((copy) => (
                                <div className="marquee-group" key={copy}>
                                    {/* You can create a small function to render the repeated block */}
                                    <div className="marquee-item">
                                        <span className="text-yellow-400 text-sm sm:text-lg font-bold animate-pulse">🎉 NEW YEAR 70% OFF 🎉</span>
                                    </div>

                                    <div className="marquee-item">
                                        <div className="flex items-center gap-2 text-yellow-400">
                                            <span className="text-xs text-white font-medium hidden sm:inline">Ends in:</span>
                                            <span className="text-lg sm:text-2xl font-bold">
                                                {timeLeft.hours.toString().padStart(2, "0")}
                                            </span>
                                            <span className="text-lg sm:text-2xl font-bold">:</span>
                                            <span className="text-lg sm:text-2xl font-bold">
                                                {timeLeft.minutes.toString().padStart(2, "0")}
                                            </span>
                                            <span className="text-lg sm:text-2xl font-bold">:</span>
                                            <span className="text-lg sm:text-2xl font-bold">
                                                {timeLeft.seconds.toString().padStart(2, "0")}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="marquee-item">
                                        <div className="px-3 py-1 text-white bg-white/10 border border-yellow-400 rounded-full text-xs sm:text-base font-semibold flex items-center gap-2">
                                            🎟 Only 4 Seats Left 🎟
                                        </div>
                                    </div>

                                    {/* small spacer to visually separate repeated blocks */}
                                    <div className="w-8" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
    
            </div>
            {/* ===========================================================
               📸 RESPONSIVE BACKGROUND IMAGE SECTION
            ============================================================ */}
            {/* <div className="relative w-full overflow-hidden">
                <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">
                    <Image
                        src={backgroundImage}
                        alt="Hero Banner"
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />

                </div>
            </div> */}



        </div>
    );
}
