"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, List, X, Calendar, Clock, Share2, Bookmark, ThumbsUp, MessageSquare } from "lucide-react"
import { cn } from "../../../../lib/utils"

// Blog post data
const blogPostsData = {
  "top-5-reasons-to-choose-inframe-school": {
    title: "Top 5 Reasons to Choose Inframe School for Your Child's Education",
    excerpt:
      "Discover why Inframe School stands out as one of the best design schools in India and the top arts & design school in Rajasthan.",
    heroImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    category: "Education",
    date: "February 28, 2025",
    readTime: "5 min read",
    author: {
      name: "Inframe School Team",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    },
    sections: [
      {
        id: "intro",
        title: "Introduction",
        content:
          "In today's rapidly changing world, selecting the right school for your child is a crucial decision. As parents, you want a place where your child can not only grow academically but also thrive in creativity and innovation. Inframe School offers an outstanding educational experience for students interested in design, arts, and creative fields. If you're considering the best design school in India or the top arts & design school in Rajasthan, here are five compelling reasons why Inframe School stands out as the top choice for your child's education.",
      },
      {
        id: "reason1",
        title: "1. Focused Curriculum Tailored for Creative Excellence",
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content:
          "At Inframe School, the curriculum is designed to nurture the creative minds of tomorrow. Whether your child is interested in arts, design, or technology, the school offers a specialized approach that caters to individual talents. The school's unique combination of theoretical learning and hands-on training in design and art ensures students gain not just academic knowledge but practical skills that set them apart in the real world.\n\nInframe School is one of the best design schools in India, offering personalized learning paths that align with your child's passion for design, arts, and creativity.",
        quote: "Creativity is intelligence having fun.",
        quoteAuthor: "Albert Einstein",
      },
      {
        id: "reason2",
        title: "2. World-Class Infrastructure and State-of-the-Art Facilities",
        image:
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content:
          "Inframe School prides itself on its modern infrastructure. The school is equipped with cutting-edge facilities that provide students with the resources they need to thrive. From spacious art studios to fully-equipped design labs, the school's infrastructure is built to foster creativity and innovation. It's a place where students can experiment with new ideas and technologies to bring their visions to life.\n\nIf you are looking for the best designing school in Rajasthan, Inframe School's state-of-the-art design labs and facilities are second to none.",
        quote: "The best way to predict the future is to create it.",
        quoteAuthor: "Peter Drucker",
      },
      {
        id: "reason3",
        title: "3. Expert Faculty with Industry Experience",
        image:
          "https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content:
          "The Inframe School faculty comprises highly skilled professionals with extensive experience in the design and art industries. This expertise ensures that students receive education and mentorship from the very best in the field. The hands-on learning approach with industry professionals helps students stay ahead of the curve and prepares them for future success.\n\nWhether your child is pursuing design, architecture, or other creative fields, Inframe School's expert faculty will guide them every step of the way.",
        highlights: [
          "Industry professionals with real-world experience",
          "Mentorship beyond the classroom",
          "Up-to-date knowledge of current design trends",
          "Personalized guidance for each student",
        ],
        highlightTitle: "Learning from the Best: Why Inframe School's Faculty is Key to Your Child's Success",
      },
      {
        id: "reason4",
        title: "4. Placement Opportunities and Industry Exposure",
        image:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content:
          "Inframe School not only focuses on academics but also prioritizes real-world experience. The school has partnerships with leading companies and organizations in the design and arts sectors. Through these partnerships, students gain valuable internship and placement opportunities that give them a competitive edge in the job market.\n\nAs one of the top arts & design schools in Rajasthan, Inframe School's network and exposure to industry leaders ensures your child is always in the loop about the latest trends and opportunities in design.",
        quote: "Success is where preparation and opportunity meet.",
        quoteAuthor: "Bobby Unser",
      },
      {
        id: "reason5",
        title: "5. Holistic Development and Personality Building",
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content:
          "At Inframe School, education is about more than just academic learning. The school emphasizes the holistic development of students by fostering skills such as communication, teamwork, and leadership. Through various extracurricular activities, workshops, and exposure to real-world scenarios, students at Inframe School develop the personality traits that employers highly value in creative professionals.",
        highlights: [
          "Development of critical thinking skills",
          "Confidence building through presentations and exhibitions",
          "Team projects that foster collaboration",
          "Leadership opportunities in student-led initiatives",
        ],
        highlightTitle: "Beyond Books: How Inframe School Shapes Your Child's Future as a Leader",
      },
      {
        id: "conclusion",
        title: "Final Thought",
        content:
          "Inframe School provides a comprehensive, innovative, and hands-on learning environment where students can truly excel in their chosen creative field. With a focus on personalized education, expert guidance, modern infrastructure, and industry exposure, Inframe School is the best choice for your child's future in design and arts. Whether you're looking for the best design school in India or the top arts & design school in Rajasthan, Inframe School's offerings make it a top contender in shaping the leaders of tomorrow.",
      },
    ],
    relatedPosts: [
      {
        id: "why-inframe-school-is-the-best-choice",
        title: "Why Inframe School is the Best Choice for Your Child's Future",
        image:
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "Career",
      },
      {
        id: "state-of-the-art-facilities",
        title: "Explore the State-of-the-Art Facilities at Inframe School",
        image:
          "https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "Facilities",
      },
      {
        id: "creative-curriculum-at-inframe",
        title: "The Creative Curriculum at Inframe School",
        image:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "Curriculum",
      },
    ],
  },
  "why-inframe-school-is-the-best-choice": {
    title: "Why Inframe School is the Best Choice for Your Child's Future",
    excerpt:
      "Explore the perfect blend of education, expertise, and exposure at Inframe School for students after 12th grade.",
    heroImage:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    category: "Career",
    date: "February 25, 2025",
    readTime: "6 min read",
    author: {
      name: "Inframe School Team",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    },
    sections: [
      {
        id: "intro",
        title: "Introduction",
        content:
          "Choosing the right educational path after 12th is a critical decision that can shape your child's future. With an overwhelming number of courses and career options available, it's easy to feel lost. However, if your child is passionate about design, arts, and creativity, then Inframe School offers the perfect blend of education, expertise, and exposure. In this article, we'll explore why Inframe School is the best choice for your child's future, especially if you're searching for the best designing school in Rajasthan or guidance on what to do after 12th.\n\nAs your child completes their 12th grade, the question of \"what's next?\" becomes more important than ever. The right educational path can significantly influence their future. If your child has an interest in design, arts, and creativity, then Inframe School offers a unique opportunity for them to develop both academically and professionally. If you're wondering what to do after 12th or looking for the best designing school in Rajasthan, this article will highlight why Inframe School is the best choice for your child's bright future.",
      },
      {
        id: "reason1",
        title: "1. Industry-Driven Curriculum Designed for Future Creatives",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content:
          "Inframe School offers a specialized curriculum aimed at nurturing future designers and artists. The programs are meticulously designed to combine theoretical knowledge with hands-on practice, enabling students to excel in their field of interest. Whether your child is inclined towards graphic design, fashion design, or architecture, the curriculum is customized to support these passions and more.\n\nInframe School's curriculum isn't just about academics—it's about preparing students for real-world challenges. If you're looking for a course that bridges the gap between education and industry for your child, Inframe School is one of the best design schools in Rajasthan.",
        quote:
          "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
        quoteAuthor: "Steve Jobs",
      },
      {
        id: "reason2",
        title: "2. Top-Notch Infrastructure for Creativity to Thrive",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content:
          "When it comes to learning, the environment plays a crucial role. Inframe School prides itself on offering world-class infrastructure that supports students' creative journeys. The school boasts advanced design labs, art studios, and digital media centers where students can experiment, explore, and enhance their creativity. These facilities are specially designed to foster innovation and technical skill, allowing students to turn their ideas into reality.\n\nFor students considering their options after 12th, Inframe School provides an environment where creativity thrives. Its facilities make it one of the best designing schools in Rajasthan.",
        highlights: [
          "State-of-the-art design studios with industry-standard equipment",
          "Digital labs with the latest software and hardware",
          "Collaborative spaces for group projects and brainstorming",
          "Exhibition areas to showcase student work",
        ],
        highlightTitle: "Where Creativity Meets Technology: The Power of Inframe School's Facilities",
      },
      {
        id: "reason3",
        title: "3. Faculty with Practical Industry Expertise",
        image:
          "https://images.unsplash.com/photo-1560523159-4a9692d222f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content:
          "One of the standout features of Inframe School is its team of highly experienced and qualified faculty members. Unlike traditional schools, the faculty at Inframe School comprises professionals with significant experience in the arts and design industries. This ensures that students receive education based on current trends and industry needs, allowing them to stay relevant and ahead of the curve.\n\nIf your child is looking to explore creative careers, Inframe School's expert faculty members offer guidance, mentorship, and practical insights to help them succeed. It's this blend of academic rigor and industry expertise that makes Inframe School an outstanding choice.",
        quote: "The best way to predict the future is to create it.",
        quoteAuthor: "Peter Drucker",
      },
      {
        id: "reason4",
        title: "4. Career-Oriented Opportunities and Placement Support",
        image:
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content:
          "At Inframe School, education goes beyond the classroom. The school places a strong emphasis on offering career-oriented experiences that help students transition from the academic world to professional life seamlessly. Through internships, industry workshops, and career placement programs, students gain valuable experience and exposure to the design industry.\n\nIf you're wondering about career options after 12th or how to gain industry experience, Inframe School's strong ties with design firms and professionals offer the ideal platform to launch your child's career. The school ensures that your child is career-ready by the time they graduate.",
        highlights: [
          "Internship opportunities with leading design companies",
          "Industry workshops and masterclasses",
          "Portfolio development guidance",
          "Placement assistance and career counseling",
        ],
        highlightTitle: "Turning Passion into Profession: How Inframe School Prepares Students for Career Success",
      },
      {
        id: "reason5",
        title: "5. Fostering Holistic Growth Beyond Academics",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content:
          "At Inframe School, the focus is not only on academics but also on developing students' personal growth and leadership skills. By encouraging participation in extracurricular activities, workshops, and student-led projects, the school helps students build confidence, communication skills, and teamwork. These attributes are equally important for professional success, especially in the creative industries.\n\nThe school's comprehensive approach ensures that students not only excel in their academic field but also develop the well-rounded personality needed to succeed in any career path.",
        quote: "Success is the sum of small efforts, repeated day in and day out.",
        quoteAuthor: "Robert Collier",
      },
      {
        id: "reason6",
        title: "6. Strong Alumni Network and Industry Recognition",
        image:
          "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content:
          "Choosing Inframe School means joining a community of successful professionals in the design and arts fields. The school has an impressive alumni network that continues to support and guide current students, offering mentorship and valuable industry connections. Being part of this network ensures that your child can access career opportunities even after they graduate.\n\nInframe School's industry recognition as one of the best designing schools in Rajasthan gives your child a competitive edge, both during their studies and in their future career.",
        highlights: [
          "Regular alumni interaction sessions",
          "Mentorship programs connecting students with successful graduates",
          "Industry recognition and partnerships",
          "Networking events and opportunities",
        ],
        highlightTitle: "The Inframe Advantage: A Network That Opens Doors",
      },
    ],
    relatedPosts: [
      {
        id: "top-5-reasons-to-choose-inframe-school",
        title: "Top 5 Reasons to Choose Inframe School for Your Child's Education",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "Education",
      },
      {
        id: "faculty-spotlight-meet-our-experts",
        title: "Faculty Spotlight: Meet Our Industry Experts",
        image:
          "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "Faculty",
      },
      {
        id: "industry-partnerships-and-placements",
        title: "Industry Partnerships and Placement Opportunities at Inframe",
        image:
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "Placements",
      },
    ],
  },
}

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

