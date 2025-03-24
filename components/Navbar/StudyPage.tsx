"use client";

import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { categories } from "../../utils/constant";
import { Poppins } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const StudyPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const allCategories = ["All", "Art", "Design", "Business"];

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      items: category.items.filter((item) => {
        const matchesCategory =
          selectedCategory === "All" || item.category === selectedCategory;
        const matchesSearch = item.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
      }),
    }))
    .filter((category) => category.items.length > 0);

  interface DegreeMap {
    [key: string]: string;
  }

  const getDegreeType = (text: string): string => {
    const degreeMap: DegreeMap = {
      "B. Des": "bdes",
      "B.VOC": "bvoc",
      "B.SC": "bsc",
      "1 Year Diploma": "diploma1",
      "3 Year Diploma": "diploma3",
      "2 Year Diploma": "diploma2",
      "6 Month Certificate": "certificate6",
    };

    for (const [key, value] of Object.entries(degreeMap)) {
      if (text.includes(key)) {
        return value;
      }
    }

    return "bdes";
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-100 mt-10 p-4 sm:p-7">
      {/* Search and Filters */}
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
      <div className="flex flex-wrap gap-2 mb-6">
        {allCategories.map((category) => (
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

      {/* Course Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <div key={category.title} className="space-y-4">
            <h3 className="text-lg font-semibold">{category.title}</h3>
            <div className="space-y-4">
              {category.items.map((item) => (
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
                      <Link
                        href={`/${item.title.replace(/\s+/g, "-").toLowerCase()}`}
                        className="block"
                      >
                        <h4 className="text-sm font-medium leading-none mb-2">
                          {item.title}
                        </h4>
                      </Link>
                      <div className="text-sm text-muted-foreground mb-2">
                        {item.links.map((link, index) => (
                          <p key={index} className="mb-1">
                            <Link
                              className="hover:text-blue-500 hover:underline"
                              href={`/${item.title
                                .replace(/\s+/g, "-")
                                .toLowerCase()}/${getDegreeType(link.text)}`}
                            >
                              {link.text}
                            </Link>
                          </p>
                        ))}
                      </div>
                      <Link
                        href={`/${item.title.replace(/\s+/g, "-").toLowerCase()}`}
                        className="block"
                      >
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
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyPage;
