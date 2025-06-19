import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Users, Globe } from "lucide-react"

export default function AboutPage() {
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
              <Link href="/about" className="text-foreground hover:text-primary">
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

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=128&width=128"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm a dedicated journalist committed to uncovering the truth and telling stories that make a difference in
              our communities and beyond.
            </p>
          </div>

          {/* Bio Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>My Story</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                With over [X] years of experience in journalism, I've dedicated my career to investigative reporting and
                in-depth storytelling. My passion lies in uncovering stories that matter to everyday people and holding
                those in power accountable.
              </p>
              <p>
                I believe in the fundamental role of journalism in a democratic society - to inform, educate, and
                empower citizens with the knowledge they need to make informed decisions. Through my work, I strive to
                bridge the gap between complex issues and public understanding.
              </p>
              <p>
                My reporting has covered a wide range of topics, from local government accountability to technology's
                impact on society, always with a focus on how these issues affect real people in their daily lives.
              </p>
            </CardContent>
          </Card>

          {/* Expertise Areas */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Areas of Expertise</CardTitle>
              <CardDescription>The topics and beats I cover most frequently</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 mt-1 text-primary" />
                    <div>
                      <h3 className="font-semibold">Investigative Reporting</h3>
                      <p className="text-sm text-muted-foreground">
                        Deep-dive investigations into corruption, fraud, and systemic issues
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 mt-1 text-primary" />
                    <div>
                      <h3 className="font-semibold">Technology & Society</h3>
                      <p className="text-sm text-muted-foreground">
                        How emerging technologies impact our daily lives and communities
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 mt-1 text-primary" />
                    <div>
                      <h3 className="font-semibold">Local Government</h3>
                      <p className="text-sm text-muted-foreground">
                        Municipal politics, policy decisions, and community impact
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 mt-1 text-primary" />
                    <div>
                      <h3 className="font-semibold">Social Justice</h3>
                      <p className="text-sm text-muted-foreground">Human rights, equality, and advocacy journalism</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Recognition & Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">2023</Badge>
                  <span>Regional Press Association Award for Investigative Excellence</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">2022</Badge>
                  <span>Community Impact Journalism Award</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">2021</Badge>
                  <span>Digital Innovation in Journalism Recognition</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">2020</Badge>
                  <span>Outstanding Coverage of Local Government</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education & Background */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Education & Background</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Master of Journalism</h3>
                  <p className="text-muted-foreground">University Name, Year</p>
                  <p className="text-sm">Specialization in Investigative Reporting and Digital Media</p>
                </div>
                <div>
                  <h3 className="font-semibold">Bachelor of Arts in Communications</h3>
                  <p className="text-muted-foreground">University Name, Year</p>
                  <p className="text-sm">Minor in Political Science</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card>
            <CardHeader>
              <CardTitle>Let's Connect</CardTitle>
              <CardDescription>Have a story tip or want to discuss my work? I'd love to hear from you.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button>Get in Touch</Button>
                </Link>
                <Button variant="outline">Follow My Work</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

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
