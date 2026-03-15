"use client"

import { Shield, Code, Database, Network, Terminal, Globe, Lock, Server, Cpu, Wrench } from "lucide-react"

const mainSkills = [
  {
    title: "Network Engineering",
    icon: Network,
    color: "from-teal-500/20 to-cyan-500/20",
    borderColor: "border-teal-500/30",
    skills: [
      { name: "Routing Protocols, Switching, VLANs", level: 90 },
      { name: "Network Security & Firewalls", level: 85 },
      { name: "Network Troubleshooting", level: 95 },
      { name: "Disaster Recovery", level: 80 },
    ],
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    skills: [
      { name: "Penetration Testing", level: 85 },
      { name: "Ethical Hacking", level: 80 },
      { name: "Security Audits & Vulnerability Assessment", level: 90 },
      { name: "Cloud Security", level: 75 },
    ],
  },
  {
    title: "Web Development",
    icon: Code,
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
    skills: [
      { name: "HTML, CSS, JavaScript", level: 95 },
      { name: "React, Django, Laravel", level: 85 },
      { name: "Git, Docker, Bootstrap", level: 80 },
      { name: "Database Design (MySQL)", level: 90 },
    ],
  },
  {
    title: "AI & Automation",
    icon: Cpu,
    color: "from-violet-500/20 to-purple-500/20",
    borderColor: "border-violet-500/30",
    skills: [
      { name: "ChatGPT & Generative AI", level: 85 },
      { name: "Python & OpenCV", level: 80 },
      { name: "Machine Learning Basics", level: 70 },
      { name: "Process Automation", level: 85 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-500/30",
    skills: [
      { name: "Java & Spring Boot", level: 85 },
      { name: "PHP & Laravel", level: 85 },
      { name: "REST API Development", level: 90 },
      { name: "Flask & Django", level: 80 },
    ],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    color: "from-rose-500/20 to-pink-500/20",
    borderColor: "border-rose-500/30",
    skills: [
      { name: "MySQL & SQL", level: 90 },
      { name: "Database Design & Optimization", level: 85 },
      { name: "AWS Basics", level: 75 },
      { name: "Oracle Cloud Infrastructure", level: 75 },
    ],
  },
]

const toolsAndTech = [
  "Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman", "Linux", "Windows Server", 
  "Docker", "AWS Basics", "Agile/Scrum", "Jira", "CI/CD Basics"
]

const languages = [
  { name: "English", level: "Professional", percentage: 95 },
  { name: "Hindi", level: " Bilingual", percentage: 100 },
  { name: "Gujarati", level: "Native", percentage: 100 },
]

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Skills"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Skills
        </h2>
      </div>

      {/* Main Skills Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {mainSkills.map((category) => (
          <div
            key={category.title}
            className={`group rounded-xl border ${category.borderColor} bg-gradient-to-br ${category.color} p-4 transition-all hover:scale-[1.02] hover:shadow-lg`}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="rounded-lg bg-background/50 p-2">
                <category.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{category.title}</h3>
            </div>
            <div className="space-y-3">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-foreground/80">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-background/50 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tools & Technologies */}
      <div className="mt-8">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-4">
          <Wrench className="h-4 w-4 text-primary" />
          Tools & Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {toolsAndTech.map((tool) => (
            <span
              key={tool}
              className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="mt-8 rounded-xl border border-border bg-card p-4">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-4">
          <Globe className="h-4 w-4 text-primary" />
          Languages
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {languages.map((lang) => (
            <div key={lang.name} className="text-center">
              <div className="relative mx-auto mb-2 h-16 w-16">
                <svg className="h-16 w-16 -rotate-90 transform">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    className="text-muted/30"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${lang.percentage * 1.76} 176`}
                    className="text-primary transition-all duration-500"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-foreground">
                  {lang.percentage}%
                </span>
              </div>
              <p className="font-medium text-foreground">{lang.name}</p>
              <p className="text-xs text-muted-foreground">{lang.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
