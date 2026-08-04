import React from "react";
import "../styles/globals.css";

/**
 * Footer content — kept at the top of this file (instead of a separate
 * data file) so columns, links, and contact details can be edited in
 * one place alongside the component that renders them.
 */
const FOOTER_COLUMNS = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "AI Products", href: "/ai-products" },
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "Partners", href: "/partners" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Insights", href: "/insights" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Whitepapers", href: "/whitepapers" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

const FOOTER_CONTACT = {
  email: "info@coservesolutions.com",
  phone: "+91 40 4007 2501",
  indiaOffice: "1203 - Tower 3 Lanco Hills, Manikonda, Hyderabad - 500089, Telangana",
  ukOffice: "Springpark House (RSM unit), Basing View, Basingstoke, Hampshire RG21 4HG, UK",
};

const FOOTER_SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/coserve",
    icon: "linkedin",
  },
];

const FOOTER_LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56z"
      />
    </svg>
  );
}

const SOCIAL_ICONS = { linkedin: LinkedInIcon };

/**
 * A repeat of the CTA section's Wave of Change motif, dimmer here — the
 * brand book's graphic anchor as a quiet footer background detail rather
 * than a logo mark.
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
 * Footer
 * Space Grey, not black — the continuation of the CTA section rather
 * than a separate dark block. Five columns on desktop, collapsing down
 * through tablet and mobile.
 */
export default function Footer() {
  return (
    <footer className="site-footer">
      <WaveOfChange className="site-footer__wave" />

      <div className="site-footer__inner">
        <div className="site-footer__grid">
          {/* Column 1 — brand */}
          <div className="site-footer__col site-footer__col--brand">
            <span className="site-footer__logo">coserve</span>
            <p className="site-footer__tagline">
              Thoughtful transformation for AI-first enterprises —
              modernizing platforms while keeping the human connection
              intact.
            </p>
            <div className="site-footer__socials">
              {FOOTER_SOCIALS.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="site-footer__social"
                    aria-label={social.name}
                  >
                    {Icon ? <Icon /> : social.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Columns 2–4 — link groups */}
          {FOOTER_COLUMNS.map((column) => (
            <div className="site-footer__col" key={column.heading}>
              <h3 className="site-footer__heading">{column.heading}</h3>
              <ul className="site-footer__links">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="site-footer__link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5 — contact */}
          <div className="site-footer__col">
            <h3 className="site-footer__heading">Contact</h3>
            <ul className="site-footer__links site-footer__links--contact">
              <li>
                <a href={`mailto:${FOOTER_CONTACT.email}`} className="site-footer__link">
                  {FOOTER_CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${FOOTER_CONTACT.phone.replace(/\s+/g, "")}`} className="site-footer__link">
                  {FOOTER_CONTACT.phone}
                </a>
              </li>
              <li className="site-footer__address">
                <span className="site-footer__address-label">India Office</span>
                {FOOTER_CONTACT.indiaOffice}
              </li>
              <li className="site-footer__address">
                <span className="site-footer__address-label">UK Office</span>
                {FOOTER_CONTACT.ukOffice}
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span className="site-footer__copyright">© 2026 Coserve Software Solutions.</span>
          <ul className="site-footer__legal">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="site-footer__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}