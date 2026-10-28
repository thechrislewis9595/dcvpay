import { useEffect, useRef, type ReactNode, type ElementType } from "react";
import { Link } from "react-router-dom";


export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 group" aria-label="DCvpayhome">
      <img
        src="/logo.png"
        alt="DCvpay"
        className="w-16 h-16 rounded-xl object-contain group-hover:scale-105 group-hover:rotate-[-4deg] transition-transform"
      />
      <span className={`font-display font-bold text-2xl tracking-tight ${light ? "text-white" : "text-fg"}`}>
        DCv<span className="text-brand">Pay</span>
      </span>
    </Link>
  );
}

export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: { children: ReactNode; className?: string; delay?: number; as?: ElementType }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); }
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</Tag>;
}

const eyebrowTone: Record<string, string> = {
  red: "text-rose-600 [&>i]:from-rose-500 [&>i]:to-orange-400", blue: "text-blue-600 [&>i]:from-sky-400 [&>i]:to-indigo-600",
  emerald: "text-emerald-600 [&>i]:from-emerald-400 [&>i]:to-teal-600", amber: "text-amber-600 [&>i]:from-amber-400 [&>i]:to-orange-500",
  violet: "text-violet-600 [&>i]:from-violet-400 [&>i]:to-fuchsia-600", cyan: "text-cyan-700 [&>i]:from-cyan-400 [&>i]:to-blue-600",
};
const EYEBROW_ORDER = ["blue", "violet", "emerald", "amber", "cyan", "red"];

export function Eyebrow({ children, tone }: { children: ReactNode; tone?: string }) {
  const key = typeof children === "string" ? children : "";
  const t = tone ?? EYEBROW_ORDER[[...key].reduce((a, c) => a + c.charCodeAt(0), 0) % EYEBROW_ORDER.length];
  return (
    <span className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] ${eyebrowTone[t]}`}>
      <i className="w-6 h-[2px] rounded-full bg-gradient-to-r" />{children}
    </span>
  );
}

export type Tone = "red" | "blue" | "emerald" | "amber" | "violet" | "cyan";
/** Rotation order: cool & fresh first; the warm "red" (rose→orange) tone is used sparingly. */
export const TONES: Tone[] = ["blue", "violet", "emerald", "amber", "cyan", "red"];
/** Solid gradient tiles with white glyphs. */
export const toneBox: Record<Tone, string> = {
  red: "bg-gradient-to-br from-rose-500 to-orange-400 text-white ring-white/20 shadow-md shadow-rose-500/25",
  blue: "bg-gradient-to-br from-sky-500 to-indigo-600 text-white ring-white/20 shadow-md shadow-indigo-500/25",
  emerald: "bg-gradient-to-br from-emerald-400 to-teal-600 text-white ring-white/20 shadow-md shadow-emerald-500/25",
  amber: "bg-gradient-to-br from-amber-400 to-orange-500 text-white ring-white/20 shadow-md shadow-amber-500/25",
  violet: "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white ring-white/20 shadow-md shadow-violet-500/25",
  cyan: "bg-gradient-to-br from-cyan-400 to-blue-600 text-white ring-white/20 shadow-md shadow-cyan-500/25",
};
export const toneText: Record<Tone, string> = { red: "text-rose-600", blue: "text-blue-600", emerald: "text-emerald-600", amber: "text-amber-600", violet: "text-violet-600", cyan: "text-cyan-700" };
export const toneBar: Record<Tone, string> = {
  red: "bg-gradient-to-r from-rose-500 to-orange-400", blue: "bg-gradient-to-r from-sky-500 to-indigo-600", emerald: "bg-gradient-to-r from-emerald-400 to-teal-600",
  amber: "bg-gradient-to-r from-amber-400 to-orange-500", violet: "bg-gradient-to-r from-violet-500 to-fuchsia-500", cyan: "bg-gradient-to-r from-cyan-400 to-blue-600",
};
export const toneSoft: Record<Tone, string> = {
  red: "bg-gradient-to-br from-rose-50 to-orange-50", blue: "bg-gradient-to-br from-sky-50 to-indigo-50", emerald: "bg-gradient-to-br from-emerald-50 to-teal-50",
  amber: "bg-gradient-to-br from-amber-50 to-orange-50", violet: "bg-gradient-to-br from-violet-50 to-fuchsia-50", cyan: "bg-gradient-to-br from-cyan-50 to-blue-50",
};

const hashTone = (name = "") => TONES[[...name].reduce((a, c) => a + c.charCodeAt(0), 0) % 5];

export function IconBox({ icon: Icon, size = "md", tone }: { icon: ElementType; size?: "md" | "lg"; tone?: Tone }) {
  const s = size === "lg" ? "w-12 h-12 [&>svg]:w-6 [&>svg]:h-6" : "w-10 h-10 [&>svg]:w-5 [&>svg]:h-5";
  const t = tone ?? hashTone((Icon as { displayName?: string }).displayName);
  return (
    <span className={`grid place-items-center ${s} rounded-xl ring-1 ${toneBox[t]} group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
      <Icon />
    </span>
  );
}

