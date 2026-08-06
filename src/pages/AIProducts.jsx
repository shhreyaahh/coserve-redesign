import { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import CTASection from "../components/CtaSection";

const PRODUCTS = [
  {
    status: "Live · Multi-country",
    category: "Live",
    title: "Invoice Automation",
    description:
      "Automates invoice intake, validation, exception routing and reconciliation across countries to reduce manual effort.",
metric: "65% faster processing",
    href: "/ai-products",
  },
  {
    status: "Live · First in Region",
    category: "Live",
    title: "Agentforce HealthCloud",
    description:
      "Delivers patient-first healthcare workflows with AI-assisted case management, service orchestration and intelligent data access.",
metric: "First deployment in region",
    href: "/ai-products",
  },
  {
    status: "Live",
    category: "Live",
    title: "SmartProj",
    description:
      "Connects project delivery teams with intelligent planning, work tracking and enterprise reporting built for measurable execution.",
metric: "Real-time delivery visibility",
    href: "/ai-products",
  },
  {
    status: "Deployable",
    category: "Deployable",
    title: "Embeddable AI Agents",
    description:
      "Provides secure, modular AI agents that can be embedded into enterprise workflows, customer journeys and internal operations.",
metric: "Deploy in days, not months",
    href: "/ai-products",
  },
  {
    status: "Framework · Fixed-price",
    category: "Framework",
    title: "ERP AI Readiness Audit",
    description:
      "Assesses platform readiness, automation opportunities and transformation priorities through a structured fixed-price advisory framework.",
metric: "Fixed-price, fixed-timeline",
    href: "/ai-products",
  },
];

const TABS = ["All", "Live", "Deployable", "Framework"];

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

export default function AIProductsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab);

  const featured = PRODUCTS.slice(0, 2);
  const rest = filtered.filter(
    (p) => !featured.includes(p) || activeTab !== "All",
  );

  return (
    <>
      <main className="ai-products-page">
        {/* ---------- HERO ---------- */}
        <section className="aip-hero">
          <div className="page-container aip-hero__row">
            <div className="aip-hero__content">
              <span className="aip-hero__eyebrow">AI &amp; Products</span>
              <h1 className="aip-hero__title">
                AI Products Built for
                <br />
                Enterprise Transformation
              </h1>
              <p className="aip-hero__description">
                From invoice automation to embeddable agents — explore the AI
                products Coserve has shipped into live production environments
                across industries.
              </p>
            </div>

            <div className="aip-hero__stats">
              <div className="aip-hero__stat">
                <strong>5</strong>
                <span>Products in market</span>
              </div>
              <div className="aip-hero__stat">
                <strong>3</strong>
                <span>Live in production</span>
              </div>
              <div className="aip-hero__stat">
                <strong>Multi</strong>
                <span>Country deployments</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- CATEGORY TABS ---------- */}
        <section className="aip-tabs-section">
          <div className="page-container">
            <div className="aip-tabs" role="tablist">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  className={`aip-tab ${activeTab === tab ? "is-active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        <MotionConfig reducedMotion="user">
          {/* ---------- FEATURED (only shown on "All") ---------- */}
          {activeTab === "All" && (
            <section className="aip-featured">
              <div className="page-container">
                <div className="aip-featured__grid">
                  {featured.map((product, i) => (
                    <motion.a
                      href={product.href}
                      key={product.title}
                      className={`aip-featured__card ${
                        i === 0 ? "is-primary" : ""
                      }`}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                        delay: i * 0.08,
                      }}
                    >
                      <span className="aip-featured__badge">
                        {product.status}
                      </span>
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>
                      <div className="aip-featured__footer">
                        <span className="aip-featured__metric">
                          {product.metric}
                        </span>
                        <span className="aip-featured__arrow">
                          <ArrowIcon />
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ---------- GRID ---------- */}
          <section className="aip-grid-section">
            <div className="page-container">
              <h2 className="aip-grid-section__title">
                {activeTab === "All" ? "All Products" : `${activeTab} Products`}
              </h2>

              <div className="aip-grid">
                {(activeTab === "All" ? PRODUCTS.slice(2) : filtered).map(
                  (product, index) => (
                    <motion.article
                      className="aip-card"
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
                      <span className="aip-card__badge">{product.status}</span>
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>
                      <a className="aip-card__link" href={product.href}>
                        <span>Learn More</span>
                        <span className="aip-card__arrow" aria-hidden="true">
                          <ArrowIcon />
                        </span>
                      </a>
                    </motion.article>
                  ),
                )}
              </div>
            </div>
          </section>
        </MotionConfig>

        {/* ---------- PROCESS ---------- */}
        <section className="aip-process">
          <div className="page-container">
            <h2 className="aip-process__title">How Deployment Works</h2>
            <div className="aip-process__grid">
              <div className="aip-step">
                <span className="aip-step__num">01</span>
                <h3>Discover</h3>
                <p>
                  We assess your current systems and map where AI creates
                  measurable impact.
                </p>
              </div>
              <div className="aip-step">
                <span className="aip-step__num">02</span>
                <h3>Deploy</h3>
                <p>
                  Products are configured and embedded into your existing
                  workflows — not bolted on.
                </p>
              </div>
              <div className="aip-step">
                <span className="aip-step__num">03</span>
                <h3>Scale</h3>
                <p>
                  We monitor, iterate, and expand usage as adoption and impact
                  grow.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
    </>
  );
}
