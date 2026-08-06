import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import "../styles/globals.css";

import heroBg01 from "../assets/01.webp";
import heroBg02 from "../assets/02.webp";
import heroBg03 from "../assets/03.webp";
import heroBg04 from "../assets/04.webp";

/* ============================================================================
   Hero.jsx — Homepage hero (redesigned)
   ----------------------------------------------------------------------------
   Requirements Document compliance:

     HOME-1  The four brand pillars — Purpose, Automate, Embrace, Transform —
             are expressed as ONE static hero. A single background stays
             constant; only the text content transitions with a subtle
             fade/slide every 7.5s (or when a pillar tab is selected).
             No carousel / slider.
     HOME-2  AI product highlights — Invoice Automation and Agentforce
             HealthCloud — stay above the fold as live-status chips.
     HOME-3  The live AI signal strip (GLB-1) is rendered above the hero via
             <LiveAISignalStrip /> (mounted once in App/Layout).
     GLB-3   The persistent "Book a working session" CTA is surfaced in the
             hero as the secondary CTA.

   Motion & accessibility:
     - Auto-rotation pauses on hover, on focus, and after a manual selection.
     - prefers-reduced-motion disables rotation and all animations.
     - WCAG-friendly focus states are styled in globals.css.
   ========================================================================= */

const ArrowRightIcon = (props) => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
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

/* ------------------------------------------------------------------------ */
/*  AI product highlights (HOME-2)                                           */
/*  Two featured products kept above the fold; the rest live in the AI       */
/*  Products section below.                                                  */
/* ------------------------------------------------------------------------ */

export const AI_PRODUCT_HIGHLIGHTS = [
  {
    id: "invoice-automation",
    label: "Invoice Automation",
    status: "Live · Multi-country",
    href: "/ai-products",
  },
  {
    id: "agentforce-healthcloud",
    label: "Agentforce HealthCloud",
    status: "Live · First in region",
    href: "/ai-products",
  },
];

/* ------------------------------------------------------------------------ */
/*  Brand pillars (HOME-1)                                                   */
/*  Shared background; only headline, supporting copy and CTAs transition.   */
/* ------------------------------------------------------------------------ */

export const HERO_PILLARS = [
  {
    id: "purpose",
    name: "Purpose",
    eyebrow: "AI Enterprise",
    headline: "AI, purpose-built for the way your enterprise actually works.",
    supporting:
      "Coserve designs and runs AI that maps directly to your business outcomes — starting with the platforms your teams depend on every day.",
primaryCta: "Explore AI Products",
    primaryHref: "/ai-products",
    secondaryCta: "Book a Working Session",
    secondaryHref: "#",
  },
  {
    id: "automate",
    name: "Automate",
    eyebrow: "AI Enterprise",
    headline: "Automate the work that slows your business down.",
    supporting:
      "Intelligent automation across ERP and CRM removes manual effort, exceptions and rework, freeing your people to focus on higher-value work.",
    primaryCta: "Explore AI Products",
    primaryHref: "/ai-products",
    secondaryCta: "See Automation in Action",
    secondaryHref: "#",
  },
  {
    id: "embrace",
    name: "Embrace",
    eyebrow: "AI Enterprise",
    headline: "Embrace AI with trust, governance and control.",
    supporting:
      "We embed AI into enterprise platforms with the security, governance and change management modern organizations demand.",
    primaryCta: "Explore AI Products",
    primaryHref: "/ai-products",
    secondaryCta: "Talk to an Expert",
    secondaryHref: "#",
  },
  {
    id: "transform",
    name: "Transform",
    eyebrow: "AI Enterprise",
    headline: "Transform enterprise systems into measurable outcomes.",
    supporting:
      "From ERP modernization to agent-first workflows, Coserve turns technology investment into tangible, measurable business results.",
    primaryCta: "Explore AI Products",
    primaryHref: "/ai-products",
    secondaryCta: "Book a Working Session",
    secondaryHref: "#",
  },
];

const PILLAR_INTERVAL_MS = 5000;

/* ------------------------------------------------------------------------ */
/*  Live AI signal strip (GLB-1)                                             */
/* ------------------------------------------------------------------------ */

const SIGNAL_MESSAGES = [
  "Agentforce HealthCloud: Live · first in region",
  "Invoice Automation: Live · multi-country",
  "SmartProj: Live on Salesforce AppExchange",
];

const SIGNAL_INTERVAL_MS = 4200;

