import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      tl.fromTo(
        '.hero-label',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 }
      )
        .fromTo(
          '.hero-name',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          '.hero-subtitle',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          '.hero-cta',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          '.hero-stats',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] flex items-end bg-[#3c1c10]">
      {/* Video background (place /public/images/hero.mp4). Fallback to poster image. */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          playsInline
          muted
          autoPlay
          loop
          poster="/images/hero.jpg"
          aria-hidden="true"
        >
          <source src="/images/hero.mp4" type="video/mp4" />
          {/* If video isn't available the poster image will be used by browsers. */}
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#b04a3e]/60 via-transparent to-black/20" />
      </div>

      <div className="max-w-[1200px] mx-auto w-full px-5 md:px-10 pb-16 md:pb-20 z-10">
        <div className="pointer-events-none">
          <p className="hero-label font-accent text-[32px] md:text-[32px] opacity-0 text-[#b04a3e] mb-3">
            Full-Stack Developer
          </p>
          <h1 className="hero-name font-display text-[40px] md:text-[72px] leading-[1.1] opacity-0 text-white">
            <span className="block">Abdallah</span>
            <span className="block">Mohammed</span>
            <span className="block">Elamhady</span>
          </h1>
          <p className="hero-subtitle font-body text-[16px] md:text-[18px] mt-5 max-w-[480px] opacity-0 text-white/70">
            Building professional websites and web applications using the latest technologies.
          </p>
          <button
            onClick={scrollToProjects}
            className="hero-cta pointer-events-auto font-body text-[16px] font-medium mt-8 px-10 py-4 rounded-full border-none cursor-pointer transition-colors duration-200 opacity-0 bg-[#b04a3e] text-white hover:bg-[#c45a4e]"
          >
            View My Work
          </button>
          <div className="hero-stats flex items-center gap-4 mt-7 opacity-0 text-white/55">
            <span className="font-body text-[14px]">2+ Years</span>
            <span className="text-white/30">|</span>
            <span className="font-body text-[14px]">20+ Projects</span>
            <span className="text-white/30">|</span>
            <span className="font-body text-[14px]">Full-Stack</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
