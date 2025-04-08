import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const metadata = {
  title: "About Us | BlogHub",
  description: "Learn more about BlogHub, our mission, and our team",
}

export default function AboutPage() {
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
              <Link href="/about" className="text-sm font-medium text-primary">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About BlogHub</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We're on a mission to create a platform where knowledge is shared, ideas are explored, and
                    communities thrive.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Our Story"
                  width={600}
                  height={400}
                  alt="About BlogHub"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Mission</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At BlogHub, we believe in the power of knowledge sharing and community building. Our platform is
                  designed to connect writers, readers, and creators in a space where ideas can flourish and meaningful
                  connections can be made.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 md:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-8 w-8 text-primary"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                    <path d="M12 13v8" />
                    <path d="M5 13v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Quality Content</h3>
                <p className="text-muted-foreground">
                  We curate and promote high-quality, informative, and engaging content that adds value to our readers'
                  lives.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-8 w-8 text-primary"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 6.1H3" />
                    <path d="M21 12.1H3" />
                    <path d="M15.1 18H3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Community Building</h3>
                <p className="text-muted-foreground">
                  We foster a supportive environment where writers and readers can connect, collaborate, and grow
                  together.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-8 w-8 text-primary"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Creator Support</h3>
                <p className="text-muted-foreground">
                  We provide tools and resources to help creators monetize their expertise and reach a wider audience.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Meet Our Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The passionate individuals behind BlogHub who are dedicated to creating the best platform for content
                  creators and readers.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Founder & CEO",
                  bio: "With over 15 years of experience in digital publishing, Sarah founded BlogHub to empower writers and content creators.",
                  avatar: "/placeholder.svg?height=150&width=150&text=SJ",
                  initials: "SJ",
                },
                {
                  name: "Michael Chen",
                  role: "CTO",
                  bio: "A tech enthusiast with a passion for creating intuitive user experiences and scalable web applications.",
                  avatar: "/placeholder.svg?height=150&width=150&text=MC",
                  initials: "MC",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Head of Content",
                  bio: "Former editor at a major publication, Emily ensures that BlogHub maintains the highest content standards.",
                  avatar: "/placeholder.svg?height=150&width=150&text=ER",
                  initials: "ER",
                },
                {
                  name: "David Wilson",
                  role: "Marketing Director",
                  bio: "A digital marketing expert who specializes in building communities and driving engagement.",
                  avatar: "/placeholder.svg?height=150&width=150&text=DW",
                  initials: "DW",
                },
                {
                  name: "Priya Sharma",
                  role: "UX Designer",
                  bio: "Award-winning designer focused on creating beautiful, accessible, and user-friendly interfaces.",
                  avatar: "/placeholder.svg?height=150&width=150&text=PS",
                  initials: "PS",
                },
                {
                  name: "James Taylor",
                  role: "Community Manager",
                  bio: "Dedicated to fostering meaningful connections between writers and readers within the BlogHub community.",
                  avatar: "/placeholder.svg?height=150&width=150&text=JT",
                  initials: "JT",
                },
              ].map((member, index) => (
                <div key={index} className="flex flex-col items-center space-y-4 text-center">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join Our Community</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Become a part of BlogHub and start sharing your knowledge, connecting with like-minded individuals,
                  and discovering valuable content.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="w-full">
                    Sign Up Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </Link>
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
            <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

