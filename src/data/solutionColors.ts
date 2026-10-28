export type SolColor = {
  tabOn: string; tabOff: string; panel: string; text: string; bar: string; soft: string; ring: string; gradient: string; hex: string;
};

export const solutionColors: Record<string, SolColor> = {
  banks: {
    tabOn: "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/30",
    tabOff: "bg-blue-50 border-blue-100 text-blue-700 hover:bg-blue-100",
    panel: "bg-gradient-to-br from-blue-50 via-white to-sky-50 border-blue-100",
    text: "text-blue-600", bar: "bg-blue-600", soft: "bg-blue-50", ring: "ring-blue-100",
    gradient: "from-blue-600 to-sky-500", hex: "#2563EB",
  },
  fintechs: {
    tabOn: "bg-violet-600 border-violet-600 text-white shadow-lg shadow-violet-600/30",
    tabOff: "bg-violet-50 border-violet-100 text-violet-700 hover:bg-violet-100",
    panel: "bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 border-violet-100",
    text: "text-violet-600", bar: "bg-violet-600", soft: "bg-violet-50", ring: "ring-violet-100",
    gradient: "from-violet-600 to-fuchsia-500", hex: "#7C3AED",
  },
  merchants: {
    tabOn: "bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/30",
    tabOff: "bg-orange-50 border-orange-100 text-orange-700 hover:bg-orange-100",
    panel: "bg-gradient-to-br from-orange-50 via-white to-amber-50 border-orange-100",
    text: "text-orange-600", bar: "bg-orange-500", soft: "bg-orange-50", ring: "ring-orange-100",
    gradient: "from-orange-500 to-amber-400", hex: "#F97316",
  },
  nbfcs: {
    tabOn: "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-600/30",
    tabOff: "bg-emerald-50 border-emerald-100 text-emerald-700 hover:bg-emerald-100",
    panel: "bg-gradient-to-br from-emerald-50 via-white to-teal-50 border-emerald-100",
    text: "text-emerald-600", bar: "bg-emerald-600", soft: "bg-emerald-50", ring: "ring-emerald-100",
    gradient: "from-emerald-600 to-teal-400", hex: "#059669",
  },
  enterprises: {
    tabOn: "bg-cyan-600 border-cyan-600 text-white shadow-lg shadow-cyan-600/30",
    tabOff: "bg-cyan-50 border-cyan-100 text-cyan-700 hover:bg-cyan-100",
    panel: "bg-gradient-to-br from-cyan-50 via-white to-sky-50 border-cyan-100",
    text: "text-cyan-700", bar: "bg-cyan-600", soft: "bg-cyan-50", ring: "ring-cyan-100",
    gradient: "from-cyan-600 to-blue-500", hex: "#0891B2",
  },
  education: {
    tabOn: "bg-rose-600 border-rose-600 text-white shadow-lg shadow-rose-600/30",
    tabOff: "bg-rose-50 border-rose-100 text-rose-700 hover:bg-rose-100",
    panel: "bg-gradient-to-br from-rose-50 via-white to-pink-50 border-rose-100",
    text: "text-rose-600", bar: "bg-rose-600", soft: "bg-rose-50", ring: "ring-rose-100",
    gradient: "from-rose-600 to-pink-500", hex: "#E11D48",
  },
};

export const solColor = (slug: string) => solutionColors[slug] ?? solutionColors.banks;
