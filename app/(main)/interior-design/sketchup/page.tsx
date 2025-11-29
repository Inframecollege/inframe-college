// "use client"
// import { useEffect } from "react";
import ComboPack from "../../../../components/courseDetails/ComboPack";
import CourseHero from "../../../../components/courseDetails/courseDetails";
import CourseFeatures from "../../../../components/courseDetails/courseFeature";
import CustomizeCourse from "../../../../components/courseDetails/CustomizePack";
// import Customizecourse from "../../../../components/courseDetails/CustomizePack";
import WhyChooseUs from "../../../../components/courseDetails/WhyChooseUs";
import PageClient from "../../../../components/demometa";
import DreamsSection from "../../../../components/DreamSection";
import FAQSection from "../../../professional-online-courses/components/faq";

export const metadata = {
    title: "Sketchup Course | Inframe School",
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
      const graphicDesignSoftware = [
    { id: "1", name: "Adobe Photoshop", price: 1999, category: "design" },
    { id: "2", name: "Adobe Illustrator", price: 1999, category: "design" },
    { id: "3", name: "Figma", price: 1499, category: "ui-ux" },
    { id: "4", name: "Canva Pro", price: 999, category: "design" },
    { id: "5", name: "Adobe InDesign", price: 1799, category: "publishing" },
    { id: "6", name: "CorelDRAW", price: 1599, category: "design" }
  ]
    return (
        <div className="bg-white text-black mt-20">
            <CourseHero price="1499" />
            {/* <div className="w-44 mb-10 h-1 bg-gray-500 mx-auto rounded-full"></div> */}

            <ComboPack />
            {/* <div className="w-44 mb-10 h-1 bg-gray-500 mx-auto rounded-full"></div> */}

            <CourseFeatures />
            {/* <div className="w-44 mb-10 h-1 bg-gray-500 mx-auto rounded-full"></div> */}
            {/* < DreamsSection /> */}

            <CustomizeCourse
                courseTitle="Graphic Design"
                availableSoftware={graphicDesignSoftware}
            />        
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