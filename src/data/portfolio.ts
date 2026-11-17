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
  deliverables: LocalizedList;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: {
      'pt-br': 'Janeiro de 2025 — Presente',
      en: 'January 2025 — Present',
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
        'Estagiário de TI (Janeiro de 2025 – Setembro de 2025) • Efetivado como Técnico de TI em Outubro de 2025, permanecendo até o presente.',
      en: 'IT Intern (January 2025 – September 2025) • Promoted to full-time IT Technician in October 2025, remaining through the present.',
    },
    summary: {
      'pt-br':
        'Sustentação de infraestrutura N1/N2 e implantação do sistema CTRLS-ITSM em período anterior (ciclo operacional já encerrado, com remoção posterior do ambiente e dos dados).',
      en: 'N1/N2 infrastructure support and deployment of CTRLS-ITSM during a previous operational period (operational cycle concluded, with environment and data subsequently removed).',
    },
    highlights: {
      'pt-br': [
        'Implantação e operação do CTRLS-ITSM em ciclo anterior, conectando o ERP médico Feegow ao Take Blip via APIs REST e webhooks assíncronos',
        'Automação de confirmações e lembretes via WhatsApp (+10.000 mensagens processadas)',
        'Fluxo de autoatendimento para portaria integrado ao gerAcesso com QR Codes temporários (+1.700 acessos)',
        'Rotina automática de captação de avaliações pós-consulta (evolução pública de 3.3 para 3.8 estrelas em 30 dias)',
        'Gestão interna de TI com inventário de equipamentos, consumíveis e triagem de chamados integrada ao Discord',
        'Suporte técnico N1/N2, diagnóstico de redes locais, manutenção de hardware e configuração de estações Windows',
      ],
      en: [
        'Deployed and operated CTRLS-ITSM during a previous cycle, connecting Feegow medical ERP to Take Blip via REST APIs and asynchronous webhooks',
        'Automated WhatsApp appointment confirmations and reminders (10,000+ messages processed)',
        'Self-service reception check-in integrated with gerAcesso via temporary QR Codes (1,700+ visitors)',
        'Automated post-visit review collection routine (public rating rose from 3.3 to 3.8 stars in 30 days)',
        'Structured internal IT operations with equipment inventory, consumables control, and Discord ticket triage',
        'Delivered N1/N2 technical support, LAN diagnostics, hardware maintenance, and Windows workstation setup',
      ],
    },
    tags: ['Java 21', 'Spring Boot', 'React', 'PostgreSQL', 'Redis', 'Take Blip', 'Docker'],
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
        'Estágio em suporte técnico N1/N2 para os setores corporativo e fabril, infraestrutura de rede, recuperação de estações e entrega do primeiro sistema interno de chamados.',
      en: 'IT internship delivering N1/N2 technical support for corporate and manufacturing teams, network troubleshooting, workstation recovery, and the company’s first internal ticketing form.',
    },
    highlights: {
      'pt-br': [
        'Atendimento a chamados N1/N2 para os setores corporativo e fabril, diagnosticando e resolvendo incidentes diários',
        'Manutenção preventiva e corretiva de computadores, montagem de bancadas de trabalho e recuperação de máquinas inoperantes',
        'Configuração de periféricos, impressoras compartilhadas em rede e testes de cabeamento estruturado e conectividade TCP/IP',
        'Padronização de máquinas corporativas com formatação, instalação de imagens Windows e homologação de softwares internos',
        'Desenvolvimento do Sistema de Chamados interno em HTML, CSS, JavaScript, SheetMonkey e Google Sheets',
      ],
      en: [
        'Handled N1/N2 support tickets across corporate and manufacturing environments',
        'Performed preventive and corrective hardware maintenance, workstation bench assembly, and machine recovery',
        'Configured peripherals, networked printers, and tested structured cabling and TCP/IP connectivity',
        'Standardized corporate workstations via Windows imaging and internal software validation',
        'Built the internal Ticketing System using HTML, CSS, JavaScript, SheetMonkey, and Google Sheets',
      ],
    },
    tags: ['Suporte N1/N2', 'TCP/IP', 'Windows', 'Hardware', 'HTML/CSS/JS', 'Google Sheets'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    period: {
      'pt-br': 'Previsão de Conclusão: 2027',
      en: 'Expected Graduation: 2027',
    },
    degree: {
      'pt-br': 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      en: 'B.Tech in Systems Analysis and Development',
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
      'pt-br': 'Conclusão: 2019',
      en: 'Completed: 2019',
    },
    degree: {
      'pt-br': 'Técnico em Administração',
      en: 'Technical Degree in Business Administration',
    },
    institution: {
      'pt-br': 'Colégio Estadual Professor Meneleu de Almeida Torres',
      en: 'Colégio Estadual Professor Meneleu de Almeida Torres',
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
      'pt-br': 'Backend & Ecossistema Java',
      en: 'Backend & Java Ecosystem',
    },
    tier: 'primary',
    items: [
      'Java (17 / 21)',
      'Spring Boot 3',
      'Spring Data JPA',
      'Spring Security',
      'Spring Web & Scheduler',
    ],
  },
  {
    category: {
      'pt-br': 'Frontend & Web',
      en: 'Frontend & Web',
    },
    tier: 'primary',
    items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'HTML5 / CSS3'],
  },
  {
    category: {
      'pt-br': 'Bancos de Dados & Cache',
      en: 'Databases & Caching',
    },
    tier: 'primary',
    items: ['SQL', 'PostgreSQL', 'MySQL', 'Redis (Rate Limiting & Cache)', 'Flyway'],
  },
  {
    category: {
      'pt-br': 'APIs, Webhooks & Integrações',
      en: 'APIs, Webhooks & Integrations',
    },
    tier: 'primary',
    items: ['APIs RESTful', 'Webhooks assíncronos', 'OAuth2 / JWT / RBAC', 'OpenAPI / Swagger', 'Postman'],
  },
  {
    category: {
      'pt-br': 'DevOps, Infraestrutura & Ferramentas',
      en: 'DevOps, Infrastructure & Tools',
    },
    tier: 'primary',
    items: ['Docker', 'Git & GitHub', 'GitHub Actions (CI/CD)', 'Linux (Debian / Ubuntu)', 'Cloudflare Pages / Tunnels'],
  },
  {
    category: {
      'pt-br': 'Contexto de Projetos & Secundárias',
      en: 'Project-Context & Secondary',
    },
    tier: 'secondary',
    items: ['Python', 'FastAPI', 'SQLAlchemy & Alembic', 'Flutter & Dart', 'PostGIS', 'Take Blip & Digisac'],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    title: {
      'pt-br': 'Desenvolvimento Backend',
      en: 'Backend Development',
    },
    summary: {
      'pt-br':
        'APIs RESTful, sistemas corporativos e serviços modulares em Java (Spring Boot) e bancos relacionais.',
      en: 'RESTful APIs, business systems, and modular services in Java (Spring Boot) backed by relational databases.',
    },
    deliverables: {
      'pt-br': ['Java & Spring Boot', 'PostgreSQL & Flyway', 'Autenticação JWT / RBAC'],
      en: ['Java & Spring Boot', 'PostgreSQL & Flyway', 'JWT / RBAC authentication'],
    },
  },
  {
    title: {
      'pt-br': 'APIs & Integrações',
      en: 'APIs & Integrations',
    },
    summary: {
      'pt-br':
        'Conexão entre ERPs, plataformas financeiras, controle de acesso e serviços externos via REST e webhooks.',
      en: 'Connecting ERPs, financial platforms, access control, and external services via REST APIs and webhooks.',
    },
    deliverables: {
      'pt-br': ['Webhooks assíncronos', 'OAuth2 & sincronização', 'OpenAPI / Swagger'],
      en: ['Asynchronous webhooks', 'OAuth2 & sync', 'OpenAPI / Swagger'],
    },
  },
  {
    title: {
      'pt-br': 'Automação de Processos',
      en: 'Process Automation',
    },
    summary: {
      'pt-br':
        'Redução de tarefas manuais com rotinas agendadas, triagem automatizada e integração de dados.',
      en: 'Eliminating repetitive manual work through scheduled jobs, automated triage, and data pipelines.',
    },
    deliverables: {
      'pt-br': ['Rotinas agendadas', 'Alertas operacionais', 'Scripts Python & Java'],
      en: ['Scheduled jobs', 'Operational alerts', 'Python & Java scripts'],
    },
  },
  {
    title: {
      'pt-br': 'Automação WhatsApp (Blip & Digisac)',
      en: 'WhatsApp Automation (Blip & Digisac)',
    },
    summary: {
      'pt-br':
        'Fluxos de confirmação, lembretes e roteamento de atendimento integrados ao sistema da operação.',
      en: 'Confirmation workflows, reminders, and queue routing integrated directly with core business systems.',
    },
    deliverables: {
      'pt-br': ['Take Blip & Digisac', 'Confirmações e lembretes', 'Integração WhatsApp ↔ ERP'],
      en: ['Take Blip & Digisac', 'Confirmations & reminders', 'WhatsApp ↔ ERP integration'],
    },
  },
  {
    title: {
      'pt-br': 'Aplicações Web & Painéis Administrativos',
      en: 'Web Applications & Admin Panels',
    },
    summary: {
      'pt-br':
        'Interfaces web responsivas e painéis de operação com React, TypeScript e Next.js.',
      en: 'Responsive web interfaces and operational dashboards built with React, TypeScript, and Next.js.',
    },
    deliverables: {
      'pt-br': ['React & TypeScript', 'Painéis de gestão', 'Sistemas personalizados'],
      en: ['React & TypeScript', 'Management dashboards', 'Custom systems'],
    },
  },
];
