import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import useScrollAnimation from '../hooks/useScrollAnimation'

const values = [
  {
    number: '01',
    title: 'Readable systems',
    description:
      'I structure code and UI so the product is easier to maintain, extend, and understand as it grows.',
  },
  {
    number: '02',
    title: 'Practical delivery',
    description:
      'I focus on the right amount of polish, the right features, and the right pace for sustainable progress.',
  },
  {
    number: '03',
    title: 'Modern execution',
    description:
      'I use current frontend patterns, responsive layouts, and thoughtful interactions to keep the work current.',
  },
]

const timelineItems = [
  {
    year: 'Now',
    role: 'Full-stack delivery',
    description:
      'Building polished product experiences end to end with attention to quality, speed, and clarity.',
  },
  {
    year: 'Before',
    role: 'Frontend craftsmanship',
    description:
      'Turning design direction into responsive interfaces that feel consistent and intentional.',
  },
  {
    year: 'Always',
    role: 'Continuous improvement',
    description:
      'Refining code, UX, and workflow with each project so the next release is easier to ship.',
  },
]

function AboutPage() {
  useScrollAnimation()

  return (
    <>
      <section className="page-shell section-pad-hero">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-10 lg:items-end">
          <div data-animate="fade" className="max-w-[760px]">
            <p className="font-accent text-[18px] md:text-[24px] text-[var(--color-accent)]">Get to know me</p>
            <h1 className="font-display text-[42px] md:text-[74px] leading-[0.95] mt-4 section-title">
              About Me
            </h1>
            <p className="font-body text-[17px] md:text-[19px] mt-6 max-w-[680px] section-copy">
              I build dependable web applications with a focus on usability, performance, and long-term maintainability.
              The goal is always the same: create work that feels modern, works smoothly, and stays clear for the next person.
            </p>
          </div>

          <div data-animate="fade" data-delay="0.15" className="lg:justify-self-end">
            <div className="surface-card overflow-hidden p-3 max-w-[440px]">
              <img
                src="/images/imageTow.png"
                alt="Abdallah Elmhady professional portrait"
                loading="lazy"
                className="h-[520px] w-full rounded-[22px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad-xl bg-[var(--color-surface)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start">
          <div data-animate="fade" className="max-w-[560px]">
            <p className="section-eyebrow">My Journey</p>
            <h2 className="mt-3 max-w-[12ch] font-display text-[32px] md:text-[48px] leading-[1.1] section-title">
              A practical approach to building web products
            </h2>
            <p className="mt-5 section-copy">
              I started as a curious builder and grew into a developer who values clarity, reliability, and measurable results.
              My work focuses on delivering features that solve real problems and scale with the business.
            </p>
            <p className="mt-4 section-copy">
              I partner well with teams that want a clean product layer, a dependable implementation, and a professional finish.
            </p>
          </div>

          <div className="grid gap-4" data-animate="stagger">
            {values.map((value) => (
              <div key={value.number} className="surface-card p-6 md:p-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(var(--color-accent-rgb),0.12)] text-[var(--color-accent)] font-body text-[16px] font-medium">
                    {value.number}
                  </div>
                  <h3 className="font-body text-[22px] font-medium text-[var(--color-text)]">{value.title}</h3>
                </div>
                <p className="mt-4 section-copy">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad-xl page-shell-dark">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div data-animate="header">
            <p className="section-eyebrow section-eyebrow-dark">Experience</p>
            <h2 className="mt-3 font-display text-[32px] md:text-[48px] section-title section-title-dark">
              My Experience
            </h2>
            <div className="mt-3 accent-rule" />
          </div>

          <div className="relative mt-16 max-w-[900px] mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[rgba(var(--color-background-rgb),0.16)]" />
            <div className="grid gap-8">
              {timelineItems.map((item, index) => {
                const isLeft = index % 2 === 0

                return (
                  <div
                    key={item.year}
                    data-animate="fade"
                    data-delay={`${index * 0.15}`}
                    className={`relative pl-12 md:pl-0 ${isLeft ? 'md:pr-[52%] md:text-right' : 'md:pl-[52%]'}`}
                  >
                    <div className="absolute top-2 left-[12px] h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--color-accent)]" />
                    <p className="font-body text-[14px] font-medium tracking-[1px] text-[var(--color-accent)]">{item.year}</p>
                    <h3 className="mt-2 font-body text-[20px] font-medium text-[var(--color-background)]">{item.role}</h3>
                    <p className="mt-3 section-copy-dark">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad-xl bg-[var(--color-background)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 text-center">
          <h2 data-animate="header" className="font-display text-[30px] md:text-[42px] section-title">
            Ready to collaborate? Let&apos;s talk.
          </h2>
          <p data-animate="fade" data-delay="0.1" className="mt-4 section-copy max-w-[720px] mx-auto">
            Have a project in mind? I&apos;d love to hear about it and help shape a modern, professional result.
          </p>
          <div data-animate="fade" data-delay="0.2" className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/start-project" className="btn-primary font-body text-[16px] font-medium px-10 py-4">
              Get in Touch
            </Link>
            <Link to="/work" className="btn-secondary font-body text-[16px] font-medium px-10 py-4">
              View My Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default AboutPage
