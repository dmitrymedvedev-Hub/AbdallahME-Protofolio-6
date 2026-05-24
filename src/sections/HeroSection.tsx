import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      tl.fromTo('.hero-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.15 })
        .fromTo('.hero-name', { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.45')
        .fromTo('.hero-subtitle', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.45')
        .fromTo('.hero-actions', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.45')
        .fromTo('.hero-card', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.45')
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[var(--color-text)] pt-[120px] pb-[80px] text-[var(--color-background)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-5rem] h-72 w-72 rounded-full bg-[var(--color-accent)]/15 blur-3xl" />
        <div className="absolute bottom-0 left-[-4rem] h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-25" />
      </div>

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-5 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] uppercase tracking-[2px] text-white/70 opacity-0 backdrop-blur-sm">
            Full-stack portfolio
          </div>

          <h1 className="hero-name mt-6 max-w-[9ch] font-display text-[42px] leading-[0.95] text-white opacity-0 sm:text-[60px] lg:text-[78px]">
            Abdallah Mohammed Elmahady
          </h1>

          <p className="hero-subtitle mt-6 max-w-[620px] text-[17px] leading-relaxed text-white/72 opacity-0 sm:text-[18px]">
            I design and build clean, modern web experiences with strong structure, smooth interaction, and a focus on real outcomes.
          </p>

          <div className="hero-actions mt-8 flex flex-col gap-4 opacity-0 sm:flex-row">
            <button
              onClick={scrollToProjects}
              className="rounded-full bg-[var(--color-accent)] px-8 py-4 font-body text-[16px] font-medium text-[var(--color-background)] transition-colors duration-200 hover:bg-[var(--color-accent-600)]"
            >
              View Projects
            </button>
            <a
              href="/start-project"
              className="rounded-full border border-white/15 px-8 py-4 font-body text-[16px] font-medium text-white transition-colors duration-200 hover:bg-white hover:text-[var(--color-text)]"
            >
              Start a Project
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-[13px] text-white/64">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Modern UI systems</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Fast delivery</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Responsive builds</span>
          </div>
        </div>

        <div className="hero-card opacity-0">
          <div className="rounded-[32px] border border-white/10 bg-white/6 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <div className="rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.05)] p-6">
              <p className="text-[13px] uppercase tracking-[2px] text-white/55">What I deliver</p>
              <div className="mt-6 space-y-5">
                {[
                  ['Design systems', 'Consistent interfaces with clear hierarchy and reusable parts.'],
                  ['Landing pages', 'Focused pages that look polished and convert attention into action.'],
                  ['Web apps', 'Structured products built for maintainability and scale.'],
                ].map(([title, description]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-black/10 p-4">
                    <h2 className="font-body text-[18px] font-medium text-white">{title}</h2>
                    <p className="mt-2 text-[14px] leading-relaxed text-white/62">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
