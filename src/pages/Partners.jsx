import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import CTASection from "../components/CtaSection";
import PARTNERS from "../data/partnersData";

export default function PartnersPage() {
  const [activeId, setActiveId] = useState(PARTNERS[0].id);
  const active = PARTNERS.find((p) => p.id === activeId);

  return (
    <>
      <main className="partners-page">
        {/* ---------- HERO ---------- */}
        <section className="ptn-hero">
          <div className="page-container ptn-hero__row">
            <div>
              <h1 className="ptn-hero__title">
                The platforms we build on.
              </h1>
            </div>
            <p className="ptn-hero__description">
              We partner with a deliberately small set of enterprise platforms —
              deep expertise on each, not a logo wall.
            </p>
          </div>
        </section>

        {/* ---------- ROSTER ---------- */}
        <section className="ptn-roster">
          <div className="page-container ptn-roster__grid">
            {/* LEFT: list */}
            <ul className="ptn-list">
              {PARTNERS.map((partner, i) => (
                <li key={partner.id}>
                  <button
                    className={`ptn-list__item ${activeId === partner.id ? "is-active" : ""}`}
                    onMouseEnter={() => setActiveId(partner.id)}
                    onFocus={() => setActiveId(partner.id)}
                    onClick={() => setActiveId(partner.id)}
                  >
                    <span className="ptn-list__index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="ptn-list__name">{partner.name}</span>
                    <span className="ptn-list__category">
                      {partner.category}
                    </span>
                  </button>

                  {/* mobile-only inline expansion, no right panel on small screens */}
                  {activeId === partner.id && (
                    <div className="ptn-list__mobile-detail">
                      <p>{partner.description}</p>
                      <Link to={partner.href}>View Partnership →</Link>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* RIGHT: sticky preview panel, desktop only */}
            <div className="ptn-preview">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  className="ptn-preview__card"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <div className="ptn-preview__logo">
                    <img src={active.logo} alt={active.name} />
                  </div>
                  <span className="ptn-preview__category">
                    {active.category}
                  </span>
                  <h2>{active.name}</h2>
                  <p>{active.description}</p>
                  <Link className="ptn-preview__link" to={active.href}>
                    View Partnership <span aria-hidden="true">→</span>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ---------- CLOSING STATEMENT ---------- */}
        <section className="ptn-statement">
          <div className="page-container">
            <p>
              Every partnership starts the same way — a platform strong enough
              to run mission-critical operations on, and an integration path
              that lets our AI layer sit on top of it without friction. That's
              the only kind of partner we add.
            </p>
          </div>
        </section>

        <CTASection />
      </main>
    </>
  );
}
