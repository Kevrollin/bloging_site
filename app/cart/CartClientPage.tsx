"use client"

import Link from "next/link"
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"

export default function CartClientPage() {
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
              <Link href="/marketplace" className="text-sm font-medium transition-colors hover:text-primary">
                Marketplace
              </Link>
              <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
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
        <div className="container py-12 md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:gap-16">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold">Shopping Cart</h1>
                <span className="text-muted-foreground">3 items</span>
              </div>
              <div className="space-y-8">
                {[
                  {
                    id: 1,
                    title: "Complete Web Development Course",
                    price: 49.99,
                    quantity: 1,
                    image: "/placeholder.svg?height=120&width=200&text=Web Course",
                  },
                  {
                    id: 2,
                    title: "Premium Blog Theme",
                    price: 29.99,
                    quantity: 1,
                    image: "/placeholder.svg?height=120&width=200&text=Blog Theme",
                  },
                  {
                    id: 3,
                    title: "SEO Optimization Guide",
                    price: 19.99,
                    quantity: 1,
                    image: "/placeholder.svg?height=120&width=200&text=SEO Guide",
                  },
                ].map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row gap-4 pb-8 border-b">
                    <div className="w-full sm:w-32 h-32 overflow-hidden rounded-md">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">Digital Product</p>
                        </div>
                        <p className="font-medium">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border rounded-md">
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                            <Minus className="h-4 w-4" />
                            <span className="sr-only">Decrease quantity</span>
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                            <Plus className="h-4 w-4" />
                            <span className="sr-only">Increase quantity</span>
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/marketplace">
                  <Button variant="outline">Continue Shopping</Button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-96">
              <div className="rounded-lg border bg-card p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>$99.97</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Discount</span>
                    <span>-$10.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>$89.97</span>
                  </div>
                  <div className="pt-4">
                    <div className="flex gap-2 mb-4">
                      <Input placeholder="Discount code" />
                      <Button variant="outline">Apply</Button>
                    </div>
                    <Button
                      className="w-full"
                      size="lg"
                      onClick={() =>
                        window.open(
                          `https://wa.me/1234567890?text=I'd like to purchase items in my cart (Total: $89.97)`,
                          "_blank",
                        )
                      }
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Checkout via WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
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

