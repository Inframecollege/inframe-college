import React from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Including various font weights
});

const courses = {
  design: [
    {
      title: "Interior Design",
      programs: [
        "B. Des In Interior Design",
        "B.VOC in Interior Design",
        "B.SC in Interior Design",
        "1 Year Diploma in Interior Design",
        "3 Year Diploma in Interior Design",
      ],
      image:
        "/images/gallery/1717668148989.jpg",
    },
    {
      title: "Fashion Design",
      programs: [
        "B. Des In Fashion Design",
        "B.VOC in Fashion Design",
        "B.SC in Fashion Design",
        "1 Year Diploma in Fashion Design",
        "3 Year Diploma in Fashion Design",
      ],
      image: "/fashion-1.JPG",
    },
    {
      title: "Graphic Design",
      programs: [
        "B. Des In Graphic Design",
        "B.VOC in Graphic Design",
        "B.SC in Graphic Design",
        "1 Year Diploma in Graphic Design",
        "3 Year Diploma in Graphic Design",
      ],
      image:
        "/images/gallery/DSC04267.JPG",
    },
    {
      title: "UIUX-Design",
      programs: [
        "B. Des In UI & UX Design",
        "1 Year Diploma in UI & UX Design",
      ],
      image:
        "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Animation-VFX",
      programs: [
        "B. Des in Animation and VFX",
        "B.VOC in Animation and VFX",
        "B.SC in Animation and VFX",
        "1 Year Diploma in Animation and VFX",
        "2 Year Diploma in Animation and VFX",
        "3 Year Diploma in Animation and VFX",
      ],
      image:
        "https://images.unsplash.com/photo-1628494391268-c9935bc384d5?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Jewellery Design",
      programs: [
        "B.VOC in Jewellery Design",
        "1 Year Diploma in Jewellery Design",
        "1 Year Diploma in CAD Jewellery",
        "6 Month Certificate Course in Jewellery Design",
        "6 Month Certificate Course in CAD Jewellery",
      ],
      image:
        "https://images.unsplash.com/photo-1606293926249-ed22e446d476?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  art: [
    {
      title: "Fine Arts",
      programs: [
        "BFA in Painting",
        "BFA in Visual Communication",
        "BFA in Sculpture",
        "BFA in Applied",
        "B.VOC in Fine Arts",
        "1 Year Diploma in Painting",
        "3 Year Diploma in Fine Arts",
      ],
      image:
        "/images/gallery/1717485328677 - Copy (4).jpg",
    },
  ],
  business: [
    {
      title: "Digital Marketing",
      programs: [
        "B.VOC in Digital Marketing",
        "1 Year Diploma in Digital Marketing",
        "6 Month Certificate Course in Digital Marketing",
      ],
      image: "/images/gallery/1717660987952.jpg",
    },
    {
      title: "Entrepreneurship Skill",
      programs: [
        "B.VOC in Entrepreneurship Skill",
        "1 Year Diploma in Entrepreneurship Skill",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1726704124426-c220031548b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Media-Entertainment",
      programs: [
        "B.VOC in Media and Entertainment",
        "1 Year Diploma in Media and Entertainment",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lZGlhJTIwYW5kJTIwZW50ZXJ0YWlubWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Advertising-Marketing",
      programs: ["BBA in Advertising and Marketing"],
      image:
        "https://plus.unsplash.com/premium_photo-1684341008757-3b456034e943?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

interface Course {
  title: string;
  programs: string[];
  image: string;
}

interface CourseSectionProps {
  courses: Course[];
}

const CourseSection: React.FC<CourseSectionProps> = ({ courses }) => (
  <div
    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 ${poppins.className}`}
  >
    {courses.map((course, idx) => (
      <Card
        key={idx}
        className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-yellow-100 hover:border-yellow-300"
      >
        <div className="relative">
          
          <Image
            src={course.image}
            alt={course.title}
            width={600}
            height={300}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent" />
        </div>
        <CardContent className="p-6 bg-white">
          <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-yellow-600 transition-colors">
            {course.title}
          </h3>
          <ul className="space-y-2">
            {course.programs.map((program, idx) => (
              <li
                key={idx}
                className="text-sm text-gray-600 hover:text-yellow-600 transition-colors flex items-start"
              >
                <span className="text-yellow-400 mr-2 text-lg leading-none">
                  •
                </span>
                {program}
              </li>
            ))}
          </ul>

          <Link
            href={`/${course.title.replace(/\s+/g, "-").toLowerCase()}`}
            className="block mt-6"
            scroll={false}
          >
            <Button
              className={`w-full bg-yellow-400 hover:bg-yellow-500 text-black flex items-center justify-center space-x-2 px-5 py-3 rounded-md ${poppins.className}`}
            >
              <span>Explore Now</span>
              <FaArrowRight className="text-black" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    ))}
  </div>
);

const CourseCatalog = () => {
  const allCourses = [...courses.design, ...courses.art, ...courses.business];

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-yellow-50 to-white ${poppins.className}`}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="text-left mb-12">
          <h1 className="text-4xl md:text-5xl my-10 font-bold mb-4 text-gray-800">
            Our Industry-Centered Programs
          </h1>
          <div className="w-24 h-1 bg-yellow-400  rounded-full" />
        </div>

        <Tabs defaultValue="all" className="w-full ">
          <div className=" p-2 mb-12">
            <TabsList className="flex flex-wrap justify-center sm:justify-start my-3 rounded-lg   gap-2  font-bold text-black font-sans">
              {["all", "art", "business", "design"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="px-8 py-3 data-[state=active]:bg-yellow-400 border border-black  font-sans font-bold data-[state=active]:text-black transition-all duration-300"
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="all">
            <CourseSection courses={allCourses} />
          </TabsContent>
          <TabsContent value="art">
            <CourseSection courses={courses.art} />
          </TabsContent>
          <TabsContent value="business">
            <CourseSection courses={courses.business} />
          </TabsContent>
          <TabsContent value="design">
            <CourseSection courses={courses.design} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseCatalog;
