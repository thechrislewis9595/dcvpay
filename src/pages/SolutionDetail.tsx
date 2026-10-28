import { solColor } from "../data/solutionColors";
import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, Check, AlertTriangle, Quote, Plus, ChevronRight } from "lucide-react";
import { PageHeader, Reveal, Eyebrow, SimpleCard, PrimaryLink } from "../components/ui";
import { getSolution, solutions } from "../data/pages";
import { getProduct } from "../data/products";
import ProductCard from "../components/ProductCard";

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`card transition-colors ${open ? "border-indigo-200" : ""}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold" aria-expanded={open}>
        {q}
        <Plus className={`w-5 h-5 shrink-0 text-indigo-500 transition-transform ${open ? "rotate-45" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <p className="overflow-hidden px-5 text-sub leading-relaxed"><span className="block pb-5">{a}</span></p>
      </div>
    </div>
  );
}

export default function SolutionDetail() {
  const { slug } = useParams();
  const s = getSolution(slug);
  if (!s) return <Navigate to="/solutions" replace />;
  const sc = solColor(s.slug);

  return (
    <>
      <PageHeader eyebrow={s.title.replace("For ", "")} title={`DCvpay${s.title.toLowerCase()}`} subtitle={s.subtitle}>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <PrimaryLink to="/contact">Talk to our team <ArrowRight className="w-4 h-4" /></PrimaryLink>
          <Link to="/solutions" className="inline-flex items-center gap-1 text-sm font-semibold text-sub hover:text-indigo-600">All solutions <ChevronRight className="w-4 h-4" /></Link>
        </div>
      </PageHeader>

      {/* Stats */}
      <section className="border-b border-line wash-warm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {s.stats.map((st, i) => (
            <Reveal key={st.label} delay={i * 70} className={`text-center ${i > 0 ? "md:border-l md:border-line" : ""}`}>
              <p className={`font-display font-bold text-3xl md:text-4xl ${sc.text}`}>{st.value}</p>
              <p className="mt-1 text-sm text-sub">{st.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <Reveal><Eyebrow>The challenge</Eyebrow><h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">What's holding you back</h2></Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {s.challenges.map((c, i) => <SimpleCard key={c.title} icon={AlertTriangle} title={c.title} desc={c.desc} delay={i * 80} />)}
        </div>
      </section>

      {/* Outcomes */}
      <section className="wash-sky border-y border-line py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <Eyebrow>Outcomes</Eyebrow>
            <h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">What you get with DCvpay</h2>
            <p className="mt-4 text-lg text-sub">Everything you need to move money with confidence, in one platform built for India's scale.</p>
          </Reveal>
          <ul className="grid sm:grid-cols-2 gap-4">
            {s.outcomes.map((o, i) => (
              <Reveal as="li" key={o} delay={i * 60} className="flex items-start gap-3 rounded-xl bg-white border border-line p-5 hover:border-indigo-300 transition">
                <span className={`mt-0.5 grid place-items-center w-5 h-5 shrink-0 rounded-full text-white ${sc.bar}`}><Check className="w-3 h-3" /></span>{o}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <Reveal><Eyebrow>How it works</Eyebrow><h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">Live in four simple steps</h2></Reveal>
        <div className="relative mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="hidden md:block absolute top-5 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
          {s.steps.map((st, i) => (
            <Reveal key={st.title} delay={i * 100} className="relative">
              <span className={`relative grid place-items-center w-10 h-10 rounded-full bg-gradient-to-br ${sc.gradient} text-white font-display font-bold shadow-lg`}>{i + 1}</span>
              <h3 className="mt-5 font-semibold text-lg">{st.title}</h3>
              <p className="mt-2 text-sm text-sub leading-relaxed">{st.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Customer story */}
      <section className="px-5 sm:px-8">
        <Reveal className="relative max-w-7xl mx-auto overflow-hidden rounded-3xl night text-white p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-[radial-gradient(closest-side,rgba(229,9,20,.35),transparent)]" />
          <div className="relative">
            <Quote className="w-10 h-10 text-sky-300" />
            <p className="mt-5 font-display text-xl md:text-2xl leading-snug">“{s.story.quote}”</p>
            <p className="mt-6 font-semibold">{s.story.author}</p>
            <p className="text-sm text-muted">{s.story.role}</p>
          </div>
          <div className="relative md:border-l md:border-white/10 md:pl-10 text-center md:text-left">
            <p className={`font-display font-bold text-5xl md:text-6xl bg-gradient-to-r ${sc.gradient} bg-clip-text text-transparent`}>{s.story.metric}</p>
            <p className="mt-2 text-muted">{s.story.metricLabel}</p>
          </div>
        </Reveal>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <Reveal><Eyebrow>Recommended</Eyebrow><h2 className="mt-5 font-display font-bold text-2xl md:text-3xl tracking-tight">Products for {s.title.replace("For ", "").toLowerCase()}</h2></Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {s.products.map((slug, i) => (
            <Reveal key={slug} delay={i * 80}><ProductCard p={getProduct(slug)!} /></Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="wash-lilac border-y border-line py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center"><Eyebrow>FAQ</Eyebrow><h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">Frequently asked questions</h2></Reveal>
          <div className="mt-10 space-y-3">
            {s.faqs.map((f) => <Faq key={f.q} {...f} />)}
          </div>
        </div>
      </section>

      {/* Other solutions */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <Reveal><h2 className="font-display font-bold text-2xl tracking-tight">Explore other solutions</h2></Reveal>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {solutions.filter((x) => x.slug !== s.slug).map((x, i) => (
            <Reveal key={x.slug} delay={i * 60}>
              <Link to={`/solutions/${x.slug}`} className="group flex items-center gap-3 card card-hover p-4">
                <span className={`grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br ${solColor(x.slug).gradient} text-white`}><x.icon className="w-5 h-5" /></span>
                <span className="font-semibold text-sm">{x.title}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
