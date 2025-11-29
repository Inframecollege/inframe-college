"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ComboPack() {
    let comboData = [
        {
            image: "https://storage.googleapis.com/test694/Images/Main1-svg.webp",
            heading: "Creative Designer Combo pack",
            content: [
                {
                    smallImg: "https://storage.googleapis.com/test694/Images/Icon11.webp",
                    content: "Adobe Illustrator",
                },
                {
                    smallImg: "https://storage.googleapis.com/test694/Images/Icon12.webp",
                    content: "Adobe Photoshop",
                },
                {
                    smallImg: "https://storage.googleapis.com/test694/Images/Icon13.webp",
                    content: "UI/UX",
                },
                {
                    smallImg: "https://storage.googleapis.com/test694/Images/user.webp",
                    content: "UX Research",
                },
            ],
        },
        {
            image: "https://storage.googleapis.com/test694/Images/Main1-svg.webp",
            heading: "Creative Designer Combo pack",
            content: [
                {
                    smallImg: "https://storage.googleapis.com/test694/Images/Icon11.webp",
                    content: "Adobe Illustrator",
                },
                {
                    smallImg: "https://storage.googleapis.com/test694/Images/Icon12.webp",
                    content: "Adobe Photoshop",
                },
                {
                    smallImg: "https://storage.googleapis.com/test694/Images/Icon13.webp",
                    content: "UI/UX",
                },
                {
                    smallImg: "https://storage.googleapis.com/test694/Images/user.webp",
                    content: "UX Research",
                },
            ],
        },
        {
            image: "https://storage.googleapis.com/test694/Images/Main1-svg.webp",
            heading: "Creative Designer Combo pack",
            content: [
                {
                    smallImg: "https://storage.googleapis.com/test694/Images/Icon11.webp",
                    content: "Adobe Illustrator",
                },
                {
                    smallImg: "https://storage.googleapis.com/test694/Images/Icon12.webp",
                    content: "Adobe Photoshop",
                },
                {
                    smallImg: "https://storage.googleapis.com/test694/Images/Icon13.webp",
                    content: "UI/UX",
                },
                {
                    smallImg: "https://storage.googleapis.com/test694/Images/user.webp",
                    content: "UX Research",
                },
            ],
        },
        {
            image: "https://storage.googleapis.com/test694/Images/Main1-svg.webp",
            heading: "Creative Designer Combo pack",
            content: [
                {
                    smallImg: "https://storage.googleapis.com/test694/Images/Icon11.webp",
                    content: "Adobe Illustrator",
                },
                {
                    smallImg: "https://storage.googleapis.com/test694/Images/Icon12.webp",
                    content: "Adobe Photoshop",
                },
                {
                    smallImg: "https://storage.googleapis.com/test694/Images/Icon13.webp",
                    content: "UI/UX",
                },
                {
                    smallImg: "https://storage.googleapis.com/test694/Images/user.webp",
                    content: "UX Research",
                },
            ],
        },
        {
            image: "https://storage.googleapis.com/test694/Images/Main1-svg.webp",
            heading: "Creative Designer Combo pack",
            content: [
                {
                    smallImg: "https://storage.googleapis.com/test694/Images/Icon11.webp",
                    content: "Adobe Illustrator",
                },
                {
                    smallImg: "https://storage.googleapis.com/test694/Images/Icon12.webp",
                    content: "Adobe Photoshop",
                },
                {
                    smallImg: "https://storage.googleapis.com/test694/Images/Icon13.webp",
                    content: "UI/UX",
                },
                {
                    smallImg: "https://storage.googleapis.com/test694/Images/user.webp",
                    content: "UX Research",
                },
            ],
        },
    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // tablets
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640, // mobiles
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full lg:p-0">
            <div className="max-w-7xl p-3 lg:p-0 mx-auto lg:my-[80px] my-[20px]">
                <h3 className="lg:text-[40px] text-[30px] text-gray-800 mb-5 font-semibold">
                    Interested In Our <span className="text-amber-400">Combo Pack ?</span>
                </h3>

                <Slider {...settings}>
                    {comboData.map((item, index) => (
                        <div key={index} className="sm:px-3">
                            <div className="w-full bg-white shadow-lg border border-gray-300 py-6 px-4 rounded-[10px] h-full">
                                <div className="flex gap-5 justify-between border-b border-gray-300 pb-2">
                                    <img
                                        src={item.image}
                                        className="object-contain w-[70px]"
                                        alt=""
                                    />
                                    <h2 className="text-[25px] text-gray-800 ">{item.heading}</h2>
                                </div>

                                <div className="grid grid-cols-2 gap-5 my-[25px]">
                                    {item.content.map((subItem, idx) => (
                                        <div key={idx} className="flex gap-2 items-center">
                                            <img
                                                className="h-[50px] object-cover"
                                                src={subItem.smallImg}
                                                alt=""
                                            />
                                            <p>{subItem.content}</p>
                                        </div>
                                    ))}
                                </div>

                                <p className="py-[10px] px-[15px] border mt-4 rounded-[10px] border-gray-300">
                                    You get a Refund Validity of 2 Years
                                </p>
                                <button className="bg-[#fde047] hover:bg-amber-400 duration-300 w-full font-semibold text-[18px] py-[10px] mt-4 rounded-[10px]">
                                    buy now
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
