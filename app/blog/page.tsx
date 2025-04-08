"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, MessageSquare, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ModeToggle } from "@/components/mode-toggle"
import { CartButton } from "@/components/cart-button"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [visiblePosts, setVisiblePosts] = useState(6)
  const [likedPosts, setLikedPosts] = useState<Record<number, boolean>>({})

  const allPosts = [
    {
      id: 1,
      title: "10 Essential Tips for Modern Web Development",
      excerpt:
        "Discover the latest practices and tools that can elevate your web development skills to the next level.",
      author: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "AJ",
      },
      date: "May 15, 2025",
      readTime: "8 min read",
      likes: 124,
      comments: 32,
      image: "/placeholder.svg?height=250&width=500&text=Web Development",
      category: "Technology",
    },
    {
      id: 2,
      title: "The Future of Artificial Intelligence in Content Creation",
      excerpt: "Explore how AI is transforming the way we create and consume content in the digital age.",
      author: {
        name: "Samantha Lee",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SL",
      },
      date: "May 12, 2025",
      readTime: "6 min read",
      likes: 98,
      comments: 24,
      image: "/placeholder.svg?height=250&width=500&text=AI Content",
      category: "Technology",
    },
    {
      id: 3,
      title: "Building Sustainable Digital Products: A Comprehensive Guide",
      excerpt:
        "Learn how to create digital products that are not only user-friendly but also environmentally conscious.",
      author: {
        name: "Marcus Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MC",
      },
      date: "May 10, 2025",
      readTime: "10 min read",
      likes: 156,
      comments: 45,
      image: "/placeholder.svg?height=250&width=500&text=Sustainable Products",
      category: "Design",
    },
    {
      id: 4,
      title: "The Psychology of User Experience: What Every Designer Should Know",
      excerpt: "Understand the psychological principles that drive effective user experience design.",
      author: {
        name: "Priya Sharma",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "PS",
      },
      date: "May 8, 2025",
      readTime: "7 min read",
      likes: 112,
      comments: 28,
      image: "/placeholder.svg?height=250&width=500&text=UX Psychology",
      category: "Design",
    },
    {
      id: 5,
      title: "Financial Planning for Freelancers: A Step-by-Step Guide",
      excerpt: "Master your finances with these essential tips tailored specifically for freelance professionals.",
      author: {
        name: "David Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "DW",
      },
      date: "May 5, 2025",
      readTime: "9 min read",
      likes: 87,
      comments: 19,
      image: "/placeholder.svg?height=250&width=500&text=Freelance Finance",
      category: "Business",
    },
    {
      id: 6,
      title: "Mastering Content Strategy for Small Businesses",
      excerpt:
        "Learn how to develop and implement an effective content strategy that drives growth for your small business.",
      author: {
        name: "Emma Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "ER",
      },
      date: "May 3, 2025",
      readTime: "8 min read",
      likes: 94,
      comments: 22,
      image: "/placeholder.svg?height=250&width=500&text=Content Strategy",
      category: "Business",
    },
    {
      id: 7,
      title: "The Rise of No-Code Development Platforms",
      excerpt:
        "Discover how no-code platforms are democratizing software development and enabling non-technical users to build applications.",
      author: {
        name: "James Taylor",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "JT",
      },
      date: "May 1, 2025",
      readTime: "7 min read",
      likes: 76,
      comments: 18,
      image: "/placeholder.svg?height=250&width=500&text=No-Code Development",
      category: "Technology",
    },
    {
      id: 8,
      title: "Effective Remote Team Management Strategies",
      excerpt:
        "Learn proven techniques for managing distributed teams and maintaining productivity in remote work environments.",
      author: {
        name: "Olivia Martinez",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "OM",
      },
      date: "April 28, 2025",
      readTime: "9 min read",
      likes: 105,
      comments: 31,
      image: "/placeholder.svg?height=250&width=500&text=Remote Teams",
      category: "Business",
    },
    {
      id: 9,
      title: "Accessibility in Web Design: Best Practices and Tools",
      excerpt:
        "Explore essential techniques and resources for creating inclusive web experiences that work for everyone.",
      author: {
        name: "Ryan Kim",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "RK",
      },
      date: "April 25, 2025",
      readTime: "8 min read",
      likes: 118,
      comments: 27,
      image: "/placeholder.svg?height=250&width=500&text=Web Accessibility",
      category: "Design",
    },
    {
      id: 10,
      title: "The Impact of Blockchain on Digital Marketing",
      excerpt:
        "Understand how blockchain technology is reshaping digital marketing strategies and consumer relationships.",
      author: {
        name: "Natalie Wong",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "NW",
      },
      date: "April 22, 2025",
      readTime: "10 min read",
      likes: 92,
      comments: 21,
      image: "/placeholder.svg?height=250&width=500&text=Blockchain Marketing",
      category: "Technology",
    },
    {
      id: 11,
      title: "Color Theory for Digital Designers: A Practical Guide",
      excerpt:
        "Master the fundamentals of color theory and learn how to apply them effectively in your digital design projects.",
      author: {
        name: "Lucas Garcia",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "LG",
      },
      date: "April 20, 2025",
      readTime: "7 min read",
      likes: 134,
      comments: 38,
      image: "/placeholder.svg?height=250&width=500&text=Color Theory",
      category: "Design",
    },
    {
      id: 12,
      title: "Building a Successful E-commerce Business from Scratch",
      excerpt:
        "Follow this comprehensive guide to launching and growing your online store in today's competitive market.",
      author: {
        name: "Sophie Anderson",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SA",
      },
      date: "April 18, 2025",
      readTime: "11 min read",
      likes: 108,
      comments: 29,
      image: "/placeholder.svg?height=250&width=500&text=E-commerce Business",
      category: "Business",
    },
  ]

  // Filter posts based on search query and active tab
  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = activeTab === "all" || post.category.toLowerCase() === activeTab.toLowerCase()

    return matchesSearch && matchesCategory
  })

  // Get posts to display based on visibility limit
  const postsToDisplay = filteredPosts.slice(0, visiblePosts)

  const handleLoadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 6, filteredPosts.length))
  }

  const handleLike = (postId: number) => {
    setLikedPosts((prev) => {
      const isCurrentlyLiked = prev[postId]
      return {
        ...prev,
        [postId]: !isCurrentlyLiked,
      }
    })
  }

  // Get post likes count including user interactions
  const getPostLikes = (post: any) => {
    const baseLikes = post.likes
    const userLiked = likedPosts[post.id]

    return userLiked ? baseLikes + 1 : baseLikes
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between mx-auto">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="font-bold text-xl">
              Security.Plus
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
            <div className="relative hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="w-[200px] lg:w-[300px] pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon" className="md:hidden">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Blog</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our collection of articles on various topics from our community of writers.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                <div className="flex justify-center mb-8">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="technology">Technology</TabsTrigger>
                    <TabsTrigger value="design">Design</TabsTrigger>
                    <TabsTrigger value="business">Business</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {postsToDisplay.map((post) => (
                      <Card key={post.id} className="overflow-hidden flex flex-col">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="aspect-video object-cover w-full"
                          width={500}
                          height={250}
                        />
                        <CardHeader className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                              {post.category}
                            </span>
                          </div>
                          <CardTitle className="line-clamp-2">
                            <Link href={`/blog/${post.id}`} className="hover:underline">
                              {post.title}
                            </Link>
                          </CardTitle>
                          <CardDescription className="line-clamp-2 mt-2">{post.excerpt}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex items-center gap-4">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={post.author.avatar} alt={post.author.name} />
                            <AvatarFallback>{post.author.initials}</AvatarFallback>
                          </Avatar>
                          <div className="grid gap-1">
                            <p className="text-sm font-medium leading-none">{post.author.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {post.date} · {post.readTime}
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between border-t p-4">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              className={`h-8 w-8 ${likedPosts[post.id] ? "text-primary" : ""}`}
                              onClick={() => handleLike(post.id)}
                            >
                              <Heart className="h-4 w-4" />
                              <span className="sr-only">Like</span>
                            </Button>
                            <span className="text-xs text-muted-foreground">{getPostLikes(post)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MessageSquare className="h-4 w-4" />
                              <span className="sr-only">Comment</span>
                            </Button>
                            <span className="text-xs text-muted-foreground">{post.comments}</span>
                          </div>
                          <Link href={`/blog/${post.id}`}>
                            <Button variant="ghost" size="sm">
                              Read More
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="technology" className="mt-0">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {postsToDisplay
                      .filter((post) => post.category === "Technology")
                      .map((post) => (
                        <Card key={post.id} className="overflow-hidden flex flex-col">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="aspect-video object-cover w-full"
                            width={500}
                            height={250}
                          />
                          <CardHeader className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                {post.category}
                              </span>
                            </div>
                            <CardTitle className="line-clamp-2">
                              <Link href={`/blog/${post.id}`} className="hover:underline">
                                {post.title}
                              </Link>
                            </CardTitle>
                            <CardDescription className="line-clamp-2 mt-2">{post.excerpt}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex items-center gap-4">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={post.author.avatar} alt={post.author.name} />
                              <AvatarFallback>{post.author.initials}</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                              <p className="text-sm font-medium leading-none">{post.author.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {post.date} · {post.readTime}
                              </p>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between border-t p-4">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                className={`h-8 w-8 ${likedPosts[post.id] ? "text-primary" : ""}`}
                                onClick={() => handleLike(post.id)}
                              >
                                <Heart className="h-4 w-4" />
                                <span className="sr-only">Like</span>
                              </Button>
                              <span className="text-xs text-muted-foreground">{getPostLikes(post)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MessageSquare className="h-4 w-4" />
                                <span className="sr-only">Comment</span>
                              </Button>
                              <span className="text-xs text-muted-foreground">{post.comments}</span>
                            </div>
                            <Link href={`/blog/${post.id}`}>
                              <Button variant="ghost" size="sm">
                                Read More
                              </Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="design" className="mt-0">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {postsToDisplay
                      .filter((post) => post.category === "Design")
                      .map((post) => (
                        <Card key={post.id} className="overflow-hidden flex flex-col">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="aspect-video object-cover w-full"
                            width={500}
                            height={250}
                          />
                          <CardHeader className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                {post.category}
                              </span>
                            </div>
                            <CardTitle className="line-clamp-2">
                              <Link href={`/blog/${post.id}`} className="hover:underline">
                                {post.title}
                              </Link>
                            </CardTitle>
                            <CardDescription className="line-clamp-2 mt-2">{post.excerpt}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex items-center gap-4">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={post.author.avatar} alt={post.author.name} />
                              <AvatarFallback>{post.author.initials}</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                              <p className="text-sm font-medium leading-none">{post.author.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {post.date} · {post.readTime}
                              </p>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between border-t p-4">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                className={`h-8 w-8 ${likedPosts[post.id] ? "text-primary" : ""}`}
                                onClick={() => handleLike(post.id)}
                              >
                                <Heart className="h-4 w-4" />
                                <span className="sr-only">Like</span>
                              </Button>
                              <span className="text-xs text-muted-foreground">{getPostLikes(post)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MessageSquare className="h-4 w-4" />
                                <span className="sr-only">Comment</span>
                              </Button>
                              <span className="text-xs text-muted-foreground">{post.comments}</span>
                            </div>
                            <Link href={`/blog/${post.id}`}>
                              <Button variant="ghost" size="sm">
                                Read More
                              </Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="business" className="mt-0">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {postsToDisplay
                      .filter((post) => post.category === "Business")
                      .map((post) => (
                        <Card key={post.id} className="overflow-hidden flex flex-col">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="aspect-video object-cover w-full"
                            width={500}
                            height={250}
                          />
                          <CardHeader className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                {post.category}
                              </span>
                            </div>
                            <CardTitle className="line-clamp-2">
                              <Link href={`/blog/${post.id}`} className="hover:underline">
                                {post.title}
                              </Link>
                            </CardTitle>
                            <CardDescription className="line-clamp-2 mt-2">{post.excerpt}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex items-center gap-4">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={post.author.avatar} alt={post.author.name} />
                              <AvatarFallback>{post.author.initials}</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                              <p className="text-sm font-medium leading-none">{post.author.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {post.date} · {post.readTime}
                              </p>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between border-t p-4">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                className={`h-8 w-8 ${likedPosts[post.id] ? "text-primary" : ""}`}
                                onClick={() => handleLike(post.id)}
                              >
                                <Heart className="h-4 w-4" />
                                <span className="sr-only">Like</span>
                              </Button>
                              <span className="text-xs text-muted-foreground">{getPostLikes(post)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MessageSquare className="h-4 w-4" />
                                <span className="sr-only">Comment</span>
                              </Button>
                              <span className="text-xs text-muted-foreground">{post.comments}</span>
                            </div>
                            <Link href={`/blog/${post.id}`}>
                              <Button variant="ghost" size="sm">
                                Read More
                              </Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            {filteredPosts.length > visiblePosts && (
              <div className="flex justify-center mt-12">
                <Button variant="outline" onClick={handleLoadMore}>
                  Load More
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row mx-auto">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Security.Plus. All rights reserved.
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

