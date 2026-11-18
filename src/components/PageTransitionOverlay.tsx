import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface AstroPreparationEvent extends Event {
  loader?: () => Promise<void>;
}

interface TransitionState {
  visible: boolean;
  stage: 'cover' | 'reveal';
  id: number;
}

interface BubbleSpec {
  left: string;
  size: number;
  delay: number;
  duration: number;
  sway: number;
  tier: 'hero' | 'mid' | 'fizz';
}

const BUBBLES: BubbleSpec[] = [
  // Hero glassy spheres (foreground)
  { left: '11%', size: 46, delay: 0.04, duration: 1.06, sway: 22, tier: 'hero' },
  { left: '28%', size: 38, delay: 0.12, duration: 1.02, sway: -18, tier: 'hero' },
  { left: '47%', size: 54, delay: 0.02, duration: 1.12, sway: 26, tier: 'hero' },
  { left: '66%', size: 42, delay: 0.09, duration: 1.05, sway: -24, tier: 'hero' },
  { left: '83%', size: 48, delay: 0.06, duration: 1.1, sway: 20, tier: 'hero' },
  { left: '92%', size: 34, delay: 0.16, duration: 0.98, sway: -16, tier: 'hero' },

  // Midground effervescent stream
  { left: '6%', size: 20, delay: 0.08, duration: 0.94, sway: -14, tier: 'mid' },
  { left: '17%', size: 24, delay: 0.18, duration: 0.98, sway: 16, tier: 'mid' },
  { left: '23%', size: 16, delay: 0.05, duration: 0.9, sway: -12, tier: 'mid' },
  { left: '35%', size: 26, delay: 0.22, duration: 1.04, sway: 19, tier: 'mid' },
  { left: '42%', size: 18, delay: 0.14, duration: 0.92, sway: -15, tier: 'mid' },
  { left: '53%', size: 22, delay: 0.2, duration: 1.0, sway: 14, tier: 'mid' },
  { left: '60%', size: 15, delay: 0.07, duration: 0.88, sway: -11, tier: 'mid' },
  { left: '72%', size: 25, delay: 0.24, duration: 1.02, sway: 17, tier: 'mid' },
  { left: '78%', size: 19, delay: 0.11, duration: 0.95, sway: -14, tier: 'mid' },
  { left: '88%', size: 22, delay: 0.21, duration: 0.99, sway: 15, tier: 'mid' },
  { left: '31%', size: 21, delay: 0.27, duration: 0.96, sway: -16, tier: 'mid' },
  { left: '63%', size: 20, delay: 0.29, duration: 0.96, sway: 15, tier: 'mid' },

  // Trailing micro-sparkles
  { left: '9%', size: 9, delay: 0.15, duration: 0.86, sway: 9, tier: 'fizz' },
  { left: '21%', size: 8, delay: 0.26, duration: 0.88, sway: -10, tier: 'fizz' },
  { left: '39%', size: 10, delay: 0.19, duration: 0.9, sway: 11, tier: 'fizz' },
  { left: '50%', size: 7, delay: 0.28, duration: 0.85, sway: -8, tier: 'fizz' },
  { left: '58%', size: 10, delay: 0.17, duration: 0.89, sway: 10, tier: 'fizz' },
  { left: '70%', size: 8, delay: 0.3, duration: 0.86, sway: -9, tier: 'fizz' },
  { left: '81%', size: 9, delay: 0.23, duration: 0.88, sway: 11, tier: 'fizz' },
  { left: '94%', size: 8, delay: 0.13, duration: 0.84, sway: -8, tier: 'fizz' },
];

