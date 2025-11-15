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
import { CourseType, VideosType, courseTypes } from "../../../../utils/courseTypes"
import FAQSection from "../../../professional-online-courses/components/faq"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

interface CategoryLandingPageProps {
  category: string
  courses: CourseType[]
  heroImage?: string
  categoryTitle?: string
  description?: string
  videos: VideosType[];
}

interface CategoryInfo {
  title: string
  description: string
  heroImage: string
}


const getCategoryInfo = (category: string): CategoryInfo => {
  // Handle undefined or null category
  if (!category) {
    return {
      title: "Graphic Design",
      description: "Transform spaces and design stunning environments with our expert-led Interior Design programs. Develop creative skills that also complement visual branding through our Graphic Design Course. As one of the leading options for students choosing a Graphic Design Course in India, we help you build a powerful, industry-ready creative career.",
      heroImage: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1920&q=80",
    }
  }

  const categoryMap: { [key: string]: CategoryInfo } = {
    "interior-design": {
      title: "Interior Design",
      description:
        "Transform spaces and create beautiful environments with our comprehensive interior design programs. Learn from industry experts and build a successful career in interior design.",
      heroImage: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1920&auto=format&fit=crop",
    },
    "fashion-design": {
      title: "Fashion Design",
      description:
        "Unleash your creativity in the world of fashion. Our programs prepare you for a dynamic career in fashion design, from concept to runway.",
      heroImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1920&auto=format&fit=crop",
    },
    "graphic-design": {
      title: "Graphic Design",
      description:
        "Master the art of visual communication with our graphic design programs. Create compelling designs that captivate and communicate.",
      heroImage: "https://images.unsplash.com/photo-1626785774625-0b1c2c4efd7c?q=80&w=1920&auto=format&fit=crop",
    },
    "uiux-design": {
      title: "UI/UX Design",
      description:
        "Design seamless digital experiences that users love. Our UI/UX design programs prepare you for the growing digital design industry.",
      heroImage: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1920&auto=format&fit=crop",
    },
    "animation-vfx": {
      title: "Animation & VFX",
      description:
        "Bring stories to life through animation and visual effects. Our programs provide the skills needed for this exciting and evolving field.",
      heroImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1920&auto=format&fit=crop",
    },
    "digital-marketing": {
      title: "Digital Marketing",
      description:
        "Master the strategies that drive online success. Our digital marketing programs prepare you for a career in this fast-paced digital world.",
      heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop",
    },
    "jewellery-design": {
      title: "Jewellery Design",
      description:
        "Create stunning jewellery pieces that combine artistry with craftsmanship. Our programs cover traditional techniques and modern design approaches.",
      heroImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1920&auto=format&fit=crop",
    },
    "entrepreneurship-skill": {
      title: "Entrepreneurship Skills",
      description:
        "Develop the skills needed to launch and grow successful businesses. Our programs prepare you for the challenges of entrepreneurship.",
      heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto=format&fit=crop",
    },
    "media-entertainment": {
      title: "Media & Entertainment",
      description:
        "Prepare for a career in the dynamic world of media and entertainment. Our programs cover content creation, production, and distribution.",
      heroImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1920&auto=format&fit=crop",
    },
    "fine-arts": {
      title: "Fine Arts",
      description:
        "Express yourself through various artistic mediums. Our fine arts programs nurture creativity and technical skills for aspiring artists.",
      heroImage: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=1920&auto=format&fit=crop",
    },
    "advertising-marketing": {
      title: "Advertising & Marketing",
      description:
        "Create compelling campaigns that drive results. Our programs prepare you for a career in the exciting field of advertising and marketing.",
      heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto=format&fit=crop",
    },
  }

  return (
    categoryMap[category] || {
      title: category
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      description: "Transform spaces and design stunning environments with our expert-led Interior Design programs. Develop creative skills that also complement visual branding through our Graphic Design Course. As one of the leading options for students choosing a Graphic Design Course in India, we help you build a powerful, industry-ready creative career..",
      heroImage: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1920&q=80",
    }
  )
}

const CategoryLandingPage: React.FC<CategoryLandingPageProps> = ({
  category,
  courses,
  heroImage: customHeroImage,
  categoryTitle: customTitle,
  description: customDescription,
  videos = []
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setIsFormOpen(true);
  };

  // Safe category info retrieval with fallbacks
  const categoryInfo = getCategoryInfo(category || "");

  const { title, description, heroImage } = {
    title: customTitle || categoryInfo.title,
    description: customDescription || categoryInfo.description,
    heroImage: customHeroImage || categoryInfo.heroImage,
  }

  const categoryCourses = courseTypes[category] || [];
  const fallbackVideos = categoryCourses.find(course => course.videos)?.videos || [];
  const finalVideos = videos.length > 0 ? videos : fallbackVideos;
  console.log(courses);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden ">
        <Image
          src={heroImage || "/placeholder.svg"}
          alt={`${title} Hero Image`}
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">

            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">Graphic Design</h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-200 mb-8">{description}</p>
            <Button
              className={`bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold hover:from-yellow-500 hover:to-yellow-600 px-10 py-5 text-xl rounded-2xl shadow-2xl hover:shadow-yellow-500/40 hover:scale-105 transition-all duration-300 ${poppins.className}`}
              onClick={() => {
                document.getElementById('programs-section')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Explore Programs <FaArrowRight className="ml-2 inline" />
            </Button>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${poppins.className}`}>
            Why Choose Our {title} Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Industry-Relevant Curriculum</h3>
              <p className="text-gray-600">
                Our programs are designed in collaboration with industry experts to ensure you learn the most relevant
                skills and knowledge.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Experienced Faculty</h3>
              <p className="text-gray-600">
                Learn from industry professionals and experienced educators who bring real-world knowledge to the
                classroom.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Career Support</h3>
              <p className="text-gray-600">
                Get placement assistance, internship opportunities, and career guidance to help you succeed in your
                professional journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${poppins.className}`}>Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Take the first step towards a successful career in {(title || "").toLowerCase()}. Apply now or contact us for more
            information.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href=""
              download="Academic-Brochure-2024.pdf"
              style={{ textDecoration: 'none' }}
            >
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

      <div className="m-11">
        <IndustryPartners />
        {finalVideos?.length > 0 && <TestimonialSlider videos={finalVideos} />}
      </div>

      {/* Enhanced Newsletter Section with SEO */}
      <section className="py-16 my-10 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Inframe School</h2>
          <p className="mb-8">Subscribe to our newsletter to receive the latest articles, news, and updates about design education and career opportunities.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md flex-grow text-black"
              aria-label="Email for newsletter"
            />
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 rounded-md transition-colors duration-300">
              Subscribe
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-400">By subscribing, you'll receive exclusive content about design education, career opportunities, and admission updates.</p>
        </div>
      </section>

      <div className="m-11">
        <FAQSection />
      </div>
    </div>
  )
}




export default CategoryLandingPage


