import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '../../src/components/ui/separator';
import { CalendarIcon, ChevronRight, User} from 'lucide-react';
import { Poppins } from 'next/font/google';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Blog post data - you can move this to a separate data file
const blogPosts = [
  {
    id: 'why-choose-inframe',
    slug: 'top-5-reasons-to-choose-inframe-school',
    title: 'Top 5 Reasons to Choose Inframe School for Your Child\'s Education',
    excerpt: 'Discover why Inframe School stands out as the top choice for your child\'s design and arts education in Rajasthan.',
    date: 'February 28, 2025',
    author: 'Inframe School Team',
    image: '/images/gallery/1717492615506 - Copy (2).jpg',
    category: 'Education'
  },
  {
    id: 'best-choice-future',
    slug: 'why-inframe-school-is-best-choice-for-future',
    title: 'Why Inframe School is the Best Choice for Your Child\'s Future',
    excerpt: 'Explore how Inframe School provides the perfect blend of education, expertise, and exposure for aspiring designers and artists.',
    date: 'March 15, 2025',
    author: 'Inframe School Team',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Career'
  },
  {
    id: 'design-trends-2025',
    slug: 'design-trends-2025',
    title: 'Top Design Trends to Watch in 2025',
    excerpt: 'Stay ahead of the curve with these emerging design trends that will shape the creative industry in 2025.',
    date: 'January 15, 2025',
    author: 'Inframe Design Team',
    image: '/images/gallery/1717485328677 - Copy (3).jpg',
    category: 'Design'
  },
  {
    id: 'creative-career-paths',
    slug: 'creative-career-paths-after-12th',
    title: 'Creative Career Paths to Explore After 12th',
    excerpt: 'Discover exciting and rewarding career options in the creative field for students who have completed their 12th grade.',
    date: 'February 10, 2025',
    author: 'Career Counseling Team',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Career'
  },
  {
    id: 'portfolio-building',
    slug: 'building-impressive-design-portfolio',
    title: 'Tips for Building an Impressive Design Portfolio',
    excerpt: 'Learn how to create a design portfolio that stands out and showcases your skills to potential employers and clients.',
    date: 'March 5, 2025',
    author: 'Portfolio Experts',
    image: 'https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Design'
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing-for-designers',
    title: 'Digital Marketing Essentials for Designers',
    excerpt: 'Discover how designers can leverage digital marketing strategies to promote their work and attract clients.',
    date: 'January 25, 2025',
    author: 'Marketing Experts',
    image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Digital Marketing'
  }
];

// Categories
const categories = [
  "All",
  "Education",
  "Design",
  "Career",
  "Digital Marketing",
  "Art",
  "Technology"
];

export default function BlogPage() {
  return (
    <div className={`min-h-screen bg-background ${poppins.className}`}>
      {/* Hero Section */}
      <section className="w-full h-[75vh] py-12 md:py-24 lg:py-32 bg-gradient-to-r from-yellow-300 to-blue-50 dark:from-slate-900 dark:to-slate-800">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-sm">
                  Educational Blog
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover Your Creative Path
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Explore our comprehensive courses in Design, Art, and Business. Find your passion and build your
                  future.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Browse Courses</Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="/images/gallery/1717475821142 - Copy (8).jpg"
                    alt="Hero Image"
                    width={1280}
                    height={720}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Categories */}
          <div className="mb-10 overflow-x-auto">
            <div className="flex space-x-2 min-w-max pb-2">
              {categories.map((category) => (
                <Button 
                  key={category} 
                  variant={category === "All" ? "default" : "outline"} 
                  className="rounded-full px-4"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Featured Post */}
          <div className="mb-16">
            <Link href={`/blogs/${blogPosts[0].slug}`} className="block group">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">{blogPosts[0].category}</Badge>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  
                  <p className="text-muted-foreground">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <Button className="mt-4 gap-2">
                    Read Full Article <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>
          
          <Separator className="my-16" />
          
          {/* Blog Posts Grid */}
          <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link href={`/blogs/${post.slug}`} key={post.id} className="group">
                <div className="h-full flex flex-col border rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md">
                  <div className="relative h-52 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary/80 text-primary-foreground">{post.category}</Badge>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-6 space-y-4">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="px-6 pb-6">
                    <div className="flex items-center text-sm font-medium text-primary">
                      Read More <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}