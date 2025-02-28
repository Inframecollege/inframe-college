import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Bookmark } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card,  CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Badge } from "../../components/ui/badge"

export default function FeaturedArticles() {
  const articles = [
    {
      title: "The Evolution of Interior Design: 2025 Trends That Will Transform Spaces",
      excerpt: "Discover how sustainability, technology, and cultural influences are reshaping interior design in 2025.",
      author: "Emma Johnson",
      authorRole: "Interior Design Expert",
      date: "Feb 25, 2025",
      readTime: "8 min read",
      category: "Interior Design",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Breaking Boundaries: How AI is Revolutionizing Graphic Design",
      excerpt: "Explore how artificial intelligence tools are changing the landscape for graphic designers and creating new opportunities.",
      author: "Michael Chen",
      authorRole: "Creative Director",
      date: "Feb 22, 2025",
      readTime: "10 min read",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "The Sustainable Fashion Revolution: From Concept to Closet",
      excerpt: "Learn how sustainable practices are transforming the fashion industry and how designers are leading the charge.",
      author: "Sarah Williams",
      authorRole: "Fashion Sustainability Advocate",
      date: "Feb 20, 2025",
      readTime: "12 min read",
      category: "Fashion Design",
      image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {articles.map((article, index) => (
        <Card key={index} className="overflow-hidden transition-all hover:shadow-lg flex flex-col h-full bg-white border-yellow-200">
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              width={800}
              height={600}
              className="object-cover w-full h-full transition-transform hover:scale-105"
            />
            <Badge className="absolute top-3 left-3 bg-yellow-500 text-black hover:bg-yellow-600">
              {article.category}
            </Badge>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full h-8 w-8"
            >
              <Bookmark className="h-4 w-4 text-yellow-600" />
              <span className="sr-only">Bookmark</span>
            </Button>
          </div>
          <CardHeader className="p-5">
            <CardTitle className="line-clamp-2 text-xl hover:text-yellow-600 transition-colors">
              <Link href="#">{article.title}</Link>
            </CardTitle>
            <CardDescription className="line-clamp-3 mt-2 text-gray-600">
              {article.excerpt}
            </CardDescription>
          </CardHeader>
          <CardFooter className="p-5 pt-0 mt-auto">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={article.authorImage} alt={article.author} />
                  <AvatarFallback>{article.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-medium text-black">{article.author}</div>
                  <div className="text-xs text-gray-500">{article.authorRole}</div>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

