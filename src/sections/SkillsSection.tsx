const skillCategories = [
  {
    icon: '◇',
    label: 'Frontend Architecture',
    description: 'Building responsive, accessible, and performant user interfaces',
    skills: ['React', 'Vue', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Modern State Management'],
  },
  {
    icon: '◈',
    label: 'Backend Systems',
    description: 'Designing scalable APIs and server-side solutions',
    skills: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs', 'Microservices'],
  },
  {
    icon: '◆',
    label: 'Data & Storage',
    description: 'Managing data persistence and optimization',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM', 'Database Design', 'Query Optimization'],
  },
  {
    icon: '▽',
    label: 'Cloud & DevOps',
    description: 'Deploying and maintaining production environments',
    skills: ['Docker', 'AWS', 'Vercel', 'CI/CD Pipelines', 'Git', 'Automated Deployments'],
  },
  {
    icon: '○',
    label: 'Design & UX',
    description: 'Crafting intuitive and visually compelling experiences',
    skills: ['Figma', 'Adobe XD', 'Responsive Design', 'UI/UX Principles', 'Design Systems'],
  },
  {
    icon: '△',
    label: 'Advanced Technologies',
    description: 'Leveraging modern tools for complex challenges',
    skills: ['GraphQL', 'WebSockets', 'Testing Strategies', 'Performance Optimization', 'Security'],
  },
]

function SkillsSection() {
  return (
    <section className="relative z-10 section-pad-xl bg-[var(--color-text)] overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-16" data-animate="fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-[13px] uppercase tracking-[3px] font-medium mb-4">
            Capabilities
          </span>
          <h2 className="font-display text-[36px] md:text-[52px] text-white leading-tight">
            Skills & Expertise
          </h2>
          <p className="mt-6 text-[17px] text-white/50 max-w-[600px] mx-auto leading-relaxed">
            A comprehensive toolkit for building modern web experiences from concept to deployment
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-animate="stagger">
          {skillCategories.map((category) => (
            <div
              key={category.label}
              className="group relative p-6 rounded-3xl bg-[rgba(var(--color-white-rgb),0.03)] border border-[rgba(var(--color-white-rgb),0.1)] backdrop-blur-sm transition-all duration-500 hover:bg-[rgba(var(--color-white-rgb),0.06)] hover:border-[var(--color-accent)]/30 hover:shadow-[0_8px_32px_rgba(var(--color-accent-rgb),0.1)]"
            >
              {/* Icon */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[28px] text-[var(--color-accent)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                  {category.icon}
                </span>
                <div>
                  <h3 className="font-body text-[18px] font-semibold text-white">
                    {category.label}
                  </h3>
                  <p className="text-[13px] text-white/40 mt-1">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-[var(--color-accent)]/10 text-white/80 text-[13px] border border-[var(--color-accent)]/20 transition-all duration-300 group-hover:bg-[var(--color-accent)]/15 group-hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center" data-animate="fade-up" data-delay="0.3">
          {[
            { value: '6+', label: 'Specializations' },
            { value: '30+', label: 'Technologies' },
            { value: '100%', label: 'Commitment' },
            { value: '∞', label: 'Learning' },
          ].map((stat) => (
            <div key={stat.label} className="p-4">
              <p className="font-display text-[32px] md:text-[40px] text-[var(--color-accent)]">
                {stat.value}
              </p>
              <p className="text-[13px] text-white/40 uppercase tracking-[2px] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection