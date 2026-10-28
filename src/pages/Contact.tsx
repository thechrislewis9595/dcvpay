import { Briefcase, Headphones, Handshake, Newspaper } from "lucide-react";
import { toneSoft, toneText } from "../components/ui";
import { FaqSection } from "../components/sections";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { PageHeader, Reveal } from "../components/ui";
import { products } from "../data/products";
import { TEAM_EMAIL } from "../components/Assistant";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = encodeURIComponent(`Name: ${f.get("name")}\nEmail: ${f.get("email")}\nCompany: ${f.get("company")}\nPhone: ${f.get("phone")}\nInterested in: ${f.get("product")}\n\n${f.get("message")}`);
    window.location.href = `mailto:${TEAM_EMAIL}?subject=${encodeURIComponent(`DCvpayenquiry — ${f.get("company")}`)}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <PageHeader eyebrow="Contact us" title="Let's talk payments" subtitle="Ask about pricing, partnerships or integration help — our team responds within one business day." />
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20 grid lg:grid-cols-[1fr_1.4fr] gap-12">
        <Reveal className="space-y-5">
          {([[Mail, "Email", TEAM_EMAIL, `mailto:${TEAM_EMAIL}`, "bg-blue-600"], [Phone, "Phone", "+91 80 4000 1234", "tel:+918040001234", "bg-emerald-600"], [MapPin, "Office", "Level 9, Prestige Tech Park, Bengaluru 560103", undefined, "bg-violet-600"]] as const).map(([Ic, l, v, href, bg]) => (
            <a key={l} href={href} className="group flex gap-4 card p-6 hover:border-indigo-300">
              <span className={`grid place-items-center w-11 h-11 shrink-0 rounded-xl text-white ${bg}`}><Ic className="w-5 h-5" /></span>
              <div><p className="text-sm text-sub">{l}</p><p className="font-semibold group-hover:text-indigo-600 transition-colors">{v}</p></div>
            </a>
          ))}
          <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-sky-50 p-6">
            <p className="font-semibold">Need quick answers?</p>
            <p className="mt-1 text-sm text-sub">Our AI assistant is available 24×7. Tap the chat button at the bottom right.</p>
          </div>
        </Reveal>
        <Reveal delay={120} className="card p-6 sm:p-10">
          {sent ? (
            <div className="py-16 text-center">
              <CheckCircle2 className="mx-auto w-14 h-14 text-emerald-500" />
              <h3 className="mt-5 font-display font-bold text-2xl">Thanks — we'll be in touch!</h3>
              <p className="mt-2 text-sub">Your mail app has opened with your message. A DCvpayspecialist will reach out within one business day.</p>
              <button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-indigo-500 hover:underline">Send another message</button>
            </div>
          ) : (
            <form onSubmit={submit} className="grid sm:grid-cols-2 gap-5">
              <label className="block"><span className="text-sm font-medium text-fg/80">Full name</span><input name="name" required className="input mt-1.5" placeholder="Priya Sharma" /></label>
              <label className="block"><span className="text-sm font-medium text-fg/80">Work email</span><input name="email" required type="email" className="input mt-1.5" placeholder="priya@company.com" /></label>
              <label className="block"><span className="text-sm font-medium text-fg/80">Company</span><input name="company" required className="input mt-1.5" placeholder="Company Pvt. Ltd." /></label>
              <label className="block"><span className="text-sm font-medium text-fg/80">Phone</span><input name="phone" type="tel" className="input mt-1.5" placeholder="+91 98xxxxxx" /></label>
              <label className="block sm:col-span-2"><span className="text-sm font-medium text-fg/80">Interested in</span>
                <select name="product" className="input mt-1.5">{products.map((p) => <option key={p.slug}>{p.name}</option>)}<option>Something else</option></select>
              </label>
              <label className="block sm:col-span-2"><span className="text-sm font-medium text-fg/80">Message</span><textarea name="message" rows={4} className="input mt-1.5 resize-none" placeholder="Tell us about your payment volumes and goals…" /></label>
              <button className="sm:col-span-2 group inline-flex justify-center items-center gap-2 rounded-xl btn-grad py-3.5 font-semibold text-white shadow-lg shadow-violet-500/30  transition-colors">
                Send message <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          )}
        </Reveal>
      </section>
      {/* Departments */}
      <section className="wash-sunrise border-y border-line py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal><h2 className="font-display font-bold text-3xl tracking-tight">Reach the right team</h2><p className="mt-2 text-sub">Write to us directly and the right people will reply.</p></Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {([[Briefcase, "Sales", "sales@DCvpay.tech", "Pricing, demos and proposals", "red"], [Headphones, "Support", "support@DCvpay.tech", "24×7 help for live customers", "blue"], [Handshake, "Partnerships", "partners@DCvpay.tech", "Banks, platforms and resellers", "emerald"], [Newspaper, "Press", "press@DCvpay.tech", "Media and brand enquiries", "amber"]] as const).map(([Ic, t, e, d, tone], i) => (
              <Reveal key={t} delay={i * 70}>
                <a href={`mailto:${e}`} className="group block h-full card card-hover p-6">
                  <span className={`grid place-items-center w-11 h-11 rounded-xl ${toneSoft[tone]} ${toneText[tone]}`}><Ic className="w-5 h-5" /></span>
                  <p className="mt-5 font-semibold">{t}</p>
                  <p className="mt-1 text-sm text-sub">{d}</p>
                  <p className={`mt-4 text-sm font-medium ${toneText[tone]} break-all`}>{e}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection className="" title="Before you reach out" faqs={[
        { q: "How quickly will I hear back?", a: "Sales and partnership enquiries get a reply within one business day. Live customers get 24×7 support." },
        { q: "Do you offer a free trial?", a: "The sandbox is free forever. For production, our team will share pricing based on your volumes." },
        { q: "Can I visit your office?", a: "Yes. Book a meeting with our team and we'll be happy to host you in Bengaluru, Mumbai or Gurugram." },
      ]} />
    </>
  );
}
