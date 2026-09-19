import type { Locale } from "./site";

type Localized = Record<Locale, string>;

export type ProjectStatus = "live" | "private" | "experiment";

export interface Project {
  slug: string;
  name: string;
  category: Localized;
  status: ProjectStatus;
  featured: boolean;
  url?: string;
  repo?: string;
  image: string;
  imageAlt: Localized;
  summary: Localized;
  problem: Localized;
  delivery: Localized;
  outcome: Localized;
  stack: string[];
  disciplines: string[];
}

export const projects: Project[] = [
  {
    slug: "faysk-dev",
    name: "faysk.dev",
    category: { en: "Engineering portfolio", pt: "Portfólio de engenharia" },
    status: "live",
    featured: true,
    url: "https://faysk.dev/",
    repo: "https://github.com/Faysk/faysk.dev",
    image: "/assets/img/og-card.png",
    imageAlt: { en: "faysk.dev portfolio visual identity", pt: "Identidade visual do portfólio faysk.dev" },
    summary: {
      en: "A deliberately small portfolio treated as a production system: fast, accessible, international and easy to operate.",
      pt: "Um portfólio deliberadamente enxuto tratado como sistema de produção: rápido, acessível, internacional e fácil de operar."
    },
    problem: {
      en: "Present broad engineering capability without turning the portfolio into a noisy catalogue of technologies.",
      pt: "Apresentar uma capacidade ampla de engenharia sem transformar o portfólio em um catálogo barulhento de tecnologias."
    },
    delivery: {
      en: "Static Astro architecture, responsive design system, production metadata, security headers and progressive enhancement.",
      pt: "Arquitetura estática em Astro, design system responsivo, metadata de produção, headers de segurança e progressive enhancement."
    },
    outcome: {
      en: "A portfolio whose own implementation becomes part of the technical evidence.",
      pt: "Um portfólio cuja própria implementação passa a fazer parte da evidência técnica."
    },
    stack: ["Astro", "TypeScript", "CSS", "Cloudflare"],
    disciplines: ["DevOps", "UX", "Accessibility", "Performance"]
  },
  {
    slug: "lf-airport-transfers",
    name: "LF Airport Transfers",
    category: { en: "Production build", pt: "Projeto em produção" },
    status: "live",
    featured: true,
    url: "https://www.lfairporttransfers.co.uk/",
    image: "/assets/img/projects/lf-airport-transfers.jpg",
    imageAlt: {
      en: "LF Airport Transfers website showing its London chauffeur service",
      pt: "Site da LF Airport Transfers mostrando o serviço de motorista em Londres"
    },
    summary: {
      en: "A production website and direct quote journey for a London chauffeur service.",
      pt: "Um site em produção com jornada direta de orçamento para um serviço de motorista em Londres."
    },
    problem: {
      en: "Create a clearer path from service discovery to a qualified quote request.",
      pt: "Criar um caminho mais claro entre conhecer o serviço e solicitar um orçamento qualificado."
    },
    delivery: {
      en: "A responsive web platform focused on routes, fleet positioning, enquiries and maintainable delivery.",
      pt: "Uma plataforma web responsiva focada em rotas, frota, pedidos de orçamento e manutenção simples."
    },
    outcome: {
      en: "A live production experience with clear service and enquiry paths.",
      pt: "Uma experiência em produção com caminhos claros para serviço e contato."
    },
    stack: ["Next.js", "TypeScript", "Cloudflare", "SEO"],
    disciplines: ["Product", "Frontend", "Delivery", "SEO"]
  },
  {
    slug: "labolita",
    name: "LaBolita",
    category: { en: "Product", pt: "Produto" },
    status: "live",
    featured: true,
    url: "https://labolita.faysk.dev/",
    image: "/assets/img/projects/labolita.jpg",
    imageAlt: {
      en: "LaBolita World Cup dashboard with fixtures and prediction features",
      pt: "Dashboard do LaBolita com jogos e recursos de palpites"
    },
    summary: {
      en: "A World Cup companion for fixtures, predictions, private pools and standings.",
      pt: "Um companion de Copa do Mundo para jogos, palpites, bolões privados e classificação."
    },
    problem: {
      en: "Bring match information, predictions and pool progression into one coherent interface.",
      pt: "Reunir partidas, palpites e evolução do bolão em uma única interface coerente."
    },
    delivery: {
      en: "Responsive product UI with match data, rankings and a replay of how standings changed.",
      pt: "Interface responsiva com dados de partidas, classificação e replay da evolução do ranking."
    },
    outcome: {
      en: "A working product that demonstrates data-heavy responsive UX instead of a static demo.",
      pt: "Um produto funcional que demonstra UX responsiva com bastante dado, e não apenas uma demo estática."
    },
    stack: ["Next.js", "Data visualisation", "Responsive UX"],
    disciplines: ["Product", "Data", "UX"]
  },
  {
    slug: "browser-telemetry-lab",
    name: "Browser Telemetry Lab",
    category: { en: "Lab", pt: "Laboratório" },
    status: "experiment",
    featured: true,
    url: "https://lab.faysk.dev",
    repo: "https://github.com/Faysk/faysk-lab",
    image: "/assets/img/projects/browser-telemetry-lab.jpg",
    imageAlt: {
      en: "Browser Telemetry Lab diagnostics interface",
      pt: "Interface de diagnóstico do Browser Telemetry Lab"
    },
    summary: {
      en: "A privacy-aware workspace for exploring browser APIs, device capabilities and passive telemetry.",
      pt: "Um laboratório focado em privacidade para explorar APIs do navegador, capacidades do dispositivo e telemetria passiva."
    },
    problem: {
      en: "Explore what modern browsers expose while keeping the experiment understandable and privacy-aware.",
      pt: "Explorar o que navegadores modernos expõem mantendo o experimento compreensível e atento à privacidade."
    },
    delivery: {
      en: "A browser-native diagnostics interface using standard web APIs and ES modules.",
      pt: "Uma interface de diagnóstico nativa do navegador usando APIs web padrão e ES modules."
    },
    outcome: {
      en: "A public technical lab that can be inspected live and through source code.",
      pt: "Um laboratório técnico público que pode ser inspecionado ao vivo e pelo código-fonte."
    },
    stack: ["Browser APIs", "ES Modules", "Privacy"],
    disciplines: ["Experiment", "Frontend", "Privacy"]
  },
  {
    slug: "dnd-scribe",
    name: "DnD Scribe",
    category: { en: "Private system", pt: "Sistema privado" },
    status: "private",
    featured: false,
    url: "https://dnd.faysk.dev/",
    image: "/assets/img/projects/dnd-scribe.jpg",
    imageAlt: {
      en: "DnD Scribe private campaign workspace sign-in screen",
      pt: "Tela de login do workspace privado DnD Scribe"
    },
    summary: {
      en: "A private campaign operations workspace combining notes, Roll20, audio and review workflows.",
      pt: "Um workspace privado de operações de campanha reunindo notas, Roll20, áudio e fluxos de revisão."
    },
    problem: {
      en: "Reduce context switching across the tools used to run and review campaign sessions.",
      pt: "Reduzir a troca constante entre ferramentas usadas para executar e revisar sessões de campanha."
    },
    delivery: {
      en: "A role-protected operations interface integrating campaign workflows behind authentication.",
      pt: "Uma interface operacional protegida por papéis integrando os fluxos da campanha atrás de autenticação."
    },
    outcome: {
      en: "A private working system rather than a public-facing demo.",
      pt: "Um sistema privado funcional, em vez de uma demonstração pública."
    },
    stack: ["Supabase", "OAuth", "Operations UI"],
    disciplines: ["Auth", "Product", "Operations"]
  },
  {
    slug: "thayna-portfolio",
    name: "Thayná Portfolio",
    category: { en: "Portfolio build", pt: "Projeto de portfólio" },
    status: "live",
    featured: false,
    url: "https://thayna.faysk.dev/",
    image: "/assets/img/projects/thayna-portfolio.jpg",
    imageAlt: {
      en: "Thayná Borges psychology portfolio homepage",
      pt: "Homepage do portfólio de psicologia de Thayná Borges"
    },
    summary: {
      en: "A compact responsive portfolio designed around clarity, personal identity and easy maintenance.",
      pt: "Um portfólio responsivo e compacto pensado para clareza, identidade pessoal e manutenção simples."
    },
    problem: {
      en: "Create a focused online presence without unnecessary application complexity.",
      pt: "Criar uma presença online focada sem complexidade de aplicação desnecessária."
    },
    delivery: {
      en: "A responsive presentation layer with lightweight hosting and a concise information structure.",
      pt: "Uma camada de apresentação responsiva com hospedagem leve e estrutura de informação concisa."
    },
    outcome: {
      en: "A small live project that demonstrates restraint and responsive execution.",
      pt: "Um pequeno projeto no ar que demonstra simplicidade e execução responsiva."
    },
    stack: ["Responsive UI", "Portfolio", "Cloudflare"],
    disciplines: ["Frontend", "UX", "Delivery"]
  }
];

