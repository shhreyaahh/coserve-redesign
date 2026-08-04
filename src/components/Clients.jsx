import React, { useState } from "react";
import "../styles/globals.css";

/**
 * Client logo data — kept separate from JSX so it can be swapped out
 * or wired up to a CMS later without touching component logic.
 *
 * Logos below are the same clients currently listed in the "our clients"
 * section of coservesolutions.com. Replace `logo` with locally hosted
 * assets (e.g. /assets/logos/safran.png) when available — the remote
 * WordPress uploads URL is used here only as a placeholder source.
 */
const CLIENTS = [
  { name: "Zodiac Aerospace", logo: "/client-logos/zodiac-aerospace.png" },
  { name: "Wittur", logo: "/client-logos/wittur.png" },
  { name: "Wissen", logo: "/client-logos/wissen.png" },
  { name: "STG", logo: "/client-logos/stg.png" },
  { name: "Royal Selangor", logo: "/client-logos/royal-selangor.png" },
  { name: "Paschal", logo: "/client-logos/paschal.png" },
  { name: "Ojus", logo: "/client-logos/ojus.png" },
  { name: "Nesma", logo: "/client-logos/nesma.png" },
  { name: "Naqua", logo: "/client-logos/naqua.png" },
  { name: "L3 Technologies", logo: "/client-logos/l3-technologies.png" },
  { name: "HCL", logo: "/client-logos/hcl.png" },
  { name: "H2O Concepts", logo: "/client-logos/h2o-concepts.png" },
  { name: "ESA", logo: "/client-logos/esa.png" },
  { name: "Nivasoft", logo: "/client-logos/nivasoft.png" },
];

/**
 * LogoMarquee
 * Continuously scrolling, infinitely-looping logo strip.
 * - Duplicates the logo set internally for a seamless loop.
 * - Pauses on hover and on keyboard focus.
 * - Respects prefers-reduced-motion (handled in CSS; JS just exposes state).
 */
function ClientLogo({ client }) {
  const [hasImageError, setHasImageError] = useState(false);

  if (hasImageError) {
    return <span className="logo-marquee__fallback">{client.name}</span>;
  }

  return (
    <img
      src={client.logo}
      alt={client.name}
      loading="lazy"
      draggable="false"
      className="logo-marquee__logo"
      onError={() => setHasImageError(true)}
    />
  );
}

function LogoMarquee({ clients }) {
  const [isPaused, setIsPaused] = useState(false);

  const resumeAfterFocusLeaves = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPaused(false);
    }
  };

  return (
    <div
      className="logo-marquee"
      role="region"
      aria-label="Client logos"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`logo-marquee__track ${isPaused ? "is-paused" : ""}`}
        // Focusable so keyboard users can tab to the strip and pause it,
        // matching the hover-to-pause behavior for mouse users.
        tabIndex={0}
        onFocus={() => setIsPaused(true)}
        onBlur={resumeAfterFocusLeaves}
      >
        {[0, 1].map((copyIndex) => (
          <div
            className="logo-marquee__set"
            key={copyIndex}
            aria-hidden={copyIndex === 1}
          >
            {clients.map((client) => (
              <div className="logo-marquee__item" key={client.name}>
                <ClientLogo client={client} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * TrustedClientsSection
 * Replaces the old "Our Clients" testimonial-logo block.
 * Logos only — no testimonials, cards, stats, or CTAs here.
 */
export default function TrustedClientsSection() {
  return (
    <section
      className="trusted-clients"
      aria-labelledby="trusted-clients-heading"
    >
      <div className="page-container">
        <div className="trusted-clients__header">
          <h2 id="trusted-clients-heading" className="trusted-clients__heading">
            Trusted by Industry Leaders
          </h2>
          <p className="trusted-clients__subtext">
            Trusted by leading organizations across aerospace, healthcare,
            manufacturing, retail and enterprise technology.
          </p>
        </div>

        <LogoMarquee clients={CLIENTS} />
      </div>
    </section>
  );
}
