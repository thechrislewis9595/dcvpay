import { BrandLogo, brandHex, type BrandKey } from "../components/BrandLogo";
import { Link } from "react-router-dom";
import { Cpu, Layers, Lock, Zap, BarChart3, RefreshCw, ShieldAlert, Globe2, Check, X, Smartphone, Store, Link2, Monitor, ArrowDown, ArrowRight, CircleDot } from "lucide-react";
import { PageHeader, SimpleCard, Reveal, Eyebrow, TONES, toneBar, toneSoft, toneText, PrimaryLink, type Tone } from "../components/ui";
import { StatsBand, StepsRow, SecurityStrip, FaqSection } from "../components/sections";

const layers = [
  { icon: Cpu, title: "Smart Routing Engine", desc: "Every acquirer is scored in real time on success rate, cost and latency." },
  { icon: Layers, title: "Unified API", desc: "One schema for UPI, cards, net banking, IMPS, NEFT, RTGS and BBPS." },
  { icon: RefreshCw, title: "Smart Reconciliation", desc: "Match settlements, refunds and chargebacks automatically across banks." },
  { icon: ShieldAlert, title: "Risk & Fraud", desc: "Velocity rules, device fingerprinting and anomaly detection built in." },
  { icon: BarChart3, title: "Observability", desc: "Live dashboards, alerts and failure insights for every rail." },
  { icon: Lock, title: "Security", desc: "PCI-DSS Level 1, SOC 2 Type II, tokenisation and data localisation in India." },
  { icon: Zap, title: "Edge Performance", desc: "Sub-50ms median responses from multi-region infrastructure." },
  { icon: Globe2, title: "Compliance", desc: "RBI PA/PG, NPCI and KYC master direction controls out of the box." },
];

const steps = [
  { title: "Accept", desc: "Collect payments through any channel: online, PoS, Soundbox or links." },
  { title: "Route", desc: "The routing engine picks the best acquirer and rail for each transaction." },
  { title: "Process", desc: "Bank-grade processing with automatic retries and failover." },
  { title: "Settle", desc: "Funds are settled and reconciled to your accounts automatically." },
];

const channels = [{ icon: Monitor, label: "Web checkout" }, { icon: Smartphone, label: "Mobile SDK" }, { icon: Store, label: "PoS & Soundbox" }, { icon: Link2, label: "Payment links" }];
const core: { label: string; tone: Tone }[] = [{ label: "Routing", tone: "red" }, { label: "Risk", tone: "violet" }, { label: "Reconciliation", tone: "blue" }, { label: "Ledger", tone: "emerald" }, { label: "Webhooks", tone: "amber" }];
const rails = ["UPI", "IMPS", "NEFT", "RTGS", "BBPS", "Cards", "Wallets", "Net banking"];

const roadmap: { phase: string; status: string; tone: Tone; items: string[] }[] = [
  { phase: "Live today", status: "Available", tone: "emerald", items: ["Smart multi-acquirer routing", "Unified payments API", "Automated reconciliation", "Real-time dashboards"] },
  { phase: "Q3 2026", status: "In development", tone: "blue", items: ["Predictive routing", "Failure insights & root-cause hints", "Merchant health scores"] },
  { phase: "Q4 2026", status: "Planned", tone: "amber", items: ["Reconciliation assistance", "Cash-flow forecasting", "Dispute automation"] },
  { phase: "2027", status: "Exploring", tone: "violet", items: ["Cross-border rails expansion", "Account aggregator insights", "Embedded lending flows"] },
];

const integrations: { name: string; cat: string; logo: BrandKey }[] = [
  { name: "SAP", cat: "ERP", logo: "sap" }, { name: "Microsoft Dynamics", cat: "ERP", logo: "microsoft" }, { name: "Odoo", cat: "ERP", logo: "odoo" },
  { name: "Zoho Books", cat: "Accounting", logo: "zoho" }, { name: "QuickBooks", cat: "Accounting", logo: "quickbooks" }, { name: "Xero", cat: "Accounting", logo: "xero" },
  { name: "Shopify", cat: "Commerce", logo: "shopify" }, { name: "WooCommerce", cat: "Commerce", logo: "woocommerce" }, { name: "HubSpot", cat: "CRM", logo: "hubspot" },
  { name: "Zendesk", cat: "Support", logo: "zendesk" }, { name: "WhatsApp", cat: "Alerts", logo: "whatsapp" }, { name: "Snowflake", cat: "Data", logo: "snowflake" },
];
const catTone: Record<string, Tone> = { ERP: "blue", Accounting: "emerald", Commerce: "violet", CRM: "amber", Alerts: "emerald", Support: "cyan", Data: "blue" };

