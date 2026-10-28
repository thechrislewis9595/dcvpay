import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, Check, ChevronRight, KeyRound, Plug, Rocket, LineChart, Code2 } from "lucide-react";
import { getProduct, products, categoryTone } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Reveal, Eyebrow, SimpleCard, PrimaryLink, GhostLink, TONES, toneBar, toneText, toneSoft } from "../components/ui";
import { StatsBand, StepsRow, SecurityStrip, FaqSection } from "../components/sections";

const sharedFaqs = [
  { q: "How long does it take to go live?", a: "Most teams go live within one to two weeks of finishing KYB and testing in the sandbox." },
  { q: "What support do you offer?", a: "Every customer gets a solution engineer during onboarding and 24×7 support after launch." },
];

export default function ProductPage() {
  const { slug } = useParams();
  const p = getProduct(slug);
  if (!p) return <Navigate to="/" replace />;
  const Icon = p.icon;
  const tone = categoryTone(p.category);
  const [method, path] = p.endpoint.split(" ");
  const related = products.filter((x) => x.category === p.category && x.slug !== p.slug).concat(products.filter((x) => x.category !== p.category)).slice(0, 3);
  const steps = [
    { title: "Get sandbox keys", desc: `Sign up and try ${p.name} instantly in test mode.`, icon: KeyRound },
    { title: "Integrate", desc: "Connect through our REST API, SDKs or the no-code dashboard.", icon: Plug },
    { title: "Go live", desc: "Complete a quick KYB check and switch to production keys.", icon: Rocket },
    { title: "Scale with insights", desc: "Track performance in real time and expand as you grow.", icon: LineChart },
  ];
  const snippet = `curl -X ${method} https://api.DCvpay.tech${path} \\
  -H "Authorization: Bearer sk_test_••••••" \\
  -H "Content-Type: application/json" \\
  -H "Idempotency-Key: 7f3c-91ab"`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-soft border-b border-line">
        <div className="absolute inset-0 grid-bg [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-10 pb-16 md:pb-20">
          <nav className="flex flex-wrap items-center gap-1.5 text-sm text-sub" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-fg">Home</Link><ChevronRight className="w-3.5 h-3.5" />
            <Link to="/solutions" className="hover:text-fg">Products</Link><ChevronRight className="w-3.5 h-3.5" />
            <span className="text-fg font-medium">{p.name}</span>
          </nav>
          <div className="mt-10 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <Reveal>
              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${toneSoft[tone]} ${toneText[tone]}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${toneBar[tone]}`} />{p.category}
              </span>
              <h1 className="mt-5 font-display font-bold text-4xl sm:text-5xl md:text-[56px] leading-[1.05] tracking-tight">{p.name}</h1>
              <p className="mt-5 max-w-xl text-lg text-sub leading-relaxed">{p.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryLink to="/contact">Talk to our team <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></PrimaryLink>
                <GhostLink to="/resources/api-reference">View API docs</GhostLink>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg/75">
                {p.features.slice(0, 3).map((f) => <li key={f.title} className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" />{f.title}</li>)}
              </ul>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative">
                <div className={`absolute -inset-3 rounded-[2rem] ${toneSoft[tone]} rotate-2`} />
                <div className="relative overflow-hidden rounded-3xl border border-line shadow-2xl shadow-black/15">
                  <img src={p.image} alt={p.name} className="w-full aspect-[4/3] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <span className={`absolute left-5 top-5 grid place-items-center w-14 h-14 rounded-2xl ${toneBar[tone]} text-white shadow-xl shadow-black/30`}><Icon className="w-7 h-7" /></span>
                  <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 gap-4 p-5 sm:p-6">
                    {p.stats.map((s) => (
                      <div key={s.label}>
                        <p className="font-display font-bold text-lg sm:text-2xl text-white">{s.value}</p>
                        <p className="mt-0.5 text-[11px] sm:text-xs text-white/75">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <StatsBand stats={[...p.stats, { value: "24×7", label: "Expert support" }]} />

      {/* Capabilities */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">Everything you need, out of the box</h2>
            <p className="mt-3 text-lg text-sub">{p.short} Built to work on its own or alongside the rest of the DCvpayplatform.</p>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {p.features.map((f, i) => <SimpleCard key={f.title} title={f.title} desc={f.desc} icon={Check} tone={TONES[i % 4]} delay={i * 80} />)}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="wash-blue border-y border-line py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="max-w-2xl"><Eyebrow>How it works</Eyebrow><h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">From sign-up to scale in four steps</h2></Reveal>
          <StepsRow steps={steps} />
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <Eyebrow>Use cases</Eyebrow>
            <h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">Built for how India does business</h2>
            <p className="mt-4 text-lg text-sub">Teams across industries use {p.name} to move faster with less operational overhead.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {p.useCases.map((u, i) => (
              <Reveal key={u} delay={i * 80} className="flex items-center gap-3 card card-hover p-5">
                <span className={`grid place-items-center w-9 h-9 rounded-lg ${toneBar[TONES[i % 4]]} text-white text-sm font-bold`}>{i + 1}</span>
                <span className="font-medium">{u}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Developer */}
      <section className="wash-mint border-y border-line py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <Eyebrow>For developers</Eyebrow>
            <h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">Integrate in minutes</h2>
            <p className="mt-4 text-lg text-sub">Clean REST APIs, idempotent requests and signed webhooks. SDKs are available for Node, Python, Java, Go, PHP, Android and iOS.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["REST API", "Webhooks", "Idempotency", "Sandbox", "SDKs"].map((t, i) => (
                <span key={t} className={`rounded-full px-3 py-1 text-xs font-semibold ${toneSoft[TONES[i % 6]]} ${toneText[TONES[i % 6]]}`}>{t}</span>
              ))}
            </div>
            <Link to="/developers" className="group mt-8 inline-flex items-center gap-2 font-semibold text-fg hover:text-indigo-600"><Code2 className="w-4 h-4" /> Open developer hub <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></Link>
          </Reveal>
          <Reveal delay={120} className="rounded-2xl bg-charcoal shadow-2xl shadow-black/20 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-ink">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" /><span className="w-3 h-3 rounded-full bg-[#febc2e]" /><span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-muted">{p.endpoint}</span>
            </div>
            <pre className="p-5 text-[13px] leading-relaxed text-white/90 overflow-x-auto"><code>{snippet}</code></pre>
            <div className="border-t border-white/10 px-5 py-3 text-xs text-emerald-400 font-mono">← 200 OK · 38ms</div>
          </Reveal>
        </div>
      </section>

      <SecurityStrip />
      <FaqSection faqs={[...p.faqs, ...sharedFaqs]} title={`${p.name} FAQs`} />

      {/* Related */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal><h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">Explore related products</h2></Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {related.map((r, i) => <Reveal key={r.slug} delay={i * 80}><ProductCard p={r} /></Reveal>)}
          </div>
        </div>
      </section>
    </>
  );
}
