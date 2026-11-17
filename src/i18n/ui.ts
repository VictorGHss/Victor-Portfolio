import type { Locale } from './config';

export interface NavItem {
  key: 'home' | 'projects' | 'experience' | 'skills' | 'services' | 'about' | 'contact';
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
    audioOn: string;
    audioOff: string;
    audioHint: string;
    audioVolume: string;
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
    secondaryCta: string;
    resumeCta: string;
    resumeNote: string;
    featuredTitle: string;
    featuredSubtitle: string;
    viewCaseStudy: string;
    allProjectsCta: string;
    experienceTitle: string;
    experienceSubtitle: string;
    experienceCta: string;
    skillsTitle: string;
    skillsSubtitle: string;
    skillsCta: string;
    servicesTitle: string;
    servicesSubtitle: string;
    servicesCta: string;
    contactTitle: string;
    contactSubtitle: string;
  };
  projects: {
    pageTitle: string;
    pageSubtitle: string;
    filterAll: string;
    statusLabels: {
      'used-in-production': string;
      'in-development': string;
      completed: string;
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
  };
  skills: {
    pageTitle: string;
    pageSubtitle: string;
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
    educationTitle: string;
    focusTitle: string;
    approachTitle: string;
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
    resumePending: string;
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
    brandTagline: 'Engenharia de Software & Automações',
    skipToContent: 'Pular para o conteúdo principal',
    nav: [
      { key: 'home', label: 'Início', slug: '', code: '01', transitionVariant: 'default' },
      { key: 'projects', label: 'Projetos', slug: 'projects', code: '02', transitionVariant: 'diagonal' },
      { key: 'experience', label: 'Experiência', slug: 'experience', code: '03', transitionVariant: 'stripes' },
      { key: 'skills', label: 'Tecnologias', slug: 'skills', code: '04', transitionVariant: 'cards' },
      { key: 'services', label: 'Serviços', slug: 'services', code: '05', transitionVariant: 'diagonal' },
      { key: 'about', label: 'Sobre', slug: 'about', code: '06', transitionVariant: 'stripes' },
      { key: 'contact', label: 'Contato', slug: 'contact', code: '07', transitionVariant: 'cards' },
    ],
    controls: {
      languageLabel: 'Idioma',
      menuOpen: 'Abrir menu de navegação',
      menuClose: 'Fechar menu de navegação',
      audioOn: 'SOM: ON',
      audioOff: 'SOM: OFF',
      audioHint: 'Áudio ambiente opcional (sintetizado localmente, sem faixas externas)',
      audioVolume: 'Volume do áudio ambiente',
    },
    home: {
      kicker: 'VICTOR GABRIEL // ENGENHARIA DE SOFTWARE',
      headlineLine1: 'BACKEND,',
      headlineLine2: 'INTEGRAÇÕES &',
      headlineAccent: 'SISTEMAS REAIS.',
      summary:
        'Desenvolvedor de software com foco em Java (Spring Boot), Python (FastAPI), APIs REST, automação de processos e aplicações web em React e TypeScript.',
      specializationLabel: 'Especialização principal',
      specializationText:
        'Construção de plataformas backend resilientes, orquestração de webhooks, automação em WhatsApp (Take Blip / Digisac) e integração entre ERPs, mensageria e controle de acesso.',
      primaryCta: 'Explorar Projetos',
      secondaryCta: 'Entrar em Contato',
      resumeCta: 'Currículo',
      resumeNote: 'Versões em PT-BR e EN disponíveis mediante solicitação.',
      featuredTitle: 'Projetos Selecionados',
      featuredSubtitle:
        'Sistemas colocados em produção, plataformas em desenvolvimento e a evolução prática de engenharia.',
      viewCaseStudy: 'Ver Estudo de Caso',
      allProjectsCta: 'Ver Todos os Projetos',
      experienceTitle: 'Experiência & Contribuições',
      experienceSubtitle:
        'Atuação prática conectando sistemas de negócio, automações de atendimento e infraestrutura em produção.',
      experienceCta: 'Ver Trajetória Completa',
      skillsTitle: 'Stack & Competências',
      skillsSubtitle:
        'Tecnologias aplicadas no desenvolvimento de APIs, mensageria, bancos relacionais e interfaces web.',
      skillsCta: 'Ver Matriz Técnica',
      servicesTitle: 'Serviços Sob Demanda',
      servicesSubtitle:
        'Disponível para projetos freelance focados em backend, integrações, automações e sistemas web.',
      servicesCta: 'Ver Escopo de Serviços',
      contactTitle: 'Vamos conversar sobre engenharia ou projetos',
      contactSubtitle:
        'Aberto a oportunidades de estágio/desenvolvimento, equipes de engenharia e projetos sob medida.',
    },
    projects: {
      pageTitle: 'Projetos de Engenharia',
      pageSubtitle:
        'Curadoria de plataformas desenvolvidas, sistemas utilizados em ambiente real e produtos em construção.',
      filterAll: 'Todos',
      statusLabels: {
        'used-in-production': 'Utilizado em ambiente real',
        'in-development': 'Em desenvolvimento',
        completed: 'Concluído',
      },
      flagshipBadge: 'Projeto Principal',
      secondaryBadge: 'Curadoria Secundária',
      problemLabel: 'Problema / Contexto',
      solutionLabel: 'Solução Desenvolvida',
      roleLabel: 'Minha Participação',
      stackLabel: 'Tecnologias',
      metricsLabel: 'Resultados Documentados',
      featuresLabel: 'Funcionalidades Documentadas',
      architectureLabel: 'Arquitetura & Integrações',
      screenshotsLabel: 'Capturas do Showcase',
      publicRepoLabel: 'Repositório Público',
      privateNoteLabel: 'Implementação principal em repositório privado; showcase técnico público disponível.',
      backToProjects: 'Voltar para Projetos',
    },
    experience: {
      pageTitle: 'Experiência & Contribuições',
      pageSubtitle:
        'Histórico de atuação em desenvolvimento de software, estágio em TI e automação de operações.',
      highlightsLabel: 'Principais entregas',
    },
    skills: {
      pageTitle: 'Tecnologias & Competências',
      pageSubtitle:
        'Ferramentas, linguagens, frameworks e práticas de infraestrutura que utilizo no dia a dia.',
    },
    services: {
      pageTitle: 'Serviços Profissionais',
      pageSubtitle:
        'Atuação freelance e consultoria técnica para empresas que precisam integrar sistemas, automatizar fluxos e construir aplicações web.',
      scopeNote:
        'Escopo definido sob medida após levantamento técnico. Sem promessas artificiais de métricas externas.',
      ctaLabel: 'Solicitar Conversa Técnica',
    },
    about: {
      pageTitle: 'Sobre Victor Gabriel',
      pageSubtitle:
        'Estudante de Análise e Desenvolvimento de Sistemas na UTFPR, focado em engenharia backend, integrações e software confiável.',
      educationTitle: 'Formação Acadêmica',
      focusTitle: 'Direção Técnica',
      approachTitle: 'Como Trabalho',
    },
    contact: {
      pageTitle: 'Contato & Currículo',
      pageSubtitle:
        'Canais diretos para recrutadores, empresas e propostas de projetos freelance.',
      directChannels: 'Canais Verificados',
      emailLabel: 'E-mail profissional',
      copyEmail: 'Copiar e-mail',
      copiedEmail: 'E-mail copiado',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      resumeTitle: 'Currículo (PT-BR / EN)',
      resumePending:
        'Os arquivos PDF em português e inglês estão sendo preparados para download direto. Enquanto isso, solicite por e-mail ou LinkedIn.',
      availabilityTitle: 'Disponibilidade',
      availabilityText:
        'Aberto a oportunidades como Desenvolvedor Backend / Full-Stack Júnior, Estágios em Engenharia de Software e projetos freelance de integrações e automações.',
    },
    footer: {
      note: 'Vito.dev — Portfólio de Engenharia de Software.',
      inspiredNote:
        'Direção de arte original inspirada na estética geométrica de RPGs modernos, sem afiliação ou assets de terceiros.',
      rights: 'Victor Gabriel · Paraná, Brasil',
    },
    notFound: {
      code: '404',
      title: 'Rota não encontrada',
      description: 'O endereço acessado não existe ou foi movido nesta versão do portfólio.',
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
      { key: 'services', label: 'Services', slug: 'services', code: '05', transitionVariant: 'diagonal' },
      { key: 'about', label: 'About', slug: 'about', code: '06', transitionVariant: 'stripes' },
      { key: 'contact', label: 'Contact', slug: 'contact', code: '07', transitionVariant: 'cards' },
    ],
    controls: {
      languageLabel: 'Language',
      menuOpen: 'Open navigation menu',
      menuClose: 'Close navigation menu',
      audioOn: 'SOUND: ON',
      audioOff: 'SOUND: OFF',
      audioHint: 'Optional ambient audio (locally synthesized, no external tracks)',
      audioVolume: 'Ambient audio volume',
    },
    home: {
      kicker: 'VICTOR GABRIEL // SOFTWARE ENGINEERING',
      headlineLine1: 'BACKEND,',
      headlineLine2: 'INTEGRATIONS &',
      headlineAccent: 'REAL SYSTEMS.',
      summary:
        'Software developer focused on Java (Spring Boot), Python (FastAPI), REST APIs, process automation, and web applications with React and TypeScript.',
      specializationLabel: 'Core specialization',
      specializationText:
        'Building resilient backend platforms, webhook orchestration, WhatsApp automation (Take Blip / Digisac), and integrations across ERPs, messaging, and physical access control.',
      primaryCta: 'Explore Projects',
      secondaryCta: 'Get in Touch',
      resumeCta: 'Resume',
      resumeNote: 'PT-BR and EN versions available upon request.',
      featuredTitle: 'Selected Projects',
      featuredSubtitle:
        'Systems deployed in real operations, platforms under active development, and practical engineering progression.',
      viewCaseStudy: 'View Case Study',
      allProjectsCta: 'View All Projects',
      experienceTitle: 'Experience & Contributions',
      experienceSubtitle:
        'Hands-on work connecting business systems, messaging automation, and production infrastructure.',
      experienceCta: 'View Full Timeline',
      skillsTitle: 'Tech Stack & Skills',
      skillsSubtitle:
        'Technologies applied across API development, messaging, relational databases, and web interfaces.',
      skillsCta: 'View Technical Matrix',
      servicesTitle: 'Freelance Services',
      servicesSubtitle:
        'Available for freelance engagements focused on backend systems, API integrations, automation, and web apps.',
      servicesCta: 'View Service Scope',
      contactTitle: "Let's talk about engineering or your next project",
      contactSubtitle:
        'Open to software engineering roles, international teams, and tailored freelance engagements.',
    },
    projects: {
      pageTitle: 'Engineering Projects',
      pageSubtitle:
        'Curated platforms, systems used in real operations, and ongoing software products.',
      filterAll: 'All',
      statusLabels: {
        'used-in-production': 'Used in real operations',
        'in-development': 'In development',
        completed: 'Completed',
      },
      flagshipBadge: 'Flagship Project',
      secondaryBadge: 'Secondary Curation',
      problemLabel: 'Problem / Context',
      solutionLabel: 'Solution Built',
      roleLabel: 'My Contribution',
      stackLabel: 'Technologies',
      metricsLabel: 'Documented Results',
      featuresLabel: 'Documented Features',
      architectureLabel: 'Architecture & Integrations',
      screenshotsLabel: 'Showcase Screenshots',
      publicRepoLabel: 'Public Repository',
      privateNoteLabel: 'Core implementation lives in a private repository; public technical showcase available.',
      backToProjects: 'Back to Projects',
    },
    experience: {
      pageTitle: 'Experience & Contributions',
      pageSubtitle:
        'Background in software development, IT internship, and operational process automation.',
      highlightsLabel: 'Key deliverables',
    },
    skills: {
      pageTitle: 'Technologies & Skills',
      pageSubtitle:
        'Languages, frameworks, databases, and infrastructure tools I use in production and personal projects.',
    },
    services: {
      pageTitle: 'Professional Services',
      pageSubtitle:
        'Freelance development and technical consulting for teams needing system integrations, workflow automation, and custom web applications.',
      scopeNote:
        'Scope is tailored after technical discovery. No artificial promises on external rankings or review counts.',
      ctaLabel: 'Request Technical Call',
    },
    about: {
      pageTitle: 'About Victor Gabriel',
      pageSubtitle:
        'Systems Analysis and Development student at UTFPR, focused on backend engineering, integrations, and reliable software.',
      educationTitle: 'Education',
      focusTitle: 'Technical Focus',
      approachTitle: 'How I Work',
    },
    contact: {
      pageTitle: 'Contact & Resume',
      pageSubtitle:
        'Direct channels for recruiters, engineering teams, and freelance project inquiries.',
      directChannels: 'Verified Channels',
      emailLabel: 'Professional email',
      copyEmail: 'Copy email',
      copiedEmail: 'Email copied',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      resumeTitle: 'Resume (PT-BR / EN)',
      resumePending:
        'Direct PDF downloads in Portuguese and English are being finalized. In the meantime, feel free to request a copy via email or LinkedIn.',
      availabilityTitle: 'Availability',
      availabilityText:
        'Open to Junior Backend / Full-Stack Developer roles, Software Engineering internships, and freelance integration or automation projects.',
    },
    footer: {
      note: 'Vito.dev — Software Engineering Portfolio.',
      inspiredNote:
        'Original art direction inspired by modern geometric RPG interfaces, with no third-party game assets or affiliation.',
      rights: 'Victor Gabriel · Paraná, Brazil',
    },
    notFound: {
      code: '404',
      title: 'Route not found',
      description: 'The requested page does not exist or has been moved in this portfolio.',
      backHome: 'Back to Home',
    },
  },
};
