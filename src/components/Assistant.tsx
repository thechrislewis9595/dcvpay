import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, X, Send, Bot, Sparkles, Mail, CheckCircle2, RotateCcw } from "lucide-react";
import { products } from "../data/products";

export const TEAM_EMAIL = "hello@DCvpay.tech";

type Msg = {
  from: "bot" | "user";
  text: string;
  links?: { to: string; label: string }[];
  quick?: string[];
  form?: boolean;
  sent?: boolean;
};

const MAIN = ["Payment solutions", "Connected banking", "Platform support", "Talk to the team"];
const GREETING: Msg = {
  from: "bot",
  text: "Namaste! Welcome to DCvpay. I can help you explore payment solutions, connected banking, and platform support. What would you like to know?",
  quick: ["Payment solutions", "Connected banking", "Talk to the team"],
};

function reply(q: string): Msg {
  const s = q.toLowerCase();
  if (s === "payment solutions" || /payment solution|gateway|checkout|accept payment/.test(s))
    return { from: "bot", text: "We offer a full payments stack: smart payment orchestration, Soundbox voice alerts, Android PoS, and DCvPGX for cross-border payments. Which one would you like to explore?",
      links: [{ to: "/products/payment-orchestration", label: "Payment Orchestration" }, { to: "/products/soundbox", label: "Soundbox" }, { to: "/products/pos", label: "PoS" }, { to: "/products/DCvpgx", label: "DCvPGX" }],
      quick: ["Connected banking", "Talk to the team"] };
  if (s === "connected banking" || /connected bank|treasury|payout|statement|reconcil/.test(s))
    return { from: "bot", text: "With DCvNXT you can connect all your bank accounts to see real-time balances, send bulk payouts and reconcile automatically. DCvEXcrow adds bank-held escrow with programmable releases.",
      links: [{ to: "/products/DCvnxt", label: "DCvNXT" }, { to: "/products/DCvexcrow", label: "DCvEXcrow" }],
      quick: ["Payment solutions", "Talk to the team"] };
  if (s === "platform support" || /support|sandbox|api|key|developer|docs|sdk|integrat|status/.test(s))
    return { from: "bot", text: "For integration help, start with our docs and sandbox. You can check live uptime on the status page, and our team is just an email away.",
      links: [{ to: "/developers", label: "Developer hub" }, { to: "/resources/sandbox", label: "Sandbox" }, { to: "/resources/status", label: "Status page" }],
      quick: ["Talk to the team", "Payment solutions"] };
  if (s === "talk to the team" || /team|human|agent|person|personal|assistant|mail|email|demo|sales|contact|call|talk|price|pricing/.test(s))
    return { from: "bot", text: "Need a personal assistant? Send a mail to our team and a DCvpayspecialist will get back to you within one business day.", form: true };
  const hit = products.find((p) => s.includes(p.name.toLowerCase()) || s.includes(p.slug.replace(/-/g, " ")) || s.includes(p.slug));
  if (hit) return { from: "bot", text: `${hit.name}: ${hit.tagline}`, links: [{ to: `/products/${hit.slug}`, label: `Explore ${hit.name}` }], quick: ["Talk to the team"] };
  if (/kirana|shop|store|merchant|vendor|offline/.test(s)) return { from: "bot", text: "For physical stores, Soundbox gives instant voice alerts for UPI payments, and our Android PoS accepts cards, tap and QR on one device.", links: [{ to: "/products/soundbox", label: "Soundbox" }, { to: "/products/pos", label: "PoS" }], quick: MAIN };
  if (/kyc|verif|aadhaar|pan|gst|onboard/.test(s)) return { from: "bot", text: "Our Verification Suite covers PAN, Aadhaar, GST, bank account and business checks, and DCvVerify adds video KYC with AI liveness.", links: [{ to: "/products/verification-suite", label: "Verification Suite" }, { to: "/products/DCvverify", label: "DCvVerify" }], quick: MAIN };
  if (/escrow|hold|milestone/.test(s)) return { from: "bot", text: "DCvEXcrow holds funds with regulated partner banks and releases them on milestones, approvals or API triggers.", links: [{ to: "/products/DCvexcrow", label: "DCvEXcrow" }], quick: MAIN };
  if (/contract|sign|stamp|agreement/.test(s)) return { from: "bot", text: "DCvContractX handles drafting, Aadhaar eSign, e-stamping and pay-on-sign in one workflow.", links: [{ to: "/products/DCvcontractx", label: "DCvContractX" }], quick: MAIN };
  if (/^(hi|hello|hey|namaste)\b/.test(s)) return { ...GREETING, quick: MAIN };
  return { from: "bot", text: "I can help with payment solutions, connected banking and platform support. Pick an option below, or send a mail to our team for personal help.", quick: MAIN };
}

function MailForm({ onSent }: { onSent: (name: string) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`DCvpayenquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}\n\n— Sent via DCvpayAI assistant`);
    window.location.href = `mailto:${TEAM_EMAIL}?subject=${subject}&body=${body}`;
    onSent(name);
  };
  const cls = "w-full rounded-lg border border-white/10 bg-ink px-3 py-2 text-[13px] text-white placeholder:text-muted/60 outline-none focus:border-violet-400";
  return (
    <form onSubmit={submit} className="mt-3 space-y-2">
      <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={cls} />
      <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Work email" className={cls} />
      <textarea required rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="How can our team help?" className={`${cls} resize-none`} />
      <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg btn-grad py-2 text-[13px] font-semibold text-white  transition-colors">
        <Mail className="w-3.5 h-3.5" /> Send mail to our team
      </button>
      <p className="text-[11px] text-muted text-center">or write to <a href={`mailto:${TEAM_EMAIL}`} className="text-sky-300 hover:underline">{TEAM_EMAIL}</a></p>
    </form>
  );
}

