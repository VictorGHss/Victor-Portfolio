import type { Locale } from './config';

export interface NavItem {
  key: 'home' | 'projects' | 'experience' | 'skills' | 'about' | 'services' | 'contact';
  label: string;
  slug: string;
  code: string;
  transitionVariant: 'default' | 'diagonal' | 'stripes' | 'cards';
}

export interface UiDictionary {
  brandTagline: string;
  skipToContent: string;
  nav: NavItem[];
  controls: {
    languageLabel: string;
    menuOpen: string;
    menuClose: string;
  };
  home: {
    kicker: string;
    headlineLine1: string;
    headlineLine2: string;
    headlineAccent: string;
    summary: string;
    specializationLabel: string;
    specializationText: string;
    primaryCta: string;
    resumeCta: string;
    featuredTitle: string;
    featuredSubtitle: string;
    viewCaseStudy: string;
    allProjectsCta: string;
    otherProjectsTitle: string;
    inDevTitle: string;
    trajectoryTitle: string;
    trajectorySubtitle: string;
    trajectoryCta: string;
    skillsTitle: string;
    skillsSubtitle: string;
    skillsCta: string;
    contactTitle: string;
    contactSubtitle: string;
    contactCta: string;
  };
  projects: {
    pageTitle: string;
    pageSubtitle: string;
    introNote: string;
    statusLabels: {
      'concluded-operation': string;
      collaborative: string;
      completed: string;
      'in-development': string;
      'concept-planning': string;
    };
    flagshipBadge: string;
    secondaryBadge: string;
    problemLabel: string;
    solutionLabel: string;
    roleLabel: string;
    stackLabel: string;
    conceptScopeLabel: string;
    metricsLabel: string;
    featuresLabel: string;
    differentiatorsLabel: string;
    visualIdentityLabel: string;
    visionModulesLabel: string;
    initialCoreLabel: string;
    futureExpansionLabel: string;
    architectureLabel: string;
    roadmapLabel: string;
    implementedLabel: string;
    inProgressLabel: string;
    plannedLabel: string;
    screenshotsLabel: string;
    zoomHint: string;
    closeLightbox: string;
    publicShowcaseLabel: string;
    privateNoteLabel: string;
    backToProjects: string;
  };
  experience: {
    pageTitle: string;
    pageSubtitle: string;
    highlightsLabel: string;
    educationTitle: string;
  };
  skills: {
    pageTitle: string;
    pageSubtitle: string;
    primaryTier: string;
    secondaryTier: string;
  };
  services: {
    pageTitle: string;
    pageSubtitle: string;
    scopeNote: string;
    ctaLabel: string;
  };
  about: {
    pageTitle: string;
    pageSubtitle: string;
    bioTitle: string;
    bioText: string;
    educationTitle: string;
    coursesTitle: string;
    languagesTitle: string;
  };
  contact: {
    pageTitle: string;
    pageSubtitle: string;
    directChannels: string;
    emailLabel: string;
    copyEmail: string;
    copiedEmail: string;
    githubLabel: string;
    linkedinLabel: string;
    resumeTitle: string;
    resumeDownload: string;
    resumeAltNote: string;
    availabilityTitle: string;
    availabilityText: string;
  };
  footer: {
    note: string;
    rights: string;
  };
  notFound: {
    code: string;
    title: string;
    description: string;
    backHome: string;
  };
}

