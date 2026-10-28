import { siVisa, siPaytm, siPhonepe, siGooglepay } from "simple-icons";

/** Places a 24×24 simple-icons path at (x,y) with a given size and colour. */
const brand = (path: string, x: number, y: number, size: number, fill: string) =>
  `<g transform="translate(${x} ${y}) scale(${size / 24})"><path d="${path}" fill="${fill}"/></g>`;

/** Rounded app-style tile with a centred brand glyph. */
const tile = (path: string, x: number, bg: string, fg = "#fff") =>
  `<rect x="${x}" y="38" width="44" height="44" rx="12" fill="${bg}"/>${brand(path, x + 10, 48, 24, fg)}`;

const logos: Record<string, string> = {
  // RBI-operated rails: bank mark in a seal
  RTGS: `<circle cx="110" cy="60" r="34" fill="#E50914"/><circle cx="110" cy="60" r="28" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="1.5"/>
    <g fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M92 76h36M95 71v-15M103 71v-15M117 71v-15M125 71v-15M110 41l19 10H91z"/><path d="M110 56v15"/></g>`,
  NEFT: `<circle cx="110" cy="60" r="34" fill="#F1A900"/><circle cx="110" cy="60" r="28" fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="1.5"/>
    <g fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M98 50l-7 7 7 7M91 57h28M122 56l7 7-7 7M129 63h-28"/></g>`,
  // NPCI IMPS: orange & blue interlocking arrows
  IMPS: `<g transform="translate(78 32)">
    <path d="M6 22h38l-10-12h10l14 16-14 16H34l10-12H6z" fill="#F37021"/>
    <path d="M58 36H20l10 12H20L6 32l14-16h10L20 28h38z" fill="#00539F" opacity=".95"/></g>`,
  // UPI: the signature orange + green forward arrows
  UPI: `<g transform="translate(82 26)">
    <path d="M18 2l22 34-22 34z" fill="#097939"/>
    <path d="M2 2l22 34L2 70z" fill="#ED752E"/></g>`,
  // Bharat BillPay: blue roundel with B and orange swoosh
  BBPS: `<circle cx="110" cy="60" r="34" fill="#00539F"/>
    <text x="110" y="74" fill="#fff" font-family="Arial Black,Arial,sans-serif" font-size="40" font-weight="900" text-anchor="middle">B</text>
    <path d="M82 80c18 10 40 10 58-4" fill="none" stroke="#F37021" stroke-width="5" stroke-linecap="round"/>`,
  // Card networks: Visa + Mastercard
  Cards: `<rect x="40" y="38" width="66" height="44" rx="8" fill="#fff" stroke="#e8e8e8" stroke-width="2"/>${brand(siVisa.path, 51, 38, 44, "#1A1F71")}
    <rect x="114" y="38" width="66" height="44" rx="8" fill="#fff" stroke="#e8e8e8" stroke-width="2"/>
    <circle cx="139" cy="60" r="13" fill="#EB001B"/><circle cx="155" cy="60" r="13" fill="#F79E1B"/>
    <path d="M147 49.8a13 13 0 0 1 0 20.4a13 13 0 0 1 0-20.4z" fill="#FF5F00"/>`,
  // Popular Indian wallets / UPI apps
  Wallets: `${tile(siPaytm.path, 38, "#00BAF2")}${tile(siPhonepe.path, 88, "#5F259F")}<rect x="138" y="38" width="44" height="44" rx="12" fill="#fff" stroke="#e8e8e8" stroke-width="2"/>${brand(siGooglepay.path, 148, 48, 24, "#4285F4")}`,
};

export const paymentRails = [
  { name: "RTGS", descriptor: "Real-time gross settlement" },
  { name: "UPI", descriptor: "Unified payments" },
  { name: "IMPS", descriptor: "Instant transfers" },
  { name: "NEFT", descriptor: "Bank transfers" },
  { name: "BBPS", descriptor: "Bill payments" },
  { name: "Cards", descriptor: "Card payments" },
  { name: "Wallets", descriptor: "Digital wallets" },
];

export const paymentRailItems = paymentRails.map((rail) => {
  const artwork = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 180"><rect x="2" y="2" width="216" height="176" rx="24" fill="#fff" stroke="#e5e5e5" stroke-width="2"/>${logos[rail.name]}<text x="110" y="128" fill="#111111" font-family="Arial,sans-serif" font-size="27" font-weight="700" text-anchor="middle">${rail.name}</text><text x="110" y="152" fill="#777" font-family="Arial,sans-serif" font-size="10" font-weight="600" letter-spacing="1.2" text-anchor="middle">${rail.descriptor.toUpperCase()}</text></svg>`;
  return { src: `data:image/svg+xml,${encodeURIComponent(artwork)}`, alt: `${rail.name} - ${rail.descriptor}`, label: rail.name };
});
