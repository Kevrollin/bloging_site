"use client"

import { Heart, Search, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { CartButton } from "@/components/cart-button"
import { useCart } from "@/components/cart-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MarketplaceClientPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [priceRange, setPriceRange] = useState([50])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedRating, setSelectedRating] = useState("all")
  const [likedProducts, setLikedProducts] = useState<Record<number, boolean>>({})
  const { addItem } = useCart()

  const allProducts = [
    {
      id: 1,
      title: "Complete Web Development Course",
      description: "A comprehensive course covering HTML, CSS, JavaScript, React, and Node.js",
      price: 49.99,
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=220&width=400&text=Web Course",
      category: "Courses",
    },
    {
      id: 2,
      title: "Premium Blog Theme",
      description: "A professionally designed theme for your blog with multiple customization options",
      price: 29.99,
      rating: 4.5,
      reviews: 87,
      image: "/placeholder.svg?height=220&width=400&text=Blog Theme",
      category: "Themes",
    },
    {
      id: 3,
      title: "SEO Optimization Guide",
      description: "Learn how to optimize your website for search engines and increase your visibility",
      price: 19.99,
      rating: 4.7,
      reviews: 56,
      image: "/placeholder.svg?height=220&width=400&text=SEO Guide",
      category: "Guides",
    },
    {
      id: 4,
      title: "Content Creation Toolkit",
      description: "A collection of templates, resources, and tools for creating engaging content",
      price: 39.99,
      rating: 4.6,
      reviews: 92,
      image: "/placeholder.svg?height=220&width=400&text=Content Toolkit",
      category: "Tools",
    },
    {
      id: 5,
      title: "Social Media Marketing Bundle",
      description: "Everything you need to create and execute a successful social media strategy",
      price: 59.99,
      rating: 4.9,
      reviews: 143,
      image: "/placeholder.svg?height=220&width=400&text=Marketing Bundle",
      category: "Courses",
    },
    {
      id: 6,
      title: "Minimalist Portfolio Template",
      description: "A clean and modern template for showcasing your work and projects",
      price: 24.99,
      rating: 4.4,
      reviews: 78,
      image: "/placeholder.svg?height=220&width=400&text=Portfolio Template",
      category: "Themes",
    },
    {
      id: 7,
      title: "Advanced JavaScript Techniques",
      description: "Master advanced JavaScript concepts and patterns for modern web development",
      price: 44.99,
      rating: 4.8,
      reviews: 112,
      image: "/placeholder.svg?height=220&width=400&text=JavaScript",
      category: "Courses",
    },
    {
      id: 8,
      title: "UI/UX Design Essentials",
      description: "Learn the fundamentals of user interface and user experience design",
      price: 34.99,
      rating: 4.7,
      reviews: 95,
      image: "/placeholder.svg?height=220&width=400&text=UI/UX Design",
      category: "Courses",
    },
    {
      id: 9,
      title: "Content Strategy Planner",
      description: "A comprehensive planner to help you develop and execute your content strategy",
      price: 17.99,
      rating: 4.5,
      reviews: 68,
      image: "/placeholder.svg?height=220&width=400&text=Content Planner",
      category: "Tools",
    },
    {
      id: 10,
      title: "Email Marketing Handbook",
      description: "Everything you need to know about creating effective email marketing campaigns",
      price: 22.99,
      rating: 4.6,
      reviews: 74,
      image: "/placeholder.svg?height=220&width=400&text=Email Marketing",
      category: "Guides",
    },
    {
      id: 11,
      title: "E-commerce Website Template",
      description: "A professional template for your online store with shopping cart functionality",
      price: 39.99,
      rating: 4.8,
      reviews: 103,
      image: "/placeholder.svg?height=220&width=400&text=E-commerce Template",
      category: "Themes",
    },
    {
      id: 12,
      title: "Freelancer's Business Guide",
      description: "Essential tips and strategies for running a successful freelance business",
      price: 27.99,
      rating: 4.7,
      reviews: 89,
      image: "/placeholder.svg?height=220&width=400&text=Freelance Guide",
      category: "Guides",
    },
  ]

  // Filter products based on search query, active tab, price range, categories, and rating
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesTab = activeTab === "all" || product.category.toLowerCase() === activeTab.toLowerCase()

    const matchesPrice = product.price <= priceRange[0]

    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)

    const matchesRating =
      selectedRating === "all" ||
      (selectedRating === "4plus" && product.rating >= 4) ||
      (selectedRating === "3plus" && product.rating >= 3)

    return matchesSearch && matchesTab && matchesPrice && matchesCategory && matchesRating
  })

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category)
      } else {
        return [...prev, category]
      }
    })
  }

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
    })
  }

  const handleLike = (productId: number) => {
    setLikedProducts((prev) => {
      const isCurrentlyLiked = prev[productId]
      return {
        ...prev,
        [productId]: !isCurrentlyLiked,
      }
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10 mx-auto">
            <Link href="/" className="font-bold text-xl">
              Security.Plus
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
            <div className="relative hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Marketplace</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover premium resources, templates, and digital products from our creators.
                </p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Price Range</h3>
                  <Slider
                    defaultValue={[50]}
                    max={100}
                    step={1}
                    className="mb-2"
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">$0</span>
                    <span className="text-sm text-muted-foreground">${priceRange[0]}</span>
                    <span className="text-sm text-muted-foreground">$100</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {["Courses", "Themes", "Guides", "Tools"].map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category.toLowerCase()}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => handleCategoryChange(category)}
                        />
                        <Label htmlFor={category.toLowerCase()}>{category}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Rating</h3>
                  <RadioGroup value={selectedRating} onValueChange={setSelectedRating}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="all" id="rating-all" />
                      <Label htmlFor="rating-all">All Ratings</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="4plus" id="rating-4plus" />
                      <Label htmlFor="rating-4plus">4★ & Above</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3plus" id="rating-3plus" />
                      <Label htmlFor="rating-3plus">3★ & Above</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="md:col-span-3">
                <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                  <div className="flex justify-start mb-8">
                    <TabsList>
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="courses">Courses</TabsTrigger>
                      <TabsTrigger value="themes">Themes</TabsTrigger>
                      <TabsTrigger value="guides">Guides</TabsTrigger>
                      <TabsTrigger value="tools">Tools</TabsTrigger>
                    </TabsList>
                  </div>
                  <TabsContent value="all" className="mt-0">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {filteredProducts.map((product) => (
                        <Card key={product.id} className="overflow-hidden flex flex-col">
                          <Link href={`/marketplace/${product.id}`}>
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.title}
                              className="aspect-video object-cover w-full"
                              width={400}
                              height={220}
                            />
                          </Link>
                          <CardHeader className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                {product.category}
                              </span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className={`h-6 w-6 ml-auto ${likedProducts[product.id] ? "text-red-500" : ""}`}
                                onClick={() => handleLike(product.id)}
                              >
                                <Heart className="h-4 w-4" />
                                <span className="sr-only">Like</span>
                              </Button>
                            </div>
                            <CardTitle className="line-clamp-1">
                              <Link href={`/marketplace/${product.id}`} className="hover:underline">
                                {product.title}
                              </Link>
                            </CardTitle>
                            <CardDescription className="line-clamp-2 mt-2">{product.description}</CardDescription>
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
                                      className={`w-5 h-5 ${
                                        index < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"
                                      }`}
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
                            <Button variant="outline" className="w-1/2" onClick={() => handleAddToCart(product)}>
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              Add to Cart
                            </Button>
                            <Button
                              className="w-1/2 ml-2"
                              onClick={() =>
                                window.open(
                                  `https://wa.me/1234567890?text=I'm interested in ${product.title} (Price: $${product.price.toFixed(2)})`,
                                  "_blank",
                                )
                              }
                            >
                              Order Now
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                    {filteredProducts.length === 0 && (
                      <div className="text-center py-12">
                        <h3 className="text-lg font-medium">No products found</h3>
                        <p className="text-muted-foreground mt-2">Try adjusting your filters or search query</p>
                      </div>
                    )}
                  </TabsContent>
                  {["courses", "themes", "guides", "tools"].map((category) => (
                    <TabsContent key={category} value={category} className="mt-0">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredProducts
                          .filter((product) => product.category.toLowerCase() === category)
                          .map((product) => (
                            <Card key={product.id} className="overflow-hidden flex flex-col">
                              <Link href={`/marketplace/${product.id}`}>
                                <img
                                  src={product.image || "/placeholder.svg"}
                                  alt={product.title}
                                  className="aspect-video object-cover w-full"
                                  width={400}
                                  height={220}
                                />
                              </Link>
                              <CardHeader className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                    {product.category}
                                  </span>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className={`h-6 w-6 ml-auto ${likedProducts[product.id] ? "text-red-500" : ""}`}
                                    onClick={() => handleLike(product.id)}
                                  >
                                    <Heart className="h-4 w-4" />
                                    <span className="sr-only">Like</span>
                                  </Button>
                                </div>
                                <CardTitle className="line-clamp-1">
                                  <Link href={`/marketplace/${product.id}`} className="hover:underline">
                                    {product.title}
                                  </Link>
                                </CardTitle>
                                <CardDescription className="line-clamp-2 mt-2">{product.description}</CardDescription>
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
                                          className={`w-5 h-5 ${
                                            index < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"
                                          }`}
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                      ))}
                                  </div>
                                  <span className="ml-2 text-sm text-muted-foreground">
                                    ({product.reviews} reviews)
                                  </span>
                                </div>
                              </CardContent>
                              <CardFooter className="flex justify-between">
                                <Button variant="outline" className="w-1/2" onClick={() => handleAddToCart(product)}>
                                  <ShoppingCart className="h-4 w-4 mr-2" />
                                  Add to Cart
                                </Button>
                                <Button
                                  className="w-1/2 ml-2"
                                  onClick={() =>
                                    window.open(
                                      `https://wa.me/1234567890?text=I'm interested in ${product.title} (Price: $${product.price.toFixed(2)})`,
                                      "_blank",
                                    )
                                  }
                                >
                                  Order Now
                                </Button>
                              </CardFooter>
                            </Card>
                          ))}
                      </div>
                      {filteredProducts.filter((p) => p.category.toLowerCase() === category).length === 0 && (
                        <div className="text-center py-12">
                          <h3 className="text-lg font-medium">No products found</h3>
                          <p className="text-muted-foreground mt-2">Try adjusting your filters or search query</p>
                        </div>
                      )}
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
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

