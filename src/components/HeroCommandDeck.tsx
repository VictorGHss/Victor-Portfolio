import { useState } from 'react';
import { motion } from 'motion/react';

export interface CommandBlade {
  code: string;
  label: string;
  meta: string;
  href: string;
  download?: boolean;
}

interface HeroCommandDeckProps {
  fullName: string;
  location: string;
  education: string;
  blades: CommandBlade[];
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

export default function HeroCommandDeck({
  fullName,
  location,
  education,
  blades,
  githubUrl,
  linkedinUrl,
  email,
}: HeroCommandDeckProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="cmd-deck">
      {/* Developer Dossier Header Slab */}
      <div className="cmd-deck__profile">
        <div className="cmd-deck__profile-top">
          <span className="cmd-deck__tag">DEV // PROFILE</span>
          <span className="cmd-deck__loc">{location}</span>
        </div>
        <h2 className="cmd-deck__name">{fullName}</h2>
        <p className="cmd-deck__edu">{education}</p>
      </div>

      {/* Interactive P3R × P5R Command Blades */}
      <ul className="cmd-deck__list" role="list">
        {blades.map((blade, idx) => {
          const isSelected = activeIdx === idx;
          return (
            <li
              key={blade.code}
              className="cmd-deck__item"
              style={{ '--blade-offset': `${idx * 7}px` } as React.CSSProperties}
            >
              <a
                href={blade.href}
                download={blade.download}
                className={`cmd-deck__link ${isSelected ? 'is-selected' : ''}`}
                onMouseEnter={() => setActiveIdx(idx)}
                onFocus={() => setActiveIdx(idx)}
              >
                {isSelected && (
                  <>
                    <motion.span
                      layoutId="hero-cmd-shadow"
                      className="cmd-deck__shadow"
                      transition={{ type: 'spring', stiffness: 430, damping: 26 }}
                    />
                    <motion.span
                      layoutId="hero-cmd-shard"
                      className="cmd-deck__shard"
                      transition={{ type: 'spring', stiffness: 470, damping: 30 }}
                    />
                  </>
                )}
                <span className="cmd-deck__code">{blade.code}</span>
                <span className="cmd-deck__label">{blade.label}</span>
                <span className="cmd-deck__meta">{blade.meta}</span>
              </a>
            </li>
          );
        })}
      </ul>

      {/* Verified Channels Strip */}
      <div className="cmd-deck__channels">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          GITHUB ↗
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          LINKEDIN ↗
        </a>
        <a href={`mailto:${email}`}>{email}</a>
      </div>

      <style>{`
        .cmd-deck {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }
        .cmd-deck__profile {
          background: #09172e;
          border-left: 4px solid #3ce2ff;
          border-top: 1px solid rgba(60, 226, 255, 0.25);
          border-right: 1px solid rgba(60, 226, 255, 0.25);
          border-bottom: 1px solid rgba(60, 226, 255, 0.25);
          padding: 1.15rem 1.35rem;
          box-shadow: 6px 6px 0px #0e7cff;
          transform: skewX(-3deg);
        }
        .cmd-deck__profile > * {
          transform: skewX(3deg);
        }
        .cmd-deck__profile-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.45rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
        }
        .cmd-deck__tag {
          background: #ff2e54;
          color: #ffffff;
          padding: 0.12rem 0.5rem;
          letter-spacing: 0.08em;
        }
        .cmd-deck__loc {
          color: var(--text-muted);
        }
        .cmd-deck__name {
          margin: 0;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.35rem;
          color: #ffffff;
          letter-spacing: -0.02em;
        }
        .cmd-deck__edu {
          margin: 0.25rem 0 0;
          font-size: 0.88rem;
          color: var(--text-secondary);
        }
        .cmd-deck__list {
          list-style: none;
          margin: 0;
          padding: 0.25rem 0;
          display: grid;
          gap: 0.42rem;
        }
        .cmd-deck__item {
          margin-left: var(--blade-offset, 0px);
        }
        .cmd-deck__link {
          position: relative;
          isolation: isolate;
          display: grid;
          grid-template-columns: 34px 1fr auto;
          align-items: center;
          gap: 0.75rem;
          padding: 0.68rem 1.25rem 0.68rem 1rem;
          background: rgba(9, 23, 46, 0.78);
          border-left: 3px solid rgba(60, 226, 255, 0.45);
          transform: skewX(-7deg);
          transition: transform 0.24s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.16s ease;
        }
        .cmd-deck__link > * {
          transform: skewX(7deg);
        }
        .cmd-deck__link.is-selected {
          border-left-color: transparent;
          transform: skewX(-7deg) translateX(8px);
        }
        .cmd-deck__shadow {
          position: absolute;
          inset: 4px -7px -5px 6px;
          z-index: -2;
          background: #ff2e54;
          clip-path: polygon(0 6%, 100% 0, calc(100% - 12px) 100%, 3px 95%);
        }
        .cmd-deck__shard {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: #ffffff;
          clip-path: polygon(0 0, 100% 3%, calc(100% - 14px) 100%, 0 97%);
        }
        .cmd-deck__code {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          color: #3ce2ff;
        }
        .cmd-deck__link.is-selected .cmd-deck__code {
          color: #ff2e54;
        }
        .cmd-deck__label {
          font-family: var(--font-display);
          font-size: 1.42rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          line-height: 1;
          color: #f4f9ff;
        }
        .cmd-deck__link.is-selected .cmd-deck__label {
          color: #040b16;
        }
        .cmd-deck__meta {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          white-space: nowrap;
        }
        .cmd-deck__link.is-selected .cmd-deck__meta {
          color: #0e7cff;
        }
        .cmd-deck__channels {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          padding-top: 0.35rem;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
        }
        .cmd-deck__channels a {
          color: #3ce2ff;
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .cmd-deck__channels a:hover {
          color: #ffffff;
          transform: translateY(-2px);
        }
        @media (max-width: 640px) {
          .cmd-deck__item {
            margin-left: 0;
          }
          .cmd-deck__meta {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
