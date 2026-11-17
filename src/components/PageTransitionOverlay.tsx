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
      timer = setTimeout(() => setActive(false), 1600);
    };

    const handleAfterSwap = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setActive(false), 760);
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
    { left: '11%', size: 10, delay: 0.12 },
    { left: '26%', size: 20, delay: 0.28 },
    { left: '44%', size: 14, delay: 0.08 },
    { left: '62%', size: 24, delay: 0.22 },
    { left: '79%', size: 12, delay: 0.34 },
    { left: '91%', size: 18, delay: 0.16 },
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
          <svg width="0" height="0" style={{ position: 'absolute' }}>
            <defs>
              <filter id="ocean-refraction">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.01 0.028"
                  numOctaves="2"
                  seed="11"
                  result="noise"
                />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="22" />
              </filter>
            </defs>
          </svg>

          {/* Stage 1: Deep submerged ocean veil */}
          <motion.div
            style={{
              position: 'absolute',
              inset: '-10vh -8vw',
              background:
                'linear-gradient(162deg, rgba(7,20,38,0.98) 0%, rgba(11,30,56,0.96) 44%, rgba(18,59,112,0.92) 78%, rgba(22,139,255,0.85) 100%)',
            }}
            initial={{ y: '105%', opacity: 0.9 }}
            animate={{ y: ['105%', '0%', '-105%'], opacity: [0.9, 1, 0.88] }}
            transition={{
              duration: 1.55,
              times: [0, 0.48, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* Stage 2: Refracted luminous water crest */}
          <motion.div
            style={{
              position: 'absolute',
              left: '-12vw',
              right: '-12vw',
              height: '52vh',
              background:
                'radial-gradient(ellipse 85% 65% at 50% 48%, rgba(85,200,255,0.42) 0%, rgba(22,139,255,0.2) 55%, transparent 100%)',
              filter: 'url(#ocean-refraction)',
            }}
            initial={{ y: '112vh', opacity: 0 }}
            animate={{ y: ['112vh', '20vh', '-58vh'], opacity: [0, 0.92, 0] }}
            transition={{
              duration: 1.62,
              delay: 0.08,
              times: [0, 0.46, 1],
              ease: [0.25, 0.8, 0.25, 1],
            }}
          />

          {/* Discrete varied bubbles */}
          {bubbles.map((b, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                left: b.left,
                bottom: '-36px',
                width: b.size,
                height: b.size,
                borderRadius: '999px',
                border: '1px solid rgba(232, 242, 255, 0.45)',
                background: 'radial-gradient(circle at 30% 30%, rgba(85,200,255,0.4), transparent 72%)',
              }}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: '-118vh', opacity: [0, 0.7, 0] }}
              transition={{
                duration: 1.45,
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
