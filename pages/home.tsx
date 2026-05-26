import { useCallback, useEffect, useState } from 'react'
import Sidebar, { type SectionId } from '../components/sidebar.tsx'
import { usePortfolioPreferences } from '../src/context/PortfolioPreferences.tsx'
import { RESUME_PATH } from '../src/i18n/copy.types.ts'
import './home.css'

export default function Home() {
  const { t } = usePortfolioPreferences()
  const [active, setActive] = useState<SectionId>('about')

  const scrollToSection = useCallback((id: SectionId) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setActive(id)
    history.replaceState(null, '', `#${id}`)
  }, [])

  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as SectionId
    if (
      hash === 'about' ||
      hash === 'experience' ||
      hash === 'projects' ||
      hash === 'resume'
    ) {
      setActive(hash)
    }
  }, [])

  useEffect(() => {
    const ids: SectionId[] = ['about', 'experience', 'projects', 'resume']
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        const top = visible[0]
        if (top?.target.id) {
          setActive(top.target.id as SectionId)
        }
      },
      { root: null, rootMargin: '-42% 0px -42% 0px', threshold: [0, 0.1, 0.25] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <div className="shell">
        <div className="shell__glow" aria-hidden="true" />
        <div className="layout">
          <Sidebar active={active} onSelect={scrollToSection} />

          <div className="content" id="main" tabIndex={-1}>
            <section className="section" id="about" aria-labelledby="about-title">
              <h2 className="section__title" id="about-title">
                {t.sections.about.title}
              </h2>
              <div className="section__body">
                {t.sections.about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            <section
              className="section"
              id="experience"
              aria-labelledby="experience-title"
            >
              <h2 className="section__title" id="experience-title">
                {t.sections.experience.title}
              </h2>
              <ol className="timeline">
                {t.sections.experience.items.map((job) => (
                  <li
                    key={`${job.dates}-${job.title}`}
                    className="timeline__item"
                  >
                    <div className="timeline__meta">{job.dates}</div>
                    <div className="timeline__detail">
                      <h3 className="timeline__heading">
                        <span className="timeline__role">{job.title}</span>
                        <span className="timeline__sep"> · </span>
                        <span className="timeline__company">{job.company}</span>
                      </h3>
                      <p className="timeline__text">{job.description}</p>
                      <ul
                        className="tag-list"
                        aria-label={t.sections.tagsLabel}
                      >
                        {job.tags.map((tag) => (
                          <li key={tag}>
                            <span className="tag">{tag}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section
              className="section"
              id="projects"
              aria-labelledby="projects-title"
            >
              <h2 className="section__title" id="projects-title">
                {t.sections.projects.title}
              </h2>
              <ul className="project-list">
                {t.sections.projects.items.map((proj) => (
                  <li key={proj.title} className="project-card">
                    <h3 className="project-card__title">
                      {proj.link ? (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {proj.title}
                        </a>
                      ) : (
                        <span>{proj.title}</span>
                      )}
                    </h3>
                    <p className="project-card__text">{proj.description}</p>
                    <ul
                      className="tag-list"
                      aria-label={t.sections.tagsLabel}
                    >
                      {proj.tags.map((tag) => (
                        <li key={tag}>
                          <span className="tag">{tag}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>

            <section
              className="section"
              id="resume"
              aria-labelledby="resume-title"
            >
              <h2 className="section__title" id="resume-title">
                {t.sections.resume.title}
              </h2>
              <div className="resume">
                <p className="resume__intro">{t.sections.resume.description}</p>
                <div className="resume__actions">
                  <a
                    className="resume__btn resume__btn--primary"
                    href={RESUME_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.sections.resume.openLabel}
                  </a>
                  <a
                    className="resume__btn"
                    href={RESUME_PATH}
                    download="Fernando-David-Sosa-Flores-Resume.pdf"
                  >
                    {t.sections.resume.downloadLabel}
                  </a>
                </div>
                <div className="resume__viewer">
                  <iframe
                    className="resume__frame"
                    src={`${RESUME_PATH}#view=FitH`}
                    title={t.sections.resume.viewLabel}
                  />
                </div>
              </div>
            </section>

            <p className="fine-print">{t.sections.footer}</p>
          </div>
        </div>
      </div>
    </>
  )
}
