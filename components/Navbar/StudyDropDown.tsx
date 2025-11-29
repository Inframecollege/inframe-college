"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { Search, ChevronDown, X, GraduationCap, Sparkles } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import Link from "next/link"
import { categories } from "../../utils/constant"
import { Poppins } from "next/font/google"
import { FaArrowRight } from "react-icons/fa"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const allCategories = ["All", "Art", "Design", "Business"]

const StudyDropDown = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev)
  const handleLinkClick = () => setIsDropdownOpen(false)

  // Detect mobile screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleOutsideClick)
    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [])

  // Filtered categories - flatten when specific category is selected
  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") {
      return categories.map(category => ({
        ...category,
        items: category.items.filter(item =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.items.length > 0)
    } else {
      // Flatten all items from the selected category
      const allItems = categories
        .flatMap(category => category.items)
        .filter(item =>
          item.category === selectedCategory &&
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      return [{ title: selectedCategory, items: allItems }]
    }
  }, [selectedCategory, searchQuery])

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Enhanced Toggle Button */}
      <Button
        className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 hover:from-yellow-500 hover:via-amber-500 hover:to-orange-500 text-black font-bold px-6 py-2 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-yellow-400"
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
      >
        Study Programs
        <ChevronDown
          className={`h-4 w-4 ml-2 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
        />
      </Button>

      {/* Desktop Dropdown */}
      {!isMobile && isDropdownOpen && (
        <div className="absolute left-0 mt-3 z-50 w-screen max-w-[1200px] bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-100 p-8 max-h-[85vh] overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-300">
          <DropdownContent
            allCategories={allCategories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filteredItems={filteredItems}
            handleLinkClick={handleLinkClick}
          />
        </div>
      )}

      {/* Mobile Fullscreen Drawer */}
      {isMobile && isDropdownOpen && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-white to-gray-50 flex flex-col h-screen overflow-hidden animate-in slide-in-from-top duration-300">
          <div className="flex justify-between items-center p-6 border-b bg-white/80 backdrop-blur-sm shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-400 rounded-lg">
                <GraduationCap className="h-6 w-6 text-black" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Study Programs</h2>
                <p className="text-sm text-gray-600">Explore our courses</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDropdownOpen(false)}
              aria-label="Close"
              className="rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <DropdownContent
              allCategories={allCategories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              filteredItems={filteredItems}
              handleLinkClick={handleLinkClick}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default StudyDropDown

/* --------------------------
 *   Enhanced Dropdown Content
 * -------------------------- */
const DropdownContent = ({
  allCategories,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  filteredItems,
  handleLinkClick,
}: any) => {
  const isFilteredView = selectedCategory !== "All"

  return (
    <>
      {/* Enhanced Search Input */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-6 mb-8">
        <div className="relative flex-1 mb-4 lg:mb-0">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search courses, programs, degrees..."
            className="pl-12 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-yellow-400 rounded-xl bg-gray-50/50 focus:bg-white transition-all duration-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Results Counter */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Sparkles className="h-4 w-4 text-yellow-500" />
          <span>
            {filteredItems.reduce((total: number, cat: any) => total + cat.items.length, 0)}
            programs found
          </span>
        </div>
      </div>

      {/* Enhanced Category Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {allCategories.map((category: string) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="lg"
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-6 py-2 font-semibold transition-all duration-300 ${selectedCategory === category
              ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg border-yellow-300"
              : "border-2 border-gray-200 hover:border-yellow-300 hover:bg-yellow-50 text-gray-700"
              }`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Dynamic Grid Layout */}
      {isFilteredView ? (
        /* HORIZONTAL LAYOUT for specific categories */
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredItems[0]?.items.map((item: any) => {
            const mainLink = `/${item.title.replace(/\s+/g, "-").toLowerCase()}`
            return (
              <div
                key={item.title}
                className="group rounded-2xl border-2 border-gray-100 bg-white p-6 hover:border-yellow-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Course Header */}
                <Link href={mainLink} onClick={handleLinkClick} className="block mb-4">
                  <h4 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-yellow-600 transition-colors duration-300 mb-3">
                    {item.title}
                  </h4>
                </Link>

                {/* Program Links - Show all in horizontal layout */}
                <div className="space-y-3 mb-6 flex-1">
                  {item.links.map((link: any, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 group/link">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0 group-hover/link:scale-125 transition-transform duration-300" />
                      <Link
                        className="text-sm text-gray-700 hover:text-yellow-600 hover:underline transition-colors duration-300 font-medium flex-1"
                        href={`${mainLink}/${link.text
                          .replace(/\s+/g, "-")
                          .replace(/\./g, "")
                          .toLowerCase()}`}
                        onClick={handleLinkClick}
                      >
                        {link.text}
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Explore Button */}
                <Link href={mainLink} onClick={handleLinkClick} className="block mt-auto">
                  <Button
                    className={`w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold flex items-center justify-center space-x-2 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${poppins.className}`}
                  >
                    <span>Explore Now</span>
                    <FaArrowRight className="text-black group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            )
          })}
        </div>
      ) : (
        /* VERTICAL LAYOUT for "All" category */
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredItems.map((category: any) => (
            <div key={category.title} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-2 border-b border-gray-100">
                <div className="p-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                <span className="ml-auto px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                  {category.items.length}
                </span>
              </div>

              {/* Course Items */}
              <div className="space-y-4">
                {category.items.map((item: any) => {
                  const mainLink = `/${item.title.replace(/\s+/g, "-").toLowerCase()}`
                  return (
                    <div
                      key={item.title}
                      className="group rounded-2xl border-2 border-gray-100 bg-white p-6 hover:border-yellow-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                    >
                      <div className="space-y-4">
                        {/* Course Header */}
                        <Link href={mainLink} onClick={handleLinkClick} className="block">
                          <h4 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-yellow-600 transition-colors duration-300">
                            {item.title}
                          </h4>
                        </Link>

                        {/* Program Links - Limited to 4 in vertical layout */}
                        <div className="space-y-3">
                          {item.links.slice(0, 4).map((link: any, idx: number) => (
                            <div key={idx} className="flex items-center gap-3 group/link">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0 group-hover/link:scale-125 transition-transform duration-300" />
                              <Link
                                className="text-sm text-gray-700 hover:text-yellow-600 hover:underline transition-colors duration-300 font-medium flex-1"
                                href={`${mainLink}/${link.text
                                  .replace(/\s+/g, "-")
                                  .replace(/\./g, "")
                                  .toLowerCase()}`}
                                onClick={handleLinkClick}
                              >
                                {link.text}
                              </Link>
                            </div>
                          ))}
                          {item.links.length > 4 && (
                            <div className="text-xs text-yellow-600 font-medium mt-2 text-center">
                              +{item.links.length - 4} more programs
                            </div>
                          )}
                        </div>

                        {/* Explore Button */}
                        <Link href={mainLink} onClick={handleLinkClick} className="block pt-2">
                          <Button
                            className={`w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold flex items-center justify-center space-x-2 px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm ${poppins.className}`}
                          >
                            <span>Explore</span>
                            <FaArrowRight className="text-black group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results State */}
      {filteredItems.length === 0 || filteredItems.every((cat: any) => cat.items.length === 0) && (
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <Search className="h-10 w-10 text-gray-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No programs found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search or filter criteria
          </p>
          <Button
            onClick={() => {
              setSearchQuery("")
              setSelectedCategory("All")
            }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-8 py-3 rounded-full"
          >
            Reset Filters
          </Button>
        </div>
      )}
    </>
  )
}