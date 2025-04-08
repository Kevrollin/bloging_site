"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, MessageSquare } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function FeaturedPosts() {
  const [likedPosts, setLikedPosts] = useState<Record<number, boolean>>({})

  const posts = [
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
    },
  ]

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
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden flex flex-col">
          <Link href={`/blog/${post.id}`}>
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="aspect-video object-cover w-full"
              width={500}
              height={250}
            />
          </Link>
          <CardHeader className="flex-1">
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
  )
}

