"use client"

import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react"

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering (CSE)",
    institution: "ITM Vocational University",
    location: "Gujarat, India",
    period: "2024 - 2027",
    status: "Currently Enrolled with above 9.5 CGPA",
    statusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    gradient: "from-emerald-500/10 to-teal-500/5",
    borderColor: "border-emerald-500/20",
  },
  {
    degree: "Advanced Diploma in Management (QLS Level 7)",
    institution: "Oxford Home Study Centre",
    location: "Online",
    period: "April 2024 - August 2024",
    status: "Completed with above 79% score",
    statusColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    gradient: "from-amber-500/10 to-orange-500/5",
    borderColor: "border-amber-500/20",
  },
  {
    degree: "Diploma in Mechanical Engineering",
    institution: "Parul Polytechnic Institute (GTU)",
    location: "Gujarat, India",
    period: "2018 - 2021",
    status: "Completed with GPA: 7.96",
    statusColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    gradient: "from-blue-500/10 to-indigo-500/5",
    borderColor: "border-blue-500/20",
  },
]

const additionalCourses = [
  { name: "HR Management", provider: "Oxford Home Study Centre" },
  { name: "Project Management", provider: "Oxford Home Study Centre" },
  { name: "Business Management", provider: "Oxford Home Study Centre" },
  { name: "Accounting and Finance", provider: "Oxford Home Study Centre" },
  { name: "Digital Marketing", provider: "Oxford Home Study Centre" },
  { name: "Cybersecurity", provider: "Oxford Home Study Centre" },
]

export function EducationSection() {
  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Education"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Education
        </h2>
      </div>
      
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div
            key={index}
            className={`group rounded-xl border ${edu.borderColor} bg-gradient-to-br ${edu.gradient} p-5 transition-all hover:scale-[1.01] hover:shadow-lg`}
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-background/50 p-3 group-hover:bg-background/80 transition-colors shrink-0">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-primary font-medium">{edu.institution}</p>
                  </div>
                  <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium shrink-0 ${edu.statusColor}`}>
                    {edu.status}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {edu.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold text-primary mb-4 flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Additional Professional Courses
          </h3>
          <div className="grid gap-2 sm:grid-cols-2">
            {additionalCourses.map((course, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-foreground">{course.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
