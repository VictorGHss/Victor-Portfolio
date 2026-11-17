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
  const [menuOpen, setMenuOpen] = useState(false);
  const [focusedKey, setFocusedKey] = useState<NavItem['key'] | null>(null);
  const [cursorOffset, setCursorOffset] = useState({ x: 0, y: 0 });
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const altLocale = getAlternateLocale(locale);
  const altPath = switchLocalePath(currentPath, altLocale);

  const isActive = (item: NavItem) => {
    const target = localizePath(locale, item.slug);
    if (item.key === 'home') {
      return currentPath === target || currentPath === `/${locale}`;
    }
    return currentPath.startsWith(target);
  };

  const activeItem = navItems.find((item) => isActive(item)) ?? navItems[0];
  const previewKey = focusedKey ?? activeItem.key;

  useEffect(() => {
    setMenuOpen(false);
    setFocusedKey(null);
  }, [currentPath]);

  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const activeIdx = navItems.findIndex((item) => isActive(item));
    const focusTarget = itemRefs.current[activeIdx >= 0 ? activeIdx : 0];
    const focusTimer = setTimeout(() => focusTarget?.focus(), 140);

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
    const nx = (e.clientX / window.innerWidth - 0.5) * 18;
    const ny = (e.clientY / window.innerHeight - 0.5) * 14;
    setCursorOffset({ x: nx, y: ny });
  };

  const renderPreview = () => {
    const isPt = locale === 'pt-br';
    switch (previewKey) {
      case 'home':
        return (
          <div className="ocean-preview__card">
            <span className="ocean-preview__tag">01 // {isPt ? 'APRESENTAÇÃO' : 'OVERVIEW'}</span>
            <h3 className="ocean-preview__title">Victor Gabriel</h3>
            <p className="ocean-preview__text">
              {isPt
                ? 'Estudante de ADS na UTFPR. Trabalho com Java, Spring Boot, React, TypeScript e automações que tiram trabalho manual da frente.'
                : 'Systems Analysis & Development student at UTFPR. I build backends in Java/Spring Boot, web apps in React/TypeScript, and workflow automations.'}
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
            <span className="ocean-preview__tag">02 // {isPt ? 'PROJETOS AUTORAIS' : 'PROJECTS'}</span>
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
                ? 'CTRLS ITSM (~3 meses em uso real, ciclo encerrado), CTRLS Forms, Portal Clínico, Chamados Chesiquímica, Rewit e Job Hunter.'
                : 'CTRLS ITSM (~3 months real use, cycle concluded), CTRLS Forms, Clinical Portal, Chesiquímica Ticketing, Rewit, and Job Hunter.'}
            </p>
          </div>
        );
      case 'experience':
        return (
          <div className="ocean-preview__card">
            <span className="ocean-preview__tag">03 // {isPt ? 'TRAJETÓRIA' : 'EXPERIENCE'}</span>
            <h3 className="ocean-preview__title">{isPt ? 'Linha do Tempo' : 'Career Timeline'}</h3>
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
            <span className="ocean-preview__tag">04 // {isPt ? 'STACK PRINCIPAL' : 'TECH STACK'}</span>
            <h3 className="ocean-preview__title">Java · Spring · React · SQL</h3>
            <p className="ocean-preview__stack">
              Java 17/21 · Spring Boot 3 · Spring Security · React · TypeScript · PostgreSQL · Redis · Docker · Git · Linux · APIs REST · Webhooks
            </p>
          </div>
        );
      case 'about':
        return (
          <div className="ocean-preview__card">
            <span className="ocean-preview__tag">05 // {isPt ? 'PERFIL & FORMAÇÃO' : 'ABOUT'}</span>
            <h3 className="ocean-preview__title">UTFPR · SENAI · MCT Cursos</h3>
            <p className="ocean-preview__text">
              {isPt
                ? 'Base técnica em Informática (SENAI), Administração (MCT Cursos, 2021), Logística e graduação em ADS na UTFPR. Português nativo e inglês intermediário.'
                : 'Technical background in IT (SENAI), Business Administration (MCT Cursos, 2021), Logistics, and Technology Degree in ADS at UTFPR. Native Portuguese, intermediate English.'}
            </p>
          </div>
        );
      case 'services':
        return (
          <div className="ocean-preview__card">
            <span className="ocean-preview__tag">06 // {isPt ? 'SERVIÇOS' : 'SERVICES'}</span>
            <h3 className="ocean-preview__title">{isPt ? 'Escopo Técnico' : 'Technical Scope'}</h3>
            <ul className="ocean-preview__list">
              <li>{isPt ? 'Desenvolvimento Backend (Java / Spring Boot)' : 'Backend Development (Java / Spring Boot)'}</li>
              <li>{isPt ? 'APIs REST, Webhooks & Integrações' : 'REST APIs, Webhooks & Integrations'}</li>
              <li>{isPt ? 'Automação WhatsApp (Blip & Digisac)' : 'WhatsApp Automation (Blip & Digisac)'}</li>
              <li>{isPt ? 'Aplicações Web (React & TypeScript)' : 'Web Applications (React & TypeScript)'}</li>
            </ul>
          </div>
        );
      case 'contact':
        return (
          <div className="ocean-preview__card">
            <span className="ocean-preview__tag">07 // {isPt ? 'CONTATO & CV' : 'CONTACT & RESUME'}</span>
            <h3 className="ocean-preview__title">{PROFILE.email}</h3>
            <p className="ocean-preview__text">
              {isPt
                ? 'Canais diretos por e-mail, GitHub e LinkedIn, além do currículo em PDF de 1 página em português e inglês.'
                : 'Direct channels via email, GitHub, and LinkedIn, plus 1-page PDF resumes in Portuguese and English.'}
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
              <span className="brand-mark__slash" aria-hidden="true" />
              <span className="brand-mark__text">
                VITO<span className="brand-mark__dot">.DEV</span>
              </span>
            </a>
            <span className="header-route-indicator" aria-hidden="true">
              {activeItem.code} / {activeItem.label}
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
              {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
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
              transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
            }}
            exit={{
              opacity: 0,
              clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
              transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
            }}
          >
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
                  <span className="brand-mark__slash" aria-hidden="true" />
                  VITO<span className="brand-mark__dot">.DEV</span>
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
                          style={{ '--stagger-x': `${idx * 8}px` } as React.CSSProperties}
                          className="ocean-nav__item"
                          initial={{ opacity: 0, x: -36 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.62,
                            delay: 0.28 + idx * 0.135,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <a
                            ref={(el) => {
                              itemRefs.current[idx] = el;
                            }}
                            href={localizePath(locale, item.slug)}
                            className={`ocean-nav__link ${active ? 'is-active' : ''}`}
                            aria-current={active ? 'page' : undefined}
                            onMouseEnter={() => setFocusedKey(item.key)}
                            onFocus={() => setFocusedKey(item.key)}
                            onClick={() => setMenuOpen(false)}
                          >
                            {highlighted && (
                              <motion.span
                                layoutId="p3-aquatic-select"
                                className="ocean-nav__highlight"
                                transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                              />
                            )}
                            <span className="ocean-nav__code">{item.code}</span>
                            <span className="ocean-nav__slash" aria-hidden="true">/</span>
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
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
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