export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([GREETING]);
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => { end.current?.scrollIntoView({ behavior: "smooth", block: "end" }); }, [msgs, typing, open]);

  const send = (text: string) => {
    if (!text.trim() || typing) return;
    setMsgs((m) => [...m.map((x) => ({ ...x, quick: undefined })), { from: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => { setMsgs((m) => [...m, reply(text)]); setTyping(false); }, 600 + Math.random() * 500);
  };

  const onSent = (idx: number, name: string) => {
    setMsgs((m) => [
      ...m.map((x, i) => (i === idx ? { ...x, form: false, sent: true } : x)),
      { from: "bot", text: `Thank you, ${name.split(" ")[0]}! Your mail app has opened with your message ready to send to our team. We'll get back to you within one business day.`, quick: ["Payment solutions", "Connected banking"] },
    ]);
  };

  const reset = () => setMsgs([GREETING]);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[60] flex flex-col items-end">
      {open && (
        <div role="dialog" aria-label="DCvpayAI assistant" className="drop-in mb-4 w-[calc(100vw-2.5rem)] sm:w-[390px] h-[min(600px,calc(100vh-140px))] flex flex-col rounded-2xl bg-charcoal text-white shadow-2xl shadow-black/40 ring-1 ring-black overflow-hidden">
          <div className="relative flex items-center gap-3 bg-ink px-4 py-3.5 border-b border-white/10">
            <div className="absolute inset-x-0 bottom-0 h-[2px] rainbow-line" />
            <span className="relative grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 via-fuchsia-500 to-indigo-500"><Bot className="w-5 h-5" />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-ink" />
            </span>
            <div className="flex-1">
              <p className="font-semibold text-sm flex items-center gap-1.5">DCvpayAssistant <Sparkles className="w-3.5 h-3.5 text-sky-300" /></p>
              <p className="text-xs text-muted">Online · replies instantly</p>
            </div>
            <button onClick={reset} aria-label="Restart conversation" title="Restart" className="p-1.5 rounded-lg text-muted hover:text-white hover:bg-white/10"><RotateCcw className="w-4 h-4" /></button>
            <button onClick={() => setOpen(false)} aria-label="Close" className="p-1.5 rounded-lg text-muted hover:text-white hover:bg-white/10"><X className="w-4 h-4" /></button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {msgs.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.from === "user" ? "items-end" : "items-start"}`}>
                <div className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${m.from === "user" ? "bg-gradient-to-br from-indigo-500 to-violet-600 text-white rounded-br-md" : "bg-ink text-white/90 ring-1 ring-white/10 rounded-bl-md"}`}>
                  {m.text}
                  {m.links && (
                    <div className="mt-2.5 flex flex-col gap-1.5">
                      {m.links.map((l) => (
                        <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-lg border border-white/10 px-3 py-2 text-[13px] font-medium text-white hover:border-sky-400 hover:bg-sky-400/10 transition-colors">
                          {l.label} <span className="text-sky-300">→</span>
                        </Link>
                      ))}
                    </div>
                  )}
                  {m.form && <MailForm onSent={(n) => onSent(i, n)} />}
                  {m.sent && <p className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400"><CheckCircle2 className="w-3.5 h-3.5" /> Message prepared</p>}
                </div>
                {m.quick && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {m.quick.map((q, qi) => (
                      <button key={q} onClick={() => send(q)} className={`rounded-full border px-3.5 py-1.5 text-xs font-medium text-white transition-colors ${["border-rose-400/60 bg-rose-400/10 hover:bg-rose-500", "border-sky-400/60 bg-sky-400/10 hover:bg-sky-500", "border-emerald-400/60 bg-emerald-400/10 hover:bg-emerald-500", "border-violet-400/60 bg-violet-400/10 hover:bg-violet-500"][qi % 4]}`}>{q}</button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div className="flex"><div className="typing flex gap-1 rounded-2xl rounded-bl-md bg-ink px-4 py-3 ring-1 ring-white/10">
                {[0, 1, 2].map((i) => <span key={i} className="w-1.5 h-1.5 rounded-full bg-muted" />)}
              </div></div>
            )}
            <div ref={end} />
          </div>

          <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex items-center gap-2 border-t border-white/10 p-3 bg-ink">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your question…" className="flex-1 rounded-xl bg-charcoal border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-muted/70 outline-none focus:border-violet-400" />
            <button type="submit" aria-label="Send" className="grid place-items-center w-10 h-10 rounded-xl btn-grad text-white  disabled:opacity-40 transition" disabled={!input.trim()}><Send className="w-4 h-4" /></button>
          </form>
        </div>
      )}
      <div className="flex flex-col items-end">
        {!open && <button onClick={() => setOpen(true)} className="mb-2 mr-1 rounded-md bg-ink px-2.5 py-1 text-[11px] font-semibold text-white shadow-lg hover:bg-violet-600 hover:text-white transition-colors">Need help?</button>}
        <button onClick={() => setOpen(!open)} aria-label={open ? "Close assistant" : "Open AI assistant"} className="relative grid place-items-center w-14 h-14 rounded-full btn-grad text-white shadow-xl shadow-violet-500/40  hover:scale-105 transition-all">
          {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          {!open && <span className="pulse-dot absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-white ring-2 ring-violet-500" />}
        </button>
      </div>
    </div>
  );
}
