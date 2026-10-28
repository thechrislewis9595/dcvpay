import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categoryTone, type Product } from "../data/products";
import { IconBox, toneText, toneBar } from "./ui";

/** Icon-based product card (photos are shown only on the product page itself). */
export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link to={`/products/${p.slug}`} className="group relative overflow-hidden flex flex-col h-full rounded-2xl bg-white border border-line p-6 card-hover transition-all duration-300">
      <span className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${toneBar[categoryTone(p.category)]}`} />
      <IconBox icon={p.icon} tone={categoryTone(p.category)} />
      <span className={`mt-4 text-[11px] font-semibold uppercase tracking-wider ${toneText[categoryTone(p.category)]}`}>{p.category}</span>
      <h3 className="mt-1 font-semibold text-fg leading-snug">{p.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-sub flex-1">{p.short}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-fg group-hover:text-indigo-600 transition-colors">
        Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
}
