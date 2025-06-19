// Blog data storage
let blogPosts = []

// Initialize the blog
document.addEventListener("DOMContentLoaded", () => {
  loadBlogPosts()
  if (document.getElementById("posts-grid")) {
    displayPosts()
  }
  if (document.getElementById("admin-posts-list")) {
    displayAdminPosts()
  }
})

// Load blog posts from localStorage
function loadBlogPosts() {
  const stored = localStorage.getItem("blogPosts")
  if (stored) {
    blogPosts = JSON.parse(stored)
  } else {
    // Default posts if none exist
    blogPosts = [
      {
        id: 1,
        title: "The Future of Digital Journalism in 2024",
        excerpt:
          "Exploring how AI and new technologies are reshaping the landscape of modern journalism and what it means for reporters.",
        content: `# The Future of Digital Journalism in 2024

The landscape of journalism is evolving at an unprecedented pace. As we navigate through 2024, digital transformation continues to reshape how we gather, verify, and distribute news.

## The Rise of AI-Assisted Reporting

Artificial Intelligence is no longer a futuristic concept in newsrooms—it's a present reality. From automated fact-checking to data analysis, AI tools are becoming indispensable for modern journalists.

### Key Benefits:
- **Speed**: Automated transcription and initial draft generation
- **Accuracy**: Enhanced fact-checking capabilities  
- **Scale**: Ability to process vast amounts of data quickly
- **Personalization**: Tailored content delivery to different audiences

## Challenges and Ethical Considerations

While technology offers tremendous opportunities, it also presents significant challenges. The spread of misinformation, deepfakes, and the erosion of trust in traditional media sources require journalists to be more vigilant than ever.

## Looking Ahead

The future of journalism lies in embracing technology while maintaining the core principles that define our profession: accuracy, fairness, and accountability.`,
        author: "Your Name",
        date: "2024-01-15",
        category: "Technology",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop",
        featured: true,
      },
      {
        id: 2,
        title: "Investigative Reporting in the Digital Age",
        excerpt:
          "How modern tools and techniques are revolutionizing investigative journalism and uncovering stories that matter.",
        content: `# Investigative Reporting in the Digital Age

Modern investigative journalism has been transformed by digital tools and techniques that allow reporters to uncover stories with unprecedented depth and accuracy.

## Digital Tools for Modern Investigators

Today's investigative journalists have access to powerful tools that previous generations could only dream of:

### Data Analysis Tools
- Advanced spreadsheet software for pattern recognition
- Database management systems for large datasets
- Visualization tools for presenting complex information

### Online Research Techniques
- Social media investigation methods
- Public records databases
- Digital forensics tools

## The Importance of Verification

In an era of information overload, verification has become more critical than ever. Investigative journalists must employ multiple verification methods to ensure accuracy.

## Building Sources in the Digital World

Developing and maintaining sources requires new approaches in our connected world, balancing accessibility with security and privacy concerns.`,
        author: "Your Name",
        date: "2024-01-10",
        category: "Investigation",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=400&fit=crop",
        featured: false,
      },
      {
        id: 3,
        title: "Building Trust Through Transparent Reporting",
        excerpt: "Why transparency and accountability are more important than ever in today's media landscape.",
        content: `# Building Trust Through Transparent Reporting

In today's media landscape, trust between journalists and their audience is more crucial than ever. Transparency in reporting methods and accountability in storytelling are key to maintaining this trust.

## The Trust Crisis in Media

Recent surveys show declining trust in traditional media outlets. This crisis stems from various factors:

- Perceived bias in reporting
- Lack of transparency in sources
- Speed over accuracy in breaking news
- Echo chambers in digital media

## Strategies for Transparent Reporting

### Source Attribution
Whenever possible, journalists should clearly identify their sources and explain why anonymity might be necessary when it is granted.

### Methodology Disclosure
Explaining how a story was researched and reported helps readers understand the journalistic process.

### Correction Policies
Clear, prominent corrections and updates show commitment to accuracy.

## The Role of Community Engagement

Engaging with the community through comments, social media, and public forums helps build relationships and trust with readers.

## Moving Forward

The future of journalism depends on rebuilding and maintaining trust through consistent, transparent, and accountable reporting practices.`,
        author: "Your Name",
        date: "2024-01-05",
        category: "Ethics",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=800&h=400&fit=crop",
        featured: false,
      },
    ]
    saveBlogPosts()
  }
}

// Save blog posts to localStorage
function saveBlogPosts() {
  localStorage.setItem("blogPosts", JSON.stringify(blogPosts))
}

