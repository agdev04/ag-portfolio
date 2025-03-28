import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://agnieve.com'),
  icons: {
    icon: 'https://res.cloudinary.com/diogkehjt/image/upload/v1741449742/AG_Logo-removebg-preview_hpolqy.avif',
    shortcut: 'https://res.cloudinary.com/diogkehjt/image/upload/v1741449742/AG_Logo-removebg-preview_hpolqy.avif',
    apple: 'https://res.cloudinary.com/diogkehjt/image/upload/v1741449742/AG_Logo-removebg-preview_hpolqy.avif',
  },
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
        url: "https://res.cloudinary.com/diogkehjt/image/upload/v1741449742/AG_Logo-removebg-preview_hpolqy.avif",
        width: 1200,
        height: 630,
        alt: "AG Nieve - Full Stack Developer"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AG Nieve | Full Stack Developer",
    description: "Full Stack Developer specializing in PHP, JavaScript, Rust, and Go",
    images: ["https://res.cloudinary.com/diogkehjt/image/upload/v1741449742/AG_Logo-removebg-preview_hpolqy.avif"],
    creator: "@agnieve"
  },
  alternates: {
    canonical: "https://agnieve.com"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/ag_logo.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "AG Nieve",
              "url": "https://agnieve.com",
              "sameAs": [
                "https://github.com/agdev04",
                "https://ph.linkedin.com/in/ag-nieve-a9105627b?trk=org-employees"
              ],
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "description": "Experienced Full Stack Developer with 7+ years specializing in PHP, JavaScript, Rust, and Go",
              "knowsAbout": [
                "Web Development",
                "PHP",
                "JavaScript",
                "Rust",
                "Go",
                "System Architecture",
                "Microservices"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'