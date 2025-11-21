import React from 'react'
import { useRouter } from "next/navigation";

function QuickPayment() {
    const router = useRouter();

    const handleBuyNow = async () => {
        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Razorpay test key
            amount: 149900,
            currency: "INR",
            name: "Inframe College",
            description: "Interior Design Course Enrollment",
            image: "/pixelcut-export4.png",
            handler: function (response: { razorpay_payment_id: string; }) {
                // alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
                router.push("/order-confirmation");

            },
            method: {
                upi: true,
                card: true,
                netbanking: true,
                wallet: true,
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
    return (
        <div className="text-center">
            <button
                onClick={handleBuyNow}
                className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white
                            px-6 py-3 sm:px-8 sm:py-4 rounded-lg
                            text-lg sm:text-3xl font-semibold border border-yellow-400 shadow-xl mb-4
                            hover:scale-[1.03] active:scale-95 transition-all duration-300
                            hover:shadow-yellow-400/40 overflow-hidden group"
            >
                {/* Text + Icon */}
                <span className="relative z-20 flex items-center justify-center">
                    Buy Now
                    <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                        ></path>
                    </svg>
                </span>

                {/* Shine Effect */}
                <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none rounded-lg">
                    <div
                        className="absolute top-0 left-[-120%] h-full w-1/3
            bg-gradient-to-r from-transparent via-white/30 to-transparent
            transform -skew-x-12 animate-shine"
                    ></div>
                </div>

                {/* Soft Glow */}
                <div className="absolute inset-0 rounded-lg bg-yellow-400/10 opacity-10 
        group-hover:opacity-25 transition duration-300 z-0">
                </div>
            </button>


            {/* <p className="text-base sm:text-lg text-gray-600 flex items-center justify-center gap-2">
                <span className="text-yellow-500">⚡</span>
                Limited time offer - Don't miss out!
            </p> */}
        </div>)
}

export default QuickPayment