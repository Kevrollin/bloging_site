"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, Heart, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ModeToggle } from "@/components/mode-toggle"
import { CartButton } from "@/components/cart-button"
import { useCart } from "@/components/cart-provider"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [isLiked, setIsLiked] = useState(false)
  const { addItem } = useCart()

  // In a real app, you would fetch the product data based on the ID
  const product = {
    id: Number.parseInt(params.id),
    title: "Complete Web Development Course",
    description:
      "A comprehensive course covering HTML, CSS, JavaScript, React, and Node.js. Perfect for beginners and intermediate developers looking to enhance their skills.",
    longDescription: `
      <p>Are you looking to become a professional web developer or enhance your existing skills? Our Complete Web Development Course is designed to take you from beginner to professional through a comprehensive curriculum covering all essential aspects of modern web development.</p>
      
      <h3>What You'll Learn:</h3>
      <ul>
        <li>HTML5 & CSS3: Build the structure and style of your websites with the latest standards</li>
        <li>JavaScript: Master the programming language of the web with ES6+ features</li>
        <li>React.js: Create interactive user interfaces with the most popular frontend library</li>
        <li>Node.js: Develop server-side applications with JavaScript</li>
        <li>MongoDB: Store and manage your data with a flexible, document-based database</li>
        <li>Responsive Design: Ensure your websites look great on all devices</li>
        <li>API Development: Create and consume RESTful APIs</li>
        <li>Authentication & Security: Implement user authentication and secure your applications</li>
      </ul>
      
      <h3>Course Features:</h3>
      <ul>
        <li>50+ hours of video content</li>
        <li>100+ coding exercises and challenges</li>
        <li>10 real-world projects to build your portfolio</li>
        <li>Downloadable resources and cheat sheets</li>
        <li>Certificate of completion</li>
        <li>Lifetime access to course updates</li>
      </ul>
      
      <h3>Requirements:</h3>
      <ul>
        <li>Basic computer skills</li>
        <li>No prior programming experience required</li>
        <li>A computer with internet access</li>
      </ul>
      
      <p>Whether you're looking to start a career in web development, create your own websites, or improve your development skills, this course provides everything you need to succeed in the world of web development.</p>
    `,
    price: 49.99,
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=400&width=600&text=Web Course",
    category: "Courses",
    features: [
      "50+ hours of video content",
      "100+ coding exercises",
      "10 real-world projects",
      "Downloadable resources",
      "Certificate of completion",
      "Lifetime access",
    ],
    instructor: {
      name: "Alex Johnson",
      bio: "Senior Web Developer with 10+ years of experience",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    relatedProducts: [
      {
        id: 7,
        title: "Advanced JavaScript Techniques",
        price: 44.99,
        image: "/placeholder.svg?height=150&width=250&text=JavaScript",
      },
      {
        id: 8,
        title: "UI/UX Design Essentials",
        price: 34.99,
        image: "/placeholder.svg?height=150&width=250&text=UI/UX Design",
      },
      {
        id: 5,
        title: "Social Media Marketing Bundle",
        price: 59.99,
        image: "/placeholder.svg?height=150&width=250&text=Marketing Bundle",
      },
    ],
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: quantity,
      image: product.image,
    })
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
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
              <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
                Blog
              </Link>
              <Link href="/marketplace" className="text-sm font-medium text-primary">
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
        <div className="container py-8 md:py-12">
          <div className="mb-6">
            <Link href="/marketplace" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Marketplace
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-lg border">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full object-cover"
                  width={600}
                  height={400}
                />
              </div>

              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="overflow-hidden rounded-md border">
                    <img
                      src={`/placeholder.svg?height=100&width=150&text=Preview ${i}`}
                      alt={`Product preview ${i}`}
                      className="aspect-[3/2] w-full object-cover"
                      width={150}
                      height={100}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    {product.category}
                  </span>
                </div>
                <h1 className="text-3xl font-bold">{product.title}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    {Array(5)
                      .fill(null)
                      .map((_, index) => (
                        <Star
                          key={index}
                          className={`h-5 w-5 ${
                            index < Math.floor(product.rating) ? "fill-yellow-500 text-yellow-500" : "text-gray-300"
                          }`}
                        />
                      ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground">{product.description}</p>

              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold">${product.price.toFixed(2)}</div>
                <div className="text-sm text-muted-foreground line-through">${(product.price * 1.2).toFixed(2)}</div>
                <div className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:bg-green-700/20 dark:text-green-500">
                  20% OFF
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="font-medium">Quantity:</div>
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-none"
                      onClick={() => handleQuantityChange(quantity - 1)}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-none"
                      onClick={() => handleQuantityChange(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button className="flex-1" onClick={handleAddToCart}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className={`flex-1 ${isLiked ? "text-red-500" : ""}`} onClick={handleLike}>
                    <Heart className={`mr-2 h-4 w-4 ${isLiked ? "fill-red-500" : ""}`} />
                    {isLiked ? "Saved to Wishlist" : "Add to Wishlist"}
                  </Button>
                </div>

                <Button
                  className="w-full"
                  onClick={() =>
                    window.open(
                      `https://wa.me/1234567890?text=I'm interested in ${product.title} (Price: $${product.price.toFixed(2)})`,
                      "_blank",
                    )
                  }
                >
                  Buy Now via WhatsApp
                </Button>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="font-semibold">Key Features:</h3>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <img
                    src={product.instructor.avatar || "/placeholder.svg"}
                    alt={product.instructor.name}
                    className="h-12 w-12 rounded-full object-cover"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="font-semibold">Instructor: {product.instructor.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.instructor.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Tabs defaultValue="description">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-6">
                <div
                  className="prose prose-gray dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: product.longDescription }}
                />
              </TabsContent>
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {[
                    {
                      name: "Sarah Miller",
                      avatar: "/placeholder.svg?height=40&width=40",
                      rating: 5,
                      date: "2 months ago",
                      comment:
                        "This course exceeded my expectations! The content is well-structured and easy to follow, even for someone with no prior programming experience. The instructor explains complex concepts in a simple way, and the projects helped me apply what I learned. Highly recommended!",
                    },
                    {
                      name: "Michael Chen",
                      avatar: "/placeholder.svg?height=40&width=40",
                      rating: 4,
                      date: "3 months ago",
                      comment:
                        "Great course with lots of practical examples. I especially enjoyed the React and Node.js sections. The only reason I'm giving 4 stars instead of 5 is that some of the content could use updating to the latest versions of the frameworks.",
                    },
                    {
                      name: "Emily Rodriguez",
                      avatar: "/placeholder.svg?height=40&width=40",
                      rating: 5,
                      date: "1 month ago",
                      comment:
                        "As someone who has tried multiple web development courses, this is by far the most comprehensive. The instructor's teaching style is engaging, and the projects are realistic and challenging. I feel much more confident in my skills after completing this course.",
                    },
                  ].map((review, index) => (
                    <div key={index} className="rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.name}
                          className="h-10 w-10 rounded-full object-cover"
                          width={40}
                          height={40}
                        />
                        <div>
                          <div className="font-semibold">{review.name}</div>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {Array(5)
                                .fill(null)
                                .map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                            </div>
                            <span className="text-xs text-muted-foreground">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-sm">{review.comment}</p>
                    </div>
                  ))}

                  <Button variant="outline" className="w-full">
                    Load More Reviews
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="faq" className="mt-6">
                <div className="space-y-4">
                  {[
                    {
                      question: "How long do I have access to the course?",
                      answer:
                        "You will have lifetime access to the course, including all future updates and additions.",
                    },
                    {
                      question: "Is this course suitable for beginners?",
                      answer:
                        "Yes, this course is designed for both beginners and intermediate developers. We start with the basics and gradually move to more advanced topics.",
                    },
                    {
                      question: "Do I get a certificate upon completion?",
                      answer:
                        "Yes, you will receive a certificate of completion that you can add to your portfolio or LinkedIn profile.",
                    },
                    {
                      question: "Can I download the course videos for offline viewing?",
                      answer: "Yes, all videos are downloadable for offline viewing on the mobile app.",
                    },
                    {
                      question: "Is there any support if I have questions?",
                      answer:
                        "Yes, you can ask questions in the course discussion forum, and the instructor or teaching assistants will respond within 24-48 hours.",
                    },
                  ].map((faq, index) => (
                    <div key={index} className="rounded-lg border p-4">
                      <h3 className="font-semibold">{faq.question}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {product.relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/marketplace/${relatedProduct.id}`}>
                  <div className="rounded-lg border overflow-hidden transition-all hover:shadow-md">
                    <img
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.title}
                      className="aspect-video w-full object-cover"
                      width={250}
                      height={150}
                    />
                    <div className="p-4">
                      <h3 className="font-semibold">{relatedProduct.title}</h3>
                      <p className="mt-1 font-medium">${relatedProduct.price.toFixed(2)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
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

