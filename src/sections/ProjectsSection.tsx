const projects = [
  {
    title: 'Day-Stride-Scheduling',
    description:
      'A full-featured online store with payment integration, inventory management, and admin dashboard built for scale.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/images/image.png',
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative project management tool with real-time updates, team workspaces, and progress tracking across all devices.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    image: '/images/project-taskapp.jpg',
  },
  {
    title: 'Portfolio CMS',
    description:
      'Custom content management system for creative professionals with dynamic galleries, media optimization, and SEO tools.',
    tags: ['Vue.js', 'Express', 'AWS'],
    image: '/images/project-cms.jpg',
  },
]

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative"
      style={{
        background: '#f6f1ee',
        zIndex: 1,
        padding: '120px 0',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div data-animate="header">
          <h2
            className="font-display text-[32px] md:text-[48px]"
            style={{ color: '#3c1c10' }}
          >
            Selected Projects
          </h2>
          <div
            className="mt-3"
            style={{
              width: '80px',
              height: '3px',
              background: '#b04a3e',
            }}
          />
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
                <div
                  className={`overflow-hidden rounded-xl ${
                    isReversed ? 'md:order-2' : ''
                  }`}
                  style={{ maxHeight: '320px' }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-400 hover:scale-105"
                    style={{ display: 'block' }}
                  />
                </div>
                <div className={isReversed ? 'md:order-1' : ''}>
                  <h3
                    className="font-body text-[24px] font-medium mt-2"
                    style={{ color: '#3c1c10' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="font-body text-[16px] mt-3 leading-relaxed"
                    style={{ color: 'rgba(60, 28, 16, 0.7)' }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-[13px] px-4 py-1.5 rounded-full border border-transparent transition-all duration-200 hover:border-[#b04a3e]"
                        style={{
                          background: '#e8e3df',
                          color: '#3c1c10',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 font-body text-[15px] font-medium mt-5 transition-all duration-200 group"
                    style={{ color: '#b04a3e' }}
                  >
                    View Details
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </a>
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
