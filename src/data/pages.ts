import {
  Landmark, Rocket, Store, HandCoins, Building2, GraduationCap, type LucideIcon,
} from "lucide-react";

export type Solution = {
  slug: string; title: string; icon: LucideIcon; short: string; subtitle: string;
  challenges: { title: string; desc: string }[]; outcomes: string[]; products: string[];
  stats: { value: string; label: string }[];
  steps: { title: string; desc: string }[];
  story: { quote: string; author: string; role: string; metric: string; metricLabel: string };
  faqs: { q: string; a: string }[];
};

export const solutions: Solution[] = [
  {
    slug: "banks", title: "For Banks", icon: Landmark,
    short: "Update your payment switches, launch UPI and BBPS faster, and offer merchant acquiring at scale.",
    subtitle: "Infrastructure that lets banks launch new rails in weeks, not quarters — without replacing core systems.",
    challenges: [
      { title: "Legacy switches", desc: "Slow change cycles block new payment products." },
      { title: "Regulatory load", desc: "Constant RBI and NPCI updates across every rail." },
      { title: "Merchant demand", desc: "SMBs expect instant settlement and modern tooling." },
    ],
    outcomes: ["Launch UPI, BBPS and AePS from one stack", "White-label merchant dashboards", "Automated reconciliation across rails", "Audit-ready compliance reporting"],
    stats: [{ value: "6 wks", label: "To launch a new rail" }, { value: "40%", label: "Lower switch costs" }, { value: "99.99%", label: "Uptime SLA" }, { value: "24×7", label: "NOC monitoring" }],
    steps: [
      { title: "Discovery", desc: "We map your existing switch, core banking and compliance requirements." },
      { title: "Integration", desc: "Connect via ISO 8583, REST or SFTP without replacing your core." },
      { title: "Certification", desc: "We support NPCI and network certification end-to-end." },
      { title: "Go live", desc: "Phased rollout with real-time monitoring and dedicated support." },
    ],
    story: { quote: "DCvpayhelped us launch UPI merchant acquiring in under two months, something our legacy vendor quoted a year for.", author: "Head of Digital Banking", role: "Regional cooperative bank", metric: "8×", metricLabel: "faster launch" },
    faqs: [
      { q: "Do we need to replace our core banking system?", a: "No. DCvpaysits alongside your core and connects through standard interfaces." },
      { q: "Can you support NPCI certification?", a: "Yes. Our team has taken multiple banks through UPI, BBPS and AePS certification." },
      { q: "Is the platform available on-premise?", a: "We offer cloud, private cloud and hybrid deployment models for regulated entities." },
    ],
    products: ["payment-orchestration", "DCvnxt", "soundbox"],
  },
  {
    slug: "fintechs", title: "For Fintechs", icon: Rocket,
    short: "Ship payments, payouts and KYC through one API without negotiating with ten providers.",
    subtitle: "One integration for collections, payouts and verification — so your team can focus on product.",
    challenges: [
      { title: "Provider sprawl", desc: "Every new feature means a new vendor contract." },
      { title: "Downtime risk", desc: "Single-acquirer setups fail at peak traffic." },
      { title: "Onboarding friction", desc: "Slow KYC kills conversion." },
    ],
    outcomes: ["Smart routing with automatic failover", "30+ verification APIs", "Payouts on IMPS, NEFT, RTGS and UPI", "Sandbox to production in days"],
    stats: [{ value: "1 API", label: "For every rail" }, { value: "+8%", label: "Success-rate uplift" }, { value: "3 days", label: "Sandbox to live" }, { value: "30+", label: "Verification APIs" }],
    steps: [
      { title: "Sign up", desc: "Get sandbox keys instantly and explore the API." },
      { title: "Build", desc: "Use SDKs for web, Android and iOS with full test coverage." },
      { title: "Activate", desc: "Complete KYB and switch on the rails you need." },
      { title: "Scale", desc: "Add providers and methods without touching your code." },
    ],
    story: { quote: "We replaced five payment and KYC vendors with one integration, and our checkout success rate went up the same week.", author: "CTO", role: "Consumer lending startup", metric: "5→1", metricLabel: "vendors consolidated" },
    faqs: [
      { q: "How long does integration take?", a: "Most teams go live within one to two weeks using our SDKs and sandbox." },
      { q: "Can we bring our own acquirers?", a: "Yes. DCvpaycan orchestrate across your existing provider contracts." },
      { q: "Do you support webhooks?", a: "Every state change triggers signed webhooks with automatic retries." },
    ],
    products: ["payment-orchestration", "verification-suite", "DCvnxt"],
  },
  {
    slug: "merchants", title: "For Merchants", icon: Store,
    short: "Accept every payment method online and in-store with Soundbox and smart PoS.",
    subtitle: "From kirana stores to retail chains — accept every payment, everywhere, and get paid faster.",
    challenges: [
      { title: "Payment fraud", desc: "Fake screenshots and failed confirmations cost money." },
      { title: "Many devices", desc: "Separate machines for cards, QR and billing." },
      { title: "Slow settlement", desc: "Cash flow suffers while waiting for funds." },
    ],
    outcomes: ["Voice alerts in 12 languages", "Cards, tap, QR on one PoS", "T+0 settlement options", "Simple, transparent pricing"],
    stats: [{ value: "12", label: "Alert languages" }, { value: "T+0", label: "Settlement options" }, { value: "5+", label: "Ways to accept" }, { value: "0", label: "Screenshot fraud" }],
    steps: [
      { title: "Apply", desc: "Sign up online with simple digital KYC." },
      { title: "Receive device", desc: "Get your Soundbox or PoS delivered and activated." },
      { title: "Start accepting", desc: "Accept UPI, cards, tap and wallets from day one." },
      { title: "Get paid", desc: "Track sales in the app and receive fast settlements." },
    ],
    story: { quote: "The Soundbox stopped fake payment screenshots overnight. Now I hear every payment as it comes in.", author: "Store owner", role: "Kirana store, Pune", metric: "100%", metricLabel: "payments confirmed" },
    faqs: [
      { q: "Is there a monthly rental?", a: "We offer flexible plans, including rental and one-time purchase options." },
      { q: "Which languages does Soundbox support?", a: "Hindi, English, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada and more." },
      { q: "How fast is settlement?", a: "Standard T+1 settlement, with T+0 available for eligible merchants." },
    ],
    products: ["soundbox", "pos", "payment-orchestration"],
  },
  {
    slug: "nbfcs", title: "For NBFCs", icon: HandCoins,
    short: "Digital onboarding, video KYC, e-sign and automated disbursements and collections.",
    subtitle: "Run the full lending journey digitally — onboarding, agreements, disbursal and collections.",
    challenges: [
      { title: "Manual KYC", desc: "Paper-based checks slow down approvals." },
      { title: "Agreement delays", desc: "Physical stamping and signatures take days." },
      { title: "Collections", desc: "Mandate failures and manual follow-ups." },
    ],
    outcomes: ["Video KYC in under 3 minutes", "Aadhaar eSign and e-stamping", "Instant loan disbursals", "Automated repayment collection"],
    stats: [{ value: "<3 min", label: "Video KYC" }, { value: "<5 min", label: "Loan agreement" }, { value: "60%", label: "Fewer drop-offs" }, { value: "24×7", label: "Instant disbursal" }],
    steps: [
      { title: "Onboard", desc: "Digital KYC with PAN, Aadhaar and video verification." },
      { title: "Agree", desc: "Aadhaar eSign and e-stamping for loan agreements." },
      { title: "Disburse", desc: "Instant disbursal to verified bank accounts." },
      { title: "Collect", desc: "Automated repayments via mandates and UPI AutoPay." },
    ],
    story: { quote: "Our time from application to disbursal dropped from three days to under an hour, fully compliant.", author: "COO", role: "Mid-size NBFC", metric: "72×", metricLabel: "faster disbursal" },
    faqs: [
      { q: "Is your video KYC RBI-compliant?", a: "Yes, it follows the RBI KYC Master Direction, including geo-tagging and recording." },
      { q: "Do you support e-stamping in all states?", a: "We support e-stamping across 20+ states, and we keep adding more." },
      { q: "Can we automate collections?", a: "Yes, through eNACH, UPI AutoPay and payment links with smart reminders." },
    ],
    products: ["DCvverify", "DCvcontractx", "DCvnxt"],
  },
  {
    slug: "enterprises", title: "For Enterprises", icon: Building2,
    short: "Treasury, vendor payouts, escrow and reconciliation across all your banks.",
    subtitle: "Bring every bank account, payout and escrow into one controlled, auditable platform.",
    challenges: [
      { title: "Scattered banking", desc: "Dozens of portals and manual statements." },
      { title: "Payout errors", desc: "Bulk uploads without proper approvals." },
      { title: "Trust in deals", desc: "High-value transactions need neutral holding." },
    ],
    outcomes: ["Multi-bank real-time balances", "Maker-checker payout workflows", "Programmable escrow releases", "95% auto-reconciliation"],
    stats: [{ value: "25+", label: "Connected banks" }, { value: "95%", label: "Auto-reconciled" }, { value: "80%", label: "Less manual work" }, { value: "100%", label: "Audit trail" }],
    steps: [
      { title: "Connect", desc: "Link all your bank accounts through secure APIs." },
      { title: "Configure", desc: "Set approval rules, roles and payout limits." },
      { title: "Automate", desc: "Schedule payouts, escrow releases and reconciliation." },
      { title: "Report", desc: "Real-time dashboards and exportable audit reports." },
    ],
    story: { quote: "Finance closes the month in two days instead of ten. Reconciliation just happens now.", author: "Group CFO", role: "Logistics enterprise", metric: "5×", metricLabel: "faster month-end close" },
    faqs: [
      { q: "Which banks do you support?", a: "25+ major public, private and cooperative banks across India." },
      { q: "Can we integrate with our ERP?", a: "Yes. We integrate with SAP, Oracle, Tally, Zoho and custom ERPs." },
      { q: "How are payouts approved?", a: "Through configurable maker-checker workflows with role-based access." },
    ],
    products: ["DCvnxt", "DCvexcrow", "DCvcontractx"],
  },
  {
    slug: "education", title: "For Education", icon: GraduationCap,
    short: "Collect fees in India and from abroad, with automated reminders and reconciliation.",
    subtitle: "Make fee collection simple for parents, students and finance teams — at home and abroad.",
    challenges: [
      { title: "Fee follow-ups", desc: "Manual reminders and missed deadlines." },
      { title: "International students", desc: "Complex cross-border collections and FX." },
      { title: "Reconciliation", desc: "Matching payments to students by hand." },
    ],
    outcomes: ["Payment links and smart reminders", "100+ currencies via DCvPGX", "Student-wise auto reconciliation", "Instalment and EMI options"],
    stats: [{ value: "100+", label: "Currencies accepted" }, { value: "35%", label: "Faster fee collection" }, { value: "0", label: "Manual matching" }, { value: "EMI", label: "Instalment options" }],
    steps: [
      { title: "Set up", desc: "Upload student lists and fee structures." },
      { title: "Notify", desc: "Send payment links and reminders via SMS, email and WhatsApp." },
      { title: "Collect", desc: "Parents pay via UPI, cards, net banking or from abroad." },
      { title: "Reconcile", desc: "Each payment is matched to its student automatically." },
    ],
    story: { quote: "Fee collection used to take our office weeks. Now parents pay from a link and every receipt reconciles itself.", author: "Finance Director", role: "K-12 school group", metric: "35%", metricLabel: "faster collection" },
    faqs: [
      { q: "Can international students pay fees?", a: "Yes. DCvPGX accepts 100+ currencies with compliant FX and settlement." },
      { q: "Do you support instalments?", a: "Yes, through flexible instalment plans and EMI options with partner lenders." },
      { q: "Are receipts generated automatically?", a: "Every payment generates a branded receipt shared instantly with the payer." },
    ],
    products: ["DCvpgx", "payment-orchestration", "pos"],
  },
];

