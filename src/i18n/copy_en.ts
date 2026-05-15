import type { Copy } from './copy.types.ts'

export const copyEn: Copy = {
  skip: 'Skip to content',
  sidebar: {
    name: 'Fernando David Sosa Flores',
    role: 'Software developer',
    tagline:
      'Bachelor in Computer Science. I build web experiences, ship reliable software, and care about quality from UI to testing.',
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
    },
    a11y: {
      language: 'Language',
      theme: 'Theme',
      dark: 'Dark',
      light: 'Light',
    },
    profileAria: 'Introduction and site navigation',
    socialLinksLabel: 'Social links',
    navLabel: 'Page sections',
    linkedinUrl: 'https://www.linkedin.com/in/fernando-sosa-37b624306',
    social: {
      github: 'GitHub profile',
      linkedin: 'LinkedIn profile',
    },
  },
  sections: {
    tagsLabel: 'Technologies',
    about: {
      title: 'About',
      paragraphs: [
        'I am a software developer based in San Pedro Sula, Honduras, with a Bachelor of Computer Science from UNITEC (2020–2025, GPA 3.5). I work across the stack with strengths in frontend (React, Vue, Angular, TypeScript), backend (Node.js, ASP.NET Core, REST), QA (Playwright, integration and regression testing), and tools like Docker and Git.',
        'At CODE Exitos (Austin, TX) I have contributed as a QA analyst and software developer—streamlining testing, collaborating on releases, building and optimizing a Yard Management System (YMS) for logistics and asset tracking, and improving uptime and user satisfaction. I enjoy clear technical documentation, Agile ways of working, and shipping with a quality mindset.',
        'At university I was a programming tutor, a member of the computer science engineering association (2022–2024), and part of the IT department maintaining devices as part of my scholarship. Reach me at fernandodavidsosaflores@gmail.com or +504 9618-6573.',
      ],
    },
    experience: {
      title: 'Experience',
      items: [
        {
          dates: '2025 — 2026',
          title: 'QA Analyst',
          company: 'CODE Exitos',
          description:
            'Streamlined testing processes to improve team efficiency, collaborated with cross-functional teams for smooth releases, and met tight deadlines while keeping quality high. Ran regression testing for stability, designed and executed end-to-end strategies for client-facing applications, and partnered with developers to find and fix critical bugs.',
          tags: ['Playwright', 'E2E testing', 'Agile / Scrum', 'Regression'],
        },
        {
          dates: '2025 — 2026',
          title: 'Software Developer',
          company: 'CODE Exitos',
          description:
            'Designed UI/UX improvements, supported high availability through monitoring and maintenance, and delivered performant applications that increased engagement. Built and optimized a Yard Management System (YMS) for logistics and real-time asset tracking, and implemented scalable modules with modern frameworks to improve workflows and data accuracy for a high-profile client.',
          tags: ['React', 'Angular', 'TypeScript', 'Node.js', 'REST APIs'],
        },
        {
          dates: '2024 — 2025',
          title: 'Software Developer Intern',
          company: 'CODE Exitos',
          description:
            'Developed scripts and modules to automate routine QA tasks, learned the professional software lifecycle alongside senior engineers, and helped maintain and optimize internal systems. Provided technical support and troubleshooting for software components.',
          tags: ['JavaScript', 'Automation', 'Support'],
        },
      ],
    },
    projects: {
      title: 'Projects & highlights',
      items: [
        {
          title: 'Decaf language compiler',
          description:
            'Built a compiler for the Decaf language end to end—from lexical analysis through to assembly code generation—demonstrating depth in parsers, semantics, and low-level output.',
          tags: ['C++', 'Compilers', 'Assembly'],
        },
        {
          title: 'Fake vs. real news classifier',
          description:
            'Created an AI model using neural networks to classify news articles as fake or real, combining data preparation, training, and evaluation.',
          tags: ['Python', 'Neural networks', 'ML'],
        },
        {
          title: 'SQL query interface (Firebird)',
          description:
            'Designed a graphical interface to run SQL queries against a Firebird database engine, focusing on usability and reliable database access.',
          tags: ['SQL', 'Firebird', 'UI'],
        },
        {
          title: 'Yard Management System (YMS)',
          description:
            'Built a Yard Management System (YMS) for logistics and real-time asset tracking, implementing scalable modules with modern frameworks to improve workflows and data accuracy for a high-profile client.',
          tags: ['React', 'Angular', 'TypeScript', 'Node.js', 'REST APIs'],
        },
        {
          title: 'Website for local clinic',
          description:
            'Built a website for a local clinic, implementing a modern UI and responsive design to improve user experience.',
          tags: ['React', 'TypeScript', 'Vite'],
          link: 'https://clinicadentalsosafloressps.netlify.app/',
        },
      ],
    },
    footer:
      'Coded in VS Code. Built with React and Vite. San Pedro Sula, Honduras · fernandodavidsosaflores@gmail.com · +504 9618-6573',
  },
}