const compare = [
  ["Integrations to support every rail", "1", "6–10"],
  ["Automatic failover across acquirers", true, false],
  ["Automated reconciliation", true, false],
  ["Time to add a new payment method", "Hours", "Months"],
  ["Unified reporting & webhooks", true, false],
  ["Compliance updates handled for you", true, false],
] as const;

const faqs = [
  { q: "Can I use only part of the platform?", a: "Yes. Every module works on its own. Start with what you need and add more later." },
  { q: "Where is the platform hosted?", a: "In multiple Indian data-centre regions, with active-active failover and full data localisation." },
  { q: "Can we keep our existing acquirers?", a: "Yes. DCvpaycan orchestrate across your existing provider contracts as well as ours." },
  { q: "How are roadmap features released?", a: "New capabilities go to design partners first, then roll out to everyone with advance notice." },
];

export default function Platform() {
  return (
    <>
      <PageHeader eyebrow="Platform" title="One platform. Every rail." subtitle="The infrastructure layer that connects providers, orchestrates payment flows and gives you complete visibility, from authorisation to settlement." />
      <StatsBand stats={[{ value: "500M+", label: "Transactions a day" }, { value: "99.99%", label: "Platform uptime" }, { value: "<50ms", label: "Median latency" }, { value: "8+", label: "Payment rails" }]} />

      {/* Architecture */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
          <Reveal>
            <Eyebrow>Architecture</Eyebrow>
            <h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">A single layer between your business and every rail</h2>
            <p className="mt-4 text-lg text-sub leading-relaxed">Payments come in from any channel, pass through the DCvpaycore for routing, risk checks and ledgering, and leave on the best rail, with every step visible to you in real time.</p>
            <ul className="mt-6 space-y-3 text-fg/80">
              {["Active-active across Indian regions", "Event-driven, with signed webhooks at every step", "Double-entry ledger for complete auditability"].map((t) => (
                <li key={t} className="flex gap-3"><Check className="w-5 h-5 text-emerald-600 shrink-0" />{t}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="card p-5 sm:p-7 bg-gradient-to-b from-white to-soft">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sub">Channels</p>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {channels.map((c) => (
                <div key={c.label} className="flex items-center gap-2 rounded-xl bg-white border border-line px-3 py-2.5 text-xs font-medium"><c.icon className="w-4 h-4 text-sub" />{c.label}</div>
              ))}
            </div>
            <div className="flex justify-center py-2"><ArrowDown className="w-4 h-4 text-sub" /></div>
            <div className="rounded-2xl bg-ink p-4 sm:p-5 text-white">
              <div className="flex items-center justify-between">
                <p className="font-display font-semibold">DCvpayCore</p>
                <span className="flex items-center gap-1.5 text-[11px] text-emerald-400"><CircleDot className="w-3 h-3" /> All systems normal</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {core.map((c) => <span key={c.label} className="flex items-center gap-2 rounded-lg bg-white/[.06] border border-white/10 px-3 py-1.5 text-xs"><span className={`w-2 h-2 rounded-full ${toneBar[c.tone]}`} />{c.label}</span>)}
              </div>
            </div>
            <div className="flex justify-center py-2"><ArrowDown className="w-4 h-4 text-sub" /></div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sub">Rails &amp; banks</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {rails.map((r, i) => <span key={r} className={`rounded-full px-3 py-1 text-xs font-semibold ${toneSoft[TONES[i % 6]]} ${toneText[TONES[i % 6]]}`}>{r}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Modules */}
      <section className="wash-mint border-y border-line py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="max-w-2xl"><Eyebrow>Platform modules</Eyebrow><h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">Everything under one roof</h2></Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {layers.map((l, i) => <SimpleCard key={l.title} {...l} tone={TONES[i % 6]} delay={(i % 4) * 80} />)}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="max-w-2xl"><Eyebrow>How it works</Eyebrow><h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">From checkout to settlement in four steps</h2></Reveal>
          <StepsRow steps={steps} />
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="bg-soft border-y border-line py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <Eyebrow>Roadmap</Eyebrow>
            <h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">What we're building next</h2>
            <p className="mt-3 text-lg text-sub">Predictive routing, failure insights and reconciliation assistance. Planned capabilities depend on integrations, data availability and implementation scope.</p>
          </Reveal>
          <div className="relative mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {roadmap.map((r, i) => (
              <Reveal key={r.phase} delay={i * 90} className="card p-6 relative overflow-hidden">
                <span className={`absolute inset-x-0 top-0 h-1 ${toneBar[r.tone]}`} />
                <div className="flex items-center justify-between">
                  <p className="font-display font-bold text-lg">{r.phase}</p>
                  <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${toneSoft[r.tone]} ${toneText[r.tone]}`}>{r.status}</span>
                </div>
                <ul className="mt-5 space-y-3">
                  {r.items.map((it) => <li key={it} className="flex gap-2.5 text-sm text-fg/80"><span className={`mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full ${toneBar[r.tone]}`} />{it}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="max-w-2xl"><Eyebrow>Integrations</Eyebrow><h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">Works with the tools you already use</h2></Reveal>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {integrations.map((it, i) => (
              <Reveal key={it.name} delay={(i % 6) * 50}>
                <div className="group relative h-full overflow-hidden card card-hover p-4" style={{ ["--b" as string]: `#${brandHex(it.logo)}` }}>
                  <span className="absolute inset-x-0 top-0 h-1 bg-[var(--b)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-[color-mix(in_srgb,var(--b)_10%,white)] ring-1 ring-[color-mix(in_srgb,var(--b)_20%,white)] group-hover:scale-105 transition-transform">
                    <BrandLogo name={it.logo} className="w-6 h-6" />
                  </span>
                  <p className="mt-3 text-sm font-semibold">{it.name}</p>
                  <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${toneSoft[catTone[it.cat]]} ${toneText[catTone[it.cat]]}`}>{it.cat}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="wash-violet border-y border-line py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center"><Eyebrow>Comparison</Eyebrow><h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">DCvpayvs. a traditional stack</h2></Reveal>
          <Reveal className="mt-10 overflow-x-auto rounded-2xl border border-line bg-white">
            <table className="w-full min-w-[560px] text-sm">
              <thead><tr className="border-b border-line"><th className="text-left p-4 font-semibold">Capability</th><th className="p-4 font-semibold"><span className="text-gradient">DCvpay</span></th><th className="p-4 font-semibold text-sub">Traditional</th></tr></thead>
              <tbody>
                {compare.map(([label, a, b]) => (
                  <tr key={label} className="border-b border-line last:border-0">
                    <td className="p-4 text-fg/85">{label}</td>
                    {[a, b].map((v, j) => (
                      <td key={j} className="p-4 text-center">
                        {typeof v === "boolean"
                          ? v ? <span className="inline-grid place-items-center w-6 h-6 rounded-full bg-emerald-50 text-emerald-600"><Check className="w-3.5 h-3.5" /></span>
                              : <span className="inline-grid place-items-center w-6 h-6 rounded-full bg-rose-50 text-rose-500"><X className="w-3.5 h-3.5" /></span>
                          : <span className={`font-semibold ${j === 0 ? "text-fg" : "text-sub"}`}>{v}</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <PrimaryLink to="/contact">Talk to our team <ArrowRight className="w-4 h-4" /></PrimaryLink>
            <Link to="/developers" className="inline-flex items-center gap-2 rounded-xl border border-black/15 bg-white px-6 py-3.5 font-semibold hover:border-black/40 transition-colors">Read the docs</Link>
          </div>
        </div>
      </section>

      <SecurityStrip />
      <FaqSection faqs={faqs} title="Platform FAQs" />
    </>
  );
}
