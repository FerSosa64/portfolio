import { usePortfolioPreferences } from '../src/context/PortfolioPreferences.tsx'
import './sidebar.css'

export type SectionId = 'about' | 'experience' | 'projects' | 'resume'

type SidebarProps = {
  active: SectionId
  onSelect: (id: SectionId) => void
}

const sections: {
  id: SectionId
  labelKey: 'about' | 'experience' | 'projects' | 'resume'
}[] = [
  { id: 'about', labelKey: 'about' },
  { id: 'experience', labelKey: 'experience' },
  { id: 'projects', labelKey: 'projects' },
  { id: 'resume', labelKey: 'resume' },
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

      <div className="sidebar__contacts">
        <span className="sidebar__contacts-title">{t.sidebar.contactsTitle}</span>
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
          <li>
            <a
              href={t.sidebar.emailUrl}
              className="sidebar__social-link"
              aria-label={t.sidebar.social.gmail}
            >
              <IconGmail />
            </a>
          </li>
          <li>
            <a
              href={t.sidebar.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="sidebar__social-link"
              aria-label={t.sidebar.social.whatsapp}
            >
              <IconWhatsapp />
            </a>
          </li>
        </ul>
      </div>
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

function IconGmail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
      />
    </svg>
  )
}

function IconWhatsapp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  )
}
