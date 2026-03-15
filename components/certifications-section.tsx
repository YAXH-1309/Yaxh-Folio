import { Award, BadgeCheck } from "lucide-react"

const certificationCategories = [
  {
    name: "Cybersecurity & Ethical Hacking",
    color: "text-emerald-400",
    certifications: [
      { title: "Ethical Hacking Course", issuer: "Stupid Skills" },
      { title: "Introduction to IT and Cybersecurity", issuer: "Cybrary" },
      { title: "Cyber Leadership Method for Cyber Leaders", issuer: "Cybrary" },
      { title: "Security Management AMA", issuer: "Cybrary" },
      { title: "Understanding Supply Chain Security", issuer: "Cybrary" },
      { title: "Protection by Design", issuer: "Cybrary" },
      { title: "Cybersecurity", issuer: "Oxford Home Study Centre" },
    ],
  },
  {
    name: "Cloud & Infrastructure",
    color: "text-blue-400",
    certifications: [
      { title: "Oracle Cloud Infrastructure Foundations Associate", issuer: "Oracle" },
      { title: "Intro to AWS", issuer: "Cybrary" },
      { title: "Designing Enterprise for Multi-Cloud", issuer: "Cybrary" },
      { title: "Advanced Network with Cisco CCNA", issuer: "LearnVern" },
    ],
  },
  {
    name: "AI & Machine Learning",
    color: "text-violet-400",
    certifications: [
      { title: "Introduction to Generative AI", issuer: "Google Cloud" },
      { title: "Chat-GPT and AI Tools", issuer: "Skill Nation" },
      { title: "Machine Learning: Unsupervised Learning", issuer: "ITonixsolutions" },
      { title: "XGBoost Algorithm for Classification and Regression", issuer: "ITonixsolutions" },
      { title: "Data Cleaning for Machine Learning", issuer: "ITonixsolutions" },
      { title: "Artificial Intelligence Quiz", issuer: "ITonixsolutions" },
    ],
  },
  {
    name: "Programming & Development",
    color: "text-orange-400",
    certifications: [
      { title: "Introduction to Java", issuer: "Cybrary" },
      { title: "Getting Started with Python", issuer: "ITonixsolutions" },
      { title: "R Programming Language", issuer: "ITonixsolutions" },
      { title: "Android Development Quiz", issuer: "ITonixsolutions" },
    ],
  },
  {
    name: "Leadership & Management",
    color: "text-amber-400",
    certifications: [
      { title: "Advanced Diploma in Management (QLS Level 7)", issuer: "Oxford Home Study Centre" },
      { title: "Project Management", issuer: "Oxford Home Study Centre" },
      { title: "HR Management", issuer: "Oxford Home Study Centre" },
      { title: "Business Management", issuer: "Oxford Home Study Centre" },
      { title: "Managing Virtual Teams", issuer: "Cybrary" },
      { title: "Team Dynamics for Cyber Leaders", issuer: "Cybrary" },
      { title: "Conflict Resolution for Cyber Leaders", issuer: "Cybrary" },
      { title: "Negotiation Skills for Cyber Leaders", issuer: "Cybrary" },
      { title: "Supply Chain Management", issuer: "KAIST" },
    ],
  },
  {
    name: "Business & Marketing",
    color: "text-rose-400",
    certifications: [
      { title: "Digital Marketing", issuer: "Oxford Home Study Centre" },
      { title: "Accounting and Finance", issuer: "Oxford Home Study Centre" },
      { title: "Business Analysis and Process Management", issuer: "Coursera" },
      { title: "Investment Risk Management", issuer: "Coursera" },
      { title: "Google My Business Optimization Training", issuer: "ITonixsolutions" },
      { title: "Advanced Digital Marketing Quiz", issuer: "ITonixsolutions" },
      { title: "Selling and Marketing Cybersecurity Products", issuer: "Cybrary" },
    ],
  },
]

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Certifications"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Certifications
        </h2>
      </div>
      <div className="space-y-8">
        {certificationCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className={`text-sm font-semibold ${category.color} mb-4 flex items-center gap-2`}>
              <Award className="h-4 w-4" />
              {category.name}
              <span className="text-xs text-muted-foreground font-normal">({category.certifications.length})</span>
            </h3>
            <ul className="group/list space-y-2">
              {category.certifications.map((cert, index) => (
                <li key={index}>
                  <div className="group relative grid gap-4 py-2 transition-all lg:grid-cols-12 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-1 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                    <div className="z-10 flex items-center gap-3 lg:col-span-8">
                      <BadgeCheck className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-sm font-medium leading-snug text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </span>
                    </div>
                    <div className="z-10 flex items-center lg:col-span-4 lg:justify-end">
                      <span className="text-xs text-muted-foreground">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
