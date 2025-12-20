export type Language = "pt" | "en";

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  longDescription?: string;
  media?: ProjectMedia[];
};

export type Experience = {
  year: string;
  role: string;
  company: string;
  text: string;
  skills: string[];
};

export type Skill = {
  name: string;
};

export type Education = {
  year?: string;
  degree: string;
  institution: string;
};

export type UiText = {
  header: {
    title: string;
    subtitle: string;
    download: string;
  };
  footer: {
    subtitle: string;
    rights: string;
  };
  resume: {
    title: string;
    paragraphs: string[];
  };
  skills: {
    title: string;
  };
  tabs: {
    projects: string;
    experience: string;
    education: string;
  };
  projects: {
    cta: string;
  };
};

export const uiText: Record<Language, UiText> = {
  pt: {
    header: {
      title: "Lucas Neves",
      subtitle: "Desenvolvedor de Software • Charqueadas, RS",
      download: "Baixar CV",
    },
    footer: {
      subtitle: "Desenvolvedor de Software • Charqueadas, RS",
      rights: "Todos os direitos reservados.",
    },
    resume: {
      title: "Resumo",
      paragraphs: [
        "Sou desenvolvedor de software com experiência em desenvolvimento Full Stack, atuando principalmente com Python e Django, com experiência prática comprovada como bolsista, além do uso de tecnologias web modernas. Sou formado como Técnico em Informática pelo IFSul, onde adquiri sólida base em desenvolvimento front-end e back-end, banco de dados, redes, gerenciamento de sistemas e segurança da informação.",
        "Possuo aproximadamente 3 anos de estudo e prática contínua em programação e desenvolvimento de software, com conhecimentos em React, Java, Kotlin, desenvolvimento Android, MySQL e Docker. Estou em processo de ingresso em um curso de graduação na área de tecnologia, buscando oportunidades para aplicar e expandir meus conhecimentos em novos projetos e desafios.",
      ],
    },
    skills: { title: "Skills" },
    tabs: { projects: "Projetos", experience: "Experiência", education: "Formação" },
    projects: { cta: "Ver projeto" },
  },
  en: {
    header: {
      title: "Lucas Neves",
      subtitle: "Software Developer • Charqueadas, RS",
      download: "Download CV",
    },
    footer: {
      subtitle: "Software Developer • Charqueadas, RS",
      rights: "All rights reserved.",
    },
    resume: {
      title: "Summary",
      paragraphs: [
        "I am a software developer with full-stack experience, mainly using Python and Django, plus modern web technologies. I graduated as an IT Technician at IFSul, where I built a solid foundation in front-end and back-end development, databases, networking, systems administration, and security.",
        "I have around three years of continuous study and hands-on coding with React, Java, Kotlin, Android, MySQL, and Docker. I am pursuing a technology degree and looking for opportunities to apply and expand my skills in new projects and challenges.",
      ],
    },
    skills: { title: "Skills" },
    tabs: { projects: "Projects", experience: "Experience", education: "Education" },
    projects: { cta: "View project" },
  },
};