// Display posts on homepage
function displayPosts() {
  const postsGrid = document.getElementById("posts-grid")
  const featuredPost = document.getElementById("featured-post")

  if (!postsGrid) return

  // Display featured post
  const featured = blogPosts.find((post) => post.featured) || blogPosts[0]
  if (featuredPost && featured) {
    featuredPost.innerHTML = `
            <img src="${featured.image}" alt="${featured.title}">
            <div class="featured-content">
                <span class="badge">${featured.category}</span>
                <h4>${featured.title}</h4>
                <p>${featured.excerpt}</p>
                <div class="post-meta">
                    <span><i class="fas fa-user"></i> ${featured.author}</span>
                    <span><i class="fas fa-calendar"></i> ${formatDate(featured.date)}</span>
                    <span><i class="fas fa-clock"></i> ${featured.readTime}</span>
                </div>
                <a href="article.html?id=${featured.id}" class="btn btn-primary">
                    <i class="fas fa-arrow-right"></i> Read Full Story
                </a>
            </div>
        `
  }

  // Display recent posts (excluding featured)
  const recentPosts = blogPosts.filter((post) => !post.featured).slice(0, 6)
  postsGrid.innerHTML = recentPosts
    .map(
      (post) => `
        <article class="post-card">
            <img src="${post.image}" alt="${post.title}">
            <div class="post-card-content">
                <div class="post-card-header">
                    <span class="badge">${post.category}</span>
                    <span style="font-size: 0.75rem; color: #6b7280;">${post.readTime}</span>
                </div>
                <h4>${post.title}</h4>
                <p>${post.excerpt}</p>
                <div class="post-meta mb-4">
                    <span><i class="fas fa-user"></i> ${post.author}</span>
                    <span><i class="fas fa-calendar"></i> ${formatDate(post.date)}</span>
                </div>
                <a href="article.html?id=${post.id}" class="btn btn-outline" style="width: 100%;">Read More</a>
            </div>
        </article>
    `,
    )
    .join("")
}

// Display single article
function displayArticle() {
  const urlParams = new URLSearchParams(window.location.search)
  const postId = Number.parseInt(urlParams.get("id"))
  const post = blogPosts.find((p) => p.id === postId)

  if (!post) {
    document.body.innerHTML =
      '<div class="container"><h1>Article not found</h1><a href="index.html">Back to Home</a></div>'
    return
  }

  document.title = post.title + " - Your Journalism Blog"

  const articleContainer = document.getElementById("article-container")
  if (articleContainer) {
    articleContainer.innerHTML = `
            <div class="container">
                <a href="index.html" class="btn btn-outline mb-4">
                    <i class="fas fa-arrow-left"></i> Back to Home
                </a>
                
                <article class="article-header">
                    <span class="badge mb-2">${post.category}</span>
                    <h1 class="article-title">${post.title}</h1>
                    <div class="post-meta">
                        <span><i class="fas fa-user"></i> ${post.author}</span>
                        <span><i class="fas fa-calendar"></i> ${formatDate(post.date)}</span>
                        <span><i class="fas fa-clock"></i> ${post.readTime}</span>
                    </div>
                    <div class="flex gap-4 mt-4">
                        <button class="btn btn-outline" onclick="shareArticle()">
                            <i class="fas fa-share"></i> Share
                        </button>
                        <button class="btn btn-outline" onclick="bookmarkArticle()">
                            <i class="fas fa-bookmark"></i> Save
                        </button>
                    </div>
                </article>
                
                <img src="${post.image}" alt="${post.title}" class="article-image">
                
                <div class="article-content">
                    ${formatContent(post.content)}
                </div>
            </div>
        `
  }
}

