// "use client"
import PageClient from "../../../components/demometa";

export const metadata = {
  title: "UI/UX Design Course | Inframe School",
  description: "Learn user experience and interface design with real projects.",
};
function CourseContent() {
  // const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="bg-white text-black mt-20">
      <PageClient />
      {/* <ComboPack />
      <CourseFeatures />
      <Customizecourse />
      <WhyChooseUs /> */}
    </div>
  );
}

export default CourseContent;