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

          <div className="rounded-3xl relative h-80 md:h-96 overflow-hidden shadow-xl">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/calm-point.firebasestorage.app/o/portfolio%2Fimage_fx_%20(30).jpg?alt=media&token=3df87887-cd90-4e4c-8861-bf6280cf7d24"
              alt="AG Nieve"
              fill
              className="object-cover"
              priority
              quality={90}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2wBDAR0XFx4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
        </div>
      </div>
    </section>
  )
}

