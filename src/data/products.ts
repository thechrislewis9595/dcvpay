import {
  CreditCard, Speaker, Smartphone, Globe2, ShieldCheck, ScanFace, QrCode,
  Landmark, Lock, FileSignature, type LucideIcon,
} from "lucide-react";

export type Product = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  icon: LucideIcon;
  image: string;
  endpoint: string;
  faqs: { q: string; a: string }[];
  category: string;
  features: { title: string; desc: string }[];
  stats: { value: string; label: string }[];
  useCases: string[];
};

export const productGroups: { title: string; slugs: string[] }[] = [
  { title: "Payments & commerce", slugs: ["payment-orchestration", "soundbox", "pos", "DCvpgx"] },
  { title: "Verification & trust", slugs: ["verification-suite", "DCvverify", "DCvex-code"] },
  { title: "Banking & operations", slugs: ["DCvnxt", "DCvexcrow"] },
  { title: "Business workflows", slugs: ["DCvcontractx"] },
];

export const products: Product[] = [
  {
    slug: "payment-orchestration", endpoint: "POST /v1/payments", faqs: [{ q: "Which payment methods are supported?", a: "UPI, cards, net banking, wallets, EMI and pay-later, all through a single API." }, { q: "How does smart routing decide where to send a payment?", a: "Each acquirer is scored in real time on success rate, cost and latency, and every transaction goes to the best one." }], image: "https://images.pexels.com/photos/6995252/pexels-photo-6995252.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", name: "Payment Orchestration and Gateway", short: "Route every payment across providers intelligently.",
    tagline: "One integration to accept UPI, cards, net banking and wallets — with smart routing and retries built in.",
    icon: CreditCard, category: "Payments & commerce",
    features: [
      { title: "Smart routing", desc: "Route transactions to the best-performing acquirer based on success rate, cost and latency." },
      { title: "Automatic retries", desc: "Recover failed payments with configurable cascading across providers." },
      { title: "Unified checkout", desc: "Hosted, embedded and SDK checkouts for web, Android and iOS." },
      { title: "Real-time webhooks", desc: "Every state change pushed to your systems within milliseconds." },
    ],
    stats: [{ value: "99.99%", label: "Uptime" }, { value: "+8%", label: "Success-rate uplift" }, { value: "<50ms", label: "Routing decision" }],
    useCases: ["E-commerce checkout", "Subscription billing", "Marketplace collections", "Bill payments"],
  },
  {
    slug: "soundbox", endpoint: "POST /v1/devices/soundbox/activate", faqs: [{ q: "Does Soundbox work without Wi-Fi?", a: "Yes. It has a built-in 4G SIM and buffers alerts offline when the network drops." }, { q: "Can I change the announcement language?", a: "Yes, you can switch languages any time from the merchant app." }], image: "https://images.pexels.com/photos/6205512/pexels-photo-6205512.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", name: "Soundbox", short: "Instant voice payment confirmations for merchants.",
    tagline: "4G-enabled soundbox that announces every UPI payment in 12 Indian languages — no more screenshot fraud.",
    icon: Speaker, category: "Payments & commerce",
    features: [
      { title: "Multilingual alerts", desc: "Announcements in Hindi, English, Tamil, Bengali, Marathi and more." },
      { title: "4G + Wi-Fi", desc: "Always connected, with offline buffering for patchy networks." },
      { title: "7-day battery", desc: "Designed for street vendors and kirana stores alike." },
      { title: "Fleet management", desc: "Remote provisioning, firmware updates and health monitoring." },
    ],
    stats: [{ value: "12", label: "Languages" }, { value: "7 days", label: "Battery life" }, { value: "<2s", label: "Alert latency" }],
    useCases: ["Kirana stores", "Street vendors", "Pharmacies", "Petrol pumps"],
  },
  {
    slug: "pos", endpoint: "POST /v1/pos/terminals", faqs: [{ q: "Which cards are accepted?", a: "Visa, Mastercard, RuPay, Amex and Diners, plus UPI QR and wallets." }, { q: "Can I run my own billing app on it?", a: "Yes. The Android terminal supports third-party and custom apps." }], image: "https://images.pexels.com/photos/4968635/pexels-photo-4968635.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", name: "PoS", short: "Android smart PoS for cards, UPI and more.",
    tagline: "Accept tap, chip, swipe and QR on a single Android PoS terminal with built-in billing and inventory.",
    icon: Smartphone, category: "Payments & commerce",
    features: [
      { title: "All-in-one acceptance", desc: "EMV chip, NFC tap, magstripe, dynamic UPI QR and wallets." },
      { title: "App ecosystem", desc: "Billing, inventory, loyalty and EMI apps on the device." },
      { title: "Instant settlement", desc: "T+0 settlement options for eligible merchants." },
      { title: "PCI-certified", desc: "PCI PTS hardware and end-to-end encryption." },
    ],
    stats: [{ value: "T+0", label: "Settlement" }, { value: "PCI PTS", label: "Certified" }, { value: "5+", label: "Acceptance modes" }],
    useCases: ["Retail chains", "Restaurants", "Hospitals", "Field collections"],
  },
  {
    slug: "DCvpgx", endpoint: "POST /v1/international/payments", faqs: [{ q: "Which currencies can I accept?", a: "100+ currencies, settled in INR to your Indian bank account." }, { q: "Is FIRC provided?", a: "Yes. Purpose codes and FIRC are handled automatically for every eligible payment." }], image: "https://images.pexels.com/photos/7412102/pexels-photo-7412102.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", name: "DCvPGX", short: "Cross-border payment gateway for global commerce.",
    tagline: "Accept international payments in 100+ currencies with local settlement and compliant FX handling.",
    icon: Globe2, category: "Payments & commerce",
    features: [
      { title: "Multi-currency", desc: "Display, charge and settle in 100+ currencies." },
      { title: "Local methods", desc: "Support for global cards, wallets and regional rails." },
      { title: "FX transparency", desc: "Locked rates and clear reconciliation of conversion." },
      { title: "Compliance built in", desc: "Purpose codes, FIRC and regulatory reporting handled for you." },
    ],
    stats: [{ value: "100+", label: "Currencies" }, { value: "180+", label: "Countries" }, { value: "T+1", label: "Settlement" }],
    useCases: ["SaaS exports", "D2C brands going global", "Education fees", "Travel"],
  },
  {
    slug: "verification-suite", endpoint: "POST /v1/verify/pan", faqs: [{ q: "What can I verify?", a: "PAN, Aadhaar, GSTIN, CIN, Udyam, bank accounts, driving licences and more." }, { q: "Is verification data stored?", a: "Only as long as audit rules require, encrypted and stored in India." }], image: "https://images.pexels.com/photos/45113/pexels-photo-45113.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", name: "Verification Suite", short: "KYC, KYB and onboarding APIs in one place.",
    tagline: "PAN, Aadhaar, GST, bank account and business verification APIs with a single unified response format.",
    icon: ShieldCheck, category: "Verification & trust",
    features: [
      { title: "Identity KYC", desc: "PAN, Aadhaar offline XML, DigiLocker, passport and voter ID." },
      { title: "Business KYB", desc: "GSTIN, CIN, Udyam and director verification." },
      { title: "Bank verification", desc: "Penny-drop and penny-less account validation." },
      { title: "Audit trails", desc: "Immutable logs for every verification for regulators." },
    ],
    stats: [{ value: "30+", label: "Verification APIs" }, { value: "<1s", label: "Median response" }, { value: "99.9%", label: "Availability" }],
    useCases: ["Lending onboarding", "Merchant onboarding", "Gig worker KYC", "Insurance"],
  },
  {
    slug: "DCvverify", endpoint: "POST /v1/kyc/video/sessions", faqs: [{ q: "Is video KYC RBI-compliant?", a: "Yes. It follows the RBI KYC Master Direction, including recording and geo-tagging." }, { q: "Can customers complete it on mobile?", a: "Yes, in any modern mobile browser. No app download is needed." }], image: "https://images.pexels.com/photos/8090132/pexels-photo-8090132.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", name: "DCvVerify", short: "Video KYC and face-match with liveness detection.",
    tagline: "RBI-compliant video KYC with AI liveness, face-match and document OCR — onboarding in under 3 minutes.",
    icon: ScanFace, category: "Verification & trust",
    features: [
      { title: "AI liveness", desc: "Passive liveness to block spoofing, masks and deepfakes." },
      { title: "Face match", desc: "Match selfies to ID documents with high accuracy." },
      { title: "Document OCR", desc: "Extract data from 50+ Indian document types." },
      { title: "Agent console", desc: "Video KYC queueing, recording and geo-tagging." },
    ],
    stats: [{ value: "<3 min", label: "Onboarding" }, { value: "99.6%", label: "Match accuracy" }, { value: "50+", label: "Document types" }],
    useCases: ["Bank account opening", "NBFC loans", "Wallet full-KYC", "Broking"],
  },
  {
    slug: "DCvex-code", endpoint: "POST /v1/codes", faqs: [{ q: "Can codes be single-use?", a: "Yes. Codes can be single-use, time-bound or limited to a set number of redemptions." }, { q: "How do customers verify a code?", a: "By scanning it with any phone camera or entering it on your branded page." }], image: "https://images.pexels.com/photos/278430/pexels-photo-278430.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", name: "DCvEX-Code", short: "Secure codes and tokens for authenticated transactions.",
    tagline: "Generate secure, tamper-proof dynamic codes and tokens to authenticate payments, vouchers and assets.",
    icon: QrCode, category: "Verification & trust",
    features: [
      { title: "Dynamic codes", desc: "Single-use, time-bound QR and alphanumeric codes." },
      { title: "Tokenisation", desc: "Replace sensitive data with secure, scoped tokens." },
      { title: "Anti-counterfeit", desc: "Product authentication codes for brands." },
      { title: "Scan analytics", desc: "Track redemption, geography and fraud attempts." },
    ],
    stats: [{ value: "1B+", label: "Codes issued" }, { value: "0", label: "Breaches" }, { value: "AES-256", label: "Encryption" }],
    useCases: ["Voucher redemption", "Product authenticity", "Event ticketing", "Secure payouts"],
  },
  {
    slug: "DCvnxt", endpoint: "GET /v1/banking/accounts", faqs: [{ q: "Which banks are supported?", a: "25+ public, private and cooperative banks across India." }, { q: "Can payouts need more than one approver?", a: "Yes. Maker-checker workflows with role-based limits are built in." }], image: "https://images.pexels.com/photos/7109243/pexels-photo-7109243.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", name: "DCvNXT", short: "Connected banking and treasury operations.",
    tagline: "Connect all your bank accounts — balances, statements, payouts and reconciliation from a single dashboard.",
    icon: Landmark, category: "Banking & operations",
    features: [
      { title: "Multi-bank view", desc: "Real-time balances and statements across banks." },
      { title: "Bulk payouts", desc: "IMPS, NEFT, RTGS and UPI payouts via API or upload." },
      { title: "Auto reconciliation", desc: "Match settlements to transactions automatically." },
      { title: "Maker-checker", desc: "Approval workflows with granular role permissions." },
    ],
    stats: [{ value: "25+", label: "Connected banks" }, { value: "95%", label: "Auto-reconciled" }, { value: "24×7", label: "Payouts" }],
    useCases: ["Vendor payouts", "Payroll", "Treasury management", "Refunds"],
  },
  {
    slug: "DCvexcrow", endpoint: "POST /v1/escrow/accounts", faqs: [{ q: "Where are escrow funds held?", a: "With regulated partner banks, in dedicated escrow accounts." }, { q: "How are releases triggered?", a: "By milestones, approvals, API calls or a combination of rules." }], image: "https://images.pexels.com/photos/7734651/pexels-photo-7734651.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", name: "DCvEXcrow", short: "Escrow accounts with programmable release.",
    tagline: "Hold funds safely and release them on milestones, approvals or conditions — fully automated and auditable.",
    icon: Lock, category: "Banking & operations",
    features: [
      { title: "Programmable release", desc: "Rule-based releases on milestones or API triggers." },
      { title: "Dispute handling", desc: "Freeze, split and resolve disputes with full history." },
      { title: "Bank-held funds", desc: "Funds held with regulated partner banks." },
      { title: "Audit trails", desc: "Every movement logged and exportable." },
    ],
    stats: [{ value: "₹5,000Cr+", label: "Held in escrow" }, { value: "100%", label: "Bank-held" }, { value: "T+0", label: "Release" }],
    useCases: ["Marketplaces", "Real estate", "Freelance platforms", "M&A transactions"],
  },
  {
    slug: "DCvcontractx", endpoint: "POST /v1/contracts", faqs: [{ q: "Are the e-signatures legally valid?", a: "Yes. Aadhaar eSign is legally valid under the IT Act, 2000." }, { q: "Can I collect payment when a contract is signed?", a: "Yes. Attach a payment or mandate and it is collected the moment the contract is signed." }], image: "https://images.pexels.com/photos/261621/pexels-photo-261621.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", name: "DCvContractX", short: "Contracts, e-sign and payments in one workflow.",
    tagline: "Draft, e-sign, stamp and collect payments against contracts — with Aadhaar eSign and e-stamping built in.",
    icon: FileSignature, category: "Business workflows",
    features: [
      { title: "Aadhaar eSign", desc: "Legally valid e-signatures under the IT Act." },
      { title: "Digital stamping", desc: "e-Stamp papers across Indian states." },
      { title: "Templates", desc: "Reusable contract templates with dynamic fields." },
      { title: "Pay-on-sign", desc: "Collect payments or mandates when a contract is signed." },
    ],
    stats: [{ value: "20+", label: "States for e-stamp" }, { value: "<5 min", label: "Contract cycle" }, { value: "100%", label: "Legally valid" }],
    useCases: ["Loan agreements", "Vendor contracts", "Rental agreements", "Employee onboarding"],
  },
];

export const getProduct = (slug?: string) => products.find((p) => p.slug === slug);

export type CategoryTone = "blue" | "violet" | "emerald" | "amber";
export const categoryTone = (c: string): CategoryTone =>
  ({ "Payments & commerce": "blue", "Verification & trust": "violet", "Banking & operations": "emerald", "Business workflows": "amber" } as Record<string, CategoryTone>)[c] ?? "blue";
