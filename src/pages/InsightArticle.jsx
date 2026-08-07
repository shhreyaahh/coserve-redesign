import React from "react";
import CtaSection from "../components/CtaSection"
/* ------------------------------------------------------------------ */
/*  Coserve — Insight Article                                          */
/*  One file: data, markup, and CSS together. Structure takes its cue  */
/*  from the real coservesolutions.com article pages (hero image,      */
/*  category, title, meta, body sections, related posts, closing CTA)  */
/*  but the layout itself is new — full-bleed hero with an overlay     */
/*  gradient instead of a small stacked thumbnail, a sticky share rail */
/*  instead of plain link text, and a pull-quote treatment none of the */
/*  other pages use. Tokens are the same as everywhere else on the     */
/*  site: --space-grey, --future-blue (== --mint-deep), --steel-blue,  */
/*  --navy-text, --border-on-light, --tint-blue-pale, --font-display / */
/*  --font-body.                                                        */
/* ------------------------------------------------------------------ */

const ARTICLE = {
  category: "ERP",
  title: "How Enterprises Are Rethinking ERP for the AI Era",
  author: "Coserve Team",
  date: "June 30, 2025",
  readTime: "5 min read",
  intro:
    "Enterprise systems were built to record what happened. The next generation is being built to decide what happens next — and that shift is reshaping how ERP platforms get evaluated, implemented, and extended.",
  sections: [
    {
      heading: "From Transactions to Decisions",
      body: "Traditional ERP excels at capturing structured data — orders, inventory, invoices. What it hasn't done well is turn that data into a decision in the moment it matters. AI-driven layers on top of ERP are closing that gap, surfacing the right recommendation before a human has to go looking for it.",
    },
    {
      heading: "Integration Over Replacement",
      body: "The organizations seeing the fastest returns aren't ripping out their ERP and starting over — they're layering intelligence on top of the systems already running their operations. That approach protects the investment already made while extending what the platform can actually do.",
    },
  ],
  pullQuote:
    "The fastest returns aren't coming from replacing ERP — they're coming from layering intelligence on top of it.",
  closingSection: {
    heading: "What This Means for Implementation",
    body: "Practically, this changes what a good implementation partner looks like. It's no longer just about configuring modules correctly — it's about understanding where automation and AI can be layered in without disrupting the processes that already work.",
  },
};

const RELATED = [
  { category: "ERP", title: "Key Challenges in Infor ERP Implementation and How Experts Solve Them" },
  { category: "Case Study", title: "Importance of Choosing the Right Infor Implementation Partner" },
  { category: "AI", title: "The Impact of AI and Machine Learning on ERP Systems" },
];

