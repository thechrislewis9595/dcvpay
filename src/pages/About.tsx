// import { Link } from "react-router-dom";
// import { Award, ArrowRight } from "lucide-react";
// import { TONES, toneSoft, toneText } from "../components/ui";
import { Target, Heart, ShieldCheck, Lightbulb } from "lucide-react";
import { PageHeader, SimpleCard, Reveal, Eyebrow } from "../components/ui";

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About us" title="Building the infrastructure for India's digital economy" subtitle="DCvpaywas founded with a simple belief: every business in India deserves world-class payment infrastructure — without the complexity." />
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <Eyebrow>Our story</Eyebrow>
          <h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">From one API to an entire payments stack</h2>
          <p className="mt-5 text-lg text-sub leading-relaxed">We started by solving our own pain — stitching together a dozen payment providers. Today, DCvpaypowers payments, verification, banking and business workflows for 30+ banks and fintechs, processing hundreds of millions of transactions every day.</p>
        </Reveal>
        <Reveal delay={120} className="grid grid-cols-2 gap-4">
          {[["2021", "Founded"], ["30+", "Bank partners"], ["500M+", "Daily transactions"], ["250+", "Team members"]].map(([v, l], i) => (
            <div key={l} className={`group card relative overflow-hidden p-6 ${["hover:bg-blue-600", "hover:bg-emerald-600", "hover:bg-violet-600", "hover:bg-amber-500"][i]} hover:border-transparent`}>
              <span className={`absolute inset-x-0 top-0 h-1 ${["bg-blue-600", "bg-emerald-600", "bg-violet-600", "bg-amber-500"][i]}`} />
              <p className={`font-display font-bold text-3xl group-hover:text-white transition-colors ${["text-blue-600", "text-emerald-600", "text-violet-600", "text-amber-600"][i]}`}>{v}</p>
              <p className="mt-1 text-sm text-sub group-hover:text-white/90 transition-colors">{l}</p>
            </div>
          ))}
        </Reveal>
      </section>
      <section className="wash-lilac border-y border-line py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center"><Eyebrow>Our values</Eyebrow><h2 className="mt-5 font-display font-bold text-3xl md:text-4xl tracking-tight">What drives us</h2></Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <SimpleCard icon={Target} title="Customer obsessed" desc="We measure success by our customers' success rates." />
            <SimpleCard icon={ShieldCheck} delay={80} title="Trust first" desc="Security and compliance are never an afterthought." />
            <SimpleCard icon={Lightbulb} delay={160} title="Build boldly" desc="We tackle hard infrastructure problems head-on." />
            <SimpleCard icon={Heart} delay={240} title="Made for Bharat" desc="Designed for every language, network and business size." />
          </div>
        </div>
      </section>
    </>
  );
}