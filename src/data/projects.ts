import type { Locale } from '../i18n/config';

export type ProjectStatus =
  | 'concluded-operation'
  | 'collaborative-in-use'
  | 'authorial-completed'
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
  liveUrl?: string;
  liveLabel?: LocalizedText;
  stack: string[];
  problem: LocalizedText;
  solution: LocalizedText;
  role: LocalizedText;
  features: LocalizedList;
  architecture?: LocalizedList;
  challenges?: LocalizedList;
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
        'Projeto autoral de operações integradas, automações via WhatsApp, controle de acesso físico e gestão ITSM.',
      en: 'Authorial platform for integrated operations, WhatsApp automation, physical access control, financial sync, and ITSM governance.',
    },
    status: 'concluded-operation',
    timelineContext: {
      'pt-br': 'Projeto autoral • Utilizado em ambiente operacional real por aproximadamente 3 meses • Ciclo encerrado',
      en: 'Authorial project • Used in real operations for ~3 months • Cycle concluded',
    },
    priority: 1,
    featured: true,
    isPrivateCore: true,
    repoUrl: 'https://github.com/VictorGHss/CTRLS-ITSM-SHOWCASE',
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
      'REST APIs & Webhooks',
      'Take Blip',
      'Feegow',
      'Conta Azul V2',
      'GerAcesso',
      'Discord JDA',
    ],
    problem: {
      'pt-br':
        'Operações com alto fluxo de atendimentos enfrentavam confirmações manuais no WhatsApp, filas na recepção por falta de autoatendimento na portaria, conciliação financeira manual e chamados internos de TI sem rastreabilidade.',
      en: 'High-volume operations faced manual WhatsApp confirmations, reception bottlenecks without self-service turnstile access, manual financial reconciliation, and untracked internal IT support requests.',
    },
    solution: {
      'pt-br':
        'Iniciativa própria concebida e desenvolvida pelo autor a partir do período de estágio em TI (2024), com backend em Java 21 / Spring Boot 3 e Arquitetura Hexagonal. Durante a passagem pela operação, o sistema foi utilizado em ambiente real por aproximadamente três meses. Atualmente não está em uso nem em produção: foi desativado pelo autor, com encerramento do ciclo operacional e remoção completa do ambiente e dos dados.',
      en: 'Authorial initiative conceived and built by the author starting during the 2024 IT internship period, using Java 21 / Spring Boot 3 and Hexagonal Architecture. It was used in real operations for approximately three months; it is no longer active or in production, having been deactivated by the author with its environment and operational data removed.',
    },
    role: {
      'pt-br':
        'Autor e desenvolvedor principal por iniciativa própria: arquitetura em Java 21 / Spring Boot 3, integrações REST e webhooks assíncronos (Feegow, Blip, Conta Azul V2, gerAcesso e Discord), controle de taxa com Redis, segurança (JWT, MFA/TOTP, auditoria) e painéis em React.',
      en: 'Author and lead developer by own initiative: backend architecture in Java 21 / Spring Boot 3, REST and asynchronous webhook integrations (Feegow, Blip, Conta Azul V2, gerAcesso, Discord), Redis rate limiting, security (JWT, MFA/TOTP, audit trail), and React dashboards.',
    },
    features: {
      'pt-br': [
        'Confirmações e lembretes preventivos via WhatsApp integrados ao ERP Feegow e Take Blip',
        'Autoatendimento para portaria integrado ao gerAcesso com QR Codes temporários',
        'Rotina automática de captação de avaliações pós-atendimento',
        'Gestão interna de TI (ITSM), inventário de equipamentos (CMDB), consumíveis FIFO e triagem integrada ao Discord',
        'Conciliação financeira com Conta Azul V2 protegida por validação 2FA/TOTP',
      ],
      en: [
        'Automated WhatsApp confirmations and preventive reminders integrated with Feegow ERP and Take Blip',
        'Self-service reception access integrated with gerAcesso via temporary QR Codes',
        'Automated post-visit review follow-up workflow',
        'Internal ITSM ticketing, CMDB asset tracking, FIFO consumables control, and Discord webhook triage',
        'Financial reconciliation with Conta Azul V2 protected by 2FA/TOTP validation',
      ],
    },
    architecture: {
      'pt-br': [
        'Backend Java 21 + Spring Boot 3 estruturado em Arquitetura Hexagonal (Ports & Adapters)',
        'PostgreSQL para persistência transacional e Redis para rate limiting e cache',
        'Observabilidade com Prometheus e Grafana em ambiente conteinerizado Docker',
        'Orquestração assíncrona entre ERP, mensageria WhatsApp, catracas físicas e Discord',
      ],
      en: [
        'Java 21 + Spring Boot 3 backend structured with Hexagonal Architecture (Ports & Adapters)',
        'PostgreSQL for transactional persistence and Redis for rate limiting and caching',
        'Observability via Prometheus and Grafana running in Docker containers',
        'Asynchronous orchestration across ERP, WhatsApp messaging, physical turnstiles, and Discord',
      ],
    },
    challenges: {
      'pt-br': [
        'Controlar picos de disparo assíncrono no WhatsApp sem violar limites das APIs externas usando Redis Rate Limiting',
        'Sincronizar liberações temporárias de QR Code nas catracas físicas com janelas de tolerância de horário',
        'Proteger rotas financeiras e dados sensíveis com MFA/TOTP obrigatório e trilha de auditoria',
      ],
      en: [
        'Managing outbound WhatsApp dispatch bursts without exceeding external API quotas using Redis rate limiting',
        'Synchronizing temporary QR Code turnstile releases with scheduling time-window tolerances',
        'Securing financial workflows and sensitive records with mandatory MFA/TOTP and audit trails',
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
          'pt-br': 'Evolução da pontuação pública no Google (30 dias)',
          en: 'Public Google rating increase over 30 days',
        },
      },
      {
        value: '96,3%',
        label: {
          'pt-br': 'Taxa de resolução no dashboard do showcase (235 / 244 tickets)',
          en: 'Resolution rate on showcase dashboard (235 / 244 tickets)',
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
          'pt-br': 'Gestão de suprimentos com controle FIFO e alertas de estoque mínimo.',
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
          'pt-br': 'Validação obrigatória de 2FA/TOTP para operações sensíveis.',
          en: 'Mandatory 2FA/TOTP verification for sensitive financial workflows.',
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
        'Projeto autoral full stack multi-tenant de formulários clínicos estruturados e anamnese digital com geração de PDF.',
      en: 'Authorial multi-tenant full-stack application for structured clinical forms and digital intake with PDF reporting.',
    },
    status: 'authorial-completed',
    timelineContext: {
      'pt-br': 'Projeto autoral • Desenvolvido por iniciativa própria a partir do estágio em TI (2024)',
      en: 'Authorial project • Developed by own initiative starting during the 2024 IT internship',
    },
    priority: 2,
    featured: true,
    repoUrl: 'https://github.com/VictorGHss/CTRLS-FormsV1',
    stack: ['Spring Boot 3', 'Java', 'React', 'TypeScript', 'PostgreSQL', 'Flyway', 'JWT & RBAC', 'Nginx'],
    problem: {
      'pt-br':
        'Necessidade de digitalizar formulários de anamnese e triagem em contexto multi-unidade, evitando preenchimento em papel e garantindo separação estrita de dados por unidade.',
      en: 'Need to digitize clinical intake and triage forms across multiple units without paper workflows while enforcing strict per-tenant data isolation.',
    },
    solution: {
      'pt-br':
        'Iniciativa própria concebida e desenvolvida com backend em Spring Boot 3, PostgreSQL versionado via Flyway, autenticação JWT com controle de acesso RBAC, construtor dinâmico baseado em JSON Schema e geração automática de relatórios em PDF.',
      en: 'Authorial initiative built with Spring Boot 3, Flyway-versioned PostgreSQL, JWT authentication with RBAC access control, dynamic JSON Schema form builder, and automated PDF report generation.',
    },
    role: {
      'pt-br':
        'Concepção e desenvolvimento da API REST multi-tenant, modelagem de banco com Flyway, regras de renderização dinâmica e integração com frontend React/TypeScript.',
      en: 'Design and development of the multi-tenant REST API, Flyway schema versioning, dynamic form rendering rules, and React/TypeScript frontend integration.',
    },
    features: {
      'pt-br': [
        'Isolamento multi-tenant com autenticação JWT e controle de acesso RBAC',
        'Construtor dinâmico de formulários orientado a JSON Schema',
        'Geração automática de relatórios em PDF com upload em nuvem',
        'Versionamento determinístico de schema com Flyway e proxy Nginx',
      ],
      en: [
        'Multi-tenant isolation with JWT authentication and RBAC access control',
        'Dynamic form builder driven by JSON Schema',
        'Automated PDF report generation with cloud upload',
        'Deterministic database migrations with Flyway and Nginx reverse proxy',
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
        'Projeto autoral para vitrine de especialistas e cartões profissionais com QR Code e páginas individuais.',
      en: 'Authorial web portal for specialist showcases and QR Code professional cards with individual profile pages.',
    },
    status: 'authorial-completed',
    timelineContext: {
      'pt-br': 'Projeto autoral • Páginas individuais e cartões profissionais com QR Code',
      en: 'Authorial project • Individual specialist pages and QR Code cards',
    },
    priority: 3,
    featured: false,
    secondary: true,
    liveUrl: 'https://inovare.doctors.ctrls.dev.br/m/alisson-fucio',
    liveLabel: {
      'pt-br': 'Abrir Página de Exemplo (Dr. Alisson Fucio)',
      en: 'Open Live Specialist Page (Dr. Alisson Fucio)',
    },
    stack: ['Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages', 'Google API'],
    problem: {
      'pt-br':
        'Centralizar a apresentação de especialistas, especialidades, contatos e avaliações públicas em páginas rápidas e acessíveis por QR Code em cartões físicos.',
      en: 'Centralize specialist bios, specialties, contact links, and public reviews in fast mobile-first pages linked from physical QR Code cards.',
    },
    solution: {
      'pt-br':
        'Iniciativa própria desenvolvida com Next.js (App Router), TypeScript e Tailwind CSS, hospedada na Cloudflare Pages em arquitetura Edge, com geração automática de QR Codes para cartões profissionais e consumo da Google API para exibição de avaliações.',
      en: 'Authorial initiative built with Next.js (App Router), TypeScript, and Tailwind CSS, deployed on Cloudflare Pages Edge with automated QR Code generation for professional cards and Google API review integration.',
    },
    role: {
      'pt-br':
        'Desenvolvimento completo da aplicação, geração de QR Codes, layout dos cartões de referência e publicação na Cloudflare Pages.',
      en: 'Full application development, QR Code generation, card layout integration, and Cloudflare Pages deployment.',
    },
    features: {
      'pt-br': [
        'Páginas individuais responsivas para apresentação profissional e especialidades',
        'Geração automática de QR Codes ligando o cartão impresso ao perfil digital',
        'Consumo da API do Google para exibição de avaliações',
      ],
      en: [
        'Responsive individual pages for professional bios and specialties',
        'Automated QR Code generation connecting printed cards to digital profiles',
        'Google API integration for displaying public reviews',
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
        'Iniciativa desenvolvida em colaboração com João Gabriel Anjos, supervisor durante o estágio na Chesiquimica.',
      en: 'Initiative developed in collaboration with João Gabriel Anjos, supervisor during the internship at Chesiquímica.',
    },
    status: 'collaborative-in-use',
    timelineContext: {
      'pt-br': 'Iniciativa desenvolvida em colaboração com João Gabriel Anjos, supervisor durante o estágio na Chesiquimica.',
      en: 'Initiative developed in collaboration with João Gabriel Anjos, supervisor during the internship at Chesiquímica.',
    },
    priority: 4,
    featured: true,
    repoUrl: 'https://github.com/VictorGHss/ChamadosChesiquimica',
    stack: ['HTML', 'CSS', 'JavaScript', 'SheetMonkey', 'Google Sheets', 'GitHub Pages'],
    problem: {
      'pt-br':
        'Solicitações internas de suporte e suprimentos (como toners) eram feitas informalmente, sem histórico centralizado.',
      en: 'Internal IT support and supply requests (such as printer toners) were handled informally without centralized tracking.',
    },
    solution: {
      'pt-br':
        'Formulário web objetivo hospedado no GitHub Pages e integrado ao Google Sheets via SheetMonkey para registro automático de solicitações, construído em colaboração com o supervisor João Gabriel Anjos.',
      en: 'Focused web request form hosted on GitHub Pages and connected to Google Sheets via SheetMonkey for automatic ticket logging, built in collaboration with supervisor João Gabriel Anjos.',
    },
    role: {
      'pt-br':
        'Desenvolvimento colaborativo durante o estágio de TI na Chesiquímica em conjunto com o supervisor João Gabriel Anjos.',
      en: 'Collaborative development during the IT internship at Chesiquímica alongside supervisor João Gabriel Anjos.',
    },
    features: {
      'pt-br': [
        'Abertura padronizada de chamados com nome, e-mail, assunto e descrição',
        'Envio automático para planilha Google Sheets via SheetMonkey',
        'Hospedagem estática gratuita e estável no GitHub Pages',
      ],
      en: [
        'Standardized ticket submission with name, email, subject, and description',
        'Automatic sync to Google Sheets via SheetMonkey',
        'Zero-maintenance static hosting on GitHub Pages',
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
        'Projeto autoral em desenvolvimento: rede social geográfica de avaliações com check-in físico verificado e feeds contextuais.',
      en: 'Authorial project in development: geo-social review network with verified physical check-ins and contextual feeds.',
    },
    status: 'in-development',
    timelineContext: {
      'pt-br': 'Projeto autoral • Em desenvolvimento ativo',
      en: 'Authorial project • Under active development',
    },
    priority: 5,
    featured: true,
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
        'Avaliações tradicionais carecem de contexto geográfico e verificação real de presença no local.',
      en: 'Conventional reviews lack geographic context and reliable proof of physical presence.',
    },
    solution: {
      'pt-br':
        'Produto autoral em construção com backend geoespacial (Spring Boot + PostGIS), cache em Redis, armazenamento de mídia em SeaweedFS, app mobile em Flutter e painel administrativo em React/TypeScript.',
      en: 'In-development authorial product combining a geospatial backend (Spring Boot + PostGIS), Redis caching, SeaweedFS object storage, a Flutter mobile client, and a React/TypeScript admin panel.',
    },
    role: {
      'pt-br':
        'Concepção do produto, modelagem geoespacial PostGIS, API backend e clientes web/mobile.',
      en: 'Product design, PostGIS geospatial modeling, backend API, and web/mobile clients.',
    },
    features: {
      'pt-br': [
        'Check-in físico verificado com consultas geoespaciais PostGIS',
        'Scanner de códigos de barras e QR Codes no aplicativo Flutter',
        'Feed contextual e privacidade por design',
      ],
      en: [
        'Verified physical check-ins powered by PostGIS geospatial queries',
        'Barcode and QR Code scanner in the Flutter app',
        'Contextual feed with privacy-by-design modeling',
      ],
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
        'Projeto autoral em desenvolvimento: plataforma de descoberta, análise de compatibilidade e gestão de candidaturas.',
      en: 'Authorial project in development: job discovery, compatibility analysis, and supervised application pipeline.',
    },
    status: 'in-development',
    timelineContext: {
      'pt-br': 'Projeto autoral • Em desenvolvimento ativo',
      en: 'Authorial project • Under active development',
    },
    priority: 6,
    featured: true,
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
        'Organizar vagas de múltiplas fontes e preparar candidaturas sem distorção factual exige pipeline estruturado e validação humana.',
      en: 'Managing openings across multiple sources and tailoring applications without factual drift requires structured pipelines and human approval.',
    },
    solution: {
      'pt-br':
        'Monólito modular multiusuário em desenvolvimento com FastAPI, SQLAlchemy 2.0, Alembic e PostgreSQL no backend e React + TypeScript no frontend.',
      en: 'Multi-user modular monolith under active development with FastAPI, SQLAlchemy 2.0, Alembic, and PostgreSQL on the backend and React + TypeScript on the frontend.',
    },
    role: {
      'pt-br':
        'Arquitetura de dados multiusuário, conectores de fontes públicas, pipeline de candidaturas e interface web.',
      en: 'Multi-user data architecture, public source connectors, application pipeline, and web UI.',
    },
    features: {
      'pt-br': [
        'Descoberta e classificação de oportunidades em fontes públicas',
        'Análise de compatibilidade e pipeline de acompanhamento',
        'Preparação de currículos e propostas com validação humana obrigatória',
      ],
      en: [
        'Opportunity discovery and classification from public sources',
        'Compatibility analysis and application tracking pipeline',
        'Resume and proposal drafting with mandatory human review',
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getLocalizedText(text: LocalizedText, locale: Locale): string {
  return text[locale];
}
