
import CategoryLandingPage from "../../../components/Courses/CategoryLandingPage"
import { courseTypes } from "../../../utils/courseTypes"



type ParamsType = { category: string }

export default async function CategoryPage({ params }: { params: ParamsType }) {
  const { category } = params
  const categoryLower = category.toLowerCase()

  // Ensure only valid categories are included
  if (!courseTypes[categoryLower]) {
    return <div>Category not found</div>
  }

  const categoryCourses = courseTypes[categoryLower]

  return <CategoryLandingPage category={categoryLower} courses={categoryCourses} />
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: ParamsType }) {
  const { category } = await params;
  return {
    title: `${category} Courses`,
    description: `Browse our ${category} courses`,
  };
}


// Generate Static Paths for Dynamic Routing
export async function generateStaticParams() {
  return Object.keys(courseTypes).map((category) => ({
    category,
  }))
}

