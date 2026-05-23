function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-[#3c1c10]"
      style={{
        zIndex: 1,
        padding: '120px 0',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 text-center">
        <h2
          data-animate="header"
          className="font-display text-[32px] md:text-[48px]"
          style={{ color: '#f6f1ee' }}
        >
          Let's Work Together
        </h2>

        <form
          data-animate="fade"
          data-delay="0.15"
          className="mt-12 mx-auto max-w-[600px] text-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label
              className="font-body text-[14px] font-medium block mb-2"
                style={{ color: '#f6f1ee' }}
            >
              Name
            </label>
            <input
              type="text"
              className="w-full h-12 px-4 rounded-lg font-body text-[16px] outline-none transition-all duration-200"
              style={{
                background: '#f8f8f8',
                border: '1px solid #e8e3df',
                color: '#3c1c10',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#b04a3e'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(176, 74, 62, 0.15)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#e8e3df'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
          </div>

          <div className="mt-5">
            <label
              className="font-body text-[14px] font-medium block mb-2"
                style={{ color: '#f6f1ee' }}
            >
              Email
            </label>
            <input
              type="email"
              className="w-full h-12 px-4 rounded-lg font-body text-[16px] outline-none transition-all duration-200"
              style={{
                background: '#f8f8f8',
                border: '1px solid #e8e3df',
                color: '#3c1c10',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#b04a3e'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(176, 74, 62, 0.15)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#e8e3df'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
          </div>

          <div className="mt-5">
            <label
              className="font-body text-[14px] font-medium block mb-2"
                style={{ color: '#f6f1ee' }}
            >
              Message
            </label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 rounded-lg font-body text-[16px] outline-none resize-y transition-all duration-200"
              style={{
                background: '#f8f8f8',
                border: '1px solid #e8e3df',
                color: '#3c1c10',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#b04a3e'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(176, 74, 62, 0.15)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#e8e3df'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
          </div>

          <button
            type="submit"
            className="font-body text-[16px] font-medium mt-7 px-12 py-4 rounded-full border-none cursor-pointer transition-colors duration-200"
            style={{
              background: '#b04a3e',
              color: '#f6f1ee',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#c45a4e')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#b04a3e')}
          >
            Send Message
          </button>
        </form>

        <div data-animate="fade" data-delay="0.3" className="mt-10">
          <p
              className="font-body text-[14px]"
            style={{ color: 'rgba(246, 241, 238, 0.7)' }}
          >
            Or reach me at
          </p>
          <div className="flex items-center justify-center gap-6 mt-3">
            <a
              href="mailto:hello@abdallah.dev"
              className="font-body text-[15px] font-medium transition-colors duration-200"
              style={{ color: '#f6f1ee' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#b04a3e')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#f6f1ee')}
            >
              hello@abdallah.dev
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[15px] font-medium transition-colors duration-200"
              style={{ color: '#f6f1ee' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#b04a3e')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#f6f1ee')}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[15px] font-medium transition-colors duration-200"
              style={{ color: '#f6f1ee' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#b04a3e')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#f6f1ee')}
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