export const getSolution = (s?: string) => solutions.find((x) => x.slug === s);

export type InfoItem = { title: string; desc: string; badge?: string; meta?: string };
export type InfoPage = {
  eyebrow: string; title: string; subtitle: string;
  sections: { heading: string; body?: string; items?: InfoItem[]; list?: string[] }[];
  cta?: { label: string; to: string };
};

export const companyPages: Record<string, InfoPage> = {
  careers: {
    eyebrow: "Careers", title: "Join the team shaping ",
    subtitle: "We're a team of engineers, designers and payments experts building infrastructure used by millions every day.",
    sections: [
      { heading: "Why DCvpay", items: [
        { title: "Real impact", desc: "Your code moves money for millions of Indians." },
        { title: "Ownership", desc: "Small teams, big problems, full autonomy." },
        { title: "Growth", desc: "Learning budgets, mentorship and fast career growth." },
        { title: "Flexibility", desc: "Hybrid work from Bengaluru, Mumbai or Gurugram." },
      ] },
      { heading: "Open roles", body: "We don't have any open positions right now. But we're always happy to hear from talented people — send your CV to hello@DCvpay.tech and we'll reach out when something opens up." },
    ],
    cta: { label: "Email us your CV", to: "mailto:hello@DCvpay.tech" },
  },
  blog: {
    eyebrow: "Blog", title: "Insights from the payments frontier",
    subtitle: "Product updates, engineering deep-dives and regulatory explainers from the DCvpayteam.",
    sections: [{ heading: "Latest articles", items: [
      { title: "How AI routing lifted success rates by 8%", desc: "Inside the models that pick the best rail for every transaction.", meta: "6 min read", badge: "Engineering" },
      { title: "Understanding RBI's PA/PG guidelines in 2026", desc: "What payment aggregators need to know this year.", meta: "8 min read", badge: "Compliance" },
      { title: "Why Soundbox beat screenshot fraud", desc: "Lessons from deploying devices to 100,000 merchants.", meta: "5 min read", badge: "Product" },
      { title: "Building 99.99% uptime for UPI", desc: "Multi-region failover patterns that actually work.", meta: "10 min read", badge: "Engineering" },
      { title: "Escrow for marketplaces, explained", desc: "How programmable escrow builds buyer-seller trust.", meta: "4 min read", badge: "Guides" },
      { title: "Video KYC: best practices for NBFCs", desc: "Reducing drop-offs while staying fully compliant.", meta: "7 min read", badge: "Guides" },
    ] }],
  },
  press: {
    eyebrow: "Press", title: "DCvpayin the news",
    subtitle: "Announcements, media coverage and brand resources. For press enquiries, email press@DCvpay.tech.",
    sections: [
      { heading: "Announcements", items: [
        { title: "DCvpaycrosses 500M daily transactions", desc: "A milestone for India-scale payment infrastructure.", meta: "March 2026" },
        { title: "DCvpaylaunches DCvContractX", desc: "Contracts, e-sign and payments in one workflow.", meta: "January 2026" },
        { title: "Partnership with 10 new regional banks", desc: "Expanding UPI and BBPS access across Tier-3 India.", meta: "October 2025" },
      ] },
      { heading: "Media kit", body: "Logos, product screenshots and leadership photos are available on request from our communications team." },
    ],
    cta: { label: "Contact press team", to: "/contact" },
  },
  partners: {
    eyebrow: "Partners", title: "Grow with the DCvpaypartner network",
    subtitle: "We work with banks, technology platforms and resellers to bring modern payments to every business.",
    sections: [{ heading: "Partner programmes", items: [
      { title: "Banking partners", desc: "Sponsor banks and acquirers powering our rails." },
      { title: "Technology partners", desc: "ERPs, e-commerce platforms and SaaS integrations." },
      { title: "Reseller partners", desc: "Earn revenue by bringing DCvpayto merchants." },
      { title: "Hardware partners", desc: "Device makers for Soundbox and PoS terminals." },
    ] }, { heading: "Partner benefits", list: ["Revenue share on every referral", "Dedicated partner manager", "Co-marketing opportunities", "Priority technical support"] }],
    cta: { label: "Become a partner", to: "/contact" },
  },
};

