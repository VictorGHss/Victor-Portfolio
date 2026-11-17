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
        'Plataforma integrada de operações, automações de atendimento, controle de acesso físico e gestão ITSM.',
      en: 'Integrated operations platform for messaging automation, physical access control, financial sync, and ITSM governance.',
    },
    status: 'used-in-production',
    priority: 1,
    featured: true,
    isPrivateCore: true,
    repoUrl: 'https://github.com/VictorGHss/CTRLS-ITSM-SHOWCASE',
    stack: [
      'Java 21',
      'Spring Boot 3',
      'Hexagonal Architecture',
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
      'GerAcesso / Control iD',
      'Discord JDA',
    ],
    problem: {
      'pt-br':
        'Operações com alto volume de atendimentos dependiam de confirmações manuais no WhatsApp, controle de acesso físico desconectado da agenda, conciliação financeira manual e chamados de TI sem rastreabilidade ou SLA estruturado.',
      en: 'High-volume operations relied on manual WhatsApp confirmations, physical turnstile access disconnected from scheduling, manual financial reconciliation, and IT support requests without SLA tracking.',
    },
    solution: {
      'pt-br':
        'Evoluído a partir do protótipo interno CTRLS Hub, o CTRLS ITSM foi construído como produto de software modular (arquitetura hexagonal) para orquestrar automações via WhatsApp, emissão de credenciais QR Code para catracas, conciliação financeira com MFA/TOTP, gestão de chamados, CMDB, estoque FIFO e alertas no Discord. O sistema operou em ambiente real em ciclo já encerrado (com remoção dos dados após a saída) e é estruturado para implantação e licenciamento white-label.',
      en: 'Evolved from an earlier internal prototype (CTRLS Hub), CTRLS ITSM was engineered as a modular software product using Hexagonal Architecture to orchestrate WhatsApp automation, QR Code turnstile credentials, financial reconciliation with MFA/TOTP, ITSM ticketing, CMDB, FIFO inventory, and Discord alerts. It ran in real operations during a completed lifecycle (with data removed upon exit) and is structured for white-label deployment.',
    },
    role: {
      'pt-br':
        'Autor e desenvolvedor principal: arquitetura backend em Java 21 / Spring Boot 3, implementação das integrações externas (Feegow, Take Blip, Conta Azul V2, GerAcesso e Discord JDA), motor de agendamentos/automações no WhatsApp, segurança (JWT, MFA/TOTP, criptografia e auditoria) e painéis operacionais em React.',
      en: 'Author and lead developer: backend architecture in Java 21 / Spring Boot 3, external integrations (Feegow, Take Blip, Conta Azul V2, GerAcesso, Discord JDA), WhatsApp automation and scheduling engine, security (JWT, MFA/TOTP, encryption, audit trail), and React operational dashboards.',
    },
    features: {
      'pt-br': [
        'Atendimento automatizado e motor de agendamentos via WhatsApp com Take Blip e Feegow',
        'Confirmações, lembretes, encaminhamento para filas específicas e fluxos pós-atendimento com direcionamento para avaliações',
        'Controle de acesso físico por QR Code integrado a catracas Control iD / GerAcesso',
        'Integração financeira com Conta Azul V2 e emissão automatizada de recibos',
        'Gestão de chamados ITSM, CMDB patrimonial e controle de estoque com dedução FIFO',
        'Alertas operacionais e comandos interativos via Discord (JDA)',
        'Autenticação com MFA/TOTP, criptografia e trilha de auditoria',
      ],
      en: [
        'Automated WhatsApp service and scheduling engine integrated with Take Blip and Feegow',
        'Appointment confirmations, reminders, queue routing, and post-visit review follow-ups',
        'Physical access control via dynamic QR Codes integrated with Control iD / GerAcesso turnstiles',
        'Financial integration with Conta Azul V2 and automated PDF receipt generation',
        'ITSM ticketing, asset CMDB, and FIFO consumables inventory management',
        'Operational alerts and interactive slash commands via Discord (JDA)',
        'MFA/TOTP protection, encryption, and immutable audit trail',
      ],
    },
    architecture: {
      'pt-br': [
        'Backend Java 21 + Spring Boot 3 organizado em Arquitetura Hexagonal (Ports & Adapters)',
        'PostgreSQL para persistência transacional e Redis para rate limiting e cache rápido',
        'Observabilidade com métricas Prometheus e dashboards Grafana em containers Docker',
        'Fluxo integrado: Feegow (agenda) ↔ Motor Java ↔ Take Blip (WhatsApp) + GerAcesso (catracas) + Conta Azul V2 + Discord JDA',
      ],
      en: [
        'Java 21 + Spring Boot 3 backend structured with Hexagonal Architecture (Ports & Adapters)',
        'PostgreSQL for transactional persistence and Redis for rate limiting and fast caching',
        'Observability via Prometheus metrics and Grafana dashboards running in Docker',
        'Integrated flow: Feegow (schedules) ↔ Java Engine ↔ Take Blip (WhatsApp) + GerAcesso (turnstiles) + Conta Azul V2 + Discord JDA',
      ],
    },
    challenges: {
      'pt-br': [
        'Lidar com picos de envio de mensagens (quase 500 disparos em menos de 1 minuto) sem exceder limites das APIs externas, utilizando controle de taxa em Redis',
        'Garantir sincronização confiável entre confirmações de agenda e liberação física em catracas com tolerância de horário',
        'Proteger rotas financeiras e cofre de credenciais com MFA/TOTP obrigatório e auditoria completa',
      ],
      en: [
        'Handling outbound messaging bursts (nearly 500 dispatches in under a minute) without breaching external API limits using Redis rate limiting',
        'Ensuring reliable sync between schedule confirmations and physical turnstile access with time-window tolerances',
        'Securing financial workflows and credential storage with mandatory MFA/TOTP and full audit logging',
      ],
    },
    metrics: [
      {
        value: '11.000+',
        label: {
          'pt-br': 'Mensagens automatizadas em 2 meses (picos de ~500 em <1 min)',
          en: 'Automated messages in 2 months (bursts of ~500 in <1 min)',
        },
      },
      {
        value: '1.800+',
        label: {
          'pt-br': 'Credenciais digitais QR Code geradas em 2 semanas',
          en: 'Digital QR Code credentials generated in 2 weeks',
        },
      },
      {
        value: '96,3%',
        label: {
          'pt-br': 'Taxa de resolução no dashboard (235 de 244 tickets)',
          en: 'Ticket resolution rate on dashboard (235 of 244 tickets)',
        },
      },
      {
        value: '3,3 → 3,8',
        label: {
          'pt-br': 'Nota pública no Google durante o período documentado',
          en: 'Public Google rating during the documented operational period',
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
    slug: 'chamados-chesiquimica',
    name: {
      'pt-br': 'Sistema de Chamados — Chesiquimica',
      en: 'Ticketing System — Chesiquimica',
    },
    tagline: {
      'pt-br':
        'Primeira solução real de chamados internos desenvolvida em estágio e mantida em uso na organização.',
      en: 'First real internal ticketing solution built during an internship and still in active use.',
    },
    status: 'used-in-production',
    priority: 2,
    featured: true,
    repoUrl: 'https://github.com/VictorGHss/ChamadosChesiquimica',
    stack: ['HTML', 'CSS', 'JavaScript', 'SheetMonkey', 'Google Sheets', 'GitHub Pages'],
    problem: {
      'pt-br':
        'Solicitações internas de TI e reposição de suprimentos (como toners) eram feitas de maneira informal, sem registro padronizado em planilha.',
      en: 'Internal IT and supply requests (such as printer toners) were handled informally without a standardized tracking sheet.',
    },
    solution: {
      'pt-br':
        'Aplicação web leve hospedada no GitHub Pages com formulário estruturado (nome, e-mail, assunto e descrição) integrado ao Google Sheets via SheetMonkey. Desenvolvido antes do CTRLS ITSM, marca o ponto de partida prático da evolução das soluções de chamados.',
      en: 'Lightweight web application hosted on GitHub Pages with a structured request form (name, email, subject, description) routed automatically to Google Sheets via SheetMonkey. Built prior to CTRLS ITSM, it marks the practical starting point of my ticketing systems.',
    },
    role: {
      'pt-br':
        'Desenvolvimento completo durante estágio em TI, publicação via GitHub Pages e entrega para uso contínuo pelos colaboradores.',
      en: 'End-to-end development during an IT internship, GitHub Pages deployment, and delivery for ongoing internal use.',
    },
    features: {
      'pt-br': [
        'Formulário web objetivo para abertura de solicitações internas',
        'Captura padronizada de nome, e-mail, assunto e descrição',
        'Envio automático para Google Sheets via integração SheetMonkey',
        'Hospedagem estática simples e sem custo operacional no GitHub Pages',
      ],
      en: [
        'Focused web form for submitting internal support requests',
        'Standardized capture of name, email, subject, and description',
        'Automatic submission to Google Sheets via SheetMonkey integration',
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
    priority: 3,
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
        'Avaliações online convencionais sofrem com falta de contexto geográfico e baixa confiabilidade sobre a presença real do avaliador.',
      en: 'Conventional online reviews often lack geographic context and reliable proof that the reviewer actually visited the place.',
    },
    solution: {
      'pt-br':
        'Produto autoral em desenvolvimento combinando backend geoespacial (Spring Boot + PostgreSQL/PostGIS), cache em Redis, armazenamento de mídia em SeaweedFS, app mobile em Flutter e painel administrativo em React + TypeScript.',
      en: 'In-development product combining a geospatial backend (Spring Boot + PostgreSQL/PostGIS), Redis caching, SeaweedFS object storage, a Flutter mobile client, and a React + TypeScript admin panel.',
    },
    role: {
      'pt-br':
        'Concepção do produto, modelagem geoespacial com PostGIS, arquitetura do monorepo modular, API backend e interfaces web/mobile.',
      en: 'Product design, geospatial modeling with PostGIS, modular monorepo architecture, backend API, and web/mobile clients.',
    },
    features: {
      'pt-br': [
        'Avaliações multi-alvo para locais, produtos e serviços',
        'Check-in físico verificado com consultas geoespaciais PostGIS',
        'Scanner de códigos de barras e QR Codes no cliente mobile',
        'Feed contextual e arquitetura orientada à privacidade por design',
        'Aplicação mobile em Flutter e painel administrativo em React/TypeScript',
      ],
      en: [
        'Multi-target reviews for places, products, and services',
        'Verified physical check-ins powered by PostGIS geospatial queries',
        'Barcode and QR Code scanner in the mobile client',
        'Contextual feed and privacy-by-design data modeling',
        'Flutter mobile app and React/TypeScript administration panel',
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
    priority: 4,
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
        'Acompanhar vagas em múltiplas fontes e adaptar currículos/propostas sem perder consistência factual exige organização e validação rigorosa.',
      en: 'Tracking openings across multiple sources and tailoring resumes/proposals without factual drift requires structured pipelines and strict validation.',
    },
    solution: {
      'pt-br':
        'Monólito modular multiusuário em desenvolvimento com FastAPI, SQLAlchemy 2.0, Alembic e PostgreSQL no backend e React + TypeScript no frontend, impondo validação humana obrigatória sobre fatos do perfil.',
      en: 'Multi-user modular monolith under active development with FastAPI, SQLAlchemy 2.0, Alembic, and PostgreSQL on the backend and React + TypeScript on the frontend, enforcing mandatory human validation on profile facts.',
    },
    role: {
      'pt-br':
        'Arquitetura de dados multiusuário, conectores de fontes públicas, pipeline de candidaturas e interface web.',
      en: 'Multi-user data architecture, public source connectors, application pipeline, and web UI.',
    },
    features: {
      'pt-br': [
        'Descoberta e classificação de oportunidades via conectores de fontes públicas',
        'Análise de compatibilidade com perfil profissional validado',
        'Pipeline de acompanhamento e organização de candidaturas',
        'Preparação de currículos e propostas com validação humana obrigatória',
      ],
      en: [
        'Opportunity discovery and classification via public source connectors',
        'Compatibility analysis against a validated professional profile',
        'Application tracking and organization pipeline',
        'Resume and proposal drafting with mandatory human approval',
      ],
    },
  },
  {
    slug: 'ctrls-forms',
    name: {
      'pt-br': 'CTRLS Forms',
      en: 'CTRLS Forms',
    },
    tagline: {
      'pt-br':
        'Aplicação web de formulários clínicos estruturados com suporte multi-clínica e separação entre API e frontend.',
      en: 'Multi-clinic structured clinical forms web application with decoupled API and frontend.',
    },
    status: 'completed',
    priority: 5,
    featured: false,
    repoUrl: 'https://github.com/VictorGHss/CTRLS-FormsV1',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'Vite', 'Nginx'],
    problem: {
      'pt-br':
        'Necessidade de padronizar formulários de preenchimento público e interno em contexto multi-clínica com isolamento por unidade.',
      en: 'Need to standardize public and internal structured forms in a multi-clinic context with tenant isolation.',
    },
    solution: {
      'pt-br':
        'Aplicação full-stack com API REST em Java/Spring Boot e PostgreSQL (autenticação JWT e contexto por cabeçalho X-Clinic-ID) servida com frontend React/Vite atrás de proxy reverso Nginx.',
      en: 'Full-stack application pairing a Java/Spring Boot + PostgreSQL REST API (JWT auth and X-Clinic-ID tenant context) with a React/Vite frontend behind an Nginx reverse proxy.',
    },
    role: {
      'pt-br':
        'Desenvolvimento do backend Spring Boot, regras de renderização estruturada de formulários, integração com frontend React e empacotamento Docker.',
      en: 'Spring Boot backend development, structured form rendering rules, React frontend integration, and Docker packaging.',
    },
    features: {
      'pt-br': [
        'Contexto multi-clínica isolado por identificador de unidade (X-Clinic-ID)',
        'Renderização estruturada de formulários com separação entre seções e campos de entrada',
        'Rota pública de preenchimento e endpoints autenticados via JWT',
        'Arquitetura conteinerizada com Nginx atuando como proxy reverso para /api/',
      ],
      en: [
        'Multi-clinic tenant context isolated via unit header (X-Clinic-ID)',
        'Structured form rendering separating section headers from input payloads',
        'Public fill route paired with JWT-authenticated management endpoints',
        'Containerized architecture with Nginx reverse-proxying /api/',
      ],
    },
  },
  {
    slug: 'digital-professional-profiles',
    name: {
      'pt-br': 'Digital Professional Profiles',
      en: 'Digital Professional Profiles',
    },
    tagline: {
      'pt-br':
        'Páginas individuais de apresentação profissional com especialidades, contatos diretos e links de agendamento.',
      en: 'Individual professional profile pages featuring bio, specialties, direct contacts, and scheduling links.',
    },
    status: 'completed',
    priority: 6,
    featured: false,
    secondary: true,
    stack: ['HTML', 'CSS', 'JavaScript'],
    problem: {
      'pt-br':
        'Profissionais precisavam de páginas individuais leves e responsivas para centralizar informações de atendimento, especialidades e contato rápido.',
      en: 'Professionals needed lightweight, responsive individual pages to centralize their bio, specialties, and direct scheduling links.',
    },
    solution: {
      'pt-br':
        'Implementação de páginas web estáticas focadas em leitura rápida no celular, exibindo apresentação profissional, especialidades, canais de contato e redirecionamento para agendamento.',
      en: 'Static web pages optimized for fast mobile reading, presenting professional background, specialties, contact channels, and scheduling links.',
    },
    role: {
      'pt-br':
        'Estruturação front-end em HTML, CSS e JavaScript com foco em clareza visual e carregamento rápido.',
      en: 'Front-end implementation in HTML, CSS, and JavaScript focused on visual clarity and fast loading.',
    },
    features: {
      'pt-br': [
        'Páginas individuais responsivas para apresentação profissional',
        'Exibição clara de especialidades e informações de atendimento',
        'Links diretos para contato e agendamento externo',
      ],
      en: [
        'Responsive individual pages for professional presentation',
        'Clear display of specialties and practice details',
        'Direct links to contact channels and external scheduling',
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