const HEADER_WASH = ["wash-blue", "wash-violet", "wash-mint", "wash-lilac", "wash-sky", "wash-warm", "wash-sunrise"];

export function PageHeader({ title, subtitle, eyebrow, children }: { title: string; subtitle: string; eyebrow?: string; children?: ReactNode }) {
  return (
    <section className={`relative overflow-hidden ${HEADER_WASH[[...title].reduce((a, c) => a + c.charCodeAt(0), 0) % HEADER_WASH.length]}`}>
      <div className="absolute inset-0 mesh-hero opacity-80" />
      <svg className="hidden xl:block absolute right-[4%] top-1/2 opacity-80 -translate-y-1/2 w-[340px] h-[340px] pointer-events-none floaty" viewBox="0 0 340 340" aria-hidden="true">
        <defs>
          <linearGradient id="phg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#38bdf8" /><stop offset="1" stopColor="#8b5cf6" /></linearGradient>
          <linearGradient id="phg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f472b6" /><stop offset="1" stopColor="#fb923c" /></linearGradient>
          <linearGradient id="phg3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#34d399" /><stop offset="1" stopColor="#06b6d4" /></linearGradient>
        </defs>
        <circle cx="200" cy="150" r="110" fill="none" stroke="url(#phg1)" strokeOpacity=".35" strokeWidth="1.5" />
        <circle cx="200" cy="150" r="78" fill="none" stroke="url(#phg1)" strokeOpacity=".22" strokeWidth="1" strokeDasharray="4 7" />
        <circle cx="200" cy="150" r="46" fill="url(#phg1)" fillOpacity=".10" />
        <circle cx="96" cy="230" r="34" fill="url(#phg2)" fillOpacity=".18" />
        <circle cx="296" cy="64" r="16" fill="url(#phg3)" fillOpacity=".35" />
        <circle cx="306" cy="252" r="8" fill="url(#phg2)" fillOpacity=".55" />
        <circle cx="90" cy="60" r="5" fill="url(#phg3)" fillOpacity=".7" />
        <circle cx="200" cy="40" r="5" fill="#8b5cf6" fillOpacity=".55" />
        <rect x="248" y="196" width="40" height="40" rx="10" fill="url(#phg3)" fillOpacity=".16" transform="rotate(18 268 216)" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-[3px] rainbow-line opacity-80" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-16 md:pt-20 md:pb-20">
        <Reveal>
          {eyebrow && <div className="mb-5"><Eyebrow>{eyebrow}</Eyebrow></div>}
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-fg max-w-4xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg md:text-xl text-sub leading-relaxed">{subtitle}</p>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function SimpleCard({ title, desc, icon, delay = 0, tone }: { title: string; desc: string; icon?: ElementType; delay?: number; tone?: Tone }) {
  return (
    <Reveal delay={delay} className="group card card-hover h-full p-6 md:p-7">
      {icon && <div className="mb-5"><IconBox icon={icon} tone={tone} /></div>}
      <h3 className="font-display font-semibold text-lg text-fg">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-sub">{desc}</p>
    </Reveal>
  );
}

export function PrimaryLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl btn-grad px-6 py-3.5 font-semibold text-white shadow-lg shadow-rose-500/25">
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:[animation:sheen_.8s_ease]" />
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}

export function GhostLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="group inline-flex items-center gap-2 rounded-xl border border-black/15 bg-white px-6 py-3.5 font-semibold text-fg hover:border-black/40 hover:bg-black/[.03] transition-colors">
      {children}
    </Link>
  );
}
