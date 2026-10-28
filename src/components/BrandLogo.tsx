import {
  siSap, siOdoo, siZoho, siQuickbooks, siXero, siShopify, siWoocommerce, siHubspot, siZendesk, siWhatsapp, siSnowflake,
  siNodedotjs, siPython, siOpenjdk, siGo, siPhp, siDotnet, siAndroid, siApple, siReact, siFlutter,
  siVisa, siMastercard, siGooglepay, siPhonepe, siPaytm, siPostman, siGithub, siApplepay, siAmericanexpress,
} from "simple-icons";

type SI = { path: string; hex: string; title: string };

export const brands = {
  sap: siSap, odoo: siOdoo, zoho: siZoho, quickbooks: siQuickbooks, xero: siXero, shopify: siShopify,
  woocommerce: siWoocommerce, hubspot: siHubspot, zendesk: siZendesk, whatsapp: siWhatsapp, snowflake: siSnowflake,
  node: siNodedotjs, python: siPython, java: siOpenjdk, go: siGo, php: siPhp, dotnet: siDotnet, android: siAndroid,
  apple: siApple, react: siReact, flutter: siFlutter, visa: siVisa, mastercard: siMastercard, googlepay: siGooglepay,
  phonepe: siPhonepe, paytm: siPaytm, postman: siPostman, github: siGithub, applepay: siApplepay, amex: siAmericanexpress,
} satisfies Record<string, SI>;

export type BrandKey = keyof typeof brands | "microsoft";

/** Real brand mark rendered from simple-icons (Microsoft drawn as its four-square logo). */
export function BrandLogo({ name, className = "w-6 h-6", mono }: { name: BrandKey; className?: string; mono?: string }) {
  if (name === "microsoft") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-label="Microsoft">
        <rect x="1" y="1" width="10.5" height="10.5" fill={mono ?? "#F25022"} />
        <rect x="12.5" y="1" width="10.5" height="10.5" fill={mono ?? "#7FBA00"} />
        <rect x="1" y="12.5" width="10.5" height="10.5" fill={mono ?? "#00A4EF"} />
        <rect x="12.5" y="12.5" width="10.5" height="10.5" fill={mono ?? "#FFB900"} />
      </svg>
    );
  }
  const b = brands[name];
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label={b.title}>
      <path d={b.path} fill={mono ?? `#${b.hex}`} />
    </svg>
  );
}

export const brandHex = (name: BrandKey) => (name === "microsoft" ? "00A4EF" : brands[name].hex);
