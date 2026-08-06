/**
 * Partner data. Shared between the homepage "Technology Ecosystem" orbit
 * and the standalone /partners directory page. `category` is only
 * consumed by the directory page's filter tabs — the homepage orbit
 * ignores it.
 */
const PARTNERS = [
  {
    id: "salesforce",
    name: "Salesforce",
    logo: "/assets/logos/placeholder-salesforce.svg",
    category: "CRM",
    description:
      "CRM implementation and customization for connected customer experiences.",
    href: "/partners/salesforce",
  },
  {
    id: "infor",
    name: "Infor",
    logo: "/assets/logos/placeholder-infor.svg",
    category: "ERP",
    description:
      "Global ERP rollouts across Baan, LN, M3 and WMS environments.",
    href: "/partners/salesforce",
  },
  {
    id: "rootstock",
    name: "Rootstock",
    logo: "/assets/logos/placeholder-rootstock.svg",
    category: "ERP",
    description:
      "Cloud ERP built on Salesforce for modern manufacturing operations.",
    href: "/partners/salesforce",
  },
  {
    id: "compliance-quest",
    name: "Compliance Quest",
    logo: "/assets/logos/placeholder-compliancequest.svg",
    category: "Compliance",
    description: "Quality and compliance management for regulated industries.",
    href: "/partners/salesforce",
  },
  {
    id: "supervity",
    name: "Supervity",
    logo: "/assets/logos/placeholder-supervity.svg",
    category: "Automation",
    description: "AI-driven automation that accelerates enterprise workflows.",
    href: "/partners/salesforce",
  },
];

export default PARTNERS;
