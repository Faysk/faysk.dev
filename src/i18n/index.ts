import type { Locale } from "@data/site";

const content = {
  en: {
    meta: {
      title: "Faysk — DevOps, Cloud, Automation & Product Engineering",
      description: "DevOps engineer building reliable infrastructure, automation, production systems and thoughtful digital products."
    },
    nav: {
      work: "Work",
      solutions: "What I solve",
      experience: "Experience",
      capabilities: "Capabilities",
      contact: "Contact",
      cv: "CV"
    },
    hero: {
      eyebrow: "DevOps · Cloud · Automation · Product Engineering",
      titleA: "Systems that work.",
      titleB: "And keep working.",
      copy: "I build, automate and operate reliable digital systems — from infrastructure and CI/CD to production software and the experience people actually use.",
      workCta: "Explore my work",
      cvCta: "View CV",
      contactCta: "Let's talk",
      pipelineLabel: "How I think",
      pipeline: ["Code", "Build", "Deploy", "Observe"],
      pipelineNote: "Infrastructure to interface · designed for production"
    },
    proof: [
      ["Since 2011", "working across technology"],
      ["DevOps since 2019", "delivery, automation and operations"],
      ["Production-minded", "reliability, clarity and recovery"],
      ["Portugal", "open to remote opportunities"]
    ],
    work: {
      eyebrow: "Selected work",
      title: "Real things, built and shipped.",
      copy: "Products, systems, experiments and production builds. Client logos are not the point here — the work is.",
      more: "More work",
      live: "View live",
      source: "Source",
      caseStudy: "Case study",
      private: "Private system"
    },
    solutions: {
      eyebrow: "What I solve",
      title: "Technology is useful when it removes friction.",
      copy: "I work across infrastructure, automation and product engineering, choosing the layer that actually solves the problem.",
      items: [
        ["Legacy systems", "Modernise applications, environments and processes without rewriting everything just for the thrill of it."],
        ["Deployment & CI/CD", "Turn fragile manual releases into understandable and repeatable delivery paths."],
        ["Internal tools", "Build dashboards, operational interfaces and small systems that remove repetitive work."],
        ["Infrastructure", "Cloud, servers, networking, observability, backups and reproducible environments."],
        ["Automation", "Scripts, integrations and workflows that reduce manual operational effort."],
        ["Web platforms", "Fast, responsive and maintainable products that are designed for real users and real operations."]
      ]
    },
    experience: {
      eyebrow: "Experience",
      title: "Built from support up.",
      copy: "Hands-on experience across support, software, infrastructure and operations — the layers that make reliable delivery possible."
    },
    capabilities: {
      eyebrow: "Engineering capabilities",
      title: "Broad enough to see the system. Focused enough to ship it.",
      copy: "The useful part is not knowing a long list of tools. It is understanding how the pieces affect each other in production."
    },
    contact: {
      eyebrow: "Contact",
      title: "Have a system that needs simplifying?",
      copy: "Infrastructure, automation, an internal tool or a product that needs better engineering — tell me what is getting in the way.",
      name: "Name",
      email: "Your email",
      subject: "Subject",
      message: "Message",
      send: "Open email draft",
      direct: "Or email directly",
      privacy: "This version prepares the message locally and opens your email app. Nothing is stored by this site.",
      ready: "Draft prepared. Review it in your email app before sending."
    },
    footer: {
      note: "Built with Astro · designed as a production system",
      back: "Back to top"
    }
  },
  pt: {
    meta: {
      title: "Faysk — DevOps, Cloud, Automação & Product Engineering",
      description: "Engenheiro DevOps construindo infraestrutura confiável, automação, sistemas de produção e produtos digitais bem pensados."
    },
    nav: {
      work: "Projetos",
      solutions: "O que resolvo",
      experience: "Experiência",
      capabilities: "Capacidades",
      contact: "Contato",
      cv: "CV"
    },
    hero: {
      eyebrow: "DevOps · Cloud · Automação · Product Engineering",
      titleA: "Sistemas que funcionam.",
      titleB: "E continuam funcionando.",
      copy: "Eu construo, automatizo e opero sistemas digitais confiáveis — da infraestrutura e CI/CD ao software em produção e à experiência que as pessoas realmente usam.",
      workCta: "Ver meus projetos",
      cvCta: "Ver CV",
      contactCta: "Vamos conversar",
      pipelineLabel: "Como eu penso",
      pipeline: ["Código", "Build", "Deploy", "Observar"],
      pipelineNote: "Da infraestrutura à interface · pensado para produção"
    },
    proof: [
      ["Desde 2011", "atuando em tecnologia"],
      ["DevOps desde 2019", "entrega, automação e operações"],
      ["Mentalidade de produção", "confiabilidade, clareza e recuperação"],
      ["Portugal", "aberto a oportunidades remotas"]
    ],
    work: {
      eyebrow: "Trabalhos selecionados",
      title: "Coisas reais, construídas e entregues.",
      copy: "Produtos, sistemas, experimentos e projetos em produção. O ponto aqui não é coleção de logos — é mostrar trabalho.",
      more: "Mais projetos",
      live: "Ver online",
      source: "Código",
      caseStudy: "Case study",
      private: "Sistema privado"
    },
    solutions: {
      eyebrow: "O que resolvo",
      title: "Tecnologia é útil quando remove atrito.",
      copy: "Atuo entre infraestrutura, automação e desenvolvimento de produto, escolhendo a camada que realmente resolve o problema.",
      items: [
        ["Sistemas legados", "Modernizar aplicações, ambientes e processos sem reescrever tudo só porque é divertido apertar o botão vermelho."],
        ["Deploy & CI/CD", "Transformar releases manuais e frágeis em fluxos de entrega claros e repetíveis."],
        ["Ferramentas internas", "Criar dashboards, interfaces operacionais e pequenos sistemas que eliminam trabalho repetitivo."],
        ["Infraestrutura", "Cloud, servidores, redes, observabilidade, backups e ambientes reproduzíveis."],
        ["Automação", "Scripts, integrações e workflows que reduzem esforço operacional manual."],
        ["Plataformas web", "Produtos rápidos, responsivos e fáceis de manter, pensados para usuários e operação reais."]
      ]
    },
    experience: {
      eyebrow: "Experiência",
      title: "Construída de baixo para cima.",
      copy: "Experiência prática em suporte, software, infraestrutura e operações — as camadas que tornam uma entrega confiável possível."
    },
    capabilities: {
      eyebrow: "Capacidades de engenharia",
      title: "Visão ampla para entender o sistema. Foco suficiente para entregar.",
      copy: "O valor não está em conhecer uma lista enorme de ferramentas. Está em entender como as peças afetam umas às outras em produção."
    },
    contact: {
      eyebrow: "Contato",
      title: "Tem um sistema precisando ficar mais simples?",
      copy: "Infraestrutura, automação, ferramenta interna ou um produto precisando de engenharia melhor — me conta o que está atrapalhando.",
      name: "Nome",
      email: "Seu email",
      subject: "Assunto",
      message: "Mensagem",
      send: "Abrir rascunho de email",
      direct: "Ou envie direto",
      privacy: "Esta versão prepara a mensagem localmente e abre seu aplicativo de email. Nada é armazenado por este site.",
      ready: "Rascunho preparado. Revise no seu aplicativo de email antes de enviar."
    },
    footer: {
      note: "Construído com Astro · pensado como sistema de produção",
      back: "Voltar ao topo"
    }
  }
} as const;

export function getCopy(locale: Locale) {
  return content[locale];
}
