import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/components/cart-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "BlogHub - Discover, Learn, and Share",
    template: "%s | BlogHub",
  },
  description: "A comprehensive blog platform with user profiles, article management, and marketplace features.",
  keywords: ["blog", "articles", "marketplace", "community", "writing"],
  authors: [{ name: "BlogHub Team" }],
  creator: "BlogHub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bloghub.example.com",
    title: "BlogHub - Discover, Learn, and Share",
    description: "A comprehensive blog platform with user profiles, article management, and marketplace features.",
    siteName: "BlogHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlogHub - Discover, Learn, and Share",
    description: "A comprehensive blog platform with user profiles, article management, and marketplace features.",
    creator: "@bloghub",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'