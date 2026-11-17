import { useEffect, useRef, useState } from 'react';
import { Expand, X } from 'lucide-react';
import type { Locale } from '../i18n/config';
import type { ProjectScreenshot } from '../data/projects';

interface ScreenshotGalleryProps {
  screenshots: ProjectScreenshot[];
  locale: Locale;
  zoomHint: string;
  closeLabel: string;
}

export default function ScreenshotGallery({
  screenshots,
  locale,
  zoomHint,
  closeLabel,
}: ScreenshotGalleryProps) {
  const [selected, setSelected] = useState<ProjectScreenshot | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selected) return;
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelected(null);
        lastTriggerRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected]);

  const single = screenshots.length === 1;

  return (
    <>
      <div className={`shot-grid ${single ? 'shot-grid--single' : ''}`}>
        {screenshots.map((shot) => (
          <figure key={shot.src} className={`shot-frame ${shot.compact ? 'shot-frame--compact' : ''}`}>
            <button
              type="button"
              className="shot-frame__btn"
              onClick={(e) => {
                lastTriggerRef.current = e.currentTarget;
                setSelected(shot);
              }}
              aria-label={`${zoomHint}: ${shot.alt[locale]}`}
            >
              <img src={shot.src} alt={shot.alt[locale]} loading="lazy" width="960" height="540" />
              <span className="shot-frame__zoom" aria-hidden="true">
                <Expand size={14} />
                <span>{zoomHint}</span>
              </span>
            </button>
            <figcaption className="shot-frame__caption">{shot.caption[locale]}</figcaption>
          </figure>
        ))}
      </div>

      {selected && (
        <div
          className="shot-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected.alt[locale]}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelected(null);
              lastTriggerRef.current?.focus();
            }
          }}
        >
          <div className="shot-lightbox__panel">
            <div className="shot-lightbox__bar">
              <p className="shot-lightbox__cap">{selected.caption[locale]}</p>
              <button
                ref={closeBtnRef}
                type="button"
                className="shot-lightbox__close"
                onClick={() => {
                  setSelected(null);
                  lastTriggerRef.current?.focus();
                }}
                aria-label={closeLabel}
              >
                <X size={18} aria-hidden="true" />
                <span>ESC</span>
              </button>
            </div>
            <img src={selected.src} alt={selected.alt[locale]} className="shot-lightbox__img" />
          </div>
        </div>
      )}

      <style>{`
        .shot-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.75rem;
          margin-top: 1.5rem;
        }
        .shot-grid--single {
          grid-template-columns: 1fr;
        }
        .shot-frame {
          margin: 0;
          padding: 1rem;
          background: #0b1628;
          border: 1px solid rgba(232, 242, 255, 0.1);
        }
        .shot-frame--compact {
          max-width: 540px;
        }
        .shot-frame__btn {
          display: block;
          width: 100%;
          padding: 0;
          border: none;
          background: #07101f;
          cursor: zoom-in;
          position: relative;
          overflow: hidden;
        }
        .shot-frame__btn img {
          width: 100%;
          height: auto;
          display: block;
        }
        .shot-frame__zoom {
          position: absolute;
          right: 0.65rem;
          bottom: 0.65rem;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.3rem 0.6rem;
          background: rgba(7, 20, 38, 0.86);
          border: 1px solid rgba(232, 242, 255, 0.18);
          color: #e8f2ff;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          opacity: 0.9;
        }
        .shot-frame__caption {
          margin-top: 0.75rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
        }
        .shot-lightbox {
          position: fixed;
          inset: 0;
          z-index: 1200;
          background: rgba(4, 11, 22, 0.9);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .shot-lightbox__panel {
          max-width: min(1120px, 100%);
          max-height: 92vh;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          background: #0b1628;
          border: 1px solid rgba(232, 242, 255, 0.16);
          padding: 1rem;
        }
        .shot-lightbox__bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .shot-lightbox__cap {
          margin: 0;
          font-size: 0.92rem;
          color: var(--text-secondary);
        }
        .shot-lightbox__close {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.4rem 0.75rem;
          background: rgba(18, 59, 112, 0.6);
          border: 1px solid rgba(85, 200, 255, 0.35);
          color: #e8f2ff;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          cursor: pointer;
          flex-shrink: 0;
        }
        .shot-lightbox__img {
          max-width: 100%;
          max-height: 78vh;
          width: auto;
          height: auto;
          object-fit: contain;
          margin-inline: auto;
        }
        @media (max-width: 900px) {
          .shot-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
