/**
 * Industry vertical data for the homepage "Industries We Serve" preview.
 * Each entry maps to one of the six supplied industry images. `position`
 * sets the object-position focal point so the equal-size cards keep
 * visually distinct hero crops (skyline reads from the top, a machine
 * close-up from the center, etc.).
 */
import manufacturingImg from "../assets/manufacturing.png";
import aerospaceImg from "../assets/aerospace.png";
import healthcareImg from "../assets/healthcare.png";
import retailImg from "../assets/retail&distribution.png";
import pharmaImg from "../assets/pharma&life sciences.png";
import constructionImg from "../assets/construction&realestate.png";

const INDUSTRIES = [
  {
    id: "aerospace-defense",
    title: "Aerospace & Defense",
    description:
      "Modernizing mission-critical systems for aerospace and defense programs.",
    href: "/industries/aerospace-defense",
    image: aerospaceImg,
    position: "center 28%",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "Connecting shop floor to top floor with modern ERP and real-time visibility.",
    href: "/industries/manufacturing",
    image: manufacturingImg,
    position: "center center",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Streamlining compliance, operations and patient-centered platforms.",
    href: "/industries/healthcare",
    image: healthcareImg,
    position: "center center",
  },
  {
    id: "retail-distribution",
    title: "Retail & Distribution",
    description:
      "Unifying inventory, fulfillment and customer data across every channel.",
    href: "/industries/retail-distribution",
    image: retailImg,
    position: "center center",
  },
  {
    id: "pharma-life-sciences",
    title: "Pharma & Life Sciences",
    description:
      "Supporting regulated environments with traceable, audit-ready systems.",
    href: "/industries/pharma-life-sciences",
    image: pharmaImg,
    position: "center center",
  },
  {
    id: "construction-real-estate",
    title: "Construction & Real Estate",
    description:
      "Bringing project, asset and financial data into a single view.",
    href: "/industries/construction-real-estate",
    image: constructionImg,
    position: "center 30%",
  },
];

export default INDUSTRIES;
