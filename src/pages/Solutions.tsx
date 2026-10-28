import { solColor } from "../data/solutionColors";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Layers, ShieldCheck, Zap, Headphones } from "lucide-react";
import { PageHeader, Reveal, Eyebrow, SimpleCard, PrimaryLink } from "../components/ui";
import { solutions } from "../data/pages";
import { getProduct, products } from "../data/products";

const pillars = [
  { icon: Layers, title: "One platform", desc: "Payments, verification, banking and workflows from a single integration." },
  { icon: ShieldCheck, title: "Compliant by design", desc: "RBI, NPCI and data-localisation controls built into every product." },
  { icon: Zap, title: "Built for scale", desc: "Sub-50ms responses and 99.99% uptime at India's transaction volumes." },
  { icon: Headphones, title: "Dedicated support", desc: "Solution engineers and 24×7 support for every rollout." },
];

export default function Solutions() {
  const [active, setActive] = useState(solutions[0].slug);
  const sel = solutions.find((s) => s.slug === active)!;
  const sc = solColor(sel.slug);

  return (
    <>
      <PageHeader eyebrow="Solutions" title="Solutions for every business" subtitle="Whether you're a bank, a fintech or a neighbourhood store, DCvpayadapts to how you move money." />

      {/* Interactive industry explorer */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <Reveal className="max-w-2xl"><Eyebrow>Find your fit</Eyebrow><h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">Choose your industry</h2></Reveal>
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
          {solutions.map((s) => (
            <button key={s.slug} onClick={() => setActive(s.slug)} className={`shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold border transition-all ${active === s.slug ? `${solColor(s.slug).tabOn} -translate-y-0.5` : solColor(s.slug).tabOff}`}>
              <s.icon className="w-4 h-4" /> {s.title.replace("For ", "")}
            </button>
          ))}
        </div>
        <div key={sel.slug} className={`drop-in relative overflow-hidden mt-8 grid lg:grid-cols-[1.2fr_1fr] gap-8 rounded-3xl border p-6 md:p-10 ${sc.panel}`}>
          <span className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${sc.gradient}`} />
          <div>
            <div className="flex items-center gap-3"><span className={`grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br ${sc.gradient} text-white shadow-lg`}><sel.icon className="w-6 h-6" /></span><h3 className="font-display font-bold text-2xl md:text-3xl">{sel.title}</h3></div>
            <p className="mt-3 text-sub text-lg leading-relaxed">{sel.subtitle}</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {sel.outcomes.map((o) => (
                <li key={o} className="flex gap-2.5 text-sm"><span className={`mt-0.5 grid place-items-center w-5 h-5 shrink-0 rounded-full text-white ${sc.bar}`}><Check className="w-3 h-3" /></span>{o}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryLink to={`/solutions/${sel.slug}`}>Explore {sel.title.toLowerCase()} <ArrowRight className="w-4 h-4" /></PrimaryLink>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 content-start">
            {sel.stats.map((st) => (
              <div key={st.label} className={`rounded-2xl bg-white border border-line ring-4 ${sc.ring} p-5`}>
                <p className={`font-display font-bold text-2xl md:text-3xl ${sc.text}`}>{st.value}</p>
                <p className="mt-1 text-sm text-sub">{st.label}</p>
              </div>
            ))}
            <div className={`col-span-2 rounded-2xl bg-gradient-to-br ${sc.gradient} text-white p-5 shadow-lg`}>
              <p className="text-sm text-white/90 leading-relaxed">“{sel.story.quote}”</p>
              <p className="mt-3 text-xs text-white/80">{sel.story.author} · {sel.story.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* All solution cards */}
      <section className="wash-violet border-y border-line py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal><h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight">All solutions</h2></Reveal>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80} className="group card card-hover relative overflow-hidden flex flex-col p-7">
                <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${solColor(s.slug).gradient}`} />
                <div className="flex items-start justify-between">
                  <span className={`grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br ${solColor(s.slug).gradient} text-white shadow-md group-hover:scale-105 transition-transform`}><s.icon className="w-6 h-6" /></span>
                  <span className="text-right"><span className={`block font-display font-bold text-xl ${solColor(s.slug).text}`}>{s.stats[0].value}</span><span className="block text-[11px] text-sub">{s.stats[0].label}</span></span>
                </div>
                <h3 className="mt-6 font-display font-semibold text-xl">{s.title}</h3>
                <p className="mt-2 text-[15px] text-sub leading-relaxed flex-1">{s.short}</p>
                <ul className="mt-5 space-y-2">
                  {s.outcomes.slice(0, 3).map((o) => (
                    <li key={o} className="flex gap-2 text-sm text-fg/80"><Check className={`w-4 h-4 mt-0.5 shrink-0 ${solColor(s.slug).text}`} />{o}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.products.map((l) => (
                    <Link key={l} to={`/products/${l}`} className="rounded-full border border-line px-3 py-1 text-xs font-medium text-fg/80 hover:border-indigo-400 hover:text-indigo-600 transition-colors">{getProduct(l)?.name}</Link>
                  ))}
                </div>
                <Link to={`/solutions/${s.slug}`} className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${solColor(s.slug).text} hover:text-fg transition-colors`}>
                  Explore solution <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <Reveal className="text-center max-w-2xl mx-auto"><Eyebrow>Why DCvpay</Eyebrow><h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">One partner for every money movement</h2></Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => <SimpleCard key={p.title} {...p} delay={i * 80} />)}
        </div>
      </section>

      {/* Matrix */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 md:pb-20">
        <Reveal><h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">Solutions by product</h2><p className="mt-2 text-sub">See which products power each solution.</p></Reveal>
        <Reveal className="mt-8 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[820px] text-sm">
            <thead>
              <tr className="night text-white">
                <th className="text-left font-semibold p-4">Product</th>
                {solutions.map((s) => <th key={s.slug} className="font-semibold p-4"><span className="inline-flex items-center gap-1.5"><span className={`w-2 h-2 rounded-full ${solColor(s.slug).bar}`} />{s.title.replace("For ", "")}</span></th>)}
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.slug} className={`${i % 2 ? "bg-soft" : "bg-white"} hover:bg-indigo-50/60 transition-colors`}>
                  <td className="p-4"><Link to={`/products/${p.slug}`} className="font-medium hover:text-indigo-600">{p.name}</Link></td>
                  {solutions.map((s) => (
                    <td key={s.slug} className="p-4 text-center">
                      {s.products.includes(p.slug) ? <span className={`inline-grid place-items-center w-6 h-6 rounded-full text-white ${solColor(s.slug).bar}`}><Check className="w-3.5 h-3.5" /></span> : <span className="text-sub/40">—</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-8 pb-20">
        <Reveal className="relative max-w-7xl mx-auto overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#E50914_0%,#BE185D_45%,#6D28D9_100%)] text-white p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="absolute inset-0 grid-bg-dark opacity-60" />
          <div className="relative">
            <h2 className="font-display font-bold text-2xl md:text-3xl">Not sure which solution fits?</h2>
            <p className="mt-2 text-white/85">Our solution engineers will map the right stack for your business.</p>
          </div>
          <Link to="/contact" className="relative inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3.5 font-semibold hover:bg-charcoal transition-colors">Talk to our team <ArrowRight className="w-4 h-4" /></Link>
        </Reveal>
      </section>
    </>
  );
}
