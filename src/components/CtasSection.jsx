import React from "react";
import "../styles/globals.css";

/*
 * A single stylized "Wave of Change" stroke — brand book section 3.6/3.7's
 * graphic anchor, redrawn as a low-opacity background motif rather than
 * the literal logo mark. Reused (at different opacity) in the Footer too.
 */
function WaveOfChange({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 300"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 180 C 150 40, 300 260, 450 140 S 750 20, 900 160 S 1100 260, 1200 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

/**
 * CTASection ("Ready to Transform?")
 * The homepage's closing conversion moment — spacious, quiet, premium.
 * Background is layered (soft gradient + radial glow + wave motif) but
 * every layer sits at very low opacity so it never competes with the
 * headline and buttons.
 */
export default function CTASection() {
  return (
    <section className="cta" aria-labelledby="cta-heading">
      <div className="cta__bg" aria-hidden="true">
        <div className="cta__bg-radial" />
        <WaveOfChange className="cta__bg-wave" />
      </div>

      <div className="cta__content">
        <span className="cta__eyebrow">Ready to Transform?</span>
        <h2 id="cta-heading" className="cta__heading">
          Let&rsquo;s Build the Future of Your Enterprise Together
        </h2>
        <p className="cta__supporting">
          Partner with Coserve to modernize your platforms, adopt AI with
          confidence, and turn transformation into a lasting advantage.
        </p>

        <div className="cta__actions">
          <a href="/contact" className="cta-btn cta-btn--primary">
            Book a Working Session
            <span className="cta-btn__arrow" aria-hidden="true">→</span>
          </a>
          <a href="/ai-products" className="cta-btn cta-btn--secondary">
            Explore AI Solutions
          </a>
        </div>
      </div>
    </section>
  );
}