import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "Mar 2026 — Present",
    title: "Full Stack Java Developer",
    company: "The Developers Arena",
    location: "Remote",
    highlights: [
      "Developed and maintained full-stack web applications using Java, Spring Boot, HTML, CSS, JavaScript, and MySQL",
      "Built responsive front-end interfaces using HTML5, CSS3, Bootstrap, and JavaScript frameworks",
      "Implemented backend APIs using Java and Spring Boot for handling business logic and database operations",
      "Designed and managed relational databases using MySQL, including query optimization and schema design",
      "Integrated RESTful APIs for seamless communication between frontend and backend systems",
      "Participated in code reviews, debugging, and performance optimization of web applications",
      "Collaborated with team members using Git for version control and project management tools",
      "Assisted in deploying applications on cloud platforms and server environments",
    ],
    skills: ["Java", "Spring Boot", "MySQL", "REST APIs", "JavaScript", "Bootstrap", "Git", "Cloud Deployment"],
  },
  {
    period: "Sep 2025 — Nov 2025",
    title: "Cybersecurity Intern",
    company: "Elevate Labs",
    location: "Online",
    highlights: [
      "Performed vulnerability assessments and penetration testing (VAPT) on web applications and systems to identify security weaknesses",
      "Used security tools such as Nmap, Wireshark, Burp Suite, and Metasploit for network scanning and vulnerability analysis",
      "Conducted security audits and risk assessments to evaluate potential cyber threats and recommend mitigation strategies",
      "Assisted in identifying and resolving common web vulnerabilities such as SQL Injection, XSS, and CSRF",
      "Monitored network traffic and analyzed suspicious activities using packet analysis tools",
      "Implemented basic security hardening techniques for operating systems and web applications",
      "Documented security findings and created detailed vulnerability reports with remediation steps",
      "Collaborated with development teams to ensure secure coding practices and compliance with security standards",
    ],
    skills: ["VAPT", "Nmap", "Wireshark", "Burp Suite", "Metasploit", "Security Audits", "Risk Assessment"],
  },
  {
    period: "Feb 2025 — Apr 2025",
    title: "Cybersecurity Intern",
    company: "Acmegrade",
    location: "Online",
    highlights: [
      "Conducted vulnerability assessments and penetration testing on web applications",
      "Identified OWASP Top 10 vulnerabilities including SQL injection and XSS",
      "Used Nmap and Wireshark for network scanning and packet analysis",
      "Contributed to Smart AI Security Module project",
    ],
    skills: ["OWASP Top 10", "SQL Injection", "XSS", "Nmap", "Wireshark", "AI Security"],
  },
  {
    period: "Jul 2022 — Jul 2024",
    title: "Network Engineer",
    company: "NST Pvt. Ltd",
    location: "Vadodara, India",
    highlights: [
      "Managed enterprise network infrastructure supporting 500+ users",
      "Implemented secure network architecture and firewall policies",
      "Reduced downtime by 40% through proactive monitoring and troubleshooting",
      "Developed disaster recovery and incident response procedures",
    ],
    skills: ["Network Security", "Firewall", "Disaster Recovery", "Incident Response", "Enterprise Infrastructure"],
  },
  {
    period: "Mar 2021 — Jun 2022",
    title: "Web Developer",
    company: "OPTnation",
    location: "Vadodara, India",
    highlights: [
      "Developed responsive web applications using HTML, CSS, and JavaScript",
      "Built scalable backend features and integrated REST APIs",
      "Optimized SQL database queries, improving performance by 20%",
      "Implemented secure payment gateway integrations",
    ],
    skills: ["HTML", "CSS", "JavaScript", "REST APIs", "SQL", "Payment Gateway Integration"],
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
                  aria-label={exp.period}
                >
                  {exp.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <div>
                      <span className="inline-flex items-baseline font-medium leading-tight text-foreground group-hover:text-primary focus-visible:text-primary">
                        <span>{exp.title}</span>
                        <span className="mx-1">·</span>
                        <span>{exp.company}</span>
                        <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground text-sm">{exp.location}</span>
                    </div>
                  </h3>
                  <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">{">"}</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.skills.map((skill) => (
                      <li key={skill} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