export const resourcePages: Record<string, InfoPage> = {
  documentation: {
    eyebrow: "Documentation", title: "Guides for every integration",
    subtitle: "Step-by-step guides to accept payments, send payouts, verify customers and more.",
    sections: [{ heading: "Getting started", items: [
      { title: "Quickstart", desc: "Make your first test payment in 5 minutes." },
      { title: "Authentication", desc: "API keys, scopes and request signing." },
      { title: "Webhooks", desc: "Receive and verify real-time events." },
      { title: "Checkout", desc: "Hosted, embedded and mobile SDK checkouts." },
      { title: "Payouts", desc: "Send money via IMPS, NEFT, RTGS and UPI." },
      { title: "Go-live checklist", desc: "Everything you need before production." },
    ] }],
    cta: { label: "Open developer hub", to: "/developers" },
  },
  "api-reference": {
    eyebrow: "API Reference", title: "REST API reference",
    subtitle: "Predictable, resource-oriented REST APIs with JSON responses and standard HTTP codes.",
    sections: [{ heading: "Core endpoints", items: [
      { title: "POST /v1/payments", desc: "Create a payment on any rail.", badge: "Payments" },
      { title: "GET /v1/payments/:id", desc: "Retrieve payment status and details.", badge: "Payments" },
      { title: "POST /v1/payouts", desc: "Send a payout to a bank account or VPA.", badge: "Payouts" },
      { title: "POST /v1/refunds", desc: "Refund a payment fully or partially.", badge: "Refunds" },
      { title: "POST /v1/verify/pan", desc: "Verify a PAN and fetch the registered name.", badge: "Verification" },
      { title: "POST /v1/escrow/release", desc: "Release funds held in escrow.", badge: "Escrow" },
    ] }],
    cta: { label: "Get API keys", to: "/resources/sandbox" },
  },
  sandbox: {
    eyebrow: "Sandbox", title: "Build and test without risk",
    subtitle: "A full copy of production with test keys, mock banks and simulated failures.",
    sections: [{ heading: "What's included", list: ["Instant test API keys", "Mock UPI, card and net banking flows", "Simulated success, failure and timeout scenarios", "Webhook replay and event logs", "Test Soundbox and PoS devices on request"] },
      { heading: "Test credentials", items: [
        { title: "UPI success", desc: "success@DCvpay" },
        { title: "UPI failure", desc: "failure@DCvpay" },
        { title: "Test card", desc: "4111 1111 1111 1111 · any CVV · future expiry" },
      ] }],
    cta: { label: "Request sandbox access", to: "/contact" },
  },
  status: {
    eyebrow: "Status", title: "All systems operational",
    subtitle: "Live status of DCvpayservices. Updated every 60 seconds.",
    sections: [{ heading: "Services", items: [
      { title: "Payments API", desc: "99.99% uptime · last 90 days", badge: "Operational" },
      { title: "UPI", desc: "99.98% uptime · last 90 days", badge: "Operational" },
      { title: "Cards", desc: "99.99% uptime · last 90 days", badge: "Operational" },
      { title: "Payouts", desc: "99.97% uptime · last 90 days", badge: "Operational" },
      { title: "Verification APIs", desc: "99.99% uptime · last 90 days", badge: "Operational" },
      { title: "Dashboard", desc: "100% uptime · last 90 days", badge: "Operational" },
    ] }],
  },
  security: {
    eyebrow: "Security", title: "Security at every layer",
    subtitle: "Bank-grade security protects every rupee and every record that moves through DCvpay.",
    sections: [{ heading: "Our safeguards", items: [
      { title: "PCI-DSS Level 1", desc: "Highest level of card data security certification." },
      { title: "SOC 2 Type II", desc: "Independently audited security controls." },
      { title: "Encryption", desc: "AES-256 at rest and TLS 1.3 in transit." },
      { title: "Tokenisation", desc: "Sensitive data replaced with scoped tokens." },
      { title: "Data localisation", desc: "All payment data stored in India." },
      { title: "24×7 monitoring", desc: "Security operations centre and incident response." },
    ] }],
    cta: { label: "Report a vulnerability", to: "/contact" },
  },
  compliance: {
    eyebrow: "Compliance", title: "Compliant by design",
    subtitle: "We follow Indian regulations closely so you can launch with confidence.",
    sections: [{ heading: "Frameworks we follow", list: ["RBI Payment Aggregator & Gateway guidelines", "NPCI UPI and BBPS procedural guidelines", "RBI KYC Master Direction", "Digital Personal Data Protection Act, 2023", "RBI data localisation directive", "IT Act, 2000 for e-signatures"] }],
    cta: { label: "Talk to compliance", to: "/contact" },
  },
};

