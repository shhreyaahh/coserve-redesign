/**
 * Insight entries for the homepage "Perspectives & Insights" preview.
 * `featured` marks the single large editorial card; everything else
 * renders in the Latest Insights reading list, in array order. Swap in
 * real articles/images/links here without touching component code.
 */
const INSIGHTS = [
  {
    id: "ai-erp-convergence",
    category: "AI",
    title: "Where AI and ERP Are Converging in 2026",
    summary:
      "How generative and agentic AI are reshaping enterprise resource planning, from anomaly detection to autonomous workflow orchestration.",
    href: "/insights/ai-erp-convergence",
    image: "/assets/insights/placeholder-ai-erp.jpg",
    featured: true,
  },
  {
    id: "cloud-migration-checklist",
    category: "ERP",
    title: "A Practical Checklist for Cloud ERP Migration",
    href: "/insights/cloud-migration-checklist",
    featured: false,
  },
  {
    id: "manufacturing-case-study",
    category: "Case Study",
    title: "How a Global Manufacturer Cut Downtime by 40%",
    href: "/insights/manufacturing-case-study",
    featured: false,
  },
  {
    id: "compliance-whitepaper",
    category: "Whitepaper",
    title: "Compliance Automation for Regulated Industries",
    href: "/insights/compliance-whitepaper",
    featured: false,
  },
  {
    id: "ai-adoption-webinar",
    category: "Webinar",
    title: "Accelerating AI Adoption Without Disrupting Operations",
    href: "/insights/ai-adoption-webinar",
    featured: false,
  },
];

export default INSIGHTS;