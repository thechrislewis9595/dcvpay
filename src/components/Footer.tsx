import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { Logo } from "./ui";

const cols: { title: string; links: [string, string][] }[] = [
  { title: "Products", links: [["Payment Gateway", "/products/payment-orchestration"], ["Soundbox", "/products/soundbox"], ["PoS", "/products/pos"], ["Verification Suite", "/products/verification-suite"], ["DCvNXT", "/products/DCvnxt"], ["DCvEXcrow", "/products/DCvexcrow"]] },
  { title: "Solutions", links: [["For Banks", "/solutions/banks"], ["For Fintechs", "/solutions/fintechs"], ["For Merchants", "/solutions/merchants"], ["For NBFCs", "/solutions/nbfcs"], ["For Enterprises", "/solutions/enterprises"], ["For Education", "/solutions/education"]] },
  { title: "Company", links: [["About Us", "/about"], ["Careers", "/company/careers"], ["Blog", "/company/blog"], ["Press", "/company/press"], ["Partners", "/company/partners"], ["Contact", "/contact"]] },
  { title: "Resources", links: [["Documentation", "/resources/documentation"], ["API Reference", "/resources/api-reference"], ["Sandbox", "/resources/sandbox"], ["Status Page", "/resources/status"], ["Security", "/resources/security"], ["Compliance", "/resources/compliance"]] },
];

const linkedin = "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.66 4.8 6.13V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.92 1.3-1.92 2.63V21h-4V9.75Z";

export default function Footer() {
  return (
    <footer className="relative bg-ink border-t border-white/10">
      <div className="absolute inset-0 aurora-dark pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[3px] rainbow-line" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 md:pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-sm">
            <Logo light />
            <p className="mt-6 text-[15px] leading-relaxed text-muted">
              AI-powered payment infrastructure for banks and fintechs. Every rail, one platform, built for Bharat's scale.
            </p>
            <div className="mt-7 flex gap-3">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="DCvpayon LinkedIn" className="grid place-items-center w-10 h-10 rounded-xl border border-white/10 bg-charcoal text-muted hover:text-white hover:border-[#0A66C2] hover:bg-[#0A66C2] transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d={linkedin} /></svg>
              </a>
              <a href="mailto:hello@DCvpay.tech" aria-label="Email DCvpay" className="grid place-items-center w-10 h-10 rounded-xl border border-white/10 bg-charcoal text-muted hover:text-white hover:border-transparent hover:bg-gradient-to-br hover:from-rose-500 hover:to-violet-500 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 lg:contents">
            {cols.map((c, ci) => (
              <nav key={c.title} aria-label={c.title}>
                <h4 className="flex items-center gap-2 text-[15px] font-semibold text-white"><span className={`w-1.5 h-1.5 rounded-full ${["bg-rose-400", "bg-amber-400", "bg-emerald-400", "bg-sky-400"][ci]}`} />{c.title}</h4>
                <ul className="mt-5 space-y-3.5">
                  {c.links.map(([l, to]) => (
                    <li key={l}>
                      <Link to={to} className="group inline-flex items-center gap-2 text-[15px] text-muted hover:text-white transition-colors">
                        <span className={`w-0 h-px group-hover:w-3 transition-all ${["bg-rose-400", "bg-amber-400", "bg-emerald-400", "bg-sky-400"][ci]}`} />{l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between text-[13px] text-muted">
          <p>© 2026 DCvpayTechnologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/legal/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/legal/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/legal/rbi-compliance" className="hover:text-white">RBI Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
