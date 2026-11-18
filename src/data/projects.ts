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
        'Ecossistema em Java 21 e Spring Boot que uniu confirmações no WhatsApp, catracas com QR Code, financeiro e central de chamados de TI.',
      en: 'Java 21 & Spring Boot ecosystem tying together WhatsApp confirmations, QR Code turnstiles, finance sync, and internal IT ticketing.',
    },
    status: 'concluded-operation',
    timelineContext: {
      'pt-br': 'Projeto meu • Rodou pra valer por ~3 meses • Ciclo encerrado e desativado',
      en: 'Independent project • Ran in real operations for ~3 months • Cycle concluded & deactivated',
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
        'Quase tudo era feito no braço: confirmar consulta uma por uma no WhatsApp, cadastrar visitante na recepção formando fila, controlar estoque de toner no olho e caçar chamado de TI perdido em conversa solta.',
      en: 'Too much day-to-day work was still manual: confirming appointments one by one on WhatsApp, checking in visitors at a crowded front desk, guessing supply stock, and chasing IT requests lost in chat messages.',
    },
    solution: {
      'pt-br':
        'Puxei a responsa de criar uma plataforma completa do zero em Java 21 (usando Virtual Threads) e Spring Boot 3, organizada em 18 módulos na Arquitetura Hexagonal e 55 migrações no Flyway. Ela ficou rodando em operação real por uns três meses e resolveu muita dor de cabeça. Hoje o sistema já foi encerrado e desativado (ambiente e dados removidos), mas deixei um showcase técnico público bem detalhado no GitHub com diagramas, OpenAPI, dashboards do Grafana e amostras reais do código.',
      en: 'I built a full platform from scratch in Java 21 (with Virtual Threads) and Spring Boot 3, structured into 18 Hexagonal Architecture modules and 55 Flyway migrations. It ran in real operations for roughly three months before its cycle wrapped up — today the environment and data have been removed, and a thorough technical showcase lives on my GitHub with diagrams, OpenAPI specs, Grafana dashboards, and code samples.',
    },
    role: {
      'pt-br':
        'Fiz de ponta a ponta sozinho: modelagem do banco, os 18 módulos do backend Java, integrações com Feegow, Take Blip, Conta Azul V2, catracas GerAcesso e bot do Discord (JDA 5), cofre de senhas em AES-256-GCM, telas em React e observabilidade com Prometheus + Grafana em Docker.',
      en: 'Built the whole thing end to end: database schema, all 18 Java backend modules, REST/webhook integrations (Feegow, Take Blip, Conta Azul V2, GerAcesso turnstiles, Discord JDA 5 bot), AES-256-GCM password vault, React dashboards, and Dockerized Prometheus + Grafana monitoring.',
    },
    features: {
      'pt-br': [
        'Motor de agendamentos (D+0 a D+3) integrado ao Feegow e Take Blip, com lembretes, menus no WhatsApp e pedido automático de avaliação no Google',
        'Acesso físico nas catracas Control iD / GerAcesso por QR Code temporário enviado no WhatsApp, cadastro de acompanhantes e totem de autoatendimento',
        'Central ITSM com SLA calculado em horas úteis, inventário CMDB multiusuário e baixa de suprimentos por algoritmo FIFO com alerta de estoque mínimo',
        'Bot próprio no Discord (JDA 5) com comandos slash (/ti status, /solicitar) e botões pra assumir ou encerrar chamado sem sair do chat',
        'Módulo financeiro integrado ao Conta Azul V2 (OAuth2 + recibos em OpenPDF) e cofre de credenciais em AES-256-GCM com trava obrigatória de 2FA/TOTP',
      ],
      en: [
        'Scheduling engine (D+0 to D+3) bridging Feegow ERP and Take Blip with reminders, interactive WhatsApp menus, and automated Google review requests',
        'Turnstile access control (Control iD / GerAcesso) via temporary WhatsApp QR Codes, companion passes, and a self-service reception kiosk',
        'ITSM helpdesk with business-hour SLA tracking, multi-user CMDB asset registry, and transactional FIFO supply deductions with low-stock alerts',
        'Custom Discord bot (JDA 5) featuring slash commands (/ti status, /solicitar) and interactive buttons to claim or resolve tickets right in chat',
        'Conta Azul V2 OAuth2 finance sync with OpenPDF receipts plus an AES-256-GCM credential vault gated by mandatory 2FA/TOTP',
      ],
    },
    architecture: {
      'pt-br': [
        'API Java 21 + Spring Boot 3 dividida em 18 módulos isolados seguindo Arquitetura Hexagonal (Ports & Adapters)',
        'PostgreSQL versionado em 55 migrações Flyway + trilha de auditoria LGPD imutável com Correlation/Trace IDs',
        'Redis segurando o rate limiting de chamadas externas e o controle de concorrência em rajadas de até ~500 msgs/min',
        'Monitoramento em tempo real com métricas customizadas no Prometheus e 3 painéis prontos no Grafana',
      ],
      en: [
        'Java 21 + Spring Boot 3 API split into 18 bounded modules under Hexagonal Architecture (Ports & Adapters)',
        'PostgreSQL managed through 55 Flyway migrations + immutable LGPD audit logs tagged with Correlation/Trace IDs',
        'Redis handling outbound rate limiting and concurrency control during bursts tested up to ~500 msgs/min',
        'Live observability with Prometheus alert rules and 3 provisioned Grafana executive/resilience dashboards',
      ],
    },
    challenges: {
      'pt-br': [
        'Evitar bloqueio e estouro de cota nas APIs do ERP e do WhatsApp durante os disparos da manhã usando fila assíncrona e rate limiter no Redis',
        'Lidar com janelas de tolerância de horário, acompanhantes, anti-passback e oscilação de rede na comunicação com as catracas físicas',
        'Garantir regras anti-loop/anti-regressão nas confirmações em grupo quando um mesmo responsável respondia por mais de um agendamento',
      ],
      en: [
        'Preventing quota lockouts across ERP and WhatsApp APIs during morning dispatch waves using async queues and a Redis rate limiter',
        'Handling arrival time-window tolerances, companion passes, anti-passback rules, and network hiccups on physical turnstiles',
        'Enforcing atomic anti-loop and anti-regression state rules when one person confirmed multiple family appointments in the same chat',
      ],
    },
    metrics: [
      {
        value: '10.000+',
        label: {
          'pt-br': 'Mensagens processadas no WhatsApp durante o ciclo',
          en: 'Automated WhatsApp messages handled during the run',
        },
      },
      {
        value: '1.700+',
        label: {
          'pt-br': 'Acessos liberados via QR Code nas catracas',
          en: 'Turnstile check-ins cleared via temporary QR Codes',
        },
      },
      {
        value: '3.3 → 3.8',
        label: {
          'pt-br': 'Salto da nota no Google em 30 dias',
          en: 'Google public rating jump in 30 days',
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
          'pt-br': 'Painel de chamados ITSM com 244 tickets registrados (ciclo já encerrado).',
          en: 'ITSM ticketing dashboard showing 244 logged tickets (cycle concluded).',
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
        src: '/images/projects/ctrls-itsm/inventario_suprimentos.png',
        alt: {
          'pt-br': 'Módulo de inventário de suprimentos com controle de estoque',
          en: 'Supplies inventory module with stock tracking',
        },
        caption: {
          'pt-br': 'Controle de insumos de TI com baixa automática por FIFO e aviso de estoque baixo.',
          en: 'IT supplies tracker with FIFO stock deduction and low-inventory warnings.',
        },
      },
      {
        src: '/images/projects/ctrls-itsm/modal_2fa_financeiro.png',
        alt: {
          'pt-br': 'Modal de validação 2FA TOTP para acesso ao módulo financeiro',
          en: 'TOTP 2FA validation modal for financial module access',
        },
        caption: {
          'pt-br': 'Trava de 2FA/TOTP exigida antes de liberar ações no módulo financeiro.',
          en: 'Mandatory 2FA/TOTP check before unlocking financial actions.',
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
        'SaaS multi-clínica pra criar fichas de anamnese em JSON Schema, criptografar dados sensíveis no banco e gerar PDF automático.',
      en: 'Multi-clinic SaaS for dynamic JSON Schema intake forms, encrypted patient PII storage, and async PDF generation.',
    },
    status: 'completed',
    timelineContext: {
      'pt-br': 'Projeto próprio • Java 21 + Spring Boot 3.5 + React + Nginx',
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
        'Preencher ficha médica na prancheta é ruim pro paciente e pior ainda pra quem precisa redigitar tudo depois — e quando envolve mais de uma clínica no mesmo sistema, uma unidade jamais pode enxergar os dados da outra.',
      en: 'Clipboard paper intake forms are slow for patients and painful for staff who have to retype everything — and once multiple clinics share one platform, strict tenant isolation and PII encryption become non-negotiable.',
    },
    solution: {
      'pt-br':
        'Desenvolvi uma aplicação full stack multi-tenant onde cada clínica monta seus próprios formulários via JSON Schema e manda um link público limpo (/fill/{uuid}) pro paciente preencher no celular. Assim que ele envia, o backend criptografa os campos sensíveis no PostgreSQL, dispara em background a geração do relatório em PDF e já sincroniza com o prontuário no Feegow.',
      en: 'I built a multi-tenant full-stack app where each clinic designs custom forms with JSON Schema and shares a clean public link (/fill/{uuid}) for patients to fill out on their phones. On submit, sensitive fields are encrypted at rest in PostgreSQL while an async worker renders a PDF report and syncs it with Feegow.',
    },
    role: {
      'pt-br':
        'Criei toda a arquitetura em camadas do backend Java 21, o filtro multi-tenant por header X-Clinic-ID, os conversores JPA de criptografia, o motor assíncrono de PDF, o front em React/TypeScript atrás do Nginx e o pipeline de deploy via GitHub Actions.',
      en: 'Built the layered Java 21 backend, the X-Clinic-ID tenant filter, JPA encryption converters, async PDF worker, React/TypeScript frontend behind Nginx, and self-hosted GitHub Actions deploy workflow.',
    },
    features: {
      'pt-br': [
        'Isolamento multi-tenant no TenantContextFilter validando X-Clinic-ID e 5 perfis (SUPER_ADMIN, CLINIC_ADMIN, DOCTOR, SECRETARY e PATIENT)',
        'Conversores JPA customizados (CryptoConverter) criptografando dados pessoais sensíveis de pacientes e respostas no banco',
        'Renderizador dinâmico em JSON Schema com rota pública (/fill/{uuid}) que separa blocos visuais de título do payload real',
        'Fila assíncrona (SubmissionAsyncService) gerando PDF com Thymeleaf + Flying Saucer/OpenPDF e integrando ao Feegow via OpenFeign',
        'Stack Docker Compose com healthchecks encadeados (/actuator/health), cache/rate limit com Caffeine e CI/CD em runner próprio',
      ],
      en: [
        'Strict multi-tenancy via TenantContextFilter enforcing X-Clinic-ID plus 5 RBAC roles (SUPER_ADMIN, CLINIC_ADMIN, DOCTOR, SECRETARY, PATIENT)',
        'Custom JPA CryptoConverters encrypting sensitive patient PII and form answers at rest in PostgreSQL',
        'Dynamic JSON Schema form renderer at /fill/{uuid} keeping visual section headers out of submission payloads',
        'Async processing (SubmissionAsyncService) rendering PDFs via Thymeleaf + Flying Saucer/OpenPDF and syncing with Feegow over OpenFeign',
        'Multi-stage Docker Compose stack with /actuator/health gates, Caffeine rate limiting, and self-hosted GitHub Actions CI/CD',
      ],
    },
    architecture: {
      'pt-br': [
        'Clean Architecture explícita em pacotes: web -> application -> domain -> infrastructure -> client -> tenant',
        'Limpeza garantida de ThreadLocal no finally do TenantContextFilter pra evitar qualquer vazamento de contexto entre requisições',
        'Proxy reverso Nginx servindo o bundle estático do Vite na porta 80 e roteando /api/ direto pro container Spring Boot',
      ],
      en: [
        'Explicit Clean Architecture layers: web -> application -> domain -> infrastructure -> client -> tenant',
        'Guaranteed ThreadLocal cleanup inside TenantContextFilter finally blocks so clinic context never leaks across threads',
        'Nginx reverse proxy serving the static Vite bundle on port 80 and forwarding /api/ internally to the Spring Boot container',
      ],
    },
    challenges: {
      'pt-br': [
        'Normalizar variações de CPF na integração OpenFeign com o Feegow pra não criar vínculo duplicado ou cruzado de paciente',
        'Processar o PDF e o envio externo de forma assíncrona sem travar a resposta na tela do paciente depois do clique em enviar',
      ],
      en: [
        'Normalizing inconsistent CPF document fields across Feegow OpenFeign calls to prevent duplicate or cross-linked patient records',
        'Offloading PDF rendering and external API uploads asynchronously so mobile form submissions return instantly',
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
        'Vitrine rápida em Next.js na Cloudflare Edge conectada aos QR Codes dos cartões impressos dos médicos e avaliações reais.',
      en: 'Fast Next.js showcase running on Cloudflare Edge, wired to printed doctor QR Code cards and live public reviews.',
    },
    status: 'completed',
    timelineContext: {
      'pt-br': 'Projeto próprio • Next.js 15 + Cloudflare Edge + QR Codes',
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
        'Quando o paciente saía da consulta com o cartão físico do médico na mão, faltava um link rápido no celular que já mostrasse CRM/RQE, especialidades, botão de agendamento e avaliações reais sem precisar procurar no Google.',
      en: 'Patients walking out with a printed business card needed an instant mobile page showing the doctor’s credentials, specialties, booking links, and verified reviews without hunting around online.',
    },
    solution: {
      'pt-br':
        'Criei uma aplicação leve em Next.js 15 (App Router) com TypeScript e Tailwind rodando direto na borda da Cloudflare Pages (@cloudflare/next-on-pages). Fiz também um script que gera automaticamente os QR Codes apontando pra rotas curtas (/m/[slug]) pra entrar direto na arte gráfica do cartão impresso.',
      en: 'I built a fast Next.js 15 (App Router), TypeScript, and Tailwind app deployed on Cloudflare Pages Edge (@cloudflare/next-on-pages), paired with a Node script that generates print-ready QR Codes pointing to short slugs (/m/[slug]).',
    },
    role: {
      'pt-br':
        'Desenvolvi o layout mobile-first, o gerador automatizado de QR Codes pros cartões, a rota de API Edge com cache de avaliações e o deploy na Cloudflare.',
      en: 'Built the mobile-first UI, automated QR Code generator script, cached Edge review API route, and Cloudflare Pages deployment.',
    },
    features: {
      'pt-br': [
        'Rotas curtas estáticas (/m/[slug] -> /medicos/[slug]) feitas pra abrir instantaneamente ao apontar a câmera pro cartão',
        'Script automatizado (npm run qr:gen) gerando os QR Codes prontos pra impressão de cada especialista',
        'Route Handler na Edge (/api/reviews) com cache de 6 horas buscando notas e depoimentos reais (Google API + fallback em JSON-LD público)',
      ],
      en: [
        'Short static redirect routes (/m/[slug] -> /medicos/[slug]) tuned for instant loads on mobile data after scanning a card',
        'Automated Node script (npm run qr:gen) producing print-ready QR Codes for every specialist',
        'Edge Route Handler (/api/reviews) with a 6-hour cache pulling verified public reviews (Google API + structured JSON-LD fallback)',
      ],
    },
    architecture: {
      'pt-br': [
        'Páginas pré-renderizadas com generateStaticParams combinadas com API em Edge Runtime na rede da Cloudflare',
        'Cache HTTP de 6 horas na rota de reviews pra manter o carregamento rápido e evitar limite de requisições externas',
      ],
      en: [
        'Static specialist routes via generateStaticParams paired with an Edge Runtime API handler on Cloudflare Pages',
        '6-hour response caching on review lookups so pages stay snappy and never hammer upstream endpoints',
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
          'pt-br': 'Cartão impresso real do Dr. Alisson Fucio com o QR Code levando direto pro perfil digital.',
          en: 'Actual printed card for Dr. Alisson Fucio featuring the QR Code linked to his live page.',
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
        'Portal leve que fiz no estágio pra organizar pedidos de suporte, troca de toner e equipamentos direto no Google Sheets.',
      en: 'Lightweight web portal co-built during my internship to route IT tickets, toner requests, and equipment needs into Google Sheets.',
    },
    status: 'collaborative',
    timelineContext: {
      'pt-br': 'Feito em parceria com João Gabriel Anjos (meu supervisor no estágio na Chesiquímica)',
      en: 'Built in collaboration with João Gabriel Anjos (my supervisor during the Chesiquímica internship)',
    },
    priority: 4,
    featured: true,
    repoUrl: 'https://github.com/VictorGHss/ChamadosChesiquimica',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'SheetMonkey API', 'Google Sheets', 'GitHub Pages'],
    problem: {
      'pt-br':
        'Lá na Chesiquímica, a galera da fábrica e do escritório pedia suporte, troca de toner ou mouse novo falando no corredor ou mandando mensagem solta — no meio da correria, era fácil perder o controle do que já tinha sido atendido.',
      en: 'At Chesiquímica, office and factory staff used to ask for IT help, toner swaps, or peripherals in hallway chats or scattered messages — making it easy for requests to slip through the cracks.',
    },
    solution: {
      'pt-br':
        'Junto com meu supervisor João Gabriel Anjos, montamos um Portal da T.I. direto ao ponto com três fluxos separados (Abrir um Chamado, Solicitar Tonner e Equipamentos de Informática). Hospedamos sem custo no GitHub Pages e ligamos tudo ao SheetMonkey pra cada envio cair organizadinho numa planilha do Google Sheets.',
      en: 'Together with my supervisor João Gabriel Anjos, we put together a clean IT Portal split into three dedicated flows (Support Ticket, Toner Request, and IT Equipment), hosted for free on GitHub Pages and wired to Google Sheets through SheetMonkey.',
    },
    role: {
      'pt-br':
        'Montei as telas em HTML, CSS e JavaScript das três categorias de solicitação, integrei o envio dos formulários com a API do SheetMonkey e publiquei no GitHub Pages.',
      en: 'Built the HTML, CSS, and JavaScript pages across all three request categories, wired up the SheetMonkey API integration, and deployed on GitHub Pages.',
    },
    features: {
      'pt-br': [
        'Tela inicial dividida por tipo de pedido: chamado técnico geral, reposição de toner e solicitação de equipamentos',
        'Gravação automática de cada pedido em planilha compartilhada no Google Sheets via SheetMonkey',
        'Custo zero de servidor e manutenção simples rodando estático no GitHub Pages',
      ],
      en: [
        'Dedicated entry flows for general IT support, printer toner replacements, and hardware requests',
        'Automatic row logging straight into a shared Google Sheets tracker via SheetMonkey',
        'Zero hosting cost or server maintenance on GitHub Pages',
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
        'Rede social geográfica de avaliações reais onde o selo de presença física é validado no banco com PostGIS.',
      en: 'Geo-social review network where on-site check-ins are cryptographically/spatially verified with PostGIS.',
    },
    status: 'in-development',
    timelineContext: {
      'pt-br': 'Construindo agora • Monorepo modular (Spring Boot + PostGIS + Flutter + React)',
      en: 'Actively building • Modular monorepo (Spring Boot + PostGIS + Flutter + React)',
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
        'Em quase todo app de avaliação, qualquer pessoa dá 1 ou 5 estrelas sem nunca ter pisado no lugar, e uma nota única mistura tudo — às vezes a comida tava ótima, mas o atendimento atrasou.',
      en: 'On most review platforms, anyone can drop a 1-star or 5-star review without ever setting foot there, and a single star score mashes venue, service, and product quality into one blurry number.',
    },
    solution: {
      'pt-br':
        'Tô construindo o Rewit do zero num monorepo modular pra ser uma rede social focada no mundo físico. Num único post dá pra avaliar separado o local, o atendimento, o produto consumido e a experiência, e o selo de "Avaliado no local" só sai se o PostGIS confirmar que você estava dentro do raio do estabelecimento na hora da publicação — sem rastrear localização em segundo plano.',
      en: "I'm building Rewit from scratch inside a modular monorepo as a real-world social review network. A single post can rate the Place, Service, Product, and Experience separately, and the 'Verified on-site' badge is only granted when PostGIS confirms your coordinates fall within the venue radius — with zero background tracking.",
    },
    role: {
      'pt-br':
        'Arquitetura completa do produto (18 entidades de domínio e 8 ADRs documentados), API Spring Boot + PostGIS, storage S3 no SeaweedFS, app mobile em Flutter e painel admin em React/TypeScript.',
      en: 'End-to-end product architecture (18 domain entities and 8 documented ADRs), Spring Boot + PostGIS API, SeaweedFS S3 media layer, Flutter mobile app, and React/TypeScript moderation panel.',
    },
    features: {
      'pt-br': [
        'Avaliações multi-alvo isoladas: lugar (Place), atendimento (Service), item (Product) e relato (Experience) com médias independentes',
        'Check-in físico validado por raio espacial no PostGIS + limpeza automática de metadados EXIF/GPS das fotos antes de salvar no SeaweedFS',
        'App mobile em Flutter com Design System próprio e scanner de códigos de barra (EAN/UPC) e QR Code',
        'Painel web em React + TypeScript pra moderação, respostas de estabelecimentos e análise de reivindicações de perfil',
      ],
      en: [
        'Multi-target reviews: Place, Service, Product, and Experience each maintain isolated ratings from a single post',
        'PostGIS spatial radius check-in verification + automatic EXIF/GPS stripping before storing photos in SeaweedFS',
        'Flutter mobile client with a custom widget design system and EAN/UPC barcode + QR scanner',
        'React + TypeScript moderation dashboard handling business claims, owner replies, and media review',
      ],
    },
    architecture: {
      'pt-br': [
        'Monorepo organizado em apps/mobile (Flutter), apps/admin (React/Vite), backend (Spring Boot + RFC 7807) e infrastructure (Docker + cloudflared)',
        'Túnel seguro com Cloudflare Tunnel pra testar o app rodando no celular físico direto contra o backend local',
      ],
      en: [
        'Clean monorepo split across apps/mobile (Flutter), apps/admin (React/Vite), backend (Spring Boot + RFC 7807 errors), and infrastructure',
        'Cloudflare Tunnel setup allowing real physical smartphones to hit the local development stack securely',
      ],
    },
    roadmap: {
      implemented: {
        'pt-br': [
          'Monorepo modular, 18 entidades modeladas, migrações Flyway, índices espaciais PostGIS, Redis e SeaweedFS rodando em Docker',
          'Base da API Spring Boot (erros padronizados RFC 7807), suíte de widgets do Flutter e módulos de moderação/claims no React Admin',
        ],
        en: [
          'Modular monorepo, 18 modeled domain entities, Flyway migrations, PostGIS spatial indexes, Redis, and SeaweedFS on Docker',
          'Core Spring Boot API (RFC 7807 error contracts), tested Flutter design-system widgets, and React Admin moderation/claims modules',
        ],
      },
      inProgress: {
        'pt-br': [
          'Fechamento ponta a ponta do fluxo de check-in verificado e scanner de produtos no app Flutter',
          'Feeds contextuais por proximidade espacial e eventos ativos',
        ],
        en: [
          'End-to-end verified check-in flow and product barcode scanner in the Flutter app',
          'Proximity-based contextual feeds and live local events',
        ],
      },
      planned: {
        'pt-br': [
          'Microsserviço em Python/FastAPI (services/vision) pra embeddings visuais e recomendações',
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
        'Plataforma em Python/FastAPI e React pra organizar candidaturas e montar currículos sob medida sem deixar IA inventar experiência.',
      en: 'Python/FastAPI & React platform to track job applications and tailor resumes with zero AI hallucination.',
    },
    status: 'in-development',
    timelineContext: {
      'pt-br': 'Construindo agora • Fase 04.1 (FastAPI + SQLAlchemy 2 + React PWA)',
      en: 'Actively building • Phase 04.1 (FastAPI + SQLAlchemy 2 + React PWA)',
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
        'Quem tá caçando vaga de estágio, júnior ou freela acaba cheio de link espalhado em aba aberta e planilha. E se você pede ajuda pra uma IA adaptar o currículo sem trava nenhuma, ela adora exagerar ou inventar tecnologia que você nunca usou.',
      en: 'Hunting for internships, junior roles, or freelance gigs quickly turns into twenty open tabs and messy spreadsheets — and generic AI resume tools love to exaggerate or hallucinate skills you never actually touched.',
    },
    solution: {
      'pt-br':
        'Criei o Job Hunter como um monólito modular multiusuário onde o seu perfil funciona como fonte única da verdade. Cada experiência, projeto ou curso passa por estados (draft -> pending_validation -> confirmed), e o compositor de currículos só tem permissão de usar fatos que você marcou manualmente como confirmados.',
      en: 'I started building Job Hunter as a multi-user modular monolith where your profile acts as a strict single source of truth. Every fact moves through explicit states (draft -> pending_validation -> confirmed), and the resume composer is locked to human-confirmed facts only.',
    },
    role: {
      'pt-br':
        'Backend completo em FastAPI + SQLAlchemy 2.0, as 10 migrações encadeadas no Alembic, autenticação segura com Argon2id e rate limit, motor determinístico de seleção de fatos e frontend PWA em React + TypeScript.',
      en: 'Built the FastAPI + SQLAlchemy 2.0 backend, 10 sequential Alembic migrations, Argon2id auth with login rate limiting, deterministic fact-selection engine, and React + TypeScript PWA frontend.',
    },
    features: {
      'pt-br': [
        'Isolamento multiusuário estrito por user_id desde a primeira migração e senhas com hash Argon2id',
        'Trava anti-alucinação (fact_selector + resume_composer): só entra em currículo ou proposta o que estiver com status confirmed',
        'Pipeline completo de candidaturas com histórico de etapas, logs de entrevistas e lembretes de follow-up',
        'Frontend adaptativo (claro/escuro) com manifesto PWA e Web Share Target preparado pra compartilhar link de vaga direto pelo Android',
      ],
      en: [
        'Strict per-user data isolation (user_id) from day one plus Argon2id password hashing and auth rate limiting',
        'Zero-hallucination guardrails (fact_selector + resume_composer): only human-confirmed profile facts can enter generated materials',
        'Full application pipeline tracking stages, follow-ups, and interview logs',
        'Adaptive light/dark React UI with a PWA manifest and Android Web Share Target support for saving job links on the go',
      ],
    },
    architecture: {
      'pt-br': [
        'Backend Python 3.12 tipado ponta a ponta com Pydantic v2, SQLAlchemy 2.0 (Mapped / mapped_column) e PostgreSQL 16 (relacional + JSONB)',
        '10 migrações Alembic cobrindo auth, descoberta de oportunidades, matching de senioridade, unicidade de candidatura ativa e geração de materiais',
        'Orquestração Docker Compose isolando o PostgreSQL na rede interna atrás da API FastAPI e do proxy Nginx',
      ],
      en: [
        'End-to-end typed Python 3.12 backend with Pydantic v2, SQLAlchemy 2.0 (Mapped / mapped_column), and PostgreSQL 16 (relational + JSONB)',
        '10 versioned Alembic migrations covering auth, opportunity discovery, seniority matching, active-application uniqueness, and materials',
        'Docker Compose setup isolating PostgreSQL on an internal network behind FastAPI and an Nginx SPA reverse proxy',
      ],
    },
    roadmap: {
      implemented: {
        'pt-br': [
          'Fundação multiusuário em FastAPI + PostgreSQL 16 + 10 migrações Alembic + suíte de testes automatizados das fases 01 a 03',
          'Pipeline de candidaturas, logs de entrevista/follow-up, compositor determinístico de currículo (Fase 04.1) e interface React PWA',
        ],
        en: [
          'Multi-user FastAPI + PostgreSQL 16 foundation + 10 Alembic migrations + automated test suites across phases 01–03',
          'Application pipeline, interview/follow-up logs, deterministic resume composer (Phase 04.1), and React PWA interface',
        ],
      },
      inProgress: {
        'pt-br': [
          'Conectores de busca e higienização de vagas públicas com cálculo de aderência por senioridade',
        ],
        en: [
          'Public job-source connectors, sanitization pipeline, and seniority fit matching',
        ],
      },
      planned: {
        'pt-br': [
          'Rascunho supervisionado de propostas freelance e cartas de apresentação sempre com aprovação humana antes de qualquer envio',
        ],
        en: [
          'Human-supervised freelance proposal and cover-letter drafting with mandatory review before anything goes out',
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