export const experience = [
  {
    period: "2026 — Present",
    company: "S4U",
    role: "IT Infrastructure Engineer",
    focus: { en: "Infrastructure, servers, networks, security, monitoring and continuity.", pt: "Infraestrutura, servidores, redes, segurança, monitoramento e continuidade." },
    stack: ["Windows Server", "Linux", "Networking", "Security"]
  },
  {
    period: "2019 — 2026",
    company: "SAT",
    role: "DevOps Engineer",
    focus: { en: "Cloud infrastructure, automation, CI/CD, containers and production operations.", pt: "Infraestrutura cloud, automação, CI/CD, containers e operações de produção." },
    stack: ["Azure", "Terraform", "Docker", "Azure DevOps", "PowerShell"]
  },
  {
    period: "2016 — 2019",
    company: "Oficina de TI",
    role: "IT Infrastructure Support Analyst",
    focus: { en: "Corporate infrastructure, servers, networks, access, security and continuity.", pt: "Infraestrutura corporativa, servidores, redes, acessos, segurança e continuidade." },
    stack: ["Windows Server", "Linux", "Active Directory", "Backup"]
  },
  {
    period: "2012 — 2015",
    company: "UpGlobal",
    role: "Software Developer",
    focus: { en: "Web applications, system maintenance, environments and deployment support.", pt: "Aplicações web, manutenção de sistemas, ambientes e suporte a deploy." },
    stack: ["PHP", "JavaScript", "HTML", "CSS", "Apache"]
  },
  {
    period: "2011 — 2012",
    company: "TAM",
    role: "IT Support Technician",
    focus: { en: "Internal support, incident handling, workstations and corporate infrastructure.", pt: "Suporte interno, atendimento de incidentes, estações de trabalho e infraestrutura corporativa." },
    stack: ["Windows", "Hardware", "Networks", "Support"]
  }
];

