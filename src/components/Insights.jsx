import React from "react";
import INSIGHTS from "../data/insightsData";
import "../styles/globals.css";

/**
 * FeaturedInsight
 * The single large editorial card — image, category, title, summary,
 * and a read link. This is the visual anchor of the section.
 */
function FeaturedInsight({ insight }) {
  if (!insight) return null;

  return (
    <>
      <div className="featured-insight__media">
        <div className="featured-insight__image" aria-hidden="true">
          {/* Placeholder visual — swap for a real image later */}
        </div>
      </div>

      <div className="featured-insight__content">
        <a href={insight.href} className="featured-insight">
          <span className="featured-insight__category">{insight.category}</span>
          <h3 className="featured-insight__title">{insight.title}</h3>
          <p className="featured-insight__summary">{insight.summary}</p>

          <span className="featured-insight__link">
            Read Article <span aria-hidden="true">→</span>
          </span>
        </a>
      </div>
    </>
  );
}

/**
 * LatestInsightsList
 * A minimal editorial reading list — no cards, just category / title /
 * arrow rows separated by thin dividers, closing with a "View All" link.
 */
function LatestInsightsList({ insights }) {
  return (
    <div className="latest-insights">
      <h3 className="latest-insights__heading">Latest Insights</h3>

      <ul className="latest-insights__list">
        {insights.map((insight) => (
          <li className="latest-insights__item" key={insight.id}>
            <a href={insight.href} className="latest-insights__row">
              <span className="latest-insights__category">
                {insight.category}
              </span>
              <span className="latest-insights__title">{insight.title}</span>
              <span className="latest-insights__arrow" aria-hidden="true">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>

      <a href="/insights" className="latest-insights__view-all">
        View All Insights <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

/**
 * InsightsSection ("Perspectives & Insights")
 * Editorial two-column homepage preview — one featured article, a short
 * reading list of the rest. Not a blog grid.
 */
export default function InsightsSection({ insights = INSIGHTS }) {
  const featured = insights.find((i) => i.featured);
  const latest = insights.filter((i) => !i.featured).slice(0, 4);

  return (
    <section className="insights" aria-labelledby="insights-heading">
      <div className="page-container">
        <div className="insights__header">
          <span className="insights__eyebrow">Insights</span>
          <h2 id="insights-heading" className="insights__heading">
            Perspectives &amp; Insights
          </h2>
          <p className="insights__subtext">
            Explore the latest thinking on AI, ERP, enterprise transformation
            and digital innovation from the Coserve team.
          </p>
        </div>

        <div className="insights__body">
          <FeaturedInsight insight={featured} />
          <LatestInsightsList insights={latest} />
        </div>
      </div>
    </section>
  );
}
