// app/[category]/page.tsx



import CoursePage from "../../../components/Courses/CoursePage";
import { courseTypes } from "../../../utils/courseTypes";


type ParamsType = Promise<{ category: string }>;

export default async function CategoryPage({
  params,
}: {
  params: ParamsType;
}) {
  const { category } = await params;
  const categoryLower = category.toLowerCase();
  console.log(category);
  
  
  const categoryCourses = courseTypes[categoryLower];
  console.log(categoryCourses);
  
  
  
  
  return <CoursePage courseType={categoryCourses} category={categoryLower} />;
}

// Generate metadata
export async function generateMetadata({ params }: { params: ParamsType }) {
  const { category } = await params;
  return {
    title: `${category} Courses`,
    description: `Browse our ${category} courses`,
  };
}

export async function generateStaticParams() {
  return Object.keys(courseTypes).map((category) => ({
    category,
  }));
}