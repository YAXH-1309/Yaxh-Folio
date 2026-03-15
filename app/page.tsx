import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { CertificationsSection } from "@/components/certifications-section"
import { SkillsSection } from "@/components/skills-section"
import { ActivitiesSection } from "@/components/activities-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="relative">
      {/* Gradient background effect */}
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      </div>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <HeroSection />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <EducationSection />
            <CertificationsSection />
            <SkillsSection />
            <ActivitiesSection />
            <ContactSection />
          </main>
        </div>
      </div>
    </div>
  )
}
