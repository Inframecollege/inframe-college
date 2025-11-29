"use client"

import { useState } from "react"

interface Software {
    id: string
    name: string
    price: number
    category: string
}

interface CoursePackProps {
    courseTitle: string
    availableSoftware: Software[]
}

interface CoursePackage {
    id: string
    title: string
    tag: string
    description: string
    refundPeriod: string
    originalPrice: number
    discountedPrice: number
    discountPercentage: number
    buttonText: string
    type: 'custom' | 'all-access'
}

export default function CustomizeCourse({ courseTitle, availableSoftware }: CoursePackProps) {
    const [selectedSoftware, setSelectedSoftware] = useState<string[]>([])
    const [showCustomizeModal, setShowCustomizeModal] = useState(false)

    const coursePackages: CoursePackage[] = [
        {
            id: "1",
            title: "Customized course Pack",
            tag: "New",
            description: "Choose Any 4 or 4+ Courses",
            refundPeriod: "1 year",
            originalPrice: 2796,
            discountedPrice: 1499,
            discountPercentage: 45,
            buttonText: "Customize Now",
            type: 'custom'
        },
        // {
        //     id: "2",
        //     title: "All Access course Pack",
        //     tag: "Popular",
        //     description: "Access All Software Tools",
        //     refundPeriod: "Lifetime",
        //     originalPrice: 31455,
        //     discountedPrice: 3999,
        //     discountPercentage: 85,
        //     buttonText: "Know More",
        //     type: 'all-access'
        // }
    ]

    const toggleSoftware = (softwareId: string) => {
        setSelectedSoftware(prev =>
            prev.includes(softwareId)
                ? prev.filter(id => id !== softwareId)
                : [...prev, softwareId]
        )
    }

    const calculateTotalPrice = () => {
        return selectedSoftware.reduce((total, softwareId) => {
            const software = availableSoftware.find(s => s.id === softwareId)
            return total + (software?.price || 0)
        }, 0)
    }

    const calculateDiscountPrice = (totalPrice: number) => {
        // Apply 45% discount for custom pack
        return Math.round(totalPrice * 0.55)
    }

    const handleCustomizeClick = () => {
        setShowCustomizeModal(true)
    }

    const handleBuyNow = (pack: CoursePackage) => {
        if (pack.type === 'custom') {
            setShowCustomizeModal(true)
        } else {
            // Handle all-access pack purchase
            console.log("Purchasing all-access pack")
        }
    }
    const coursePackage: CoursePackage = {
        id: "1",
        title: "Customized Course Pack",
        tag: "New",
        description: "Choose Any Courses (2, 3, 4 or more)",
        refundPeriod: "1 year",
        originalPrice: 2796,
        discountedPrice: 1499,
        discountPercentage: 45,
        buttonText: "Customize Now",
        type: 'custom'
    };

return (
    <>
        <div className="max-w-6xl mx-auto lg:p-1">
            {/* Enhanced Main Card */}
            <div className='
                border-2 border-gray-200 rounded-3xl px-6 py-8 shadow-lg 
                hover:shadow-2xl transition-all duration-500 bg-white
                transform hover:-translate-y-1 relative overflow-hidden
                group
            '>
                {/* Animated Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 via-yellow-50/0 to-orange-50/0 group-hover:from-amber-50/30 group-hover:via-yellow-50/20 group-hover:to-orange-50/10 transition-all duration-700 rounded-3xl"></div>
                
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-500"></div>
                
                <div className="relative z-10">
                    {/* Header */}
                    <div className='flex justify-between items-center mb-4'>
                        <h3 className='lg:text-2xl text-xl font-bold text-gray-800'>
                            {coursePackage.title}
                        </h3>
                        <span className="px-4 py-1 bg-gradient-to-r from-amber-400 to-orange-400 text-white border border-amber-300 rounded-full text-sm font-semibold shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                            {coursePackage.tag}
                        </span>
                    </div>

                    {/* Description */}
                    <p className='text-amber-600 font-semibold mb-4 flex items-center gap-2'>
                        <span className="text-lg">🎯</span>
                        {coursePackage.description}
                    </p>

                    {/* Enhanced Refund Banner */}
                    <div className="my-4 px-4 py-3 w-full bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 border border-amber-200 rounded-2xl text-sm font-medium text-center shadow-sm transform group-hover:scale-[1.02] transition-transform duration-300">
                        🎁 Avail 100% REFUND in {coursePackage.refundPeriod}
                    </div>

                    {/* Price Section */}
                    <div className='flex flex-col sm:flex-row sm:items-center justify-between mt-6 gap-4'>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className='text-2xl font-bold text-orange-500'>
                                    ₹{coursePackage.discountedPrice.toLocaleString()}
                                </span>
                                <span className='line-through text-gray-500 text-lg'>
                                    ₹{coursePackage.originalPrice.toLocaleString()}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className='text-green-600 font-semibold text-sm'>
                                    You save {coursePackage.discountPercentage}%
                                </span>
                                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-green-500 rounded-full transition-all duration-1000"
                                        style={{ width: `${coursePackage.discountPercentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => handleBuyNow(coursePackage)}
                            className='
                                bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 
                                font-semibold text-white px-6 py-3 rounded-xl transition-all duration-300 
                                hover:scale-105 shadow-lg hover:shadow-xl transform
                                min-w-[140px]
                            '
                        >
                            {coursePackage.buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Enhanced Customize Modal */}
        {showCustomizeModal && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-in fade-in-0 duration-300">
                <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-500 shadow-2xl">
                    {/* Enhanced Header */}
                    <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-amber-50 to-orange-50 sticky top-0">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                    <span className="text-amber-500">✨</span>
                                    Customize Your {courseTitle} Package
                                </h2>
                                <p className="text-gray-600 mt-1">Select the software tools you want to learn</p>
                            </div>
                            <button
                                onClick={() => setShowCustomizeModal(false)}
                                className="text-gray-500 hover:text-gray-700 text-2xl w-10 h-10 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center justify-center hover:scale-110"
                            >
                                ×
                            </button>
                        </div>
                    </div>

                    {/* Enhanced Software Selection */}
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {availableSoftware.map((software, index) => (
                                <div
                                    key={software.id}
                                    onClick={() => toggleSoftware(software.id)}
                                    className={`
                                        border-2 rounded-2xl p-4 cursor-pointer transition-all duration-300 transform
                                        hover:scale-105 hover:shadow-lg animate-in fade-in-0
                                        ${selectedSoftware.includes(software.id)
                                            ? 'border-amber-400 bg-gradient-to-br from-amber-50 to-yellow-50 shadow-md'
                                            : 'border-gray-200 hover:border-amber-300 bg-white'
                                        }
                                    `}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-800 mb-1">{software.name}</h3>
                                            <p className="text-sm text-gray-600 capitalize bg-gray-100 px-2 py-1 rounded-full inline-block">
                                                {software.category}
                                            </p>
                                        </div>
                                        <div className="text-right flex items-center gap-3">
                                            <div className="text-lg font-bold text-amber-600">
                                                ₹{software.price.toLocaleString()}
                                            </div>
                                            <div className={`
                                                w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300
                                                ${selectedSoftware.includes(software.id)
                                                    ? 'bg-amber-400 border-amber-400 shadow-inner scale-110'
                                                    : 'border-gray-300 bg-white'
                                                }
                                            `}>
                                                {selectedSoftware.includes(software.id) && (
                                                    <span className="text-white text-sm font-bold animate-in zoom-in-50">✓</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Enhanced Price Summary */}
                        <div className="bg-gradient-to-r from-gray-50 to-amber-50 rounded-2xl p-6 mb-6 border border-amber-100 animate-in fade-in-0 duration-500">
                            <h3 className="font-bold text-lg mb-4 text-gray-800 flex items-center gap-2">
                                <span>💰</span>
                                Price Summary
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between text-gray-600">
                                    <span>Selected Software ({selectedSoftware.length})</span>
                                    <span className="font-semibold">₹{calculateTotalPrice().toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Discount (45%)</span>
                                    <span className="text-green-600 font-semibold">
                                        -₹{(calculateTotalPrice() - calculateDiscountPrice(calculateTotalPrice())).toLocaleString()}
                                    </span>
                                </div>
                                <div className="border-t border-amber-200 pt-3 flex justify-between text-lg font-bold">
                                    <span className="text-gray-800">Final Price</span>
                                    <span className="text-orange-500 text-xl">
                                        ₹{calculateDiscountPrice(calculateTotalPrice()).toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setShowCustomizeModal(false)}
                                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    console.log("Selected software:", selectedSoftware)
                                    console.log("Total price:", calculateDiscountPrice(calculateTotalPrice()))
                                    setShowCustomizeModal(false)
                                }}
                                disabled={selectedSoftware.length === 0}
                                className={`
                                    flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300
                                    ${selectedSoftware.length === 0
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white hover:scale-105 shadow-lg'
                                    }
                                `}
                            >
                                Pay ₹{calculateDiscountPrice(calculateTotalPrice()).toLocaleString()}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
);