import React from "react";
// import CategoryLandingPage from "../../../components/Courses/CategoryLandingPage"
import { courseTypes } from "../../../utils/courseTypes"
import CoursePage from "../../../components/Courses/CoursePage";



type ParamsType = { category: string }




export async function generateMetadata({ params }: { params: { category: string } })  {
  const { category } = await params;
  const categoryLower = category.toLowerCase();
  const categoryData = courseTypes[categoryLower];

  if (!categoryData || !Array.isArray(categoryData) || categoryData.length === 0) {
    return {
      title: "Courses | Inframe School of Art & Design",
      description: "Explore our courses and find the perfect fit for you.",
    };
  }

  // If metadata is stored separately, adjust how you retrieve it
  const metaInfo = categoryData[0]; // Assuming metadata is stored in the first object

  return {
    title: metaInfo.metaTitle || `${params.category} Courses`,
    description: metaInfo.metaDescription || `Browse our ${params.category} courses`,

  };
}



export default async function CategoryPage({
  params,
}: {
  params: ParamsType;
}) {
  const { category } = await params;
  const categoryLower = category.toLowerCase();

  
  
  const categoryCourses = courseTypes[categoryLower];

  
  
  
  
  return <CoursePage courseType={categoryCourses} category={categoryLower} />;
}
