import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export const metadata = {
  title: "Contact Us | BlogHub",
  description: "Get in touch with the BlogHub team",
}

export default function ContactPage() {
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back
                    to you as soon as possible.
                  </p>
                </div>
                <div className="space-y-4 mt-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>123 Blog Street, San Francisco, CA 94107</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>support@bloghub.com</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6 rounded-lg border p-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Subject of your message" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
                </div>
                <Button className="w-full">Send Message</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about BlogHub.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 md:gap-12">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How do I create an account?</h3>
                <p className="text-muted-foreground">
                  You can create an account by clicking the "Sign Up" button in the top right corner of the page. Follow
                  the prompts to complete your registration.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How do I publish an article?</h3>
                <p className="text-muted-foreground">
                  After logging in, navigate to your dashboard and click on "New Article." You can then use our editor
                  to write and format your article before publishing.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How do I sell products in the marketplace?</h3>
                <p className="text-muted-foreground">
                  To sell products, you need to have a verified account. Once verified, you can list your products by
                  going to the marketplace section and clicking "Sell a Product."
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept major credit cards, PayPal, and bank transfers. All payments are processed securely through
                  our payment gateway.
                </p>
              </div>
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
            <Link href="/contact" className="text-sm text-primary hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

