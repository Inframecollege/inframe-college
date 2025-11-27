import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { IoInfinite } from "react-icons/io5";
import { MdPayments } from "react-icons/md";
import { MdMoreTime } from "react-icons/md";
import { RiEnglishInput } from "react-icons/ri";
import { SlCamrecorder } from "react-icons/sl";

export default function CourseFeatures() {
    let data = [
        {
            title: "Anyone",
            description: "Can learn (IT/Non IT)",
            icon: <FaUserAlt />,
        },
        { title: "4.9+", description: "Course Rating", icon: <FaStarHalfAlt /> },
        { title: "90000", description: "Learners", icon: <MdPeopleAlt /> },
        { title: "Lifetime", description: "Course Access", icon: <IoInfinite /> },
        { title: "1 time", description: "Payment", icon: <MdPayments /> },
        { title: "32Hrs", description: "Content Duration", icon: <MdMoreTime /> },
        {
            title: "Simple English",
            description: "Language",
            icon: <RiEnglishInput />,
        },
        {
            title: "Self Paced",
            description: "Recorded lectures",
            icon: <SlCamrecorder />,
        },
    ];
    return (
        <div className="w-[100%]  py-[10px] lg:p-0">
            <div className="max-w-7xl p-3 lg:p-0 mx-auto lg:my-[60px] my-[30px]">
                <h3 className="text-center lg:text-[40px] text-[30px] text-gray-800 mb-5 font-semibold">
                    Designing Course <span className="text-amber-400">Features</span>
                </h3>
                <div className="border-[2px] border-gray-300 rounded-xl grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 p-5">
                    {data.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="w-[100%] grid grid-cols-[15%_auto] gap-2 items-center lg:my-8 my-4"
                            >
                                <p className="text-[25px] text-amber-400 border-[2px] border-amber-400 flex justify-center rounded-full py-[10px] px-[10px]">
                                    {item.icon}
                                </p>
                                <div className="">
                                    <h4 className="text-[22px] text-gray-900 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-700">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
