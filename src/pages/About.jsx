import React from "react";
import CTASection from "../components/CtaSection";
import ourStoryImg from "../assets/ourstory.png";
import ourVisionImg from "../assets/ourvision.png";
import ourValuesImg from "../assets/ourvalues.png";

/* ------------------------------------------------------------------ */
/*  Coserve — About Us (full page)                                     */
/*  Rebuilt against the real site tokens: --mint-deep, --future-blue,  */
/*  --space-grey, --story-purpose/vision/values, --font-display,       */
/*  --font-body, --warm-white, --dark, --ink-rgb.                      */
/*  Confirmed against COSERVE_Brand_Book_190623:                       */
/*  - Primary colors: Space Grey #415564 / Future Blue #14D7D2         */
/*    (--future-blue === --mint-deep — same teal, two names in play)   */
/*  - Typeface: Lato throughout (display = heavier weight, body =      */
/*    regular), Calibri only as the Office/system fallback.            */
/*  - Signature graphic asset is "The Wave of Change" — a teal line    */
/*    breaking into a loop, used on stationery as the brand's closing  */
/*    mark. Used once below as WaveDivider, not as a per-section       */
/*    decoration — the brand book uses it sparingly, as a close.       */
/*  - Tone of voice: formal, empathetic, "wise and intelligent" —      */
/*    copy below is written to that register rather than a casual/     */
/*    startup voice.                                                    */
/*  Reuses the existing .story-card image-fade pattern and the         */
/*  .about-highlight diagonal gradient block instead of inventing a    */
/*  new visual system. Extends the same two patterns for the sections  */
/*  the homepage snippet doesn't have yet (What We Do, Approach,       */
/*  Leadership, closing CTA).                                          */
/* ------------------------------------------------------------------ */

function WaveDivider() {
  return (
    <div className="wave-divider" aria-hidden="true">
      <svg viewBox="0 0 400 24" preserveAspectRatio="none">
        <line x1="0" y1="12" x2="168" y2="12" stroke="var(--mint-deep)" strokeWidth="2" />
        <path
          d="M168 12 C 178 2, 184 22, 194 12 C 204 2, 210 22, 220 12"
          stroke="var(--mint-deep)"
          strokeWidth="2"
          fill="none"
        />
        <line x1="220" y1="12" x2="400" y2="12" stroke="var(--mint-deep)" strokeWidth="2" />
      </svg>
    </div>
  );
}

const WHAT_WE_DO = [
  {
    title: "AI Solutions",
    d: "Invoice automation, agentic AI, and workflow intelligence built to sit inside the processes your teams already run.",
  },
  {
    title: "ERP / CRM Integration",
    d: "Implementation, integration, and optimisation across Salesforce, Infor, Rootstock, and Compliance Quest.",
  },
  {
    title: "Industry-Focused Transformation",
    d: "Playbooks built around how manufacturing, distribution, and regulated industries actually operate.",
  },
];

const PRINCIPLES = [
  { n: "Practical AI", d: "We build for the workflow that exists today, not a proof of concept for a demo day." },
  { n: "Measurable ROI", d: "Every engagement is tied to a number before it starts, and reported against it after." },
  { n: "Industry-first thinking", d: "We learn how the business runs before we open the IDE." },
  { n: "Built to integrate", d: "Our work sits on top of the ERP and CRM you already run, not in place of it." },
];

const TEAM = [
  { name: "Full Name", title: "Chief Executive Officer", bio: "One line on their background and what they own here." },
  { name: "Full Name", title: "Chief Technology Officer", bio: "One line on their background and what they own here." },
  { name: "Full Name", title: "Head of AI Solutions", bio: "One line on their background and what they own here." },
  { name: "Full Name", title: "Head of Client Delivery", bio: "One line on their background and what they own here." },
];

