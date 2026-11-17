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
      kicker: 'Victor Gabriel · Desenvolvedor Backend & Full Stack',
      headlineLine1: 'Software corporativo,',
      headlineLine2: 'integrações REST e',
      headlineAccent: 'automações em produção.',
      summary:
        'Desenvolvedor com experiência prática na construção e sustentação de aplicações em Java (Spring Boot), React, TypeScript e PostgreSQL — conectando ERPs, webhooks assíncronos e mensageria via WhatsApp.',
      specializationLabel: 'Foco Técnico',
      specializationText:
        'APIs RESTful, arquitetura em camadas/hexagonal, mensageria com Take Blip e Digisac, controle de acesso físico e bancos relacionais.',
      primaryCta: 'Ver Estudo de Caso',
      resumeCta: 'Baixar Currículo (PDF)',
      featuredTitle: 'Estudo de Caso Principal',
      featuredSubtitle:
        'Sistema desenvolvido do zero para integrar atendimento via WhatsApp, portaria com QR Code, conciliação financeira e chamados de TI.',
      viewCaseStudy: 'Abrir Estudo de Caso',
      allProjectsCta: 'Todos os Projetos (6)',
      otherProjectsTitle: 'Demais Projetos & Produtos',
      trajectoryTitle: 'Trajetória Profissional',
      trajectorySubtitle:
        'Do estágio de TI na Chesiquímica à atuação e efetivação como Técnico de TI na Inovare, unindo suporte de infraestrutura e engenharia de software.',
      trajectoryCta: 'Ver Experiência Completa',
      skillsTitle: 'Competências Principais',
      skillsSubtitle:
        'Stack consolidada em backend Java/Spring, frontend React/TypeScript, bancos SQL e infraestrutura Linux/Docker.',
      skillsCta: 'Ver Matriz Completa',
      servicesTitle: 'Serviços Sob Demanda',
      servicesSubtitle:
        'Atuação pontual para empresas que precisam integrar sistemas, automatizar fluxos ou estruturar aplicações web.',
      servicesCta: 'Ver Escopo',
      contactTitle: 'Aberto a oportunidades em Engenharia de Software',
      contactSubtitle:
        'Disponível para posições Júnior Backend / Full Stack (Java, Spring Boot, React, TypeScript) e projetos sob medida.',
      contactCta: 'Falar por E-mail ou LinkedIn',
    },
    projects: {
      pageTitle: 'Projetos & Sistemas',
      pageSubtitle:
        'Plataformas colocadas em operação real, aplicações corporativas e produtos autorais em desenvolvimento.',
      statusLabels: {
        'used-in-production': 'Operação real (ciclo encerrado / em uso)',
        'in-development': 'Em desenvolvimento',
        completed: 'Concluído',
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
      pageTitle: 'Sobre Victor Gabriel',
      pageSubtitle:
        'Graduando em Análise e Desenvolvimento de Sistemas pela UTFPR, com formação técnica em Informática (SENAI), Administração e Logística.',
      bioTitle: 'Perfil Profissional',
      bioText:
        'Uno rigor técnico em Java/Spring Boot, React e PostgreSQL com visão prática de operação e regras de negócio. Minha base multidisciplinar — passando por suporte N1/N2, redes locais, administração e logística — ajuda a identificar gargalos reais antes de escrever a primeira linha de código.',
      educationTitle: 'Formação Acadêmica',
      coursesTitle: 'Cursos & Bootcamps',
      languagesTitle: 'Idiomas',
      focusTitle: 'Direção de Engenharia',
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
      kicker: 'Victor Gabriel · Backend & Full-Stack Developer',
      headlineLine1: 'Business software,',
      headlineLine2: 'REST integrations &',
      headlineAccent: 'production automation.',
      summary:
        'Software developer with hands-on experience building and maintaining production applications in Java (Spring Boot), React, TypeScript, and PostgreSQL — connecting ERPs, asynchronous webhooks, and WhatsApp messaging.',
      specializationLabel: 'Technical Focus',
      specializationText:
        'RESTful APIs, layered & hexagonal architecture, Take Blip and Digisac messaging, physical access control, and relational databases.',
      primaryCta: 'Read Case Study',
      resumeCta: 'Download Resume (PDF)',
      featuredTitle: 'Flagship Case Study',
      featuredSubtitle:
        'End-to-end platform engineered to unify WhatsApp automation, QR Code reception access, financial reconciliation, and IT ticketing.',
      viewCaseStudy: 'Open Case Study',
      allProjectsCta: 'All Projects (6)',
      otherProjectsTitle: 'Selected Systems & Products',
      trajectoryTitle: 'Career Progression',
      trajectorySubtitle:
        'From IT Intern at Chesiquímica to IT Intern and full-time IT Technician at Inovare, combining infrastructure support and software engineering.',
      trajectoryCta: 'Full Experience',
      skillsTitle: 'Core Stack',
      skillsSubtitle:
        'Proven stack across Java/Spring backends, React/TypeScript interfaces, SQL databases, and Linux/Docker infrastructure.',
      skillsCta: 'Full Skill Matrix',
      servicesTitle: 'Freelance Scope',
      servicesSubtitle:
        'Targeted engagements for teams needing API integrations, workflow automation, or custom web tools.',
      servicesCta: 'View Scope',
      contactTitle: 'Open to Software Engineering opportunities',
      contactSubtitle:
        'Available for Junior Backend / Full-Stack roles (Java, Spring Boot, React, TypeScript) and tailored engineering projects.',
      contactCta: 'Reach Out via Email or LinkedIn',
    },
    projects: {
      pageTitle: 'Projects & Systems',
      pageSubtitle:
        'Platforms deployed in real operations, business web apps, and personal products under active development.',
      statusLabels: {
        'used-in-production': 'Real operations (concluded / active)',
        'in-development': 'In development',
        completed: 'Completed',
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
      pageTitle: 'About Victor Gabriel',
      pageSubtitle:
        'Systems Analysis and Development undergraduate at UTFPR, with technical degrees in IT (SENAI), Business Administration, and Logistics.',
      bioTitle: 'Profile',
      bioText:
        'I combine solid engineering in Java/Spring Boot, React, and PostgreSQL with a practical grasp of business operations. My multidisciplinary background — spanning N1/N2 IT support, local networks, administration, and logistics — helps pinpoint real operational bottlenecks before writing code.',
      educationTitle: 'Education',
      coursesTitle: 'Courses & Bootcamps',
      languagesTitle: 'Languages',
      focusTitle: 'Engineering Approach',
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
