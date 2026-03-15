import { Briefcase, Shield, FolderOpen, Award, Users } from "lucide-react"

const highlights = [
  {
    icon: Briefcase,
    stat: "3+",
    label: "Years Experience",
    description: "Development & Security",
    color: "from-teal-500/20 to-cyan-500/10",
    borderColor: "border-teal-500/30",
  },
  {
    icon: FolderOpen,
    stat: "16+",
    label: "Projects Completed",
    description: "Web, AI & Security",
    color: "from-emerald-500/20 to-green-500/10",
    borderColor: "border-emerald-500/30",
  },
  {
    icon: Users,
    stat: "10+",
    label: "Happy Clients",
    description: "Delivered Solutions",
    color: "from-blue-500/20 to-indigo-500/10",
    borderColor: "border-blue-500/30",
  },
  {
    icon: Award,
    stat: "40+",
    label: "Certifications",
    description: "Verified Skills",
    color: "from-orange-500/20 to-amber-500/10",
    borderColor: "border-orange-500/30",
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          About
        </h2>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {highlights.map((item, index) => (
          <div 
            key={index} 
            className={`group rounded-xl border ${item.borderColor} bg-gradient-to-br ${item.color} p-4 text-center transition-all hover:scale-105 hover:shadow-lg`}
          >
            <div className="rounded-lg bg-background/50 p-2 w-fit mx-auto mb-2 group-hover:bg-background/80 transition-colors">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground">{item.stat}</div>
            <div className="text-xs font-semibold text-foreground">{item.label}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <p className="leading-relaxed text-muted-foreground">
          I'm a <span className="text-foreground font-medium">Cybersecurity and Full-Stack Development</span> professional 
          with hands-on experience in vulnerability assessment, penetration testing, and network security. My passion lies 
          at the intersection of building secure, scalable web applications and protecting enterprise systems from cyber threats.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          I specialize in identifying and mitigating{" "}
          <span className="text-foreground font-medium">OWASP Top 10 vulnerabilities</span>, conducting risk assessments, 
          and implementing security best practices. On the development side, I work with{" "}
          <span className="text-foreground font-medium">Java, Spring Boot, React.js, and Laravel</span> to create 
          high-performance applications with robust backend APIs and responsive front-end interfaces.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          My toolkit includes security tools like{" "}
          <span className="text-foreground font-medium">Nmap, Wireshark, Burp Suite, and Metasploit</span>{" "}
          for vulnerability analysis, alongside modern development technologies for building reliable software solutions. 
          I thrive on the challenge of creating systems that are both feature-rich and impenetrable.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          Beyond technical work, I've{" "}
          <span className="text-foreground font-medium">participated in coding competitions</span>{" "}
          and <span className="text-foreground font-medium">volunteered at college technical events</span>, 
          contributing to the tech community while continuously expanding my skill set through certifications in 
          cloud infrastructure, ethical hacking, and network administration.
        </p>
      </div>
    </section>
  )
}