export const legalPages: Record<string, InfoPage> = {
  privacy: {
    eyebrow: "Legal", title: "Privacy Policy", subtitle: "Last updated: January 2026",
    sections: [
      { heading: "Information we collect", body: "We collect information you provide (such as name, email and business details), transaction data needed to process payments, and technical data such as device and usage information." },
      { heading: "How we use information", body: "To provide and improve our services, prevent fraud, meet legal and regulatory obligations, and communicate with you about your account." },
      { heading: "Data storage", body: "All payment data is stored in India in line with RBI data localisation requirements and protected with industry-standard encryption." },
      { heading: "Your rights", body: "You may request access, correction or deletion of your personal data under the Digital Personal Data Protection Act, 2023 by writing to privacy@DCvpay.tech." },
    ],
  },
  terms: {
    eyebrow: "Legal", title: "Terms of Service", subtitle: "Last updated: January 2026",
    sections: [
      { heading: "Acceptance", body: "By using DCvpayservices you agree to these terms and to our Privacy Policy." },
      { heading: "Use of services", body: "You agree to use DCvpayonly for lawful business purposes and in line with applicable RBI and NPCI regulations." },
      { heading: "Fees and settlement", body: "Fees and settlement timelines are as agreed in your commercial agreement with DCvpay." },
      { heading: "Liability", body: "DCvpay's liability is limited as described in your service agreement, to the extent permitted by law." },
    ],
  },
  "rbi-compliance": {
    eyebrow: "Legal", title: "RBI Compliance", subtitle: "Our commitment to regulatory compliance in India.",
    sections: [
      { heading: "Regulatory framework", body: "DCvpayoperates in line with the RBI guidelines on regulation of Payment Aggregators and Payment Gateways and associated directions." },
      { heading: "Grievance redressal", body: "Customers may raise complaints at grievance@DCvpay.tech. Complaints are acknowledged within 24 hours and resolved within 30 days." },
      { heading: "Nodal officer", body: "Nodal Officer, DCvpayTechnologies Pvt. Ltd., Prestige Tech Park, Bengaluru 560103 · nodal@DCvpay.tech" },
    ],
    cta: { label: "Raise a grievance", to: "/contact" },
  },
};