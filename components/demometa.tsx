"use client";

import { useState } from "react";
import CourseHero from "./courseDetails/courseDetails";
import ComboPack from "./courseDetails/ComboPack";
import CourseFeatures from "./courseDetails/courseFeature";
import Customizecourse from "./courseDetails/CustomizePack";
import WhyChooseUs from "./courseDetails/WhyChooseUs";

export default function PageClient() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <div className="bg-white text-black mt-20">
            <CourseHero price="1499" />
            <ComboPack />
            <CourseFeatures />
            <Customizecourse />
            <WhyChooseUs />
        </div>
    );
}
