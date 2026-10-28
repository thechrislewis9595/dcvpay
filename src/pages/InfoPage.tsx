import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader, Reveal, PrimaryLink, TONES, toneBar, toneSoft, toneText } from "../components/ui";
import { companyPages, resourcePages, legalPages, type InfoPage as TInfo } from "../data/pages";

const sources: Record<string, Record<string, TInfo>> = { company: companyPages, resources: resourcePages, legal: legalPages };

export default function InfoPage({ kind }: { kind: "company" | "resources" | "legal" }) {
  const { slug = "" } = useParams();
  const page = sources[kind][slug];
  if (!page) return <Navigate to="/" replace />;
  const isLegal = kind === "legal";
  const siblings = Object.entries(sources[kind]).filter(([k]) => k !== slug);

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} subtitle={page.subtitle}>
        {slug === "status" && (
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400 ring-1 ring-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> All systems operational
          </div>
        )}
      </PageHeader>

      <div className={`max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20 ${isLegal ? "grid lg:grid-cols-[220px_1fr] gap-12" : ""}`}>
        {isLegal && (
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-1">
              {page.sections.map((s, i) => (
                <a key={s.heading} href={`#sec-${i}`} onClick={(e) => { e.preventDefault(); document.getElementById(`sec-${i}`)?.scrollIntoView({ behavior: "smooth", block: "center" }); }} className="block rounded-lg px-3 py-2 text-sm text-sub hover:text-fg hover:bg-black/[.04] border-l-2 border-transparent hover:border-indigo-400">{s.heading}</a>
              ))}
            </div>
          </aside>
        )}
        <div className="space-y-16">
          {page.sections.map((s, si) => (
            <section key={s.heading} id={`sec-${si}`} className="scroll-mt-28">
              <Reveal><h2 className={`font-display font-bold tracking-tight ${isLegal ? "text-2xl" : "text-2xl md:text-3xl"}`}>{s.heading}</h2></Reveal>
              {s.body && <Reveal><p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-sub">{s.body}</p></Reveal>}
              {s.list && (
                <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                  {s.list.map((l, i) => (
                    <Reveal as="li" key={l} delay={(i % 2) * 80} className="flex items-start gap-3 card card-hover p-5">
                      <span className={`mt-0.5 grid place-items-center w-5 h-5 shrink-0 rounded-full text-white ${toneBar[TONES[i % 6]]}`}><Check className="w-3 h-3" /></span>
                      <span className="text-fg/80">{l}</span>
                    </Reveal>
                  ))}
                </ul>
              )}
              {s.items && (
                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {s.items.map((it, i) => (
                    <Reveal key={it.title} delay={(i % 3) * 80} className="group card card-hover relative overflow-hidden p-6 flex flex-col">
                      <span className={`absolute inset-x-0 top-0 h-1 ${toneBar[TONES[(i + si) % 6]]}`} />
                      {it.badge && (
                        <span className={`self-start rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${it.badge === "Operational" ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200" : `${toneSoft[TONES[(i + si) % 6]]} ${toneText[TONES[(i + si) % 6]]}`}`}>{it.badge}</span>
                      )}
                      <h3 className={`${it.badge ? "mt-4" : ""} font-semibold text-fg ${it.title.startsWith("POST") || it.title.startsWith("GET") ? "font-mono text-[15px]" : ""}`}>{it.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-sub flex-1">{it.desc}</p>
                      {it.meta && <p className="mt-4 text-xs text-fg/60 border-t border-line pt-3">{it.meta}</p>}
                    </Reveal>
                  ))}
                </div>
              )}
            </section>
          ))}

          {page.cta && (
            <Reveal className="rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-100 to-transparent p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div>
                <h3 className="font-display font-semibold text-xl">Have questions?</h3>
                <p className="mt-1 text-sub">Our team is happy to help — reach out any time.</p>
              </div>
              <PrimaryLink to={page.cta.to}>{page.cta.label} <ArrowRight className="w-4 h-4" /></PrimaryLink>
            </Reveal>
          )}

          {!isLegal && siblings.length > 0 && (
            <div className="pt-8 border-t border-line">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sub">More in {kind === "company" ? "Company" : "Resources"}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {siblings.map(([k, v]) => (
                  <Link key={k} to={`/${kind}/${k}`} className="rounded-full border border-line px-4 py-2 text-sm text-fg/80 hover:border-indigo-400 hover:bg-indigo-50 transition-colors">{v.eyebrow}</Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
