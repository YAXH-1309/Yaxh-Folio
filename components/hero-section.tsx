"use client"

import { Github, Linkedin, Mail, MapPin, ExternalLink, FileText } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EDUCATION", href: "#education" },
  { label: "SKILLS", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/yaxhpatel", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yaxhpatel", label: "LinkedIn" },
  { icon: ExternalLink, href: "https://yaxhpatel.netlify.app", label: "Portfolio" },
  { icon: Mail, href: "mailto:yaxh1309@gmail.com", label: "Email" },
]

export function HeroSection() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          <span className="text-balance">Yaxhkumar Patel</span>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">
          Cybersecurity & Full-Stack Developer
        </h2>
        <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
          I build secure, scalable web applications and protect enterprise systems from cyber threats.
        </p>
        <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          Vadodara, Gujarat, India
        </p>

        <div className="mt-6 flex gap-3">
          <Button asChild>
            <Link href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="mailto:yaxh1309@gmail.com">
              <FileText className="mr-2 h-4 w-4" />
              Download CV
            </Link>
          </Button>
        </div>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  className="group flex items-center py-3"
                  href={item.href}
                >
                  <span className="mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground group-focus-visible:text-foreground">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
        {socialLinks.map((social) => (
          <li key={social.label}>
            <Link
              className="block text-muted-foreground transition-colors hover:text-foreground"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.label} (opens in a new tab)`}
            >
              <social.icon className="h-6 w-6" />
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