export const projectsByLang: Record<Language, Project[]> = {
  pt: [
  {
    title: "Landing Page Creatum",
    description: "Landing page institucional focada em conversão.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://dribbble.com/shots/00000000",
    longDescription: "Landing page responsiva com foco em copy e CTA claro, animações suaves e testes A/B para converter leads.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80", alt: "Landing page hero" },
      { type: "image", src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80", alt: "Landing page hero" },
      { type: "image", src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80", alt: "Seção de benefícios" },
    ],
  },
  {
    title: "Sistema PDV",
    description: "PDV web para restaurantes e pequenos negócios.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "https://github.com/",
    longDescription: "Aplicação full stack com frente de caixa, impressão de comprovantes, controle de estoque e relatórios em tempo real.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80", alt: "Dashboard PDV" },
      { type: "video", src: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4", alt: "Demo em vídeo" },
    ],
  },
  {
    title: "API REST",
    description: "Backend em Spring Boot com autenticação JWT.",
    tech: ["Spring Boot", "Java", "JWT"],
    link: "https://github.com/",
    longDescription: "API stateless com autenticação JWT, versionamento, documentação OpenAPI e testes automatizados.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80", alt: "Diagrama da API" },
    ],
  },
  {
    title: "Microlearning",
    description: "Plataforma educacional com Angular + Spring.",
    tech: ["Angular", "Spring", "MySQL"],
    link: "https://github.com/",
    longDescription: "Plataforma de microlearning com trilhas, quizzes, gamificação e painel de progresso para alunos.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80", alt: "Tela de curso" },
    ],
  },
  {
    title: "Site Institucional",
    description: "Site estático otimizado para SEO.",
    tech: ["Next.js", "TypeScript", "Vercel"],
    link: "https://lucasneves.com",
    longDescription: "Site institucional rápido, com boas práticas de SEO, acessibilidade e otimização de imagens.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80", alt: "Home institucional" },
    ],
  },
  {
    title: "Dashboard",
    description: "Dashboard clean com foco em usabilidade.",
    tech: ["React", "Chart.js", "TailwindCSS"],
    link: "https://github.com/",
    longDescription: "Dashboard com gráficos em tempo real, filtros rápidos e dark mode.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80", alt: "Visão geral do dashboard" },
    ],
  },
  ],
  en: [
    {
      title: "Creatum Landing Page",
      description: "Marketing landing page focused on conversion.",
      tech: ["React", "Tailwind", "Framer Motion"],
      link: "https://dribbble.com/shots/00000000",
      longDescription: "Responsive landing page with copywriting focus, clear CTA, smooth animations, and A/B tests to convert leads.",
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80", alt: "Landing page hero" },
        { type: "image", src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80", alt: "Landing page hero" },
        { type: "image", src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80", alt: "Benefits section" },
      ],
    },
    {
      title: "POS System",
      description: "Web POS for restaurants and small businesses.",
      tech: ["React", "Node.js", "PostgreSQL"],
      link: "https://github.com/",
      longDescription: "Full-stack app with cash register, receipt printing, inventory control, and real-time reports.",
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80", alt: "POS dashboard" },
        { type: "video", src: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4", alt: "Video demo" },
      ],
    },
    {
      title: "REST API",
      description: "Spring Boot backend with JWT auth.",
      tech: ["Spring Boot", "Java", "JWT"],
      link: "https://github.com/",
      longDescription: "Stateless API with JWT authentication, versioning, OpenAPI docs, and automated tests.",
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80", alt: "API diagram" },
      ],
    },
    {
      title: "Microlearning Platform",
      description: "Educational platform built with Angular + Spring.",
      tech: ["Angular", "Spring", "MySQL"],
      link: "https://github.com/",
      longDescription: "Microlearning platform with learning paths, quizzes, gamification, and student progress dashboards.",
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80", alt: "Course screen" },
      ],
    },
    {
      title: "Corporate Website",
      description: "Static site optimized for SEO.",
      tech: ["Next.js", "TypeScript", "Vercel"],
      link: "https://lucasneves.com",
      longDescription: "Fast corporate website with SEO best practices, accessibility, and optimized images.",
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80", alt: "Home page" },
      ],
    },
    {
      title: "Dashboard",
      description: "Clean dashboard focused on usability.",
      tech: ["React", "Chart.js", "TailwindCSS"],
      link: "https://github.com/",
      longDescription: "Dashboard with real-time charts, quick filters, and dark mode.",
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80", alt: "Dashboard overview" },
      ],
    },
  ],
};

// Backwards compatibility for existing imports
export const projects = projectsByLang.pt;

export const experiencesByLang: Record<Language, Experience[]> = {
  pt: [
  {
    year: "Set. de 2025 - Dez. de 2025",
    role: "Bolsista de Iniciação Tecnológica (RotaCRIC)",
    company: "IFSUL - Instituto Federal Sul-rio-grandense",
    text: `
    Atuação **full stack** no desenvolvimento e manutenção de **sistema web** para gestão de eventos, projeto que já conta com **400+** usuários, utilizando Python e Django.
      
      - **Back-end**: refatoração de código e reestruturação completa do banco de dados, com melhorias de integridade, desempenho e manutenibilidade.
      - **Front-end**: modernização da interface e aprimoramento da experiência do usuário (UX/UI)
      - **DevOps**: padronização do versionamento e entrega, implementação de CI/CD com GitHub Actions, deploy automatizado.
      - **Infraestrutura**: configuração e manutenção de Linux, Docker e Nginx, além de rotinas automatizadas de backup.
      - **Processos**: levantamento de requisitos e tradução de necessidades funcionais em soluções técnicas.

    **Resultados**: sistema mais estável, organizado, escalável e com processos de desenvolvimento padronizados.
`,
    skills: ["Web", "Bootstrap", "Python", "Django", "MySQL", "Docker", "Nginx", "CI/CD", "Linux", "Git", "Github", "GitHub Actions"],
  },
  {
    year: "Mai. de 2025 - Set. de 2025",
    role: "Técnico em Informática (Estágio)",
    company: "PREFEITURA MUNICIPAL DE CHARQUEADAS",
    text: "Atuação no suporte técnico a colaboradores, realizando formatação, configuração e manutenção de computadores. Responsável também pela instalação, configuração e manutenção de equipamentos de rede, como impressoras, switches e cabeamento RJ45. Prestação de suporte de TI remoto e presencial, garantindo o bom funcionamento e a continuidade das atividades dos demais setores.",
    skills: [],
  },
  {
    year: "Out. de 2024 – Dez. de 2024",
    role: "Técnico em Informática (Estágio)",
    company: "Licen Tecnologia Ltda.",
    text: "Atuação no suporte técnico e apoio às rotinas da empresa, realizando instalações de computadores e prestando assistência geral na área de TI, com foco na eficiência e no bom funcionamento dos equipamentos.",
    skills: [],
  },
  {
    year: "Jan. de 2021 – Jan. de 2023",
    role: "Auxiliar Administrativo (Jovem Aprendiz)	",
    company: "Grupo Integra Plus",
    text: "Suporte administrativo às demais áreas da empresa, com o atendimento telefônico, vendas, revisão de projetos, organização de arquivos, envio de documentos, gestão de planilhas, entre outros.",
    skills: [],
  },
  ],
  en: [
    {
      year: "Sep 2025 - Dec 2025",
      role: "Technology Scholarship (RotaCRIC)",
      company: "IFSUL - Federal Institute Sul-rio-grandense",
      text: `
    **Full-stack** work on a web system for event management already used by **400+** users, using Python and Django.
      
      - **Back-end**: code refactor and full database redesign, improving integrity, performance, and maintainability.
      - **Front-end**: interface modernization and UX/UI improvements.
      - **DevOps**: standardized versioning and delivery, CI/CD with GitHub Actions, automated deploy.
      - **Infrastructure**: Linux, Docker, and Nginx setup and maintenance, plus automated backup routines.
      - **Processes**: requirements gathering and translating functional needs into technical solutions.

    **Results**: more stable, organized, and scalable system with standardized development processes.
`,
      skills: ["Web", "Bootstrap", "Python", "Django", "MySQL", "Docker", "Nginx", "CI/CD", "Linux", "Git", "Github", "GitHub Actions"],
    },
    {
      year: "May 2025 - Sep 2025",
      role: "IT Technician (Intern)",
      company: "City Hall of Charqueadas",
      text: "Technical support for collaborators, formatting, configuring, and maintaining computers. Also handled installation, configuration, and maintenance of network equipment such as printers, switches, and RJ45 cabling. Provided remote and in-person IT support to keep other departments running smoothly.",
      skills: [],
    },
    {
      year: "Oct 2024 – Dec 2024",
      role: "IT Technician (Intern)",
      company: "Licen Tecnologia Ltda.",
      text: "Technical support and assistance with company routines, installing computers and providing general IT help, focused on efficiency and proper operation of equipment.",
      skills: [],
    },
    {
      year: "Jan 2021 – Jan 2023",
      role: "Administrative Assistant (Apprentice)",
      company: "Grupo Integra Plus",
      text: "Administrative support to other departments, phone service, sales, project review, file organization, document sending, and spreadsheet management, among others.",
      skills: [],
    },
  ],
};

export const experiences = experiencesByLang.pt;

export const skillsByLang: Record<Language, Skill[]> = {
  pt: [
    { name: "Javascript"},
    { name: "TypeScript" },
    { name: "React"},
    { name: "TailwindCSS" },
    { name: "Node.js" },
    { name: "Java" },
    { name: "Kotlin" },
    { name: "Android" },
    { name: "Spring Boot" },
    { name: "MySQL" },
    { name: "Python" },
    { name: "Git" },
    { name: "Github Actions" },
    { name: "Docker" },
    { name: "Nginx" },
  ],
  en: [
    { name: "Javascript"},
    { name: "TypeScript" },
    { name: "React"},
    { name: "TailwindCSS" },
    { name: "Node.js" },
    { name: "Java" },
    { name: "Kotlin" },
    { name: "Android" },
    { name: "Spring Boot" },
    { name: "MySQL" },
    { name: "Python" },
    { name: "Git" },
    { name: "Github Actions" },
    { name: "Docker" },
    { name: "Nginx" },
  ],
};

export const skills = skillsByLang.pt;

export const educationByLang: Record<Language, Education[]> = {
  pt: [
    {
      year: "2022 - 2025",
      degree: "Técnico em Informática integrado ao ensino médio",
      institution: "Instituto Federal Sul Rio-Grandense (IFSul) – Câmpus Charqueadas/RS",
    },
  ],
  en: [
    {
      year: "2022 - 2025",
      degree: "IT Technician (Integrated High School)",
      institution: "Federal Institute Sul Rio-Grandense (IFSul) – Charqueadas Campus",
    },
  ],
};

export const education = educationByLang.pt;
