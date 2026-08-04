import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import PARTNERS from "../data/partnersData";
import "../styles/globals.css";

/** Matches the breakpoints used elsewhere on the homepage. */
function useLayoutMode() {
  const [mode, setMode] = useState("desktop");

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) setMode("mobile");
      else if (w < 1024) setMode("tablet");
      else setMode("desktop");
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return mode;
}

/** Even orbit placement around the center, starting at 12 o'clock. */
function getNodePosition(index, total, radius) {
  const angle = -90 + index * (360 / total);
  const rad = (angle * Math.PI) / 180;
  return {
    x: 50 + radius * Math.cos(rad),
    y: 50 + radius * Math.sin(rad),
  };
}

// Entrance is intentionally near-instant now — a fast, single beat rather
// than a staggered reveal that used to take the better part of a second
// to finish settling.
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.025, delayChildren: 0 } },
};

const centerVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.18, ease: "easeOut" },
  },
};

const nodeVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.18, ease: "easeOut" },
  },
};

function CenterNode({ reduceMotion }) {
  return (
    <div className="ecosystem-node-anchor" style={{ left: "50%", top: "50%" }}>
      <motion.div
        className="ecosystem-node ecosystem-node--center"
        variants={centerVariants}
        transition={reduceMotion ? { duration: 0 } : undefined}
      >
        <div className="ecosystem-node__glow" aria-hidden="true" />
        <span className="ecosystem-node__label">Coserve</span>
      </motion.div>
    </div>
  );
}

/**
 * PartnerNode
 * A full card now, not a small hover-to-reveal pill: logo on top,
 * description always visible in the middle, "Learn More" pinned to the
 * bottom. Hover keeps the lift/scale displacement — that part was fine
 * — it just no longer reveals anything that wasn't already showing.
 */
function PartnerNode({
  partner,
  position,
  index,
  isHovered,
  onHover,
  onLeave,
  reduceMotion,
}) {
  return (
    <div
      className="ecosystem-node-anchor ecosystem-node-anchor--partner"
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
    >
      <motion.a
        href={partner.href}
        className={`ecosystem-node ecosystem-node--partner${isHovered ? " is-hovered" : ""}`}
        style={{ "--float-delay": `${index * 0.35}s` }}
        variants={nodeVariants}
        transition={reduceMotion ? { duration: 0 } : undefined}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onFocus={onHover}
        onBlur={onLeave}
      >
        {/* .ecosystem-node__float carries the continuous float keyframe so it
            composes independently of the entrance/hover transform above;
            the CSS itself turns the keyframe off under prefers-reduced-motion. */}
        <div className="ecosystem-node__float">
          <img
            className="ecosystem-node__logo"
            src={partner.logo}
            alt={partner.name}
            loading="lazy"
          />
          {/*<span className="ecosystem-node__name">{partner.name}</span>*/}
          <p className="ecosystem-node__description">{partner.description}</p>
          <span className="ecosystem-node__link">
            Learn More <span aria-hidden="true">→</span>
          </span>
        </div>
      </motion.a>
    </div>
  );
}

function ConnectionLines({ partners, radius, hoveredId, reduceMotion }) {
  return (
    <svg
      className="ecosystem-lines"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {partners.map((partner, index) => {
        const { x, y } = getNodePosition(index, partners.length, radius);
        return (
          <motion.line
            key={partner.id}
            x1="50"
            y1="50"
            x2={x}
            y2={y}
            className={`ecosystem-line${hoveredId === partner.id ? " is-active" : ""}`}
            variants={nodeVariants}
            initial={{ pathLength: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
          />
        );
      })}
    </svg>
  );
}

/**
 * EcosystemDiagram
 * Desktop / tablet: Coserve at the center, five partner cards on an
 * orbit, each connected only to the center — Coserve as the integration
 * hub. Cards are bigger now (to hold always-visible description + link),
 * so the diagram itself is bigger too, to keep them from crowding.
 */
function EcosystemDiagram({ partners, mode, reduceMotion }) {
  const [hoveredId, setHoveredId] = useState(null);
  const radius = mode === "tablet" ? 36 : 40;

  const diagramInitial = reduceMotion ? "visible" : "hidden";
  const fastTransition = { duration: 0 };

  return (
    <motion.div
      className={`ecosystem-diagram ecosystem-diagram--${mode}`}
      variants={containerVariants}
      initial={diagramInitial}
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={reduceMotion ? fastTransition : undefined}
    >
      <ConnectionLines
        partners={partners}
        radius={radius}
        hoveredId={hoveredId}
        reduceMotion={reduceMotion}
      />
      <CenterNode reduceMotion={reduceMotion} />
      {partners.map((partner, index) => (
        <PartnerNode
          key={partner.id}
          partner={partner}
          index={index}
          position={getNodePosition(index, partners.length, radius)}
          isHovered={hoveredId === partner.id}
          onHover={() => setHoveredId(partner.id)}
          onLeave={() => setHoveredId(null)}
          reduceMotion={reduceMotion}
        />
      ))}
    </motion.div>
  );
}

/**
 * EcosystemList
 * Mobile fallback: the orbit is replaced entirely by a vertical flow —
 * Coserve at the top, each partner card beneath it connected by a
 * simple line.
 */
function EcosystemList({ partners }) {
  return (
    <div className="ecosystem-list">
      <div className="ecosystem-list__item ecosystem-list__item--center">
        <span className="ecosystem-list__name">Coserve</span>
      </div>

      {partners.map((partner) => (
        <React.Fragment key={partner.id}>
          <div className="ecosystem-list__connector" aria-hidden="true" />
          <a href={partner.href} className="ecosystem-list__item">
            <img
              className="ecosystem-list__logo"
              src={partner.logo}
              alt={partner.name}
              loading="lazy"
            />
            <div className="ecosystem-list__text">
              <span className="ecosystem-list__name">{partner.name}</span>
              <p className="ecosystem-list__description">
                {partner.description}
              </p>
              <span className="ecosystem-list__link">
                Learn More <span aria-hidden="true">→</span>
              </span>
            </div>
          </a>
        </React.Fragment>
      ))}
    </div>
  );
}

/**
 * PartnersSection ("Technology Ecosystem")
 * Coserve positioned as the hub of a trusted enterprise technology
 * ecosystem, not a traditional partner logo grid.
 */
export default function PartnersSection({ partners = PARTNERS }) {
  const mode = useLayoutMode();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="partners" aria-labelledby="partners-heading">
      <div className="page-container partners__container">
        <div className="partners__header">
          <span className="partners__eyebrow">Partners</span>
          <h2 id="partners-heading" className="partners__heading">
            Our Technology Ecosystem
          </h2>
          <p className="partners__subtext">
            Powering AI-first enterprise transformation through strategic
            partnerships with leading enterprise platforms.
          </p>
        </div>

        {mode === "mobile" ? (
          <EcosystemList partners={partners} />
        ) : (
          <EcosystemDiagram
            partners={partners}
            mode={mode}
            reduceMotion={prefersReducedMotion}
          />
        )}

        <a href="/partners" className="partners__explore">
          Explore All Partners <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
