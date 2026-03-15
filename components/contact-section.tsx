import { Mail, Phone, Linkedin, Github, MapPin, Twitter, Instagram, Facebook } from "lucide-react"
import Link from "next/link"

const contactLinks = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 95748 11062",
    href: "tel:+919574811062",
  },
  {
    icon: Mail,
    label: "Email",
    value: "yaxh1309@gmail.com",
    href: "mailto:yaxh1309@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Vadodara, Gujarat, India",
    href: "#",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "yaxhpatel",
    href: "https://linkedin.com/in/yaxhpatel",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/yaxhpatel",
    href: "https://github.com/yaxhpatel",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@yaxhpatel",
    href: "https://twitter.com/yaxhpatel",
  },
]

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/yaxhpatel", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/yaxhpatel", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/yaxhpatel", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/yaxhpatel", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/yaxhpatel", label: "Facebook" },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
      aria-label="Contact"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Contact
        </h2>
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{"Let's Connect"}</h3>
        <p className="text-muted-foreground mb-6 text-pretty">
          {"I'm currently open to new opportunities in cybersecurity and full-stack development. Whether you have a project in mind, need security consultation, or just want to discuss technology, I'd love to hear from you."}
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {contactLinks.map((contact) => (
            <Link
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-3 rounded-lg border border-border bg-background p-4 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all"
            >
              <div className="rounded-lg bg-primary/10 p-2">
                <contact.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <span className="text-sm font-medium text-foreground block">{contact.label}</span>
                <span className="text-xs group-hover:text-primary transition-colors">{contact.value}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-4">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-background p-3 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      <footer className="mt-16 text-center text-sm text-muted-foreground">
        <p className="text-pretty">
          Designed and built by <span className="font-medium text-foreground">Yaxhkumar Patel</span>
        </p>
        <p className="mt-2">
          Built with{" "}
          <Link
            href="https://nextjs.org"
            className="font-medium text-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </Link>{" "}
          and{" "}
          <Link
            href="https://tailwindcss.com"
            className="font-medium text-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </Link>
        </p>
      </footer>
    </section>
  )
}
