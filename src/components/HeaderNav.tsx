import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import type { Locale } from '../i18n/config';
import { getAlternateLocale, localizePath, switchLocalePath } from '../i18n/config';
import type { NavItem, UiDictionary } from '../i18n/ui';
import './HeaderNav.css';

interface HeaderNavProps {
  locale: Locale;
  currentPath: string;
  navItems: NavItem[];
  controls: UiDictionary['controls'];
}

export default function HeaderNav({ locale, currentPath, navItems, controls }: HeaderNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
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

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const activeIdx = navItems.findIndex((item) => isActive(item));
    const focusTarget = itemRefs.current[activeIdx >= 0 ? activeIdx : 0];
    setTimeout(() => focusTarget?.focus(), 60);

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
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen, navItems]);

  return (
    <>
      <header className="site-header">
        <div className="container site-header__inner">
          <a href={localizePath(locale)} className="brand-mark" aria-label="Vito.dev Home">
            <span className="brand-mark__slash" aria-hidden="true" />
            <span className="brand-mark__text">
              VITO<span className="brand-mark__dot">.DEV</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            <ul className="desktop-nav__list">
              {navItems.map((item) => {
                const active = isActive(item);
                return (
                  <li key={item.key}>
                    <a
                      href={localizePath(locale, item.slug)}
                      className={`desktop-nav__link ${active ? 'is-active' : ''}`}
                      aria-current={active ? 'page' : undefined}
                    >
                      {active && (
                        <motion.span
                          layoutId="p3-active-pill"
                          className="desktop-nav__pill"
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        />
                      )}
                      <span className="desktop-nav__code">{item.code}</span>
                      <span className="desktop-nav__label">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

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
              className="aquatic-menu-trigger"
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
            className="aquatic-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={controls.menuOpen}
            initial={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={{ opacity: 0, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aquatic-overlay__rays" aria-hidden="true" />
            <div className="aquatic-overlay__bubbles" aria-hidden="true">
              <span /><span /><span /><span /><span />
            </div>

            <div className="container aquatic-overlay__inner">
              <div className="aquatic-overlay__top">
                <span className="aquatic-overlay__brand">
                  <span className="brand-mark__slash" aria-hidden="true" />
                  VITO<span className="brand-mark__dot">.DEV</span>
                </span>
                <button
                  type="button"
                  className="aquatic-close-btn"
                  onClick={() => {
                    setMenuOpen(false);
                    menuBtnRef.current?.focus();
                  }}
                  aria-label={controls.menuClose}
                >
                  <X size={20} aria-hidden="true" />
                  <span>ESC</span>
                </button>
              </div>

              <div className="aquatic-overlay__grid">
                <nav className="aquatic-nav" aria-label="Full Screen Navigation">
                  <ul className="aquatic-nav__list">
                    {navItems.map((item, idx) => {
                      const active = isActive(item);
                      const highlighted = hoveredKey ? hoveredKey === item.key : active;
                      return (
                        <motion.li
                          key={item.key}
                          initial={{ opacity: 0, x: -32 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.45,
                            delay: 0.16 + idx * 0.09,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <a
                            ref={(el) => {
                              itemRefs.current[idx] = el;
                            }}
                            href={localizePath(locale, item.slug)}
                            className={`aquatic-nav__link ${active ? 'is-active' : ''}`}
                            aria-current={active ? 'page' : undefined}
                            onMouseEnter={() => setHoveredKey(item.key)}
                            onMouseLeave={() => setHoveredKey(null)}
                            onFocus={() => setHoveredKey(item.key)}
                            onBlur={() => setHoveredKey(null)}
                            onClick={() => setMenuOpen(false)}
                          >
                            {highlighted && (
                              <motion.span
                                layoutId="p3-aquatic-select"
                                className="aquatic-nav__highlight"
                                transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                              />
                            )}
                            <span className="aquatic-nav__code">{item.code}</span>
                            <span className="aquatic-nav__label">{item.label}</span>
                          </a>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>

                <aside className="aquatic-overlay__aside">
                  <p className="aquatic-overlay__kicker">VICTOR GABRIEL // VITO.DEV</p>
                  <p className="aquatic-overlay__desc">
                    {locale === 'pt-br'
                      ? 'Engenharia de Software, Backend Java / Spring Boot, React & TypeScript, APIs REST e Automações.'
                      : 'Software Engineering, Java / Spring Boot Backends, React & TypeScript, REST APIs, and Automation.'}
                  </p>
                  <a href={altPath} className="lang-switch aquatic-overlay__lang">
                    <Globe size={14} aria-hidden="true" />
                    <span>{locale === 'pt-br' ? 'Switch to English (EN)' : 'Mudar para Português (PT-BR)'}</span>
                  </a>
                </aside>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
