import type { LocalizedList, LocalizedText } from './projects';

export interface ExperienceItem {
  period: LocalizedText;
  role: LocalizedText;
  context: LocalizedText;
  summary: LocalizedText;
  highlights: LocalizedList;
  tags: string[];
}

export interface SkillGroup {
  category: LocalizedText;
  items: string[];
}

export interface ServiceItem {
  title: LocalizedText;
  summary: LocalizedText;
  deliverables: LocalizedList;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: {
      'pt-br': '2026 — Operação & Engenharia',
      en: '2026 — Operations & Engineering',
    },
    role: {
      'pt-br': 'Desenvolvedor de Software, Integrações & Operações',
      en: 'Software, Integrations & Operations Developer',
    },
    context: {
      'pt-br': 'Plataforma CTRLS ITSM & Ecossistema de Automações',
      en: 'CTRLS ITSM Platform & Automation Ecosystem',
    },
    summary: {
      'pt-br':
        'Projeto e implementação de plataformas backend em Java 21 / Spring Boot 3 conectando ERPs, mensageria no WhatsApp (Take Blip e Digisac), controle de acesso físico e gestão de chamados.',
      en: 'Design and implementation of Java 21 / Spring Boot 3 backend platforms connecting ERPs, WhatsApp messaging (Take Blip and Digisac), physical access control, and ITSM workflows.',
    },
    highlights: {
      'pt-br': [
        'Arquitetura Hexagonal com 18 módulos delimitados, PostgreSQL, Redis e Docker',
        'Automação de +11.000 mensagens em 2 meses e geração de +1.800 credenciais QR Code em 2 semanas',
        'Integrações REST/OAuth2 com Feegow, Take Blip, Conta Azul V2, GerAcesso e Discord JDA',
      ],
      en: [
        'Hexagonal Architecture across 18 bounded modules with PostgreSQL, Redis, and Docker',
        'Automated 11,000+ messages in 2 months and generated 1,800+ QR Code credentials in 2 weeks',
        'REST/OAuth2 integrations with Feegow, Take Blip, Conta Azul V2, GerAcesso, and Discord JDA',
      ],
    },
    tags: ['Java 21', 'Spring Boot 3', 'Take Blip', 'Digisac', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    period: {
      'pt-br': 'Estágio em TI',
      en: 'IT Internship',
    },
    role: {
      'pt-br': 'Estagiário de Tecnologia da Informação',
      en: 'Information Technology Intern',
    },
    context: {
      'pt-br': 'Chesiquimica',
      en: 'Chesiquimica',
    },
    summary: {
      'pt-br':
        'Suporte operacional de TI e desenvolvimento da primeira solução real de abertura de chamados da empresa, publicada no GitHub Pages e mantida em uso.',
      en: 'IT operations support and development of the company’s first internal ticketing form, deployed on GitHub Pages and still in active use.',
    },
    highlights: {
      'pt-br': [
        'Entrega do Sistema de Chamados (HTML, CSS, JavaScript + SheetMonkey + Google Sheets)',
        'Padronização de solicitações internas de suporte e suprimentos',
      ],
      en: [
        'Delivered the internal Ticketing System (HTML, CSS, JavaScript + SheetMonkey + Google Sheets)',
        'Standardized internal support and consumables requests',
      ],
    },
    tags: ['HTML', 'CSS', 'JavaScript', 'Google Sheets', 'GitHub Pages'],
  },
  {
    period: {
      'pt-br': 'Em andamento',
      en: 'Ongoing',
    },
    role: {
      'pt-br': 'Graduação em Análise e Desenvolvimento de Sistemas',
      en: 'B.Tech in Systems Analysis and Development',
    },
    context: {
      'pt-br': 'UTFPR — Universidade Tecnológica Federal do Paraná',
      en: 'UTFPR — Federal University of Technology - Paraná',
    },
    summary: {
      'pt-br':
        'Formação acadêmica em engenharia de software, algoritmos, estruturas de dados, bancos de dados e desenvolvimento web.',
      en: 'Academic training in software engineering, algorithms, data structures, databases, and web development.',
    },
    highlights: {
      'pt-br': [
        'Base sólida em Programação Orientada a Objetos (Java), estruturas de dados e modelagem relacional',
        'Aplicação contínua dos conceitos em produtos autorais (Rewit e Job Hunter)',
      ],
      en: [
        'Strong foundation in Object-Oriented Programming (Java), data structures, and relational modeling',
        'Continuous application in original products (Rewit and Job Hunter)',
      ],
    },
    tags: ['UTFPR', 'Java', 'Algorithms', 'Databases', 'Software Engineering'],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: {
      'pt-br': 'Backend & Arquitetura',
      en: 'Backend & Architecture',
    },
    items: [
      'Java 21',
      'Spring Boot 3',
      'Python',
      'FastAPI',
      'Pydantic',
      'SQLAlchemy',
      'APIs REST',
      'Arquitetura Hexagonal',
      'JWT / OAuth2 / MFA (TOTP)',
    ],
  },
  {
    category: {
      'pt-br': 'Integrações & Automações',
      en: 'Integrations & Automation',
    },
    items: [
      'Take Blip',
      'Digisac',
      'Webhooks',
      'Feegow API',
      'Conta Azul V2',
      'GerAcesso / Control iD',
      'Discord JDA',
      'Scripts Python',
    ],
  },
  {
    category: {
      'pt-br': 'Dados & Infraestrutura',
      en: 'Data & Infrastructure',
    },
    items: [
      'PostgreSQL',
      'PostGIS',
      'Redis',
      'Alembic / Flyway',
      'Docker & Compose',
      'Linux',
      'Nginx',
      'Prometheus & Grafana',
      'Cloudflare Pages / Tunnels',
    ],
  },
  {
    category: {
      'pt-br': 'Frontend & Mobile',
      en: 'Frontend & Mobile',
    },
    items: [
      'React',
      'TypeScript',
      'Astro',
      'Vite',
      'HTML5 & CSS3',
      'Flutter / Dart',
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    title: {
      'pt-br': 'Backend Development',
      en: 'Backend Development',
    },
    summary: {
      'pt-br':
        'Desenvolvimento de APIs REST, serviços modulares e sistemas de negócio com foco em clareza arquitetural e segurança.',
      en: 'REST APIs, modular services, and business systems built with clean architecture and security.',
    },
    deliverables: {
      'pt-br': ['Java & Spring Boot', 'Python & FastAPI', 'Modelagem PostgreSQL & Redis', 'Autenticação JWT / OAuth2'],
      en: ['Java & Spring Boot', 'Python & FastAPI', 'PostgreSQL & Redis modeling', 'JWT / OAuth2 authentication'],
    },
  },
  {
    title: {
      'pt-br': 'Integrations & APIs',
      en: 'Integrations & APIs',
    },
    summary: {
      'pt-br':
        'Conexão entre ERPs, plataformas financeiras, mensageria e sistemas externos por meio de webhooks e APIs.',
      en: 'Connecting ERPs, financial platforms, messaging tools, and external systems via webhooks and APIs.',
    },
    deliverables: {
      'pt-br': ['Webhooks resilientes', 'OAuth2 & tokens', 'Integração com ERPs e sistemas médicos', 'Sincronização de dados'],
      en: ['Resilient webhooks', 'OAuth2 flows', 'ERP & healthcare system integrations', 'Data synchronization'],
    },
  },
  {
    title: {
      'pt-br': 'WhatsApp Automation',
      en: 'WhatsApp Automation',
    },
    summary: {
      'pt-br':
        'Fluxos automatizados de atendimento, lembretes e roteamento de filas conectados ao sistema da operação.',
      en: 'Automated messaging workflows, reminders, and queue routing connected directly to business operations.',
    },
    deliverables: {
      'pt-br': ['Take Blip & Digisac', 'Confirmação de consultas', 'Notificações e lembretes', 'Integração WhatsApp ↔ ERP'],
      en: ['Take Blip & Digisac', 'Appointment confirmations', 'Notifications & reminders', 'WhatsApp ↔ ERP integration'],
    },
  },
  {
    title: {
      'pt-br': 'Process Automation',
      en: 'Process Automation',
    },
    summary: {
      'pt-br':
        'Automação de rotinas repetitivas, coleta estruturada e integração de dados entre planilhas, APIs e bancos.',
      en: 'Automation of repetitive workflows, structured data pipelines, and synchronization across spreadsheets, APIs, and databases.',
    },
    deliverables: {
      'pt-br': ['Python & scripts dedicados', 'Relatórios automatizados', 'Alertas operacionais', 'Redução de tarefas manuais'],
      en: ['Python & dedicated scripts', 'Automated reporting', 'Operational alerts', 'Manual task reduction'],
    },
  },
  {
    title: {
      'pt-br': 'Web Development',
      en: 'Web Development',
    },
    summary: {
      'pt-br':
        'Aplicações web, painéis administrativos e sites profissionais responsivos com React, TypeScript e Astro.',
      en: 'Web applications, admin dashboards, and responsive professional websites built with React, TypeScript, and Astro.',
    },
    deliverables: {
      'pt-br': ['React & TypeScript', 'Painéis administrativos', 'Landing pages & sites profissionais', 'Sistemas personalizados'],
      en: ['React & TypeScript', 'Admin dashboards', 'Landing pages & professional sites', 'Custom web systems'],
    },
  },
];
