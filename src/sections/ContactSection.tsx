function ContactSection() {
  return (
    <section id="contact" className="relative z-10 section-pad-xl bg-[var(--color-text)]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 text-center">
        <h2 data-animate="header" className="font-display text-[32px] md:text-[48px] text-[var(--color-background)]">
            Let's collaborate
        </h2>

        <form
          data-animate="fade"
          data-delay="0.15"
          className="mt-12 mx-auto max-w-[600px] text-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="font-body text-[14px] font-medium block mb-2 text-[var(--color-background)]">
              Name
            </label>
            <input type="text" className="input-modern" placeholder="Your name" aria-label="Your name" />
          </div>

          <div className="mt-5">
            <label className="font-body text-[14px] font-medium block mb-2 text-[var(--color-background)]">
              Email
            </label>
            <input type="email" className="input-modern" placeholder="you@example.com" aria-label="Your email" />
          </div>

          <div className="mt-5">
            <label className="font-body text-[14px] font-medium block mb-2 text-[var(--color-background)]">
              Message
            </label>
            <textarea rows={5} className="textarea-modern" placeholder="Tell me about your project" aria-label="Project message" />
          </div>

          <button
            type="submit"
            className="btn-primary font-body text-[16px] font-medium mt-7 px-12 py-4 border-none cursor-pointer"
          >
            Send Message
          </button>
        </form>

        <div data-animate="fade" data-delay="0.3" className="mt-10">
          <p className="font-body text-[14px] text-[rgba(var(--color-background-rgb),0.72)]">
            Or reach me at
          </p>
          <div className="flex items-center justify-center gap-6 mt-3">
            <a
              href="mailto:abdallahmohammedelmhady@gmail.com"
              className="font-body text-[15px] font-medium text-[var(--color-background)] transition-colors duration-200 hover:text-[var(--color-accent)]"
            >
              abdallahmohammedelmhady@gmail.com
            </a>
            <a
              href="https://github.com/dmitrymedvedev-Hub"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[15px] font-medium text-[var(--color-background)] transition-colors duration-200 hover:text-[var(--color-accent)]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abdallah-mohammed-elmhady-05928b338/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[15px] font-medium text-[var(--color-background)] transition-colors duration-200 hover:text-[var(--color-accent)]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
