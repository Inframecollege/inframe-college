import React from 'react'

function CourseInfo({ title, priceWithDiscount, originalPrice }: { title: string, priceWithDiscount: string, originalPrice: string, }) {
    const features = [
        "Become an Interior Designer",
        "Master 4+ Industry Tools",
        "Work on 4+ Hands-on Real Projects",
        "Live Doubt Support on App",
        "Weekly Faculty Interaction via App",
        "Portfolio & Resume Building Support",
        "Learn from Industry Experts",
        "Job Assistance & Career Guidance",
        "Access to Downloadable Study Material",
        "Lifetime Access to Recorded Sessions"
    ];

    return (
        <div className="w-full flex justify-center">
            <div className="bg-white shadow-2xl border border-gray-200 rounded-2xl 
                    p-3 sm:p-3 max-w-7xl w-full">

                {/* Header */}
                <div className="text-center mb-6">

                    {/* Title Section */}
                    <div className="mb-4">
                        <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
                            {title}
                        </h2>
                        <p className="text-xl sm:text-2xl text-yellow-600 font-bold mt-2 flex items-center justify-center gap-2">
                            <span className="text-2xl">🎓</span>
                            Learn from Industry Masters
                            <span className="text-2xl">⚡</span>
                        </p>
                    </div>

                    {/* Compact Price Card */}
                    <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-4 shadow-xl border-2 border-yellow-300 max-w-sm mx-auto">
                        <div className="flex items-center justify-between text-white">
                            <div className="text-left">
                                <div className="text-xs opacity-90">WAS</div>
                                <div className="text-lg line-through opacity-80">₹{originalPrice}</div>
                            </div>

                            <div className="text-center">
                                <div className="text-xs opacity-90">NOW ONLY</div>
                                <div className="text-3xl font-black">₹{priceWithDiscount}</div>
                                <div className="text-xs opacity-90 mt-1">Lifetime Access</div>
                            </div>

                            <div className="text-right">
                                <div className="text-xs opacity-90">YOU SAVE</div>
                                <div className="text-lg font-bold text-green-100">70%</div>
                            </div>
                        </div>
                    </div>

                    {/* Urgency Indicator */}
                    <div className="mt-3 text-sm text-red-600 font-semibold animate-pulse">
                        ⏳ Offer ends soon! Limited seats available
                    </div>

                </div>


                {/* Features List - 2 Columns */}
                <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-black text-center mb-8">
                        ✨ Course Features
                    </h3>

                    <div className="w-full flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 max-w-3xl w-full">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center bg-gradient-to-r from-yellow-50 to-white
                p-2 rounded-xl border border-yellow-200
                shadow-md hover:shadow-xl transition-all duration-200"
                                >
                                    <span className="text-yellow-500 mr-3 text-2xl">✅</span>
                                    <span className="font-semibold text-gray-900 text-base sm:text-lg">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );




}

export default CourseInfo