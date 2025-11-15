"use client";
import React, { useState } from "react";
import Image from "next/image";

interface StudentsWorkProps {
    images: string[];
    title?: string;
}

function StudentsWork({
    images,
    title = "Students' Work Showcase",
    description = "Explore the creativity and excellence of our students. Each project reflects hard work, skill, and passion."
}: StudentsWorkProps & { description?: string }) {

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openImage = (src: string) => setSelectedImage(src);
    const closeImage = () => setSelectedImage(null);

    return (
        <>
            <div className="p-10 w-full">
                {/* Title */}
                <h2 className="text-center text-3xl sm:text-6xl font-bold text-gray-900 mb-4">
                    {title}
                </h2>

                {/* ⭐ Description */}
                <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg sm:text-xl mb-8 leading-relaxed">
                    {description}
                </p>

                {/* ⭐ Horizontal Scroll Gallery */}
                <div
                    className="max-w-6xl mx-auto flex gap-4 px-4 overflow-x-auto scrollbar-hide py-4"
                    style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
                >
                    {images.map((src, idx) => (
                        <div
                            key={idx}
                            className="relative min-w-[200px] sm:min-w-[260px] h-40 sm:h-56 
                            overflow-hidden rounded-xl shadow-lg flex-shrink-0 
                            cursor-pointer hover:scale-105 transition-transform duration-300"
                            style={{ scrollSnapAlign: "start" }}
                            onClick={() => openImage(src)}
                        >
                            <Image
                                src={src}
                                alt={`Student Work ${idx + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* ⭐ Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={closeImage}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-yellow-400"
                        onClick={(e) => {
                            e.stopPropagation();
                            closeImage();
                        }}
                    >
                        &times;
                    </button>

                    <div
                        className="relative max-w-4xl max-h-[80vh] w-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage}
                            alt="Enlarged view"
                            width={1200}
                            height={800}
                            className="object-contain rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default StudentsWork;
