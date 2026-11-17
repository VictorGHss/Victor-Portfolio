import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function PageTransitionOverlay() {
  const [active, setActive] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);

    let timer: ReturnType<typeof setTimeout> | undefined;

    const handleBeforePrep = () => {
      if (mq.matches) return;
      setActive(true);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setActive(false), 1080);
    };

    const handleAfterSwap = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setActive(false), 420);
    };

    document.addEventListener('astro:before-preparation', handleBeforePrep);
    document.addEventListener('astro:after-swap', handleAfterSwap);

    return () => {
      mq.removeEventListener('change', onChange);
      document.removeEventListener('astro:before-preparation', handleBeforePrep);
      document.removeEventListener('astro:after-swap', handleAfterSwap);
      if (timer) clearTimeout(timer);
    };
  }, []);

  if (reducedMotion) return null;

  const bubbles = [
    { left: '14%', size: 12, delay: 0.08 },
    { left: '29%', size: 18, delay: 0.16 },
    { left: '47%', size: 10, delay: 0.05 },
    { left: '66%', size: 22, delay: 0.14 },
    { left: '83%', size: 14, delay: 0.22 },
  ];

  return (
    <AnimatePresence>
      {active && (
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            pointerEvents: 'none',
            overflow: 'hidden',
          }}
        >
          {/* SVG displacement filter for subtle organic water-crest distortion */}
          <svg width="0" height="0" style={{ position: 'absolute' }}>
            <defs>
              <filter id="aquatic-ripple">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.012 0.035"
                  numOctaves="2"
                  seed="7"
                  result="noise"
                />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" />
              </filter>
            </defs>
          </svg>

          {/* Deep oceanic sweep layer */}
          <motion.div
            style={{
              position: 'absolute',
              inset: '-8vh -8vw',
              background:
                'linear-gradient(155deg, rgba(7,20,38,0.97) 0%, rgba(18,59,112,0.94) 58%, rgba(22,139,255,0.86) 100%)',
              transformOrigin: 'bottom center',
            }}
            initial={{ y: '105%', opacity: 0.92 }}
            animate={{ y: ['105%', '0%', '-105%'], opacity: [0.92, 1, 0.85] }}
            transition={{
              duration: 1.05,
              times: [0, 0.48, 1],
              ease: [0.25, 0.8, 0.25, 1],
            }}
          />

          {/* Luminous water-crest wave with SVG turbulence */}
          <motion.div
            style={{
              position: 'absolute',
              left: '-10vw',
              right: '-10vw',
              height: '46vh',
              background:
                'radial-gradient(ellipse 80% 60% at 50% 45%, rgba(85,200,255,0.45) 0%, rgba(22,139,255,0.22) 55%, transparent 100%)',
              filter: 'url(#aquatic-ripple)',
            }}
            initial={{ y: '110vh', opacity: 0 }}
            animate={{ y: ['110vh', '22vh', '-50vh'], opacity: [0, 0.95, 0] }}
            transition={{
              duration: 1.05,
              delay: 0.06,
              times: [0, 0.46, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* Subtle rising bubbles */}
          {bubbles.map((b, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                left: b.left,
                bottom: '-30px',
                width: b.size,
                height: b.size,
                borderRadius: '999px',
                border: '1px solid rgba(232, 242, 255, 0.55)',
                background: 'radial-gradient(circle at 30% 30%, rgba(85,200,255,0.45), transparent 70%)',
              }}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: '-115vh', opacity: [0, 0.75, 0] }}
              transition={{
                duration: 0.98,
                delay: b.delay,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
