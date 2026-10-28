import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./ui";
import { productGroups, getProduct, categoryTone } from "../data/products";
import { toneBox, toneText } from "./ui";

const companyLinks = [
  { to: "/about", label: "About Us", desc: "Our story, mission and team" },
  { to: "/company/careers", label: "Careers", desc: "Join the DCvpayteam" },
  { to: "/company/partners", label: "Partners", desc: "Grow with our network" },
  { to: "/contact", label: "Contact Us", desc: "Talk to sales or support" },
];

export default function Navbar() {
  const [open, setOpen] = useState<null | "products" | "company">(null);
  const [mobile, setMobile] = useState(false);
  const [mSection, setMSection] = useState<null | "products" | "company">(null);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => { setOpen(null); setMobile(false); }, [loc.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onClick = (e: MouseEvent) => { if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(null); };
    onScroll();
    window.addEventListener("scroll", onScroll);
    document.addEventListener("mousedown", onClick);
    return () => { window.removeEventListener("scroll", onScroll); document.removeEventListener("mousedown", onClick); };
  }, []);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 text-[15px] transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-fuchsia-500 after:transition-all ${isActive ? "text-fg after:w-full" : "text-sub hover:text-fg after:w-0 hover:after:w-full"}`;
  const ddBtn = (key: "products" | "company", active: boolean) =>
    `flex items-center gap-1.5 py-2 text-[15px] transition-colors ${open === key || active ? "text-fg" : "text-sub hover:text-fg"}`;

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "bg-white/85 backdrop-blur-xl border-b border-line" : "bg-white border-b border-transparent"}`}>
      <div className="h-[3px] rainbow-line" />
      <div ref={wrap} className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] md:h-20 flex items-center justify-between gap-6">
        <Logo />

        <nav className="hidden lg:flex items-center gap-10" aria-label="Main">
          <div className="relative" onMouseEnter={() => setOpen("products")} onMouseLeave={() => setOpen(null)}>
            <button onClick={() => setOpen(open === "products" ? null : "products")} className={ddBtn("products", loc.pathname.startsWith("/products"))} aria-expanded={open === "products"}>
              Products <ChevronDown className={`w-4 h-4 transition-transform ${open === "products" ? "rotate-180 text-indigo-500" : ""}`} />
            </button>
            {open === "products" && (
              <div className="absolute left-1/2 -translate-x-[35%] top-full pt-4">
                <div className="drop-in w-[780px] rounded-2xl border border-line bg-white shadow-2xl shadow-black/10 overflow-hidden">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-6 p-6">
                    {productGroups.map((g) => (
                      <div key={g.title}>
                        <p className={`mb-2 px-3 text-[11px] font-semibold uppercase tracking-[0.14em] ${toneText[categoryTone(g.title)]}`}>{g.title}</p>
                        <ul>
                          {g.slugs.map((s) => {
                            const p = getProduct(s)!;
                            const Icon = p.icon;
                            return (
                              <li key={s}>
                                <Link to={`/products/${s}`} className="group flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-black/[.04] transition-colors">
                                  <span className={`mt-0.5 grid place-items-center w-8 h-8 shrink-0 rounded-lg ring-1 ${toneBox[categoryTone(g.title)]} group-hover:text-white transition-colors`}><Icon className="w-4 h-4" /></span>
                                  <span>
                                    <span className="block text-sm font-semibold text-fg">{p.name}</span>
                                    <span className="block text-xs text-sub leading-snug">{p.short}</span>
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between border-t border-line bg-white px-6 py-4 text-sm">
                    <span className="text-sub">Not sure what fits? Let our team map your stack.</span>
                    <Link to="/contact" className="group inline-flex items-center gap-1.5 font-semibold text-indigo-600 hover:text-violet-600">Talk to an expert <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <NavLink to="/platform" className={linkCls}>Platform</NavLink>
          <NavLink to="/solutions" className={linkCls}>Solutions</NavLink>
          <NavLink to="/developers" className={linkCls}>Developers</NavLink>
          <div className="relative" onMouseEnter={() => setOpen("company")} onMouseLeave={() => setOpen(null)}>
            <button onClick={() => setOpen(open === "company" ? null : "company")} className={ddBtn("company", ["/about", "/contact"].includes(loc.pathname) || loc.pathname.startsWith("/company"))} aria-expanded={open === "company"}>
              Company <ChevronDown className={`w-4 h-4 transition-transform ${open === "company" ? "rotate-180 text-indigo-500" : ""}`} />
            </button>
            {open === "company" && (
              <div className="absolute right-0 top-full pt-4">
                <div className="drop-in w-72 rounded-2xl border border-line bg-white p-2 shadow-2xl shadow-black/10">
                  {companyLinks.map((l) => (
                    <Link key={l.to} to={l.to} className="group flex items-center justify-between rounded-xl px-3 py-2.5 hover:bg-black/[.04]">
                      <span>
                        <span className="block text-sm font-semibold text-fg">{l.label}</span>
                        <span className="block text-xs text-sub">{l.desc}</span>
                      </span>
                      <ArrowRight className="w-4 h-4 text-indigo-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* spacer keeps nav visually centered */}
        <div className="hidden lg:block w-[140px]" aria-hidden />

        <button className="lg:hidden p-2 -mr-2 text-fg" onClick={() => setMobile(!mobile)} aria-label="Toggle menu" aria-expanded={mobile}>
          {mobile ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobile && (
        <div className="lg:hidden border-t border-line bg-white max-h-[calc(100vh-72px)] overflow-y-auto drop-in">
          <div className="px-5 py-4">
            <button onClick={() => setMSection(mSection === "products" ? null : "products")} className="w-full flex items-center justify-between py-3.5 font-medium text-fg">
              Products <ChevronDown className={`w-4 h-4 transition-transform ${mSection === "products" ? "rotate-180 text-indigo-500" : ""}`} />
            </button>
            {mSection === "products" && (
              <div className="pb-4 space-y-4">
                {productGroups.map((g) => (
                  <div key={g.title}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-500 mb-1">{g.title}</p>
                    {g.slugs.map((s) => (
                      <Link key={s} to={`/products/${s}`} className="block py-2 pl-3 text-sm text-sub border-l border-line hover:border-indigo-400 hover:text-fg">{getProduct(s)!.name}</Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
            {[["/platform", "Platform"], ["/solutions", "Solutions"], ["/developers", "Developers"]].map(([to, l]) => (
              <Link key={to} to={to} className="block py-3.5 font-medium text-fg border-t border-line">{l}</Link>
            ))}
            <button onClick={() => setMSection(mSection === "company" ? null : "company")} className="w-full flex items-center justify-between py-3.5 font-medium text-fg border-t border-line">
              Company <ChevronDown className={`w-4 h-4 transition-transform ${mSection === "company" ? "rotate-180 text-indigo-500" : ""}`} />
            </button>
            {mSection === "company" && (
              <div className="pb-3">
                {companyLinks.map((l) => (
                  <Link key={l.to} to={l.to} className="block py-2 pl-3 text-sm text-sub border-l border-line hover:border-indigo-400 hover:text-fg">{l.label}</Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