export const capabilities = [
  {
    title: { en: "Infrastructure & delivery", pt: "Infraestrutura & entrega" },
    text: { en: "Cloud, CI/CD, infrastructure as code, containers and production operations.", pt: "Cloud, CI/CD, infraestrutura como código, containers e operações de produção." },
    stack: ["Azure", "Terraform", "Docker", "CI/CD"]
  },
  {
    title: { en: "Automation", pt: "Automação" },
    text: { en: "Operational scripts and workflows that replace repetitive manual paths.", pt: "Scripts e workflows operacionais que substituem caminhos manuais repetitivos." },
    stack: ["PowerShell", "Bash", "Python"]
  },
  {
    title: { en: "Product engineering", pt: "Engenharia de produto" },
    text: { en: "Web products, APIs, authentication, data and interfaces that are maintainable in production.", pt: "Produtos web, APIs, autenticação, dados e interfaces que continuam sustentáveis em produção." },
    stack: ["TypeScript", "Next.js", "Astro", "PostgreSQL"]
  },
  {
    title: { en: "AI-assisted engineering", pt: "Engenharia assistida por IA" },
    text: { en: "Local models, coding agents and LLM-assisted workflows used as engineering tools, not decoration.", pt: "Modelos locais, agentes de código e workflows com LLM usados como ferramentas de engenharia, não decoração." },
    stack: ["Local LLMs", "Agents", "Automation"]
  }
];
