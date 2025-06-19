import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, User, ArrowRight } from "lucide-react"

// Mock data - in a real app, this would come from your blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Journalism in 2024",
    excerpt:
      "Exploring how AI and new technologies are reshaping the landscape of modern journalism and what it means for reporters.",
    author: "Your Name",
    date: "2024-01-15",
    category: "Technology",
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Investigative Reporting in the Digital Age",
    excerpt:
      "How modern tools and techniques are revolutionizing investigative journalism and uncovering stories that matter.",
    author: "Your Name",
    date: "2024-01-10",
    category: "Investigation",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Building Trust Through Transparent Reporting",
    excerpt: "Why transparency and accountability are more important than ever in today's media landscape.",
    author: "Your Name",
    date: "2024-01-05",
    category: "Ethics",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Your Journalism Blog</h1>
              <p className="text-muted-foreground">Uncovering stories that matter</p>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">
                Contact
              </Link>
              <Link href="/admin">
                <Button variant="outline" size="sm">
                  Add Post
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to My Journalism Hub</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated to bringing you in-depth reporting, investigative stories, and insights that shape our
            understanding of the world around us.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8">Featured Story</h3>
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <Badge variant="secondary" className="mb-3">
                  {blogPosts[0].category}
                </Badge>
                <h4 className="text-2xl font-bold mb-3">{blogPosts[0].title}</h4>
                <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    {new Date(blogPosts[0].date).toLocaleDateString()}
                  </div>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Link href={`/blog/${blogPosts[0].id}`}>
                  <Button className="gap-2">
                    Read Full Story <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8">Recent Stories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Stay Updated</CardTitle>
              <CardDescription>Get the latest stories delivered directly to your inbox</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md" />
              <Button className="w-full">Subscribe to Newsletter</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2024 Your Journalism Blog. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link href="/about" className="text-muted-foreground hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary">
              Contact
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
