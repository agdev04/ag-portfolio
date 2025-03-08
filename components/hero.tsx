import { ArrowDown } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AG Nieve - Full Stack Developer Portfolio | Home",
  description: "Experienced Full Stack Developer with expertise in PHP, JavaScript, Rust, and Go. Discover my portfolio of web applications and software solutions."
}

export default function Hero() {
  return (
    <section 
      id="hero" 
      aria-label="Introduction"
      className="relative h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            itemScope 
            itemType="https://schema.org/Person"
          >
            <span className="block">Hi, I'm <span itemProp="name">AG Nieve</span></span>
            <span className="block mt-2 text-primary" itemProp="jobTitle">Full Stack Developer</span>
          </h1>
          <p 
            className="mt-6 max-w-lg mx-auto text-lg text-muted-foreground"
            itemProp="description"
          >
            Crafting robust and elegant solutions with PHP, JavaScript, Rust, and Go. With 7 years of experience
            building modern web applications.
          </p>
          <div className="mt-10 flex justify-center gap-4" role="navigation" aria-label="Primary">
            <Link
              href="#contact"
              className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label="Contact AG Nieve"
            >
              Get in Touch
            </Link>
            <Link
              href="#projects"
              className="rounded-md bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground shadow-sm hover:bg-secondary/80"
              aria-label="View AG Nieve's Projects"
            >
              View My Work
            </Link>
          </div>
        </div>
      </div>

      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        role="complementary"
      >
        <Link 
          href="#about" 
          aria-label="Scroll down to About section"
          className="focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-2"
        >
          <ArrowDown className="h-6 w-6 text-primary" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

