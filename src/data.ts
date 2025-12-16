export type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
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
  level: number;
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
    link: "#",
  },
  {
    title: "Sistema PDV",
    description: "PDV web para restaurantes e pequenos negócios.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "API REST",
    description: "Backend em Spring Boot com autenticação JWT.",
    tech: ["Spring Boot", "Java", "JWT"],
    link: "#",
  },
  {
    title: "Microlearning",
    description: "Plataforma educacional com Angular + Spring.",
    tech: ["Angular", "Spring", "MySQL"],
    link: "#",
  },
  {
    title: "Site Institucional",
    description: "Site estático otimizado para SEO.",
    tech: ["Next.js", "TypeScript", "Vercel"],
    link: "#",
  },
  {
    title: "Dashboard",
    description: "Dashboard clean com foco em usabilidade.",
    tech: ["React", "Chart.js", "TailwindCSS"],
    link: "#",
  },
];

export const experiences: Experience[] = [
  {
    year: "2023",
    role: "Início da Jornada",
    company: "Estudos Autodidatas",
    text: "Início dos estudos em desenvolvimento web com foco em JavaScript, React e fundamentos de backend. Desenvolvimento dos primeiros projetos pessoais.",
    skills: ["HTML/CSS", "JavaScript", "React Básico"],
  },
  {
    year: "2024",
    role: "Desenvolvedor Freelancer",
    company: "Projetos Diversos",
    text: "Desenvolvimento de aplicações completas para clientes, incluindo landing pages, sistemas de gestão e APIs. Experiência com stack completo.",
    skills: ["React", "Node.js", "Spring Boot", "PostgreSQL"],
  },
  {
    year: "2025",
    role: "Desenvolvedor Full Stack",
    company: "Produtos Próprios",
    text: "Criação e desenvolvimento de produtos próprios. Foco em arquitetura escalável, boas práticas e experiência do usuário.",
    skills: ["TypeScript", "Next.js", "Microserviços", "AWS"],
  },
];

export const skills: Skill[] = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Spring Boot", level: 75 },
  { name: "PostgreSQL", level: 80 },
  { name: "TailwindCSS", level: 90 },
  { name: "Git", level: 85 },
  { name: "Docker", level: 70 },
];

export const education: Education[] = [
  {
    year: "2022 - 2025",
    degree: "Técnico em Informática integrado ao ensino médio",
    institution: "Instituto Federal Sul Rio-Grandense (IFSul) – Campus Charqueadas/RS",
  },
];
