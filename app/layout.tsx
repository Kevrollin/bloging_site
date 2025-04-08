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
      <head>
  {/* Google AdSense script */}
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3558096008616952"
          crossOrigin="anonymous"></script>

  {/* Metadata */}
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="A comprehensive blog platform with user profiles, article management, and marketplace features." />
  <meta name="keywords" content="blog, articles, marketplace, community, writing" />
  <meta name="author" content="BlogHub Team" />
  <meta name="generator" content="v0.dev" />
  
  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:url" content="https://bloghub.example.com" />
  <meta property="og:title" content="BlogHub - Discover, Learn, and Share" />
  <meta property="og:description" content="A comprehensive blog platform with user profiles, article management, and marketplace features." />
  <meta property="og:site_name" content="BlogHub" />
  
  {/* Twitter Card */}
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="BlogHub - Discover, Learn, and Share" />
  <meta property="twitter:description" content="A comprehensive blog platform with user profiles, article management, and marketplace features." />
  <meta property="twitter:creator" content="@bloghub" />

  {/* Icons */}
  <link rel="icon" href="/favicon.ico" />
  <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

  {/* Web Manifest */}
  <link rel="manifest" href="/site.webmanifest" />
  
  {/* Google Fonts */}
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
</head>

      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'