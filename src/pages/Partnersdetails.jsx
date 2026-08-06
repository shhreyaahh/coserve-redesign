import { useParams, Link } from "react-router-dom";
import CTASection from "../components/CtaSection";
import PARTNERS from "../data/partnersData";
import PARTNER_DETAILS from "../data/partnersdetailsData";


export default function PartnerDetailPage() {
  const { slug } = useParams();

  const partner = PARTNERS.find((p) => p.id === slug);
  const details = PARTNER_DETAILS[slug];

  if (!partner || !details) {
    return (
      <main className="partner-page">
        <section className="pd-hero">
          <div className="page-container pd-hero__row">
            <div className="pd-hero__text">
              <h1>Partner Not Found</h1>
              <p>We couldn't find that partner page.</p>
              <Link className="btn-primary" to="/partners">
                Back to Partners
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const {
    logo,
    heroTitle,
    heroDescription,
    features,
    industries,
    expertise,
    fit,
    solutions,
  } = details;

  return (
    <main className="partner-page">
      {/* ---------- HERO ---------- */}
      <section className="pd-hero">
        <div className="page-container pd-hero__row">
          <div className="pd-hero__text">
            <span className="pd-hero__eyebrow">
              Partner · {partner.category}
            </span>

            {logo && (
              <div className="pd-hero__logo">
                <img src={logo} alt={partner.name} />
              </div>
            )}

            <h1>{heroTitle}</h1>
            <p>{heroDescription}</p>

            <a className="btn-primary" href="/contact">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* ---------- KEY FEATURES ---------- */}
      {features && features.length > 0 && (
        <section className="pd-features">
          <div className="page-container">
            <span className="pd-eyebrow">Key Features</span>
            <h2 className="pd-section-title">What the platform gives you</h2>

            <div className="pd-features__grid">
              {features.map((feature, i) => (
                <div className="pd-feature" key={feature.title}>
                  <span className="pd-feature__num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- INDUSTRIES ---------- */}
      {industries && industries.length > 0 && (
        <section className="pd-industries">
          <div className="page-container">
            <div className="pd-industries__header">
              <div>
                <span className="pd-eyebrow">Industries</span>
                <h2 className="pd-section-title">
                  Serving unique business requirements across industries
                </h2>
              </div>
              <a className="btn-secondary" href="/contact">
                Request a Demo
              </a>
            </div>

            <div className="pd-industries__grid">
              {industries.map((industry) => (
                <Link
                  key={industry.name}
                  to={industry.href}
                  className="pd-industry-chip"
                >
                  {industry.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- EXPERTISE ---------- */}
      {expertise && expertise.length > 0 && (
        <section className="pd-expertise">
          <div className="page-container pd-expertise__row">
            <div className="pd-expertise__text">
              <span className="pd-eyebrow">Our Expertise</span>
              <h2 className="pd-section-title">
                Coserve has extensive hands-on implementation experience with{" "}
                {partner.name}
              </h2>
            </div>

            <ul className="pd-expertise__list">
              {expertise.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ---------- WHO SHOULD CONSIDER (FIT) ---------- */}
      {fit && (
        <section className="pd-fit">
          <div className="page-container pd-fit__row">
            <div>
              <span className="pd-eyebrow">Who Should Consider This</span>
              <h2 className="pd-section-title">
                Is {partner.name} right for you?
              </h2>
              <p>{fit.description}</p>
            </div>

            {fit.points && fit.points.length > 0 && (
              <ul className="pd-fit__list">
                {fit.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* ---------- SOLUTIONS (problem/solution list) ---------- */}
      {solutions && solutions.length > 0 && (
        <section className="pd-solutions">
          <div className="page-container">
            <span className="pd-eyebrow">How It Solves Your Problems</span>
            <h2 className="pd-section-title">Common challenges, solved</h2>

            <div className="pd-solutions__list">
              {solutions.map((solution, i) => (
                <div className="pd-solution-row" key={solution.title}>
                  <span className="pd-solution-row__num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </main>
  );
}
