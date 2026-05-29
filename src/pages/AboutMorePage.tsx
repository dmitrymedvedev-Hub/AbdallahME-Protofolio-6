import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import useScrollAnimation from '../hooks/useScrollAnimation'

// highlights and stats intentionally removed — simplified content for modern layout

const journey = [
  {
    year: 'Now',
    title: 'Full-stack delivery',
    text: 'Building polished web experiences end-to-end with a strong eye for interaction, performance, and clarity.',
  },
  {
    year: 'Before',
    title: 'Frontend craftsmanship',
    text: 'Turning design ideas into responsive interfaces that feel fast, structured, and easy to use.',
  },
  {
    year: 'Always',
    title: 'Continuous improvement',
    text: 'Refining systems, UX, and code quality with each project so the next version is easier to ship.',
  },
]

function AboutMorePage() {
  useScrollAnimation()

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[rgba(var(--color-text-rgb),0.98)] to-[rgba(var(--color-text-rgb),0.92)] pt-[96px] pb-[64px]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[var(--color-accent)]/15 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="max-w-[760px]" data-animate="fade">
            <p className="font-accent text-[18px] md:text-[24px] text-[var(--color-accent)]">
              More About Me
            </p>
            <h1 className="font-display text-[42px] md:text-[72px] leading-[1.05] mt-3 text-[var(--color-background)]">
              Clear thinking. Calm execution. Strong outcomes.
            </h1>
            <p className="font-body text-[17px] md:text-[19px] leading-relaxed mt-5 max-w-[680px] text-[rgba(var(--color-background-rgb),0.72)]">
              I design and build modern digital products with a practical approach: understand the problem, shape the
              solution carefully, and deliver work that is fast, elegant, and easy to maintain.
            </p>
          </div>

          {/* removed stats per user request */}
        </div>
      </section>

      <section className="bg-[var(--color-background)] pt-[72px] pb-[108px]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-10 xl:gap-14 items-start">
          <div data-animate="fade" className="max-w-[620px] lg:sticky lg:top-24">
            <p className="font-body text-[14px] uppercase tracking-[2px] text-[rgba(var(--color-text-rgb),0.5)]">
              My focus
            </p>
            <h2 className="font-display text-[32px] md:text-[48px] leading-[1.15] mt-3 max-w-[13ch] text-[var(--color-text)]">
              A short summary of how I work
            </h2>
            <p className="font-body text-[16px] leading-relaxed mt-5 text-[rgba(var(--color-text-rgb),0.72)]">
              I care about the complete experience, not just the visible screen. That means thoughtful information
              hierarchy, smooth interaction, responsible performance, and a tone that feels professional without being cold.
            </p>
            <p className="font-body text-[16px] leading-relaxed mt-4 text-[rgba(var(--color-text-rgb),0.72)]">
              I work best when the goal is clear and the finish line matters. My process is to reduce complexity,
              organize the moving parts, and leave behind a codebase that is readable and ready for the next step.
            </p>
            <div className="mt-6 h-px w-24 bg-[var(--color-border)]" />
          </div>

          {/* Simplified content: single paragraph and one photo */}
          <div className="grid gap-5" data-animate="stagger">
            <div>
              <p className="font-body text-[16px] leading-relaxed mt-5 text-[rgba(var(--color-text-rgb),0.72)]">
                I design and build modern digital products with a practical approach: understand the problem, shape the solution
                carefully, and deliver work that is fast, elegant, and easy to maintain.
              </p>
            </div>

            <div>
              <figure className="overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-background)] shadow-[0_18px_50px_rgba(var(--color-text-rgb),0.07)] mt-6">
                <div className="relative h-full min-h-[420px] overflow-hidden">
                  <img
                    src="/images/portrait.jpg"
                    alt="Professional portrait of Abdallah Elmhady"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] py-[120px]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div data-animate="header">
            <h2 className="font-display text-[32px] md:text-[48px] text-[var(--color-text)]">
              Career snapshot
            </h2>
            <div className="mt-3 h-[3px] w-20 rounded-full bg-[var(--color-accent)]" />
          </div>

          <div className="mt-16 grid gap-8" data-animate="stagger">
            {journey.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-1 md:grid-cols-[110px_1fr] gap-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-7 shadow-[0_12px_35px_rgba(var(--color-text-rgb),0.05)]"
              >
                <div>
                  <span className="font-display text-[28px] text-[var(--color-accent)]">
                    {item.year}
                  </span>
                </div>
                <div>
                  <h3 className="font-body text-[22px] font-medium text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="font-body text-[16px] leading-relaxed mt-3 text-[rgba(var(--color-text-rgb),0.72)]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-text)] py-[100px]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 text-center" data-animate="fade">
          <h2 className="font-display text-[30px] md:text-[44px] text-[var(--color-background)]">
            If you need a careful builder with a modern eye, I’m ready to help.
          </h2>
          <p className="font-body text-[16px] mt-4 text-[rgba(var(--color-background-rgb),0.72)]">
            I can help shape a portfolio, product site, internal tool, or full-stack web app from concept to delivery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link
              to="/work"
              className="font-body text-[16px] font-medium px-10 py-4 rounded-full transition-colors duration-200 bg-[var(--color-accent)] hover:bg-[var(--color-accent-600)] text-[var(--color-background)]"
            >
              View Work
            </Link>
            <Link
              to="/start-project"
              className="font-body text-[16px] font-medium px-10 py-4 rounded-full border-[1.5px] transition-all duration-200 border-[rgba(var(--color-background-rgb),0.28)] text-[var(--color-background)] hover:bg-[var(--color-background)] hover:text-[var(--color-text)]"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default AboutMorePage
