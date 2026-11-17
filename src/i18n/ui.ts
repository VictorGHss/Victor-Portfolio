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
    trajectoryTitle: string;
    trajectorySubtitle: string;
    trajectoryCta: string;
    skillsTitle: string;
    skillsSubtitle: string;
    skillsCta: string;
    servicesTitle: string;
    servicesSubtitle: string;
    servicesCta: string;
    contactTitle: string;
    contactSubtitle: string;
    contactCta: string;
  };
  projects: {
    pageTitle: string;
    pageSubtitle: string;
    statusLabels: {
      'concluded-operation': string;
      'collaborative-in-use': string;
      'authorial-completed': string;
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
    screenshotsLabel: string;
    publicRepoLabel: string;
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
    focusTitle: string;
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
    inspiredNote: string;
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
    brandTagline: 'Engenharia de Software & Integrações',
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
        'Eu sou o Victor, estudante de Análise e Desenvolvimento de Sistemas na UTFPR. Trabalho principalmente com Java e Spring Boot, mas também desenvolvo interfaces com React e TypeScript. Gosto de construir sistemas, integrar ferramentas e automatizar processos que acabam virando trabalho manual.',
      specializationLabel: 'No dia a dia',
      specializationText:
        'APIs REST, webhooks assíncronos, integrações com ERPs, mensageria via WhatsApp (Take Blip e Digisac), bancos PostgreSQL e containers Docker.',
      primaryCta: 'Ver Estudo de Caso',
      resumeCta: 'Baixar Currículo (PDF)',
      featuredTitle: 'Estudo de Caso Principal',
      featuredSubtitle:
        'Projeto autoral que conectou atendimento via WhatsApp, portaria com QR Code, conciliação financeira e chamados de TI — usado por ~3 meses em ambiente real (ciclo já encerrado).',
      viewCaseStudy: 'Abrir Estudo de Caso',
      allProjectsCta: 'Todos os Projetos (6)',
      otherProjectsTitle: 'Outros Projetos & Produtos',
      trajectoryTitle: 'Onde Trabalhei',
      trajectorySubtitle:
        'Comecei em TI no suporte e infraestrutura. Com o tempo, passei a criar minhas próprias ferramentas para resolver problemas reais da operação.',
      trajectoryCta: 'Ver Experiência Completa',
      skillsTitle: 'Ferramentas que Uso',
      skillsSubtitle:
        'Stack principal no backend Java/Spring, frontend React/TypeScript, bancos SQL e ambiente Linux/Docker.',
      skillsCta: 'Ver Lista Completa',
      servicesTitle: 'Projetos Sob Medida',
      servicesSubtitle:
        'Disponível para demandas pontuais de backend, integrações entre sistemas, automações e aplicações web.',
      servicesCta: 'Ver Escopo',
      contactTitle: 'Quer conversar sobre uma vaga ou projeto?',
      contactSubtitle:
        'Estou aberto a oportunidades como Desenvolvedor Backend Júnior ou Full Stack Júnior (Java, Spring Boot, React, TypeScript).',
      contactCta: 'Ir para Contato',
    },
    projects: {
      pageTitle: 'Projetos & Sistemas',
      pageSubtitle:
        'Plataformas colocadas em operação real, aplicações corporativas e produtos autorais em desenvolvimento.',
      statusLabels: {
        'concluded-operation': 'Ciclo encerrado (~3 meses em operação real)',
        'collaborative-in-use': 'Projeto colaborativo · Em uso',
        'authorial-completed': 'Projeto autoral · Concluído',
        'in-development': 'Projeto autoral · Em desenvolvimento',
      },
      flagshipBadge: 'Estudo de Caso Principal',
      secondaryBadge: 'Projeto Secundário',
      problemLabel: 'Contexto & Problema',
      solutionLabel: 'Solução Desenvolvida',
      roleLabel: 'Responsabilidades',
      stackLabel: 'Tecnologias',
      metricsLabel: 'Indicadores Documentados',
      featuresLabel: 'Funcionalidades',
      architectureLabel: 'Arquitetura & Fluxo',
      screenshotsLabel: 'Capturas Reais do Showcase',
      publicRepoLabel: 'Repositório Público',
      privateNoteLabel: 'Código-fonte principal em repositório privado; showcase técnico público disponível.',
      backToProjects: 'Voltar para Projetos',
    },
    experience: {
      pageTitle: 'Experiência Profissional',
      pageSubtitle:
        'Progressão em suporte de TI, infraestrutura e desenvolvimento de sistemas corporativos.',
      highlightsLabel: 'Entregas e atividades',
      educationTitle: 'Formação Acadêmica',
    },
    skills: {
      pageTitle: 'Competências Técnicas',
      pageSubtitle:
        'Linguagens, frameworks, bancos de dados e ferramentas de entrega contínua aplicados em produção e projetos.',
      primaryTier: 'Stack Principal',
      secondaryTier: 'Contexto de Projetos & Secundárias',
    },
    services: {
      pageTitle: 'Serviços',
      pageSubtitle:
        'Escopo técnico para integrações, automações e aplicações web sob medida.',
      scopeNote:
        'Escopo alinhado após diagnóstico técnico. Sem pacotes engessados ou promessas artificiais.',
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
      focusTitle: 'Como Gosto de Trabalhar',
    },
    contact: {
      pageTitle: 'Contato & Currículo',
      pageSubtitle:
        'Canais diretos para processos seletivos, equipes de engenharia e propostas técnicas.',
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
      inspiredNote:
        'Direção visual original inspirada na estética geométrica de Persona 3 Reload, sem assets ou afiliação comercial.',
      rights: 'Victor Gabriel · Ponta Grossa, PR',
    },
    notFound: {
      code: '404',
      title: 'Rota não encontrada',
      description: 'O endereço acessado não existe nesta versão do portfólio.',
      backHome: 'Voltar ao Início',
    },
  },
  en: {
    brandTagline: 'Software Engineering & Integrations',
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
        "I'm Victor, a Systems Analysis and Development student at UTFPR. I work mainly with Java and Spring Boot, and I also build web interfaces with React and TypeScript — connecting tools, APIs, and automating workflows that used to rely on manual work.",
      specializationLabel: 'Day-to-day focus',
      specializationText:
        'REST APIs, asynchronous webhooks, ERP integrations, WhatsApp automation (Take Blip and Digisac), PostgreSQL, and Docker.',
      primaryCta: 'Read Case Study',
      resumeCta: 'Download Resume (PDF)',
      featuredTitle: 'Main Case Study',
      featuredSubtitle:
        'Authorial project connecting WhatsApp automation, QR Code check-in, financial sync, and IT ticketing — used in real operations for ~3 months (cycle concluded).',
      viewCaseStudy: 'Open Case Study',
      allProjectsCta: 'All Projects (6)',
      otherProjectsTitle: 'Other Projects & Products',
      trajectoryTitle: 'Where I Worked',
      trajectorySubtitle:
        'I started in IT doing support and infrastructure. Over time, I began building my own tools to solve operational bottlenecks I ran into every day.',
      trajectoryCta: 'Full Experience',
      skillsTitle: 'Tools I Work With',
      skillsSubtitle:
        'Core stack across Java/Spring backends, React/TypeScript frontends, SQL databases, and Linux/Docker environments.',
      skillsCta: 'Full Stack List',
      servicesTitle: 'Freelance Scope',
      servicesSubtitle:
        'Available for focused engagements in backend APIs, system integrations, automation, and web applications.',
      servicesCta: 'View Scope',
      contactTitle: 'Want to talk about a role or project?',
      contactSubtitle:
        'Open to Junior Backend or Junior Full-Stack Developer roles (Java, Spring Boot, React, TypeScript).',
      contactCta: 'Go to Contact',
    },
    projects: {
      pageTitle: 'Projects & Systems',
      pageSubtitle:
        'Platforms deployed in real operations, business web apps, and personal products under active development.',
      statusLabels: {
        'concluded-operation': 'Cycle concluded (~3 months in real operations)',
        'collaborative-in-use': 'Collaborative project · In use',
        'authorial-completed': 'Authorial project · Completed',
        'in-development': 'Authorial project · In development',
      },
      flagshipBadge: 'Flagship Case Study',
      secondaryBadge: 'Secondary Project',
      problemLabel: 'Context & Problem',
      solutionLabel: 'Solution Engineered',
      roleLabel: 'Responsibilities',
      stackLabel: 'Technologies',
      metricsLabel: 'Documented Metrics',
      featuresLabel: 'Capabilities',
      architectureLabel: 'Architecture & Flow',
      screenshotsLabel: 'Showcase Screenshots',
      publicRepoLabel: 'Public Repository',
      privateNoteLabel: 'Core source resides in a private repository; public technical showcase available.',
      backToProjects: 'Back to Projects',
    },
    experience: {
      pageTitle: 'Professional Experience',
      pageSubtitle:
        'Progression across IT support, infrastructure, and corporate software development.',
      highlightsLabel: 'Key deliverables',
      educationTitle: 'Education',
    },
    skills: {
      pageTitle: 'Technical Skills',
      pageSubtitle:
        'Languages, frameworks, databases, and delivery tooling used in production and personal engineering.',
      primaryTier: 'Core Stack',
      secondaryTier: 'Project-Context & Secondary',
    },
    services: {
      pageTitle: 'Services',
      pageSubtitle:
        'Focused technical scope for integrations, automation, and custom web applications.',
      scopeNote:
        'Scope is defined after technical discovery. No fixed-price gimmicks or artificial guarantees.',
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
      focusTitle: 'How I Work',
    },
    contact: {
      pageTitle: 'Contact & Resume',
      pageSubtitle:
        'Direct channels for hiring teams, engineering managers, and freelance inquiries.',
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
      inspiredNote:
        'Original visual direction inspired by modern geometric RPG interfaces, with no third-party game assets or affiliation.',
      rights: 'Victor Gabriel · Ponta Grossa, PR, Brazil',
    },
    notFound: {
      code: '404',
      title: 'Route not found',
      description: 'The requested page does not exist in this portfolio.',
      backHome: 'Back to Home',
    },
  },
};
