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
    year: "Set. de 2025 - Dez. de 2025",
    role: "Bolsista de Iniciação Tecnológica (RotaCRIC)",
    company: "IFSUL - Instituto Federal Sul-rio-grandense",
    text: `Atuo no desenvolvimento e manutenção de um sistema web em Django, com foco em aprimorar sua estrutura, desempenho e experiência do usuário. O projeto já possuía uma base existente, e meu papel é otimizar tanto o código quanto os processos de desenvolvimento e deploy, mantendo o sistema atualizado e eficiente.

Entre minhas principais atividades estão:

      - Refatoração do código para torná- lo mais limpo, padronizado e de fácil manutenção

  - Melhorias na interface e layout, modernizando o front - end e aprimorando a usabilidade

  - Implementação de pipeline de CI / CD com GitHub Actions, automatizando o deploy e reduzindo falhas manuais

  - Atualizações e ajustes no servidor Linux com Docker e Nginx, garantindo estabilidade e integração fluida com o Django

  - Criação de rotinas de backup automatizadas, assegurando a integridade dos dados

  - Traduzir necessidades funcionais em soluções técnicas eficientes

Atualmente, sigo evoluindo o projeto, buscando entregar um sistema mais estável, moderno e sustentável — combinando boas práticas de desenvolvimento, automação e experiência do usuário.`,
    skills: ["Web", "Bootstrap", "Python", "Django", "MySQL", "Docker", "Nginx", "CI/CD", "Linux", "Git", "Github", "GitHub Actions"],
  },
  {
    year: "Mai. de 2025 - Set. de 2025",
    role: "Técnico em Informática (Estágio)",
    company: "PREFEITURA MUNICIPAL DE CHARQUEADAS",
    text: "Atuação no suporte técnico a colaboradores, realizando formatação, configuração e manutenção de computadores. Responsável também pela instalação, configuração e manutenção de equipamentos de rede, como impressoras, switches e cabeamento RJ45. Prestação de suporte de TI remoto e presencial, garantindo o bom funcionamento e a continuidade das atividades dos demais setores.",
    skills: [""],
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
