import type { Copy } from './copy.types.ts'

export const copyEs: Copy = {
  skip: 'Saltar al contenido',
  sidebar: {
    name: 'Fernando David Sosa Flores',
    role: 'Desarrollador de software',
    tagline:
      'Licenciado en Informática. Construyo experiencias web, software confiable y priorizo la calidad desde la UI hasta las pruebas.',
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      resume: 'Currículum',
    },
    a11y: {
      language: 'Idioma',
      theme: 'Tema',
      dark: 'Oscuro',
      light: 'Claro',
    },
    profileAria: 'Presentación y navegación del sitio',
    socialLinksLabel: 'Enlaces sociales',
    navLabel: 'Secciones de la página',
    linkedinUrl: 'https://www.linkedin.com/in/fernando-sosa-37b624306',
    social: {
      github: 'Perfil de GitHub',
      linkedin: 'Perfil de LinkedIn',
    },
  },
  sections: {
    tagsLabel: 'Tecnologías',
    about: {
      title: 'Sobre mí',
      paragraphs: [
        'Soy desarrollador de software en San Pedro Sula, Honduras, con Licenciatura en Informática de UNITEC (2020–2025, GPA 3.5). Trabajo en frontend y backend con énfasis en React, Vue, Angular y TypeScript; Node.js, ASP.NET Core y APIs REST; aseguramiento de calidad con Playwright y pruebas de integración y regresión; además de Docker y Git.',
        'En CODE Exitos (Austin, TX) he participado como analista QA y desarrollador de software: optimicé pruebas, colaboré en entregas, construí y optimicé un Yard Management System (YMS) para logística y seguimiento de activos, y mejoré disponibilidad y satisfacción de usuario. Valoro la documentación técnica, Agile/Scrum y entregar con mentalidad de calidad.',
        'En la universidad fui tutor de programación, miembro de la asociación de ingeniería en informática (2022–2024) y parte del departamento de TI en mantenimiento de equipos como parte de mi beca. Contacto: fernandodavidsosaflores@gmail.com o +504 9618-6573.',
      ],
    },
    experience: {
      title: 'Experiencia',
      items: [
        {
          dates: '2025 — 2026',
          title: 'Analista QA',
          company: 'CODE Exitos',
          description:
            'Optimicé procesos de prueba para mejorar la eficiencia del equipo, colaboré con equipos multifuncionales para lanzamientos fluidos y cumplí plazos ajustados sin sacrificar calidad. Ejecuté pruebas de regresión para estabilidad, diseñé estrategias end-to-end para aplicaciones orientadas al cliente y trabajé con desarrolladores para corregir bugs críticos.',
          tags: ['Playwright', 'Pruebas E2E', 'Agile / Scrum', 'Regresión'],
        },
        {
          dates: '2025 — 2026',
          title: 'Desarrollador de software',
          company: 'CODE Exitos',
          description:
            'Mejoré UI/UX, apoyé alta disponibilidad con monitoreo y mantenimiento, y entregué aplicaciones de alto rendimiento que aumentaron el engagement. Desarrollé y optimicé un YMS para logística y seguimiento en tiempo real, e implementé módulos escalables con frameworks modernos para mejorar flujos y precisión de datos para un cliente destacado.',
          tags: ['React', 'Angular', 'TypeScript', 'Node.js', 'REST APIs'],
        },
        {
          dates: '2024 — 2025',
          title: 'Pasante en desarrollo de software',
          company: 'CODE Exitos',
          description:
            'Desarrollé scripts y módulos para automatizar tareas de QA, aprendí el ciclo de vida profesional junto a ingenieros senior y ayudé a mantener y optimizar sistemas internos. Brindé soporte técnico y resolución de problemas en componentes de software.',
          tags: ['JavaScript', 'Automatización', 'Soporte'],
        },
      ],
    },
    projects: {
      title: 'Proyectos y logros',
      items: [
        {
          title: 'Compilador del lenguaje Decaf',
          description:
            'Implementé un compilador completo para Decaf: desde análisis léxico hasta generación de código ensamblador, demostrando dominio de parsers, semántica y salida de bajo nivel.',
          tags: ['C++', 'Compiladores', 'Assembly'],
        },
        {
          title: 'Clasificador de noticias falsas vs. reales',
          description:
            'Creé un modelo de IA con redes neuronales para clasificar artículos como falsos o reales, cubriendo preparación de datos, entrenamiento y evaluación.',
          tags: ['Python', 'Redes neuronales', 'ML'],
        },
        {
          title: 'Interfaz SQL (Firebird)',
          description:
            'Diseñé una interfaz gráfica para ejecutar consultas SQL sobre un motor Firebird, priorizando usabilidad y acceso confiable a la base de datos.',
          tags: ['SQL', 'Firebird', 'UI'],
        },
        {
          title: 'Yard Management System (YMS)',
          description:
            'Desarrollé un sistema de gestión de yardas para la logística y seguimiento de activos, implementando módulos escalables con frameworks modernos para mejorar flujos y precisión de datos para un cliente destacado.',
          tags: ['React', 'Angular', 'TypeScript', 'Node.js', 'REST APIs'],
        },
        {
          title: 'Sitio web para clínica local',
          description:
            'Desarrollé un sitio web para una clínica local, implementando un UI moderno y diseño responsivo para mejorar la experiencia del usuario.',
          tags: ['React', 'TypeScript', 'Vite'],
        },
      ],
    },
    resume: {
      title: 'Currículum',
      description:
        'Consulta o descarga mi currículum completo en PDF, con experiencia, habilidades, educación y datos de contacto.',
      viewLabel: 'Ver currículum',
      downloadLabel: 'Descargar PDF',
      openLabel: 'Abrir PDF en una pestaña nueva',
    },
    footer:
      'Programado en VS Code. Hecho con React y Vite. San Pedro Sula, Honduras · fernandodavidsosaflores@gmail.com · +504 9618-6573',
  },
}
