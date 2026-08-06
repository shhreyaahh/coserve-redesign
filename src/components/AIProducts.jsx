import { MotionConfig, motion } from "framer-motion";

const products = [
  {
    status: "Live · Multi-country",
    title: "Invoice Automation",
    description:
      "Automates invoice intake, validation, exception routing and reconciliation across countries to reduce manual effort.",
    href: "/ai-products/invoice-automation/",
  },
  {
    status: "Live · First in Region",
    title: "Agentforce HealthCloud",
    description:
      "Delivers patient-first healthcare workflows with AI-assisted case management, service orchestration and intelligent data access.",
    href: "/ai-products/agentforce-healthcloud/",
  },
  {
    status: "Live",
    title: "SmartProj",
    description:
      "Connects project delivery teams with intelligent planning, work tracking and enterprise reporting built for measurable execution.",
    href: "/ai-products/smartproj/",
  },
  {
    status: "Deployable",
    title: "Embeddable AI Agents",
    description:
      "Provides secure, modular AI agents that can be embedded into enterprise workflows, customer journeys and internal operations.",
    href: "/ai-products/embeddable-ai-agents/",
  },
  {
    status: "Framework · Fixed-price",
    title: "ERP AI Readiness Audit",
    description:
      "Assesses platform readiness, automation opportunities and transformation priorities through a structured fixed-price advisory framework.",
    href: "/ai-products/erp-ai-readiness-audit/",
  },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <line
      x1="3.5"
      y1="10"
      x2="15.5"
      y2="10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M10.5 5L15.5 10L10.5 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function AIProducts() {
  return (
    <section className="ai-products-section">
      <div className="page-container ai-products-container">
        <div className="ai-products-header">
          <h2>
            <span>AI Products </span>
            Built for Enterprise Transformation</h2>
          <p className="ai-products-supporting">
            Discover AI solutions that automate workflows, modernize enterprise
            platforms, and deliver measurable business outcomes.
          </p>
        </div>

        <MotionConfig reducedMotion="user">
          <div className="ai-products-grid">
            {products.map((product, index) => (
<motion.article
                className="ai-product-card"
                key={product.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: (index % 3) * 0.06,
                }}
              >
                <a
                  href="/ai-products"
                  className="ai-product-card__link"
                  aria-label={`View ${product.title}`}
                >
                  <div className="ai-product-badge-row">
                    <span className="ai-product-badge">{product.status}</span>
                  </div>

                  <div className="ai-product-title-wrap">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                  </div>

                  <span className="ai-product-link">
                    <span>Learn More</span>
                    <span className="ai-product-arrow" aria-hidden="true">
                      <ArrowIcon />
                    </span>
                  </span>
                </a>
              </motion.article>
            ))}
          </div>
        </MotionConfig>
      </div>
    </section>
  );
}
