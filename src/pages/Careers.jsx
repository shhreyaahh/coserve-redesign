import React, { useState } from "react";
import CtaSection from "../components/CtaSection";

/* ------------------------------------------------------------------ */
/*  Coserve — Careers                                                  */
/*  Rebuilt from coservesolutions.com/careers/ in the established      */
/*  design system: --space-grey / --future-blue (== --mint-deep),      */
/*  --steel-blue, --tint-blue-pale/--tint-blue-muted, --border-on-light,*/
/*  --font-display / --font-body, --navy-text, --warm-white.           */
/*  Hero mirrors the .about-top centered pattern. Role list reuses the */
/*  .ptn-list row language from the partners page, converted into an   */
/*  accordion since job content is long-form, not a side preview.      */
/*  Closing CTA reuses the diagonal space-grey → future-blue gradient  */
/*  from .about-highlight / .about-cta.                                */
/*  Source copy condensed and rewritten in Coserve's voice — not a     */
/*  verbatim copy of the live listings.                                */
/* ------------------------------------------------------------------ */

const ROLES = [
  {
    code: "CS_01",
    title: "Infor WMS Technical Consultant",
    experience: "2–5 yrs",
    description:
      "Technical role on Infor SCE WMS (v9+), building and integrating warehouse management solutions for enterprise clients.",
    skills: [
      "Core Java, REST web services, XML/XSLT, PL/SQL",
      "Infor SCE WMS — Console, UI & RF, RF screen customisation",
      "Integration via Infor OS/ION or Dell Boomi, and WMS APIs",
      "BIRST/BIRT reporting and WMS database structure",
      "Warehouse operations — inbound, outbound, master data",
    ],
  },
  {
    code: "CS_02",
    title: "Azure Developer",
    experience: "3–5 yrs",
    description:
      "Own CI/CD pipelines and Azure DevOps infrastructure for our development teams, from build automation through deployment monitoring.",
    skills: [
      "Azure DevOps — build/release pipelines, YAML, ARM templates",
      "PowerShell automation and custom deployment scripting",
      "Git repository administration and branching strategy",
      "Kibana, New Relic, Kafka & Elasticsearch configuration",
      "Containerised deployments to AKS/EKS; AZ-400 preferred",
    ],
  },
  {
    code: "CS_03",
    title: "Business Development Manager",
    experience: "5–10 yrs",
    description:
      "Drive end-to-end enterprise sales — from opportunity discovery through close — across our ERP, CRM, and quality management lines.",
    skills: [
      "New logo hunting and existing account growth",
      "RFI/RFP, evaluation, and POC stages, working with pre-sales",
      "CXO-level relationship building and management",
      "OEM and local partner relationship development",
      "Consistent pipeline management against quarterly targets",
    ],
  },
  {
    code: "CS_04",
    title: "Infor ION Developer",
    experience: "3–5 yrs",
    description:
      "Design and build complex integrations on the Infor ION platform, connecting Infor ERP systems across enterprise environments.",
    skills: [
      "2+ years hands-on with ION integration platform",
      "IDF System-Link communication via Infor ION",
      "Custom scripting in Java/Groovy",
      "EDI profiles in X12 standards",
      "SDS documentation and end-to-end integration architecture",
    ],
  },
  {
    code: "CS_05",
    title: "Infor Technical Consultant",
    experience: "3–7 yrs",
    description:
      "Architect and lead Baan/Infor LN technical solutions, mentoring the team and steering on-prem customers toward the cloud.",
    skills: [
      "Baan/LN customisation using Infor Studio tools",
      "Baan SQL, DALs, User Exits, CDFs, personalisation",
      "Mingle ION and BOD/workflow development",
      "Infrastructure — install, config, and user authorisation",
      "On-prem and cloud (AWS/Azure) migration experience",
    ],
  },
  {
    code: "CS_06",
    title: "Salesforce Developer",
    experience: "3–5 yrs",
    description:
      "Full software development lifecycle across Salesforce Lightning and a broad engineering stack, from modelling to UI.",
    skills: [
      "Lightning Components — Aura framework, custom JavaScript",
      "C++, C#, .NET, VB/VBA across engineering applications",
      "SQL, MongoDB, and data visualisation tooling",
      "Agile practice — Jira, Bitbucket, Git, Confluence",
      "3D CAD/CFD linkage and simulation-tool development",
    ],
  },
];

