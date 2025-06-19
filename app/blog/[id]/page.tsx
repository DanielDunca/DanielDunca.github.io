import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CalendarDays, User, Clock, Share2, Bookmark } from "lucide-react"

// Mock data - in a real app, this would be fetched based on the ID
const blogPost = {
  id: 1,
  title: "The Future of Digital Journalism in 2024",
  content: `
# The Future of Digital Journalism in 2024

The landscape of journalism is evolving at an unprecedented pace. As we navigate through 2024, digital transformation continues to reshape how we gather, verify, and distribute news. This comprehensive analysis explores the key trends and technologies that are defining the future of our industry.

## The Rise of AI-Assisted Reporting

Artificial Intelligence is no longer a futuristic concept in newsrooms—it's a present reality. From automated fact-checking to data analysis, AI tools are becoming indispensable for modern journalists. However, this technological advancement raises important questions about the role of human judgment in storytelling.

### Key Benefits of AI in Journalism:
- **Speed**: Automated transcription and initial draft generation
- **Accuracy**: Enhanced fact-checking capabilities
- **Scale**: Ability to process vast amounts of data quickly
- **Personalization**: Tailored content delivery to different audiences

## Challenges and Ethical Considerations

While technology offers tremendous opportunities, it also presents significant challenges. The spread of misinformation, deepfakes, and the erosion of trust in traditional media sources require journalists to be more vigilant than ever.

### Critical Areas of Focus:
1. **Source Verification**: Enhanced methods for confirming authenticity
2. **Transparency**: Clear disclosure of AI assistance in reporting
3. **Bias Detection**: Identifying and mitigating algorithmic bias
4. **Privacy Protection**: Safeguarding sources and sensitive information

## The Importance of Local Journalism

Despite the digital revolution, local journalism remains the cornerstone of democratic society. Community-focused reporting provides accountability at the grassroots level and ensures that local voices are heard in an increasingly globalized media landscape.

## Building Trust Through Transparency

In an era of information overload, transparency has become more crucial than ever. Readers want to understand not just what happened, but how journalists uncovered the story, what sources were used, and what verification processes were followed.

## Looking Ahead

The future of journalism lies in embracing technology while maintaining the core principles that define our profession: accuracy, fairness, and accountability. As we move forward, the most successful journalists will be those who can adapt to new tools while never losing sight of their fundamental mission to serve the public interest.

The digital age presents both opportunities and challenges, but one thing remains constant: the need for skilled, ethical journalists who can navigate complexity and deliver truth to their communities.
  `,
  author: "Your Name",
  date: "2024-01-15",
  category: "Technology",
  readTime: "8 min read",
  image: "/placeholder.svg?height=400&width=800",
}

export default function BlogPostPage() {
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
              <Link href="/" className="text-muted-foreground hover:text-primary">
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

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              {blogPost.category}
            </Badge>
            <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>

            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {blogPost.author}
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                {new Date(blogPost.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {blogPost.readTime}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Bookmark className="w-4 h-4" />
                Save
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={blogPost.image || "/placeholder.svg"}
              alt={blogPost.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-gray max-w-none mb-12">
            <div
              dangerouslySetInnerHTML={{
                __html: blogPost.content
                  .replace(/\n/g, "<br>")
                  .replace(/#{1,6}\s/g, "<h2>")
                  .replace(/<h2>/g, "</p><h2>")
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
              }}
            />
          </div>

          {/* Author Bio */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt="Author"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">About {blogPost.author}</h3>
                  <p className="text-muted-foreground mb-4">
                    I'm a dedicated journalist with over [X] years of experience in investigative reporting and digital
                    storytelling. My work focuses on uncovering stories that matter to our communities and holding those
                    in power accountable.
                  </p>
                  <div className="flex gap-2">
                    <Link href="/about">
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" size="sm">
                        Contact Me
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Related Articles</h3>
              <div className="space-y-4">
                <Link href="/blog/2" className="block p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <h4 className="font-semibold mb-2">Investigative Reporting in the Digital Age</h4>
                  <p className="text-sm text-muted-foreground">
                    How modern tools and techniques are revolutionizing investigative journalism...
                  </p>
                </Link>
                <Link href="/blog/3" className="block p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <h4 className="font-semibold mb-2">Building Trust Through Transparent Reporting</h4>
                  <p className="text-sm text-muted-foreground">
                    Why transparency and accountability are more important than ever...
                  </p>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/30 mt-12">
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
