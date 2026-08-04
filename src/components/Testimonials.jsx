import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "../styles/globals.css";
import TESTIMONIALS from "../data/testimonials";

/** Tailwind-free breakpoints matching the section's CSS media queries. */
function useVisibleCount() {
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) setVisible(1);
      else if (w < 1024) setVisible(2);
      else setVisible(3);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return visible;
}

function TestimonialCard({ testimonial, isActive, isVisible }) {
  return (
    <div
      className={`testimonial-card${isActive ? " testimonial-card--active" : ""}`}
      aria-hidden={!isVisible}
    >
      <div className="testimonial-card__top">
        <img
          className="testimonial-card__logo"
          src={testimonial.logo}
          alt={testimonial.name}
          loading="lazy"
        />
        <div className="testimonial-card__company">
          <span className="testimonial-card__name">{testimonial.name}</span>
          <span className="testimonial-card__industry">
            {testimonial.industry}
          </span>
        </div>
      </div>

      <p className="testimonial-card__quote">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="testimonial-card__footer">
        <span className="testimonial-card__metric">{testimonial.metric}</span>
        <a
          className="testimonial-card__link"
          href={testimonial.caseStudyUrl}
          tabIndex={isVisible ? 0 : -1}
        >
          Read Case Study <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}

/**
 * TestimonialsCarousel
 * Center-active, peek-neighbor carousel modernizing Coserve's existing
 * testimonial pattern. Loops infinitely via a tripled data set: the visible
 * window always sits in the middle copy, and once a slide animation finishes
 * past that copy's bounds, the index snaps back into range with the
 * transition disabled for a single frame so the jump is invisible.
 */
export default function TestimonialsCarousel({ testimonials = TESTIMONIALS }) {
  const length = testimonials.length;
  const extended = [...testimonials, ...testimonials, ...testimonials];
  const visible = useVisibleCount();
  const prefersReducedMotion = useReducedMotion();

  const [index, setIndex] = useState(length);
  const [smooth, setSmooth] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef(null);

  const centerOffset = Math.floor((visible - 1) / 2);

  const goNext = useCallback(() => {
    setSmooth(true);
    setIndex((i) => i + 1);
  }, []);

  const goPrev = useCallback(() => {
    setSmooth(true);
    setIndex((i) => i - 1);
  }, []);

  // Autoplay: advance every 7s, paused on hover / keyboard focus.
  useEffect(() => {
    if (isPaused) return undefined;
    autoplayRef.current = setInterval(goNext, 7000);
    return () => clearInterval(autoplayRef.current);
  }, [isPaused, goNext]);

  // Snap back into the middle copy once a slide past its edge finishes,
  // with the transition disabled so the reset is invisible.
  const handleAnimationComplete = () => {
    if (index >= length * 2) {
      setSmooth(false);
      setIndex((i) => i - length);
    } else if (index < length) {
      setSmooth(false);
      setIndex((i) => i + length);
    }
  };

  // Re-enable the transition on the next frame after an instant snap.
  useEffect(() => {
    if (!smooth) {
      const raf = requestAnimationFrame(() => setSmooth(true));
      return () => cancelAnimationFrame(raf);
    }
    return undefined;
  }, [smooth]);

  const trackWidthPercent = (extended.length / visible) * 100;
  const slidePercent = 100 / extended.length;
  const translateX = -(index * slidePercent);
  const activeAbsoluteIndex = index + centerOffset;
  const windowEnd = index + visible - 1;

  return (
    <section
      className="testimonials"
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="page-container">
      <div className="testimonials__header">
        <h2 id="testimonials-heading" className="testimonials__heading">
          Customer Success Stories
        </h2>
        <p className="testimonials__subtext">
          See how organizations across industries transformed operations,
          modernized enterprise platforms, and achieved measurable business
          outcomes with Coserve.
        </p>
      </div>

      <div className="testimonials__viewport">
        <motion.div
          className="testimonials__track"
          style={{ width: `${trackWidthPercent}%` }}
          animate={{ x: `${translateX}%` }}
          transition={{
            duration: smooth && !prefersReducedMotion ? 0.6 : 0,
            ease: [0.65, 0, 0.35, 1],
          }}
          onAnimationComplete={handleAnimationComplete}
        >
          {extended.map((testimonial, i) => (
            <div
              className="testimonials__slot"
              style={{ width: `${slidePercent}%` }}
              key={`${testimonial.id}-${i}`}
            >
              <TestimonialCard
                testimonial={testimonial}
                isActive={i === activeAbsoluteIndex}
                isVisible={i >= index && i <= windowEnd}
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="testimonials__controls">
        <button
          type="button"
          className="testimonials__arrow"
          onClick={goPrev}
          aria-label="Previous testimonial"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          className="testimonials__arrow"
          onClick={goNext}
          aria-label="Next testimonial"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
      </div>
    </section>
  );
}
