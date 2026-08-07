import React, { useState } from "react";
import CtaSection from "../components/CtaSection";

/* ------------------------------------------------------------------ */
/*  Coserve — Contact                                                  */
/*  Rebuilt from coservesolutions.com/contact/ in the established      */
/*  design system: --space-grey / --future-blue (== --mint-deep),      */
/*  --steel-blue, --tint-blue-pale/--tint-blue-muted, --border-on-light,*/
/*  --font-display / --font-body, --navy-text.                         */
/*  Hero mirrors the centered .careers-hero / .about-top pattern.      */
/*  Form + office list sit side by side; offices reuse the badge/label */
/*  language from the careers hero. Closing CTA reuses the diagonal    */
/*  space-grey → future-blue gradient from .about-highlight/.careers-  */
/*  cta. Office copy (addresses, emails) is taken as-is since it's     */
/*  factual company information, not editorial content.                */
/* ------------------------------------------------------------------ */

const OFFICES = [
  {
    label: "Corporate Headquarters",
    address: "6 St Leonards Avenue, Chineham, Basingstoke, RG24 8RD, UK",
    email: "info@coservesolutions.com",
  },
  {
    label: "India",
    address:
      "4th Floor, Sarvotham, Plot No. 12, Deloitte Dr, Phase 2, HITEC City, Hyderabad, Telangana 500081",
    email: "info@coservesolutions.com",
  },
  {
    label: "Netherlands",
    address:
      "Coserve Solutions B.V., Stationsplein 62, 3743 KM Baarn, The Netherlands",
    email: "info@coservesolutions.com",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Wire up to your form handler / API endpoint.
  }

  return (
    <div className="contact-page">
      <style>{`
        .contact-page {
          background: #ffffff;
          color: var(--navy-text);
        }

        .contact-page * { box-sizing: border-box; }

        .contact-container {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* ---------- HERO ---------- */
        .contact-hero {
          padding: clamp(6rem, 10vw, 9rem) 0 3rem;
          text-align: center;
        }

        .contact-hero h1 {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin: 0 auto 1.25rem;
          max-width: 740px;
          color: var(--navy-text);
        }

        .contact-hero p {
          font-family: var(--font-body);
          font-size: 1.08rem;
          line-height: 1.85;
          color: var(--steel-blue);
          max-width: 560px;
          margin: 0 auto;
        }

        /* ---------- FORM + OFFICES ---------- */
        .contact-body {
          padding: 1.5rem 0 4.5rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 4.5rem;
          align-items: start;
        }

        .contact-panel__heading {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 1.5rem;
          margin: 0 0 0.5rem;
          color: var(--navy-text);
        }

        .contact-panel__subtext {
          font-family: var(--font-body);
          font-size: 0.98rem;
          color: var(--steel-blue);
          margin: 0 0 2rem;
        }

        .contact-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem 1.5rem;
        }

        .contact-form__field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .contact-form__field--full { grid-column: 1 / -1; }

        .contact-form__field label {
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: var(--tint-blue-muted, var(--steel-blue));
        }

        .contact-form__field input,
        .contact-form__field textarea {
          font-family: var(--font-body);
          font-size: 0.98rem;
          color: var(--navy-text);
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--border-on-light, #d8d8d8);
          padding: 0.6rem 0.1rem;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .contact-form__field input:focus,
        .contact-form__field textarea:focus {
          border-color: var(--mint-pop, var(--future-blue));
        }

        .contact-form__field textarea {
          resize: vertical;
          min-height: 100px;
        }

        .contact-form__submit {
          grid-column: 1 / -1;
          justify-self: start;
          margin-top: 0.5rem;
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.8rem;
          background: var(--mint-pop);
          color: var(--space-grey);
          border-radius: 10px;
          border: 1px solid var(--mint-deep);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .contact-form__submit:hover { background: #34434f; }

        /* ---------- OFFICES ---------- */
        .contact-offices {
          border-top: 1px solid var(--border-on-light, #d8d8d8);
        }

        .contact-office {
          padding: 1.75rem 0;
          border-bottom: 1px solid var(--border-on-light, #d8d8d8);
        }

        .contact-office__label {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--mint-pop, var(--future-blue));
          margin-bottom: 0.6rem;
        }

        .contact-office__address {
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.65;
          color: var(--navy-text);
          margin: 0 0 0.5rem;
        }

        .contact-office__email {
          font-family: var(--font-body);
          font-size: 0.92rem;
          color: var(--space-grey);
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        /* ---------- MAP ---------- */
        .contact-map {
          margin-top: 3.5rem;
        }

        .contact-map iframe {
          width: 100%;
          height: 380px;
          border: none;
          display: block;
        }

        /* ---------- CLOSING CTA (same gradient family as about-highlight / careers-cta) ---------- */
        .contact-cta {
          text-align: center;
          padding: 5.5rem 2rem;
          background: linear-gradient(135deg, var(--space-grey) 0%, var(--future-blue) 100%);
        }

        .contact-cta h2 {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(1.8rem, 3.6vw, 2.4rem);
          color: #ffffff;
          margin: 0 auto;
          max-width: 22ch;
        }

        .contact-cta__actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 2.25rem;
        }

        .contact-cta .btn-primary,
        .contact-cta .btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          font-size: 0.9rem;
          font-family: var(--font-body);
          border: none;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .contact-cta .btn-primary {
          background: #ffffff;
          color: var(--space-grey);
          border: 1px solid #ffffff;
        }

        .contact-cta .btn-primary:hover { background: var(--tint-blue-pale, var(--pale-blue)); }

        .contact-cta .btn-secondary {
          background: transparent;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .contact-cta .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #ffffff;
        }

        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
          .contact-form { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ---------- HERO ---------- */}
      <section className="contact-hero">
        <div className="contact-container">

          <h1>Let's talk transformation.</h1>
          <p>
            We're here to help with your transformation journey — reach out and
            our team will get back to you.
          </p>
        </div>
      </section>

      {/* ---------- FORM + OFFICES ---------- */}
      <section className="contact-body">
        <div className="contact-container">
          <div className="contact-grid">
            <div>
              <h2 className="contact-panel__heading">Send a Message</h2>
              <p className="contact-panel__subtext">
                We are here to help with your transformation journey.
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__field">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-phone">Phone</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-company">Company</label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact-form__field contact-form__field--full">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="contact-form__submit">
                  Submit
                </button>
              </form>
            </div>

            <div>
              <h2 className="contact-panel__heading">Our Offices</h2>
              <p className="contact-panel__subtext">
                Reach our teams directly, wherever you are.
              </p>

              <div className="contact-offices">
                {OFFICES.map((office) => (
                  <div className="contact-office" key={office.label}>
                    <span className="contact-office__label">
                      {office.label}
                    </span>
                    <p className="contact-office__address">{office.address}</p>
                    <a
                      className="contact-office__email"
                      href={`mailto:${office.email}`}
                    >
                      {office.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              title="Coserve India office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2463011956!2d78.377201!3d17.4479216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93df0b1f7cc1%3A0x117d3256fc5b9d09!2sCoserve%20Software%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1740841548731!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
