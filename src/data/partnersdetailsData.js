/**
 * Detail-page content, keyed by partner id (matches partnersData.js).
 * Starting with Salesforce only — once this page is confirmed, the same
 * shape gets filled in for infor / rootstock / compliance-quest / supervity.
 * Every section here is OPTIONAL on the page component — if a future
 * partner entry omits a field, that section just doesn't render.
 */
const PARTNER_DETAILS = {
  salesforce: {
    logo: "/assets/logos/placeholder-salesforce.svg",
    heroTitle:
      "Empower your business by harnessing the power of applications on the Salesforce platform",
    heroDescription:
      "The leader in cloud computing, Salesforce offers multiple applications for every business aspect — Marketing, Sales, Customer Service, and Business Analytics.",

    features: [
      { title: "Lead Management", description: "Capture, track, and manage leads efficiently. Automate lead assignment and follow-up processes." },
      { title: "Sales Automation", description: "Streamline your sales processes and increase productivity with accurate forecasts and reports." },
      { title: "Marketing Automation", description: "Create personalized campaigns, automate email marketing, and measure ROI." },
      { title: "Customer Service", description: "Provide exceptional support across channels with case management and self-service portals." },
      { title: "Analytics and Reporting", description: "Gain insights into sales and marketing performance with customizable dashboards." },
      { title: "Mobile App", description: "Access Salesforce on the go, collaborate, and update records in real-time." },
    ],

    industries: [
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Automotive", href: "/industries/automotive" },
      { name: "Logistics & Supply Chain", href: "/industries/logistics" },
      { name: "Electrical", href: "/industries/electrical" },
      { name: "Aerospace", href: "/industries/aerospace" },
      { name: "Defence", href: "/industries/defence" },
    ],

    expertise: [
      "Sales and Revenue Cloud",
      "Service Cloud, B2B and B2C Marketing Cloud",
      "B2B and B2C Commerce Cloud",
      "Financial Services Cloud",
      "Strategy Consulting / Digital Transformation",
      "Business Process Consulting",
      "Technical Development and Integration",
      "Application Support",
      "Data and Workflow Migration",
      "COE Creation and Management",
      "Testing & Automation Services",
    ],

    fit: {
      description:
        "Salesforce is the go-to choice for organizations wanting a single, secure, cloud-based system to manage every customer, partner, and prospect relationship.",
      points: [
        "Improve customer relationships",
        "Improve customer segmentation",
        "Manage customer data and customer support",
      ],
    },

    solutions: [
      { title: "Streamlined Sales Processes", description: "Lead management, opportunity tracking, and sales forecasting tools streamline sales processes and improve efficiency." },
      { title: "Enhanced Customer Engagement", description: "Email automation, personalized campaigns, and social integration improve engagement and nurture relationships." },
      { title: "Efficient Customer Service", description: "Case management, knowledge base, and self-service portals reduce support costs and improve satisfaction." },
      { title: "Data-Driven Decision Making", description: "Powerful analytics and reporting give real-time insight into sales, marketing, and customer behavior." },
      { title: "Collaboration and Team Productivity", description: "Chatter and Communities enable seamless collaboration across teams, departments, and partners." },
      { title: "Scalability and Flexibility", description: "As a cloud platform, Salesforce scales with growing data volumes, users, and new functionality." },
      { title: "Integration Capabilities", description: "Broad third-party integration connects existing systems into one unified view of customer data." },
      { title: "Customization and AppExchange", description: "Robust customization plus a marketplace of pre-built apps extends functionality to specific needs." },
      { title: "Security and Compliance", description: "Salesforce adheres to industry standards and regulations, protecting customer data at every layer." },
    ],
  },
};

export default PARTNER_DETAILS;