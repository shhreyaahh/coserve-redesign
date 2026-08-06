import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <section className="nf-hero">
        <div className="page-container nf-hero__container">
          <span className="nf-hero__code">404</span>
          <h1 className="nf-hero__title">Page not found</h1>
          <p className="nf-hero__description">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link className="nf-hero__link" to="/">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
);
}
