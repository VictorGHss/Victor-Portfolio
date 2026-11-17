import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import type { Locale } from '../i18n/config';
import { getAlternateLocale, localizePath, switchLocalePath } from '../i18n/config';
import type { NavItem, UiDictionary } from '../i18n/ui';
import AudioController from './AudioController';
import './HeaderNav.css';

interface HeaderNavProps {
  locale: Locale;
  currentPath: string;
  navItems: NavItem[];
  controls: UiDictionary['controls'];
}

export default function HeaderNav({ locale, currentPath, navItems, controls }: HeaderNavProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
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
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [currentPath]);

  return (
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
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
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
          <AudioController
            onLabel={controls.audioOn}
            offLabel={controls.audioOff}
            hintLabel={controls.audioHint}
            volumeLabel={controls.audioVolume}
          />

          <a
            href={altPath}
            className="lang-switch"
            aria-label={`${controls.languageLabel}: ${altLocale.toUpperCase()}`}
          >
            <Globe size={14} aria-hidden="true" />
            <span>{locale === 'pt-br' ? 'PT-BR' : 'EN'}</span>
            <span className="lang-switch__sep" aria-hidden="true">/</span>
            <span className="lang-switch__alt">{altLocale === 'pt-br' ? 'PT' : 'EN'}</span>
          </a>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setDrawerOpen((v) => !v)}
            aria-expanded={drawerOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={drawerOpen ? controls.menuClose : controls.menuOpen}
          >
            {drawerOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {drawerOpen && (
          <motion.nav
            id="mobile-nav-drawer"
            className="mobile-drawer"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="mobile-drawer__list">
              {navItems.map((item) => {
                const active = isActive(item);
                return (
                  <li key={item.key}>
                    <a
                      href={localizePath(locale, item.slug)}
                      className={`mobile-drawer__link ${active ? 'is-active' : ''}`}
                      aria-current={active ? 'page' : undefined}
                      onClick={() => setDrawerOpen(false)}
                    >
                      <span className="mobile-drawer__code">{item.code}</span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
