/**
 * Industry vertical data for the homepage "Industries We Serve" preview.
 * Each entry maps to one of the six supplied industry images. `position`
 * sets the object-position focal point so the equal-size cards keep
 * visually distinct hero crops (skyline reads from the top, a machine
 * close-up from the center, etc.).
 *
 * NOTE: Only the Manufacturing detail page is currently built. All six
 * industry cards route to the manufacturing page (slug + href point to
 * "manufacturing"). The manufacturing entry MUST stay first in this array,
 * because IndustryPage.jsx looks up by slug and `.find()` returns the first
 * match — the manufacturing object carries all the detail data (hero,
 * challenges, solutions, products, caseStudy).
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
    slug: "manufacturing",
    title: "Aerospace & Defense",
    description:
      "Modernizing mission-critical systems for aerospace and defense programs.",
    href: "/industries/manufacturing",
    image: aerospaceImg,
    position: "center 28%",
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    title: "Manufacturing",
    description:
      "Connecting shop floor to top floor with modern ERP and real-time visibility.",
    href: "/industries/manufacturing",
    image: manufacturingImg,
    position: "center center",
    hero: {
      badge: "Manufacturing",
      title: "AI-Powered Manufacturing Transformation",
      description:
        "Modernize manufacturing with AI, ERP modernization and intelligent automation.",
    },
    challenges: [
      {
        title: "Legacy ERP Systems",
        description:
          "Disconnected systems slow operations and reduce visibility.",
      },
      {
        title: "Manual Processes",
        description: "Repetitive workflows increase operational costs.",
      },
      {
        title: "Limited Visibility",
        description: "Lack of real-time production insights.",
      },
      {
        title: "Supply Chain Complexity",
        description: "Manage suppliers, inventory and production efficiently.",
      },
    ],
    solutions: [
      {
        title: "ERP Modernization",
        description:
          "Upgrade legacy ERP platforms without disrupting business.",
      },
      {
        title: "AI Workflow Automation",
        description: "Automate repetitive enterprise processes.",
      },
      {
        title: "Salesforce CRM",
        description: "Connect sales, service and operations.",
      },
      {
        title: "Manufacturing Intelligence",
        description: "Gain real-time operational insights.",
      },
    ],
    products: [
      "Invoice Automation",
      "SmartProj",
      "Embeddable AI Agents",
      "ERP AI Readiness Audit",
    ],
    caseStudy: {
      title: "Leading Manufacturing Enterprise",
      challenge: "Manual invoice processing",
      result: "65% Faster Processing",
      button: "Unlock Full Story",
    },
  },
  {
    id: "healthcare",
    slug: "manufacturing",
    title: "Healthcare",
    description:
      "Streamlining compliance, operations and patient-centered platforms.",
    href: "/industries/manufacturing",
    image: healthcareImg,
    position: "center center",
  },
  {
    id: "retail-distribution",
    slug: "manufacturing",
    title: "Retail & Distribution",
    description:
      "Unifying inventory, fulfillment and customer data across every channel.",
    href: "/industries/manufacturing",
    image: retailImg,
    position: "center center",
  },
  {
    id: "pharma-life-sciences",
    slug: "manufacturing",
    title: "Pharma & Life Sciences",
    description:
      "Supporting regulated environments with traceable, audit-ready systems.",
    href: "/industries/manufacturing",
    image: pharmaImg,
    position: "center center",
  },
  {
    id: "construction-real-estate",
    slug: "manufacturing",
    title: "Construction & Real Estate",
    description:
      "Bringing project, asset and financial data into a single view.",
    href: "/industries/manufacturing",
    image: constructionImg,
    position: "center 30%",
  },
];

export default INDUSTRIES;
