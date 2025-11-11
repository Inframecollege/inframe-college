"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { Search, ChevronDown, X } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import Link from "next/link"
import { categories } from "../../utils/constant"
import { Poppins } from "next/font/google"
import { FaArrowRight } from "react-icons/fa"
import Image from "next/image"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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

  // Filtered categories
  const filteredCategories = useMemo(() => {
    return categories
      .map((category) => ({
        ...category,
        items: category.items.filter((item) => {
          const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
          const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
          return matchesCategory && matchesSearch
        }),
      }))
      .filter((category) => category.items.length > 0)
  }, [selectedCategory, searchQuery])

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle Button */}
      <Button
        className="bg-yellow-300 hover:bg-yellow-500 text-black font-bold"
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
      >
        Study
        <ChevronDown
          className={`h-4 w-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
        />
      </Button>

      {/* Dropdown (Desktop) */}
      {!isMobile && isDropdownOpen && (
        <div className="absolute left-0 mt-2 z-50 w-screen max-w-[1200px] bg-white shadow-xl rounded-md p-7 max-h-[80vh] overflow-y-auto">
          <DropdownContent
            allCategories={allCategories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filteredCategories={filteredCategories}
            handleLinkClick={handleLinkClick}
          />
        </div>
      )}

      {/* Mobile Fullscreen Drawer */}
      {isMobile && isDropdownOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col h-screen overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b shadow-sm">
            <h2 className="text-lg font-semibold">Study</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDropdownOpen(false)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <DropdownContent
              allCategories={allCategories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              filteredCategories={filteredCategories}
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
 *   Extracted Content UI
 * -------------------------- */
const DropdownContent = ({
  allCategories,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  filteredCategories,
  handleLinkClick,
}: any) => (
  <>
    {/* Search Input */}
    <div className="flex flex-col lg:flex-row lg:gap-4 mb-6">
      <div className="relative flex-1 mb-4 lg:mb-0">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search courses..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>

    {/* Category Buttons */}
    <div className="flex flex-wrap gap-2 mb-6">
      {allCategories.map((category: string) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>

    {/* Grid of Items */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCategories.map((category: any) => (
        <div key={category.title} className="space-y-4">
          <h3 className="text-lg font-semibold">{category.title}</h3>
          <div className="space-y-4">
            {category.items.map((item: any) => {
              const mainLink = `/${item.title.replace(/\s+/g, "-").toLowerCase()}`
              return (
                <div
                  key={item.title}
                  className="group rounded-lg border p-4 hover:bg-muted transition-colors"
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={96}
                      height={96}
                      className="w-full sm:w-24 sm:h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <Link href={mainLink} onClick={handleLinkClick}>
                        <h4 className="text-sm font-medium leading-none mb-2 hover:underline">
                          {item.title}
                        </h4>
                      </Link>
                      <div className="text-sm text-muted-foreground mb-2">
                        {item.links.map((link: any, idx: number) => (
                          <p key={idx} className="mb-1">
                            <Link
                              className="hover:text-blue-500 hover:underline"
                              href={`${mainLink}/${link.text
                                .replace(/\s+/g, "-")
                                .replace(/\./g, "")
                                .toLowerCase()}`}
                              onClick={handleLinkClick}
                            >
                              {link.text}
                            </Link>
                          </p>
                        ))}
                      </div>
                      <Link href={mainLink} onClick={handleLinkClick}>
                        <Button
                          className={`my-3 bg-yellow-400 hover:bg-yellow-500 text-black flex items-center space-x-2 px-5 py-3 rounded-md ${poppins.className}`}
                        >
                          <span>Explore Now</span>
                          <FaArrowRight className="text-black" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  </>
)
  