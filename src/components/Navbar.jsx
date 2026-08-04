import { HiArrowRight as IconArrowRight } from "react-icons/hi2";

export default function Navbar({ solid = false }) {
  return (
    <header className={`cs-navbar ${solid ? "is-solid" : ""}`}>
      <div className="page-container cs-navbar-inner">
        <a href="/" className="cs-navbar-logo">
          coServe
        </a>

        <nav className="cs-navbar-links">
          <a href="/about">About Us</a>
          <a href="/industries">Industries</a>
          <a href="/products">AI &amp; Products</a>
          <a href="/partners">Partners</a>
          <a href="/insights">Insights</a>
          <a href="/careers">Careers</a>
        </nav>

        <a href="/contact" className="cs-navbar-btn">
          Book a Session
          <IconArrowRight size={16} />
        </a>
      </div>
    </header>
  );
}
