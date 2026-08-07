import React, { useState } from "react";
import INSIGHTS from "../data/insightsData";
import "../styles/globals.css";
import CtaSection from "../components/CtaSection";

/* ------------------------------------------------------------------ */
/*  Coserve — Insights (full listing page)                             */
/*  This is the page /insights routes to — separate from               */
/*  InsightsSection.jsx, which stays as the homepage teaser (featured  */
/*  card + short list) and is untouched.                               */
/*                                                                       */
/*  Structure borrowed from the real coservesolutions.com/blog/ page:  */
/*  a flat chronological grid — date, thumbnail, title, excerpt,       */
/*  "Read more" — rather than the homepage's featured+list split.      */
/*  That's the right shape for "all N posts, filterable"; the two-     */
/*  column editorial layout doesn't scale to an arbitrary list.        */
/*                                                                       */
/*  Rebuilt in our tokens: --space-grey, --future-blue (==--mint-deep),*/
/*  --steel-blue, --navy-text, --border-on-light, --tint-blue-pale,    */
/*  --font-display / --font-body. Sharp corners on thumbnails per the  */
/*  brand book's box/image convention.                                 */
/*                                                                       */
/*  Note: card links (insight.href) point at individual article pages, */
/*  which don't exist yet as a template — this listing page assumes    */
/*  they'll be built separately.                                       */
/* ------------------------------------------------------------------ */

const CATEGORIES = ["All", "AI", "ERP", "Case Study", "Whitepaper", "Webinar"];

function InsightCard({ insight }) {
  return (
    <li className="insights-grid__item">
      <a href={insight.href} className="insights-card">
        <div className="insights-card__thumb" aria-hidden="true">
          {/* Placeholder visual — swap for a real image later */}
        </div>

        <div className="insights-card__body">
          <div className="insights-card__meta-row">
            {insight.date && (
              <span className="insights-card__date">{insight.date}</span>
            )}
            {insight.category && (
              <span className="insights-card__category">
                {insight.category}
              </span>
            )}
          </div>

          <h3 className="insights-card__title">{insight.title}</h3>

          {insight.summary && (
            <p className="insights-card__excerpt">{insight.summary}</p>
          )}

          {insight.author && (
            <span className="insights-card__author">{insight.author}</span>
          )}

          <span className="insights-card__link">
            Read more <span aria-hidden="true">→</span>
          </span>
        </div>
      </a>
    </li>
  );
}

export default function InsightsListingPage({ insights = INSIGHTS }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredInsights = insights.filter((insight) => {
    const matchesSearch = insight.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || insight.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="insights-page">
      <style>{`
        .insights-page {
          background: #ffffff;
          color: var(--navy-text);
        }

        .insights-page * { box-sizing: border-box; }

        .insights-page__container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* ---------- HERO ---------- */
        .insights-page__hero {
          padding: clamp(6rem, 10vw, 9rem) 0 3rem;
          text-align: center;
        }

        .insights-page__hero h1 {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin: 0 auto 1.25rem;
          max-width: 18ch;
          color: var(--navy-text);
        }

        .insights-page__hero p {
          font-family: var(--font-body);
          font-size: 1.08rem;
          line-height: 1.85;
          color: var(--steel-blue);
          max-width: 620px;
          margin: 0 auto;
        }

        /* ---------- CONTROLS ---------- */
        .insights-page__controls {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 0 0 3rem;
          border-bottom: 1px solid var(--border-on-light, #d8d8d8);
          margin-bottom: 3rem;
        }

        .insights-page__search {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--navy-text);
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--border-on-light, #d8d8d8);
          padding: 0.6rem 0.1rem;
          min-width: 240px;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .insights-page__search:focus {
          border-color: var(--mint-deep, var(--future-blue));
        }

        .insights-page__filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .insights-page__filter-btn {
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          padding: 0.5rem 1rem;
          background: transparent;
          color: var(--mint-pop);
          border: 1px solid var(--mint-deep, #d8d8d8);
          cursor: pointer;
          transition: 0.2s ease;
        }

        .insights-page__filter-btn:hover {
          border-color: var(--mint-deep, var(--future-blue));
          color: var(--navy-text);
        }

        .insights-page__filter-btn.is-active {
          background: var(--mint-pop, var(--future-blue));
          border-color: var(--mint-deep);
          color: #ffffff;
        }

        /* ---------- GRID ---------- */
        .insights-grid {
          list-style: none;
          margin: 0 0 4.5rem;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .insights-card {
          display: block;
          text-decoration: none;
          color: inherit;
        }

        .insights-card__thumb {
          width: 100%;
          aspect-ratio: 16 / 11;
          background: var(--tint-blue-pale, var(--pale-blue));
          margin-bottom: 1.25rem;
          /* sharp corners on image/box elements, per brand convention */
        }

        .insights-card__meta-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.6rem;
        }

        .insights-card__date {
          font-family: var(--font-body);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--tint-blue-muted, var(--steel-blue));
        }

        .insights-card__category {
          font-family: var(--font-body);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--mint-pop, var(--future-blue));
        }

        .insights-card__title {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 1.2rem;
          line-height: 1.3;
          color: var(--navy-text);
          margin: 0 0 0.6rem;
          transition: color 0.2s ease;
        }

        .insights-card:hover .insights-card__title {
          color: var(--space-grey);
        }

        .insights-card__excerpt {
          font-family: var(--font-body);
          font-size: 0.92rem;
          line-height: 1.65;
          color: var(--steel-blue);
          margin: 0 0 0.75rem;
        }

        .insights-card__author {
          display: block;
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: var(--tint-blue-muted, var(--steel-blue));
          margin-bottom: 0.75rem;
        }

        .insights-card__link {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--mint-pop, var(--future-blue));
        }

        .insights-page__empty {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--steel-blue);
          padding: 3rem 0 4.5rem;
          text-align: center;
        }

        @media (max-width: 960px) {
          .insights-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .insights-grid { grid-template-columns: 1fr; }
          .insights-page__controls { flex-direction: column; align-items: stretch; }
          .insights-page__search { width: 100%; }
        }
      `}</style>

      {/* ---------- HERO ---------- */}
      <section className="insights-page__hero">
        <div className="insights-page__container">
          <h1>Perspectives &amp; Insights</h1>
          <p>
            Thinking on AI, ERP, and enterprise transformation from the Coserve
            team — browse the full archive below.
          </p>
        </div>
      </section>

      {/* ---------- CONTROLS + GRID ---------- */}
      <section>
        <div className="insights-page__container">
          <div className="insights-page__controls">
            <input
              type="text"
              className="insights-page__search"
              placeholder="Search insights..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="insights-page__filters">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`insights-page__filter-btn${
                    activeCategory === category ? " is-active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredInsights.length > 0 ? (
            <ul className="insights-grid">
              {filteredInsights.map((insight) => (
                <InsightCard insight={insight} key={insight.id} />
              ))}
            </ul>
          ) : (
            <p className="insights-page__empty">
              No insights match your search.
            </p>
          )}
        </div>
      </section>
      <CtaSection />
    </div>
  );
}
