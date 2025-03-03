"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import type { CourseType } from "../../utils/courseTypes"
import CourseContent from "./CourseContent"
import { useRouter, usePathname } from "next/navigation"

interface CoursePageProps {
  courseType: CourseType[]
  category: string
  initialTabIndex?: number
}

const CoursePage: React.FC<CoursePageProps> = ({ courseType, category, initialTabIndex = 0 }) => {
  const [mounted, setMounted] = useState(false)
  const [selectedTab, setSelectedTab] = useState("")
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    if (courseType?.length > 0) {
      // Use the initialTabIndex to set the selected tab
      const initialTab = courseType[initialTabIndex] || courseType[0]
      setSelectedTab(initialTab.value)
    }
  }, [courseType, initialTabIndex])

  const handleTabChange = (value: string) => {
    setSelectedTab(value)
    
    // Update the URL to reflect the selected tab
    // Construct URL by replacing the last part of the path
    const baseUrl = `/${category}/${value}`
    
    // Only navigate if we're already mounted and the URL is different
    if (mounted && pathname !== baseUrl) {
      router.push(baseUrl)
    }
  }

  if (!mounted) {
    return null // or a loading skeleton
  }

  if (!courseType?.length) {
    return (
      <div className="min-h-screen mt-24 sm:mt-0 font-sans bg-black text-white flex items-center justify-center">
        <p>No courses available for this category.</p>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen mt-24 sm:mt-0 font-sans bg-black text-white">
      <Tabs 
        defaultValue={selectedTab} 
        value={selectedTab} 
        onValueChange={handleTabChange} 
        className="w-full"
      >
        {/* Mobile View - Select Dropdown */}
        <div className="block md:hidden p-4">
          <Select value={selectedTab} onValueChange={handleTabChange}>
            <SelectTrigger className="w-full bg-zinc-900 text-white border border-zinc-800">
              <SelectValue placeholder="Select Course" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 text-white border border-zinc-700">
              {courseType.map((tab) => (
                <SelectItem key={tab.value} value={tab.value} className="cursor-pointer">
                  {tab.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Desktop View - Tabs */}
        <div className="hidden md:block md:max-w-7xl md:mx-auto 2xl:w-full 2xl:mx-0 z-10 border-b border-zinc-800">
          <TabsList className="h-auto md:fixed z-10 p-0 bg-black w-full flex flex-col md:flex-row">
            {courseType.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="lg:px-8 2xl:px-auto py-6 mt-24 lg:text-[17px] font-bold data-[state=active]:bg-zinc-900 data-[state=active]:border-b-4 data-[state=active]:border-yellow-400 data-[state=active]:text-white rounded-none"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Course Content */}
        {courseType.map((course, index) => (
          <TabsContent key={course.value} value={course.value}>
            <CourseContent {...course} category={category} index={index} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default CoursePage