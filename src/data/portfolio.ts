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
        'Estagiário de TI (Janeiro de 2025 – Setembro de 2025) • Efetivado como Técnico de TI em Outubro de 2025, permanecendo até Outubro de 2026.',
      en: 'IT Intern (January 2025 – September 2025) • Transitioned from IT Intern to IT Technician in October 2025, remaining until October 2026.',
    },
    summary: {
      'pt-br':
        'Atuei com suporte e infraestrutura N1/N2 e também implantei o CTRLS-ITSM — um projeto meu que rodou em ambiente real por cerca de três meses antes de ser desativado e ter seus dados removidos.',
      en: 'Worked on N1/N2 support and local infrastructure while also deploying CTRLS-ITSM — an independent project of mine that ran in real operations for roughly three months before being deactivated and having its data removed.',
    },
    highlights: {
      'pt-br': [
        'Operação real por ~3 meses do CTRLS-ITSM (integração Feegow + Take Blip via APIs REST e webhooks assíncronos)',
        'Automação de confirmações e lembretes no WhatsApp (+10.000 mensagens processadas no período)',
        'Autoatendimento para portaria integrado ao gerAcesso com QR Codes temporários (+1.700 visitantes)',
        'Rotina automática de captação de avaliações pós-consulta (evolução pública de 3.3 para 3.8 estrelas em 30 dias)',
        'Gestão interna de TI com inventário de equipamentos, controle de consumíveis e triagem de chamados no Discord',
        'Suporte técnico N1/N2, diagnóstico de redes locais, manutenção de hardware e configuração de estações Windows',
      ],
      en: [
        '~3 months of real operational use of CTRLS-ITSM (Feegow + Take Blip integration via REST APIs and asynchronous webhooks)',
        'Automated WhatsApp confirmations and reminders (10,000+ messages processed)',
        'Self-service reception check-in integrated with gerAcesso via temporary QR Codes (1,700+ visitors)',
        'Automated post-visit review collection workflow (public rating rose from 3.3 to 3.8 stars in 30 days)',
        'Internal IT operations with hardware inventory, consumables tracking, and Discord ticket triage',
        'N1/N2 technical support, LAN troubleshooting, hardware maintenance, and Windows workstation setup',
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
        'Estágio em suporte técnico N1/N2 para os setores corporativo e fabril, manutenção de máquinas, redes TCP/IP e colaboração no sistema interno de chamados.',
      en: 'IT internship covering N1/N2 support for corporate and manufacturing teams, hardware repair, TCP/IP networking, and collaboration on the internal ticketing form.',
    },
    highlights: {
      'pt-br': [
        'Atendimento a chamados N1/N2 para os setores corporativo e fabril, diagnosticando e resolvendo incidentes diários',
        'Manutenção preventiva e corretiva de computadores, montagem de bancadas de trabalho e recuperação de máquinas inoperantes',
        'Configuração de periféricos, impressoras compartilhadas em rede e testes de cabeamento estruturado e conectividade TCP/IP',
        'Padronização de máquinas corporativas com formatação, instalação de imagens Windows e homologação de softwares internos',
        'Desenvolvimento do Sistema de Chamados interno em colaboração com o supervisor João Gabriel Anjos (HTML, CSS, JavaScript, SheetMonkey e Google Sheets)',
      ],
      en: [
        'Handled N1/N2 support tickets across corporate and manufacturing environments',
        'Performed preventive and corrective hardware maintenance, bench assembly, and recovery of failed machines',
        'Configured peripherals and networked printers, and tested structured cabling and TCP/IP connectivity',
        'Standardized corporate workstations with Windows imaging and internal software validation',
        'Built the internal ticketing web form in collaboration with supervisor João Gabriel Anjos (HTML, CSS, JavaScript, SheetMonkey, and Google Sheets)',
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
      'Java (17 / 21)',
      'Spring Boot 3',
      'Spring Data JPA',
      'Spring Security',
      'PostgreSQL & SQL',
      'MySQL',
      'Redis (Rate Limiting & Cache)',
      'Flyway',
    ],
  },
  {
    category: {
      'pt-br': 'Frontend & Web',
      en: 'Frontend & Web',
    },
    tier: 'primary',
    items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'HTML5 & CSS3'],
  },
  {
    category: {
      'pt-br': 'APIs & Integrações',
      en: 'APIs & Integrations',
    },
    tier: 'primary',
    items: ['REST APIs', 'Asynchronous webhooks', 'OAuth2 / JWT / RBAC', 'OpenAPI / Swagger', 'Postman'],
  },
  {
    category: {
      'pt-br': 'DevOps & Ferramentas',
      en: 'DevOps & Tools',
    },
    tier: 'primary',
    items: ['Docker', 'Git & GitHub', 'GitHub Actions (CI/CD)', 'Linux (Debian / Ubuntu)', 'Cloudflare Pages / Tunnels'],
  },
  {
    category: {
      'pt-br': 'Tecnologias Adicionais',
      en: 'Additional Technologies',
    },
    tier: 'secondary',
    items: ['Python', 'FastAPI', 'SQLAlchemy & Alembic', 'Flutter & Dart', 'PostGIS', 'Take Blip & Digisac'],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    title: {
      'pt-br': 'Backend e APIs',
      en: 'Backend & APIs',
    },
    summary: {
      'pt-br':
        'Construção de APIs REST, regras de negócio, autenticação JWT/RBAC e modelagem em PostgreSQL.',
      en: 'Building REST APIs, business rules, JWT/RBAC authentication, and PostgreSQL data modeling.',
    },
    proof: {
      'pt-br': 'Demonstrado em: CTRLS ITSM (Java 21 / Spring Boot 3) e CTRLS Forms (multi-tenant + Flyway).',
      en: 'Shown in: CTRLS ITSM (Java 21 / Spring Boot 3) and CTRLS Forms (multi-tenant + Flyway).',
    },
    deliverables: {
      'pt-br': ['Java & Spring Boot', 'PostgreSQL & Flyway', 'Autenticação JWT / RBAC'],
      en: ['Java & Spring Boot', 'PostgreSQL & Flyway', 'JWT / RBAC authentication'],
    },
  },
  {
    title: {
      'pt-br': 'Integrações e Automações',
      en: 'Integrations & Automation',
    },
    summary: {
      'pt-br':
        'Conexão entre ERPs, serviços financeiros, controle de acesso e webhooks assíncronos.',
      en: 'Connecting ERPs, financial services, physical access control, and asynchronous webhooks.',
    },
    proof: {
      'pt-br': 'Demonstrado em: integrações do CTRLS ITSM com Feegow, Conta Azul V2, gerAcesso e Discord.',
      en: 'Shown in: CTRLS ITSM integrations with Feegow, Conta Azul V2, gerAcesso, and Discord.',
    },
    deliverables: {
      'pt-br': ['REST APIs & Webhooks', 'Controle de taxa com Redis', 'OpenAPI / Swagger'],
      en: ['REST APIs & Webhooks', 'Redis rate limiting', 'OpenAPI / Swagger'],
    },
  },
  {
    title: {
      'pt-br': 'Automação no WhatsApp',
      en: 'WhatsApp Automation',
    },
    summary: {
      'pt-br':
        'Fluxos de confirmação, lembretes e roteamento de filas ligados ao sistema da operação.',
      en: 'Appointment confirmations, reminders, and queue routing connected directly to your internal system.',
    },
    proof: {
      'pt-br': 'Experiência prática com Take Blip e Digisac em fluxos de atendimento.',
      en: 'Hands-on experience with Take Blip and Digisac messaging workflows.',
    },
    deliverables: {
      'pt-br': ['Take Blip & Digisac', 'Confirmações e lembretes', 'Integração WhatsApp ↔ ERP'],
      en: ['Take Blip & Digisac', 'Confirmations & reminders', 'WhatsApp ↔ ERP integration'],
    },
  },
  {
    title: {
      'pt-br': 'Aplicações Web',
      en: 'Web Applications',
    },
    summary: {
      'pt-br':
        'Interfaces web responsivas, formulários estruturados, painéis administrativos e páginas profissionais.',
      en: 'Responsive web interfaces, structured forms, admin dashboards, and specialist profile pages.',
    },
    proof: {
      'pt-br': 'Demonstrado em: CTRLS Forms (React/TypeScript) e Portal Clínico (Next.js na Cloudflare Pages).',
      en: 'Shown in: CTRLS Forms (React/TypeScript) and Clinical Portal (Next.js on Cloudflare Pages).',
    },
    deliverables: {
      'pt-br': ['React & TypeScript', 'Next.js & Cloudflare Pages', 'Painéis e formulários'],
      en: ['React & TypeScript', 'Next.js & Cloudflare Pages', 'Dashboards & forms'],
    },
  },
  {
    title: {
      'pt-br': 'Automação de Processos',
      en: 'Process Automation',
    },
    summary: {
      'pt-br':
        'Substituição de rotinas manuais por formulários, scripts, notificações e geração automática de relatórios.',
      en: 'Replacing manual routines with structured forms, scheduled jobs, alerts, and automated reports.',
    },
    proof: {
      'pt-br': 'Demonstrado em: Sistema de Chamados (Chesiquímica) e relatórios/alertas do CTRLS ITSM.',
      en: 'Shown in: Chesiquímica Ticketing System and CTRLS ITSM reporting/alerts.',
    },
    deliverables: {
      'pt-br': ['Rotinas agendadas', 'Alertas operacionais', 'Geração de PDFs'],
      en: ['Scheduled jobs', 'Operational alerts', 'PDF report generation'],
    },
  },
];
