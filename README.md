# Static Journalism Blog

A professional, static HTML/CSS/JavaScript blog website designed specifically for journalists. This blog can be hosted for **free** on GitHub Pages without any server requirements.

## ✨ Features

- **📝 Easy Content Management**: Simple admin interface to add and manage blog posts
- **💾 Local Storage**: Posts are saved in your browser's local storage
- **📱 Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **🎨 Professional Design**: Clean, modern design suitable for journalism
- **⚡ Fast Loading**: Pure HTML/CSS/JavaScript - no frameworks needed
- **🔧 Easy Customization**: Simple to modify colors, fonts, and layout
- **📤 Export/Import**: Backup and restore your posts with JSON files
- **🆓 GitHub Pages Ready**: Deploy for free hosting immediately

## 🚀 Quick Start

### Option 1: GitHub Pages Deployment (Recommended)

1. **Fork or Download** this repository
2. **Upload to GitHub**: Create a new repository and upload all files
3. **Enable GitHub Pages**: 
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Local Development

1. Download all files to a folder
2. Open `index.html` in your web browser
3. Start adding content via the admin panel at `admin.html`

## 📖 How to Use

### Adding Your First Blog Post

1. Open your website and go to `/admin.html`
2. Click "New Post"
3. Fill in:
   - **Title**: Your article headline
   - **Excerpt**: Brief summary (appears on homepage)
   - **Category**: Choose from predefined categories
   - **Content**: Your full article (supports Markdown-style formatting)
   - **Featured Image**: URL to an image (optional)
   - **Featured Post**: Check to highlight on homepage

4. Click "Publish Post"

### Managing Posts

- **View All Posts**: Admin dashboard shows all your articles
- **Edit Posts**: Click "Edit" on any post to modify it
- **Delete Posts**: Remove posts you no longer want
- **Export Posts**: Download all your posts as a JSON file for backup
- **Import Posts**: Restore posts from a JSON backup file

### Customizing Your Blog

#### Update Personal Information

1. **Edit each HTML file** to replace:
   - "Your Name" with your actual name
   - "Your Journalism Blog" with your blog title
   - Contact information in `contact.html`
   - Bio information in `about.html`

#### Change Colors and Styling

1. **Edit `styles.css`** to modify:
   - Colors (search for color codes like `#2563eb`)
   - Fonts (change the `font-family` values)
   - Layout spacing and sizes

#### Add Your Photo

1. Replace the placeholder image URLs in `about.html` with your actual photo
2. You can use services like Unsplash or upload to your GitHub repository

## 🎨 Customization Guide

### Changing Colors

In `styles.css`, find and replace these color codes:
- `#2563eb` - Primary blue color
- `#1d4ed8` - Darker blue for hover states
- `#6b7280` - Gray text color
- `#374151` - Dark gray text
- `#f9fafb` - Light background color

### Adding New Categories

In `admin.html`, find the category dropdown and add new options:
\`\`\`html
<option value="Your Category">Your Category</option>
\`\`\`

### Modifying the Layout

The CSS uses CSS Grid and Flexbox for layouts. Key classes:
- `.posts-grid` - Controls the blog post grid layout
- `.featured-post` - Controls the featured post layout
- `.container` - Sets the maximum width and centering

## 📁 File Structure

\`\`\`
├── index.html          # Homepage
├── admin.html          # Blog management interface
├── article.html        # Individual article page
├── about.html          # About page
├── contact.html        # Contact page
├── styles.css          # All styling
├── script.js           # All JavaScript functionality
└── README.md           # This file
\`\`\`

## 🔧 Technical Details

- **Pure HTML/CSS/JavaScript** - No build process required
- **Local Storage** - Posts saved in browser storage
- **Responsive Design** - Mobile-first approach
- **SEO Friendly** - Proper meta tags and semantic HTML
- **Accessible** - ARIA labels and keyboard navigation support

## 📝 Content Formatting

The blog supports Markdown-style formatting in your posts:

- `**bold text**` for **bold text**
- `*italic text*` for *italic text*
- `# Heading` for headings
- `- List item` for bullet points

## 🔒 Data Management

### Backing Up Your Posts

1. Go to the admin panel
2. Click "Export Posts"
3. Save the JSON file somewhere safe

### Restoring Posts

1. Go to the admin panel
2. Click "Import Posts"
3. Select your JSON backup file

## 🌐 Going Live

### GitHub Pages (Free)

1. Create a GitHub account if you don't have one
2. Create a new repository
3. Upload all your blog files
4. Enable GitHub Pages in repository settings
5. Your blog will be live at `https://yourusername.github.io/repository-name`

### Other Hosting Options

This static site can be hosted on:
- **Netlify** (free tier available)
- **Vercel** (free tier available)
- **AWS S3** (pay per use)
- Any web hosting provider that supports static files

## 🆘 Support

### Common Issues

**Q: My posts disappeared!**
A: Posts are stored in your browser's local storage. If you clear your browser data, posts will be lost. Always export your posts as backup!

**Q: Images aren't showing**
A: Make sure image URLs are complete (starting with `https://`) and publicly accessible.

**Q: Site looks broken on mobile**
A: The site is responsive by default. Try clearing your browser cache.

### Getting Help

- Check the browser console (F12) for any error messages
- Ensure all files are uploaded to your hosting service
- Verify that file names match exactly (case-sensitive)

## 📄 License

This project is open source and available under the MIT License. Feel free to modify and use for your journalism blog!

---

**Ready to start your journalism blog?** Upload these files to GitHub and start writing your first post! 🚀
