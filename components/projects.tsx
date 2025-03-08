import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Olympus Insights.io",
    description:
      "Olympus Insights.io is an educational web and mobile platform for learning while earning cryptocurrency. ",
    image: "https://firebasestorage.googleapis.com/v0/b/calm-point.firebasestorage.app/o/portfolio%2Foli.png?alt=media&token=4500cf53-3384-402b-a5f9-cb8d9da519bd",
    technologies: ["React.js", "Nest.js", "PostgresQL", "React Native", "Rust"],
    liveUrl: "https://olympusinsights.io/",
    githubUrl: "https://github.com/agdev04/castle-lms-api",
  },
  {
    title: "Keen2Work",
    description:
      "Keen2Work is a web application that helps job seekers find jobs that match their skills and experience. ",
    image: "https://firebasestorage.googleapis.com/v0/b/calm-point.firebasestorage.app/o/portfolio%2Fk2w.png?alt=media&token=9cdfa7e6-57b1-4ca1-8f3d-6b3c9fa445bd",
    technologies: ["React.js", "Nest.js", "PostgresQL", "React Native"],
    liveUrl: "https://www.k2w.com.au/",
    githubUrl: "https://github.com/agdev04/castle-keen2work-api",
  },
  {
    title: "WhatKey.io",
    description:
      "A website that helps users find the best keyboard for their needs. Using AI to analyze user input and provide recommendations.",
    image: "https://firebasestorage.googleapis.com/v0/b/calm-point.firebasestorage.app/o/portfolio%2Fwhatkey.png?alt=media&token=a3bb11fb-4e7e-4651-8bf8-1bc97f8dcb3a",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "React Native", "Tensorflow.js"],
    liveUrl: "https://whatkey.io/",
    githubUrl: "https://github.com/agdev04/castle-whatkey-api.git",
  },
  {
    title: "GPA Rebates",
    description: "A platform for managing and processing GPA rebates for customers with appliances.",
    image: "https://firebasestorage.googleapis.com/v0/b/calm-point.firebasestorage.app/o/portfolio%2Fgpa_rebates.png?alt=media&token=4e4e7600-9483-4c7b-abc7-aeac8ea37275",
    technologies: ["JavaScript", "React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://gparebates.com/",
    githubUrl: "https://github.com/agnieve70/gpa-dsm",
  },
  {
    title: "XFFiliate",
    description: "An affiliate marketing platform for e-commerce businesses.",
    image: "https://firebasestorage.googleapis.com/v0/b/calm-point.firebasestorage.app/o/portfolio%2Fxffiliate.png?alt=media&token=82223293-2834-4a42-8db0-1c25f4c7ae56",
    technologies: ["PHP", "Laravel", "React.js", "Node.js"],
    liveUrl: "https://xffiliate.prosperna.com/",
    githubUrl: "#",
  },
  {
    title: "Digos City Website",
    description:
      "Website for the city of Digos, Philippines. Built with PHP, Wordpress and Bootstrap.",
    image: "https://firebasestorage.googleapis.com/v0/b/calm-point.firebasestorage.app/o/portfolio%2Fdigos_city.png?alt=media&token=288aa4b0-f6b9-4cf5-99df-9a4226e3523b",
    technologies: ["PHP", "Wordpress", "Boostrap", "MySql"],
    liveUrl: "https://www.digoscity.gov.ph/",
    githubUrl: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2wBDAR0XFx4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium bg-secondary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-overlay absolute inset-0 bg-primary/90 flex flex-col items-center justify-center p-6 opacity-0 transition-opacity duration-300 text-primary-foreground">
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-primary-foreground/90 mb-6 text-center">{project.description}</p>
                <div className="flex gap-4">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-primary-foreground text-primary px-3 py-1.5 rounded-md text-sm font-medium hover:bg-primary-foreground/90"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Link>
                  
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${project.githubUrl === '#' ? 'hidden' : '' } flex items-center gap-1 bg-primary-foreground/20 text-primary-foreground px-3 py-1.5 rounded-md text-sm font-medium hover:bg-primary-foreground/30`}
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

