import { Link } from 'react-router-dom'

const projects = [
  {
    id: 'day-stride-scheduling',
    title: 'Day-Stride-Scheduling',
    description:
      'End-to-end scheduling platform with secure payments, inventory controls, and an admin dashboard designed for scale.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/images/image.png',
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description:
      'Collaborative task management with real-time sync, team workspaces, and cross-device continuity.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    image: '/images/project-taskapp.jpg',
  },
  {
    id: 'portfolio-cms',
    title: 'Portfolio CMS',
    description:
      'Custom CMS for creative professionals offering optimized media delivery, dynamic galleries, and SEO tooling.',
    tags: ['Vue.js', 'Express', 'AWS'],
    image: '/images/project-cms.jpg',
  },
]

function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 section-pad-xl bg-[var(--color-background)]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div data-animate="header">
          <h2 className="font-display text-[32px] md:text-[48px] section-title">
            Selected Work
          </h2>
          <div className="mt-3 accent-rule" />
        </div>

        <div className="mt-16 flex flex-col gap-20" data-animate="stagger">
          {projects.map((project, index) => {
            const isReversed = index === 1
            return (
              <div
                key={project.title}
                className={`grid grid-cols-1 md:grid-cols-[55%_45%] gap-10 items-center ${
                  isReversed ? 'md:grid-cols-[45%_55%]' : ''
                }`}
              >
                <div className={`overflow-hidden rounded-[24px] ${isReversed ? 'md:order-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="block h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className={isReversed ? 'md:order-1' : ''}>
                  <h3 className="font-body text-[24px] font-medium mt-2 text-[var(--color-text)]">
                    {project.title}
                  </h3>
                  <p className="font-body text-[16px] mt-3 leading-relaxed section-copy">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-[13px] px-4 py-1.5 rounded-full border border-transparent bg-[var(--color-ghost)] text-[var(--color-text)] transition-all duration-200 hover:border-[var(--color-accent)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/work#${project.id}`}
                    className="inline-flex items-center gap-1 font-body text-[15px] font-medium mt-5 transition-colors duration-200 group text-[var(--color-accent)] hover:text-[var(--color-accent-600)]"
                  >
                    View Details
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
