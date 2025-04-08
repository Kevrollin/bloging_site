"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FeaturedPosts } from "@/components/featured-posts"
import { ModeToggle } from "@/components/mode-toggle"
import { CartButton } from "@/components/cart-button"
import { useCart } from "@/components/cart-provider"

export default function Home() {
  const { addItem } = useCart()

  const marketplaceHighlights = [
    {
      id: 1,
      title: "Complete Web Development Course",
      description: "A comprehensive course covering HTML, CSS, JavaScript, React, and Node.js",
      price: 49.99,
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=220&width=400&text=Web Course",
    },
    {
      id: 2,
      title: "Premium Blog Theme",
      description: "A professionally designed theme for your blog with multiple customization options",
      price: 29.99,
      rating: 4.5,
      reviews: 87,
      image: "/placeholder.svg?height=220&width=400&text=Blog Theme",
    },
    {
      id: 3,
      title: "SEO Optimization Guide",
      description: "Learn how to optimize your website for search engines and increase your visibility",
      price: 19.99,
      rating: 4.7,
      reviews: 56,
      image: "/placeholder.svg?height=220&width=400&text=SEO Guide",
    },
  ]

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
    })
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
              <Link href="/" className="text-sm font-medium text-primary">
                Home
              </Link>
              <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover, Learn, and Share
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join our community of writers and readers. Explore insightful articles and find valuable resources
                    in our marketplace.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/blog">
                    <Button size="lg" className="w-full">
                      Explore Articles
                    </Button>
                  </Link>
                  <Link href="/marketplace">
                    <Button size="lg" variant="outline" className="w-full">
                      Visit Marketplace
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Hero Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Articles</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our most popular and trending articles from our community of writers.
                </p>
              </div>
            </div>
            <FeaturedPosts />
            <div className="flex justify-center mt-8">
              <Link href="/blog">
                <Button variant="outline" size="lg">
                  View All Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Marketplace Highlights</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover premium resources, templates, and digital products from our creators.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              {marketplaceHighlights.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <Link href={`/marketplace/${product.id}`}>
                    <img
                      src={product.image || "/placeholder.svg"}
                      width={400}
                      height={220}
                      alt={product.title}
                      className="aspect-video object-cover w-full"
                    />
                  </Link>
                  <CardHeader>
                    <CardTitle>
                      <Link href={`/marketplace/${product.id}`} className="hover:underline">
                        {product.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <div className="flex">
                        {Array(5)
                          .fill(null)
                          .map((_, index) => (
                            <svg
                              key={index}
                              className={`w-5 h-5 ${index < product.rating ? "text-yellow-500" : "text-gray-300"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">({product.reviews} reviews)</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </Button>
                    <Link href={`/marketplace/${product.id}`}>
                      <Button>Order Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/marketplace">
                <Button variant="outline" size="lg">
                  Explore Marketplace
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
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

