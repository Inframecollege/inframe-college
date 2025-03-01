import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Poppins } from "next/font/google"





// Blog card data
const blogPosts = [
  {
    id: "top-5-reasons-to-choose-inframe-school",
    title: "Top 5 Reasons to Choose Inframe School for Your Child's Education",
    excerpt:
      "Discover why Inframe School stands out as one of the best design schools in India and the top arts & design school in Rajasthan.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Education",
    date: "Feb 28, 2025",
    readTime: "5 min read",
  },
  {
    id: "why-inframe-school-is-the-best-choice",
    title: "Why Inframe School is the Best Choice for Your Child's Future",
    excerpt:
      "Explore the perfect blend of education, expertise, and exposure at Inframe School for students after 12th grade.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Career",
    date: "Feb 25, 2025",
    readTime: "6 min read",
  },
  {
    id: "state-of-the-art-facilities",
    title: "Explore the State-of-the-Art Facilities at Inframe School",
    excerpt: "Take a virtual tour of our modern design labs, creative spaces, and innovative learning environments.",
    image:
      "https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Facilities",
    date: "Feb 20, 2025",
    readTime: "4 min read",
  },
  {
    id: "success-stories-from-inframe-alumni",
    title: "Success Stories from Inframe School Alumni",
    excerpt: "Read inspiring stories of our graduates who are making waves in the design and creative industries.",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Alumni",
    date: "Feb 15, 2025",
    readTime: "7 min read",
  },
  {
    id: "creative-curriculum-at-inframe",
    title: "The Creative Curriculum at Inframe School",
    excerpt:
      "Discover our innovative approach to design education that combines theory, practice, and industry exposure.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Curriculum",
    date: "Feb 10, 2025",
    readTime: "5 min read",
  },
  {
    id: "industry-partnerships-and-placements",
    title: "Industry Partnerships and Placement Opportunities at Inframe",
    excerpt:
      "Learn about our extensive network of industry partners and how they help our students launch successful careers.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Placements",
    date: "Feb 5, 2025",
    readTime: "6 min read",
  },
  {
    id: "faculty-spotlight-meet-our-experts",
    title: "Faculty Spotlight: Meet Our Industry Experts",
    excerpt: "Get to know the accomplished professionals who make up our teaching faculty at Inframe School.",
    image:
      "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Faculty",
    date: "Jan 30, 2025",
    readTime: "8 min read",
  },
  {
    id: "student-life-at-inframe-school",
    title: "Student Life at Inframe School: Beyond the Classroom",
    excerpt:
      "Explore the vibrant student community, extracurricular activities, and creative events at Inframe School.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Student Life",
    date: "Jan 25, 2025",
    readTime: "5 min read",
  },
]

// Category colors mapping
const categoryColors: Record<string, string> = {
  Education: "bg-yellow-400 text-black",
  Career: "bg-blue-500 text-white",
  Facilities: "bg-green-500 text-white",
  Alumni: "bg-purple-500 text-white",
  Curriculum: "bg-red-500 text-white",
  Placements: "bg-indigo-500 text-white",
  Faculty: "bg-pink-500 text-white",
  "Student Life": "bg-orange-500 text-white",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Image */}
       <div className="relative z-10">
                <div className="relative h-[80vh] ">
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent z-10" />
                  <Image
                    src="/images/gallery/1721738128651.jpg"
                    alt="Campus Life Hero Image"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIfIR0jIyUkJSMiIiMlKy4wLisqMx8hJzQnKi46PT4+JSZHSUFQLTc6Tj7/2wBDARUXFx4bHt0dHT4qIio+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <div className="absolute inset-0 z-20 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 w-full">
                      <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-1.5 h-12 bg-yellow-500" />
                          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                          Inframe School Blog
                          </h1>
                        </div>
                        <p className="text-xl text-white/80 max-w-2xl">
                        Insights, stories, and information about the best design school in Rajasthan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

      {/* Featured Articles Section */}
      <section id="featured-articles" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Articles</h2>
          <div className="flex gap-2">
            <Button variant="outline" className="border-yellow-400 text-black hover:bg-yellow-50">
              All Categories
            </Button>
            <Button variant="outline" className="border-yellow-400 text-black hover:bg-yellow-50">
              Most Popular
            </Button>
          </div>
        </div>

        {/* Index Navigation */}
        <Card className="mb-10 border-yellow-400 border-2">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Index</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {blogPosts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`#${post.id}`}
                  className="text-sm hover:text-yellow-600 hover:underline flex items-center"
                >
                  <span className="mr-2 font-bold">{index + 1}.</span> {post.title}
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} id={post.id} className="scroll-mt-16">
              <Link href={`/blog/${post.id}`} className="group">
                <Card className="overflow-hidden border-2 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${categoryColors[post.category]} px-3 py-1 text-xs font-semibold`}>
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Button className="mt-4 bg-black text-white hover:bg-yellow-400 hover:text-black transition-colors w-full">
                      Read More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Inframe School</h2>
          <p className="mb-8">Subscribe to our newsletter to receive the latest articles, news, and updates.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md flex-grow text-black"
            />
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6">Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  )
}

