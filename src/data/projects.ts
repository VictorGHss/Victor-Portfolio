import type { Locale } from '../i18n/config';

export type ProjectStatus =
  | 'concluded-operation'
  | 'collaborative'
  | 'completed'
  | 'in-development'
  | 'concept-planning';

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
  implemented?: LocalizedList;
  inProgress?: LocalizedList;
  planned?: LocalizedList;
}

export interface ProjectVisionScope {
  initialCore: LocalizedList;
  futureExpansion: LocalizedList;
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
  differentiators?: LocalizedList;
  visualIdentity?: LocalizedText;
  visionScope?: ProjectVisionScope;
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
        'Plataforma em Java 21 e Spring Boot que integrou confirmações no WhatsApp, acesso por QR Code em catracas, financeiro e gestão interna de TI.',
      en: 'Java 21 & Spring Boot platform integrating WhatsApp confirmations, QR Code turnstile access, financial sync, and internal IT management.',
    },
    status: 'concluded-operation',
    timelineContext: {
      'pt-br': 'Projeto independente • ~3 meses em operação real • Ciclo encerrado e desativado',
      en: 'Independent project • ~3 months in real operations • Cycle concluded & deactivated',
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
      'Java 21 (Virtual Threads)',
      'Spring Boot 3',
      'Spring Security',
      'React',
      'PostgreSQL',
      'Flyway (55 migrations)',
      'Redis',
      'Docker',
      'Prometheus & Grafana',
      'Take Blip',
      'Feegow ERP',
      'Conta Azul V2',
      'GerAcesso',
      'Discord JDA 5',
    ],
    problem: {
      'pt-br':
        'Grande parte da rotina dependia de trabalho manual: confirmar agendamentos um a um no WhatsApp, cadastrar visitantes na recepção formando filas, acompanhar suprimentos de TI sem histórico confiável e lidar com chamados espalhados sem SLA.',
      en: 'Core daily workflows depended heavily on manual effort: confirming appointments one by one on WhatsApp, registering visitors at a crowded front desk, tracking IT supplies without reliable history, and handling tickets without SLA visibility.',
    },
    solution: {
      'pt-br':
        'Desenvolvi o sistema do zero em Java 21 (com Virtual Threads) e Spring Boot 3, estruturado em 18 módulos na Arquitetura Hexagonal e 55 migrações no Flyway. Ele rodou em operação real por cerca de três meses e hoje está desativado — o ciclo operacional foi encerrado e tanto o ambiente quanto os dados foram removidos. O showcase público no GitHub reúne a arquitetura, diagramas, OpenAPI, painéis do Grafana e amostras de código.',
      en: 'I built the platform from scratch in Java 21 (with Virtual Threads) and Spring Boot 3, organized into 18 Hexagonal Architecture modules and 55 Flyway migrations. It ran in real operations for roughly three months and is now deactivated — both the environment and operational data were removed at the end of its cycle. The public GitHub showcase documents the architecture, diagrams, OpenAPI specs, Grafana dashboards, and code samples.',
    },
    role: {
      'pt-br':
        'Arquitetura e desenvolvimento de ponta a ponta: modelagem do banco, os 18 módulos do backend Java, integrações REST e webhooks (Feegow, Take Blip, Conta Azul V2, catracas GerAcesso e bot Discord JDA 5), cofre de credenciais em AES-256-GCM, painéis em React e observabilidade com Prometheus + Grafana em Docker.',
      en: 'End-to-end architecture and engineering: database design, all 18 Java backend modules, REST/webhook integrations (Feegow, Take Blip, Conta Azul V2, GerAcesso turnstiles, Discord JDA 5 bot), AES-256-GCM credential vault, React dashboards, and Dockerized Prometheus + Grafana monitoring.',
    },
    features: {
      'pt-br': [
        'Motor de agendamentos (D+0 a D+3) integrado ao Feegow e Take Blip, com lembretes, menus interativos no WhatsApp e solicitação automática de avaliação no Google',
        'Acesso físico nas catracas Control iD / GerAcesso via QR Code temporário no WhatsApp, cadastro de acompanhantes e totem de pré-cadastro',
        'Central ITSM com cálculo de SLA em horas úteis, inventário patrimonial (CMDB) e controle de insumos com baixa FIFO e alerta de estoque mínimo',
        'Bot próprio no Discord (JDA 5) com comandos slash (/ti status, /solicitar) e botões para assumir ou encerrar chamados direto no chat',
        'Conciliação financeira com Conta Azul V2 (OAuth2 + recibos em OpenPDF), envio agendado de relatórios e cofre AES-256-GCM protegido por 2FA/TOTP',
      ],
      en: [
        'Scheduling engine (D+0 to D+3) connecting Feegow ERP and Take Blip with reminders, interactive WhatsApp menus, and automated Google review requests',
        'Physical turnstile access (Control iD / GerAcesso) via temporary WhatsApp QR Codes, companion passes, and a self-service check-in kiosk',
        'ITSM helpdesk with business-hour SLA calculations, asset CMDB, and FIFO supply deductions with low-stock alerts',
        'Custom Discord bot (JDA 5) with slash commands (/ti status, /solicitar) and interactive buttons to claim or resolve tickets right in chat',
        'Conta Azul V2 OAuth2 financial reconciliation (with OpenPDF receipts), scheduled executive reports, and an AES-256-GCM vault protected by mandatory 2FA/TOTP',
      ],
    },
    architecture: {
      'pt-br': [
        'API Java 21 + Spring Boot 3 dividida em 18 módulos delimitados seguindo Arquitetura Hexagonal (Ports & Adapters)',
        'PostgreSQL versionado em 55 migrações Flyway + trilha de auditoria LGPD imutável com Correlation/Trace IDs',
        'Redis controlando rate limiting de APIs externas e concorrência em rajadas testadas em ~500 msgs/min',
        'Observabilidade em tempo real com regras de alerta no Prometheus e 3 dashboards provisionados no Grafana',
      ],
      en: [
        'Java 21 + Spring Boot 3 API organized into 18 bounded modules under Hexagonal Architecture (Ports & Adapters)',
        'PostgreSQL managed across 55 Flyway migrations + immutable LGPD audit trails tagged with Correlation/Trace IDs',
        'Redis enforcing external API rate limiting and concurrency control across bursts tested at ~500 msgs/min',
        'Live observability with Prometheus alert rules and 3 provisioned Grafana dashboards',
      ],
    },
    challenges: {
      'pt-br': [
        'Evitar bloqueios e estouro de limite nas APIs do ERP e do WhatsApp durante picos matinais usando processamento assíncrono e Redis Rate Limiting',
        'Sincronizar janelas de tolerância de horário, acompanhantes, anti-passback e reconexões com as catracas físicas',
        'Garantir regras anti-loop e anti-regressão quando o mesmo responsável confirmava múltiplos agendamentos em grupo no WhatsApp',
      ],
      en: [
        'Preventing quota throttling across ERP and WhatsApp APIs during morning peaks via asynchronous workers and Redis rate limiting',
        'Synchronizing arrival time-window tolerances, companion entries, anti-passback rules, and network retries with physical turnstiles',
        'Enforcing atomic anti-loop and anti-regression rules when a single contact confirmed multiple linked appointments in WhatsApp',
      ],
    },
    metrics: [
      {
        value: '10.000+',
        label: {
          'pt-br': 'Mensagens automatizadas processadas no WhatsApp',
          en: 'Automated WhatsApp messages processed',
        },
      },
      {
        value: '1.700+',
        label: {
          'pt-br': 'Acessos liberados via QR Code nas catracas',
          en: 'Turnstile check-ins issued via temporary QR Codes',
        },
      },
      {
        value: '3.3 → 3.8',
        label: {
          'pt-br': 'Evolução da nota pública no Google em 30 dias',
          en: 'Public Google rating increase over 30 days',
        },
      },
      {
        value: '96,3%',
        label: {
          'pt-br': 'Chamados resolvidos registrados no painel (235 / 244)',
          en: 'Tickets resolved on the showcase dashboard (235 / 244)',
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
          'pt-br': 'Painel central de chamados ITSM com 244 tickets registrados (ciclo operacional encerrado).',
          en: 'Central ITSM ticketing dashboard showing 244 logged tickets (operational cycle concluded).',
        },
      },
      {
        src: '/images/projects/ctrls-itsm/painel_motor_feegow_blip.png',
        alt: {
          'pt-br': 'Painel do motor de agendamentos conectando Feegow e Take Blip',
          en: 'Scheduling engine control panel connecting Feegow and Take Blip',
        },
        caption: {
          'pt-br': 'Motor de confirmações conectando as pautas do Feegow às filas do Take Blip.',
          en: 'Confirmation engine linking Feegow schedules to Take Blip queues.',
        },
      },
      {
        src: '/images/projects/ctrls-itsm/cmdb_ativos.png',
        alt: {
          'pt-br': 'Tela do módulo CMDB de gestão de ativos patrimoniais e equipamentos',
          en: 'Asset management (CMDB) module tracking permanent hardware and assignments',
        },
        caption: {
          'pt-br': 'Módulo CMDB para rastreabilidade patrimonial, vínculos por usuário e emissão de etiquetas.',
          en: 'CMDB module for hardware asset tracking, user assignments, and label printing.',
        },
      },
      {
        src: '/images/projects/ctrls-itsm/inventario_suprimentos.png',
        alt: {
          'pt-br': 'Módulo de inventário de suprimentos com controle de estoque FIFO',
          en: 'Supplies inventory module with FIFO stock tracking',
        },
        caption: {
          'pt-br': 'Inventário de suprimentos de TI com dedução transacional FIFO e alertas de estoque mínimo.',
          en: 'IT supplies inventory with transactional FIFO stock deduction and low-stock alerts.',
        },
      },
      {
        src: '/images/projects/ctrls-itsm/totem_pre_cadastro_paciente.png',
        alt: {
          'pt-br': 'Interface mobile do totem de pré-cadastro e emissão de acesso nas catracas',
          en: 'Mobile self-service check-in and turnstile pass issuance screen',
        },
        caption: {
          'pt-br': 'Totem de autoatendimento e pré-cadastro integrado às catracas, com opção de acompanhantes.',
          en: 'Self-service reception check-in screen wired to physical turnstiles, including companion passes.',
        },
      },
      {
        src: '/images/projects/ctrls-itsm/cartao_digital_qrcode_catraca.png',
        alt: {
          'pt-br': 'Cartão digital de acesso com QR Code temporário para leitura na catraca',
          en: 'Digital access pass displaying a temporary QR Code for turnstile scanning',
        },
        caption: {
          'pt-br': 'Cartão digital com QR Code dinâmico, renovação rápida em caso de erro e dados do atendimento.',
          en: 'Digital access card with dynamic QR Code, instant refresh action, and appointment location details.',
        },
      },
      {
        src: '/images/projects/ctrls-itsm/agendamento_relatorios.png',
        alt: {
          'pt-br': 'Tela de agendamento automático de relatórios gerenciais por e-mail e Discord',
          en: 'Automated scheduled reporting configuration for email and Discord delivery',
        },
        caption: {
          'pt-br': 'Rotina de agendamento mensal de relatórios gerenciais com disparo automático por e-mail e Discord.',
          en: 'Scheduled monthly management report builder with automated email and Discord dispatch.',
        },
      },
      {
        src: '/images/projects/ctrls-itsm/modal_2fa_financeiro.png',
        alt: {
          'pt-br': 'Modal de validação 2FA TOTP para acesso ao módulo financeiro',
          en: 'TOTP 2FA validation modal for financial module access',
        },
        caption: {
          'pt-br': 'Validação obrigatória de 2FA/TOTP antes de liberar operações no módulo financeiro.',
          en: 'Mandatory 2FA/TOTP verification gate before unlocking financial operations.',
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
        'Aplicação full stack multi-tenant para formulários clínicos em JSON Schema, criptografia de dados sensíveis e geração assíncrona de PDF.',
      en: 'Multi-tenant full-stack application for dynamic JSON Schema clinical forms, encrypted PII storage, and async PDF generation.',
    },
    status: 'completed',
    timelineContext: {
      'pt-br': 'Projeto independente • Java 21 + Spring Boot 3.5 + React + Nginx',
      en: 'Independent project • Java 21 + Spring Boot 3.5 + React + Nginx',
    },
    priority: 2,
    featured: true,
    repoUrl: 'https://github.com/VictorGHss/CTRLS-FormsV1',
    stack: [
      'Java 21',
      'Spring Boot 3.5',
      'React & Vite',
      'TypeScript',
      'PostgreSQL 15',
      'Flyway',
      'JWT & RBAC (5 roles)',
      'JPA Crypto Converters',
      'OpenFeign',
      'Caffeine',
      'Nginx & Docker',
    ],
    problem: {
      'pt-br':
        'Formulários clínicos em papel atrasam o atendimento, geram redigitação manual e exigem cuidados rígidos de privacidade. Em um cenário com várias clínicas usando a mesma base, o isolamento por unidade e a criptografia de dados pessoais são obrigatórios.',
      en: 'Paper clinical intake forms slow down reception, require manual re-entry, and create privacy risks. Once multiple clinics share a platform, strict tenant isolation and encryption at rest become essential.',
    },
    solution: {
      'pt-br':
        'Construí um SaaS multi-tenant onde cada clínica monta seus formulários em JSON Schema e envia um link público (/fill/{uuid}) para o paciente preencher no celular. No envio, o backend criptografa os campos sensíveis no PostgreSQL e aciona uma fila assíncrona que gera o relatório em PDF e sincroniza o documento com o Feegow.',
      en: 'I built a multi-tenant SaaS where each clinic defines forms via JSON Schema and shares a clean public link (/fill/{uuid}) for mobile completion. On submission, sensitive fields are encrypted at rest in PostgreSQL while an async pipeline generates a PDF report and syncs it to Feegow.',
    },
    role: {
      'pt-br':
        'Arquitetura em camadas do backend Java 21, filtro multi-tenant via X-Clinic-ID, conversores JPA de criptografia, processamento assíncrono de PDF, frontend React/TypeScript atrás do proxy Nginx e CI/CD via GitHub Actions.',
      en: 'Layered Java 21 backend architecture, X-Clinic-ID multi-tenant filter, JPA encryption converters, async PDF processing, React/TypeScript frontend behind Nginx, and GitHub Actions deployment workflow.',
    },
    features: {
      'pt-br': [
        'Isolamento multi-tenant no TenantContextFilter validando X-Clinic-ID e 5 níveis de acesso (SUPER_ADMIN, CLINIC_ADMIN, DOCTOR, SECRETARY e PATIENT)',
        'Conversores JPA customizados (CryptoConverter) criptografando dados pessoais de pacientes e respostas no PostgreSQL',
        'Renderizador dinâmico em JSON Schema na rota /fill/{uuid}, separando blocos de cabeçalho do payload enviado',
        'Processamento assíncrono (SubmissionAsyncService) gerando PDF com Thymeleaf + Flying Saucer/OpenPDF e integrando ao Feegow via OpenFeign',
        'Stack Docker Compose com healthchecks encadeados (/actuator/health), cache/rate limit com Caffeine e deploy automatizado em runner próprio',
      ],
      en: [
        'Strict multi-tenancy via TenantContextFilter enforcing X-Clinic-ID and 5 RBAC roles (SUPER_ADMIN, CLINIC_ADMIN, DOCTOR, SECRETARY, PATIENT)',
        'Custom JPA CryptoConverters encrypting sensitive patient PII and form responses at rest in PostgreSQL',
        'Dynamic JSON Schema renderer at /fill/{uuid}, separating visual section headers from submitted payload fields',
        'Async processing (SubmissionAsyncService) rendering PDFs with Thymeleaf + Flying Saucer/OpenPDF and syncing to Feegow over OpenFeign',
        'Docker Compose stack with chained /actuator/health checks, Caffeine rate limiting, and self-hosted GitHub Actions CI/CD',
      ],
    },
    architecture: {
      'pt-br': [
        'Clean Architecture organizada em pacotes explícitos: web -> application -> domain -> infrastructure -> client -> tenant',
        'Limpeza obrigatória do ThreadLocal no finally do TenantContextFilter para impedir vazamento de contexto entre requisições',
        'Proxy reverso Nginx servindo o frontend Vite na porta 80 e encaminhando /api/ para o container Spring Boot',
      ],
      en: [
        'Explicit Clean Architecture layers: web -> application -> domain -> infrastructure -> client -> tenant',
        'Guaranteed ThreadLocal cleanup inside TenantContextFilter finally blocks so tenant context never leaks across requests',
        'Nginx reverse proxy serving the static Vite bundle on port 80 and routing /api/ to the Spring Boot container',
      ],
    },
    challenges: {
      'pt-br': [
        'Normalizar variações de CPF na integração OpenFeign com o Feegow para evitar vínculos duplicados ou cruzados de pacientes',
        'Desacoplar geração de PDF e envio externo de forma assíncrona para manter a resposta imediata na tela do paciente',
      ],
      en: [
        'Normalizing inconsistent CPF document fields across Feegow OpenFeign calls to prevent duplicate or cross-linked patient records',
        'Offloading PDF generation and external API uploads asynchronously so mobile submissions return immediately',
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
        'Vitrine web em Next.js na Cloudflare Edge conectada aos QR Codes dos cartões físicos de especialistas e avaliações públicas.',
      en: 'Next.js web showcase on Cloudflare Edge connected to printed specialist QR Code cards and live public reviews.',
    },
    status: 'completed',
    timelineContext: {
      'pt-br': 'Projeto independente • Next.js 15 + Cloudflare Edge + QR Codes',
      en: 'Independent project • Next.js 15 + Cloudflare Edge + QR Codes',
    },
    priority: 3,
    featured: true,
    secondary: true,
    liveUrl: 'https://inovare.doctors.ctrls.dev.br/m/alisson-fucio',
    liveLabel: {
      'pt-br': 'Ver página no ar (Dr. Alisson Fucio)',
      en: 'Open live page (Dr. Alisson Fucio)',
    },
    repoUrl: 'https://github.com/VictorGHss/Inovare-Doctors',
    stack: [
      'Next.js 15 (App Router)',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Cloudflare Pages (Edge)',
      'QRCode CLI',
      'Google & Doctoralia Reviews',
    ],
    problem: {
      'pt-br':
        'Pacientes que recebiam um cartão físico precisavam de um acesso rápido no celular para consultar CRM/RQE, especialidades, canais de agendamento e avaliações públicas reais sem precisar buscar manualmente.',
      en: 'Patients receiving a printed card needed a fast mobile page displaying credentials, specialties, booking links, and verified public reviews without manual searching.',
    },
    solution: {
      'pt-br':
        'Desenvolvi uma aplicação em Next.js 15 (App Router), TypeScript e Tailwind CSS publicada na borda da Cloudflare Pages (@cloudflare/next-on-pages), junto a um script que gera automaticamente os QR Codes das rotas curtas (/m/[slug]) prontos para impressão nos cartões.',
      en: 'I built a Next.js 15 (App Router), TypeScript, and Tailwind CSS app running on Cloudflare Pages Edge (@cloudflare/next-on-pages), paired with a Node script that generates print-ready QR Codes for short URLs (/m/[slug]).',
    },
    role: {
      'pt-br':
        'Desenvolvimento da interface mobile-first, script de geração automatizada de QR Codes, rota de API Edge com cache de avaliações e deploy na Cloudflare.',
      en: 'Mobile-first frontend development, automated QR Code generator script, cached Edge review API route, and Cloudflare Pages deployment.',
    },
    features: {
      'pt-br': [
        'Rotas curtas pré-renderizadas (/m/[slug] -> /medicos/[slug]) otimizadas para abertura imediata após a leitura do QR Code',
        'Script automatizado (npm run qr:gen) gerando os arquivos de QR Code prontos para gráfica para cada especialista',
        'Route Handler na Edge (/api/reviews) com cache de 6 horas exibindo notas e depoimentos públicos (Google API + fallback em JSON-LD)',
      ],
      en: [
        'Pre-rendered short routes (/m/[slug] -> /medicos/[slug]) tuned for instant mobile loading after scanning a card',
        'Automated Node script (npm run qr:gen) generating print-ready QR Codes for every specialist',
        'Edge Route Handler (/api/reviews) with a 6-hour cache pulling public ratings and reviews (Google API + structured JSON-LD fallback)',
      ],
    },
    architecture: {
      'pt-br': [
        'Páginas estáticas via generateStaticParams combinadas com Route Handler em Edge Runtime na rede da Cloudflare',
        'Cache HTTP de 6 horas na rota de avaliações para garantir resposta rápida e evitar limite de requisições externas',
      ],
      en: [
        'Static specialist pages via generateStaticParams paired with an Edge Runtime Route Handler on Cloudflare Pages',
        '6-hour HTTP caching on review lookups to keep pages responsive and avoid upstream quota pressure',
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
          'pt-br': 'Cartão profissional impresso do Dr. Alisson Fucio com o QR Code apontando para o perfil digital.',
          en: 'Printed professional card for Dr. Alisson Fucio with the QR Code linking to his live profile.',
        },
        compact: true,
      },
    ],
  },
  {
    slug: 'chamados-chesiquimica',
    name: {
      'pt-br': 'Portal da T.I. — Chesiquímica',
      en: 'IT Service Portal — Chesiquímica',
    },
    tagline: {
      'pt-br':
        'Portal web simples criado durante o estágio para organizar chamados de suporte, pedidos de toner e equipamentos no Google Sheets.',
      en: 'Lightweight web portal co-built during my internship to organize IT support, toner requests, and equipment orders in Google Sheets.',
    },
    status: 'collaborative',
    timelineContext: {
      'pt-br': 'Desenvolvido em colaboração com João Gabriel Anjos, supervisor durante o estágio na Chesiquímica',
      en: 'Built in collaboration with João Gabriel Anjos, my supervisor during the Chesiquímica internship',
    },
    priority: 4,
    featured: true,
    repoUrl: 'https://github.com/VictorGHss/ChamadosChesiquimica',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'SheetMonkey API', 'Google Sheets', 'GitHub Pages'],
    problem: {
      'pt-br':
        'Durante o estágio na Chesiquímica, pedidos internos de suporte, troca de toners e equipamentos chegavam de forma informal, dificultando o controle e a priorização entre escritório e fábrica.',
      en: 'During my internship at Chesiquímica, internal requests for IT support, toner swaps, and hardware arrived informally, making tracking and prioritization harder across office and factory teams.',
    },
    solution: {
      'pt-br':
        'Em parceria com meu supervisor João Gabriel Anjos, criamos um Portal da T.I. dividido em três fluxos objetivos (Abrir um Chamado, Solicitar Tonner e Equipamentos de Informática), publicado sem custo no GitHub Pages e integrado ao Google Sheets via SheetMonkey.',
      en: 'Alongside my supervisor João Gabriel Anjos, we built an IT Portal split into three clear flows (Open a Ticket, Request Toner, and IT Equipment), hosted free on GitHub Pages and connected to Google Sheets via SheetMonkey.',
    },
    role: {
      'pt-br':
        'Construção das telas em HTML, CSS e JavaScript das três categorias de atendimento, integração dos formulários com a API do SheetMonkey e publicação no GitHub Pages.',
      en: 'Implemented the HTML, CSS, and JavaScript interfaces across all three request categories, wired the SheetMonkey API integration, and deployed on GitHub Pages.',
    },
    features: {
      'pt-br': [
        'Menu inicial separado por categoria: chamado técnico geral, solicitação de toner e equipamentos de informática',
        'Registro automático de cada solicitação em planilha compartilhada no Google Sheets via SheetMonkey',
        'Publicação estática leve no GitHub Pages sem custo de infraestrutura',
      ],
      en: [
        'Entry portal split by request type: general IT support, printer toner replacement, and computer hardware',
        'Automatic row logging into a shared Google Sheets tracker via SheetMonkey',
        'Zero-cost static deployment on GitHub Pages with minimal maintenance',
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
        'Rede social geográfica de avaliações reais com check-in físico validado por PostGIS, app mobile em Flutter e painel admin em React.',
      en: 'Geo-social review network with PostGIS-verified physical check-ins, Flutter mobile app, and React moderation panel.',
    },
    status: 'in-development',
    timelineContext: {
      'pt-br': 'Em desenvolvimento • Monorepo modular (Spring Boot + PostGIS + Flutter + React)',
      en: 'In development • Modular monorepo (Spring Boot + PostGIS + Flutter + React)',
    },
    priority: 5,
    featured: false,
    repoUrl: 'https://github.com/VictorGHss/Rewit',
    stack: [
      'Java',
      'Spring Boot',
      'PostgreSQL & PostGIS',
      'Flyway',
      'Redis',
      'SeaweedFS (S3)',
      'Flutter & Dart',
      'React & TypeScript',
      'Cloudflare Tunnel',
    ],
    problem: {
      'pt-br':
        'Na maioria das plataformas de avaliação, qualquer pessoa pode publicar uma nota sem comprovar que esteve no local, e uma única média mistura ambiente, atendimento e produto no mesmo número.',
      en: 'On most review platforms, anyone can rate a place without proving they visited, and a single star average blurs venue, service, and product quality together.',
    },
    solution: {
      'pt-br':
        'Estou construindo o Rewit em um monorepo modular voltado para avaliações autênticas do mundo físico. Uma única publicação avalia separadamente local (Place), atendimento (Service), item (Product) e relato (Experience), e o selo de "Avaliado no local" só é liberado quando o PostGIS valida que o usuário está dentro do raio do estabelecimento — sem rastreamento em segundo plano.',
      en: "I'm building Rewit inside a modular monorepo for authentic real-world reviews. A single post rates Place, Service, Product, and Experience independently, and the 'Verified on-site' badge is only issued when PostGIS confirms the user's coordinates are within the venue radius — with zero background tracking.",
    },
    role: {
      'pt-br':
        'Arquitetura do produto (18 entidades de domínio e 8 ADRs), API Spring Boot + PostGIS, storage S3 no SeaweedFS, aplicativo Flutter, painel admin React/TypeScript e fluxo de entrega acelerado com agentes de IA e testes automatizados.',
      en: 'Product architecture (18 domain entities and 8 ADRs), Spring Boot + PostGIS API, SeaweedFS S3 storage, Flutter mobile app, React/TypeScript admin panel, and AI-assisted delivery backed by automated tests.',
    },
    features: {
      'pt-br': [
        'Avaliações multi-alvo isoladas: Place, Service, Product e Experience com médias independentes',
        'Check-in físico validado por raio espacial no PostGIS + remoção automática de metadados EXIF/GPS antes do upload no SeaweedFS',
        'App Flutter com Design System próprio, navegação v2, scanner EAN/UPC e QR Code (com controle de lanterna) e fluxo de denúncias (Trust & Safety)',
        'Painel web em React + TypeScript para moderação, reivindicação de estabelecimentos e gestão de respostas',
      ],
      en: [
        'Isolated multi-target ratings for Place, Service, Product, and Experience within a single review',
        'PostGIS spatial radius check-in verification + automatic EXIF/GPS stripping before saving media to SeaweedFS',
        'Flutter client featuring a custom design system, v2 home navigation, EAN/UPC & QR scanner (with torch sync), and Trust & Safety reporting',
        'React + TypeScript moderation panel handling business claims, owner replies, and media moderation',
      ],
    },
    architecture: {
      'pt-br': [
        'Monorepo dividido em apps/mobile (Flutter), apps/admin (React/Vite), backend (Spring Boot com contratos RFC 7807) e infrastructure',
        'Cloudflare Tunnel (cloudflared) integrado ao ambiente local para testar o app em smartphones físicos contra a API de desenvolvimento',
      ],
      en: [
        'Modular monorepo split across apps/mobile (Flutter), apps/admin (React/Vite), backend (Spring Boot with RFC 7807 errors), and infrastructure',
        'Cloudflare Tunnel (cloudflared) wired into local development so physical smartphones can test directly against the local API',
      ],
    },
    roadmap: {
      implemented: {
        'pt-br': [
          'Monorepo modular, 18 entidades modeladas, migrações Flyway, índices espaciais PostGIS, Redis e SeaweedFS em Docker',
          'Navegação v2 e fluxo de denúncias (Trust & Safety V1.A) no Flutter, proteção de integridade de sessões/contas desativadas e módulos de moderação no React Admin',
        ],
        en: [
          'Modular monorepo, 18 domain entities, Flyway migrations, PostGIS spatial indexes, Redis, and SeaweedFS on Docker',
          'Flutter v2 home navigation, Trust & Safety V1.A reporting flow, session/deactivated-account hardening, and React Admin moderation modules',
        ],
      },
      inProgress: {
        'pt-br': [
          'Integração completa do check-in verificado com o scanner de produtos no cliente Flutter',
          'Feeds contextuais ordenados por proximidade espacial e atividade local',
        ],
        en: [
          'Full end-to-end integration of verified check-ins and the product barcode scanner in Flutter',
          'Contextual feeds ranked by spatial proximity and live local activity',
        ],
      },
      planned: {
        'pt-br': [
          'Microsserviço em Python/FastAPI (services/vision) para embeddings visuais e recomendações',
        ],
        en: [
          'Python/FastAPI computer-vision microservice (services/vision) for visual embeddings and recommendations',
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
        'Plataforma em Python/FastAPI e React para gerenciar candidaturas e gerar materiais sob medida com IA controlada e validação humana.',
      en: 'Python/FastAPI & React platform to track applications and generate tailored materials using controlled AI and human validation.',
    },
    status: 'in-development',
    timelineContext: {
      'pt-br': 'Em desenvolvimento • Fase 04.4.1 (FastAPI + Exportação PDF/DOCX + Fundação de IA)',
      en: 'In development • Phase 04.4.1 (FastAPI + PDF/DOCX Export + AI Foundation)',
    },
    priority: 6,
    featured: false,
    repoUrl: 'https://github.com/VictorGHss/Job-HunterV1.0',
    stack: [
      'Python 3.12',
      'FastAPI',
      'Pydantic v2',
      'SQLAlchemy 2.0',
      'Alembic (10 migrations)',
      'PostgreSQL 16 (JSONB)',
      'Argon2id',
      'React 18 & TypeScript',
      'Tailwind & shadcn/ui',
      'PWA & Docker',
    ],
    problem: {
      'pt-br':
        'Gerenciar candidaturas de estágio, júnior e freelance em várias plataformas rapidamente vira bagunça entre abas e planilhas — e ferramentas genéricas de IA costumam exagerar ou inventar experiências que o candidato nunca teve.',
      en: 'Tracking internships, junior roles, and freelance applications across multiple platforms quickly turns into scattered tabs and spreadsheets — while generic AI tools often exaggerate or hallucinate experience.',
    },
    solution: {
      'pt-br':
        'Desenvolvo o Job Hunter como um monólito modular multiusuário onde o perfil profissional é a fonte única da verdade. Cada informação passa por estados explícitos (draft -> pending_validation -> confirmed), garantindo que a camada de IA e a exportação em PDF/DOCX só utilizem fatos confirmados pelo usuário.',
      en: 'I am building Job Hunter as a multi-user modular monolith where the user profile acts as a strict single source of truth. Every fact moves through explicit states (draft -> pending_validation -> confirmed), ensuring the AI foundation and PDF/DOCX exporters only use human-confirmed data.',
    },
    role: {
      'pt-br':
        'Backend completo em FastAPI + SQLAlchemy 2.0, migrações encadeadas no Alembic, autenticação com Argon2id, exportação de documentos em PDF/DOCX, fundação de IA com controles de uso e frontend React PWA.',
      en: 'Full FastAPI + SQLAlchemy 2.0 backend, versioned Alembic migrations, Argon2id authentication, PDF/DOCX document exports, AI foundation with usage controls, and React PWA frontend.',
    },
    features: {
      'pt-br': [
        'Isolamento multiusuário por user_id desde a fundação, hash de senhas Argon2id e rate limiting na autenticação',
        'Trava anti-alucinação (fact_selector + resume_composer) e fundação de IA com controles de uso para redação supervisionada de materiais',
        'Exportação profissional de currículos direcionados em PDF e DOCX, além de pipeline completo com logs de entrevistas e follow-ups',
        'Interface React adaptativa (claro/escuro) com manifesto PWA e Web Share Target preparado para salvar vagas direto pelo Android',
      ],
      en: [
        'Strict per-user data isolation (user_id) from day one, Argon2id password hashing, and authentication rate limiting',
        'Anti-hallucination guardrails (fact_selector + resume_composer) and an AI foundation with usage controls for human-supervised writing',
        'Professional PDF and DOCX export for tailored resumes alongside a full pipeline with interview and follow-up logs',
        'Adaptive light/dark React UI with a PWA manifest and Android Web Share Target support for saving job links on mobile',
      ],
    },
    architecture: {
      'pt-br': [
        'Backend Python 3.12 tipado com Pydantic v2, SQLAlchemy 2.0 (Mapped / mapped_column) e PostgreSQL 16 (relacional + JSONB)',
        '10 migrações Alembic cobrindo autenticação, descoberta de oportunidades, matching por senioridade, unicidade de candidatura ativa e materiais',
        'Docker Compose isolando o PostgreSQL na rede interna atrás da API FastAPI e do proxy Nginx',
      ],
      en: [
        'Fully typed Python 3.12 backend with Pydantic v2, SQLAlchemy 2.0 (Mapped / mapped_column), and PostgreSQL 16 (relational + JSONB)',
        '10 versioned Alembic migrations covering auth, opportunity discovery, seniority matching, active-application uniqueness, and materials',
        'Docker Compose stack isolating PostgreSQL on an internal network behind FastAPI and an Nginx SPA reverse proxy',
      ],
    },
    roadmap: {
      implemented: {
        'pt-br': [
          'Fundação multiusuário em FastAPI + PostgreSQL 16 + 10 migrações Alembic + suíte automatizada de testes',
          'Pipeline de candidaturas, logs de entrevistas, redação de materiais (Fase 04.2), exportação PDF/DOCX (Fase 04.3) e fundação de IA com controles de uso (Fase 04.4.1)',
        ],
        en: [
          'Multi-user FastAPI + PostgreSQL 16 foundation + 10 Alembic migrations + automated test suites',
          'Application pipeline, interview logs, application writing (Phase 04.2), PDF/DOCX export (Phase 04.3), and AI foundation with usage controls (Phase 04.4.1)',
        ],
      },
      inProgress: {
        'pt-br': [
          'Refinamento dos conectores de fontes públicas de vagas e score de aderência por senioridade',
        ],
        en: [
          'Refining public job-source connectors and seniority fit scoring',
        ],
      },
      planned: {
        'pt-br': [
          'Assistente supervisionado para propostas freelance com revisão e aprovação humana obrigatória antes de qualquer envio',
        ],
        en: [
          'Human-supervised freelance proposal drafting with mandatory review before anything is sent',
        ],
      },
    },
  },
  {
    slug: 'tocai',
    name: {
      'pt-br': 'Tocaí',
      en: 'Tocaí',
    },
    tagline: {
      'pt-br':
        'Iniciativa de MusicTech/EdTech em fase de concepção e planejamento para aprendizado musical adaptativo, prática com instrumentos reais e árvore de habilidades.',
      en: 'MusicTech/EdTech initiative in conception and planning focused on adaptive music learning, real-instrument practice, and a structured skill tree.',
    },
    status: 'concept-planning',
    timelineContext: {
      'pt-br': 'Projeto futuro • Em concepção e planejamento (sem implementação ou lançamento ainda)',
      en: 'Future initiative • Concept & planning stage (not yet built or launched)',
    },
    priority: 7,
    featured: false,
    stack: [
      'MusicTech',
      'EdTech',
      'Aprendizado Adaptativo',
      'Prática com Instrumentos Reais',
      'Árvore de Habilidades',
      'Pixel Art & Cultura Brasileira',
    ],
    problem: {
      'pt-br':
        'Quem tenta aprender música de forma autônoma costuma ficar preso entre dois extremos: aplicativos gamificados focados quase só em teoria e cliques na tela, ou conteúdos dispersos em vídeos e cifras sem progressão clara nem retorno sobre o que está sendo tocado de verdade no instrumento.',
      en: 'Self-taught music learners often get stuck between two extremes: gamified apps focused almost exclusively on theory taps, or scattered tutorials and chord sheets with no clear progression and no feedback on what is actually played on a real instrument.',
    },
    solution: {
      'pt-br':
        'O Tocaí é um projeto futuro em fase de concepção e planejamento pensado como uma iniciativa de MusicTech/EdTech com potencial para evoluir até um ecossistema completo de aprendizado e prática musical. Em vez de tentar entregar tudo de uma vez, o produto está sendo desenhado para crescer de forma modular e progressiva — unindo progressão clara, prática real no instrumento e uma identidade visual marcante.',
      en: 'Tocaí is a future MusicTech/EdTech initiative currently in the conception and planning stage, envisioned with the potential to grow into a complete ecosystem for music learning and practice. Rather than trying to ship everything at once, the product is being designed for modular, progressive evolution — combining structured progression, real-instrument practice, and a distinctive visual identity.',
    },
    role: {
      'pt-br':
        'Concepção de produto, definição dos pilares pedagógicos e de experiência, desenho do escopo modular (núcleo inicial vs. expansão futura) e direção criativa inicial — ainda antes da escolha definitiva de stack e do início da implementação.',
      en: 'Product conception, pedagogical and UX pillar definition, modular scope planning (initial core vs. future expansion), and creative direction — prior to locking in technical implementation choices or writing production code.',
    },
    differentiators: {
      'pt-br': [
        'Aprendizado adaptativo: trilhas e exercícios planejados para acompanhar o ritmo, o nível atual e as dificuldades reais de cada estudante, ajustando revisão e progressão de forma personalizada.',
        'Avaliação prática com instrumentos reais: o centro da experiência é tocar o instrumento físico de verdade, aproximando a prática diária de um retorno objetivo em vez de limitar o estudo a quizzes de tela.',
        'Árvore de habilidades: um mapa visual e estruturado que conecta fundamentos rítmicos, harmônicos, técnicos e repertório, deixando visível o que já foi dominado e quais caminhos se abrem a partir dali.',
      ],
      en: [
        'Adaptive learning: study paths and exercises planned to adjust to each learner’s pace, current skill level, and recurring friction points rather than forcing a rigid linear sequence.',
        'Practical evaluation with real instruments: centered on actually playing a physical instrument and getting meaningful practice feedback instead of reducing music study to multiple-choice screen quizzes.',
        'Skill tree progression: a clear visual map linking rhythm, harmony, technique, and repertoire so learners always see what they have mastered and which paths unlock next.',
      ],
    },
    visualIdentity: {
      'pt-br':
        'Um dos pilares do Tocaí é construir uma identidade própria e memorável, afastada de interfaces genéricas de ensino. O projeto traz um sabiá-laranjeira em pixel art como mascote e guia da jornada, somado a uma direção visual inspirada em jogos, música e cultura gráfica brasileira — reforçando proximidade, ritmo e clareza na experiência de estudo.',
      en: 'A key pillar of Tocaí is building a distinct identity far removed from generic learning templates. The concept features a rufous-bellied thrush (sabiá-laranjeira) in pixel art as its companion mascot, paired with a visual direction inspired by games, music, and Brazilian graphic culture — bringing warmth, rhythm, and clarity to daily practice.',
    },
    visionScope: {
      initialCore: {
        'pt-br': [
          'Trilha inicial estruturada com aprendizado adaptativo voltado para fundamentos essenciais e prática recorrente',
          'Primeira versão da árvore de habilidades conectando pré-requisitos claros e metas de curto prazo',
          'Dinâmica de avaliação prática com instrumento real integrada às sessões de estudo',
          'Sistema inicial de progressão acompanhado pela identidade do sabiá-laranjeira em pixel art',
        ],
        en: [
          'Structured initial study path with adaptive learning focused on core fundamentals and consistent practice',
          'First version of the skill tree linking clear prerequisites and short-term milestones',
          'Real-instrument practice evaluation loop integrated into guided study sessions',
          'Foundational progression experience guided by the pixel-art sabiá-laranjeira mascot',
        ],
      },
      futureExpansion: {
        'pt-br': [
          'Expansão modular da árvore de habilidades para novos instrumentos, técnicas avançadas e gêneros musicais',
          'Biblioteca progressiva de repertório guiado, teoria aplicada e desafios práticos contínuos',
          'Camadas futuras de comunidade, acompanhamento de rotina e recursos de ecossistema completo de prática musical',
        ],
        en: [
          'Modular expansion of the skill tree across additional instruments, advanced techniques, and musical styles',
          'Growing library of guided repertoire, applied music theory, and ongoing practice challenges',
          'Future community layers, long-term practice tracking, and features forming a complete music-practice ecosystem',
        ],
      },
    },
    features: {
      'pt-br': [
        'Visão de produto MusicTech/EdTech com evolução modular e progressiva',
        'Três pilares centrais: aprendizado adaptativo, avaliação prática com instrumentos reais e árvore de habilidades',
        'Identidade própria com sabiá-laranjeira em pixel art e referências de jogos, música e cultura gráfica brasileira',
        'Separação clara entre núcleo inicial enxuto e camadas de expansão futura',
      ],
      en: [
        'MusicTech/EdTech product vision planned for modular, progressive growth',
        'Three core pillars: adaptive learning, real-instrument practical evaluation, and a skill tree',
        'Distinctive identity featuring a pixel-art sabiá-laranjeira mascot inspired by games, music, and Brazilian graphic culture',
        'Clear separation between a focused initial core and longer-term ecosystem expansion',
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
