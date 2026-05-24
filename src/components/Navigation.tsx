import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    if (!isHome || !location.hash) return

    const id = location.hash.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isHome, location.hash])

  const goToSection = (id: string) => {
    navigate(`/#${id}`)
  }

  const navLinks = [
    { label: 'Home', path: '/', type: 'route' as const },
    { label: 'Work', path: '/work', type: 'route' as const },
    { label: 'About', path: '/about', type: 'route' as const },
    { label: 'Contact', path: '/start-project', type: 'route' as const },
  ]

  const mobileItems = navLinks.map((link, index) => ({
    ...link,
    delayClass: ['delay-[120ms]', 'delay-[190ms]', 'delay-[260ms]'][index] || 'delay-0',
  }))

    const themeClasses = isHome
    ? {
        shell: scrolled
          ? 'bg-[var(--color-text)]/75 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent',
        brand: 'text-[var(--color-background)]',
        link: 'text-[var(--color-background)]/70 hover:text-[var(--color-background)]',
        activeLink: 'text-[var(--color-background)]',
        icon: 'bg-[var(--color-background)]',
        mobileOverlay: 'bg-black/35',
        mobilePanel: 'bg-[var(--color-text)]/95 text-[var(--color-background)] border-l border-white/10',
        mobileLink: 'text-[var(--color-background)]/75 hover:text-[var(--color-background)]',
      }
    : {
        shell: 'bg-[var(--color-background)]/90 backdrop-blur-xl border-b border-[var(--color-border)] shadow-lg shadow-[var(--color-text)]/5',
        brand: 'text-[var(--color-text)]',
        link: 'text-[var(--color-text)]/70 hover:text-[var(--color-accent)]',
        activeLink: 'text-[var(--color-text)]',
        icon: 'bg-[var(--color-text)]',
        mobileOverlay: 'bg-[var(--color-text)]/20',
        mobilePanel: 'bg-[var(--color-background)] text-[var(--color-text)] border-l border-[var(--color-border)]',
        mobileLink: 'text-[var(--color-text)]/70 hover:text-[var(--color-accent)]',
      }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${themeClasses.shell}`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex items-center justify-between h-16">
        <Link
          to="/"
          className={`group flex items-center gap-3 font-body text-[16px] font-medium transition-colors duration-300 ${themeClasses.brand}`}
        >
          <span className="relative flex size-2.5 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-[var(--color-accent)]/20 blur-sm transition-all duration-300 group-hover:scale-150" />
            <span className="relative size-2.5 rounded-full bg-current transition-transform duration-300 group-hover:scale-110" />
          </span>
          <span className="relative overflow-hidden">
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">Abdallah Elmhady</span>
            <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
              Abdallah Elmhady
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.type === 'route'
                ? location.pathname === link.path
                : isHome && link.id && location.hash === `#${link.id}`

            return link.type === 'route' ? (
              <Link
                key={link.label}
                to={link.path}
                className={`group relative font-body text-[15px] transition-colors duration-300 ${
                  isActive ? themeClasses.activeLink : themeClasses.link
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-2 h-px w-full origin-left rounded-full transition-transform duration-300 ${
                    isActive ? 'scale-x-100 bg-current' : 'scale-x-0 bg-current group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ) : (
              <button
                key={link.label}
                type="button"
                onClick={() => goToSection(link.id)}
                className={`group relative bg-transparent border-none cursor-pointer font-body text-[15px] transition-colors duration-300 ${
                  isActive ? themeClasses.activeLink : themeClasses.link
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-2 h-px w-full origin-left rounded-full transition-transform duration-300 ${
                    isActive ? 'scale-x-100 bg-current' : 'scale-x-0 bg-current group-hover:scale-x-100'
                  }`}
                />
              </button>
            )
          })}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="group md:hidden flex flex-col gap-1.5 rounded-full border border-current/10 p-2.5 bg-current/5 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:bg-current/10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 origin-center rounded-full transition-all duration-300 ease-out ${themeClasses.icon} ${
              mobileOpen ? 'rotate-45 translate-x-1 translate-y-1' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 origin-center rounded-full transition-all duration-300 ease-out ${themeClasses.icon} ${
              mobileOpen ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'
            }`}
          />
          <span
            className={`block h-0.5 w-6 origin-center rounded-full transition-all duration-300 ease-out ${themeClasses.icon} ${
              mobileOpen ? '-rotate-45 translate-x-1 -translate-y-1' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 z-40 transition-all duration-300 ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          className={`absolute inset-0 border-none p-0 text-left transition-opacity duration-300 ${themeClasses.mobileOverlay} ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[min(86vw,320px)] border-l p-6 sm:p-8 shadow-2xl backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${themeClasses.mobilePanel} ${
            mobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-[102%] opacity-0'
          }`}
        >
          <div className="mb-8 h-px w-12 rounded-full bg-[var(--color-accent)]/70" />
          <div className="flex flex-col gap-2">
            {mobileItems.map((link) =>
              link.type === 'route' ? (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`group relative overflow-hidden rounded-2xl px-4 py-3 font-body text-[18px] transition-all duration-500 ease-out ${link.delayClass} ${
                    location.pathname === link.path
                      ? 'translate-x-0 opacity-100'
                      : mobileOpen
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-6 opacity-0'
                  } ${
                    location.pathname === link.path
                      ? themeClasses.activeLink
                      : themeClasses.mobileLink
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 rounded-2xl bg-current/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              ) : (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => {
                    goToSection(link.id)
                    setMobileOpen(false)
                  }}
                  className={`group relative overflow-hidden rounded-2xl border-none bg-transparent px-4 py-3 text-left font-body text-[18px] transition-all duration-500 ease-out ${link.delayClass} ${
                    mobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
                  } ${themeClasses.mobileLink}`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 rounded-2xl bg-current/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
