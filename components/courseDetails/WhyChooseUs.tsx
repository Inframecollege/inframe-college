
'use client'
import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";
import { FaUserGraduate } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";



export default function WhyChooseUs() {
    let data = [
        { title: 'Placement Guaranteed', icon: <TiStarFullOutline />, para: '100% Written Guaranteed Placement' },
        { title: 'In Jodhpur', icon: <FaUserGraduate />, para: '100% Placement from Inframe from Jodhpur' },
        { title: 'Mentorship support', icon: <FaHandshake />, para: 'Best Mentorship' },
        { title: 'Internship opportunity', icon: <FaLaptop />, para: 'Industry tie-ups for Best Internship' },
        { title: 'Scholarship facility', icon: <FaMoneyBillAlt />, para: 'Scholarship for all students' },
        { title: 'Flexible Timing', icon: <MdOutlineAccessTimeFilled />, para: 'Timings for Classes are Flexible as per choice' },
    ]
    return (
        <div className="w-[100%] py-[0px]">
            <div className='max-w-7xl grid lg:grid-cols-[30%_auto] grid-cols-1 items-center lg:gap-[50px] mx-auto lg:my-[80px] my-[30px] lg:p-0 p-3 '>
                <div className=' rounded-[15px]  w-[100%] h-[85%] shadow-xl'>
                    <img className='w-[100%] h-[100%] object-cover' src="https://www.inframeschool.com/_next/image?url=%2Fimages%2Fgallery%2F1721366034581.jpg&w=1080&q=75" alt="" />
                </div>
                <div>
                    <h3 className='text-center lg:text-[40px] text-[30px] text-gray-800 mb-5 font-semibold'>Why People Choose <span className='text-amber-400'> US</span></h3>
                    <p className='lg:text-center text-justify text-[17px] font-semibold'>At Inframe, we are committed to providing a transformative learning experience that blends industry expertise with hands-on opportunities. Our comprehensive approach ensures that students not only receive the best education but also gain the real-world experience needed to thrive in a competitive market.</p>
                    <div className='grid sm:grid-cols-2 grid-cols-1 items-center gap-x-5 my-[45px]'>
                        {data.map((item, index) => {
                            return (
                                <div key={index} className='flex items-center gap-4 mb-[35px] shadow-2xl border-0 border-gray-600 px-4 py-7 rounded-[15px]'>
                                    <p className='text-[30px] text-amber-400'>{item.icon}</p>
                                    <div>
                                        <h3 className='text-gray-800 text-[20px] mb-2 font-semibold'>{item.title}</h3>
                                        <p className='text-gray-700'>{item.para}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}