import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Terms of Service | BlogHub",
  description: "Terms and conditions for using the BlogHub platform",
}

export default function TermsPage() {
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
        <div className="container max-w-3xl py-12 md:py-20">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: April 7, 2025</p>
          </div>
          <Separator className="my-8" />
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Welcome to BlogHub. These Terms of Service govern your use of our website, services, and products. By
              accessing or using BlogHub, you agree to be bound by these Terms. If you disagree with any part of the
              terms, you may not access the service.
            </p>

            <h2>2. Definitions</h2>
            <p>
              <strong>Service</strong> refers to the BlogHub website and platform operated by BlogHub Inc.
              <br />
              <strong>User</strong> refers to individuals who access or use the Service.
              <br />
              <strong>Content</strong> refers to text, images, videos, audio, and other materials that may be protected
              by intellectual property laws.
            </p>

            <h2>3. Account Registration</h2>
            <p>
              To access certain features of the Service, you may be required to register for an account. You agree to
              provide accurate, current, and complete information during the registration process and to update such
              information to keep it accurate, current, and complete.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access the Service and for any
              activities or actions under your password. We encourage you to use "strong" passwords (passwords that use
              a combination of upper and lower case letters, numbers, and symbols) with your account.
            </p>

            <h2>4. User Content</h2>
            <p>
              Our Service allows you to post, link, store, share, and otherwise make available certain information,
              text, graphics, videos, or other material. You are responsible for the Content that you post on or through
              the Service, including its legality, reliability, and appropriateness.
            </p>
            <p>
              By posting Content on or through the Service, you represent and warrant that: (i) the Content is yours
              (you own it) and/or you have the right to use it and the right to grant us the rights and license as
              provided in these Terms, and (ii) that the posting of your Content on or through the Service does not
              violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any
              person or entity.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              The Service and its original content (excluding Content provided by users), features, and functionality
              are and will remain the exclusive property of BlogHub Inc. and its licensors. The Service is protected by
              copyright, trademark, and other laws of both the United States and foreign countries.
            </p>
            <p>
              Our trademarks and trade dress may not be used in connection with any product or service without the prior
              written consent of BlogHub Inc.
            </p>

            <h2>6. Marketplace</h2>
            <p>
              BlogHub provides a marketplace where users can buy and sell digital products. By listing a product for
              sale, you represent and warrant that you have the right to sell the product and that the product does not
              infringe on any third party's intellectual property rights.
            </p>
            <p>
              As a buyer, you agree to pay for products you purchase and to comply with the terms of sale for each
              product. BlogHub is not responsible for the quality, safety, legality, or any other aspect of the products
              sold on the marketplace.
            </p>

            <h2>7. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice
              or liability, under our sole discretion, for any reason whatsoever and without limitation, including but
              not limited to a breach of the Terms.
            </p>
            <p>
              If you wish to terminate your account, you may simply discontinue using the Service, or notify us that you
              wish to delete your account.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              In no event shall BlogHub Inc., nor its directors, employees, partners, agents, suppliers, or affiliates,
              be liable for any indirect, incidental, special, consequential or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your
              access to or use of or inability to access or use the Service; (ii) any conduct or content of any third
              party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or
              alteration of your transmissions or content, whether based on warranty, contract, tort (including
              negligence) or any other legal theory, whether or not we have been informed of the possibility of such
              damage.
            </p>

            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material we will provide at least 30 days' notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>
            <p>
              By continuing to access or use our Service after any revisions become effective, you agree to be bound by
              the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:support@bloghub.com">support@bloghub.com</a>.
            </p>
          </div>
        </div>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 BlogHub. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-primary hover:underline">
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

