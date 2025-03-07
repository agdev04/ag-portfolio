import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-4">
              Hello! I'm <span className="highlight">AG Nieve</span>, a passionate Full Stack Developer with 7 years of
              experience building web applications and services. I specialize in PHP, JavaScript, Rust, and Go, creating
              efficient, scalable, and maintainable solutions for complex problems.
            </p>
            <p className="text-lg mb-4">
              My journey in software development began with a fascination for how technology can solve real-world
              challenges. This curiosity has driven me to continuously expand my skills and stay at the forefront of
              industry trends.
            </p>
            <p className="text-lg">
              I thrive in collaborative environments where I can contribute my technical expertise while learning from
              others. Whether it's architecting robust backend systems or crafting intuitive user interfaces, I'm
              committed to delivering high-quality code that makes a difference.
            </p>
          </div>

          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <Image src="/placeholder.svg?height=600&width=600" alt="AG Nieve" fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  )
}

