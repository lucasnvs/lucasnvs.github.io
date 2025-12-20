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

export const projects: Project[] = [
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
];

export const experiences: Experience[] = [
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
];

export const skills: Skill[] = [
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
];

export const education: Education[] = [
  {
    year: "2022 - 2025",
    degree: "Técnico em Informática integrado ao ensino médio",
    institution: "Instituto Federal Sul Rio-Grandense (IFSul) – Câmpus Charqueadas/RS",
  },
];
