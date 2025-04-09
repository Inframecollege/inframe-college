

"use client"
import type React from "react"
import {  type CourseType } from "../../utils/courseTypes"
import CourseContent from "./CourseContent"
import { usePathname } from "next/navigation"


interface CoursePageProps {
  courseType: CourseType[]
  category: string
  
}

const CoursePage: React.FC<CoursePageProps> = ({ courseType, category }) => {
  const pathname = usePathname()

  console.log("Current pathname:", pathname);
  console.log("CourseType data:", courseType);
  console.log(pathname)

  if (!courseType?.length) {
    return (
      <div className="min-h-screen mt-24 sm:mt-0 font-sans bg-black text-white flex items-center justify-center">
        <p>No courses available for this category.</p>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen mt-24 sm:mt-0 font-sans bg-black text-white">
      {courseType
        .filter((course) => pathname.endsWith(course.value))
        .map((course, index) => (
          <CourseContent key={course.value} {...course} category={category} index={index} />
        ))
      }
  
  {courses.map((co) => {
  const formattedCategory = co.category.toLowerCase().replace(/\s+/g, "-");
  const currentPath = pathname.replace(/\/$/, "").toLowerCase();

  if (currentPath.endsWith("/"+formattedCategory)) {
    console.log(`✅ Rendering: ${"/"+formattedCategory}`, currentPath);
    return (
      <div key={co.category} className="min-h-screen mt-24 sm:mt-0 font-sans bg-black text-white flex items-center justify-center">
      <div>
        {formattedCategory}
  </div>
  </div>
    )
  }

  
})}
     



    </div>
  );
  
}

export default CoursePage