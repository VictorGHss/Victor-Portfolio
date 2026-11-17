import type { Locale } from '../i18n/config';

export type ProjectStatus = 'used-in-production' | 'in-development' | 'completed';

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
        'Plataforma integrada de operações, automações de atendimento via WhatsApp, controle de acesso físico e gestão ITSM.',
      en: 'Integrated operations platform for WhatsApp automation, physical access control, financial sync, and ITSM governance.',
    },
    status: 'used-in-production',
    timelineContext: {
      'pt-br': 'Iniciado antes da efetivação como Técnico de TI • Ciclo operacional encerrado',
      en: 'Started prior to full-time IT Technician promotion • Operational cycle concluded',
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
        'Desenvolvido do zero com backend em Java 21 / Spring Boot 3 e Arquitetura Hexagonal, conectando ERP de agenda, mensageria assíncrona no WhatsApp, controle de acesso físico por QR Code, conciliação financeira com MFA/TOTP e gestão ITSM/CMDB/estoque FIFO. O sistema teve ciclo de uso em ambiente real já encerrado, com remoção dos dados e do ambiente operacional após o encerramento.',
      en: 'Engineered from scratch with a Java 21 / Spring Boot 3 backend using Hexagonal Architecture, connecting scheduling ERP APIs, asynchronous WhatsApp messaging, QR Code turnstile access, MFA-protected financial reconciliation, and ITSM/CMDB/FIFO inventory modules. Its real-world operational cycle has concluded, with data and environment subsequently decommissioned.',
    },
    role: {
      'pt-br':
        'Autor e desenvolvedor principal: concepção da arquitetura em Java 21 / Spring Boot 3, integrações REST e webhooks assíncronos (Feegow, Blip, Conta Azul V2, gerAcesso e Discord), controle de taxa com Redis, segurança (JWT, MFA/TOTP, auditoria) e painéis em React.',
      en: 'Author and lead developer: backend architecture in Java 21 / Spring Boot 3, REST and asynchronous webhook integrations (Feegow, Blip, Conta Azul V2, gerAcesso, Discord), Redis rate limiting, security (JWT, MFA/TOTP, audit trail), and React operational dashboards.',
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
          'pt-br': 'Mensagens automatizadas processadas via WhatsApp',
          en: 'Automated WhatsApp messages processed',
        },
      },
      {
        value: '1.700+',
        label: {
          'pt-br': 'QR Codes temporários gerados para acesso em portaria',
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
          'pt-br': 'Painel executivo de chamados ITSM e indicadores operacionais.',
          en: 'Executive ITSM ticketing dashboard and operational metrics.',
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
        'Aplicação full stack multi-tenant de formulários clínicos estruturados e anamnese digital com geração de PDF.',
      en: 'Multi-tenant full-stack application for structured clinical forms and digital intake with automated PDF reporting.',
    },
    status: 'completed',
    timelineContext: {
      'pt-br': 'Desenvolvimento iniciado antes da efetivação como Técnico de TI',
      en: 'Development started prior to full-time IT Technician promotion',
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
        'Plataforma full stack com backend em Spring Boot 3, PostgreSQL versionado via Flyway, autenticação JWT com controle de acesso RBAC, construtor dinâmico baseado em JSON Schema e geração automática de relatórios em PDF.',
      en: 'Full-stack platform with Spring Boot 3, Flyway-versioned PostgreSQL, JWT authentication with RBAC access control, dynamic JSON Schema form builder, and automated PDF report generation.',
    },
    role: {
      'pt-br':
        'Desenvolvimento da API REST multi-tenant, modelagem de banco com Flyway, regras de renderização dinâmica e integração com frontend React/TypeScript.',
      en: 'Multi-tenant REST API development, Flyway schema versioning, dynamic form rendering rules, and React/TypeScript frontend integration.',
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
        'Aplicação web de vitrine profissional e páginas individuais com QR Codes automáticos e avaliações integradas.',
      en: 'Web portal and individual professional profile pages with automated QR Codes and live review integration.',
    },
    status: 'completed',
    timelineContext: {
      'pt-br': 'Apresentação neutra sem identidade comercial da organização',
      en: 'Neutral presentation without organization branding',
    },
    priority: 3,
    featured: false,
    secondary: true,
    stack: ['Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages', 'Google API'],
    problem: {
      'pt-br':
        'Centralizar a apresentação de especialistas, especialidades, contatos e avaliações públicas em páginas rápidas e acessíveis via dispositivos móveis.',
      en: 'Centralize specialist bios, specialties, contact links, and public reviews in fast, mobile-first pages.',
    },
    solution: {
      'pt-br':
        'Aplicação web desenvolvida com Next.js (App Router), TypeScript e Tailwind CSS, hospedada na Cloudflare Pages em arquitetura Edge, com geração automática de QR Codes e exibição de avaliações via Google API.',
      en: 'Web application built with Next.js (App Router), TypeScript, and Tailwind CSS, deployed on Cloudflare Pages Edge with automated QR Code generation and Google API review integration.',
    },
    role: {
      'pt-br':
        'Desenvolvimento front-end responsivo, integração com API de avaliações e publicação na Cloudflare Pages.',
      en: 'Responsive front-end development, review API integration, and Cloudflare Pages deployment.',
    },
    features: {
      'pt-br': [
        'Páginas individuais responsivas para apresentação profissional e especialidades',
        'Geração automática de QR Codes para acesso rápido em ambiente presencial',
        'Consumo da API do Google para exibição de avaliações',
      ],
      en: [
        'Responsive individual pages for professional bios and specialties',
        'Automated QR Code generation for quick on-site mobile access',
        'Google API integration for displaying public reviews',
      ],
    },
  },
  {
    slug: 'chamados-chesiquimica',
    name: {
      'pt-br': 'Sistema de Chamados — Chesiquímica',
      en: 'Ticketing System — Chesiquímica',
    },
    tagline: {
      'pt-br':
        'Primeira solução real de abertura de chamados internos desenvolvida durante o estágio em TI.',
      en: 'First real internal ticketing solution built during my IT internship.',
    },
    status: 'used-in-production',
    timelineContext: {
      'pt-br': 'Desenvolvido durante o estágio em TI na Chesiquímica',
      en: 'Built during the IT internship at Chesiquímica',
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
        'Formulário web direto ao ponto hospedado no GitHub Pages, integrado ao Google Sheets via SheetMonkey para registro automático de solicitações.',
      en: 'Focused web request form hosted on GitHub Pages and connected to Google Sheets via SheetMonkey for automatic ticket logging.',
    },
    role: {
      'pt-br':
        'Desenvolvimento completo durante o estágio de suporte de TI e implantação para uso dos colaboradores.',
      en: 'End-to-end development during the IT support internship and rollout for internal staff.',
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
        'Rede social geográfica de avaliações com check-in físico verificado, scanners inteligentes e feeds contextuais.',
      en: 'Geo-social review network with verified physical check-ins, barcode/QR scanners, and contextual feeds.',
    },
    status: 'in-development',
    timelineContext: {
      'pt-br': 'Projeto autoral em desenvolvimento ativo',
      en: 'Personal product under active development',
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
        'Produto em construção com backend geoespacial (Spring Boot + PostGIS), cache em Redis, armazenamento de mídia em SeaweedFS, app mobile em Flutter e painel administrativo em React/TypeScript.',
      en: 'In-development product combining a geospatial backend (Spring Boot + PostGIS), Redis caching, SeaweedFS object storage, a Flutter mobile client, and a React/TypeScript admin panel.',
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
        'Plataforma de descoberta, análise de compatibilidade e preparação supervisionada de candidaturas.',
      en: 'Platform for job discovery, compatibility analysis, and human-supervised application preparation.',
    },
    status: 'in-development',
    timelineContext: {
      'pt-br': 'Projeto autoral em desenvolvimento ativo',
      en: 'Personal product under active development',
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
