import type { LocalizedList, LocalizedText } from './projects';

export interface ExperienceItem {
  period: LocalizedText;
  role: LocalizedText;
  company: LocalizedText;
  progressionNote?: LocalizedText;
  summary: LocalizedText;
  highlights: LocalizedList;
  tags: string[];
}

export interface EducationItem {
  period: LocalizedText;
  degree: LocalizedText;
  institution: LocalizedText;
}

export interface CourseItem {
  name: LocalizedText;
  provider: string;
}

export interface LanguageItem {
  name: LocalizedText;
  level: LocalizedText;
}

export interface SkillGroup {
  category: LocalizedText;
  tier: 'primary' | 'secondary';
  items: string[];
}

export interface ServiceItem {
  title: LocalizedText;
  summary: LocalizedText;
  proof: LocalizedText;
  deliverables: LocalizedList;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: {
      'pt-br': 'Janeiro de 2025 — Outubro de 2026',
      en: 'January 2025 — October 2026',
    },
    role: {
      'pt-br': 'Estagiário de TI → Técnico de TI',
      en: 'IT Intern → IT Technician',
    },
    company: {
      'pt-br': 'Inovare Serviços de Saúde',
      en: 'Inovare Serviços de Saúde',
    },
    progressionNote: {
      'pt-br':
        'Comecei como Estagiário de TI (Jan 2025 – Set 2025) e fui efetivado como Técnico de TI em Outubro de 2025, ficando até Outubro de 2026.',
      en: 'Started as an IT Intern (Jan 2025 – Sep 2025) and was hired full-time as an IT Technician in October 2025, staying through October 2026.',
    },
    summary: {
      'pt-br':
        'No dia a dia eu cuidava da infra, das redes e do suporte N1/N2 pra equipe não parar. Em paralelo, puxei pra mim o desafio de criar do zero o CTRLS-ITSM pra automatizar agendamentos, portaria e chamados — o sistema rodou na prática por cerca de 3 meses antes de ter o ciclo encerrado e ser desativado.',
      en: 'Day to day, I kept local infrastructure, networks, and N1/N2 support running smoothly. Alongside that, I took the initiative to build CTRLS-ITSM from scratch to automate scheduling, reception access, and internal IT tickets — running in real operations for roughly 3 months before its cycle concluded and it was deactivated.',
    },
    highlights: {
      'pt-br': [
        'Coloquei pra rodar por ~3 meses o CTRLS-ITSM (Java 21 + Spring Boot), conectando o ERP médico Feegow ao WhatsApp (Take Blip) por APIs REST e webhooks assíncronos',
        'Automatizei confirmações e lembretes preventivos de consulta no WhatsApp, processando mais de 10.000 mensagens e derrubando as faltas de pacientes',
        'Criei o autoatendimento da portaria integrado às catracas (gerAcesso), enviando QR Codes temporários no WhatsApp pra mais de 1.700 visitantes e acabando com a fila na recepção',
        'Subi uma rotina automática de pós-consulta pra pedir avaliação no Google Meu Negócio — a nota pública da clínica subiu de 3.3 pra 3.8 estrelas em 30 dias',
        'Organizei a casa na TI com inventário de máquinas, controle de insumos e abertura/triagem de chamados caindo direto no Discord via bot e webhook',
        'Segurei o suporte técnico N1/N2 presencial, resolvendo bucha de rede local, manutenção de hardware e padronização das máquinas Windows',
      ],
      en: [
        'Deployed and ran CTRLS-ITSM (Java 21 + Spring Boot) for ~3 months, bridging the Feegow medical ERP with WhatsApp (Take Blip) over REST APIs and async webhooks',
        'Automated WhatsApp appointment confirmations and reminders — 10,000+ messages handled, cutting patient no-shows',
        'Built self-service turnstile check-in integrated with gerAcesso, sending temporary WhatsApp QR Codes to 1,700+ visitors and clearing reception lines',
        'Set up an automated post-appointment Google review follow-up that lifted the public clinic rating from 3.3 to 3.8 stars in 30 days',
        'Structured internal IT with hardware asset tracking, consumables inventory, and ticket triage wired straight into Discord',
        'Handled hands-on N1/N2 support, LAN troubleshooting, PC repairs, and Windows workstation setup',
      ],
    },
    tags: ['Java 21', 'Spring Boot 3', 'React', 'PostgreSQL', 'Redis', 'Take Blip', 'GerAcesso', 'Docker'],
  },
  {
    period: {
      'pt-br': 'Agosto de 2024 — Dezembro de 2024',
      en: 'August 2024 — December 2024',
    },
    role: {
      'pt-br': 'Estagiário de TI',
      en: 'IT Intern',
    },
    company: {
      'pt-br': 'Chesiquímica Ltda.',
      en: 'Chesiquímica Ltda.',
    },
    summary: {
      'pt-br':
        'Minha porta de entrada na área: estágio mão na massa atendendo tanto o pessoal do escritório quanto o chão de fábrica, mexendo com hardware, cabeamento, rede TCP/IP e ajudando a tirar do papel o portal interno de chamados.',
      en: 'My first hands-on role in tech: an IT internship supporting both office staff and the factory floor — fixing machines, testing cabling and TCP/IP networks, and co-building a lightweight internal ticketing portal.',
    },
    highlights: {
      'pt-br': [
        'Atendia os chamados N1/N2 do administrativo e da fábrica, diagnosticando e resolvendo pepino de máquina, sistema e rede no dia a dia',
        'Fazia manutenção preventiva e corretiva de PCs, montagem de bancadas do zero e recuperação de máquinas paradas',
        'Configurava impressoras em rede, periféricos e testava pontos de cabeamento estruturado e conectividade TCP/IP',
        'Padronizava as estações corporativas com formatação, imagens do Windows e homologação dos programas internos',
        'Junto com meu supervisor João Gabriel Anjos, desenvolvi o Portal da T.I. pra organizar pedidos de suporte, toners e equipamentos direto no Google Sheets via SheetMonkey',
      ],
      en: [
        'Handled daily N1/N2 tickets across corporate offices and the manufacturing plant',
        'Performed preventive and corrective PC repairs, workstation assembly, and recovery of dead machines',
        'Set up networked printers and peripherals, and tested structured cabling and TCP/IP links',
        'Standardized Windows workstations with disk imaging and internal software validation',
        'Co-built the internal IT Portal alongside my supervisor João Gabriel Anjos (HTML, CSS, JavaScript, SheetMonkey, and Google Sheets)',
      ],
    },
    tags: ['Suporte N1/N2', 'TCP/IP', 'Windows', 'Hardware', 'HTML/CSS/JS', 'Google Sheets'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    period: {
      'pt-br': 'Previsão de Conclusão: 2027',
      en: 'Expected graduation: 2027',
    },
    degree: {
      'pt-br': 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      en: 'Technology Degree in Systems Analysis and Development',
    },
    institution: {
      'pt-br': 'Universidade Tecnológica Federal do Paraná (UTFPR)',
      en: 'Federal University of Technology – Paraná (UTFPR)',
    },
  },
  {
    period: {
      'pt-br': 'Conclusão: 2023',
      en: 'Completed: 2023',
    },
    degree: {
      'pt-br': 'Técnico em Logística',
      en: 'Technical Degree in Logistics',
    },
    institution: {
      'pt-br': 'Colégio Estadual Professor Meneleu de Almeida Torres',
      en: 'Colégio Estadual Professor Meneleu de Almeida Torres',
    },
  },
  {
    period: {
      'pt-br': 'Conclusão: 2021',
      en: 'Completed: 2021',
    },
    degree: {
      'pt-br': 'Técnico em Administração',
      en: 'Technical Degree in Business Administration',
    },
    institution: {
      'pt-br': 'MCT Cursos',
      en: 'MCT Cursos',
    },
  },
  {
    period: {
      'pt-br': 'Conclusão: 2018',
      en: 'Completed: 2018',
    },
    degree: {
      'pt-br': 'Técnico em Informática',
      en: 'Technical Degree in Information Technology',
    },
    institution: {
      'pt-br': 'SENAI Paraná',
      en: 'SENAI Paraná',
    },
  },
];

