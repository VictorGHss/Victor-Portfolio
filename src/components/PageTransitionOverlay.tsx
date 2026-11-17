import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

type TransitionVariant = 'default' | 'diagonal' | 'stripes' | 'cards';

function pickVariant(pathname: string): TransitionVariant {
  if (pathname.includes('/projects')) return 'diagonal';
  if (pathname.includes('/experience') || pathname.includes('/about')) return 'stripes';
  if (pathname.includes('/skills') || pathname.includes('/services') || pathname.includes('/contact')) {
    return 'cards';
  }
  return 'default';
}

export default function PageTransitionOverlay() {
  const [active, setActive] = useState(false);
  const [variant, setVariant] = useState<TransitionVariant>('default');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);

    let timer: ReturnType<typeof setTimeout> | undefined;

    const handleBeforePrep = (ev: Event) => {
      if (mq.matches) return;
      const customEv = ev as CustomEvent<{ to?: URL }>;
      const targetPath = customEv.detail?.to?.pathname ?? window.location.pathname;
      setVariant(pickVariant(targetPath));
      setActive(true);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setActive(false), 430);
    };

    const handlePageLoad = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setActive(false), 180);
    };

    document.addEventListener('astro:before-preparation', handleBeforePrep);
    document.addEventListener('astro:after-swap', handlePageLoad);

    return () => {
      mq.removeEventListener('change', onChange);
      document.removeEventListener('astro:before-preparation', handleBeforePrep);
      document.removeEventListener('astro:after-swap', handlePageLoad);
      if (timer) clearTimeout(timer);
    };
  }, []);

  if (reducedMotion) return null;

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
          {variant === 'default' &&
            ['#071426', '#123B70', '#168BFF', '#55C8FF'].map((color, i) => (
              <motion.div
                key={color}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: color,
                  transformOrigin: 'left center',
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 1, 1, 0] }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.035,
                  times: [0, 0.4, 0.55, 1],
                  ease: [0.76, 0, 0.24, 1],
                }}
              />
            ))}

          {variant === 'diagonal' &&
            [
              { color: '#071426', top: '-12vh', height: '42vh', delay: 0 },
              { color: '#168BFF', top: '22vh', height: '38vh', delay: 0.04 },
              { color: '#55C8FF', top: '54vh', height: '44vh', delay: 0.08 },
              { color: '#F04E67', top: '48vh', height: '6vh', delay: 0.1 },
            ].map((panel, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  left: '-15vw',
                  width: '130vw',
                  top: panel.top,
                  height: panel.height,
                  background: panel.color,
                  clipPath: 'polygon(0 0, 100% 0, calc(100% - 110px) 100%, 0 100%)',
                  transform: 'rotate(-8deg)',
                }}
                initial={{ x: '-105%' }}
                animate={{ x: ['-105%', '0%', '105%'] }}
                transition={{
                  duration: 0.42,
                  delay: panel.delay,
                  times: [0, 0.45, 1],
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}

          {variant === 'stripes' &&
            [
              { color: '#071426', left: '-10vw', width: '48vw', delay: 0 },
              { color: '#123B70', left: '28vw', width: '36vw', delay: 0.03 },
              { color: '#168BFF', left: '56vw', width: '28vw', delay: 0.06 },
              { color: '#E8F2FF', left: '78vw', width: '32vw', delay: 0.09 },
            ].map((stripe, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  top: '-10vh',
                  left: stripe.left,
                  width: stripe.width,
                  height: '120vh',
                  background: stripe.color,
                  transform: 'skewX(-14deg)',
                }}
                initial={{ y: '-105%' }}
                animate={{ y: ['-105%', '0%', '105%'] }}
                transition={{
                  duration: 0.42,
                  delay: stripe.delay,
                  times: [0, 0.45, 1],
                  ease: [0.76, 0, 0.24, 1],
                }}
              />
            ))}

          {variant === 'cards' &&
            ['#071426', '#123B70', '#168BFF', '#55C8FF', '#071426'].map((color, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: `${i * 20}vh`,
                  height: '21vh',
                  background: color,
                }}
                initial={{ x: i % 2 === 0 ? '-100%' : '100%' }}
                animate={{ x: [i % 2 === 0 ? '-100%' : '100%', '0%', i % 2 === 0 ? '100%' : '-100%'] }}
                transition={{
                  duration: 0.42,
                  delay: i * 0.025,
                  times: [0, 0.45, 1],
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}
        </div>
      )}
    </AnimatePresence>
  );
}
