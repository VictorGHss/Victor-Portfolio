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
        'Atuei como Estagiário de TI (Jan 2025 – Set 2025) e fui efetivado como Técnico de TI em Outubro de 2025, permanecendo até Outubro de 2026.',
      en: 'Started as an IT Intern (Jan 2025 – Sep 2025) and transitioned to IT Technician in October 2025, remaining until October 2026.',
    },
    summary: {
      'pt-br':
        'Cuidei da infraestrutura, redes e suporte N1/N2 no dia a dia. Em paralelo, desenvolvi e coloquei em operação o CTRLS-ITSM para automatizar agendamentos, portaria e chamados internos — o sistema rodou em ambiente real por cerca de três meses antes de ter seu ciclo encerrado e ser desativado.',
      en: 'Handled daily infrastructure, networking, and N1/N2 support. Alongside that, I built and deployed CTRLS-ITSM to automate scheduling, reception access, and internal ticketing — running in real operations for around three months before its cycle concluded and it was deactivated.',
    },
    highlights: {
      'pt-br': [
        'Implantei e operei por ~3 meses o CTRLS-ITSM (Java 21 + Spring Boot), integrando o ERP médico Feegow ao WhatsApp (Take Blip) via APIs REST e webhooks assíncronos',
        'Automatizei confirmações e lembretes de consultas no WhatsApp, processando mais de 10.000 mensagens e reduzindo faltas de pacientes',
        'Criei o fluxo de autoatendimento da portaria integrado às catracas (gerAcesso), gerando QR Codes temporários no WhatsApp para mais de 1.700 visitantes',
        'Implementei uma rotina automática de captação de avaliações pós-consulta no Google Meu Negócio, elevando a nota pública de 3.3 para 3.8 estrelas em 30 dias',
        'Estruturei a gestão interna de TI com inventário de equipamentos, controle de consumíveis e triagem de chamados integrada via webhook e bot ao Discord',
        'Atuei no suporte técnico N1/N2, diagnóstico de redes locais, manutenção de hardware e padronização de estações Windows',
      ],
      en: [
        'Deployed and operated CTRLS-ITSM (Java 21 + Spring Boot) for ~3 months, integrating Feegow ERP with WhatsApp (Take Blip) via REST APIs and async webhooks',
        'Automated WhatsApp appointment confirmations and reminders, processing 10,000+ messages and reducing patient no-shows',
        'Built a self-service reception check-in flow integrated with gerAcesso turnstiles, issuing temporary QR Codes via WhatsApp for 1,700+ visitors',
        'Implemented an automated post-visit Google review workflow that raised the public rating from 3.3 to 3.8 stars in 30 days',
        'Structured internal IT operations with hardware asset tracking, consumables inventory, and Discord-integrated ticket triage',
        'Provided hands-on N1/N2 support, LAN troubleshooting, hardware maintenance, and Windows workstation setup',
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
        'Estágio voltado para suporte técnico N1/N2 nos setores corporativo e fabril, manutenção de estações, testes de rede TCP/IP e desenvolvimento colaborativo do portal interno de chamados.',
      en: 'IT internship focused on N1/N2 support across corporate and manufacturing teams, workstation maintenance, TCP/IP networking, and co-building the internal ticketing portal.',
    },
    highlights: {
      'pt-br': [
        'Atendi chamados técnicos N1/N2 para os setores administrativo e fabril, diagnosticando e resolvendo incidentes de hardware, software e rede',
        'Realizei manutenção preventiva e corretiva de computadores, montagem de bancadas e recuperação de máquinas paradas',
        'Configurei impressoras compartilhadas em rede, periféricos e testes de cabeamento estruturado e conectividade TCP/IP',
        'Padronizei estações corporativas com formatação, imagens Windows e homologação de softwares internos',
        'Desenvolvi o Portal da T.I. em colaboração com o supervisor João Gabriel Anjos para centralizar chamados, solicitações de toners e equipamentos no Google Sheets via SheetMonkey',
      ],
      en: [
        'Handled daily N1/N2 support requests across corporate offices and the manufacturing floor',
        'Performed preventive and corrective PC maintenance, workstation assembly, and recovery of failed machines',
        'Configured networked printers and peripherals, and tested structured cabling and TCP/IP links',
        'Standardized corporate workstations with Windows imaging and internal software validation',
        'Co-developed the internal IT Portal with supervisor João Gabriel Anjos to centralize tickets, toner requests, and equipment orders in Google Sheets via SheetMonkey',
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
      'pt-br': 'Intermediário (boa leitura técnica, documentação e escrita funcional)',
      en: 'Intermediate (solid technical reading, documentation, and functional writing)',
    },
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: {
      'pt-br': 'Backend & Bancos de Dados',
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
      en: 'Frontend & Interfaces',
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
      'pt-br': 'IA no Fluxo, Infra & Deploy',
      en: 'AI Workflow, Infra & Deploy',
    },
    tier: 'primary',
    items: [
      'Engenharia assistida por IA & automação de tarefas',
      'Docker & Docker Compose',
      'Linux (Debian / Ubuntu / Home Server)',
      'GitHub Actions (CI/CD)',
      'Cloudflare Pages & Tunnels',
      'Nginx, Prometheus & Grafana',
    ],
  },
  {
    category: {
      'pt-br': 'Outras tecnologias aplicadas em projetos',
      en: 'Additional technologies used in projects',
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
        'Desenvolvimento de APIs REST em Java e Spring Boot com regras de negócio bem definidas, autenticação JWT/RBAC e banco relacional versionado.',
      en: 'Java and Spring Boot REST APIs with clear business rules, JWT/RBAC authentication, and versioned PostgreSQL schemas.',
    },
    proof: {
      'pt-br': 'Referências: CTRLS ITSM (18 módulos em Java 21) e CTRLS Forms (multi-tenant com X-Clinic-ID e Flyway).',
      en: 'References: CTRLS ITSM (18 Java 21 modules) and CTRLS Forms (multi-tenant with X-Clinic-ID & Flyway).',
    },
    deliverables: {
      'pt-br': ['Java 21 & Spring Boot 3', 'PostgreSQL + Flyway', 'JWT, RBAC, 2FA e proteção LGPD'],
      en: ['Java 21 & Spring Boot 3', 'PostgreSQL + Flyway', 'JWT, RBAC, 2FA & PII encryption'],
    },
  },
  {
    title: {
      'pt-br': 'Integrações entre sistemas & automação com IA',
      en: 'System Integrations & AI Automation',
    },
    summary: {
      'pt-br':
        'Conexão entre ERPs, financeiro, webhooks assíncronos e rotinas assistidas por IA para acelerar processos operacionais e eliminar retrabalho manual.',
      en: 'Connecting ERPs, financial APIs, asynchronous webhooks, and AI-assisted workflows to speed up operations and eliminate manual data entry.',
    },
    proof: {
      'pt-br': 'Referências: integrações com Feegow, Conta Azul V2, catracas GerAcesso, Discord e camada de IA com controles no Job Hunter.',
      en: 'References: integrations with Feegow ERP, Conta Azul V2, GerAcesso turnstiles, Discord, and controlled AI workflows in Job Hunter.',
    },
    deliverables: {
      'pt-br': ['APIs REST & Webhooks', 'Rate Limiting com Redis', 'Fluxos automatizados e assistidos por IA'],
      en: ['REST & Webhook pipelines', 'Redis rate limiting', 'Automated & AI-assisted workflows'],
    },
  },
  {
    title: {
      'pt-br': 'Automações no WhatsApp',
      en: 'WhatsApp Workflow Automation',
    },
    summary: {
      'pt-br':
        'Fluxos de confirmação, lembretes, envio de QR Codes e roteamento de atendimento integrados diretamente ao sistema interno da operação.',
      en: 'Confirmation flows, reminders, QR Code delivery, and queue routing connected directly to your internal platform.',
    },
    proof: {
      'pt-br': 'Referências: +10.000 mensagens processadas via Take Blip e experiência prática com Digisac.',
      en: 'References: 10,000+ automated messages via Take Blip plus hands-on Digisac workflows.',
    },
    deliverables: {
      'pt-br': ['Take Blip & Digisac', 'Confirmações, lembretes e menus', 'Pós-atendimento e avaliações'],
      en: ['Take Blip & Digisac', 'Confirmations, reminders & menus', 'Post-visit review flows'],
    },
  },
  {
    title: {
      'pt-br': 'Aplicações Web & Páginas Rápidas',
      en: 'Web Apps & Fast Pages',
    },
    summary: {
      'pt-br':
        'Painéis administrativos, formulários dinâmicos com geração de PDF e páginas leves na Cloudflare Edge otimizadas para acesso via celular e QR Code.',
      en: 'Admin panels, dynamic forms with automated PDF exports, and fast Cloudflare Edge pages built for mobile QR Code access.',
    },
    proof: {
      'pt-br': 'Referências: CTRLS Forms (React + Vite + Nginx) e Portal Clínico (Next.js na Cloudflare Pages).',
      en: 'References: CTRLS Forms (React + Vite + Nginx) and Clinical Portal (Next.js on Cloudflare Pages).',
    },
    deliverables: {
      'pt-br': ['React, Next.js & TypeScript', 'Formulários dinâmicos & PDFs', 'Deploy na Cloudflare ou Docker'],
      en: ['React, Next.js & TypeScript', 'Dynamic forms & PDF exports', 'Cloudflare Pages or Docker deploy'],
    },
  },
];
