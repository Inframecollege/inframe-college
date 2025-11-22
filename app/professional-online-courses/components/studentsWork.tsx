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
            <div className="p-4 w-full">
                {/* Title */}
                <h2 className="text-center text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-center text-gray-600 max-w-full mx-auto text-base sm:text-lg mb-6 leading-relaxed">
                    {description}
                    <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-gray-900 to-gray-700"></div>
                </p>

                {/* Optional little underline accent */}
                {/* GRID GALLERY */}
                <div
                    className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                >
                    {images.map((src, idx) => (
                        <div
                            key={idx}
                            className="relative h-36 sm:h-40 md:h-48 
                       overflow-hidden rounded-xl shadow-md 
                       cursor-pointer hover:scale-105 hover:shadow-xl
                       border border-gray-200 transition-all duration-300"
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

            {/* MODAL */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-3 backdrop-blur-sm"
                    onClick={closeImage}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-yellow-400 
                     bg-black/50 rounded-full w-10 h-10 flex items-center justify-center 
                     hover:bg-black/70 transition-all duration-200 z-10"
                        onClick={(e) => {
                            e.stopPropagation();
                            closeImage();
                        }}
                    >
                        ×
                    </button>

                    <div
                        className="relative max-w-4xl max-h-[85vh] w-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage}
                            alt="Enlarged view"
                            width={1200}
                            height={800}
                            className="object-contain rounded-lg shadow-2xl border border-white/10"
                        />

                        
                    </div>

                    
                </div>
            )}
        </>
    );

}

export default StudentsWork;
