import { BrandLogo, brandHex } from "../components/BrandLogo";
import { Gauge, RotateCcw, GitPullRequest, ShieldCheck as Shield, Bell, Boxes, MessagesSquare, Activity as Pulse, LifeBuoy } from "lucide-react";
import { toneSoft, toneText, SimpleCard } from "../components/ui";
import { FaqSection } from "../components/sections";
import { Link } from "react-router-dom";
import { BookOpen, FlaskConical, Mail, Webhook, Code2, Terminal, ArrowRight } from "lucide-react";
import { PageHeader, Reveal, Eyebrow, IconBox } from "../components/ui";

const code = `curl -X POST https://api.DCvpay.tech/v1/payments \\
  -H "Authorization: Bearer sk_test_••••••" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 249900,
    "currency": "INR",
    "method": "upi",
    "routing": "smart"
  }'`;

const cards = [
  { icon: BookOpen, title: "Documentation", desc: "REST API reference for payments, payouts, and collections.", to: "/resources/documentation" },
  { icon: FlaskConical, title: "Sandbox", desc: "Test keys and mock endpoints to build before going live.", to: "/resources/sandbox" },
  { icon: Mail, title: "Talk to us", desc: "Email hello@DCvpay.tech for integration support.", to: "/contact" },
];

export default function Developers() {
  return (
    <>
      <PageHeader title="Developers" subtitle="Build on DCvpay's APIs — sandbox access, documentation, and integration guides for every rail." />
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <Link to={c.to} className="group block h-full card card-hover p-7">
                <IconBox icon={c.icon} tone={(["blue", "emerald", "violet"] as const)[i]} />
                <h3 className="mt-5 font-display font-semibold text-lg">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-sub">{c.desc}</p>
                <span className={`mt-5 inline-flex items-center gap-1 text-sm font-semibold ${["text-blue-600", "text-emerald-600", "text-violet-600"][i]}`}>Open <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <Eyebrow>Quickstart</Eyebrow>
          <h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">Your first payment in five minutes</h2>
          <p className="mt-4 text-lg text-sub">One endpoint, every rail. Pass <code className="rounded bg-soft border border-line px-1.5 py-0.5 text-indigo-500 text-base">routing: "smart"</code> and our engine picks the best path.</p>
          <ul className="mt-8 space-y-4">
            {([[Code2, "SDKs for Node, Python, Java, Go, PHP, Android and iOS"], [Webhook, "Signed webhooks with automatic retries"], [Terminal, "CLI for local testing and event replay"]] as const).map(([Ic, t]) => (
              <li key={t} className="flex items-center gap-3 text-fg/80"><span className="grid place-items-center w-9 h-9 rounded-lg bg-indigo-50 text-indigo-500 ring-1 ring-indigo-200"><Ic className="w-4 h-4" /></span>{t}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="https://www.postman.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-2.5 text-sm font-semibold hover:border-[#FF6C37] hover:shadow-md transition-all"><BrandLogo name="postman" className="w-5 h-5" /> Run in Postman</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-2.5 text-sm font-semibold hover:border-black/40 hover:shadow-md transition-all"><BrandLogo name="github" className="w-5 h-5" /> SDKs on GitHub</a>
            <Link to="/resources/api-reference" className="group inline-flex items-center gap-2 px-2 py-2.5 text-sm font-semibold text-indigo-600 hover:text-violet-600">Browse API reference <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></Link>
          </div>
        </Reveal>
        <Reveal delay={120} className="rounded-2xl bg-charcoal shadow-2xl shadow-black/20 border border-black overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-ink">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" /><span className="w-3 h-3 rounded-full bg-[#febc2e]" /><span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-xs text-muted">create-payment.sh</span>
          </div>
          <pre className="p-5 text-[13px] leading-relaxed text-white/90 overflow-x-auto"><code>{code}</code></pre>
        </Reveal>
      </section>
      {/* SDKs */}
      <section className="wash-sky border-y border-line py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="max-w-2xl"><Eyebrow>SDKs &amp; libraries</Eyebrow><h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">Use the language you love</h2><p className="mt-3 text-lg text-sub">Official, typed and versioned libraries, kept up to date with every API release.</p></Reveal>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {([["Node.js", "npm i DCvpay", "node"], ["Python", "pip install DCvpay", "python"], ["Java", "Maven Central", "java"], ["Go", "go get DCvpay", "go"], ["PHP", "composer require", "php"], [".NET", "NuGet", "dotnet"], ["Android", "Gradle", "android"], ["iOS", "Swift Package", "apple"], ["React Native", "npm", "react"], ["Flutter", "pub.dev", "flutter"]] as const).map(([n, c, logo], i) => (
              <Reveal key={n} delay={(i % 5) * 50}>
                <div className="group relative h-full overflow-hidden card card-hover p-4" style={{ ["--b" as string]: `#${brandHex(logo)}` }}>
                  <span className="absolute inset-x-0 top-0 h-1 bg-[var(--b)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center w-10 h-10 rounded-xl bg-[color-mix(in_srgb,var(--b)_10%,white)] ring-1 ring-[color-mix(in_srgb,var(--b)_20%,white)]"><BrandLogo name={logo} className="w-5 h-5" /></span>
                    <p className="font-semibold text-sm">{n}</p>
                  </div>
                  <p className="mt-3 font-mono text-[11px] text-sub truncate">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* API principles */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="max-w-2xl"><Eyebrow>API design</Eyebrow><h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">Built the way developers expect</h2></Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <SimpleCard icon={RotateCcw} tone="red" title="Idempotent requests" desc="Safely retry any request with an Idempotency-Key header. No duplicate charges, ever." />
            <SimpleCard icon={Bell} tone="blue" delay={80} title="Signed webhooks" desc="HMAC-signed events with automatic retries and a replay tool in the dashboard." />
            <SimpleCard icon={GitPullRequest} tone="emerald" delay={160} title="Stable versioning" desc="Date-based API versions. Upgrade when you're ready, never forced." />
            <SimpleCard icon={Gauge} tone="amber" title="Generous rate limits" desc="High default limits, with clear headers telling you exactly where you stand." />
            <SimpleCard icon={Shield} tone="violet" delay={80} title="Scoped API keys" desc="Restrict keys by permission, IP and environment for least-privilege access." />
            <SimpleCard icon={Boxes} tone="cyan" delay={160} title="Full test mode" desc="Simulate success, failure, timeouts and refunds without moving real money." />
          </div>
        </div>
      </section>

      {/* Changelog + support */}
      <section className="wash-lilac border-y border-line py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.3fr_1fr] gap-10">
          <div>
            <Reveal><Eyebrow>Changelog</Eyebrow><h2 className="mt-5 font-display font-bold text-3xl tracking-tight">Latest updates</h2></Reveal>
            <div className="mt-8 space-y-4">
              {([["2026-04-02", "New", "emerald", "UPI AutoPay mandates now support variable amounts."], ["2026-03-18", "Improved", "blue", "Payout webhooks include bank reference numbers (UTR)."], ["2026-02-27", "New", "emerald", "Python SDK v3 with full type hints and async support."], ["2026-02-05", "Fixed", "amber", "Refund status now updates instantly for partial refunds."]] as const).map(([d, tag, t, txt], i) => (
                <Reveal key={d} delay={i * 70} className="card p-5 flex gap-4 items-start">
                  <span className="font-mono text-xs text-sub pt-0.5 w-24 shrink-0">{d}</span>
                  <div><span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${toneSoft[t]} ${toneText[t]}`}>{tag}</span><p className="mt-2 text-sm text-fg/85">{txt}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <Reveal><Eyebrow>Support</Eyebrow><h2 className="mt-5 font-display font-bold text-3xl tracking-tight">We've got your back</h2></Reveal>
            <div className="mt-8 space-y-4">
              {([[MessagesSquare, "Developer community", "Ask questions and share integrations.", "/company/blog", "violet"], [Pulse, "System status", "Live uptime for every service.", "/resources/status", "emerald"], [LifeBuoy, "Integration support", "Talk to a solution engineer.", "/contact", "red"]] as const).map(([Ic, t, d, to, tone]) => (
                <Link key={t} to={to} className="group flex items-center gap-4 card card-hover p-5">
                  <span className={`grid place-items-center w-11 h-11 rounded-xl ${toneSoft[tone]} ${toneText[tone]}`}><Ic className="w-5 h-5" /></span>
                  <div className="flex-1"><p className="font-semibold">{t}</p><p className="text-sm text-sub">{d}</p></div>
                  <ArrowRight className="w-4 h-4 text-sub group-hover:text-fg group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSection className="" title="Developer FAQs" faqs={[
        { q: "Is the sandbox free?", a: "Yes. The sandbox is free forever, with unlimited test transactions." },
        { q: "How do I verify webhooks?", a: "Every webhook carries an HMAC-SHA256 signature you can check with your webhook secret. Our SDKs do it in one line." },
        { q: "Do you support GraphQL?", a: "Our public API is REST today. GraphQL is available to enterprise customers on request." },
      ]} />
    </>
  );
}
