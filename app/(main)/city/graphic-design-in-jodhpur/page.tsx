"use client"
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import { Poppins } from "next/font/google"
import { useState } from "react"
import { Button } from "@headlessui/react"
import ApplyNowForm from "../../../../components/ApplyNowForm"
import IndustryPartners from "../../../../components/Courses/Partners"
import TestimonialSlider from "../../../../components/Courses/TestimonialSlider"
import FAQSection from "../../../professional-online-courses/components/faq"

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
})

const CityMasterPage: React.FC = () => {
    // Removed props → using static values instead
    const category = "graphic-design"
    const title = "Graphic Design"
    const description =
        "Master the art of visual communication with our graphic design programs."

    const heroImage =
        "https://images.unsplash.com/photo-1626785774625-0b1c2c4efd7c?q=80&w=1920&auto=format&fit=crop"

    const videos: any[] = [] // optional fallback

    const [isFormOpen, setIsFormOpen] = useState(false)

    const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault()
        setIsFormOpen(true)
    }

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-screen overflow-hidden">
                <Image
                    src={heroImage}
                    alt={`${title} Hero Image`}
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center max-w-4xl px-4">
                        <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">
                            {title}
                        </h1>
                        <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-200 mb-8">
                            {description}
                        </p>
                        <Button
                            className={`bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold hover:from-yellow-500 hover:to-yellow-600 px-10 py-5 text-xl rounded-2xl shadow-2xl hover:shadow-yellow-500/40 hover:scale-105 transition-all duration-300 ${poppins.className}`}
                            onClick={() => {
                                document
                                    .getElementById("programs-section")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }}
                        >
                            Explore Programs <FaArrowRight className="ml-2 inline" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* WHY CHOOSE US */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2
                        className={`text-3xl md:text-4xl font-bold mb-12 text-center ${poppins.className}`}
                    >
                        Why Choose Our {title} Programs
                    </h2>

                    {/* features removed for brevity — same as your code */}
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-20 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${poppins.className}`}>
                        Ready to Start Your Journey?
                    </h2>

                    <p className="text-lg text-gray-600 mb-8">
                        Take the first step towards a successful career in graphic design.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="" download="Academic-Brochure-2024.pdf">
                            <Button className="border-2 border-yellow-400 text-yellow-500 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-lg transition-all duration-300">
                                Download Brochure
                            </Button>
                        </Link>

                        <Button
                            onClick={handleApplyClick}
                            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold hover:from-yellow-500 hover:to-yellow-600 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-yellow-500/40 hover:scale-105 transition-all duration-300"
                        >
                            Apply Now
                        </Button>

                        <ApplyNowForm
                            isFormOpen={isFormOpen}
                            setIsFormOpen={setIsFormOpen}
                            isScrolled={false}
                        />
                    </div>
                </div>
            </div>

            {/* PARTNERS + TESTIMONIALS */}
            <div className="m-11">
                <IndustryPartners />
                {videos.length > 0 && <TestimonialSlider videos={videos} />}
            </div>

            <div className="m-11">
                <FAQSection />
            </div>
        </div>
    )
}

export default CityMasterPage
