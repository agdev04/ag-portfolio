import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-secondary/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
            <Image alt="AG Nieve Logo" src={"https://res.cloudinary.com/diogkehjt/image/upload/v1741449742/AG_Logo-removebg-preview_hpolqy.avif"} width={45} height={45} />
            </Link>
            <p className="text-sm text-muted-foreground mt-1">&copy; {currentYear} AG Nieve. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="mailto:contact@agnieve.dev"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/agnieve04"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://ph.linkedin.com/in/ag-nieve-a9105627b?trk=org-employees"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