export default function CoServeAboutUs() {
  return (
    <div className="about">
      <style>{`
        .about {
          padding: clamp(7.5rem, 5vw, 9.5rem) 0;
          background: #fff;
        }

        .about * { box-sizing: border-box; }

        .about-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .section-tag {
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--mint-deep);
          margin-bottom: 22px;
        }

        /* ---------- hero ---------- */
        .about-top {
          min-height: 40vh;
          padding: 0 0 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          max-width: 900px;
          margin: auto;
        }

        .about-top h2 {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          line-height: 1.03;
          font-weight: 500;
          color: var(--dark);
          margin: 0;
        }

        .about-top h2 span {
          color: var(--mint-deep, var(--future-blue));
        }

        .about-top p {
          margin-top: 34px;
          max-width: 790px;
          font-family: var(--font-body);
          font-size: 1.1rem;
          line-height: 1.9;
          color: rgba(var(--ink-rgb), 0.72);
        }

        /* ---------- Our Story: Purpose / Vision / Values ---------- */
        /* Rows instead of a 3-up grid: image on one side, gradient blend in
           the middle, solid color-bg text panel on the other. Sides
           alternate row to row. */
        .story-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin: 0 0 60px;
        }

        .story-row {
          --card-bg: var(--story-purpose);
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 420px;
        }

        .story-row.row-2 { --card-bg: var(--story-vision); }
        .story-row.row-3 { --card-bg: var(--story-values); }

        .row-image { position: relative; overflow: hidden; }

        .row-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .row-image.image-left::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0, 0, 0, 0) 55%, var(--card-bg) 100%);
        }

        .row-image.image-right::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to left, rgba(0, 0, 0, 0) 40%, var(--card-bg) 100%);
        }

        .row-content {
          background: var(--card-bg);
          color: var(--warm-white);
          padding: 48px 52px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .row-content p + p { margin-top: 14px; }

        .row-content ul {
          list-style: none;
          padding: 0;
          margin: 16px 0 0;
        }

        .row-content li {
          font-family: var(--font-body);
          font-size: 0.88rem;
          line-height: 1.6;
          padding-left: 18px;
          position: relative;
          margin-bottom: 10px;
        }

        .row-content li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.55em;
          width: 6px;
          height: 6px;
          background: currentColor;
          opacity: 0.8;
        }

        .row-content h3 {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 500;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .row-content p {
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        /* ---------- Blue highlight block (reused for AI + Enterprise) ---------- */
        .about-highlight {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 70px;
          padding: 70px;
          background: linear-gradient(135deg, var(--space-grey) 0%, var(--future-blue) 100%);
        }

        .about-highlight h4 {
          font-family: var(--font-display);
          font-size: 2.2rem;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 22px;
        }

        .about-highlight p {
          font-family: var(--font-body);
          font-size: 1.05rem;
          line-height: 1.9;
          color: #f7f4f4;
          margin-bottom: 20px;
        }

        /* ---------- What We Do: flat variant of the story-card grid ---------- */
        .wwd {
          padding: clamp(3.5rem, 5vw, 4.5rem) 0;
        }

        .wwd-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px;
        }

        .wwd-card {
          padding: 34px 30px;
          border: 1px solid rgba(var(--ink-rgb), 0.1);
          transition: 0.35s ease;
        }

        .wwd-card:hover { transform: translateY(-10px); }

        .wwd-card h3 {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 500;
          color: var(--dark);
          margin: 0 0 14px;
        }

        .wwd-card p {
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.75;
          color: rgba(var(--ink-rgb), 0.72);
          margin: 0;
        }

        /* ---------- Our Approach ---------- */
        .approach {
          padding: clamp(3.5rem, 5vw, 4.5rem) 0;
          background: rgba(var(--ink-rgb), 0.03);
        }

        .approach-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px 60px;
        }

        .principle {
          border-top: 2px solid var(--mint-deep);
          padding-top: 20px;
        }

        .principle h3 {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 500;
          color: var(--dark);
          margin: 0 0 10px;
        }

        .principle p {
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.7;
          color: rgba(var(--ink-rgb), 0.72);
          margin: 0;
        }

        /* ---------- Leadership ---------- */
        .leadership {
          padding: clamp(3.5rem, 5vw, 4.5rem) 0;
        }

        .leadership-intro {
          max-width: 640px;
          margin: 0 0 48px;
        }

        .leadership-intro p {
          font-family: var(--font-body);
          font-size: 1.05rem;
          line-height: 1.8;
          color: rgba(var(--ink-rgb), 0.72);
          margin-top: 16px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .team-card {
          padding: 26px 22px;
          border: 1px solid rgba(var(--ink-rgb), 0.1);
        }

        .team-card .avatar {
          width: 200px;
          height: 200px;
          background: var(--mint-deep);
          margin-bottom: 20px;
        }

        .team-card .name {
          font-family: var(--font-display);
          font-size: 1.08rem;
          font-weight: 500;
          color: var(--dark);
        }

        .team-card .title {
          font-family: var(--font-body);
          font-size: 0.78rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--mint-deep);
          margin-top: 8px;
        }

        .team-card .bio {
          font-family: var(--font-body);
          font-size: 0.88rem;
          line-height: 1.6;
          color: rgba(var(--ink-rgb), 0.65);
          margin-top: 14px;
        }

        /* ---------- Wave of Change divider (signature graphic anchor) ---------- */
        .wave-divider {
          max-width: 340px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .wave-divider svg { width: 100%; height: 22px; display: block; }

        /* ---------- Closing CTA: same gradient family as about-highlight ---------- */
        .about-cta {
          text-align: center;
          padding: 90px 70px;
          background: linear-gradient(135deg, var(--space-grey) 0%, var(--future-blue) 100%);
        }

        .about-cta h4 {
          font-family: var(--font-display);
          font-size: 2.1rem;
          font-weight: 500;
          color: #ffffff;
          margin: 0 auto;
          max-width: 20ch;
        }

        .about-cta p {
          font-family: var(--font-body);
          font-size: 1.05rem;
          line-height: 1.8;
          color: #f7f4f4;
          margin: 18px auto 0;
          max-width: 48ch;
        }

        .about-cta .cta-btn {
          margin-top: 32px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          color: var(--space-grey);
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 0.95rem;
          padding: 15px 28px;
          border: none;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .about-cta .cta-btn:hover { transform: translateY(-3px); }
        .about-cta .cta-btn:focus-visible { outline: 2px solid #ffffff; outline-offset: 3px; }

        @media (max-width: 860px) {
          .story-row { grid-template-columns: 1fr; min-height: 0; }
          .row-image { min-height: 260px; }
          .row-image.image-left::after { background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 55%, var(--card-bg) 100%); }
          .row-image.image-right::after { background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 55%, var(--card-bg) 100%); }
          .row-image.image-right { order: -1; }
          .wwd-grid,
          .approach-grid { grid-template-columns: 1fr; }
          .team-grid { grid-template-columns: repeat(2, 1fr); }
          .about-highlight { grid-template-columns: 1fr; padding: 40px 28px; }
          .about-cta { padding: 60px 28px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .wwd-card, .about-cta .cta-btn { transition: none; }
        }
      `}</style>

      <div className="about-container">
        {/* ---------- HERO ---------- */}
        <div className="about-top">
          
          <h2>
            Building the Future of Enterprise <span>Through AI.</span>
          </h2>
          <p>
            At Coserve Software Solutions, we help organisations modernise, automate,
            and scale through intelligent enterprise technology. Combining deep
            expertise in ERP/CRM and AI-driven solutions, we transform complex
            business challenges into measurable business outcomes.
          </p>
        </div>

        {/* ---------- OUR STORY: Purpose / Vision / Values ---------- */}
        {/* Rows instead of the homepage's 3-up grid: image on one side,
            gradient blend in the middle, color-bg text panel on the other.
            Sides alternate row to row. */}
        <div className="story-grid">
          <div className="story-row row-1">
            <div className="row-image image-left">
              <img src={ourStoryImg} alt="Our Story" />
            </div>
            <div className="row-content">
              <h3>Our Story</h3>
              <p>
                From our best ERP and CRM implementations to AI-powered enterprise
                transformation, our journey has always been driven by one belief:
                technology should simplify business and create lasting value.
              </p>
              <p>
                Coserve began as a transformation solutions enabler, providing
                seamless digital evolution for organisations looking to expand
                and increase their revenues. That starting point still shapes
                how we work — every engagement is judged by the business
                outcome it produces, not the complexity of what we built to
                get there.
              </p>
            </div>
          </div>

          <div className="story-row row-2">
            <div className="row-content">
              <h3>Our Vision</h3>
              <p>
                To become the trusted AI transformation partner for enterprises,
                combining intelligent innovation with dependable business systems to
                shape the future of digital enterprise.
              </p>
              <p>
                We simplify transformation through a humanised experience,
                making it engaging and easier for organisations to confidently
                embrace the future — empowering them to create positive impact
                through seamless digital transformation, without losing the
                human connection at the centre of it.
              </p>
            </div>
            <div className="row-image image-right">
              <img src={ourVisionImg} alt="Our Vision" />
            </div>
          </div>

          <div className="story-row row-3">
            <div className="row-image image-left">
              <img src={ourValuesImg} alt="Our Values" />
            </div>
            <div className="row-content">
              <h3>Our Values</h3>
              <p>
                We believe in purpose-driven innovation, customer-first thinking,
                thoughtful transformation and long-term partnerships that deliver
                real, measurable business impact. In practice, that means:
              </p>
              <ul>
                <li>Exceeding expectations, every engagement</li>
                <li>Empowering entrepreneurship in how we solve problems</li>
                <li>Engaging to collaborate, not just to deliver</li>
                <li>Ethics and integrity in every recommendation</li>
                <li>Empathy and trust with every client relationship</li>
                <li>Enabling solutions, not just implementing software</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ---------- AI + Enterprise highlight block ---------- */}
        <div className="about-highlight">
          <div>
            <h4>AI + Enterprise Expertise</h4>
            <p>
              We bridge modern AI innovation with trusted enterprise platforms
              including Salesforce, Infor, Rootstock and Compliance Quest.
            </p>
          </div>
          <div>
            <h4>Built for Real Business</h4>
            <p>
              Every solution is designed around measurable ROI, operational
              efficiency and practical implementation rather than technology for
              its own sake.
            </p>
          </div>
        </div>
      </div>

      {/* ---------- WHAT WE DO ---------- */}
      <div className="wwd">
        <div className="about-container">
          <span className="section-tag">What We Do</span>
          <div className="wwd-grid">
            {WHAT_WE_DO.map((item) => (
              <div className="wwd-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- OUR APPROACH ---------- */}
      <div className="approach">
        <div className="about-container">
          <span className="section-tag">Our Approach</span>
          <div className="approach-grid">
            {PRINCIPLES.map((p) => (
              <div className="principle" key={p.n}>
                <h3>{p.n}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- LEADERSHIP ---------- */}
      <div className="leadership">
        <div className="about-container">
          <span className="section-tag">Leadership</span>
          <div className="leadership-intro">
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--dark)", fontSize: "1.9rem" }}>
              The team behind the transformation work.
            </h2>
            <p>
              A mix of enterprise systems experience and applied AI, working
              client-side from first workshop to production rollout.
            </p>
          </div>
          <div className="team-grid">
            {TEAM.map((t, i) => (
              <div className="team-card" key={i}>
                <div className="avatar" />
                <div className="name">{t.name}</div>
                <div className="title">{t.title}</div>
                <div className="bio">{t.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- WAVE OF CHANGE ---------- */}
      <div style={{ padding: "0 0 56px" }}>
        <WaveDivider />
      </div>

<CTASection />
    </div>
  );
}