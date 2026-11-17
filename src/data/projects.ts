import type { Locale } from '../i18n/config';

export type ProjectStatus =
  | 'concluded-operation'
  | 'collaborative'
  | 'completed'
  | 'in-development';

export interface LocalizedText {
  'pt-br': string;
  en: string;
}

export interface LocalizedList {
  'pt-br': string[];
  en: string[];
}

export interface ProjectMetric {
  value: string;
  label: LocalizedText;
}

export interface ProjectScreenshot {
  src: string;
  alt: LocalizedText;
  caption: LocalizedText;
  compact?: boolean;
}

export interface ProjectRoadmap {
  implemented: LocalizedList;
  inProgress: LocalizedList;
  planned: LocalizedList;
}

export interface Project {
  slug: string;
  name: LocalizedText;
  tagline: LocalizedText;
  status: ProjectStatus;
  timelineContext: LocalizedText;
  priority: number;
  featured: boolean;
  secondary?: boolean;
  isPrivateCore?: boolean;
  repoUrl?: string;
  repoLabel?: LocalizedText;
  liveUrl?: string;
  liveLabel?: LocalizedText;
  stack: string[];
  problem: LocalizedText;
  solution: LocalizedText;
  role: LocalizedText;
  features: LocalizedList;
  architecture?: LocalizedList;
  challenges?: LocalizedList;
  roadmap?: ProjectRoadmap;
  metrics?: ProjectMetric[];
  screenshots?: ProjectScreenshot[];
}

