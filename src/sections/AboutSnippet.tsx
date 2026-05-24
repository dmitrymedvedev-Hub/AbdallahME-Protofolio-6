import { Link } from 'react-router-dom'

function AboutSnippet() {
  return (
    <section id="about" className="relative z-10 section-pad-xl bg-[var(--color-surface)]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-16 items-center">
          <div>
            <p data-animate="fade" className="font-accent text-[24px] md:text-[32px] text-[var(--color-accent)]">
              About Me
            </p>
            <h2 data-animate="fade" data-delay="0.1" className="font-display text-[28px] md:text-[36px] leading-[1.3] mt-3 text-[var(--color-text)]">
              I craft elegant, reliable web experiences
            </h2>
            <p data-animate="fade" data-delay="0.2" className="font-body text-[16px] leading-relaxed mt-5 max-w-[520px] section-copy">
              I'm a full-stack engineer focused on building production-ready web
              applications. I prioritize performance, accessibility, and clear
              architecture to deliver solutions that scale.
            </p>
            <Link
              to="/about-more"
              data-animate="fade"
              data-delay="0.3"
              className="inline-flex items-center gap-1 font-body text-[16px] font-medium mt-7 transition-colors duration-200 group text-[var(--color-accent)] hover:text-[var(--color-accent-600)]"
            >
              Read More
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>

          <div data-animate="slide-right" data-delay="0.2">
            <img
              src="/images/imageTow.png"
              alt="Abdallah MohammedElmhady portrait"
              loading="lazy"
              className="w-full max-w-[400px] mx-auto rounded-[24px] object-cover shadow-[0_16px_50px_rgba(var(--color-text-rgb),0.08)] h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSnippet
