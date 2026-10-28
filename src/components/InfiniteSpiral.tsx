import { useEffect, useRef } from "react";

export type SpiralItem = { src: string; alt: string; label?: string };

type Props = {
  items: SpiralItem[];
  speed?: number;          // turns per second-ish multiplier
  radius?: number;
  cardWidth?: number;
  cardHeight?: number;
  verticalSpacing?: number;
  perspective?: number;
  cardRadius?: number;
  centerScale?: number;
  edgeFade?: number;       // 0..1 portion of height used to fade at top/bottom
  edgeBlur?: number;       // px blur at edges / back
  cardsPerTurn?: number;
  pauseOnHover?: boolean;
  imageFit?: "contain" | "cover";
  repeat?: number;
};

/**
 * A continuous 3D helix of cards. Cards orbit the vertical axis while
 * drifting upward; positions wrap so the motion never ends.
 */
export default function InfiniteSpiral({
  items, speed = 0.11, radius = 164, cardWidth = 162, cardHeight = 132, verticalSpacing = 56,
  perspective = 1200, cardRadius = 18, centerScale = 1.16, edgeFade = 0.34, edgeBlur = 7,
  cardsPerTurn = 7, pauseOnHover = true, imageFit = "contain", repeat = 2,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const paused = useRef(false);
  const list = Array.from({ length: repeat }, () => items).flat();
  const total = list.length;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let last = performance.now();
    let t = 0;

    const render = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const h = wrap.clientHeight;
      const scale = Math.min(1, wrap.clientWidth / (radius * 2 + cardWidth + 40));
      const r = radius * scale;
      const span = total * verticalSpacing;
      for (let i = 0; i < total; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;
        // u in [0,total): position along the helix, advancing with time
        const u = (((i - t) % total) + total) % total;
        const angle = (u / cardsPerTurn) * Math.PI * 2;
        const y = (u * verticalSpacing - span / 2) * scale;
        const x = Math.sin(angle) * r;
        const z = Math.cos(angle) * r;
        const depth = (z / r + 1) / 2;                      // 0 back → 1 front
        const vy = Math.abs(y) / (h / 2);                   // 0 center → 1 edge
        const fadeStart = 1 - edgeFade * 2;
        const edge = vy <= fadeStart ? 0 : Math.min(1, (vy - fadeStart) / (1 - fadeStart));
        const centerBoost = 1 + (centerScale - 1) * Math.max(0, 1 - vy * 1.6) * depth;
        const s = (0.72 + depth * 0.28) * centerBoost * scale;
        const opacity = Math.max(0, (0.35 + depth * 0.65) * (1 - edge));
        const blur = edgeBlur * Math.max(edge, (1 - depth) * 0.55);
        const rotY = Math.sin(angle) * 32;
        el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotY}deg) scale(${s})`;
        el.style.opacity = opacity.toFixed(3);
        el.style.filter = blur > 0.3 ? `blur(${blur.toFixed(1)}px)` : "none";
        el.style.zIndex = String(Math.round(depth * 1000));
      }
    };

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!paused.current && !reduce) t += dt * speed * cardsPerTurn;
      render();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [total, speed, radius, cardWidth, verticalSpacing, cardsPerTurn, centerScale, edgeFade, edgeBlur]);

  return (
    <div
      ref={wrapRef}
      className="absolute inset-0 overflow-hidden"
      style={{ perspective: `${perspective}px` }}
      onMouseEnter={() => pauseOnHover && (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="absolute left-1/2 top-1/2" style={{ transformStyle: "preserve-3d" }}>
        {list.map((it, i) => (
          <div
            key={i}
            ref={(el) => { cardRefs.current[i] = el; }}
            className="absolute will-change-transform"
            style={{
              width: cardWidth, height: cardHeight,
              marginLeft: -cardWidth / 2, marginTop: -cardHeight / 2,
              borderRadius: cardRadius, backfaceVisibility: "visible",
            }}
          >
            <img
              src={it.src} alt={it.alt} draggable={false}
              className="w-full h-full select-none shadow-[0_14px_32px_-14px_rgba(0,0,0,.28)]"
              style={{ objectFit: imageFit, borderRadius: cardRadius }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
