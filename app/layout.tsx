import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://agnieve.com'),
  title: "AG Nieve | Full Stack Developer | PHP, JavaScript, Rust & Go Expert",
  description:
    "Experienced Full Stack Developer with 7+ years specializing in PHP, JavaScript, Rust, and Go. Expert in building scalable web applications, microservices, and high-performance systems. View my portfolio and projects.",
  keywords: [
    "AG Nieve",
    "Full Stack Developer",
    "PHP Developer",
    "JavaScript Developer",
    "Rust Developer",
    "Go Developer",
    "Web Developer",
    "Software Engineer",
    "Web Application Development",
    "Backend Development",
    "Frontend Development",
    "API Development",
    "Microservices",
    "System Architecture"
  ],
  authors: [{ name: "AG Nieve", url: "https://agnieve.com" }],
  creator: "AG Nieve",
  publisher: "AG Nieve",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "AG Nieve | Full Stack Developer | PHP, JavaScript, Rust & Go Expert",
    description: "Experienced Full Stack Developer with 7+ years specializing in PHP, JavaScript, Rust, and Go. Expert in building scalable web applications, microservices, and high-performance systems.",
    url: "https://agnieve.com",
    siteName: "AG Nieve Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AG Nieve - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Philippines",
    emails: ["dev@agnieve.com"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AG Nieve | Full Stack Developer | PHP, JavaScript, Rust & Go Expert",
    description: "Experienced Full Stack Developer with 7+ years specializing in PHP, JavaScript, Rust, and Go. Expert in building scalable web applications, microservices, and high-performance systems.",
    images: ["https://firebasestorage.googleapis.com/v0/b/calm-point.firebasestorage.app/o/portfolio%2FAG_Logo-removebg-preview.png?alt=media&token=48e87436-a87f-4329-8133-e2af0f10ab24"],
    creator: "@agnieve",
    site: "@agnieve",
  },
  alternates: {
    canonical: "https://agnieve.com",
  },
  generator: "Next.js",
  applicationName: "AG Nieve Portfolio",
  referrer: "origin-when-cross-origin",
  category: "technology"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/calm-point.firebasestorage.app/o/portfolio%2FAG_Logo-removebg-preview.png?alt=media&token=48e87436-a87f-4329-8133-e2af0f10ab24" />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'