// Format article content (basic markdown-like formatting)
function formatContent(content) {
  return content
    .replace(/\n/g, "<br>")
    .replace(/^# (.*$)/gm, "<h2>$1</h2>")
    .replace(/^## (.*$)/gm, "<h3>$1</h3>")
    .replace(/^### (.*$)/gm, "<h4>$1</h4>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/^- (.*$)/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>")
    .replace(/<br><h/g, "<h")
    .replace(/<\/h([1-6])><br>/g, "</h$1>")
    .replace(/<br><ul>/g, "<ul>")
    .replace(/<\/ul><br>/g, "</ul>")
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

// Admin functions
function showPostEditor() {
  document.getElementById("admin-dashboard").style.display = "none"
  document.getElementById("post-editor").style.display = "block"
}

function showDashboard() {
  document.getElementById("admin-dashboard").style.display = "block"
  document.getElementById("post-editor").style.display = "none"
  displayAdminPosts()
}

function displayAdminPosts() {
  const postsList = document.getElementById("admin-posts-list")
  if (!postsList) return

  postsList.innerHTML = blogPosts
    .map(
      (post) => `
        <div class="post-item">
            <div class="post-item-content">
                <h4>${post.title}</h4>
                <p>${post.excerpt.substring(0, 100)}...</p>
                <div class="post-item-meta">
                    ${post.category} • ${formatDate(post.date)} • ${post.featured ? "Featured" : "Regular"}
                </div>
            </div>
            <div class="post-item-actions">
                <button class="btn btn-outline" onclick="editPost(${post.id})">Edit</button>
                <button class="btn btn-outline" onclick="deletePost(${post.id})" style="color: #dc2626;">Delete</button>
            </div>
        </div>
    `,
    )
    .join("")
}

function savePost(event) {
  event.preventDefault()

  const form = event.target
  const formData = new FormData(form)

  const post = {
    id: Date.now(),
    title: formData.get("title"),
    excerpt: formData.get("excerpt"),
    content: formData.get("content"),
    author: formData.get("author"),
    category: formData.get("category"),
    image: formData.get("image") || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop",
    date: new Date().toISOString().split("T")[0],
    readTime: calculateReadTime(formData.get("content")),
    featured: formData.get("featured") === "on",
  }

  // If featured is selected, remove featured from other posts
  if (post.featured) {
    blogPosts.forEach((p) => (p.featured = false))
  }

  blogPosts.unshift(post)
  saveBlogPosts()

  form.reset()
  showDashboard()
  alert("Post published successfully!")
}

function calculateReadTime(content) {
  const wordsPerMinute = 200
  const wordCount = content.split(" ").length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

function deletePost(id) {
  if (confirm("Are you sure you want to delete this post?")) {
    blogPosts = blogPosts.filter((post) => post.id !== id)
    saveBlogPosts()
    displayAdminPosts()
  }
}

function editPost(id) {
  const post = blogPosts.find((p) => p.id === id)
  if (!post) return

  showPostEditor()

  // Fill form with post data
  document.getElementById("post-title").value = post.title
  document.getElementById("post-excerpt").value = post.excerpt
  document.getElementById("post-content").value = post.content
  document.getElementById("post-author").value = post.author
  document.getElementById("post-category").value = post.category
  document.getElementById("post-image").value = post.image
  document.getElementById("post-featured").checked = post.featured

  // Update form to edit mode
  const form = document.getElementById("post-form")
  form.onsubmit = (event) => {
    event.preventDefault()
    updatePost(id, event)
  }
}

function updatePost(id, event) {
  const form = event.target
  const formData = new FormData(form)

  const postIndex = blogPosts.findIndex((p) => p.id === id)
  if (postIndex === -1) return

  // If featured is selected, remove featured from other posts
  if (formData.get("featured") === "on") {
    blogPosts.forEach((p) => (p.featured = false))
  }

  blogPosts[postIndex] = {
    ...blogPosts[postIndex],
    title: formData.get("title"),
    excerpt: formData.get("excerpt"),
    content: formData.get("content"),
    author: formData.get("author"),
    category: formData.get("category"),
    image: formData.get("image") || blogPosts[postIndex].image,
    featured: formData.get("featured") === "on",
  }

  saveBlogPosts()
  showDashboard()
  alert("Post updated successfully!")

  // Reset form to create mode
  form.onsubmit = savePost
}

// Utility functions
function toggleMobileMenu() {
  // Mobile menu functionality can be added here
  alert("Mobile menu - you can implement a slide-out menu here")
}

function subscribeNewsletter(event) {
  event.preventDefault()
  const email = event.target.querySelector('input[type="email"]').value
  alert(`Thank you for subscribing with email: ${email}`)
  event.target.reset()
}

function shareArticle() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      url: window.location.href,
    })
  } else {
    navigator.clipboard.writeText(window.location.href)
    alert("Article URL copied to clipboard!")
  }
}

function bookmarkArticle() {
  alert("Article bookmarked! (You can implement a bookmarking system here)")
}

// Export/Import functions for data portability
function exportPosts() {
  const dataStr = JSON.stringify(blogPosts, null, 2)
  const dataBlob = new Blob([dataStr], { type: "application/json" })
  const url = URL.createObjectURL(dataBlob)
  const link = document.createElement("a")
  link.href = url
  link.download = "blog-posts.json"
  link.click()
}

function importPosts(event) {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result)
      if (confirm("This will replace all existing posts. Continue?")) {
        blogPosts = imported
        saveBlogPosts()
        displayAdminPosts()
        alert("Posts imported successfully!")
      }
    } catch (error) {
      alert("Error importing posts. Please check the file format.")
    }
  }
  reader.readAsText(file)
}
