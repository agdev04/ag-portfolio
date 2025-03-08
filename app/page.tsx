import dynamic from 'next/dynamic'
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"

const About = dynamic(() => import("@/components/about"), { ssr: true })
const Skills = dynamic(() => import("@/components/skills"), { ssr: true })
const Projects = dynamic(() => import("@/components/projects"), { ssr: true })
const Experience = dynamic(() => import("@/components/experience"), { ssr: true })
const Contact = dynamic(() => import("@/components/contact"), { ssr: true })
const Footer = dynamic(() => import("@/components/footer"), { ssr: true })
const ScrollToSection = dynamic(() => import("@/components/scroll-to-section"), { ssr: true })
const Resume = dynamic(() => import("@/components/resume"), { ssr: true })

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ScrollToSection />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

