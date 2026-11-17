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
    };
    flagshipBadge: string;
    secondaryBadge: string;
    problemLabel: string;
    solutionLabel: string;
    roleLabel: string;
    stackLabel: string;
    metricsLabel: string;
    featuresLabel: string;
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
    brandTagline: 'Engenharia de Software & Automações',
    skipToContent: 'Pular para o conteúdo principal',
    nav: [
      { key: 'home', label: 'Início', slug: '', code: '01', transitionVariant: 'default' },
      { key: 'projects', label: 'Projetos', slug: 'projects', code: '02', transitionVariant: 'diagonal' },
      { key: 'experience', label: 'Experiência', slug: 'experience', code: '03', transitionVariant: 'stripes' },
      { key: 'skills', label: 'Competências', slug: 'skills', code: '04', transitionVariant: 'cards' },
      { key: 'about', label: 'Sobre', slug: 'about', code: '05', transitionVariant: 'stripes' },
      { key: 'services', label: 'Serviços', slug: 'services', code: '06', transitionVariant: 'diagonal' },
      { key: 'contact', label: 'Contato', slug: 'contact', code: '07', transitionVariant: 'cards' },
    ],
    controls: {
      languageLabel: 'Idioma',
      menuOpen: 'Abrir menu de navegação',
      menuClose: 'Fechar menu de navegação',
    },
    home: {
      kicker: 'Victor Gabriel · Backend & Full Stack',
      headlineLine1: 'Sistemas em Java,',
      headlineLine2: 'interfaces em React e',
      headlineAccent: 'menos trabalho manual.',
      summary:
        'Eu sou o Victor, estudante de Análise e Desenvolvimento de Sistemas na UTFPR. Trabalho principalmente com Java e Spring Boot, mas também desenvolvo interfaces com React e TypeScript. Gosto de construir sistemas, integrar ferramentas e automatizar tarefas que ainda dependem de trabalho manual.',
      specializationLabel: 'No dia a dia',
      specializationText:
        'APIs REST, webhooks assíncronos, integrações com ERPs, mensageria via WhatsApp (Take Blip e Digisac), PostgreSQL e Docker.',
      primaryCta: 'Ver Estudo de Caso',
      resumeCta: 'Baixar Currículo (PDF)',
      featuredTitle: 'Projeto em Destaque',
      featuredSubtitle:
        'Sistema que criei para integrar atendimento via WhatsApp, portaria com QR Code, conciliação financeira e chamados de TI — usado por ~3 meses em ambiente real (ciclo já encerrado).',
      viewCaseStudy: 'Abrir Estudo de Caso',
      allProjectsCta: 'Todos os Projetos (6)',
      otherProjectsTitle: 'Projetos Selecionados',
      inDevTitle: 'Em Desenvolvimento',
      trajectoryTitle: 'Experiência & Base Técnica',
      trajectorySubtitle:
        'Comecei em TI no suporte e infraestrutura. Com o tempo, passei a criar minhas próprias ferramentas para resolver problemas que encontrava no dia a dia.',
      trajectoryCta: 'Ver Experiência Completa',
      skillsTitle: 'Stack Principal',
      skillsSubtitle:
        'Ferramentas que mais uso no backend Java/Spring, frontend React/TypeScript, bancos SQL e infraestrutura.',
      skillsCta: 'Ver Competências',
      contactTitle: 'Quer conversar sobre uma vaga ou projeto?',
      contactSubtitle:
        'Estou aberto a oportunidades como Desenvolvedor Backend Júnior ou Full Stack Júnior (Java, Spring Boot, React, TypeScript).',
      contactCta: 'Ir para Contato',
    },
    projects: {
      pageTitle: 'Projetos & Sistemas',
      pageSubtitle:
        'Aplicações que saíram de problemas reais de operação e produtos que venho desenvolvendo.',
      introNote:
        'Os projetos desta seleção nasceram de iniciativas minhas. Alguns surgiram de problemas que encontrei no dia a dia de TI; outros são produtos que venho construindo por conta própria.',
      statusLabels: {
        'concluded-operation': 'Ciclo encerrado · ~3 meses em operação real',
        collaborative: 'Projeto colaborativo',
        completed: 'Concluído',
        'in-development': 'Em desenvolvimento',
      },
      flagshipBadge: 'Principal',
      secondaryBadge: 'Secundário',
      problemLabel: 'O Problema',
      solutionLabel: 'O Que Foi Construído',
      roleLabel: 'Minha Participação',
      stackLabel: 'Tecnologias',
      metricsLabel: 'Resultados Documentados',
      featuresLabel: 'Funcionalidades',
      architectureLabel: 'Arquitetura & Fluxo',
      roadmapLabel: 'Estágio Atual do Projeto',
      implementedLabel: 'Já implementado',
      inProgressLabel: 'Em desenvolvimento',
      plannedLabel: 'Planejamento futuro',
      screenshotsLabel: 'Evidências & Capturas Reais',
      zoomHint: 'Ampliar',
      closeLightbox: 'Fechar visualização',
      publicShowcaseLabel: 'Ver showcase no GitHub',
      privateNoteLabel: 'O código-fonte principal é privado; o showcase técnico público documenta arquitetura e módulos.',
      backToProjects: 'Voltar para Projetos',
    },
    experience: {
      pageTitle: 'Experiência Profissional',
      pageSubtitle:
        'Minha trajetória entre suporte de TI, infraestrutura e desenvolvimento de sistemas.',
      highlightsLabel: 'Principais atividades',
      educationTitle: 'Formação Acadêmica',
    },
    skills: {
      pageTitle: 'Competências Técnicas',
      pageSubtitle:
        'Tecnologias e ferramentas que utilizo na prática entre backend, frontend, integrações e deploy.',
      primaryTier: 'Stack Principal',
      secondaryTier: 'Tecnologias Adicionais',
    },
    services: {
      pageTitle: 'Serviços',
      pageSubtitle:
        'Áreas em que posso ajudar com desenvolvimento sob medida, conectadas ao que já construí.',
      scopeNote:
        'Vamos conversar sobre o que você precisa e ver como posso ajudar.',
      ctaLabel: 'Entrar em Contato',
    },
    about: {
      pageTitle: 'Sobre Mim',
      pageSubtitle:
        'Estudante de Análise e Desenvolvimento de Sistemas na UTFPR, com base técnica em Informática, Administração e Logística.',
      bioTitle: 'Um pouco da minha história',
      bioText:
        'Comecei em TI trabalhando com suporte e infraestrutura. No dia a dia, fui percebendo processos lentos ou manuais e passei a construir minhas próprias ferramentas para resolvê-los — de um formulário simples de chamados até integrações completas com Java, Spring Boot, React e PostgreSQL.',
      educationTitle: 'Formação Acadêmica',
      coursesTitle: 'Cursos & Bootcamps',
      languagesTitle: 'Idiomas',
    },
    contact: {
      pageTitle: 'Contato & Currículo',
      pageSubtitle:
        'Canais diretos para processos seletivos, conversas técnicas e projetos.',
      directChannels: 'Canais Verificados',
      emailLabel: 'E-mail profissional',
      copyEmail: 'Copiar e-mail',
      copiedEmail: 'Copiado',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      resumeTitle: 'Currículo em PDF',
      resumeDownload: 'Baixar Currículo (PT-BR)',
      resumeAltNote: 'Versão em inglês também disponível para recrutadores internacionais.',
      availabilityTitle: 'Objetivo & Disponibilidade',
      availabilityText:
        'Desenvolvedor Backend Júnior | Desenvolvedor Full Stack Júnior (Java / Spring Boot / React / TypeScript). Aberto a oportunidades presenciais, híbridas ou remotas.',
    },
    footer: {
      note: 'Vito.dev — Portfólio de Engenharia de Software.',
      rights: 'Victor Gabriel · Ponta Grossa, PR',
    },
    notFound: {
      code: '404',
      title: 'Página não encontrada',
      description: 'O endereço acessado não existe nesta versão do portfólio.',
      backHome: 'Voltar ao Início',
    },
  },
  en: {
    brandTagline: 'Software Engineering & Automation',
    skipToContent: 'Skip to main content',
    nav: [
      { key: 'home', label: 'Home', slug: '', code: '01', transitionVariant: 'default' },
      { key: 'projects', label: 'Projects', slug: 'projects', code: '02', transitionVariant: 'diagonal' },
      { key: 'experience', label: 'Experience', slug: 'experience', code: '03', transitionVariant: 'stripes' },
      { key: 'skills', label: 'Skills', slug: 'skills', code: '04', transitionVariant: 'cards' },
      { key: 'about', label: 'About', slug: 'about', code: '05', transitionVariant: 'stripes' },
      { key: 'services', label: 'Services', slug: 'services', code: '06', transitionVariant: 'diagonal' },
      { key: 'contact', label: 'Contact', slug: 'contact', code: '07', transitionVariant: 'cards' },
    ],
    controls: {
      languageLabel: 'Language',
      menuOpen: 'Open navigation menu',
      menuClose: 'Close navigation menu',
    },
    home: {
      kicker: 'Victor Gabriel · Backend & Full-Stack',
      headlineLine1: 'Java backends,',
      headlineLine2: 'React interfaces &',
      headlineAccent: 'less manual work.',
      summary:
        "I'm Victor, a Systems Analysis and Development student at UTFPR. I work mainly with Java and Spring Boot, and I also build interfaces with React and TypeScript. I like building systems, connecting tools, and automating tasks that still depend on manual work.",
      specializationLabel: 'Day-to-day focus',
      specializationText:
        'REST APIs, asynchronous webhooks, ERP integrations, WhatsApp automation (Take Blip and Digisac), PostgreSQL, and Docker.',
      primaryCta: 'Read Case Study',
      resumeCta: 'Download Resume (PDF)',
      featuredTitle: 'Featured Project',
      featuredSubtitle:
        'System I built to connect WhatsApp automation, QR Code check-in, financial sync, and IT ticketing — used in real operations for ~3 months (cycle concluded).',
      viewCaseStudy: 'Open Case Study',
      allProjectsCta: 'All Projects (6)',
      otherProjectsTitle: 'Selected Projects',
      inDevTitle: 'In Development',
      trajectoryTitle: 'Experience & Stack',
      trajectorySubtitle:
        'I started in IT working with support and infrastructure. Over time, I began building my own tools to solve problems I ran into every day.',
      trajectoryCta: 'Full Experience',
      skillsTitle: 'Core Stack',
      skillsSubtitle:
        'Tools I rely on across Java/Spring backends, React/TypeScript frontends, SQL databases, and Docker/Linux.',
      skillsCta: 'View Skills',
      contactTitle: 'Want to talk about a role or project?',
      contactSubtitle:
        'Open to Junior Backend or Junior Full-Stack Developer roles (Java, Spring Boot, React, TypeScript).',
      contactCta: 'Go to Contact',
    },
    projects: {
      pageTitle: 'Projects & Systems',
      pageSubtitle:
        'Applications born out of real operational bottlenecks alongside independent products I am building.',
      introNote:
        "The projects here started as my own initiatives. Some came out of problems I ran into during day-to-day IT work; others are products I'm building independently.",
      statusLabels: {
        'concluded-operation': 'Cycle concluded · ~3 months in real use',
        collaborative: 'Collaborative project',
        completed: 'Completed',
        'in-development': 'In development',
      },
      flagshipBadge: 'Featured',
      secondaryBadge: 'Secondary',
      problemLabel: 'The Problem',
      solutionLabel: 'What I Built',
      roleLabel: 'My Role',
      stackLabel: 'Technologies',
      metricsLabel: 'Documented Results',
      featuresLabel: 'Capabilities',
      architectureLabel: 'Architecture & Flow',
      roadmapLabel: 'Current Project Stage',
      implementedLabel: 'Already implemented',
      inProgressLabel: 'In development',
      plannedLabel: 'Future planning',
      screenshotsLabel: 'Screenshots & Visual Evidence',
      zoomHint: 'Expand',
      closeLightbox: 'Close preview',
      publicShowcaseLabel: 'View public showcase on GitHub',
      privateNoteLabel: 'Core source code is private; the public showcase documents architecture and modules.',
      backToProjects: 'Back to Projects',
    },
    experience: {
      pageTitle: 'Professional Experience',
      pageSubtitle:
        'My progression across IT support, infrastructure, and software development.',
      highlightsLabel: 'Key activities',
      educationTitle: 'Education',
    },
    skills: {
      pageTitle: 'Technical Skills',
      pageSubtitle:
        'Languages, frameworks, databases, and tooling I use across backend, frontend, integrations, and deployment.',
      primaryTier: 'Core Stack',
      secondaryTier: 'Additional Technologies',
    },
    services: {
      pageTitle: 'Services',
      pageSubtitle:
        'Areas where I can help with custom development, backed by projects I have already built.',
      scopeNote:
        "Let's talk about what you need and see how I can help.",
      ctaLabel: 'Get in Touch',
    },
    about: {
      pageTitle: 'About Me',
      pageSubtitle:
        'Systems Analysis and Development student at UTFPR, with technical degrees in IT, Business Administration, and Logistics.',
      bioTitle: 'A bit about my path',
      bioText:
        'I started in IT working with support and infrastructure. As I spotted repetitive manual bottlenecks in day-to-day operations, I began building my own tools to fix them — from a simple ticketing form to full integrations using Java, Spring Boot, React, and PostgreSQL.',
      educationTitle: 'Education',
      coursesTitle: 'Courses & Bootcamps',
      languagesTitle: 'Languages',
    },
    contact: {
      pageTitle: 'Contact & Resume',
      pageSubtitle:
        'Direct channels for hiring teams, technical conversations, and project inquiries.',
      directChannels: 'Verified Channels',
      emailLabel: 'Professional email',
      copyEmail: 'Copy email',
      copiedEmail: 'Copied',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      resumeTitle: 'Resume (PDF)',
      resumeDownload: 'Download Resume (EN)',
      resumeAltNote: 'Portuguese version is also available for Brazilian teams.',
      availabilityTitle: 'Target Role & Availability',
      availabilityText:
        'Junior Backend Developer | Junior Full-Stack Developer (Java / Spring Boot / React / TypeScript). Open to on-site, hybrid, or remote roles.',
    },
    footer: {
      note: 'Vito.dev — Software Engineering Portfolio.',
      rights: 'Victor Gabriel · Ponta Grossa, PR, Brazil',
    },
    notFound: {
      code: '404',
      title: 'Page not found',
      description: 'The requested page does not exist in this portfolio.',
      backHome: 'Back to Home',
    },
  },
};
