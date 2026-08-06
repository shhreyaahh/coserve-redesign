import CTASection from "../components/CtaSection";
import { IndustryGrid } from "../components/Industries";
import INDUSTRIES from "../data/industriesData";
import "../styles/globals.css";

export default function Industries() {
  return (
    <main className="industries-page">
      <section className="industries-page__hero">
        <div className="page-container">
          <span className="industries-page__eyebrow"></span>

          <h1 className="industries-page__title">
            Industry Solutions Built for Real Business Challenges
          </h1>

          <p className="industries-page__description">
            Every industry faces unique operational challenges. Explore how
            Coserve combines AI, ERP modernization and enterprise expertise to
            deliver measurable outcomes across mission-critical sectors.
          </p>
        </div>
      </section>

      <section className="industries-page__grid">
        <div className="page-container">
          <IndustryGrid industries={INDUSTRIES} />
        </div>
      </section>

      <section className="industries-page__why">
        <div className="page-container">
          <span className="industries-page__eyebrow">Why Coserve ?</span>

          <h2>Built Around Your Industry, Not Generic Technology</h2>

          <p>
            Our approach combines deep industry knowledge with AI, ERP, CRM and
            enterprise automation to solve challenges specific to your
            business—not one-size-fits-all implementations.
          </p>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
