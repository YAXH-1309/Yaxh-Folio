import { Trophy, Users, BookOpen, Target } from "lucide-react"

const activities = [
  {
    icon: Trophy,
    title: "Inter-College Coding Competitions",
    description: "Participated in competitive programming events, solving algorithmic challenges and demonstrating problem-solving skills under time pressure.",
    tags: ["Algorithms", "Problem Solving", "Teamwork"],
    gradient: "from-amber-500/20 to-orange-500/10",
    borderColor: "border-amber-500/30",
  },
  {
    icon: Users,
    title: "Technical Events Volunteer",
    description: "Actively volunteered in organizing and coordinating college technical events, managing logistics and participant engagement.",
    tags: ["Leadership", "Event Management", "Coordination"],
    gradient: "from-blue-500/20 to-indigo-500/10",
    borderColor: "border-blue-500/30",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Committed to professional development through industry certifications in cloud infrastructure, ethical hacking, networking, and AI technologies.",
    tags: ["Certifications", "Self-Improvement", "Industry Skills"],
    gradient: "from-emerald-500/20 to-teal-500/10",
    borderColor: "border-emerald-500/30",
  },
  {
    icon: Target,
    title: "Security Research",
    description: "Actively engaged in learning about emerging cyber threats, vulnerability research, and security best practices to stay current with the evolving threat landscape.",
    tags: ["Threat Analysis", "Research", "Security Trends"],
    gradient: "from-rose-500/20 to-pink-500/10",
    borderColor: "border-rose-500/30",
  },
]

export function ActivitiesSection() {
  return (
    <section
      id="activities"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Activities & Interests"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Activities & Interests
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`group rounded-xl border ${activity.borderColor} bg-gradient-to-br ${activity.gradient} p-5 transition-all hover:scale-[1.02] hover:shadow-lg`}
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-background/50 p-2.5 group-hover:bg-background/80 transition-colors">
                <activity.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{activity.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {activity.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-background/50 px-2 py-0.5 text-xs font-medium text-foreground/80"
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
