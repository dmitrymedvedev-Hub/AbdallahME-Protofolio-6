import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import useScrollAnimation from '../hooks/useScrollAnimation'

const projects = [
  {
    id: 'day-stride-scheduling',
    title: 'Day-Stride Scheduling',
    image: '/images/project-taskapp.jpg',
    summary: 'End-to-end scheduling platform with secure payments, inventory controls, and an admin dashboard.',
    description: 'A structured product experience designed for service teams that need clarity and reliable operations.',
    challenge: 'Keep scheduling, payments, and admin tasks easy to use in one workflow.',
    approach: 'Use clear cards, predictable flows, and a strong information hierarchy to reduce friction.',
    outcome: 'The result is a professional system that feels simple for users and manageable for the business.',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    image: '/images/project-cms.jpg',
    summary: 'Collaborative task management with real-time sync, team workspaces, and cross-device continuity.',
    description: 'Built to help teams track work without losing speed, structure, or visual consistency.',
    challenge: 'Make collaboration feel organized while still staying lightweight and fast.',
    approach: 'Create focused UI sections and reliable state handling for teams and projects.',
    outcome: 'A clean workspace that keeps important actions visible and easy to complete.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    id: 'portfolio-cms',
    title: 'Portfolio CMS',
    image: '/images/image1.png',
    summary: 'Custom CMS for creative professionals with dynamic galleries, media delivery, and SEO tooling.',
    description: 'A content system that keeps publishing straightforward while preserving a premium presentation.',
    challenge: 'Balance editor simplicity with polished public-facing results.',
    approach: 'Use reusable modules, predictable data structures, and performance-aware media handling.',
    outcome: 'The product stays easy to update while still feeling modern and refined for visitors.',
    tags: ['Vue.js', 'Express', 'AWS'],
  },
]

function WorkPage() {
  useScrollAnimation()
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.slice(1)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.hash])

  return (
    <>
      <section className="page-shell-dark section-pad-hero">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 max-w-[760px]">
          <div data-animate="fade">
            <p className="font-accent text-[18px] md:text-[24px] text-[var(--color-accent)]">Work</p>
            <h1 className="mt-4 font-display text-[42px] md:text-[74px] leading-[0.95] section-title section-title-dark">
              Detailed views of selected projects
            </h1>
            <p className="mt-6 max-w-[720px] font-body text-[17px] md:text-[19px] section-copy-dark">
              Each project below shows the goal, the thinking, and the result. The focus is on structure, clarity, and the decisions behind the final experience.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad-xl bg-[var(--color-background)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 grid gap-6">
          {projects.map((project, index) => (
            <article
              id={project.id}
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 surface-card overflow-hidden"
            >
              <div className="overflow-hidden bg-[var(--color-ghost)]">
                <img src={project.image} alt={project.title} className="h-full min-h-[320px] w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>

              <div className="flex flex-col justify-between p-6 md:p-8 bg-[var(--color-background)]">
                <div>
                  <p className="section-eyebrow">Project {String(index + 1).padStart(2, '0')}</p>
                  <h2 className="mt-3 font-display text-[30px] md:text-[44px] leading-[1.05] section-title">
                    {project.title}
                  </h2>
                  <p className="mt-4 section-copy">{project.summary}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-[rgba(var(--color-text-rgb),0.68)]">{project.description}</p>

                  <div className="mt-6 grid gap-4">
                    <div>
                      <h3 className="font-body text-[15px] font-medium text-[var(--color-text)]">Challenge</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-[rgba(var(--color-text-rgb),0.68)]">{project.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-body text-[15px] font-medium text-[var(--color-text)]">Approach</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-[rgba(var(--color-text-rgb),0.68)]">{project.approach}</p>
                    </div>
                    <div>
                      <h3 className="font-body text-[15px] font-medium text-[var(--color-text)]">Outcome</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-[rgba(var(--color-text-rgb),0.68)]">{project.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="surface-card-soft px-4 py-1.5 text-[13px] text-[var(--color-text)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="max-w-[1200px] mx-auto px-5 md:px-10 text-center mt-16" data-animate="fade">
          <p className="section-copy max-w-[680px] mx-auto">
            Want to see more or discuss a similar project?
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/start-project" className="btn-primary font-body text-[16px] font-medium px-10 py-4">
              Start a Project
            </Link>
            <Link to="/about-more" className="btn-secondary font-body text-[16px] font-medium px-10 py-4">
              About Me
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default WorkPage
