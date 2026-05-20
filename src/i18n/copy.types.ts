export type Lang = 'en' | 'es'

export type Copy = {
  skip: string
  sidebar: {
    name: string
    role: string
    tagline: string
    nav: {
      about: string
      experience: string
      projects: string
      resume: string
    }
    a11y: { language: string; theme: string; dark: string; light: string }
    profileAria: string
    socialLinksLabel: string
    navLabel: string
    linkedinUrl: string
    social: { github: string; linkedin: string }
  }
  sections: {
    tagsLabel: string
    about: { title: string; paragraphs: string[] }
    experience: {
      title: string
      items: {
        dates: string
        title: string
        company: string
        description: string
        tags: string[]
      }[]
      link?: string
    }
    projects: {
      title: string
      items: {
        title: string
        description: string
        tags: string[]
        link?: string
      }[]
    }
    resume: {
      title: string
      description: string
      viewLabel: string
      downloadLabel: string
      openLabel: string
    }
    footer: string
  }
}

export const RESUME_PATH = '/Fernando-David-Sosa-Flores-Resume.pdf'
