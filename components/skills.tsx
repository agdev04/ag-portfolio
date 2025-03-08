import {
  SiPhp,
  SiJavascript,
  SiRust,
  SiGo,
  SiReact,
  SiExpo,
  SiLaravel,
  SiNodedotjs,
  SiDocker,
  SiAmazonwebservices,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiCodeigniter,
  SiWordpress,
  SiTailwindcss,
  SiLinux,
  SiNextdotjs,
} from "react-icons/si"

const skills = [
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Rust", icon: SiRust, color: "#000000" },
  { name: "Go", icon: SiGo, color: "#00ADD8" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "React Native Expo", icon: SiExpo, color: "#000" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4479A1" },
  { name: "CodeIgniter", icon: SiCodeigniter, color: "orange" },
  { name: "Wordpress", icon: SiWordpress, color: "#4479A1" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC"},
  { name: "Linux Ubuntu", icon: SiLinux , color: "#4479A1"},
  { name: "Next.js", icon: SiNextdotjs, color: "#000"}
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Skills & Technologies</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary transition-all duration-300 ease-in-out"
            >
              <skill.icon className="h-12 w-12 mb-2" style={{ color: skill.color }} />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