export const COURSES: CourseItem[] = [
  {
    name: {
      'pt-br': 'Java COMPLETO: Programação Orientada a Objetos + Projetos (Prof. Leonardo Moura Leitão)',
      en: 'Complete Java: Object-Oriented Programming + Projects (Prof. Leonardo Moura Leitão)',
    },
    provider: 'Udemy',
  },
  {
    name: {
      'pt-br': 'Bootcamp Santander: Backend com Java',
      en: 'Santander Bootcamp: Java Backend',
    },
    provider: 'Digital Innovation One (DIO)',
  },
  {
    name: {
      'pt-br': 'Bootcamp Bradesco: Java Cloud Native',
      en: 'Bradesco Bootcamp: Java Cloud Native',
    },
    provider: 'Digital Innovation One (DIO)',
  },
];

export const LANGUAGES: LanguageItem[] = [
  {
    name: { 'pt-br': 'Português', en: 'Portuguese' },
    level: { 'pt-br': 'Nativo', en: 'Native' },
  },
  {
    name: { 'pt-br': 'Inglês', en: 'English' },
    level: {
      'pt-br': 'Intermediário — leio documentação técnica tranquilo e me viro bem na escrita',
      en: 'Intermediate — comfortable reading technical docs, codebases, and writing clearly',
    },
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: {
      'pt-br': 'Backend & Banco de Dados',
      en: 'Backend & Databases',
    },
    tier: 'primary',
    items: [
      'Java (17 / 21 + Virtual Threads)',
      'Spring Boot 3 (Web, JPA, Security, Scheduler)',
      'PostgreSQL & MySQL',
      'Redis (Rate Limiting & Cache)',
      'Flyway (Migrations)',
      'OpenPDF / Geração de PDFs',
    ],
  },
  {
    category: {
      'pt-br': 'Frontend & Interfaces',
      en: 'Frontend & UI',
    },
    tier: 'primary',
    items: ['React', 'TypeScript', 'JavaScript', 'Next.js (App Router)', 'Tailwind CSS', 'HTML5 & CSS3'],
  },
  {
    category: {
      'pt-br': 'APIs, Segurança & Integrações',
      en: 'APIs, Security & Integrations',
    },
    tier: 'primary',
    items: [
      'APIs REST & OpenFeign',
      'Webhooks Assíncronos',
      'JWT, OAuth2, RBAC & 2FA/TOTP',
      'Criptografia (AES-256-GCM / LGPD)',
      'OpenAPI / Swagger & Postman',
    ],
  },
  {
    category: {
      'pt-br': 'Infra, Linux & Deploy',
      en: 'Infra, Linux & Deploy',
    },
    tier: 'primary',
    items: [
      'Docker & Docker Compose',
      'Linux (Debian / Ubuntu / Home Server)',
      'GitHub Actions (CI/CD)',
      'Cloudflare Pages & Tunnels',
      'Nginx, Prometheus & Grafana',
    ],
  },
  {
    category: {
      'pt-br': 'Outras stacks que uso nos meus projetos',
      en: 'Other tools from my side projects',
    },
    tier: 'secondary',
    items: [
      'Python 3.12 & FastAPI',
      'SQLAlchemy 2.0 & Alembic',
      'PostGIS (Geoespacial)',
      'Flutter & Dart',
      'SeaweedFS (S3 Storage)',
      'Take Blip, Digisac & Discord JDA',
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    title: {
      'pt-br': 'Backends & APIs sob medida',
      en: 'Custom Backends & APIs',
    },
    summary: {
      'pt-br':
        'Precisa de uma API confiável pra segurar regra de negócio chata, login com permissões por perfil e banco relacional bem organizado? Eu monto do zero.',
      en: 'Need a solid API with clean business rules, role-based auth, and a properly versioned PostgreSQL database? I build that end to end.',
    },
    proof: {
      'pt-br': 'Na prática: CTRLS ITSM (18 módulos em Java 21) e CTRLS Forms (multi-tenant com X-Clinic-ID e Flyway).',
      en: 'Built in: CTRLS ITSM (18 Java 21 modules) and CTRLS Forms (multi-tenant with X-Clinic-ID & Flyway).',
    },
    deliverables: {
      'pt-br': ['Java 21 & Spring Boot 3', 'PostgreSQL + Flyway', 'JWT, RBAC, 2FA e proteção LGPD'],
      en: ['Java 21 & Spring Boot 3', 'PostgreSQL + Flyway', 'JWT, RBAC, 2FA & PII encryption'],
    },
  },
  {
    title: {
      'pt-br': 'Fazer sistemas conversarem',
      en: 'Connecting Systems Together',
    },
    summary: {
      'pt-br':
        'Se sua equipe copia dado de um ERP pra colar em outro sistema, dá pra automatizar isso via API, webhook assíncrono e fila com controle de limite.',
      en: 'If your team is copying data out of one ERP and pasting it somewhere else, I can wire them together via REST APIs, webhooks, and rate-limited queues.',
    },
    proof: {
      'pt-br': 'Na prática: integrações reais com Feegow, Conta Azul V2, catracas GerAcesso e bots no Discord.',
      en: 'Built in: real integrations with Feegow ERP, Conta Azul V2, GerAcesso turnstiles, and Discord bots.',
    },
    deliverables: {
      'pt-br': ['Integrações REST & Webhooks', 'Rate Limiting com Redis', 'Documentação no Swagger'],
      en: ['REST & Webhook pipelines', 'Redis rate limiting', 'OpenAPI / Swagger docs'],
    },
  },
  {
    title: {
      'pt-br': 'Automações no WhatsApp',
      en: 'WhatsApp Workflow Automation',
    },
    summary: {
      'pt-br':
        'Confirmação de horário, lembrete automático, envio de QR Code ou roteamento pro setor certo — conectado direto ao banco ou ERP da empresa.',
      en: 'Appointment confirmations, smart reminders, QR Code delivery, and queue routing plugged directly into your system or ERP.',
    },
    proof: {
      'pt-br': 'Na prática: +10.000 mensagens processadas com Take Blip e vivência com Digisac.',
      en: 'Built in: 10,000+ automated messages with Take Blip plus hands-on Digisac workflows.',
    },
    deliverables: {
      'pt-br': ['Take Blip & Digisac', 'Confirmações, lembretes e menus', 'Pós-atendimento e avaliações'],
      en: ['Take Blip & Digisac', 'Confirmations, reminders & menus', 'Post-visit review flows'],
    },
  },
  {
    title: {
      'pt-br': 'Sistemas Web & Páginas Rápidas',
      en: 'Web Apps & Fast Landing Pages',
    },
    summary: {
      'pt-br':
        'Desde painéis internos e formulários dinâmicos em React até páginas rápidas na Cloudflare que abrem na hora quando o cliente lê um QR Code.',
      en: 'From React admin panels and dynamic forms to instant-loading Next.js pages on Cloudflare built for mobile QR Code scans.',
    },
    proof: {
      'pt-br': 'Na prática: CTRLS Forms (React + Vite + Nginx) e Portal Clínico (Next.js na Cloudflare Edge).',
      en: 'Built in: CTRLS Forms (React + Vite + Nginx) and Clinical Portal (Next.js on Cloudflare Edge).',
    },
    deliverables: {
      'pt-br': ['React, Next.js & TypeScript', 'Formulários dinâmicos & PDFs', 'Deploy na Cloudflare ou Docker'],
      en: ['React, Next.js & TypeScript', 'Dynamic forms & PDF exports', 'Cloudflare Pages or Docker deploy'],
    },
  },
];
