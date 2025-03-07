const experiences = [
  {
    title: "Full Stack Developer",
    company: "Explore Malasia",
    period: "2024 - 2025",
    description:
      `I worked at Explore Malaysia, developing and maintaining a real estate platform using Flutter for mobile, integrated with a WordPress database. I also built the backend server with Nest.js for seamless API interactions. Additionally, I managed and optimized the Linux Ubuntu server, ensuring stability and security. This role enhanced my expertise in mobile development, backend engineering, database integration, and server administration.`,
  },
  {
    title: "Senior Full Stack Developer",
    company: "Castle Digital Australia",
    period: "2022 - 2024",
    description:
      `As a Senior Developer at Castle Digital, I was responsible for full-stack and mobile application development, working with PHP, React.js, Next.js, React Native (Expo), and Flutter to build and maintain various applications. On the backend, I developed scalable and high-performance server-side applications using Rust and Go. Additionally, I handled cloud deployment and server management, configuring Ubuntu Linux environments on AWS EC2, DigitalOcean, and Linode, ensuring security, performance, and reliability across infrastructure.`,
  },
  {
    title: "Full Stack Developer",
    company: "XTendly Philippines",
    period: "2020 - 2022",
    description:
      "From 2020 to 2022, I worked at XTendly Philippines as a Full-Stack Developer, where I contributed to the development of various web applications for international and local clients. I primarily worked with React.js, Laravel, and Node.js, collaborating with my colleagues to build scalable and high-performing applications. My role involved full-stack development, API integrations, payment gateway implementation, and WordPress site development.",
  },
  {
    title: "Senior Full Stack Developer",
    company: "(ICT) Information and Communication Technology Digos City",
    period: "2018 - 2020",
    description:
      "From 2018 to 2020, I worked in the ICT field, specializing in PHP (CodeIgniter, Laravel, WordPress) and React.js, where I developed and maintained various web applications for government and business use. My role involved full-stack development, database management, API integration, UI/UX improvements, and system security to ensure efficient and scalable solutions.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Professional Experience</h2>

        <div className="max-w-3xl">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-10">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-primary bg-background"></div>

              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[7px] top-6 h-full w-[2px] bg-border"></div>
              )}

              <h3 className="text-xl font-bold">{exp.title}</h3>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <span>{exp.company}</span>
                <span className="mx-2">•</span>
                <span>{exp.period}</span>
              </div>
              <p className="leading-loose">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

