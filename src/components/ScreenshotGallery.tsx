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
          gap: 1.5rem;
          margin-top: 1.5rem;
          align-items: stretch;
        }
        .shot-grid--single {
          grid-template-columns: 1fr;
        }
        .shot-frame {
          margin: 0;
          padding: 0.9rem;
          background: #08152b;
          border: 1px solid rgba(60, 226, 255, 0.24);
          box-shadow: 6px 6px 0 rgba(14, 124, 255, 0.35);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.2s ease;
        }
        .shot-frame:hover {
          transform: translate(-2px, -2px);
          border-color: rgba(60, 226, 255, 0.6);
        }
        .shot-frame--compact {
          max-width: 540px;
        }
        .shot-frame__btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 310px;
          padding: 0.5rem;
          border: none;
          background: #040b16;
          cursor: zoom-in;
          position: relative;
          overflow: hidden;
        }
        .shot-frame--compact .shot-frame__btn {
          height: auto;
          padding: 0;
        }
        .shot-frame__btn img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
        }
        .shot-frame--compact .shot-frame__btn img {
          width: 100%;
          height: auto;
        }
        .shot-frame__zoom {
          position: absolute;
          right: 0.65rem;
          bottom: 0.65rem;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.3rem 0.65rem;
          background: rgba(4, 11, 22, 0.9);
          border: 1px solid rgba(60, 226, 255, 0.45);
          color: #f4f9ff;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
        }
        .shot-frame__caption {
          margin-top: 0.8rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
        }
        .shot-lightbox {
          position: fixed;
          inset: 0;
          z-index: 1200;
          background: rgba(4, 11, 22, 0.92);
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
          background: #08152b;
          border: 1px solid rgba(60, 226, 255, 0.35);
          box-shadow: 10px 10px 0 #0e7cff;
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
          background: #ff2e54;
          border: none;
          color: #ffffff;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          font-weight: 700;
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
          .shot-frame__btn {
            height: 250px;
          }
        }
      `}</style>
    </>
  );
}
