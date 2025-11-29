// "use client"
// import { useEffect } from "react";
import ComboPack from "../../../../components/courseDetails/ComboPack";
import CourseHero from "../../../../components/courseDetails/courseDetails";
import CourseFeatures from "../../../../components/courseDetails/courseFeature";
import Customizecourse from "../../../../components/courseDetails/CustomizePack";
import WhyChooseUs from "../../../../components/courseDetails/WhyChooseUs";
import PageClient from "../../../../components/demometa";
import DreamsSection from "../../../../components/DreamSection";
import FAQSection from "../../../professional-online-courses/components/faq";

export const metadata = {
  title: "AutoCad Course | Inframe School",
  description: "Learn user experience and interface design with real projects.",
};

function CourseContent() {
  // const [isFormOpen, setIsFormOpen] = useState(false);
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://checkout.razorpay.com/v1/checkout.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  // }, []);
  return (
    <div className="bg-white text-black mt-20">
      <CourseHero price="1499" />
      {/* <div className="w-44 mb-10 h-1 bg-gray-500 mx-auto rounded-full"></div> */}

      <ComboPack />
      {/* <div className="w-44 mb-10 h-1 bg-gray-500 mx-auto rounded-full"></div> */}

      <CourseFeatures />
      {/* <div className="w-44 mb-10 h-1 bg-gray-500 mx-auto rounded-full"></div> */}
      {/* < DreamsSection /> */}

      <Customizecourse />
      {/* <div className="w-44 mb-10 h-1 bg-gray-500 mx-auto rounded-full"></div> */}
      < DreamsSection />

      <WhyChooseUs />

      <div className="my-12 sm:my-1 px-4 sm:px-0 lg:px-60">
        <FAQSection />
      </div>
    </div>
  );
}

export default CourseContent;