function RoleRow({ role, index, isOpen, onToggle }) {
  return (
    <li className="careers-role">
      <button
        type="button"
        className={`careers-role__row${isOpen ? " is-open" : ""}`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="careers-role__index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="careers-role__code">{role.code}</span>
        <span className="careers-role__title">{role.title}</span>
        <span className="careers-role__exp">{role.experience}</span>
        <span className="careers-role__chevron" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="careers-role__panel">
          <p className="careers-role__description">{role.description}</p>

          <span className="careers-role__subhead">
            Roles &amp; Responsibilities
          </span>
          <ul className="careers-role__skills">
            {role.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <div className="careers-role__actions">
            <button type="button" className="btn-primary">
              Apply
            </button>
            <button type="button" className="btn-secondary">
              Refer a Friend
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default function CareersPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="careers-page">
      <style>{`
        .careers-page {
          background: #ffffff;
          color: var(--navy-text);
        }

        .careers-page * { box-sizing: border-box; }

        .careers-container {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* ---------- HERO ---------- */
        .careers-hero {
          padding: clamp(6rem, 10vw, 9rem) 0 3.5rem;
          text-align: center;
        }
        .careers-hero h1 {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin: 0 auto 1.5rem;
          max-width: 780px;
          color: var(--navy-text);
        }

        .careers-hero p {
          font-family: var(--font-body);
          font-size: 1.08rem;
          line-height: 1.85;
          color: var(--steel-blue);
          max-width: 740px;
          margin: 0 auto;
        }

        .careers-hero__badges {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 2rem;
        }

        .careers-hero__badge {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1rem;
          background: var(--tint-teal-soft, var(--pale-blue)); ;
          color: var(--dark);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.03em;
        }

        /* ---------- ROLE LIST (accordion) ---------- */
        .careers-roles {
          padding: 1rem 0 4.5rem;
        }

        .careers-roles__heading {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 1.5rem;
          margin: 0 0 1.75rem;
          color: var(--navy-text);
        }

        .careers-role-list {
          list-style: none;
          margin: 0;
          padding: 0;
          border-top: 1px solid var(--border-on-light);
        }

        .careers-role {
          border-bottom: 1px solid var(--border-on-light);
        }

        .careers-role__row {
          width: 100%;
          display: flex;
          align-items: baseline;
          gap: 1.5rem;
          padding: 1.6rem 0.5rem;
          border: none;
          background: transparent;
          cursor: pointer;
          text-align: left;
          font-family: var(--font-body);
          transition: 0.2s ease;
        }

        .careers-role__row:hover,
        .careers-role__row.is-open {
          background: var(--tint-blue-pale, var(--pale-blue));
          padding-inline: 1.25rem;
        }

        .careers-role__index {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--tint-blue-muted, var(--steel-blue));
          flex: 0 0 auto;
        }

        .careers-role__code {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--mint-pop, var(--future-blue));
          flex: 0 0 auto;
        }

        .careers-role__title {
          flex: 1;
          font-size: 1.3rem;
          font-weight: 550;
          color: var(--navy-text);
        }

        .careers-role__row.is-open .careers-role__title {
          color: var(--space-grey);
        }

        .careers-role__exp {
          flex: 0 0 auto;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--tint-blue-muted, var(--steel-blue));
        }

        .careers-role__chevron {
          flex: 0 0 auto;
          font-size: 1.3rem;
          font-weight: 400;
          color: var(--mint-pop, var(--future-blue));
          width: 20px;
          text-align: center;
        }

        .careers-role__panel {
          padding: 0.5rem 1.25rem 2.25rem;
        }

        .careers-role__description {
          font-size: 0.98rem;
          line-height: 1.75;
          color: var(--steel-blue);
          margin: 0 0 1.25rem;
          max-width: 68ch;
        }

        .careers-role__subhead {
          display: block;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--space-grey);
          margin-bottom: 0.75rem;
        }

        .careers-role__skills {
          list-style: none;
          margin: 0 0 1.75rem;
          padding: 0;
          max-width: 68ch;
        }

        .careers-role__skills li {
          font-size: 0.92rem;
          line-height: 1.7;
          color: var(--navy-text);
          padding-left: 18px;
          position: relative;
          margin-bottom: 8px;
        }

        .careers-role__skills li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.6em;
          width: 6px;
          height: 6px;
          background: var(--mint-pop, var(--future-blue));
        }

        .careers-role__actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-primary,
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          font-size: 0.9rem;
          font-family: var(--font-body);
          border: none;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .btn-primary {
          background: var(--mint-pop);
          color: var(--space-grey);
          border: 1px solid var(--mint-deep, var(--future-blue));
        }

        .btn-primary:hover {
          background: var(--mint-deep);
        } 

        .btn-secondary {
          background: transparent;
          color: var(--space-grey);
          border: 1px solid var(--border-on-light, #d8d8d8);
        }

        .btn-secondary:hover {
          border-color: var(--space-grey);
          background: rgba(65, 85, 100, 0.05);
          color: var(--space-grey);
        }

        /* ---------- CLOSING CTA (same gradient family as about-highlight) ---------- */
        .careers-cta {
          text-align: center;
          padding: 5.5rem 2rem;
          background: linear-gradient(135deg, var(--space-grey) 0%, var(--future-blue) 100%);
        }

        .careers-cta h2 {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(1.8rem, 3.6vw, 2.4rem);
          color: #ffffff;
          margin: 0 auto;
          max-width: 22ch;
        }

        .careers-cta__actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 2.25rem;
        }

        .careers-cta .btn-primary {
          background: #ffffff;
          color: var(--space-grey);
          border-color: #ffffff;
        }

        .careers-cta .btn-primary:hover { background: var(--tint-blue-pale, var(--pale-blue)); }

        .careers-cta .btn-secondary {
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.5);
        }

        .careers-cta .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #ffffff;
        }

        @media (max-width: 640px) {
          .careers-role__row { flex-wrap: wrap; gap: 0.5rem 1rem; }
          .careers-role__title { flex-basis: 100%; order: 1; }
          .careers-role__exp { order: 2; }
        }
      `}</style>

      {/* ---------- HERO ---------- */}
      <section className="careers-hero">
        <div className="careers-container">
          <h1>Build what's next in enterprise transformation.</h1>
          <p>
            We're an equal opportunity employer that values every background,
            perspective, and identity our team brings. If you're motivated by
            solving real problems for enterprise clients, we'd like to hear from
            you.
          </p>
          <div className="careers-hero__badges">
            <span className="careers-hero__badge">
              Equal Opportunity Employer
            </span>
            <span className="careers-hero__badge">
              Hybrid &amp; On-site Roles
            </span>
            <span className="careers-hero__badge">India &amp; UK</span>
          </div>
        </div>
      </section>

      {/* ---------- OPEN ROLES ---------- */}
      <section className="careers-roles">
        <div className="careers-container">
          <h2 className="careers-roles__heading">Open Roles</h2>
          <ul className="careers-role-list">
            {ROLES.map((role, index) => (
              <RoleRow
                key={role.code}
                role={role}
                index={index}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
