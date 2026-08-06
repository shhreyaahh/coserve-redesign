import React from "react";
import INDUSTRIES from "../data/industriesData";
import "../styles/globals.css";

/**
 * IndustryCard
 * Image-led editorial card: a large full-width industry image (top ~62–65%
 * of the card) melts into the white text area through a soft white gradient
 * fade. Title carries the blue→teal gradient, description stays dark grey,
 * and the Learn More link grows an underline + slides its arrow on hover.
 */
function IndustryCard({ industry }) {
  // TEMP (design review): all six cards point to the single Manufacturing
  // page. Revert to `href={industry.href}` to restore per-industry routing.
  return (
    <a href="/industries/manufacturing" className="industry-card">
      {/* Image band — full width, edge-to-edge, object-fit cover. */}
      <div className="industry-card__media">
        <img
          src={industry.image}
          alt={industry.title}
          className="industry-card__image"
          style={{ objectPosition: industry.position }}
          loading="lazy"
        />
        <span className="industry-card__fade" aria-hidden="true" />
      </div>

      <div className="industry-card__body">
        <h3 className="industry-card__title">{industry.title}</h3>
        <p className="industry-card__description">{industry.description}</p>
        <span className="industry-card__link">
          Learn More{" "}
          <span className="industry-card__arrow" aria-hidden="true">
            →
          </span>
        </span>
      </div>
    </a>
  );
}

/**
 * IndustryGrid
 * Uniform responsive 3×2 grid — all six cards share equal dimensions.
 * Tablet: 2 columns. Mobile: single column (handled in CSS).
 */
export function IndustryGrid({ industries }) {
  return (
    <div className="industry-grid">
      {industries.map((industry) => (
        <IndustryCard key={industry.id} industry={industry} />
      ))}
    </div>
  );
}

/**
 * IndustriesSection
 * Homepage preview of the six industry verticals, wrapped in one large
 * white rectangular panel on the existing dark section backdrop. Links
 * out to the dedicated industry pages.
 */
export default function IndustriesSection({ industries = INDUSTRIES }) {
  return (
    <section className="industries" aria-labelledby="industries-heading">
      <div className="page-container">
        <div className="industries__container">
          <div className="industries__header">
            <span className="industries__eyebrow">Industries</span>
            <h2 id="industries-heading" className="industries__heading">
              Industries We Serve
            </h2>
            <p className="industries__subtext">
              Helping organizations accelerate AI adoption, ERP modernization
              and digital transformation across mission-critical industries.
            </p>
          </div>

          <IndustryGrid industries={industries} />
        </div>
      </div>
    </section>
  );
}
