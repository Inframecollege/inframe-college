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

const category = {
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
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        "B.VOC in Fine Arts",
        "1 Year Diploma in Painting",
        "3 Year Diploma in Fine Arts",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1673514503009-912ffc6ff956?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "/fetchpik.com-HAfwcPu9n1.jpg",
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
  ],
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Helper function to format course titles for URLs based on your working examples
// const formatCourseSlug = (title: string): string => {
//   const slugMap: { [key: string]: string } = {
//     "Interior Design": "interior-design",
//     "Fashion Design": "fashion-design", 
//     "Graphic Design": "graphic-design",
//     "UIUX-Design": "uiux-design",
//     "Animation-VFX": "animation-vfx",
//     "Jewellery Design": "jewellery-design",
//     "Fine Arts": "fine-arts",
//     "Digital Marketing": "digital-marketing",
//     "Entrepreneurship Skill": "entrepreneurship-skill",
//     "Media-Entertainment": "media-entertainment"
//   };

//   return slugMap[title] || title.replace(/\s+/g, "-").toLowerCase();
// };

// // Fixed getDegreeType function that matches your working URLs
// const getDegreeType = (programText: string, courseTitle: string): string => {
//   const courseSlug = formatCourseSlug(courseTitle);

//   // Extract the degree type from program text
//   if (programText.includes("B. Des")) {
//     return `bdes-in-${courseSlug}`;
//   } else if (programText.includes("B.VOC")) {
//     return `bvoc-in-${courseSlug}`;
//   } else if (programText.includes("B.SC")) {
//     return `bsc-in-${courseSlug}`;
//   } else if (programText.includes("1 Year Diploma")) {
//     return `one-year-diploma-in-${courseSlug}`;
//   } else if (programText.includes("2 Year Diploma")) {
//     return `two-year-diploma-in-${courseSlug}`;
//   } else if (programText.includes("3 Year Diploma")) {
//     return `three-year-diploma-in-${courseSlug}`;
//   } else if (programText.includes("6 Month Certificate")) {
//     return `six-month-certificate-course-in-${courseSlug}`;
//   }

//   // Fallback
//   return `program-in-${courseSlug}`;
// };

const formatCourseSlug = (title: string): string => {
  const slugMap: { [key: string]: string } = {
    "Interior Design": "interior-design",
    "Fashion Design": "fashion-design",
    "Graphic Design": "graphic-design",
    "UIUX-Design": "uiux-design", // folder slug stays uiux-design
    "Animation-VFX": "animation-vfx",
    "Jewellery Design": "jewellery-design",
    "Fine Arts": "fine-arts",
    "Digital Marketing": "digital-marketing",
    "Entrepreneurship Skill": "entrepreneurship-skill",
    "Media-Entertainment": "media-entertainment"
  };

  return slugMap[title] || title.replace(/\s+/g, "-").toLowerCase();
};

const getDegreeType = (programText: string, courseTitle: string): string => {
  // SPECIAL CASE: Animation-VFX needs "animation-and-vfx"
  let programCourseSlug =
    courseTitle === "Animation-VFX"
      ? "animation-and-vfx"
      : courseTitle === "UIUX-Design" ? "ui-ux-design"
        : courseTitle === 'Media-Entertainment' ? 'media-and-entertainment'
          : formatCourseSlug(courseTitle)


  if (programText.includes("B. Des")) {
    return `bdes-in-${programCourseSlug}`;
  } else if (programText.includes("B.VOC")) {
    return `bvoc-in-${programCourseSlug}`;
  } else if (programText.includes("B.SC")) {
    return `bsc-in-${programCourseSlug}`;
  } else if (programText.includes("1 Year Diploma")) {
    return `one-year-diploma-in-${programCourseSlug}`;
  } else if (programText.includes("2 Year Diploma")) {
    return `two-year-diploma-in-${programCourseSlug}`;
  } else if (programText.includes("3 Year Diploma")) {
    return `three-year-diploma-in-${programCourseSlug}`;
  } else if (programText.includes("6 Month Certificate")) {
    return `six-month-certificate-course-in-${programCourseSlug}`;
  }

  return `program-in-${programCourseSlug}`;
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
                <Link
                  className="hover:text-blue-500 hover:underline"
                  href={`/${formatCourseSlug(course.title)}/${getDegreeType(program, course.title)}`}
                >
                  <span className="text-yellow-400 mr-2 text-lg leading-none">
                    •
                  </span>
                  {program}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={`/${formatCourseSlug(course.title)}`}
            className="block mt-6"
            scroll={false}
          >
            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black flex items-center justify-center space-x-2 px-5 py-3 rounded-md">
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
  const allCourses = [
    ...category.design,
    ...category.art,
    ...category.business,
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-yellow-50 to-white ${poppins.className}`}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="text-left mb-12">
          <h1 className="text-4xl md:text-5xl my-10 font-bold mb-4 text-gray-800">
            Our Industry-Centered Programs
          </h1>
          <div className="w-24 h-1 bg-yellow-400 rounded-full" />
        </div>
        <Tabs defaultValue="all" className="w-full">
          <div className="p-2 mb-12">
            <TabsList className="flex flex-wrap justify-center sm:justify-start my-3 rounded-lg gap-2 font-bold text-black font-sans">
              {["all", "art", "business", "design"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="px-8 py-3 data-[state=active]:bg-yellow-400 border border-black font-sans font-bold data-[state=active]:text-black transition-all duration-300"
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
            <CourseSection courses={category.art} />
          </TabsContent>
          <TabsContent value="business">
            <CourseSection courses={category.business} />
          </TabsContent>
          <TabsContent value="design">
            <CourseSection courses={category.design} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseCatalog;