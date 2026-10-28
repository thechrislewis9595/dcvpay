import { Link } from "react-router-dom";
import { ArrowRight, Landmark, GitBranch, Activity, ShieldCheck, Users, Check, Sparkles, Cpu, Layers, Lock, Zap, CreditCard, Receipt, Smartphone, BadgeCheck, BarChart3, Send, RefreshCw } from "lucide-react";
import { Reveal, Eyebrow, IconBox, GhostLink, TONES, toneText, toneSoft, toneBar, type Tone } from "../components/ui";
import InfiniteSpiral from "../components/InfiniteSpiral";
import FintechFeatures from "../components/FintechFeatures";
import { paymentRailItems } from "../data/railArt";
import { BrandLogo, type BrandKey } from "../components/BrandLogo";

const stats = [["30+", "Banks & Fintechs"], ["500M+", "Daily Transactions"], ["99.99%", "Platform Uptime"], ["<50ms", "Avg. Response Time"]];

function PaymentNetworkVisual() {
  return (
    <div className="relative mx-auto h-[25rem] w-full max-w-[37rem] sm:h-[32rem]" aria-label="DCvpayroutes payments from merchants across multiple payment rails">
      <div className="pointer-events-none absolute inset-[12%] rounded-full bg-[conic-gradient(from_90deg,rgba(244,63,94,.18),rgba(139,92,246,.18),rgba(14,165,233,.16),rgba(16,185,129,.14),rgba(244,63,94,.18))] blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] aspect-square rounded-full border border-black/[.06]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[52%] aspect-square rounded-full border border-dashed border-black/[.08]" />
      <InfiniteSpiral
        items={paymentRailItems}
        speed={0.11}
        radius={164}
        cardWidth={162}
        cardHeight={132}
        verticalSpacing={56}
        perspective={1200}
        cardRadius={18}
        centerScale={1.16}
        edgeFade={0.34}
        edgeBlur={7}
        cardsPerTurn={7}
        pauseOnHover
        imageFit="contain"
      />
    </div>
  );
}

const capabilities = [
  { icon: CreditCard, tag: "Payments", title: "Payment Gateway", desc: "Coordinate payment providers and transaction operations with routing and retry built in.", to: "/products/payment-orchestration" },
  { icon: Landmark, tag: "Banking", title: "Connected Banking", desc: "One platform for all your banking: account balances, statements and transfers across banks.", to: "/products/DCvnxt" },
  { icon: Receipt, tag: "Payments", title: "BBPS & Bill Payments", desc: "5,000+ billers across electricity, gas, water, telecom, insurance, education and more.", to: "/solutions" },
  { icon: Smartphone, tag: "Collections", title: "UPI Collections", desc: "Collect payments via UPI DeepLinks, Intent and QR, with smart reminders and auto-reconciliation.", to: "/products/soundbox" },
  { icon: BadgeCheck, tag: "Compliance", title: "Verification & KYC", desc: "Real-time KYC: PAN, Aadhaar, GST, bank verification and e-sign with legal validity.", to: "/products/verification-suite" },
  { icon: BarChart3, tag: "Operations", title: "Smart Reconciliation", desc: "Organise settlement records, compare transaction data and surface exceptions for review.", to: "/platform" },
  { icon: Send, tag: "Payouts", title: "Payouts & Disbursements", desc: "Instant payouts via UPI, IMPS, NEFT and RTGS. Bulk uploads, API triggers and webhooks for every status.", to: "/products/DCvnxt" },
  { icon: RefreshCw, tag: "Escrow", title: "Escrow Management", desc: "Manage escrow transactions with complete trust. Automated release, dispute resolution, audit trails.", to: "/products/DCvexcrow" },
];

const testimonials: { quote: string; name: string; role: string; tone: Tone; metric: string; label: string }[] = [
  { quote: "Our UPI success rate jumped within a week of moving routing to DCvpay. The dashboard finally shows us why payments fail.", name: "Ritika Menon", role: "VP Payments, NeoLend Finance", tone: "blue", metric: "+9.2%", label: "success rate" },
  { quote: "One integration replaced four vendors. Our engineers now spend their time on product instead of payment plumbing.", name: "Arjun Batra", role: "CTO, KiranaKart", tone: "emerald", metric: "4→1", label: "vendors" },
  { quote: "Reconciliation that used to take our finance team days now happens automatically before anyone logs in.", name: "Sneha Kulkarni", role: "Head of Finance, UrbanEdu", tone: "violet", metric: "3 days", label: "saved monthly" },
];

const challenges = [
  { icon: GitBranch, title: "Fragmented Rails", desc: "UPI, AePS, BBPS, cards, IMPS, RTGS — each with its own switch, reconciliation logic and downtime patterns." },
  { icon: ShieldCheck, title: "Compliance Gravity", desc: "RBI, NPCI, PA/PG norms, digital lending rules, tokenisation, KYC master directions. Change quarterly." },
  { icon: Users, title: "Bharat-Scale Expectations", desc: "500M+ UPI transactions a day, Tier-3 merchants, 12 languages, offline-first flows. Scale is non-negotiable." },
];

const why = [
  { icon: Cpu, title: "AI-Powered Routing", desc: "Machine learning models pick the optimal rail for every transaction in real-time." },
  { icon: Layers, title: "Unified API Layer", desc: "One integration, every rail. Switch on new payment methods without touching your code." },
  { icon: Lock, title: "Bank-Grade Security", desc: "PCI-DSS compliant, tokenised, encrypted end-to-end with SOC 2 Type II certification." },
  { icon: Zap, title: "Sub-50ms Response", desc: "Edge-deployed infrastructure ensures your transactions never wait." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-white pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="absolute inset-0 mesh-hero" />
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute right-[-8%] top-[8%] w-[560px] h-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(229,9,20,.08),transparent)]" />
        <div className="absolute left-[-12%] bottom-[-20%] w-[520px] h-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(0,0,0,.05),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid items-center gap-10 lg:gap-12 lg:grid-cols-2">
          <Reveal className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium text-fg/75 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Trusted by 30+ banks &amp; fintechs across Asia
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.04] tracking-tight text-fg sm:text-5xl lg:text-[56px]">
              <span className="block">The Payment Engine</span>
              <span className="block">Behind India's</span>
              <span className="block text-gradient pb-1">Boldest Businesses</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-sub lg:mx-0">
              Payment infrastructure for banks, fintechs and digital businesses. Connect providers, coordinate payment flows, and monitor activity from one platform.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-xl btn-grad px-6 py-3.5 font-semibold text-white shadow-lg shadow-rose-500/25  transition-colors">
                Talk to our team <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/platform" className="group inline-flex items-center gap-2 rounded-xl border border-black/15 bg-white px-6 py-3.5 font-semibold text-fg hover:border-black/40 transition-colors">
                Explore the Platform <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
            <div className="mt-10 pt-8 border-t border-line flex flex-wrap items-center justify-center gap-x-7 gap-y-3 lg:justify-start">
              {[{ icon: Landmark, label: "Multi-rail payments", c: "text-rose-500" }, { icon: GitBranch, label: "Flexible routing", c: "text-blue-600" }, { icon: Activity, label: "Payment visibility", c: "text-emerald-600" }].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm font-medium text-fg/75">
                  <span className="grid place-items-center w-7 h-7 rounded-lg bg-white ring-1 ring-line"><item.icon className={`w-3.5 h-3.5 ${item.c}`} /></span> {item.label}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150} className="relative"><PaymentNetworkVisual /></Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="wash-sky border-y border-line">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(([v, l], i) => {
            const t = (["red", "blue", "emerald", "violet"] as Tone[])[i];
            return (
              <Reveal key={l} delay={i * 80} className={`relative overflow-hidden rounded-2xl ${toneSoft[t]} p-5 md:p-6 text-center`}>
                <span className={`absolute inset-x-0 top-0 h-1 ${toneBar[t]}`} />
                <p className={`font-display font-bold text-3xl md:text-[42px] ${toneText[t]}`}>{v}</p>
                <p className="mt-1.5 text-sm text-fg/70">{l}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* PAYMENT METHODS */}
      <section className="wash-sunrise border-b border-line">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <p className="shrink-0 text-sm font-semibold text-fg/70">Accept every way India pays</p>
          <div className="flex-1 w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {([["visa", "Visa"], ["mastercard", "Mastercard"], ["amex", "Amex"], ["googlepay", "Google Pay"], ["phonepe", "PhonePe"], ["paytm", "Paytm"], ["applepay", "Apple Pay"]] as [BrandKey, string][]).map(([k, n]) => (
              <div key={k} className="group flex items-center justify-center gap-2 rounded-xl border border-line bg-white px-3 py-3 hover:-translate-y-0.5 hover:shadow-md transition-all">
                <BrandLogo name={k} className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-fg/70 group-hover:text-fg">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="wash-blue py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <Eyebrow>The Challenge</Eyebrow>
            <h2 className="mt-5 font-display font-bold text-3xl md:text-5xl tracking-tight">Payments in Asia aren't like payments anywhere else</h2>
            <p className="mt-5 text-lg text-sub">Building for Bharat means solving for fragmentation, regulation, and scale — all at once.</p>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {challenges.map((c, i) => (
              <Reveal key={c.title} delay={i * 100} className="group card card-hover relative overflow-hidden p-7">
                <span className={`absolute inset-x-0 top-0 h-1 ${toneBar[(["red", "amber", "blue"] as Tone[])[i]]}`} />
                <IconBox icon={c.icon} tone={TONES[i % 6]} />
                <h3 className="mt-6 font-display font-semibold text-lg">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-sub">{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="wash-lilac py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <Eyebrow>One Infrastructure</Eyebrow>
            <h2 className="mt-5 font-display font-bold text-3xl md:text-5xl tracking-tight">Every way money moves, in one platform</h2>
            <p className="mt-5 text-lg text-sub">From regulated banks to fast-moving fintechs, DCvpayprovides the payment infrastructure behind every transaction — without forcing businesses to rebuild their stack for every new rail.</p>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={(i % 4) * 80}>
                <Link to={c.to} className="group flex flex-col h-full rounded-2xl bg-white border border-line p-6 card-hover transition-all duration-300">
                  <IconBox icon={c.icon} tone={TONES[i % 6]} />
                  <span className={`mt-4 text-[11px] font-semibold uppercase tracking-wider ${toneText[TONES[i % 6]]}`}>{c.tag}</span>
                  <h3 className="mt-1 font-semibold text-fg">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sub flex-1">{c.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-fg group-hover:text-indigo-600 transition-colors">Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 via-white to-sky-50 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-violet-600"><Sparkles className="w-3.5 h-3.5" /> Roadmap</p>
              <h3 className="mt-2 font-display font-semibold text-xl md:text-2xl max-w-2xl">Explore predictive routing, failure insights, and reconciliation assistance.</h3>
              <p className="mt-2 text-sm text-sub">Planned capabilities depend on integrations, data availability, and implementation scope.</p>
            </div>
            <GhostLink to="/platform">View roadmap <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></GhostLink>
          </Reveal>
        </div>
      </section>

      {/* FINTECH CAPABILITIES */}
      <FintechFeatures />

      {/* WHY */}
      <section className="night relative overflow-hidden py-20 md:py-28 text-white">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-300"><i className="w-5 h-px bg-sky-300" />Why DCvpay</span>
            <h2 className="mt-5 font-display font-bold text-3xl md:text-5xl tracking-tight">Built ground-up for Asia's scale, compliance & speed</h2>
            <p className="mt-5 text-lg text-white/70 leading-relaxed">We obsess over the infrastructure so you can obsess over your customers. Every rail, every regulation, every edge case — handled.</p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4 text-sm text-white/85">
              {["Single API for UPI, IMPS, NEFT, RTGS, BBPS, cards", "Real-time webhooks for every transaction state", "White-label dashboards for your merchants", "Built-in fraud detection & risk scoring", "Automated settlement reconciliation", "Dedicated sandbox with full test coverage"].map((t, i) => (
                <li key={t} className="flex gap-3"><span className={`mt-0.5 grid place-items-center w-5 h-5 shrink-0 rounded-full text-white ${["bg-emerald-500", "bg-sky-500", "bg-violet-500", "bg-amber-500", "bg-rose-500", "bg-cyan-500"][i]}`}><Check className="w-3 h-3" /></span>{t}</li>
              ))}
            </ul>
            <Link to="/contact" className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-fg hover:bg-sky-50 transition-colors">Talk to our team <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></Link>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {why.map((w, i) => {
              const c = [
                { box: "bg-sky-500/15 text-sky-300 ring-sky-400/30", glow: "group-hover:shadow-[0_20px_50px_-20px_rgba(56,189,248,.6)]", bar: "bg-sky-400" },
                { box: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/30", glow: "group-hover:shadow-[0_20px_50px_-20px_rgba(52,211,153,.6)]", bar: "bg-emerald-400" },
                { box: "bg-violet-500/15 text-violet-300 ring-violet-400/30", glow: "group-hover:shadow-[0_20px_50px_-20px_rgba(167,139,250,.6)]", bar: "bg-violet-400" },
                { box: "bg-amber-500/15 text-amber-300 ring-amber-400/30", glow: "group-hover:shadow-[0_20px_50px_-20px_rgba(251,191,36,.6)]", bar: "bg-amber-400" },
              ][i];
              return (
                <Reveal key={w.title} delay={i * 100} className={`group relative overflow-hidden rounded-2xl bg-white/[.05] border border-white/10 backdrop-blur p-6 hover:-translate-y-1 hover:bg-white/[.08] transition-all duration-300 ${c.glow} ${i % 2 ? "sm:translate-y-8" : ""}`}>
                  <span className={`absolute inset-x-0 top-0 h-0.5 ${c.bar} opacity-70`} />
                  <span className={`grid place-items-center w-10 h-10 rounded-xl ring-1 ${c.box}`}><w.icon className="w-5 h-5" /></span>
                  <h3 className="mt-5 font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{w.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="wash-warm border-t border-line py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <Eyebrow>Customer stories</Eyebrow>
            <h2 className="mt-5 font-display font-bold text-3xl md:text-5xl tracking-tight">Teams that moved faster with DCvpay</h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100} className="card card-hover relative overflow-hidden p-7 flex flex-col">
                <span className={`absolute inset-x-0 top-0 h-1 ${toneBar[t.tone]}`} />
                <div className="flex items-baseline gap-2">
                  <span className={`font-display font-bold text-3xl ${toneText[t.tone]}`}>{t.metric}</span>
                  <span className="text-sm text-sub">{t.label}</span>
                </div>
                <p className="mt-5 text-fg/85 leading-relaxed flex-1">“{t.quote}”</p>
                <div className="mt-6 pt-5 border-t border-line flex items-center gap-3">
                  <span className={`grid place-items-center w-10 h-10 rounded-full font-semibold text-sm ${toneSoft[t.tone]} ${toneText[t.tone]}`}>{t.name.split(" ").map((x) => x[0]).join("")}</span>
                  <div><p className="font-semibold text-sm">{t.name}</p><p className="text-xs text-sub">{t.role}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
