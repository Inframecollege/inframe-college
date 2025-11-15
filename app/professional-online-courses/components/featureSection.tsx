"use client"
import type React from "react"
import { CheckCircle, Users, Brain, Briefcase, Target, Clock } from "lucide-react"

const FeaturesSection = () => {
  const mainFeatures = [
    {
      icon: Users,
      title: "Live Sessions by Industry Professionals",
      description: "Gain insights from professionals working at top companies."
    },
    {
      icon: Brain,
      title: "AI-Powered Marketing Training",
      description: "Learn to automate, analyze, and optimize using cutting-edge AI tools."
    },
    {
      icon: Briefcase,
      title: "Hands-On Projects and Case Studies",
      description: "Apply your knowledge to real-world scenarios that hiring managers value."
    }
  ]

  const secondaryFeatures = [
    {
      icon: Target,
      title: "Placement Assistance",
      description: "Interview prep, resume help, and job support for career advancement."
    },
    {
      icon: CheckCircle,
      title: "Freelancer and Career Focused",
      description: "Designed to help you grow your brand, business, and professional network."
    },
    {
      icon: Clock,
      title: "Built for Busy Professionals",
      description: "Flexible and high-impact learning designed for graduates and working professionals."
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-yellow-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="flex items-center justify-center mb-16">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
        </div>

        {/* Secondary Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-yellow-600 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection