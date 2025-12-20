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
      title: "Plataforma Nautes",
      description: "Plataforma de pesca inteligente e monitoramento do ecossistema aquático, desenvolvida no Hackathon Charcode 2025, unindo tecnologia, sustentabilidade e ciência oceânica.",
      tech: ["Fastify", "MySQL", "React", "TailwindCSS"],
      link: "https://github.com/lucasnvs/nautes-platform",
      longDescription: "Projeto desenvolvido para a modalidade Hackaton do Evento Charcode 2025 do IFSul Câmpus Charqueadas. Nautes é uma plataforma voltada à pesca inteligente e ao monitoramento do ecossistema aquático, unindo tecnologia, ciência e sustentabilidade. Inspirada no conceito do ser humano como “navegador” consciente, a solução auxilia na proteção da biodiversidade, na alimentação sustentável e na criação de uma representação digital do oceano, fortalecendo a relação da sociedade com o ambiente marinho.",
      media: [
        { type: "image", src: "/projects/nautes/banner.png", alt: "Banner Nautes" },
        { type: "image", src: "/projects/nautes/general-banner.jpg", alt: "Banner Principal Nautes" },
        { type: "image", src: "/projects/nautes/img-1.png", alt: "Visão geral da Landing Page" },
        { type: "image", src: "/projects/nautes/img-2.png", alt: "Visão geral do Login" },
        { type: "image", src: "/projects/nautes/img-3.png", alt: "Visão geral do Signup" },
        { type: "image", src: "/projects/nautes/img-4.png", alt: "Visão geral do Dashboard" },
        { type: "image", src: "/projects/nautes/img-5.png", alt: "Visão geral do Dashboard de Organização" },
        { type: "image", src: "/projects/nautes/img-6.png", alt: "Visão geral do Dashboard de Admin" },
      ],
    },
    {
      title: "Siboon E-commerce",
      description: "Sistema de e-commerce para a loja 'Siboon Skateshop'.",
      tech: ["PHP", "Web", "MySQL"],
      link: "https://github.com/lucasnvs/siboon",
      longDescription: "Sistema completo de e-commerce com catálogo de produtos, carrinho de compras, checkout e painel administrativo.",
      media: [],
    },
    {
      title: "Siboon Android",
      description: "Aplicativo de e-commerce para a loja 'Siboon Skateshop'.",
      tech: ["Java", "Android"],
      link: "https://github.com/lucasnvs/siboon-android",
      longDescription: "Aplicativo de e-commerce com catálogo de produtos, carrinho de compras e opcoes de perfil do usuario.",
      media: [],
    },
  ],
  en: [
    {
      title: "Nautes Platform",
      description: "Smart fishing and aquatic ecosystem monitoring platform, developed at Hackathon Charcode 2025, combining technology, sustainability, and ocean science.",
      tech: ["Fastify", "MySQL", "React", "TailwindCSS"],
      link: "https://github.com/lucasnvs/nautes-platform",
      longDescription: "Project developed for the Hackathon track at Charcode 2025 (IFSul Charqueadas Campus). Nautes is a platform for smart fishing and aquatic ecosystem monitoring, bringing together technology, science, and sustainability. Inspired by the idea of the human as a conscious ‘navigator’, the solution helps protect biodiversity, promote sustainable food, and build a digital representation of the ocean, strengthening society’s relationship with the marine environment.",
      media: [
        { type: "image", src: "/projects/nautes/banner.png", alt: "Nautes Banner" },
        { type: "image", src: "/projects/nautes/general-banner.jpg", alt: "Main Nautes Banner" },
        { type: "image", src: "/projects/nautes/img-1.png", alt: "Overview of Landing Page" },
        { type: "image", src: "/projects/nautes/img-2.png", alt: "Overview of Login" },
        { type: "image", src: "/projects/nautes/img-3.png", alt: "Overview of Signup" },
        { type: "image", src: "/projects/nautes/img-4.png", alt: "Overview of Dashboard" },
        { type: "image", src: "/projects/nautes/img-5.png", alt: "Overview of Organization Dashboard" },
        { type: "image", src: "/projects/nautes/img-6.png", alt: "Overview of Admin Dashboard" },
      ],
    },
    {
      title: "Siboon E-commerce",
      description: "E-commerce system for the ‘Siboon Skateshop’ store.",
      tech: ["PHP", "Web", "MySQL"],
      link: "https://github.com/lucasnvs/siboon",
      longDescription: "Full e-commerce system with product catalog, shopping cart, checkout, and admin panel.",
      media: [],
    },
    {
      title: "Siboon Android",
      description: "E-commerce mobile app for the ‘Siboon Skateshop’ store.",
      tech: ["Java", "Android"],
      link: "https://github.com/lucasnvs/android-siboon",
      longDescription: "E-commerce app with product catalog, shopping cart, and user profile options.",
      media: [],
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
      skills: ["Web", "Bootstrap", "Python", "Django", "MySQL", "Docker", "Nginx", "CI/CD", "Linux", "Git", "GitHub", "GitHub Actions"],
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
      skills: ["Web", "Bootstrap", "Python", "Django", "MySQL", "Docker", "Nginx", "CI/CD", "Linux", "Git", "GitHub", "GitHub Actions"],
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
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "TailwindCSS" },
    { name: "Node.js" },
    { name: "Java" },
    { name: "Kotlin" },
    { name: "Android" },
    { name: "Spring Boot" },
    { name: "MySQL" },
    { name: "Python" },
    { name: "Git" },
    { name: "GitHub Actions" },
    { name: "Docker" },
    { name: "Nginx" },
  ],
  en: [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "TailwindCSS" },
    { name: "Node.js" },
    { name: "Java" },
    { name: "Kotlin" },
    { name: "Android" },
    { name: "Spring Boot" },
    { name: "MySQL" },
    { name: "Python" },
    { name: "Git" },
    { name: "GitHub Actions" },
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