export const PROJECTS: Project[] = [
  {
    slug: 'ctrls-itsm',
    name: {
      'pt-br': 'CTRLS ITSM',
      en: 'CTRLS ITSM',
    },
    tagline: {
      'pt-br':
        'Plataforma de operações, automação via WhatsApp, controle de acesso físico e gestão ITSM.',
      en: 'Operations platform connecting WhatsApp automation, physical access control, financial sync, and ITSM ticketing.',
    },
    status: 'concluded-operation',
    timelineContext: {
      'pt-br': 'Projeto independente • Usado por ~3 meses em ambiente real • Ciclo encerrado',
      en: 'Independent project • Used in real operations for ~3 months • Cycle concluded',
    },
    priority: 1,
    featured: true,
    isPrivateCore: true,
    repoUrl: 'https://github.com/VictorGHss/CTRLS-ITSM-SHOWCASE',
    repoLabel: {
      'pt-br': 'Ver showcase no GitHub',
      en: 'View public showcase on GitHub',
    },
    stack: [
      'Java 21',
      'Spring Boot 3',
      'Spring Security',
      'React',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Prometheus',
      'Grafana',
      'REST APIs',
      'Take Blip',
      'Feegow',
      'Conta Azul V2',
      'GerAcesso',
      'Discord JDA',
    ],
    problem: {
      'pt-br':
        'A operação dependia de confirmações manuais no WhatsApp, gerava filas na recepção sem autoatendimento e não tinha rastreabilidade para chamados internos de TI nem conciliação financeira integrada.',
      en: 'Operations relied on manual WhatsApp confirmations, faced reception bottlenecks without self-service check-in, and lacked tracking for internal IT requests and financial reconciliation.',
    },
    solution: {
      'pt-br':
        'Criei o sistema por iniciativa própria a partir do período de estágio em TI (2024), com backend em Java 21 / Spring Boot 3 e Arquitetura Hexagonal. Ele rodou em ambiente real por cerca de três meses e hoje está desativado — o ciclo operacional foi encerrado e os dados e o ambiente foram removidos.',
      en: 'I built this system independently starting during my 2024 IT internship, using Java 21, Spring Boot 3, and Hexagonal Architecture. It ran in real operations for around three months and is no longer active — it was deactivated at the end of its operational cycle, and both the environment and data were removed.',
    },
    role: {
      'pt-br':
        'Concepção e desenvolvimento completo: arquitetura hexagonal em Java 21 / Spring Boot 3, integrações REST e webhooks assíncronos (Feegow, Blip, Conta Azul V2, gerAcesso e Discord), controle de taxa no Redis, segurança (JWT, MFA/TOTP, auditoria) e painéis em React.',
      en: 'End-to-end architecture and development: Hexagonal Architecture in Java 21 / Spring Boot 3, REST and asynchronous webhook integrations (Feegow, Blip, Conta Azul V2, gerAcesso, Discord), Redis rate limiting, security (JWT, MFA/TOTP, audit logs), and React dashboards.',
    },
    features: {
      'pt-br': [
        'Confirmações e lembretes no WhatsApp integrados ao ERP Feegow e Take Blip',
        'Autoatendimento na portaria com QR Codes temporários integrados ao gerAcesso',
        'Rotina automática de captação de avaliações pós-atendimento',
        'Gestão de chamados de TI (ITSM), inventário patrimonial (CMDB), estoque FIFO e triagem no Discord',
        'Conciliação financeira com Conta Azul V2 protegida por 2FA/TOTP',
      ],
      en: [
        'WhatsApp confirmations and reminders integrated with Feegow ERP and Take Blip',
        'Self-service reception check-in using temporary QR Codes integrated with gerAcesso',
        'Automated post-visit review follow-up workflow',
        'ITSM ticketing, asset CMDB, FIFO consumables inventory, and Discord triage',
        'Financial reconciliation with Conta Azul V2 gated by 2FA/TOTP validation',
      ],
    },
    architecture: {
      'pt-br': [
        'Backend Java 21 + Spring Boot 3 estruturado em Arquitetura Hexagonal (Ports & Adapters)',
        'PostgreSQL para persistência transacional e Redis para rate limiting e cache',
        'Observabilidade com Prometheus e Grafana em containers Docker',
        'Orquestração assíncrona entre ERP, WhatsApp, catracas físicas e Discord',
      ],
      en: [
        'Java 21 + Spring Boot 3 backend structured with Hexagonal Architecture (Ports & Adapters)',
        'PostgreSQL for transactional storage and Redis for rate limiting and caching',
        'Observability via Prometheus and Grafana running in Docker containers',
        'Asynchronous orchestration across ERP, WhatsApp messaging, physical turnstiles, and Discord',
      ],
    },
    challenges: {
      'pt-br': [
        'Controlar picos de disparo no WhatsApp sem estourar limites das APIs externas usando Redis Rate Limiting',
        'Sincronizar liberações temporárias de QR Code nas catracas com tolerância de horário',
        'Proteger rotas financeiras com MFA/TOTP obrigatório e trilha de auditoria',
      ],
      en: [
        'Handling outbound WhatsApp dispatch bursts without hitting external API limits via Redis rate limiting',
        'Synchronizing temporary QR Code turnstile releases with scheduling time-window tolerances',
        'Securing financial endpoints with mandatory MFA/TOTP and audit trails',
      ],
    },
    metrics: [
      {
        value: '10.000+',
        label: {
          'pt-br': 'Mensagens automatizadas processadas no período',
          en: 'Automated WhatsApp messages processed',
        },
      },
      {
        value: '1.700+',
        label: {
          'pt-br': 'QR Codes temporários gerados para portaria',
          en: 'Temporary QR Codes generated for reception access',
        },
      },
      {
        value: '3.3 → 3.8',
        label: {
          'pt-br': 'Nota pública no Google em 30 dias',
          en: 'Public Google rating over 30 days',
        },
      },
      {
        value: '96,3%',
        label: {
          'pt-br': 'Tickets resolvidos no dashboard do showcase (235 / 244)',
          en: 'Tickets resolved on showcase dashboard (235 / 244)',
        },
      },
    ],
    screenshots: [
      {
        src: '/images/projects/ctrls-itsm/dashboard_chamados.png',
        alt: {
          'pt-br': 'Dashboard de chamados do CTRLS ITSM exibindo 244 tickets e 235 resolvidos',
          en: 'CTRLS ITSM ticket dashboard showing 244 total tickets and 235 resolved',
        },
        caption: {
          'pt-br': 'Painel executivo de chamados ITSM (ciclo operacional encerrado).',
          en: 'Executive ITSM ticketing dashboard (operational cycle concluded).',
        },
      },
      {
        src: '/images/projects/ctrls-itsm/painel_motor_feegow_blip.png',
        alt: {
          'pt-br': 'Painel do motor de agendamentos conectando Feegow e Take Blip',
          en: 'Scheduling engine control panel connecting Feegow and Take Blip',
        },
        caption: {
          'pt-br': 'Controle do motor de confirmações e mapeamento de filas no Take Blip.',
          en: 'Confirmation engine controls and Take Blip queue mapping.',
        },
      },
      {
        src: '/images/projects/ctrls-itsm/inventario_suprimentos.png',
        alt: {
          'pt-br': 'Módulo de inventário de suprimentos com controle de estoque',
          en: 'Supplies inventory module with stock tracking',
        },
        caption: {
          'pt-br': 'Gestão de suprimentos com dedução FIFO e alertas de estoque mínimo.',
          en: 'Supplies management with FIFO deduction and low-stock alerts.',
        },
      },
      {
        src: '/images/projects/ctrls-itsm/modal_2fa_financeiro.png',
        alt: {
          'pt-br': 'Modal de validação 2FA TOTP para acesso ao módulo financeiro',
          en: 'TOTP 2FA validation modal for financial module access',
        },
        caption: {
          'pt-br': 'Validação obrigatória de 2FA/TOTP para operações financeiras.',
          en: 'Mandatory 2FA/TOTP verification for financial workflows.',
        },
      },
    ],
  },
  {
    slug: 'ctrls-forms',
    name: {
      'pt-br': 'CTRLS Forms',
      en: 'CTRLS Forms',
    },
    tagline: {
      'pt-br':
        'Aplicação full stack multi-tenant para formulários clínicos em JSON Schema e relatórios em PDF.',
      en: 'Multi-tenant full-stack application for JSON Schema clinical forms and automated PDF reporting.',
    },
    status: 'completed',
    timelineContext: {
      'pt-br': 'Projeto independente • Multi-tenant (Java / Spring Boot + React)',
      en: 'Independent project • Multi-tenant (Java / Spring Boot + React)',
    },
    priority: 2,
    featured: true,
    repoUrl: 'https://github.com/VictorGHss/CTRLS-FormsV1',
    stack: ['Spring Boot 3', 'Java', 'React', 'TypeScript', 'PostgreSQL', 'Flyway', 'JWT & RBAC', 'JSON Schema', 'Nginx'],
    problem: {
      'pt-br':
        'Formulários clínicos em papel dificultam a padronização entre unidades e exigem redigitação manual, além de demandarem isolamento estrito dos dados por clínica.',
      en: 'Paper clinical forms make standardization across units harder, require manual re-entry, and demand strict per-clinic data isolation.',
    },
    solution: {
      'pt-br':
        'Construí uma aplicação full stack multi-tenant com backend em Spring Boot 3 e PostgreSQL versionado via Flyway. Os formulários são modelados dinamicamente com JSON Schema, os acessos seguem JWT + RBAC com contexto por unidade e os envios geram relatórios em PDF.',
      en: 'I built a multi-tenant full-stack application with Spring Boot 3 and Flyway-versioned PostgreSQL. Forms are modeled dynamically via JSON Schema, access is governed by JWT + RBAC with per-unit context, and submissions generate PDF reports.',
    },
    role: {
      'pt-br':
        'Modelagem do banco e migrações Flyway, API REST multi-tenant com isolamento de dados, regras de renderização em JSON Schema, geração de PDFs e frontend React/TypeScript servido atrás de proxy Nginx.',
      en: 'Database modeling and Flyway migrations, multi-tenant REST API with data isolation, JSON Schema rendering rules, PDF generation, and React/TypeScript frontend behind an Nginx reverse proxy.',
    },
    features: {
      'pt-br': [
        'Isolamento multi-tenant com autenticação JWT, contexto por unidade e controle RBAC',
        'Modelagem e renderização dinâmica de formulários baseada em JSON Schema',
        'Geração automática de relatórios em PDF a partir das respostas preenchidas',
        'Migrações versionadas com Flyway e empacotamento com Nginx',
      ],
      en: [
        'Multi-tenant data isolation with JWT authentication, unit context, and RBAC',
        'Dynamic form modeling and rendering driven by JSON Schema',
        'Automated PDF report generation from submitted forms',
        'Versioned database migrations with Flyway and Nginx reverse proxy',
      ],
    },
  },
  {
    slug: 'digital-professional-profiles',
    name: {
      'pt-br': 'Portal Clínico & Perfis Profissionais',
      en: 'Clinical Portal & Digital Professional Profiles',
    },
    tagline: {
      'pt-br':
        'Vitrine web de especialistas integrada a cartões físicos com QR Code e avaliações públicas.',
      en: 'Specialist showcase web app connected to printed QR Code cards and live public reviews.',
    },
    status: 'completed',
    timelineContext: {
      'pt-br': 'Projeto independente • Next.js + QR Codes + Cloudflare Pages',
      en: 'Independent project • Next.js + QR Codes + Cloudflare Pages',
    },
    priority: 3,
    featured: true,
    secondary: true,
    liveUrl: 'https://inovare.doctors.ctrls.dev.br/m/alisson-fucio',
    liveLabel: {
      'pt-br': 'Abrir Página de Exemplo (Dr. Alisson Fucio)',
      en: 'Open Live Specialist Page (Dr. Alisson Fucio)',
    },
    stack: ['Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages', 'Google API'],
    problem: {
      'pt-br':
        'Pacientes que recebiam o cartão físico precisavam de um caminho direto no celular para ver especialidades, contatos, localização e avaliações reais do especialista.',
      en: 'Patients receiving a printed card needed a quick mobile path to check the specialist’s bio, specialties, contact links, and real public reviews.',
    },
    solution: {
      'pt-br':
        'Desenvolvi uma aplicação em Next.js (App Router), TypeScript e Tailwind CSS hospedada na Cloudflare Pages. Cada especialista ganha uma página individual rápida e um QR Code gerado automaticamente para ir direto no cartão profissional impresso, com exibição de avaliações via Google API.',
      en: 'I built a Next.js (App Router), TypeScript, and Tailwind CSS web app hosted on Cloudflare Pages. Each specialist gets a fast individual profile page and an automatically generated QR Code for their printed card, along with Google API review integration.',
    },
    role: {
      'pt-br':
        'Desenvolvimento completo da aplicação web, geração automática dos QR Codes, integração com Google API e publicação na Cloudflare Pages.',
      en: 'Full web application development, automated QR Code generation, Google API integration, and Cloudflare Pages deployment.',
    },
    features: {
      'pt-br': [
        'Páginas individuais responsivas com foco em leitura rápida no celular',
        'QR Codes gerados automaticamente conectando o cartão impresso ao perfil digital',
        'Exibição de avaliações públicas integradas via Google API',
      ],
      en: [
        'Mobile-first individual specialist pages designed for quick scanning',
        'Automatically generated QR Codes linking printed cards to digital profiles',
        'Public reviews displayed via Google API integration',
      ],
    },
    screenshots: [
      {
        src: '/images/projects/portal-clinico/cartao-profissional-alisson.png',
        alt: {
          'pt-br': 'Cartão profissional do Dr. Alisson Fucio com CRM, RQE, descrição e QR Code',
          en: 'Dr. Alisson Fucio professional card with CRM, RQE, bio, and QR Code',
        },
        caption: {
          'pt-br': 'Exemplo de cartão profissional com QR Code para acesso ao perfil do especialista.',
          en: 'Sample professional card with QR Code linking to the specialist’s profile.',
        },
        compact: true,
      },
    ],
  },
  {
    slug: 'chamados-chesiquimica',
    name: {
      'pt-br': 'Sistema de Chamados — Chesiquímica',
      en: 'Ticketing System — Chesiquímica',
    },
    tagline: {
      'pt-br':
        'Formulário web simples para organizar solicitações internas de suporte e suprimentos durante o estágio.',
      en: 'Lightweight web form built to organize internal IT support and supply requests during my internship.',
    },
    status: 'collaborative',
    timelineContext: {
      'pt-br': 'Iniciativa desenvolvida em colaboração com João Gabriel Anjos, supervisor durante o estágio na Chesiquímica.',
      en: 'Developed in collaboration with João Gabriel Anjos, my supervisor during the IT internship.',
    },
    priority: 4,
    featured: true,
    repoUrl: 'https://github.com/VictorGHss/ChamadosChesiquimica',
    stack: ['HTML', 'CSS', 'JavaScript', 'SheetMonkey', 'Google Sheets', 'GitHub Pages'],
    problem: {
      'pt-br':
        'Durante o estágio na Chesiquímica, pedidos internos de suporte e reposição de toners chegavam de forma informal, sem registro padronizado.',
      en: 'During my internship at Chesiquímica, internal support and toner replacement requests arrived informally without standardized logging.',
    },
    solution: {
      'pt-br':
        'Em parceria com o supervisor João Gabriel Anjos, montamos uma página objetiva no GitHub Pages que envia os dados do formulário diretamente para uma planilha no Google Sheets via SheetMonkey.',
      en: 'Working alongside my supervisor João Gabriel Anjos, we put together a straightforward GitHub Pages form that routes submissions directly into Google Sheets via SheetMonkey.',
    },
    role: {
      'pt-br':
        'Implementação da interface HTML/CSS/JavaScript, integração com SheetMonkey e publicação estática no GitHub Pages.',
      en: 'Implemented the HTML/CSS/JavaScript form, SheetMonkey integration, and static deployment on GitHub Pages.',
    },
    features: {
      'pt-br': [
        'Formulário objetivo com nome, e-mail, assunto e descrição',
        'Registro automático em planilha Google Sheets via SheetMonkey',
        'Hospedagem estática simples no GitHub Pages sem custo de servidor',
      ],
      en: [
        'Focused form capturing name, email, subject, and description',
        'Automatic row logging into Google Sheets via SheetMonkey',
        'Simple static hosting on GitHub Pages with zero server maintenance',
      ],
    },
  },
  {
    slug: 'rewit',
    name: {
      'pt-br': 'Rewit',
      en: 'Rewit',
    },
    tagline: {
      'pt-br':
        'Rede social geográfica de avaliações com check-in físico verificado e feeds contextuais.',
      en: 'Geo-social review network with verified physical check-ins and contextual feeds.',
    },
    status: 'in-development',
    timelineContext: {
      'pt-br': 'Em desenvolvimento • Produto independente',
      en: 'In development • Independent product',
    },
    priority: 5,
    featured: false,
    repoUrl: 'https://github.com/VictorGHss/Rewit',
    stack: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'PostGIS',
      'Redis',
      'Flutter',
      'Dart',
      'React',
      'TypeScript',
      'SeaweedFS',
    ],
    problem: {
      'pt-br':
        'Avaliações comuns de locais e serviços raramente comprovam que a pessoa realmente esteve no local ou usou o serviço.',
      en: 'Conventional reviews rarely verify whether the reviewer actually visited the place or used the service.',
    },
    solution: {
      'pt-br':
        'Produto que venho construindo do zero unindo backend geoespacial em Spring Boot + PostGIS, cache com Redis, armazenamento de mídia em SeaweedFS, app mobile em Flutter e painel administrativo em React/TypeScript.',
      en: 'A product I am building from scratch combining a Spring Boot + PostGIS geospatial backend, Redis caching, SeaweedFS object storage, a Flutter mobile client, and a React/TypeScript admin panel.',
    },
    role: {
      'pt-br':
        'Concepção do produto, modelagem geoespacial em PostGIS, API backend e desenvolvimento dos clientes mobile e web.',
      en: 'Product design, PostGIS geospatial modeling, backend API, and mobile/web client development.',
    },
    features: {
      'pt-br': [
        'Check-in físico verificado com consultas geoespaciais PostGIS',
        'Scanner de códigos de barras e QR Codes no aplicativo Flutter',
        'Feed contextual e modelagem orientada à privacidade',
      ],
      en: [
        'Verified physical check-ins backed by PostGIS geospatial queries',
        'Barcode and QR Code scanner in the Flutter app',
        'Contextual feed and privacy-oriented data modeling',
      ],
    },
    roadmap: {
      implemented: {
        'pt-br': [
          'Estrutura modular do monorepo, modelagem relacional e extensão geoespacial PostGIS',
          'Base da API Spring Boot, cache Redis e armazenamento SeaweedFS configurados',
        ],
        en: [
          'Modular monorepo structure, relational schema, and PostGIS geospatial setup',
          'Core Spring Boot API, Redis cache, and SeaweedFS storage configuration',
        ],
      },
      inProgress: {
        'pt-br': [
          'Fluxo de check-in verificado e scanner de códigos no cliente Flutter',
          'Painel administrativo de moderação em React + TypeScript',
        ],
        en: [
          'Verified check-in flow and barcode/QR scanner in the Flutter app',
          'Moderation admin panel in React + TypeScript',
        ],
      },
      planned: {
        'pt-br': [
          'Serviço futuro de recomendações e embeddings visuais em Python/FastAPI',
        ],
        en: [
          'Future visual embedding and recommendation service in Python/FastAPI',
        ],
      },
    },
  },
  {
    slug: 'job-hunter',
    name: {
      'pt-br': 'Job Hunter',
      en: 'Job Hunter',
    },
    tagline: {
      'pt-br':
        'Plataforma para organizar candidaturas, analisar compatibilidade e preparar currículos com validação humana.',
      en: 'Platform for tracking job applications, analyzing fit, and tailoring resumes with mandatory human approval.',
    },
    status: 'in-development',
    timelineContext: {
      'pt-br': 'Em desenvolvimento • Produto independente',
      en: 'In development • Independent product',
    },
    priority: 6,
    featured: false,
    repoUrl: 'https://github.com/VictorGHss/Job-HunterV1.0',
    stack: [
      'Python',
      'FastAPI',
      'Pydantic',
      'SQLAlchemy',
      'Alembic',
      'PostgreSQL',
      'React',
      'TypeScript',
      'Docker',
    ],
    problem: {
      'pt-br':
        'Acompanhar vagas em várias fontes e adaptar currículos sem inventar fatos ou perder o controle das etapas exige um fluxo estruturado.',
      en: 'Tracking openings across multiple sources and tailoring resumes without factual drift requires a structured pipeline and strict human review.',
    },
    solution: {
      'pt-br':
        'Monólito modular multiusuário em desenvolvimento com Python/FastAPI, SQLAlchemy 2.0, Alembic e PostgreSQL no backend e React + TypeScript no frontend, exigindo confirmação humana antes de qualquer uso de dados do perfil.',
      en: 'Multi-user modular monolith under active development with Python/FastAPI, SQLAlchemy 2.0, Alembic, and PostgreSQL on the backend and React + TypeScript on the frontend, enforcing human confirmation before any profile fact is used.',
    },
    role: {
      'pt-br':
        'Arquitetura de dados multiusuário, migrações Alembic, API FastAPI, pipeline de candidaturas e interface web.',
      en: 'Multi-user data architecture, Alembic migrations, FastAPI endpoints, application pipeline, and web UI.',
    },
    features: {
      'pt-br': [
        'Fonte única de verdade do perfil profissional com estados de validação humana',
        'Pipeline de acompanhamento de candidaturas e organização por etapas',
        'Ambiente Docker Compose com PostgreSQL, API FastAPI e frontend Nginx',
      ],
      en: [
        'Single source of truth for profile facts with human validation states',
        'Stage-based job application tracking pipeline',
        'Docker Compose stack with PostgreSQL, FastAPI API, and Nginx frontend',
      ],
    },
    roadmap: {
      implemented: {
        'pt-br': [
          'Backend multiusuário em FastAPI + SQLAlchemy 2.0 + Alembic + PostgreSQL',
          'Pipeline de gestão de candidaturas e interface React + TypeScript',
        ],
        en: [
          'Multi-user backend in FastAPI + SQLAlchemy 2.0 + Alembic + PostgreSQL',
          'Application tracking pipeline and React + TypeScript frontend',
        ],
      },
      inProgress: {
        'pt-br': [
          'Conectores de fontes públicas de vagas e classificação de oportunidades',
        ],
        en: [
          'Public job-source connectors and opportunity classification',
        ],
      },
      planned: {
        'pt-br': [
          'Análise assistida de compatibilidade e preparação supervisionada de propostas',
        ],
        en: [
          'Assisted fit scoring and human-supervised proposal drafting',
        ],
      },
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getLocalizedText(text: LocalizedText, locale: Locale): string {
  return text[locale];
}