export const UI: Record<Locale, UiDictionary> = {
  'pt-br': {
    brandTagline: 'Backend Java · React · IA & Automações',
    skipToContent: 'Ir para o conteúdo principal',
    nav: [
      { key: 'home', label: 'Início', slug: '', code: '01', transitionVariant: 'default' },
      { key: 'projects', label: 'Projetos', slug: 'projects', code: '02', transitionVariant: 'diagonal' },
      { key: 'experience', label: 'Experiência', slug: 'experience', code: '03', transitionVariant: 'stripes' },
      { key: 'skills', label: 'Stack', slug: 'skills', code: '04', transitionVariant: 'cards' },
      { key: 'about', label: 'Sobre', slug: 'about', code: '05', transitionVariant: 'stripes' },
      { key: 'services', label: 'Serviços', slug: 'services', code: '06', transitionVariant: 'diagonal' },
      { key: 'contact', label: 'Contato', slug: 'contact', code: '07', transitionVariant: 'cards' },
    ],
    controls: {
      languageLabel: 'Idioma',
      menuOpen: 'Abrir menu',
      menuClose: 'Fechar menu',
    },
    home: {
      kicker: 'Victor Gabriel · Backend & Full Stack',
      headlineLine1: 'Backends em Java,',
      headlineLine2: 'interfaces em React e',
      headlineAccent: 'automações na prática.',
      summary:
        'Sou o Victor, estudante de Análise e Desenvolvimento de Sistemas na UTFPR. Trabalho principalmente com Java e Spring Boot no backend e React com TypeScript no frontend. Uso IA no dia a dia para acelerar entregas, automatizar serviços e prototipar mais rápido — sempre com foco em resolver problemas reais de operação.',
      specializationLabel: 'Resumo',
      specializationText:
        'Java 21, Spring Boot, React, TypeScript, APIs REST, webhooks, integrações com WhatsApp/ERPs, PostgreSQL, Docker e automações com IA.',
      primaryCta: 'Ver Projeto Principal',
      resumeCta: 'Baixar Currículo (PDF)',
      featuredTitle: 'Projeto em Destaque',
      featuredSubtitle:
        'Plataforma que desenvolvi do zero unindo confirmações no WhatsApp, acesso por QR Code em catracas, conciliação financeira e chamados de TI — rodou por ~3 meses em ambiente real (ciclo já encerrado).',
      viewCaseStudy: 'Ver detalhes',
      allProjectsCta: 'Ver todos os 7 projetos',
      otherProjectsTitle: 'Outros projetos concluídos',
      inDevTitle: 'Em desenvolvimento e planejamento',
      trajectoryTitle: 'Experiência e base técnica',
      trajectorySubtitle:
        'Comecei em TI no suporte e na infraestrutura. Lidar de perto com rotinas manuais me levou a criar sistemas próprios para resolver os gargalos da operação.',
      trajectoryCta: 'Ver experiência completa',
      skillsTitle: 'Stack Principal',
      skillsSubtitle:
        'Tecnologias e ferramentas que utilizo no dia a dia, do backend em Java e bancos relacionais até frontend, Docker e fluxos assistidos por IA.',
      skillsCta: 'Ver stack completa',
      contactTitle: 'Vamos conversar?',
      contactSubtitle:
        'Estou disponível para oportunidades como Desenvolvedor Backend Júnior ou Full Stack Júnior (Java, Spring Boot, React, TypeScript) e também para projetos sob medida.',
      contactCta: 'Entrar em contato',
    },
    projects: {
      pageTitle: 'Projetos',
      pageSubtitle:
        'Sistemas criados a partir de problemas reais de trabalho, produtos em andamento e iniciativas em fase de planejamento.',
      introNote:
        'Cada projeto aqui tem um contexto claro: sistemas que nasceram de demandas reais em TI, produtos autorais em desenvolvimento ativo no GitHub e conceitos em planejamento estruturado.',
      statusLabels: {
        'concluded-operation': 'Ciclo encerrado · ~3 meses em operação real',
        collaborative: 'Projeto colaborativo',
        completed: 'Concluído',
        'in-development': 'Em desenvolvimento',
        'concept-planning': 'Em concepção e planejamento',
      },
      flagshipBadge: 'Destaque',
      secondaryBadge: 'Web & Edge',
      problemLabel: 'O Problema',
      solutionLabel: 'A Solução',
      roleLabel: 'Minha Atuação',
      stackLabel: 'Stack Utilizada',
      conceptScopeLabel: 'Pilares & Domínio',
      metricsLabel: 'Resultados Documentados',
      featuresLabel: 'Principais Recursos',
      differentiatorsLabel: 'Os Três Grandes Diferenciais',
      visualIdentityLabel: 'Identidade Própria & Direção Visual',
      visionModulesLabel: 'Escopo Planejado & Evolução Modular',
      initialCoreLabel: 'Núcleo Inicial Planejado',
      futureExpansionLabel: 'Expansão Futura',
      architectureLabel: 'Arquitetura',
      roadmapLabel: 'Estágio Atual',
      implementedLabel: 'Implementado',
      inProgressLabel: 'Em andamento',
      plannedLabel: 'Próximos passos',
      screenshotsLabel: 'Capturas do Sistema',
      zoomHint: 'Ampliar',
      closeLightbox: 'Fechar',
      publicShowcaseLabel: 'Ver showcase no GitHub',
      privateNoteLabel: 'O código-fonte principal é privado; o showcase público no GitHub reúne arquitetura, diagramas, OpenAPI e amostras de código.',
      backToProjects: 'Voltar para projetos',
    },
    experience: {
      pageTitle: 'Experiência',
      pageSubtitle:
        'Minha trajetória passando por suporte técnico, infraestrutura e desenvolvimento de sistemas.',
      highlightsLabel: 'Principais entregas e rotina',
      educationTitle: 'Formação',
    },
    skills: {
      pageTitle: 'Stack & Ferramentas',
      pageSubtitle:
        'Linguagens, frameworks, bancos de dados, infraestrutura e fluxo de trabalho com IA que aplico nos projetos.',
      primaryTier: 'Stack principal',
      secondaryTier: 'Outras tecnologias usadas nos projetos',
    },
    services: {
      pageTitle: 'Serviços & Projetos',
      pageSubtitle:
        'Como posso ajudar com desenvolvimento sob medida, integrações entre sistemas e automações práticas.',
      scopeNote:
        'Me conte qual é a demanda ou o gargalo do seu fluxo para desenharmos uma solução direta e sustentável.',
      ctaLabel: 'Conversar sobre um projeto',
    },
    about: {
      pageTitle: 'Sobre Mim',
      pageSubtitle:
        '21 anos, de Ponta Grossa (PR), estudante de ADS na UTFPR com foco em backend, full stack e automação.',
      bioTitle: 'Um pouco da minha trajetória',
      bioText:
        'Minha formação técnica começou cedo em Informática pelo SENAI e passou por Administração e Logística — uma base que me ajuda muito a entender o negócio antes de escrever código. Comecei no mercado como estagiário de TI, atendendo suporte N1/N2, redes e manutenção de máquinas. Observando tarefas manuais se repetindo todo dia, passei a criar ferramentas próprias para automatizar esses fluxos: de um portal simples de chamados até plataformas completas em Java 21, Spring Boot, React, PostgreSQL e Docker. Hoje integro ferramentas de IA ao meu fluxo diário de engenharia para acelerar protótipos, automatizar serviços, revisar código e ganhar produtividade sem abrir mão de testes e boa arquitetura.',
      educationTitle: 'Formação Acadêmica',
      coursesTitle: 'Cursos & Bootcamps',
      languagesTitle: 'Idiomas',
    },
    contact: {
      pageTitle: 'Contato & Currículo',
      pageSubtitle:
        'Canais diretos para vagas júnior, projetos freelance ou conversas técnicas sobre meu trabalho.',
      directChannels: 'Canais Diretos',
      emailLabel: 'E-mail',
      copyEmail: 'Copiar e-mail',
      copiedEmail: 'Copiado',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      resumeTitle: 'Currículo (PDF)',
      resumeDownload: 'Baixar Currículo (PT-BR)',
      resumeAltNote: 'Versão em inglês também disponível para processos internacionais.',
      availabilityTitle: 'Disponibilidade',
      availabilityText:
        'Encerrei meu último vínculo em outubro de 2026 e estou disponível para início imediato em vagas de Desenvolvedor Backend Júnior ou Full Stack Júnior (Java, Spring Boot, React, TypeScript) — presencial, híbrido ou remoto.',
    },
    footer: {
      note: 'Vito.dev — Portfólio de Engenharia de Software.',
      rights: 'Victor Gabriel · Ponta Grossa, PR',
    },
    notFound: {
      code: '404',
      title: 'Página não encontrada',
      description: 'O endereço acessado não existe ou foi movido.',
      backHome: 'Voltar para o início',
    },
  },
  en: {
    brandTagline: 'Java Backends · React · AI & Automation',
    skipToContent: 'Skip to main content',
    nav: [
      { key: 'home', label: 'Home', slug: '', code: '01', transitionVariant: 'default' },
      { key: 'projects', label: 'Projects', slug: 'projects', code: '02', transitionVariant: 'diagonal' },
      { key: 'experience', label: 'Experience', slug: 'experience', code: '03', transitionVariant: 'stripes' },
      { key: 'skills', label: 'Stack', slug: 'skills', code: '04', transitionVariant: 'cards' },
      { key: 'about', label: 'About', slug: 'about', code: '05', transitionVariant: 'stripes' },
      { key: 'services', label: 'Services', slug: 'services', code: '06', transitionVariant: 'diagonal' },
      { key: 'contact', label: 'Contact', slug: 'contact', code: '07', transitionVariant: 'cards' },
    ],
    controls: {
      languageLabel: 'Language',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    home: {
      kicker: 'Victor Gabriel · Backend & Full-Stack',
      headlineLine1: 'Java backends,',
      headlineLine2: 'React interfaces &',
      headlineAccent: 'practical automation.',
      summary:
        "I'm Victor, a Systems Analysis and Development student at UTFPR in Brazil. I focus on Java and Spring Boot on the backend alongside React and TypeScript on the frontend. I also integrate AI tools into my daily workflow to speed up delivery, automate services, and prototype faster while solving real operational problems.",
      specializationLabel: 'Overview',
      specializationText:
        'Java 21, Spring Boot, React, TypeScript, REST APIs, webhooks, WhatsApp/ERP integrations, PostgreSQL, Docker, and AI-assisted workflows.',
      primaryCta: 'View Main Project',
      resumeCta: 'Download Resume (PDF)',
      featuredTitle: 'Featured Project',
      featuredSubtitle:
        'A platform I built from scratch connecting WhatsApp confirmations, QR Code turnstile access, financial sync, and IT ticketing — used in real operations for ~3 months (cycle concluded).',
      viewCaseStudy: 'View details',
      allProjectsCta: 'See all 7 projects',
      otherProjectsTitle: 'Completed projects',
      inDevTitle: 'In development & planning',
      trajectoryTitle: 'Experience & technical background',
      trajectorySubtitle:
        'I started in IT support and infrastructure. Seeing repetitive manual processes up close pushed me into building software to fix operational bottlenecks.',
      trajectoryCta: 'View full experience',
      skillsTitle: 'Core Stack',
      skillsSubtitle:
        'Technologies and tools I work with every day across Java backends, relational databases, React UIs, Docker, and AI-assisted workflows.',
      skillsCta: 'View full stack',
      contactTitle: "Let's talk",
      contactSubtitle:
        'Available for Junior Backend or Junior Full-Stack Developer roles (Java, Spring Boot, React, TypeScript) as well as custom project work.',
      contactCta: 'Get in touch',
    },
    projects: {
      pageTitle: 'Projects',
      pageSubtitle:
        'Systems built from real operational needs, independent products in active development, and planned product concepts.',
      introNote:
        'Every entry here has a clear stage: systems built to solve real IT bottlenecks, active independent products on GitHub, and future product concepts in structured planning.',
      statusLabels: {
        'concluded-operation': 'Cycle concluded · ~3 months in real use',
        collaborative: 'Collaborative project',
        completed: 'Completed',
        'in-development': 'In development',
        'concept-planning': 'Concept & planning',
      },
      flagshipBadge: 'Featured',
      secondaryBadge: 'Web & Edge',
      problemLabel: 'The Problem',
      solutionLabel: 'The Solution',
      roleLabel: 'My Role',
      stackLabel: 'Tech Stack',
      conceptScopeLabel: 'Pillars & Domain',
      metricsLabel: 'Documented Results',
      featuresLabel: 'Key Features',
      differentiatorsLabel: 'Three Core Differentiators',
      visualIdentityLabel: 'Original Identity & Visual Direction',
      visionModulesLabel: 'Planned Scope & Modular Evolution',
      initialCoreLabel: 'Planned Initial Core',
      futureExpansionLabel: 'Future Expansion',
      architectureLabel: 'Architecture',
      roadmapLabel: 'Current Stage',
      implementedLabel: 'Implemented',
      inProgressLabel: 'In progress',
      plannedLabel: 'Planned next',
      screenshotsLabel: 'System Screenshots',
      zoomHint: 'Expand',
      closeLightbox: 'Close',
      publicShowcaseLabel: 'View public showcase on GitHub',
      privateNoteLabel: 'Core source code is private; the public GitHub showcase documents architecture, diagrams, OpenAPI specs, and code samples.',
      backToProjects: 'Back to projects',
    },
    experience: {
      pageTitle: 'Experience',
      pageSubtitle:
        'My path from IT support and infrastructure into software engineering.',
      highlightsLabel: 'Key activities & outcomes',
      educationTitle: 'Education',
    },
    skills: {
      pageTitle: 'Stack & Tools',
      pageSubtitle:
        'Languages, frameworks, databases, infrastructure, and AI-assisted engineering workflows I apply in practice.',
      primaryTier: 'Core stack',
      secondaryTier: 'Additional technologies used across projects',
    },
    services: {
      pageTitle: 'Services & Projects',
      pageSubtitle:
        'Where I can help with custom software development, API integrations, and practical workflow automation.',
      scopeNote:
        "Tell me about the bottleneck or system you need and we'll map out a clean, practical way to build it.",
      ctaLabel: 'Start a conversation',
    },
    about: {
      pageTitle: 'About Me',
      pageSubtitle:
        '21, based in Ponta Grossa (Brazil), studying Systems Analysis & Development at UTFPR with a focus on backend, full-stack, and automation.',
      bioTitle: 'How I got here',
      bioText:
        'My technical foundation started early with an IT degree at SENAI, followed by Business Administration and Logistics — a mix that helps me understand real business workflows before writing code. I entered the field as an IT intern handling N1/N2 support, networking, and hardware maintenance. Watching manual tasks repeat every day led me to build tools to automate them: from a lightweight ticketing portal to full platforms in Java 21, Spring Boot, React, PostgreSQL, and Docker. Today I also weave AI tools into my daily engineering workflow to speed up prototyping, automate services, review code, and deliver faster without compromising tests or architecture.',
      educationTitle: 'Education',
      coursesTitle: 'Courses & Bootcamps',
      languagesTitle: 'Languages',
    },
    contact: {
      pageTitle: 'Contact & Resume',
      pageSubtitle:
        'Direct channels for junior engineering roles, freelance projects, or technical conversations.',
      directChannels: 'Direct Channels',
      emailLabel: 'Email',
      copyEmail: 'Copy email',
      copiedEmail: 'Copied',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      resumeTitle: 'Resume (PDF)',
      resumeDownload: 'Download Resume (EN)',
      resumeAltNote: 'Portuguese version is also available for Brazilian teams.',
      availabilityTitle: 'Availability',
      availabilityText:
        'My previous role ended in October 2026, and I am immediately available for Junior Backend or Junior Full-Stack Developer positions (Java, Spring Boot, React, TypeScript) — on-site, hybrid, or remote.',
    },
    footer: {
      note: 'Vito.dev — Software Engineering Portfolio.',
      rights: 'Victor Gabriel · Ponta Grossa, PR, Brazil',
    },
    notFound: {
      code: '404',
      title: 'Page not found',
      description: 'The requested URL does not exist or has moved.',
      backHome: 'Back to home',
    },
  },
};
