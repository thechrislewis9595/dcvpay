import { useState, type ElementType } from "react";
import { Plus, ShieldCheck, Lock, Landmark, FileCheck2, Server } from "lucide-react";
import { Reveal, Eyebrow, TONES, toneBar, toneBox, type Tone } from "./ui";

const cols: Record<number, string> = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4" };

export function StatsBand({ stats, className = "bg-white" }: { stats: { value: string; label: string }[]; className?: string }) {
  return (
    <section className={`border-b border-line ${className}`}>
      <div className={`max-w-7xl mx-auto px-5 sm:px-8 py-10 md:py-12 grid grid-cols-2 ${cols[stats.length] ?? "md:grid-cols-4"} gap-y-8`}>
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 70} className={`flex flex-col items-center text-center ${i > 0 ? "md:border-l md:border-line" : ""}`}>
            <span className={`mb-3 h-1 w-8 rounded-full ${toneBar[TONES[i % 4]]}`} />
            <p className="font-display font-bold text-3xl md:text-4xl text-fg">{s.value}</p>
            <p className="mt-1 text-sm text-sub">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function StepsRow({ steps }: { steps: { title: string; desc: string; icon?: ElementType }[] }) {
  return (
    <div className="relative mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="hidden lg:block absolute top-6 left-[12%] right-[12%] h-px bg-[linear-gradient(90deg,transparent,#e5e5e5_15%,#e5e5e5_85%,transparent)]" />
      {steps.map((s, i) => {
        const t = TONES[i % 4] as Tone;
        const Icon = s.icon;
        return (
          <Reveal key={s.title} delay={i * 90} className="group relative card p-6">
            <div className="flex items-center justify-between">
              <span className={`relative grid place-items-center w-12 h-12 rounded-2xl ring-1 ${toneBox[t]} group-hover:text-white transition-colors`}>
                {Icon ? <Icon className="w-5 h-5" /> : <span className="font-display font-bold">{i + 1}</span>}
              </span>
              <span className="font-display text-4xl font-bold text-black/[.06]">0{i + 1}</span>
            </div>
            <h3 className="mt-5 font-semibold text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-sub leading-relaxed">{s.desc}</p>
          </Reveal>
        );
      })}
    </div>
  );
}

const badges: { icon: ElementType; title: string; desc: string; tone: Tone }[] = [
  { icon: ShieldCheck, title: "PCI DSS Level 1", desc: "Highest card-data security standard", tone: "emerald" },
  { icon: FileCheck2, title: "SOC 2 Type II", desc: "Independently audited controls", tone: "blue" },
  { icon: Lock, title: "ISO 27001", desc: "Certified information security", tone: "violet" },
  { icon: Landmark, title: "RBI PA/PG aligned", desc: "Built to Indian regulations", tone: "red" },
  { icon: Server, title: "Data stored in India", desc: "Full data localisation", tone: "amber" },
];

export function SecurityStrip({ className = "" }: { className?: string }) {
  return (
    <section className={`py-16 md:py-20 wash-mint ${className}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Security &amp; compliance</Eyebrow>
          <h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">Bank-grade from day one</h2>
          <p className="mt-3 text-sub text-lg">Every product runs on the same audited, encrypted and compliant infrastructure.</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {badges.map((b, i) => (
            <Reveal key={b.title} delay={i * 60} className="group card card-hover p-5">
              <span className={`grid place-items-center w-10 h-10 rounded-xl ring-1 ${toneBox[b.tone]} group-hover:text-white transition-colors`}><b.icon className="w-5 h-5" /></span>
              <p className="mt-4 font-semibold text-sm">{b.title}</p>
              <p className="mt-1 text-xs text-sub leading-snug">{b.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`card transition-colors ${open ? "border-black/20" : ""}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold" aria-expanded={open}>
        {q}
        <span className={`grid place-items-center w-7 h-7 shrink-0 rounded-full transition-all ${open ? "grad-violet text-white rotate-45" : "bg-soft text-fg"}`}><Plus className="w-4 h-4" /></span>
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <p className="overflow-hidden px-5 text-sub leading-relaxed"><span className="block pb-5">{a}</span></p>
      </div>
    </div>
  );
}

export function FaqSection({ faqs, title = "Frequently asked questions", className = "wash-violet border-y border-line" }: { faqs: { q: string; a: string }[]; title?: string; className?: string }) {
  return (
    <section className={`py-16 md:py-20 ${className}`}>
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center"><Eyebrow>FAQ</Eyebrow><h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">{title}</h2></Reveal>
        <div className="mt-10 space-y-3">{faqs.map((f) => <FaqItem key={f.q} {...f} />)}</div>
      </div>
    </section>
  );
}
