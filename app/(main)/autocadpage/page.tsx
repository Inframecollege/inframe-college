"use client"
import { useState } from "react";
import { Poppins } from "next/font/google";
import { CurriculumType, SoftwareType, WhatLearn, VideosType, categoryHeroImages } from "../../../utils/courseTypes";
import CourseHero from "../../../components/courseDetails/courseDetails";
import ComboPack from "../../../components/courseDetails/ComboPack";
import CourseFeatures from "../../../components/courseDetails/courseFeature";
import Customizecourse from "../../../components/courseDetails/CustomizePack";
import WhyChooseUs from "../../../components/courseDetails/WhyChooseUs";
function CourseContent() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <div className="bg-white text-black mt-20">
            <CourseHero />
            <ComboPack />
            <CourseFeatures />
            <Customizecourse />
            <WhyChooseUs />
        </div>
    );
}

export default CourseContent;