export default function InsightArticle() {
  return (
    <article className="ia">
      <style>{`
        .ia {
          background: #ffffff;
          color: var(--navy-text);
        }

        .ia * { box-sizing: border-box; }

        .ia-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* ---------- HERO: full-bleed image, text overlaid at the base ---------- */
        .ia-hero {
          position: relative;
          height: 62vh;
          min-height: 420px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }

        .ia-hero__image {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--space-grey) 0%, var(--future-blue) 100%);
        }

        .ia-hero__scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(15, 20, 26, 0.88) 0%,
            rgba(15, 20, 26, 0.35) 55%,
            rgba(15, 20, 26, 0) 100%
          );
        }

        .ia-hero__content {
          position: relative;
          z-index: 2;
          padding: 3.5rem 0;
          width: 100%;
        }

        .ia-hero__category {
          display: inline-block;
          padding: 0.4rem 0.9rem;
          background: var(--mint-deep, var(--future-blue));
          color: #0f141a;
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }

        .ia-hero__content h1 {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          line-height: 1.1;
          color: #ffffff;
          max-width: 22ch;
          margin: 0 0 1rem;
        }

        .ia-hero__meta {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.75);
        }

        /* ---------- BODY: sticky share rail + content column ---------- */
        .ia-body {
          padding: 4rem 0 3rem;
        }

        .ia-body__grid {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 3.5rem;
          align-items: start;
        }

        .ia-rail {
          position: sticky;
          top: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .ia-rail__readtime {
          font-family: var(--font-body);
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--tint-blue-muted, var(--steel-blue));
          writing-mode: vertical-rl;
          text-orientation: mixed;
          letter-spacing: 0.06em;
        }

        .ia-rail__divider {
          width: 1px;
          height: 40px;
          background: var(--border-on-light, #d8d8d8);
        }

        .ia-rail__share {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .ia-rail__share a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border: 1px solid var(--border-on-light, #d8d8d8);
          color: var(--steel-blue);
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 700;
          text-decoration: none;
          transition: 0.2s ease;
        }

        .ia-rail__share a:hover {
          border-color: var(--mint-deep, var(--future-blue));
          color: var(--space-grey);
        }

        .ia-content {
          max-width: 68ch;
        }

        .ia-content__intro {
          font-family: var(--font-body);
          font-size: 1.2rem;
          line-height: 1.75;
          color: var(--space-grey);
          margin: 0 0 2.5rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid var(--border-on-light, #d8d8d8);
        }

        .ia-content h2 {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 1.5rem;
          color: var(--navy-text);
          margin: 0 0 1rem;
          padding-top: 0.1rem;
          position: relative;
        }

        .ia-content h2::after {
          content: "";
          display: block;
          width: 36px;
          height: 3px;
          background: var(--mint-deep, var(--future-blue));
          margin-top: 0.6rem;
        }

        .ia-content p {
          font-family: var(--font-body);
          font-size: 1.02rem;
          line-height: 1.85;
          color: var(--navy-text);
          margin: 0 0 1.75rem;
        }

        .ia-content section + section {
          margin-top: 2.5rem;
        }

        .ia-pullquote {
          margin: 3rem 0;
          padding-left: 1.75rem;
          border-left: 3px solid var(--mint-deep, var(--future-blue));
        }

        .ia-pullquote p {
          font-family: var(--font-display);
          font-weight: 500;
          font-style: italic;
          font-size: 1.4rem;
          line-height: 1.5;
          color: var(--space-grey);
          margin: 0;
        }

        /* ---------- RELATED ---------- */
        .ia-related {
          padding: 3.5rem 0 4.5rem;
          border-top: 1px solid var(--border-on-light, #d8d8d8);
          margin-top: 2rem;
        }

        .ia-related__heading {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 1.3rem;
          margin: 0 0 1.75rem;
          color: var(--navy-text);
        }

        .ia-related__grid {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .ia-related__card {
          display: block;
        }

        .ia-related__thumb {
          width: 100%;
          aspect-ratio: 16 / 10;
          background: var(--tint-blue-pale, var(--pale-blue));
          margin-bottom: 1rem;
        }

        .ia-related__category {
          display: block;
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--mint-deep, var(--future-blue));
          margin-bottom: 0.5rem;
        }

        .ia-related__title {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 1.02rem;
          line-height: 1.4;
          color: var(--navy-text);
        }

        /* ---------- CLOSING CTA (same gradient family used site-wide) ---------- */
        .ia-cta {
          text-align: center;
          padding: 5.5rem 2rem;
          background: linear-gradient(135deg, var(--space-grey) 0%, var(--future-blue) 100%);
        }

        .ia-cta h2 {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(1.8rem, 3.6vw, 2.4rem);
          color: #ffffff;
          margin: 0 auto;
          max-width: 22ch;
        }

        .ia-cta__actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 2.25rem;
        }

        .ia-cta .btn-primary,
        .ia-cta .btn-secondary {
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

        .ia-cta .btn-primary {
          background: #ffffff;
          color: var(--space-grey);
          border: 1px solid #ffffff;
        }

        .ia-cta .btn-primary:hover { background: var(--tint-blue-pale, var(--pale-blue)); }

        .ia-cta .btn-secondary {
          background: transparent;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .ia-cta .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #ffffff;
        }

        @media (max-width: 860px) {
          .ia-body__grid { grid-template-columns: 1fr; }
          .ia-rail {
            position: static;
            flex-direction: row;
            justify-content: flex-start;
            margin-bottom: 2rem;
          }
          .ia-rail__readtime { writing-mode: horizontal-tb; }
          .ia-rail__divider { width: 1px; height: 24px; }
          .ia-related__grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ---------- HERO ---------- */}
      <div className="ia-hero">
        <div className="ia-hero__image" aria-hidden="true" />
        <div className="ia-hero__scrim" aria-hidden="true" />
        <div className="ia-hero__content">
          <div className="ia-container">
            <span className="ia-hero__category">{ARTICLE.category}</span>
            <h1>{ARTICLE.title}</h1>
            <span className="ia-hero__meta">
              {ARTICLE.author} • {ARTICLE.date} • {ARTICLE.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* ---------- BODY ---------- */}
      <div className="ia-body">
        <div className="ia-container">
          <div className="ia-body__grid">
            <div className="ia-rail">
              <span className="ia-rail__readtime">{ARTICLE.readTime}</span>
              <div className="ia-rail__divider" />
              <div className="ia-rail__share">
                <a href="#" aria-label="Share on LinkedIn">in</a>
                <a href="#" aria-label="Share on X">X</a>
                <a href="#" aria-label="Share on Facebook">f</a>
              </div>
            </div>

            <div className="ia-content">
              <p className="ia-content__intro">{ARTICLE.intro}</p>

              <section>
                <h2>{ARTICLE.sections[0].heading}</h2>
                <p>{ARTICLE.sections[0].body}</p>
              </section>

              <div className="ia-pullquote">
                <p>&ldquo;{ARTICLE.pullQuote}&rdquo;</p>
              </div>

              <section>
                <h2>{ARTICLE.sections[1].heading}</h2>
                <p>{ARTICLE.sections[1].body}</p>
              </section>

              <section>
                <h2>{ARTICLE.closingSection.heading}</h2>
                <p>{ARTICLE.closingSection.body}</p>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- RELATED ---------- */}
      <div className="ia-related">
        <div className="ia-container">
          <h3 className="ia-related__heading">Related Insights</h3>
          <ul className="ia-related__grid">
            {RELATED.map((post) => (
              <li key={post.title}>
                <div className="ia-related__card">
                  <div className="ia-related__thumb" aria-hidden="true" />
                  <span className="ia-related__category">{post.category}</span>
                  <span className="ia-related__title">{post.title}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <CtaSection />
    </article>
  );
}