"use client"

import { ExternalLink, Github, Shield, Globe, Database, Cpu, Server, Lock, TrendingUp, Users, Zap } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "AI-Powered Personal Assistant",
    subtitle: "ChatGPT & Generative AI Integration",
    description:
      "Built a real-time AI-based assistant using ChatGPT and Generative AI to automate task management and optimize workflows. Streamlined business processes and significantly reduced manual workload through intelligent automation.",
    icon: Cpu,
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    borderColor: "border-violet-500/30",
    tags: ["Python", "ChatGPT API", "Cloud Services", "Automation"],
    role: "Developer & System Integrator",
    highlights: [
      { icon: Zap, text: "Automated task management" },
      { icon: TrendingUp, text: "Reduced manual workload" },
    ],
  },
  {
    title: "Smart Network & AI Security Module",
    subtitle: "Hackathon Project - Real-time Threat Detection",
    description:
      "Designed and built an AI-integrated network security module for real-time threat detection during a hackathon. Combined AI-driven analysis with proactive network protection, earning recognition for innovative approach to cybersecurity.",
    icon: Shield,
    gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
    borderColor: "border-teal-500/30",
    tags: ["Python", "OpenAI API", "Flask", "Network Security"],
    role: "Backend Developer & Security Integrator",
    highlights: [
      { icon: Shield, text: "Real-time threat detection" },
      { icon: Zap, text: "AI-driven security analysis" },
    ],
  },
  {
    title: "AI & GPS-Based Attendance System",
    subtitle: "Facial Recognition & Location Verification",
    description:
      "Engineered an attendance system that uses AI-powered facial recognition and GPS for real-time location-based verification. Eliminated proxy attendance and enhanced verification accuracy through dual-factor authentication.",
    icon: Users,
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    borderColor: "border-emerald-500/30",
    tags: ["Python", "OpenCV", "Django", "GPS Integration"],
    role: "Full Stack Developer & AI Integrator",
    highlights: [
      { icon: Lock, text: "Eliminated proxy attendance" },
      { icon: Zap, text: "Enhanced verification accuracy" },
    ],
  },
  {
    title: "Hostel Management ERP System",
    subtitle: "Comprehensive Administrative Solution",
    description:
      "Built a fully functional ERP system for hostel management including room allocation, fee tracking, and student data management. Automated administrative processes and improved operational efficiency across multiple departments.",
    icon: Database,
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    borderColor: "border-blue-500/30",
    tags: ["PHP", "MySQL", "JavaScript", "ERP"],
    role: "Full Stack Developer",
    highlights: [
      { icon: TrendingUp, text: "Automated admin processes" },
      { icon: Users, text: "Multi-department management" },
    ],
  },
  {
    title: "HR Management System",
    subtitle: "Employee Lifecycle Management Platform",
    description:
      "Developed a web-based HR system for employee onboarding, payroll, and performance tracking. Reduced manual HR efforts and centralized employee data management with secure access controls.",
    icon: Globe,
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    borderColor: "border-orange-500/30",
    tags: ["PHP", "Laravel", "MySQL", "HR Tech"],
    role: "Software Developer",
    highlights: [
      { icon: Zap, text: "Reduced manual HR efforts" },
      { icon: Lock, text: "Centralized data management" },
    ],
  },
  {
    title: "Cross-Browser Testing Protocol",
    subtitle: "Web Application Quality Assurance",
    description:
      "Enhanced web application stability across Chrome, Firefox, Safari, Opera, and Internet Explorer. Implemented comprehensive testing protocols that reduced cross-browser related issues by over 90%.",
    icon: Server,
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    borderColor: "border-rose-500/30",
    tags: ["HTML", "CSS", "JavaScript", "QA Testing"],
    role: "Web Developer & QA Engineer",
    highlights: [
      { icon: TrendingUp, text: "90% fewer browser issues" },
      { icon: Shield, text: "Multi-browser compatibility" },
    ],
  },
  {
    title: "Pneumatic Metal Sheet Cutting Machine",
    subtitle: "Mechanical Engineering Project",
    description:
      "Designed a precision-controlled pneumatic machine for metal sheet cutting to improve manufacturing efficiency. Led the mechanical design using CAD/CAM tools, reducing production time and improving cutting accuracy.",
    icon: Cpu,
    gradient: "from-slate-500/20 via-gray-500/10 to-transparent",
    borderColor: "border-slate-500/30",
    tags: ["Pneumatics", "CAD/CAM", "Mechanical Design"],
    role: "Lead Mechanical Engineer",
    highlights: [
      { icon: Zap, text: "Reduced production time" },
      { icon: TrendingUp, text: "Improved cutting accuracy" },
    ],
  },
]

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Featured Projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Projects
        </h2>
      </div>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group relative rounded-xl border ${project.borderColor} bg-gradient-to-r ${project.gradient} p-6 transition-all hover:scale-[1.01] hover:shadow-xl`}
          >
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="rounded-xl bg-background/50 p-3 group-hover:bg-background/80 transition-colors">
                  <project.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-primary/80 mt-0.5">
                  {project.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                
                {/* Role */}
                <p className="mt-2 text-xs font-medium text-primary">
                  Role: {project.role}
                </p>
                
                {/* Highlights */}
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 rounded-lg bg-background/50 px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      <highlight.icon className="h-3.5 w-3.5 text-primary" />
                      {highlight.text}
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
