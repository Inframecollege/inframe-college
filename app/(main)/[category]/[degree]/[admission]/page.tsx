// app/(your-app-path)/[category]/[process]/page.tsx
import { notFound } from "next/navigation";
import { courseTypes } from "../../../../../utils/courseTypes";

type ParamsType = { 
  category: string; 
  process: string; 
};

export default async function AdmissionProcessPage({ params }: { params: ParamsType }) {
  const { category, process } = params;
  const categoryLower = category.toLowerCase();

  if (!courseTypes[categoryLower]) {
    return notFound();
  }

  const categoryProcesses = courseTypes[categoryLower];
  const selectedProcessIndex = categoryProcesses.findIndex((item) => item.value === process);

  if (selectedProcessIndex === -1) {
    return notFound();
  }

  return;
}
