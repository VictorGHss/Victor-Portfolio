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
    brandTagline: 'Backend Java · React · Automações',
    skipToContent: 'Pular direto pro conteúdo',
    nav: [
      { key: 'home', label: 'Início', slug: '', code: '01', transitionVariant: 'default' },
      { key: 'projects', label: 'Projetos', slug: 'projects', code: '02', transitionVariant: 'diagonal' },
      { key: 'experience', label: 'Experiência', slug: 'experience', code: '03', transitionVariant: 'stripes' },
      { key: 'skills', label: 'Stack', slug: 'skills', code: '04', transitionVariant: 'cards' },
      { key: 'about', label: 'Sobre', slug: 'about', code: '05', transitionVariant: 'stripes' },
      { key: 'services', label: 'Freelas', slug: 'services', code: '06', transitionVariant: 'diagonal' },
      { key: 'contact', label: 'Contato', slug: 'contact', code: '07', transitionVariant: 'cards' },
    ],
    controls: {
      languageLabel: 'Idioma',
      menuOpen: 'Abrir menu',
      menuClose: 'Fechar menu',
    },
    home: {
      kicker: 'Victor Gabriel · Dev Backend & Full Stack',
      headlineLine1: 'Backends em Java,',
      headlineLine2: 'telas em React e',
      headlineAccent: 'zero retrabalho.',
      summary:
        'Fala! Eu sou o Victor, estudo Análise e Desenvolvimento de Sistemas na UTFPR e sou de Ponta Grossa (PR). Meu foco principal é Java com Spring Boot, mas também mando bem no front com React e TypeScript. Comecei no suporte de TI e peguei gosto por pegar aquelas tarefas chatas que todo mundo fazia na mão e transformar em sistema de verdade.',
      specializationLabel: 'Resumo rápido',
      specializationText:
        'Java 21, Spring Boot, APIs REST, webhooks, integrações com ERPs e WhatsApp (Take Blip), PostgreSQL, Redis e Docker.',
      primaryCta: 'Ver Projeto Principal',
      resumeCta: 'Baixar Currículo (PDF)',
      featuredTitle: 'Projeto Principal',
      featuredSubtitle:
        'Sistema que criei do zero pra juntar confirmações no WhatsApp, catraca com QR Code, financeiro e chamados de TI num lugar só. Rodou pra valer por uns 3 meses (hoje o ciclo já foi encerrado e desativado).',
      viewCaseStudy: 'Ver detalhes do projeto',
      allProjectsCta: 'Ver todos os 6 projetos',
      otherProjectsTitle: 'Outros sistemas que já coloquei de pé',
      inDevTitle: 'O que tô construindo agora',
      trajectoryTitle: 'Por onde passei',
      trajectorySubtitle:
        'Comecei consertando PC, puxando cabo de rede e atendendo chamado. Foi vendo os gargalos do dia a dia de perto que comecei a programar minhas próprias soluções.',
      trajectoryCta: 'Ver experiência completa',
      skillsTitle: 'Minha Stack',
      skillsSubtitle:
        'As ferramentas que realmente uso pra tirar projeto do papel, do banco de dados até o deploy em Linux/Docker.',
      skillsCta: 'Ver stack completa',
      contactTitle: 'Bora trocar uma ideia?',
      contactSubtitle:
        'Tô disponível pra vagas de Dev Backend Júnior ou Full Stack Júnior (Java, Spring Boot, React, TypeScript) — presencial, híbrido ou remoto — e também pego projetos sob medida.',
      contactCta: 'Me chama lá',
    },
    projects: {
      pageTitle: 'Meus Projetos',
      pageSubtitle:
        'Sistemas que nasceram pra resolver perrengue real de trabalho e produtos próprios que tô criando do zero.',
      introNote:
        'Nada aqui é clone de tutorial. Alguns projetos surgiram porque vi gente perdendo horas em tarefa repetitiva no trabalho; outros são ideias minhas que venho arquitetando e codando por conta própria.',
      statusLabels: {
        'concluded-operation': 'Ciclo encerrado · ~3 meses rodando pra valer',
        collaborative: 'Projeto colaborativo',
        completed: 'Finalizado',
        'in-development': 'Construindo agora',
      },
      flagshipBadge: 'Destaque',
      secondaryBadge: 'Web & Edge',
      problemLabel: 'Qual era o perrengue',
      solutionLabel: 'O que eu construí',
      roleLabel: 'O que eu fiz na prática',
      stackLabel: 'Stack usada',
      metricsLabel: 'Números reais',
      featuresLabel: 'O que tem dentro',
      architectureLabel: 'Por baixo do capô',
      roadmapLabel: 'Pé que tá o projeto',
      implementedLabel: 'Já tá pronto',
      inProgressLabel: 'Mexendo agora',
      plannedLabel: 'Próximos passos',
      screenshotsLabel: 'Prints reais do sistema',
      zoomHint: 'Ampliar print',
      closeLightbox: 'Fechar',
      publicShowcaseLabel: 'Ver showcase no GitHub',
      privateNoteLabel: 'O repositório principal é privado, mas montei um showcase aberto bem completo com arquitetura, diagramas, OpenAPI e trechos de código.',
      backToProjects: 'Voltar pros projetos',
    },
    experience: {
      pageTitle: 'Experiência',
      pageSubtitle:
        'Minha caminhada do suporte técnico e infra até o desenvolvimento de sistemas.',
      highlightsLabel: 'O que rolou no dia a dia',
      educationTitle: 'Formação',
    },
    skills: {
      pageTitle: 'Stack & Ferramentas',
      pageSubtitle:
        'O que eu uso de verdade quando sento pra programar, testar, integrar API e subir container.',
      primaryTier: 'Uso direto no dia a dia',
      secondaryTier: 'Também já usei em projetos próprios',
    },
    services: {
      pageTitle: 'Freelas & Projetos',
      pageSubtitle:
        'Precisa tirar um sistema do papel, integrar duas ferramentas que não conversam ou automatizar rotina no WhatsApp? Dá uma olhada no que consigo fazer.',
      scopeNote:
        'Sem orçamento engessado ou papo enrolado: me conta qual é o problema e a gente vê o jeito mais simples e bem-feito de resolver.',
      ctaLabel: 'Chamar pra conversar',
    },
    about: {
      pageTitle: 'Sobre Mim',
      pageSubtitle:
        '21 anos, de Ponta Grossa (PR), estudante de ADS na UTFPR e viciado em automatizar coisa chata.',
      bioTitle: 'Como vim parar no código',
      bioText:
        'Minha base começou cedo com técnico em Informática no SENAI e depois Administração e Logística — o que acabou me ajudando demais a entender como uma empresa funciona fora da tela do código. Quando entrei no mercado como estagiário de TI, minha rotina era suporte N1/N2, rede e manutenção de máquina. Só que eu não conseguia ver o pessoal preenchendo coisa no braço ou perdendo pedido no WhatsApp sem querer automatizar. Comecei fazendo um portalzinho simples de chamados, tomei gosto pela coisa e logo já tava subindo backend em Java 21 com Spring Boot, Redis, Docker, mensageria e banco PostgreSQL. Hoje foco em conseguir minha próxima oportunidade como Dev Backend ou Full Stack Júnior enquanto toco meus próprios projetos no GitHub.',
      educationTitle: 'Formação Acadêmica',
      coursesTitle: 'Cursos & Bootcamps',
      languagesTitle: 'Idiomas',
    },
    contact: {
      pageTitle: 'Contato & Currículo',
      pageSubtitle:
        'Quer bater um papo sobre uma vaga júnior, freela ou trocar ideia sobre algum projeto do meu GitHub? Só chamar.',
      directChannels: 'Onde me achar',
      emailLabel: 'Meu e-mail direto',
      copyEmail: 'Copiar e-mail',
      copiedEmail: 'Copiado!',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      resumeTitle: 'Currículo de 1 Página',
      resumeDownload: 'Baixar Currículo (PT-BR)',
      resumeAltNote: 'Também deixei uma versão em inglês pronta caso a vaga peça.',
      availabilityTitle: 'Disponibilidade atual',
      availabilityText:
        'Encerrei meu ciclo anterior em outubro de 2026 e tô 100% disponível pra começar de imediato como Dev Backend Júnior ou Full Stack Júnior (Java / Spring Boot / React / TypeScript), seja presencial, híbrido ou remoto.',
    },
    footer: {
      note: 'Vito.dev — Feito na unha com Astro, React e TypeScript.',
      rights: 'Victor Gabriel · Ponta Grossa, PR',
    },
    notFound: {
      code: '404',
      title: 'Opa, nada por aqui',
      description: 'Essa rota não existe (ou mudou de lugar). Bora voltar pro começo?',
      backHome: 'Voltar pro início',
    },
  },
  en: {
    brandTagline: 'Java Backends · React · Automation',
    skipToContent: 'Jump to main content',
    nav: [
      { key: 'home', label: 'Home', slug: '', code: '01', transitionVariant: 'default' },
      { key: 'projects', label: 'Projects', slug: 'projects', code: '02', transitionVariant: 'diagonal' },
      { key: 'experience', label: 'Experience', slug: 'experience', code: '03', transitionVariant: 'stripes' },
      { key: 'skills', label: 'Stack', slug: 'skills', code: '04', transitionVariant: 'cards' },
      { key: 'about', label: 'About', slug: 'about', code: '05', transitionVariant: 'stripes' },
      { key: 'services', label: 'Freelance', slug: 'services', code: '06', transitionVariant: 'diagonal' },
      { key: 'contact', label: 'Contact', slug: 'contact', code: '07', transitionVariant: 'cards' },
    ],
    controls: {
      languageLabel: 'Language',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    home: {
      kicker: 'Victor Gabriel · Backend & Full-Stack Dev',
      headlineLine1: 'Java backends,',
      headlineLine2: 'React UIs &',
      headlineAccent: 'zero busywork.',
      summary:
        "Hey! I'm Victor, a Systems Analysis and Development student at UTFPR based in Ponta Grossa, Brazil. My main home is Java and Spring Boot on the backend, paired with React and TypeScript on the frontend. I started out in hands-on IT support and got hooked on taking repetitive manual chores and turning them into real working software.",
      specializationLabel: 'Quick snapshot',
      specializationText:
        'Java 21, Spring Boot, REST APIs, webhooks, ERP & WhatsApp integrations (Take Blip), PostgreSQL, Redis, and Docker.',
      primaryCta: 'See Main Project',
      resumeCta: 'Download Resume (PDF)',
      featuredTitle: 'Main Project',
      featuredSubtitle:
        'A platform I built from scratch to tie together WhatsApp confirmations, QR Code turnstile check-in, finance sync, and IT tickets. It ran in real operations for ~3 months (cycle now concluded and deactivated).',
      viewCaseStudy: 'Read project breakdown',
      allProjectsCta: 'See all 6 projects',
      otherProjectsTitle: 'Other things I built & shipped',
      inDevTitle: "What I'm building right now",
      trajectoryTitle: 'Where I worked',
      trajectorySubtitle:
        'I got my start fixing PCs, crimping network cables, and handling support tickets. Seeing operational bottlenecks up close is what pushed me into writing software.',
      trajectoryCta: 'See full experience',
      skillsTitle: 'My Stack',
      skillsSubtitle:
        'The tools I actually reach for when building APIs, modeling SQL schemas, and shipping Dockerized apps on Linux.',
      skillsCta: 'See full stack',
      contactTitle: 'Want to chat?',
      contactSubtitle:
        "I'm currently open to Junior Backend or Junior Full-Stack Developer roles (Java, Spring Boot, React, TypeScript) — on-site, hybrid, or remote — as well as custom freelance projects.",
      contactCta: 'Reach out',
    },
    projects: {
      pageTitle: 'My Projects',
      pageSubtitle:
        "Systems born out of real workplace headaches alongside independent products I'm building from the ground up.",
      introNote:
        "Nothing here is a copy-paste tutorial clone. Some started because I watched people waste hours on manual work; others are my own product ideas that I've been designing and coding from scratch.",
      statusLabels: {
        'concluded-operation': 'Cycle concluded · ~3 months of real use',
        collaborative: 'Collaborative project',
        completed: 'Shipped',
        'in-development': 'Actively building',
      },
      flagshipBadge: 'Main Case',
      secondaryBadge: 'Web & Edge',
      problemLabel: 'What was broken',
      solutionLabel: 'What I built',
      roleLabel: 'What I handled',
      stackLabel: 'Tech stack',
      metricsLabel: 'Real numbers',
      featuresLabel: "What's inside",
      architectureLabel: 'Under the hood',
      roadmapLabel: 'Where things stand',
      implementedLabel: 'Already working',
      inProgressLabel: 'Working on now',
      plannedLabel: 'Up next',
      screenshotsLabel: 'Real screenshots',
      zoomHint: 'Zoom in',
      closeLightbox: 'Close',
      publicShowcaseLabel: 'View public showcase on GitHub',
      privateNoteLabel: 'The core repo is private, so I put together a detailed public showcase with architecture docs, diagrams, OpenAPI specs, and code samples.',
      backToProjects: 'Back to projects',
    },
    experience: {
      pageTitle: 'Experience',
      pageSubtitle:
        'How I moved from hands-on IT support and infrastructure into building software.',
      highlightsLabel: 'Day-to-day highlights',
      educationTitle: 'Education',
    },
    skills: {
      pageTitle: 'Stack & Tools',
      pageSubtitle:
        'Languages, frameworks, databases, and infra tools I actually use when writing code and deploying.',
      primaryTier: 'My daily drivers',
      secondaryTier: 'Also used in my side projects',
    },
    services: {
      pageTitle: 'Freelance & Custom Work',
      pageSubtitle:
        'Need a custom web system, an integration between tools that refuse to talk to each other, or WhatsApp workflow automation? Here is where I can jump in.',
      scopeNote:
        "No stiff corporate pitch — tell me what's slowing your team down and we'll figure out a clean, practical way to build it.",
      ctaLabel: "Let's talk",
    },
    about: {
      pageTitle: 'About Me',
      pageSubtitle:
        '21, based in Ponta Grossa (Brazil), studying Systems Analysis & Development at UTFPR, and always looking for manual work to automate.',
      bioTitle: 'How I got into building software',
      bioText:
        "I started early with a technical degree in IT at SENAI, followed by Business Administration and Logistics — which ended up helping me a ton when translating real-world business rules into code. When I started working as an IT intern, my day-to-day was N1/N2 support, LAN troubleshooting, and fixing workstations. Pretty quickly, I couldn't watch people retyping spreadsheets or losing requests on WhatsApp without wanting to automate it. That started with a simple internal ticket portal and snowballed into full Java 21 + Spring Boot backends with Redis, Docker, webhooks, and PostgreSQL. Right now I'm looking for my next step as a Junior Backend or Full-Stack Developer while actively building my own projects on GitHub.",
      educationTitle: 'Education',
      coursesTitle: 'Courses & Bootcamps',
      languagesTitle: 'Languages',
    },
    contact: {
      pageTitle: 'Contact & Resume',
      pageSubtitle:
        "Want to talk about a junior role, a freelance project, or ask about anything on my GitHub? Drop me a line.",
      directChannels: 'Where to find me',
      emailLabel: 'Direct email',
      copyEmail: 'Copy email',
      copiedEmail: 'Copied!',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      resumeTitle: '1-Page Resume (PDF)',
      resumeDownload: 'Download Resume (EN)',
      resumeAltNote: 'Portuguese version is also right here if you prefer.',
      availabilityTitle: 'Current availability',
      availabilityText:
        'My previous role wrapped up in October 2026, so I am 100% available to start immediately as a Junior Backend or Junior Full-Stack Developer (Java / Spring Boot / React / TypeScript) — on-site, hybrid, or remote.',
    },
    footer: {
      note: 'Vito.dev — Built from scratch with Astro, React & TypeScript.',
      rights: 'Victor Gabriel · Ponta Grossa, PR, Brazil',
    },
    notFound: {
      code: '404',
      title: 'Nothing over here',
      description: "That URL doesn't exist (or moved somewhere else). Let's head back?",
      backHome: 'Back home',
    },
  },
};
