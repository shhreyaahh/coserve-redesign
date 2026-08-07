import { useEffect, useState } from "react";
import { HiArrowRight as IconArrowRight } from "react-icons/hi2";

export default function Navbar({ solid = false, transparent = false }) {
  const [scrolled, setScrolled] = useState(false);

  // Only the transparent variant reacts to scroll (turns solid via .is-solid).
  useEffect(() => {
    if (!transparent) return undefined;

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const classes = ["cs-navbar"];
  if (transparent) classes.push("cs-navbar--transparent");
  if (solid || (transparent && scrolled)) classes.push("is-solid");

  return (
    <header className={classes.join(" ")}>
      <div className="page-container cs-navbar-inner">
        <a href="/" className="cs-navbar-logo">
          coServe
        </a>

        <nav className="cs-navbar-links">
          <a href="/about">About Us</a>
          <a href="/industries">Industries</a>
          <a href="/ai-products">AI &amp; Products</a>
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