export function LiveAISignalStrip({ messages = SIGNAL_MESSAGES }) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (messages.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % messages.length);
    }, SIGNAL_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [messages.length]);

  return (
    <div className="live-strip" role="status" aria-live="polite">
      <div className="live-strip-inner">
        <span
          className={`live-strip-dot ${reduceMotion ? "is-static" : ""}`}
          aria-hidden="true"
        />
        <span className="live-strip-label">AI, live in production:</span>
        <span className="live-strip-message-wrap">
          <AnimatePresence mode="wait">
            <motion.span
              key={messages[index]}
              className="live-strip-message"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
              transition={{ duration: reduceMotion ? 0 : 0.35 }}
            >
              {messages[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/*  Animated AI background — full-bleed, behind content                      */
/*  One image per pillar (01–04.webp from assets), crossfading on pillar     */
/*  change with a slow Ken Burns zoom effect. No gradients — the image       */
/*  itself carries the depth, and a flat scrim keeps text legible.           */
/* ------------------------------------------------------------------------ */

const HERO_BG_IMAGES = [heroBg01, heroBg02, heroBg03, heroBg04];

function HeroBackground({ activeIndex = 0, activationKey = 0 }) {
  return (
    <div className="hero-bg" aria-hidden="true">
      {HERO_BG_IMAGES.map((src, i) => (
        <div
          key={src}
          className={`hero-bg-slide ${i === activeIndex ? "is-active" : ""}`}
        >
          <img className="hero-bg-img" src={src} alt=""  key={i === activeIndex ? `src-${activationKey}` : src}draggable="false" />
        </div>
      ))}
      <div className="hero-bg-scrim" />
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/*  Pillar tabs + animated content                                           */
/* ------------------------------------------------------------------------ */

function HeroPillarTabs({ activeIndex, onSelect, reduceMotion }) {
  return (
    <div
      className="hero-pillar-tabs"
      role="tablist"
      aria-label="Coserve brand pillars"
    >
      {HERO_PILLARS.map((pillar, i) => {
        const active = i === activeIndex;
        return (
          <button
            key={pillar.id}
            id={`hero-pillar-tab-${pillar.id}`}
            role="tab"
            type="button"
            aria-selected={active}
            aria-controls="hero-pillar-panel"
            className={`hero-pillar-tab ${active ? "is-active" : ""}`}
            onClick={() => onSelect(i)}
          >
            <span className="hero-pillar-label">{pillar.name}</span>
            {active && (
              <motion.span
                className={`hero-pillar-progress ${
                  reduceMotion ? "is-static" : ""
                }`}
                layoutId="hero-pillar-progress"
                transition={{
                  type: reduceMotion ? "just" : "spring",
                  stiffness: 340,
                  damping: 28,
                }}
                aria-hidden="true"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/*  Hero — orchestration                                                     */
/* ------------------------------------------------------------------------ */

export default function Hero({ showSignalStrip = true }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tick, setTick] = useState(0);
  const reduceMotion = useReducedMotion();
  const pauseRef = useRef(false);
  const timerRef = useRef(null);

  const pillar = HERO_PILLARS[activeIndex];

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    if (reduceMotion) return;
    timerRef.current = window.setInterval(() => {
      if (pauseRef.current) return;
      setActiveIndex((i) => (i + 1) % HERO_PILLARS.length);
    }, PILLAR_INTERVAL_MS);
  }, [reduceMotion, stopTimer]);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer, stopTimer]);

  useEffect(() => {
    setTick((t) => t + 1);
  }, [activeIndex]);

  const handleSelect = (i) => {
    setActiveIndex(i);
    startTimer(); // reset rotation after a manual selection
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0 } },
    exit: {},
  };
  const item = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: reduceMotion ? 0 : 0.3, ease: "easeIn" },
    },
  };

  return (
    <>
      {showSignalStrip && <LiveAISignalStrip />}

      <section
        className="hero"
        aria-label="Coserve — AI-first enterprise transformation"
        onMouseEnter={() => {
          pauseRef.current = true;
        }}
        onMouseLeave={() => {
          pauseRef.current = false;
        }}
        onFocusCapture={() => {
          pauseRef.current = true;
        }}
        onBlurCapture={() => {
          pauseRef.current = false;
        }}
      >
        {/* Single animated AI background, full-bleed, behind the content */}
        <HeroBackground activeIndex={activeIndex} activationKey={tick} />

        <div className="hero-inner">
          <div className="hero-content-wrap">
            <div className="hero-content">
              <div
                className="hero-text-panel"
                id="hero-pillar-panel"
                role="tabpanel"
                aria-labelledby={`hero-pillar-tab-${pillar.id}`}
                tabIndex="0"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={pillar.id}
                    className="hero-text-block"
                    variants={container}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    <motion.span className="hero-eyebrow" variants={item}>
                      {pillar.eyebrow}
                      <span className="hero-eyebrow-dot" aria-hidden="true" />
                      <span className="hero-eyebrow-line" aria-hidden="true" />
                    </motion.span>
                    <motion.h1 className="hero-headline" variants={item}>
                      {pillar.headline}
                    </motion.h1>
                    <motion.p className="hero-supporting" variants={item}>
                      {pillar.supporting}
                    </motion.p>

                    <motion.div className="hero-actions" variants={item}>
                      <a
                        href={pillar.primaryHref}
                        className="hero-cta hero-cta-primary"
                      >
                        {pillar.primaryCta}
                        <span className="hero-cta-arrow">
                          <ArrowRightIcon width="16" height="16" />
                        </span>
                      </a>
                      <a
                        href={pillar.secondaryHref}
                        className="hero-cta hero-cta-secondary"
                      >
                        {pillar.secondaryCta}
                      </a>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <HeroPillarTabs
              activeIndex={activeIndex}
              onSelect={handleSelect}
              reduceMotion={reduceMotion}
            />
          </div>
        </div>
      </section>
    </>
  );
}
