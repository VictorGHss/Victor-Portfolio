import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Globe, Menu, X } from 'lucide-react';
import type { Locale } from '../i18n/config';
import { getAlternateLocale, localizePath, switchLocalePath } from '../i18n/config';
import type { NavItem, UiDictionary } from '../i18n/ui';
import { PROFILE } from '../data/profile';
import './HeaderNav.css';

interface HeaderNavProps {
  locale: Locale;
  currentPath: string;
  navItems: NavItem[];
  controls: UiDictionary['controls'];
}

export default function HeaderNav({ locale, currentPath, navItems, controls }: HeaderNavProps) {
  const [livePath, setLivePath] = useState(currentPath);
  const [menuOpen, setMenuOpen] = useState(false);
  const [focusedKey, setFocusedKey] = useState<NavItem['key'] | null>(null);
  const [cursorOffset, setCursorOffset] = useState({ x: 0, y: 0 });
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    setLivePath(currentPath);
  }, [currentPath]);

  useEffect(() => {
    const syncPath = () => {
      setLivePath(window.location.pathname);
      setMenuOpen(false);
      setFocusedKey(null);
    };
    document.addEventListener('astro:after-swap', syncPath);
    document.addEventListener('astro:page-load', syncPath);
    return () => {
      document.removeEventListener('astro:after-swap', syncPath);
      document.removeEventListener('astro:page-load', syncPath);
    };
  }, []);

  const altLocale = getAlternateLocale(locale);
  const altPath = switchLocalePath(livePath, altLocale);

  const isActive = (item: NavItem) => {
    const target = localizePath(locale, item.slug);
    if (item.key === 'home') {
      return livePath === target || livePath === `/${locale}`;
    }
    return livePath.startsWith(target);
  };

  const activeItem = navItems.find((item) => isActive(item)) ?? navItems[0];
  const previewKey = focusedKey ?? activeItem.key;
  const previewItem = navItems.find((item) => item.key === previewKey) ?? activeItem;

  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const activeIdx = navItems.findIndex((item) => isActive(item));
    const focusTarget = itemRefs.current[activeIdx >= 0 ? activeIdx : 0];
    const focusTimer = setTimeout(() => focusTarget?.focus(), 120);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        menuBtnRef.current?.focus();
        return;
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const currentIdx = itemRefs.current.findIndex((el) => el === document.activeElement);
        const delta = e.key === 'ArrowDown' ? 1 : -1;
        const nextIdx = (currentIdx + delta + navItems.length) % navItems.length;
        itemRefs.current[nextIdx]?.focus();
      } else if (e.key === 'Home') {
        e.preventDefault();
        itemRefs.current[0]?.focus();
      } else if (e.key === 'End') {
        e.preventDefault();
        itemRefs.current[navItems.length - 1]?.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen, navItems]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const nx = (e.clientX / window.innerWidth - 0.5) * 20;
    const ny = (e.clientY / window.innerHeight - 0.5) * 16;
    setCursorOffset({ x: nx, y: ny });
  };

  const renderPreview = () => {
    const isPt = locale === 'pt-br';
    switch (previewKey) {
      case 'home':
        return (
          <div className="ocean-preview__card">
            <span className="ocean-preview__tag">01 // {isPt ? 'INÍCIO' : 'HOME'}</span>
            <h3 className="ocean-preview__title">Victor Gabriel</h3>
            <p className="ocean-preview__text">
              {isPt
                ? 'Estudante de ADS na UTFPR. Curto pegar pepino do dia a dia e resolver com código — principalmente Java + Spring Boot no backend e React/TypeScript no front.'
                : "ADS student at UTFPR. I like taking messy day-to-day bottlenecks and fixing them with code — mostly Java + Spring Boot on the backend and React/TypeScript on the front."}
            </p>
            <div className="ocean-preview__meta">
              <span>Ponta Grossa, PR</span>
              <span>GitHub · LinkedIn · E-mail</span>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="ocean-preview__card">
            <span className="ocean-preview__tag">02 // {isPt ? 'MEUS PROJETOS' : 'MY PROJECTS'}</span>
            <h3 className="ocean-preview__title">CTRLS ITSM &amp; +5</h3>
            <img
              src="/images/projects/ctrls-itsm/dashboard_chamados.png"
              alt="CTRLS ITSM dashboard preview"
              className="ocean-preview__thumb"
              width="480"
              height="270"
            />
            <p className="ocean-preview__text">
              {isPt
                ? 'Do CTRLS ITSM (18 módulos em Java 21, usado por ~3 meses e já encerrado) até o CTRLS Forms, Portal Clínico, Rewit e Job Hunter.'
                : 'From CTRLS ITSM (18 Java 21 modules, ~3 months of real use, now concluded) to CTRLS Forms, Clinical Portal, Rewit, and Job Hunter.'}
            </p>
          </div>
        );
      case 'experience':
        return (
          <div className="ocean-preview__card">
            <span className="ocean-preview__tag">03 // {isPt ? 'TRAJETÓRIA' : 'EXPERIENCE'}</span>
            <h3 className="ocean-preview__title">{isPt ? 'De onde eu vim' : 'Where I Worked'}</h3>
            <ul className="ocean-preview__list">
              <li>
                <strong>Inovare Serviços de Saúde</strong>
                <span>{isPt ? 'Jan 2025 – Out 2026 (Estagiário → Técnico de TI)' : 'Jan 2025 – Oct 2026 (IT Intern → IT Technician)'}</span>
              </li>
              <li>
                <strong>Chesiquímica Ltda.</strong>
                <span>{isPt ? 'Ago 2024 – Dez 2024 (Estagiário de TI)' : 'Aug 2024 – Dec 2024 (IT Intern)'}</span>
              </li>
            </ul>
          </div>
        );
      case 'skills':
        return (
          <div className="ocean-preview__card">
            <span className="ocean-preview__tag">04 // {isPt ? 'FERRAMENTAS' : 'TECH STACK'}</span>
            <h3 className="ocean-preview__title">Java · Spring · React · SQL</h3>
            <p className="ocean-preview__stack">
              Java 17/21 · Spring Boot 3 · Spring Security · React · TypeScript · Next.js · PostgreSQL · Redis · Docker · Linux · Cloudflare
            </p>
          </div>
        );
      case 'about':
        return (
          <div className="ocean-preview__card">
            <span className="ocean-preview__tag">05 // {isPt ? 'SOBRE MIM' : 'ABOUT ME'}</span>
            <h3 className="ocean-preview__title">UTFPR · SENAI · MCT Cursos</h3>
            <p className="ocean-preview__text">
              {isPt
                ? 'Comecei mexendo em hardware e rede no suporte técnico e nunca mais parei de programar. Formação técnica em TI, Administração e Logística + graduação na UTFPR.'
                : 'Started out fixing hardware and networks in IT support and got hooked on building software. Technical degrees in IT, Business & Logistics + UTFPR.'}
            </p>
          </div>
        );
      case 'services':
        return (
          <div className="ocean-preview__card">
            <span className="ocean-preview__tag">06 // {isPt ? 'FREELAS & PROJETOS' : 'FREELANCE & SCOPE'}</span>
            <h3 className="ocean-preview__title">{isPt ? 'No que consigo ajudar' : 'How I Can Help'}</h3>
            <ul className="ocean-preview__list">
              <li>{isPt ? 'Backends e APIs em Java / Spring Boot' : 'Java / Spring Boot Backends & APIs'}</li>
              <li>{isPt ? 'Integrações com ERPs, Webhooks e PDFs' : 'ERP Integrations, Webhooks & PDFs'}</li>
              <li>{isPt ? 'Bots e fluxos no WhatsApp (Blip / Digisac)' : 'WhatsApp Flows & Bots (Blip / Digisac)'}</li>
              <li>{isPt ? 'Sites rápidos e painéis em React / Next.js' : 'Fast Web Apps & Dashboards in React / Next.js'}</li>
            </ul>
          </div>
        );
      case 'contact':
        return (
          <div className="ocean-preview__card">
            <span className="ocean-preview__tag">07 // {isPt ? 'BORA CONVERSAR' : "LET'S TALK"}</span>
            <h3 className="ocean-preview__title">{PROFILE.email}</h3>
            <p className="ocean-preview__text">
              {isPt
                ? 'Disponível agora pra vagas Júnior (Backend ou Full Stack) e projetos freelance. Currículo em PDF prontinho pra baixar.'
                : 'Currently available for Junior Backend / Full-Stack roles and freelance work. 1-page PDF resume ready to download.'}
            </p>
            <div className="ocean-preview__meta">
              <span>GitHub: @{PROFILE.githubUsername}</span>
              <span>PDF (PT-BR / EN)</span>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <header className="site-header">
        <div className="container site-header__inner">
          <div className="header-left">
            <a href={localizePath(locale)} className="brand-mark" aria-label="Vito.dev Home">
              <span className="brand-mark__badge">VITO</span>
              <span className="brand-mark__dot">.DEV</span>
            </a>
            <span className="header-route-indicator" aria-hidden="true">
              <strong>{activeItem.code}</strong> // {activeItem.label}
            </span>
          </div>

          <div className="header-actions">
            <a
              href={altPath}
              className="lang-switch"
              aria-label={`${controls.languageLabel}: ${altLocale.toUpperCase()}`}
            >
              <Globe size={14} aria-hidden="true" />
              <span>{locale === 'pt-br' ? 'PT' : 'EN'}</span>
              <span className="lang-switch__sep" aria-hidden="true">/</span>
              <span className="lang-switch__alt">{altLocale === 'pt-br' ? 'PT' : 'EN'}</span>
            </a>

            <button
              ref={menuBtnRef}
              type="button"
              className="ocean-menu-trigger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="aquatic-nav-overlay"
              aria-label={menuOpen ? controls.menuClose : controls.menuOpen}
            >
              {menuOpen ? <X size={17} aria-hidden="true" /> : <Menu size={17} aria-hidden="true" />}
              <span>MENU</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="aquatic-nav-overlay"
            className="ocean-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={controls.menuOpen}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{
              opacity: 1,
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
              transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1] },
            }}
            exit={{
              opacity: 0,
              clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
              transition: { duration: 0.62, ease: [0.76, 0, 0.24, 1] },
            }}
          >
            {/* Tactical Persona side stripes & giant dynamic watermark */}
            <div className="ocean-overlay__stripe-red" aria-hidden="true" />
            <div className="ocean-overlay__stripe-cyan" aria-hidden="true" />
            <div
              className="ocean-overlay__watermark"
              aria-hidden="true"
              style={{
                transform: `rotate(-8deg) translate3d(${cursorOffset.x * -0.8}px, ${cursorOffset.y * -0.8}px, 0)`,
              }}
            >
              {previewItem.label}
            </div>
            <div
              className="ocean-overlay__refraction"
              aria-hidden="true"
              style={{
                transform: `translate3d(${cursorOffset.x}px, ${cursorOffset.y}px, 0)`,
              }}
            />
            <div className="ocean-overlay__bubbles" aria-hidden="true">
              <span /><span /><span /><span /><span /><span />
            </div>

            <div className="container ocean-overlay__inner">
              <div className="ocean-overlay__top">
                <span className="ocean-overlay__brand">
                  <span className="brand-mark__badge">VITO</span>
                  <span className="brand-mark__dot">.DEV</span>
                </span>
                <div className="ocean-overlay__top-actions">
                  <a href={altPath} className="lang-switch">
                    <Globe size={14} aria-hidden="true" />
                    <span>{locale === 'pt-br' ? 'EN' : 'PT-BR'}</span>
                  </a>
                  <button
                    type="button"
                    className="ocean-close-btn"
                    onClick={() => {
                      setMenuOpen(false);
                      menuBtnRef.current?.focus();
                    }}
                    aria-label={controls.menuClose}
                  >
                    <X size={18} aria-hidden="true" />
                    <span>ESC</span>
                  </button>
                </div>
              </div>

              <div className="ocean-overlay__grid">
                <nav className="ocean-nav" aria-label="Main Navigation">
                  <ul className="ocean-nav__list">
                    {navItems.map((item, idx) => {
                      const active = isActive(item);
                      const highlighted = previewKey === item.key;
                      return (
                        <motion.li
                          key={item.key}
                          style={{ '--stagger-x': `${idx * 10}px` } as React.CSSProperties}
                          className="ocean-nav__item"
                          initial={{ opacity: 0, x: -48 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.48,
                            delay: 0.14 + idx * 0.065,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <a
                            ref={(el) => {
                              itemRefs.current[idx] = el;
                            }}
                            href={localizePath(locale, item.slug)}
                            className={`ocean-nav__link ${active ? 'is-active' : ''} ${highlighted ? 'is-highlighted' : ''}`}
                            aria-current={active ? 'page' : undefined}
                            onMouseEnter={() => setFocusedKey(item.key)}
                            onFocus={() => setFocusedKey(item.key)}
                            onClick={() => setMenuOpen(false)}
                          >
                            {highlighted && (
                              <>
                                <motion.span
                                  layoutId="p3-shadow-shard"
                                  className="ocean-nav__shadow-shard"
                                  transition={{ type: 'spring', stiffness: 420, damping: 26 }}
                                />
                                <motion.span
                                  layoutId="p3-aquatic-select"
                                  className="ocean-nav__highlight"
                                  transition={{ type: 'spring', stiffness: 460, damping: 30 }}
                                />
                              </>
                            )}
                            <span className="ocean-nav__code">{item.code}</span>
                            <span className="ocean-nav__label">{item.label}</span>
                          </a>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>

                <motion.aside
                  key={previewKey}
                  className="ocean-preview"
                  initial={{ opacity: 0, x: 18, rotate: -1 }}
                  animate={{ opacity: 1, x: 0, rotate: -1 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  {renderPreview()}
                </motion.aside>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
