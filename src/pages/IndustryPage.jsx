import { useParams } from "react-router-dom";
import INDUSTRIES from "../data/industriesData";
import CTASection from "../components/CtaSection";

export default function IndustryPage() {
  const { slug } = useParams();

  const industry = INDUSTRIES.find((item) => item.slug === slug && item.hero);

  if (!industry) {
    return <h1>Industry Not Found</h1>;
  }

  return (
    <main className="industry-page">
      <section className="industry-hero">
        <div className="industry-hero__image">
          <img src={industry.image} alt={industry.title} />
        </div>

        <div className="page-container industry-hero__container">
          <div className="industry-hero__content">
            <span className="industry-hero__badge">{industry.hero.badge}</span>
            <h1>{industry.hero.title}</h1>
            <p>{industry.hero.description}</p>
            <div className="industry-hero__buttons">
              <a href="#" className="btn-primary">
                Book a Session
              </a>
              <a href="/ai-products" className="btn-secondary">
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="industry-challenges">
        <div className="page-container">
          <h2>Challenges</h2>

          <div className="industry-challenges-grid">
            {industry.challenges.map((challenge) => (
              <div className="industry-challenge-card" key={challenge.title}>
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-solutions">
        <div className="page-container">
          <h2>Solutions</h2>

          <div className="industry-solutions-grid">
            {industry.solutions.map((solution) => (
              <div key={solution.title} className="industry-solution-card">
                <h3>{solution.title}</h3>

                <p>{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-products">
        <div className="page-container">
          <h2>Related AI Products</h2>

          <div className="industry-products-grid">
            {industry.products.map((product) => (
              <div key={product} className="industry-product-card">
                {product}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-case-study">
        <div className="page-container">
          <h2>Featured Case Study</h2>

          <div className="industry-case-card">
            <h3>{industry.caseStudy.title}</h3>

            <p>
              <strong>Challenge:</strong> {industry.caseStudy.challenge}
            </p>

            <p>
              <strong>Result:</strong> {industry.caseStudy.result}
            </p>

            <button>{industry.caseStudy.button}</button>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