export default function PageTransitionOverlay() {
  const [state, setState] = useState<TransitionState>({
    visible: false,
    stage: 'cover',
    id: 0,
  });
  const [reducedMotion, setReducedMotion] = useState(false);
  const runIdRef = useRef(0);
  const cleanupTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);

    const handleBeforePrep = (rawEvent: Event) => {
      if (mq.matches) return;
      const event = rawEvent as AstroPreparationEvent;
      const nextId = runIdRef.current + 1;
      runIdRef.current = nextId;

      if (cleanupTimerRef.current) clearTimeout(cleanupTimerRef.current);
      setState({ visible: true, stage: 'cover', id: nextId });

      // Hold the DOM swap briefly until the ocean crest + bubbles cover the screen
      const originalLoader = event.loader;
      if (typeof originalLoader === 'function') {
        event.loader = async () => {
          await Promise.all([
            originalLoader(),
            new Promise<void>((resolve) => setTimeout(resolve, 410)),
          ]);
        };
      }

      // Safety reset in case navigation is interrupted
      cleanupTimerRef.current = setTimeout(() => {
        setState((prev) => (prev.id === nextId ? { ...prev, visible: false } : prev));
      }, 1700);
    };

    const handleAfterSwap = () => {
      if (mq.matches) return;
      const activeId = runIdRef.current;
      if (cleanupTimerRef.current) clearTimeout(cleanupTimerRef.current);

      setState((prev) =>
        prev.visible ? { ...prev, stage: 'reveal' } : prev
      );

      cleanupTimerRef.current = setTimeout(() => {
        setState((prev) => (prev.id === activeId ? { ...prev, visible: false } : prev));
      }, 680);
    };

    document.addEventListener('astro:before-preparation', handleBeforePrep);
    document.addEventListener('astro:after-swap', handleAfterSwap);

    return () => {
      mq.removeEventListener('change', onChange);
      document.removeEventListener('astro:before-preparation', handleBeforePrep);
      document.removeEventListener('astro:after-swap', handleAfterSwap);
      if (cleanupTimerRef.current) clearTimeout(cleanupTimerRef.current);
    };
  }, []);

  if (reducedMotion || !state.visible) return null;

  return (
    <div
      key={state.id}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Surging Deep-Sea Wave Curtain (covers old route, then lifts off new route) */}
      <motion.div
        style={{
          position: 'absolute',
          left: '-4vw',
          width: '108vw',
          top: 0,
          height: '152vh',
          willChange: 'transform',
          zIndex: 2,
        }}
        initial={{ y: '108vh' }}
        animate={{ y: state.stage === 'cover' ? '-18vh' : '-166vh' }}
        transition={
          state.stage === 'cover'
            ? { duration: 0.42, ease: [0.22, 1, 0.36, 1] }
            : { duration: 0.58, ease: [0.33, 1, 0.68, 1] }
        }
      >
        {/* Top Leading Wave Crest (Cyan Foam + Electric Blue) */}
        <svg
          viewBox="0 0 1440 190"
          preserveAspectRatio="none"
          style={{
            display: 'block',
            width: '100%',
            height: '18vh',
            marginBottom: '-2px',
          }}
        >
          <path
            d="M0,118 C240,26 470,178 740,86 C1010,-4 1230,148 1440,64 L1440,190 L0,190 Z"
            fill="#3ce2ff"
            fillOpacity="0.88"
          />
          <path
            d="M0,142 C290,62 560,188 860,108 C1120,38 1310,152 1440,98 L1440,190 L0,190 Z"
            fill="#0e7cff"
          />
          <path
            d="M0,164 C340,108 640,192 980,136 C1190,102 1340,166 1440,138 L1440,190 L0,190 Z"
            fill="#092147"
          />
        </svg>

        {/* Solid Abyssal Ocean Core (guarantees 100% clean DOM swap underneath) */}
        <div
          style={{
            width: '100%',
            height: '116vh',
            background:
              'linear-gradient(180deg, #092147 0%, #06152d 35%, #040b16 75%, #081d3d 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Diagonal Caustic Glint inside the water */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse 75% 40% at 50% 18%, rgba(60, 226, 255, 0.24), transparent 70%), linear-gradient(112deg, transparent 43%, rgba(60, 226, 255, 0.14) 48%, rgba(255, 255, 255, 0.18) 50%, transparent 54%)',
            }}
          />
        </div>

        {/* Bottom Trailing Wave Skirt (peels upward smoothly to reveal the new tab) */}
        <svg
          viewBox="0 0 1440 190"
          preserveAspectRatio="none"
          style={{
            display: 'block',
            width: '100%',
            height: '18vh',
            marginTop: '-2px',
          }}
        >
          <path
            d="M0,0 L1440,0 L1440,94 C1190,172 930,28 650,114 C380,196 170,58 0,126 Z"
            fill="#0e7cff"
          />
          <path
            d="M0,0 L1440,0 L1440,56 C1160,132 900,10 620,82 C350,152 150,34 0,88 Z"
            fill="#081d3d"
          />
        </svg>
      </motion.div>

      {/* Multi-Layer Luminous Bubbles (rise with the wave and linger as the new page emerges) */}
      {BUBBLES.map((b, idx) => {
        const isHero = b.tier === 'hero';
        const isFizz = b.tier === 'fizz';

        return (
          <motion.div
            key={idx}
            style={{
              position: 'absolute',
              left: b.left,
              bottom: -b.size - 16,
              width: b.size,
              height: b.size,
              borderRadius: '999px',
              zIndex: isHero ? 5 : 4,
              willChange: 'transform, opacity',
              border: isFizz
                ? 'none'
                : isHero
                  ? '2px solid rgba(255, 255, 255, 0.86)'
                  : '1.5px solid rgba(196, 246, 255, 0.78)',
              background: isFizz
                ? 'radial-gradient(circle, #ffffff 0%, #3ce2ff 65%, transparent 100%)'
                : isHero
                  ? 'radial-gradient(circle at 28% 26%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.28) 17%, rgba(60, 226, 255, 0.42) 52%, rgba(14, 124, 255, 0.14) 78%, rgba(255, 255, 255, 0.35) 100%)'
                  : 'radial-gradient(circle at 30% 28%, rgba(255, 255, 255, 0.9) 0%, rgba(60, 226, 255, 0.38) 54%, rgba(14, 124, 255, 0.08) 85%)',
              boxShadow: isHero
                ? '0 0 20px rgba(60, 226, 255, 0.55), inset 0 -5px 10px rgba(14, 124, 255, 0.42)'
                : isFizz
                  ? '0 0 10px rgba(60, 226, 255, 0.8)'
                  : '0 0 12px rgba(60, 226, 255, 0.38)',
            }}
            initial={{ y: 0, x: 0, scale: 0.55, opacity: 0 }}
            animate={{
              y: '-124vh',
              x: [0, b.sway, -b.sway * 0.7, b.sway * 0.35],
              scale: isHero ? [0.6, 1.06, 0.95, 1.1] : [0.65, 1.02, 0.98, 1.04],
              opacity: [0, 0.96, 0.9, 0],
            }}
            transition={{
              duration: b.duration,
              delay: b.delay,
              times: [0, 0.24, 0.72, 1],
              ease: [0.2, 0.82, 0.32, 1],
            }}
          />
        );
      })}
    </div>
  );
}
