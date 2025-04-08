import Link from "next/link"
import { ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { CommentSection } from "@/components/comment-section"
import { SocialShare } from "@/components/social-share"
import { ModeToggle } from "@/components/mode-toggle"
import { CartButton } from "@/components/cart-button"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the post data based on the ID
  const post = {
    id: params.id,
    title: "10 Essential Tips for Modern Web Development",
    content: `
      <p>Web development is constantly evolving, with new technologies, frameworks, and best practices emerging regularly. Staying up-to-date with these changes is crucial for developers who want to create modern, efficient, and user-friendly websites and applications.</p>
      
      <h2>1. Embrace Modern JavaScript</h2>
      <p>Modern JavaScript (ES6+) offers numerous features that make your code more readable, maintainable, and efficient. Features like arrow functions, destructuring, template literals, and async/await can significantly improve your development experience.</p>
      
      <h2>2. Adopt a Component-Based Architecture</h2>
      <p>Breaking your UI into reusable components makes your code more maintainable and easier to test. Frameworks like React, Vue, and Angular are built around this concept, but you can apply component-based thinking even in vanilla JavaScript projects.</p>
      
      <h2>3. Prioritize Performance</h2>
      <p>Website performance directly impacts user experience and SEO. Optimize images, minimize HTTP requests, use code splitting, implement lazy loading, and leverage browser caching to ensure your site loads quickly.</p>
      
      <h2>4. Make Accessibility a Priority</h2>
      <p>Building accessible websites ensures that all users, including those with disabilities, can access and interact with your content. Use semantic HTML, provide alternative text for images, ensure keyboard navigation works, and test with screen readers.</p>
      
      <h2>5. Implement Responsive Design</h2>
      <p>With the increasing variety of devices used to access the web, responsive design is no longer optional. Use flexible grids, CSS media queries, and responsive images to ensure your site looks and functions well on all screen sizes.</p>
      
      <h2>6. Leverage Modern CSS Features</h2>
      <p>CSS has evolved significantly in recent years. Features like CSS Grid, Flexbox, Custom Properties (variables), and CSS animations provide powerful tools for creating complex layouts and interactions with less code.</p>
      
      <h2>7. Adopt Progressive Web App (PWA) Techniques</h2>
      <p>PWAs combine the best of web and mobile apps. Implementing features like service workers for offline functionality, push notifications, and app-like interfaces can significantly enhance user experience.</p>
      
      <h2>8. Implement Proper Error Handling</h2>
      <p>Robust error handling improves user experience and makes debugging easier. Use try/catch blocks, implement global error boundaries, and provide meaningful error messages to users.</p>
      
      <h2>9. Use Version Control</h2>
      <p>Version control systems like Git are essential for tracking changes, collaborating with others, and maintaining a history of your project. Learn to use branches, pull requests, and code reviews effectively.</p>
      
      <h2>10. Automate Testing and Deployment</h2>
      <p>Implementing automated testing (unit, integration, and end-to-end) and continuous integration/continuous deployment (CI/CD) pipelines helps catch bugs early and streamlines the release process.</p>
      
      <p>By incorporating these practices into your web development workflow, you'll be better equipped to create modern, efficient, and user-friendly web applications that stand the test of time.</p>
    `,
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AJ",
      bio: "Senior Web Developer with 10+ years of experience in building modern web applications.",
    },
    date: "May 15, 2025",
    readTime: "8 min read",
    likes: 124,
    comments: 32,
    image: "/placeholder.svg?height=400&width=800&text=Web Development",
    category: "Technology",
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="font-bold text-xl">
              BlogHub
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </Link>
              <Link href="/blog" className="text-sm font-medium text-primary">
                Blog
              </Link>
              <Link href="/marketplace" className="text-sm font-medium transition-colors hover:text-primary">
                Marketplace
              </Link>
              <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <CartButton />
            <Link href="/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/signup" className="hidden md:block">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <article className="container max-w-3xl py-12 md:py-20">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Link
                href="/blog"
                className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                {post.category}
              </Link>
              <span className="text-sm text-muted-foreground">
                {post.date} · {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
            <div className="flex items-center gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.initials}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">{post.author.bio}</div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="aspect-video w-full rounded-lg object-cover"
              width={800}
              height={400}
            />
          </div>
          <div
            className="mt-8 prose prose-gray dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="mt-8 flex items-center gap-4">
            <LikeButton postId={post.id} initialLikes={post.likes} />
            <SocialShare title={post.title} />
          </div>
          <Separator className="my-8" />
          <CommentSection postId={post.id} />
        </article>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 BlogHub. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
;("use client")

import { useState } from "react"

function LikeButton({ postId, initialLikes }: { postId: string; initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setIsLiked(!isLiked)
  }

  return (
    <Button variant="outline" size="sm" className={`gap-1 ${isLiked ? "text-primary" : ""}`} onClick={handleLike}>
      <ThumbsUp className="h-4 w-4" />
      Like
      <span className="ml-1 text-xs text-muted-foreground">({likes})</span>
    </Button>
  )
}

