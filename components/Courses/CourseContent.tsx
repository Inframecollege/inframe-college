"use client"
import { useState, useEffect } from "react"
import { Button } from "../../components/ui/button"
import { ChevronRight, Download, ArrowRight } from "lucide-react"
import { Poppins } from "next/font/google"
import HighlightsSection from "./HighlightsSection"
import CareerProspects from "./CareerProspects"
import CurriculumSection from "./CurriculumSection"
import SoftwareLogos from "./SoftwareLogos"
import TestimonialSlider from "./TestimonialSlider"
import FAQSection from "./FAQSection"
import {
  categoryHeroImages,
  type CurriculumType,
  type SoftwareType,
  type VideosType,
  type WhatLearn,
} from "../../utils/courseTypes"
import IndustryPartners from "./Partners"
import AdmissionProcess from "./AdmissionProcess"
import WhatYouWillLearn from "./WhatYouWillLearn"
import DreamsSection from "../DreamSection"
import Image from "next/image"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

interface CourseContentProps {
  title: string
  duration: string
  description: string
  content: string
  index: number
  category: string
  curriculum?: CurriculumType
  software?: SoftwareType[]
  whatYouWillLearn?: WhatLearn[]
  videos?: VideosType[]
}

const sections = [
  { id: "overview", label: "Overview" },
  { id: "admission", label: "Admission" },
  { id: "highlights", label: "Highlights" },
  { id: "curriculum", label: "Curriculum" },
  { id: "career", label: "Career" },
  { id: "partners", label: "Partners" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
]

const CourseContent = ({
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
  const [activeSection, setActiveSection] = useState("overview")
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Get the hero images for the current category
  const heroImagesForCategory = categoryHeroImages[category] || []
  const heroImage = heroImagesForCategory[index] || heroImagesForCategory[0]
  const fallbackHeroImage = "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1600&q=80"

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsNavSticky(scrollPosition > window.innerHeight - 100)

      // Update active section based on scroll position
      sections.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = isNavSticky ? 80 : 0
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <div className="relative h-[95vh] overflow-hidden" id="overview">
        <Image
          src={heroImage || fallbackHeroImage}
          alt={`${title} Hero Image`}
          layout="fill"
          objectFit="cover"
          className="opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-6xl mx-auto px-4">
            <div className="bg-yellow-400 text-black mb-6 px-4 py-2 mt-14 text-lg inline-block rounded-full">
              {duration}
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">{title}</h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-300 mb-8">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className={`bg-yellow-400 text-black font-semibold hover:bg-yellow-500 px-8 py-6 text-lg ${poppins.className}`}
                onClick={() => scrollToSection("admission")}
              >
                Start Your Journey <ChevronRight className="ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-6 text-lg"
              >
                <Download className="mr-2" /> Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}


      {/* Course Overview */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className={`text-3xl font-bold mb-6 ${poppins.className}`}>Course Overview</h2>
            <p className="text-lg leading-relaxed text-gray-700">{content}</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 h-fit">
            <h3 className={`text-2xl font-bold mb-6 text-black ${poppins.className}`}>Quick Actions</h3>
            <div className="space-y-4">
              <Button
                className="w-full bg-black text-white hover:bg-gray-900"
                onClick={() => scrollToSection("admission")}
              >
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="w-full bg-white/90 hover:bg-white"
                onClick={() => scrollToSection("curriculum")}
              >
                View Curriculum
              </Button>
              
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <div className="max-w-7xl mx-auto px-4">
        <div id="admission">
          <AdmissionProcess />
          <DreamsSection />
        </div>

        <div id="highlights">
          <HighlightsSection />
        </div>

        <div id="career">
          <CareerProspects />
        </div>

        {curriculum && (
          <div id="curriculum">
            <CurriculumSection curriculum={curriculum} />
          </div>
        )}

        {software?.length === 0 && whatYouWillLearn ? (
          <WhatYouWillLearn whatYouWillLearn={whatYouWillLearn} />
        ) : (
          <SoftwareLogos software={software || []} />
        )}

        <div id="partners">
          <IndustryPartners />
        </div>

        {videos.length > 0 && (
          <div id="testimonials">
            <TestimonialSlider videos={videos} />
          </div>
        )}

        <div id="faq">
          <FAQSection />
        </div>

        {/* Call to Action */}
        <div className="text-center py-20 my-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl">
          <h2 className={`text-4xl font-bold mb-6 text-black ${poppins.className}`}>Ready to Start Your Journey?</h2>
          <p className="text-black/80 mb-8 max-w-2xl mx-auto text-lg">
            Join our community of creative professionals and start your journey towards becoming a professional{" "}
            {title.split(" in ")[1] || "designer"}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-2 border-black text-black hover:bg-black hover:text-yellow-400 px-8"
            >
              <Download className="mr-2" /> Download Brochure
            </Button>
            <Button className="bg-black text-yellow-400 hover:bg-gray-900 px-8">
              Apply Now <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseContent

