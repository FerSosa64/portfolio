import { usePortfolioPreferences } from '../src/context/PortfolioPreferences.tsx'
import './sidebar.css'

export type SectionId = 'about' | 'experience' | 'projects'

type SidebarProps = {
  active: SectionId
  onSelect: (id: SectionId) => void
}

const sections: { id: SectionId; labelKey: 'about' | 'experience' | 'projects' }[] =
  [
    { id: 'about', labelKey: 'about' },
    { id: 'experience', labelKey: 'experience' },
    { id: 'projects', labelKey: 'projects' },
  ]

export default function Sidebar({ active, onSelect }: SidebarProps) {
  const { t, lang, setLang, theme, setTheme } = usePortfolioPreferences()

  return (
    <aside className="sidebar" aria-label={t.sidebar.profileAria}>
      <div className="sidebar__intro">
        <h1 className="sidebar__name">{t.sidebar.name}</h1>
        <p className="sidebar__role">{t.sidebar.role}</p>
        <p className="sidebar__tagline">{t.sidebar.tagline}</p>
      </div>

      <nav className="sidebar__nav" aria-label={t.sidebar.navLabel}>
        <ul className="sidebar__nav-list">
          {sections.map(({ id, labelKey }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={
                  active === id
                    ? 'sidebar__nav-link sidebar__nav-link--active'
                    : 'sidebar__nav-link'
                }
                onClick={(e) => {
                  e.preventDefault()
                  onSelect(id)
                }}
              >
                {t.sidebar.nav[labelKey]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar__controls" role="group">
        <div className="sidebar__control">
          <span className="sidebar__control-label" id="lang-label">
            {t.sidebar.a11y.language}
          </span>
          <div
            className="sidebar__toggle-group"
            role="group"
            aria-labelledby="lang-label"
          >
            <button
              type="button"
              className={
                lang === 'en'
                  ? 'sidebar__toggle sidebar__toggle--on'
                  : 'sidebar__toggle'
              }
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={
                lang === 'es'
                  ? 'sidebar__toggle sidebar__toggle--on'
                  : 'sidebar__toggle'
              }
              aria-pressed={lang === 'es'}
              onClick={() => setLang('es')}
            >
              ES
            </button>
          </div>
        </div>

        <div className="sidebar__control">
          <span className="sidebar__control-label" id="theme-label">
            {t.sidebar.a11y.theme}
          </span>
          <div
            className="sidebar__toggle-group"
            role="group"
            aria-labelledby="theme-label"
          >
            <button
              type="button"
              className={
                theme === 'dark'
                  ? 'sidebar__toggle sidebar__toggle--on'
                  : 'sidebar__toggle'
              }
              aria-pressed={theme === 'dark'}
              onClick={() => setTheme('dark')}
            >
              {t.sidebar.a11y.dark}
            </button>
            <button
              type="button"
              className={
                theme === 'light'
                  ? 'sidebar__toggle sidebar__toggle--on'
                  : 'sidebar__toggle'
              }
              aria-pressed={theme === 'light'}
              onClick={() => setTheme('light')}
            >
              {t.sidebar.a11y.light}
            </button>
          </div>
        </div>
      </div>

      <ul className="sidebar__social" aria-label={t.sidebar.socialLinksLabel}>
        <li>
          <a
            href="https://github.com/FerSosa64"
            target="_blank"
            rel="noreferrer"
            className="sidebar__social-link"
            aria-label={t.sidebar.social.github}
          >
            <IconGithub />
          </a>
        </li>
        <li>
          <a
            href={t.sidebar.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="sidebar__social-link"
            aria-label={t.sidebar.social.linkedin}
          >
            <IconLinkedin />
          </a>
        </li>
      </ul>
    </aside>
  )
}

function IconGithub() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  )
}

function IconLinkedin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.989v5.617H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 1 1-.001 4.127 2.064 2.064 0 0 1 .001-4.127zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
      />
    </svg>
  )
}
