import ourStoryImg from "../assets/ourstory.png";
import ourVisionImg from "../assets/ourvision.png";
import ourValuesImg from "../assets/ourvalues.png";

export default function About() {
  return (
    <section className="about">
      <div className="page-container about-container">
        <div className="about-top">
          {/*<span className="section-tag">ABOUT COSERVE</span>*/}

          <h2>
            Building the Future of Enterprise
            <span> Through AI.</span>
          </h2>

          <p>
            At Coserve Software Solutions, we help organisations modernise,
            automate and scale through intelligent enterprise technology.
            Combining deep expertise in ERP, CRM and AI-driven solutions, we
            transform complex business challenges into measurable business
            outcomes.
          </p>
        </div>

        <div className="story-grid">
          <div className="story-card">
            <div className="card-image">
              <img src={ourStoryImg} alt="Our Story" />
            </div>

            <div className="card-content">
              <h3>OUR STORY</h3>

              <p>
                From trusted ERP and CRM implementations to AI-powered
                enterprise transformation, our journey has always been driven by
                one belief: technology should simplify business and create
                lasting value.
              </p>
            </div>
          </div>

          <div className="story-card">
            <div className="card-image">
              <img src={ourVisionImg} alt="Our Vision" />
            </div>

            <div className="card-content">
              <h3>OUR VISION</h3>

              <p>
                To become the trusted AI transformation partner for enterprises,
                combining intelligent innovation with dependable business
                systems to shape the future of digital enterprises.
              </p>
            </div>
          </div>

          <div className="story-card">
            <div className="card-image">
              <img src={ourValuesImg} alt="Our Values" />
            </div>

            <div className="card-content">
              <h3>OUR VALUES</h3>

              <p>
                We believe in purpose-driven innovation, customer-first
                thinking, thoughtful transformation and long-term partnerships
                that deliver measurable business impact.
              </p>
            </div>
          </div>
        </div>

        <div className="about-highlight">
          <div>
            <h4>AI + Enterprise Expertise</h4>
            <p>
              We bridge modern AI innovation with trusted enterprise platforms
              including Salesforce, Infor, Rootstock and Compliance Quest.
            </p>
          </div>

          <div>
            <h4>Built for Real Business</h4>
            <p>
              Every solution is designed around measurable ROI, operational
              efficiency and practical implementation rather than technology for
              its own sake.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
