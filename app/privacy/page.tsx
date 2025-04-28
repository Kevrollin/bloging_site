import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Privacy Policy | SecurityPlus",
  description: "Privacy practices and data protection policies for SecurityPlus",
}

export default function PrivacyPage() {
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
        <div className="container max-w-3xl py-12 md:py-20 mx-auto">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: April 28, 2025</p>
          </div>
          <Separator className="my-8" />
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Security.Plus. Your privacy is critically important to us. This Privacy Policy explains how we collect,
              use, and protect your personal information when you use our platform.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We collect several types of information for various purposes to provide and improve our Service, including:
            </p>
            <ul>
              <li>Personal Data (such as email address, name, profile information)</li>
              <li>Usage Data (such as browsing history, pages visited, time spent)</li>
              <li>Cookies and Tracking Technologies</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Provide, operate, and maintain our Service</li>
              <li>Improve, personalize, and expand our Service</li>
              <li>Understand and analyze how you use our Service</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through partners</li>
              <li>Send you updates, marketing, and promotional materials (you can opt-out anytime)</li>
              <li>Detect and prevent fraud and technical issues</li>
            </ul>

            <h2>4. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to others. However, we may share data with trusted partners
              who assist us in operating our Service, provided those parties agree to keep this information confidential.
            </p>

            <h2>5. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to monitor activity on our Service and hold certain information.
              You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We are serious about security. We use administrative, technical, and physical security measures to protect your
              personal information. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2>7. Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have rights under data protection laws, including:
            </p>
            <ul>
              <li>The right to access, update, or delete your information</li>
              <li>The right to withdraw consent</li>
              <li>The right to data portability</li>
              <li>The right to lodge a complaint with a data protection authority</li>
            </ul>

            <h2>8. Third-Party Services</h2>
            <p>
              Our Service may contain links to third-party websites and services. We are not responsible for the privacy practices
              or the content of third parties.
            </p>

            <h2>9. Children's Privacy</h2>
            <p>
              Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information
              from children. If you are a parent or guardian and you believe that your child has provided us with personal data, please contact us.
            </p>

            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy
              on this page and updating the "Last updated" date at the top.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@security.plus">privacy@security.plus</a>.
            </p>
          </div>
        </div>
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
            <Link href="/privacy" className="text-sm text-primary hover:underline">
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