interface IndexItem {
  id: string
  title: string
  level: number
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [activeSection, setActiveSection] = useState<string>("")
  const [showIndex, setShowIndex] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const slug = params.slug
  const post = blogPostsData[slug as keyof typeof blogPostsData]

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="mb-6">{`The blog post you're looking for doesn't exist.`}</p>
          <Link href="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  const indexItems: IndexItem[] = post.sections.map((section) => ({
    id: section.id,
    title: section.title,
    level: 1,
  }))

  useEffect(() => {
    if (!sectionRefs.current || Object.keys(sectionRefs.current).length === 0) return; // Prevent errors
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );
  
    const refs = Object.values(sectionRefs.current);
  
    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
  
    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  

  const scrollToSection = (id: string) => {
    const element = sectionRefs.current[id]
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setActiveSection(id)
      setShowIndex(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image src={post.heroImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-4">
          <div className="max-w-4xl">
            <Badge className={`${categoryColors[post.category]} px-3 py-1 text-sm font-semibold mb-4`}>
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{post.title}</h1>
            <div className="flex items-center justify-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 relative">
        <div className="flex justify-between items-center mb-8">
          <Link href="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" /> Back to Blog
            </Button>
          </Link>
          <Button
            variant="outline"
            className="md:hidden flex items-center gap-2"
            onClick={() => setShowIndex(!showIndex)}
          >
            {showIndex ? <X className="h-4 w-4" /> : <List className="h-4 w-4" />}
            {showIndex ? "Close Index" : "Show Index"}
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Index Sidebar */}
          <aside
            className={cn(
              "md:w-1/4 md:sticky md:top-8 md:self-start md:h-[calc(100vh-120px)] md:overflow-auto md:block",
              showIndex ? "fixed inset-0 z-50 bg-white p-4 overflow-auto" : "hidden",
            )}
          >
            <div className="md:hidden flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Index</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowIndex(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <Card className="border-2 border-yellow-400">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-4 hidden md:block">Index</h3>
                <ul className="space-y-2">
                  {indexItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                          "text-left w-full py-2 px-3 rounded hover:bg-yellow-100 transition-colors",
                          activeSection === item.id ? "bg-yellow-200 font-medium" : "",
                          item.level === 1 ? "text-base" : "text-sm pl-4",
                        )}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Author Card */}
            <Card className="mt-6 border-2 border-yellow-400">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-4">Author</h3>
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={post.author.image || "/placeholder.svg"}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{post.author.name}</h4>
                    <p className="text-sm text-gray-600">Content Writer at Inframe School</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Share Card */}
            <Card className="mt-6 border-2 border-yellow-400">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-4">Share</h3>
                <div className="flex gap-2">
                  <Button variant="outline" className="bg-[#1877F2] text-white hover:bg-[#1877F2]/90 w-full">
                    Facebook
                  </Button>
                  <Button variant="outline" className="bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/90 w-full">
                    Twitter
                  </Button>
                </div>
                <Button variant="outline" className="bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90 w-full mt-2">
                  LinkedIn
                </Button>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="md:w-3/4">
            <article className="prose prose-lg max-w-none">
              {post.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  ref={(el) => {
                    sectionRefs.current[section.id] = el;
                  }}
                  className="mb-12 scroll-mt-16"
                >
                  {section.id !== "intro" && <h2 className="text-3xl font-bold mb-6 border-b pb-4">{section.title}</h2>}

                  {section.image && (
                    <div className="mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={section.image}
                        alt={section.title}
                        width={1000}
                        height={500}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}

                  {section.content.split("\n\n").map((paragraph, idx) => (
                    <p key={idx} className="mb-4">
                      {`${paragraph}`}
                    </p>
                  ))}

                  {section.quote && (
                    <blockquote className="border-l-4 border-yellow-400 pl-6 py-2 my-6 bg-yellow-50 rounded-r-lg">
                      <p className="italic text-xl mb-2">{`"${section.quote}"`}</p>
                      {section.quoteAuthor && (
                        <footer className="text-right font-medium">– {section.quoteAuthor}</footer>
                      )}
                    </blockquote>
                  )}

                  {section.highlights && (
                    <div className="bg-yellow-50 p-6 rounded-lg my-6 border-l-4 border-yellow-400">
                      <h4 className="font-bold text-xl mb-4">{section.highlightTitle}</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {section.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              ))}

              {/* Engagement Section */}
              <div className="border-t border-b py-6 my-8 flex justify-between items-center">
                <div className="flex gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4" />
                    Like
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Comment
                  </Button>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Bookmark className="h-4 w-4" />
                    Save
                  </Button>
                </div>
              </div>

              {/* Related Posts */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {post.relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group">
                      <Card className="overflow-hidden border hover:border-yellow-400 transition-all h-full">
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-2 left-2">
                            <Badge className={`${categoryColors[relatedPost.category]} px-2 py-1 text-xs`}>
                              {relatedPost.category}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-bold group-hover:text-yellow-600 transition-colors">
                            {relatedPost.title}
                          </h4>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="py-16 bg-black text-white mt-16">
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

