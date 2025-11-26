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
    console.log('helloworld');
    
    // console.log(Number((priceWithDiscount)) - Number((originalPrice)));
    // console.log(priceWithDiscount,originalPrice);


    return (
        <div className="w-full flex justify-center">
            <div className="bg-white shadow-2xl border border-gray-200 rounded-2xl 
                    p-4 sm:p-6 max-w-7xl w-full">

                {/* Header */}
                <div className="text-center max-w-7xl w-full mb-8">

                    {/* Title Section */}
                    <div className="mb-6">
                        <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
                            {title}
                        </h2>
                        <p className="text-xl sm:text-2xl text-yellow-600 font-bold mt-3 flex items-center justify-center gap-2">
                            <span className="text-2xl">🎓</span>
                            Learn from Industry Masters
                            <span className="text-2xl">⚡</span>
                        </p>
                    </div>

                    {/* Enhanced Price Card - Bigger & Wider */}
                    <div className="w-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 sm:p-8 shadow-2xl border-4 border-yellow-300 max-w-4xl mx-auto transform hover:scale-[1.02] transition-transform duration-300">
                        <div className="flex flex-col sm:flex-row items-center justify-between text-white space-y-4 sm:space-y-0">

                            {/* Original Price */}
                            <div className="text-center sm:text-left">
                                <div className="text-sm sm:text-base opacity-90 font-medium">ORIGINAL PRICE</div>
                                <div className="text-4xl sm:text-5xl line-through opacity-80 font-bold">₹{originalPrice}</div>
                            </div>

                            {/* Current Price - Main Focus */}
                            <div className="text-center relative">
                                <div className="text-sm sm:text-base opacity-90 font-medium">TODAY'S PRICE</div>
                                <div className="text-6xl sm:text-8xl font-black leading-none">₹{priceWithDiscount}</div>
                                <div className="text-sm sm:text-base opacity-90 mt-2 font-medium">Lifetime Access</div>

                                {/* Discount Badge */}
                                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-red-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-bold rotate-12 shadow-lg">
                                    70% OFF
                                </div>
                            </div>

                            {/* Savings */}
                            <div className="text-center sm:text-right">
                                <div className="text-sm sm:text-base opacity-90 font-medium">YOU SAVE</div>
                                <div className="text-4xl sm:text-5xl font-bold text-green-100">₹17490</div>
                                <div className="text-sm opacity-90 mt-1">Incredible Deal!</div>
                            </div>
                        </div>

                        {/* Additional Pricing Info */}
                        <div className="mt-6 pt-4 border-t border-yellow-300/50">
                            <div className="flex justify-center items-center space-x-6 text-white/90 text-sm sm:text-base">
                                <div className="flex items-center">
                                    <span className="mr-2">💳</span>
                                    EMI Available
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2">🔄</span>
                                    7-Day Refund
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2">📚</span>
                                    Free Updates
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Urgency Indicator */}
                    <div className="mt-4 text-base sm:text-lg text-red-600 font-semibold animate-pulse flex items-center justify-center gap-2">
                        <span>⏳</span>
                        Offer ends soon! Limited seats available
                        <span>🔥</span>
                    </div>

                </div>


                {/* Features List - 2 Columns */}
                <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-black text-center mb-8">
                        ✨ Course Features
                    </h3>

                    <div className="w-full flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl w-full">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center bg-gradient-to-r from-yellow-50 to-white
                p-3 sm:p-4 rounded-xl border border-yellow-200
                shadow-md hover:shadow-xl transition-all duration-200 hover:border-yellow-300"
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