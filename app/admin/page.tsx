"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Save, Eye, Plus, Trash2 } from "lucide-react"
import Link from "next/link"

export default function AdminPage() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The Future of Digital Journalism in 2024",
      excerpt: "Exploring how AI and new technologies are reshaping the landscape of modern journalism...",
      category: "Technology",
      date: "2024-01-15",
      status: "Published",
    },
    {
      id: 2,
      title: "Investigative Reporting in the Digital Age",
      excerpt: "How modern tools and techniques are revolutionizing investigative journalism...",
      category: "Investigation",
      date: "2024-01-10",
      status: "Published",
    },
  ])

  const [showEditor, setShowEditor] = useState(false)
  const [currentPost, setCurrentPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    author: "Your Name",
    image: "",
  })

  const handleSavePost = () => {
    const newPost = {
      id: posts.length + 1,
      ...currentPost,
      date: new Date().toISOString().split("T")[0],
      status: "Published",
    }
    setPosts([newPost, ...posts])
    setCurrentPost({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      author: "Your Name",
      image: "",
    })
    setShowEditor(false)
  }

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  if (showEditor) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" onClick={() => setShowEditor(false)} className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Posts
                </Button>
                <h1 className="text-xl font-bold">Create New Post</h1>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="gap-2">
                  <Eye className="w-4 h-4" />
                  Preview
                </Button>
                <Button onClick={handleSavePost} className="gap-2">
                  <Save className="w-4 h-4" />
                  Publish Post
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Post Details</CardTitle>
                <CardDescription>Fill in the basic information for your blog post</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={currentPost.title}
                    onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                    placeholder="Enter your post title..."
                    className="text-lg"
                  />
                </div>

                <div>
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={currentPost.excerpt}
                    onChange={(e) => setCurrentPost({ ...currentPost, excerpt: e.target.value })}
                    placeholder="Write a brief summary of your post..."
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={currentPost.category}
                      onValueChange={(value) => setCurrentPost({ ...currentPost, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Technology">Technology</SelectItem>
                        <SelectItem value="Investigation">Investigation</SelectItem>
                        <SelectItem value="Politics">Politics</SelectItem>
                        <SelectItem value="Society">Society</SelectItem>
                        <SelectItem value="Ethics">Ethics</SelectItem>
                        <SelectItem value="Breaking News">Breaking News</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      value={currentPost.author}
                      onChange={(e) => setCurrentPost({ ...currentPost, author: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="image">Featured Image URL</Label>
                  <Input
                    id="image"
                    value={currentPost.image}
                    onChange={(e) => setCurrentPost({ ...currentPost, image: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content</CardTitle>
                <CardDescription>Write your blog post content</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={currentPost.content}
                  onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
                  placeholder="Start writing your story..."
                  rows={20}
                  className="font-mono"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  You can use Markdown formatting for rich text (bold, italic, links, etc.)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Site
                </Button>
              </Link>
              <h1 className="text-xl font-bold">Blog Admin</h1>
            </div>
            <Button onClick={() => setShowEditor(true)} className="gap-2">
              <Plus className="w-4 h-4" />
              New Post
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Your Blog Posts</CardTitle>
              <CardDescription>Manage and edit your published articles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {posts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{post.title}</h3>
                        <Badge variant={post.status === "Published" ? "default" : "secondary"}>{post.status}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>Category: {post.category}</span>
                        <span>Date: {new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeletePost(post.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Quick Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Use clear, compelling headlines to grab readers' attention</p>
              <p>• Write engaging excerpts that summarize your main points</p>
              <p>• Choose appropriate categories to help readers find your content</p>
              <p>• Add featured images to make your posts more visually appealing</p>
              <p>• Use Markdown formatting for rich text (e.g., **bold**, *italic*, [links](url))</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
