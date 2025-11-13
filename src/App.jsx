// Custom SVG Icons
const IconClock = () => {
  const gradientId = `iconGradient-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#00E0FF", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#8B5CF6", stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
      <path d="M12 6v6l4 2" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

const IconLock = () => {
  const gradientId = `iconGradient-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#00E0FF", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#8B5CF6", stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <rect x="5" y="11" width="14" height="10" rx="2" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
      <path d="M9 11V7a3 3 0 0 1 6 0v4" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

const IconMessage = () => {
  const gradientId = `iconGradient-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#00E0FF", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#8B5CF6", stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
    </svg>
  );
};

const IconGear = () => {
  const gradientId = `iconGradient-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#00E0FF", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#8B5CF6", stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="3" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
      <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

const IconVideo = () => {
  const gradientId = `iconGradient-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#00E0FF", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#8B5CF6", stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M23 7l-7 5 7 5V7z" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
      <rect x="1" y="5" width="15" height="14" rx="2" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
    </svg>
  );
};

const IconCheck = () => {
  const gradientId = `iconGradient-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#00E0FF", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#8B5CF6", stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M20 6L9 17l-5-5" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

const IconPaint = () => {
  const gradientId = `iconGradient-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#00E0FF", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#8B5CF6", stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M18.37 2.63L14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l5 5 1.59-1.59a2 2 0 0 0 0-2.82L14 7l4.37-4.37a2.12 2.12 0 1 1 3 3z" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
      <path d="M9 13l-5 5a2 2 0 0 0 0 2.82L4 22l5-5" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
    </svg>
  );
};

const IconLightning = () => {
  const gradientId = `iconGradient-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#00E0FF", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#8B5CF6", stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

const IconLocation = () => {
  const gradientId = `iconGradient-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#00E0FF", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#8B5CF6", stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
      <circle cx="12" cy="10" r="3" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
    </svg>
  );
};

const IconStar = () => {
  const gradientId = `iconGradient-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#00E0FF", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#8B5CF6", stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
    </svg>
  );
};

const IconSearch = () => {
  const gradientId = `iconGradient-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#00E0FF", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#8B5CF6", stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <circle cx="11" cy="11" r="8" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
      <path d="m21 21-4.35-4.35" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

const IconCart = () => {
  const gradientId = `iconGradient-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#00E0FF", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#8B5CF6", stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
      <path d="M20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
    </svg>
  );
};

const IconDocument = () => {
  const gradientId = `iconGradient-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#00E0FF", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#8B5CF6", stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
      <path d="M14 2v6h6" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 13H8" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 17H8" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round"/>
      <path d="M10 9H8" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

const IconPackage = () => {
  const gradientId = `iconGradient-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#00E0FF", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#8B5CF6", stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
      <path d="M3.27 6.96L12 12.01l8.73-5.05" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 22.08V12" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

const IconRobot = () => {
  const gradientId = `iconGradient-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#00E0FF", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#8B5CF6", stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <rect x="5" y="2" width="14" height="20" rx="2" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
      <circle cx="9" cy="8" r="1.5" fill={`url(#${gradientId})`}/>
      <circle cx="15" cy="8" r="1.5" fill={`url(#${gradientId})`}/>
      <path d="M9 14h6" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 2v4" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

const metaCards = [
  { label: "Proposal", value: "Phase 1 Launch + Strategic Roadmap" },
  { label: "Prepared For", value: "WePrintCustomTees" },
  { label: "Prepared By", value: "AuxiliumIO" },
  { label: "Date", value: "November 12, 2025" },
];

const phaseOneItems = [
  {
    title: "AI Image Generation in Customizer",
    description:
      "Audit your current product customizer and implement an AI Generate workflow inside the existing UI. Customers can ideate, preview, and apply artwork without leaving the purchase path.",
    bullets: [
      "Evaluate watermark-free, commercial-use AI models and licensing",
      "Prototype UX for prompt input, image selection, and garment placement",
      "Modify plugin or craft lightweight integration to support image layering",
    ],
  },
  {
    title: "Site Optimization & Service Positioning",
    description:
      "Extend your existing website with high-impact polish—clear services, updated visuals, and conversion-led messaging for screen printing, embroidery, and DTG.",
    bullets: [
      "Content and CTA refresh anchored to your nationwide value proposition",
      "Performance and accessibility tune-up for faster browsing",
      "Embed AI-powered hero and showcase modules to spotlight innovation",
    ],
  },
  {
    title: "Google Business Profile Launch",
    description:
      "Stand up and optimize GBP to capture local and regional demand, ensuring consistent NAP data, service areas, and visual assets.",
    bullets: [
      "Verification support, keyword-rich descriptions, and service highlights",
      "Posts cadence to reinforce AI-enabled offerings",
      "Tracking set-up for calls, clicks, and direction requests",
    ],
  },
  {
    title: "Automated Review Flywheel",
    description:
      "Deliver a review request system tuned to call-in and in-person customers using QR inserts, SMS/email nudges, and Wave invoice prompts.",
    bullets: [
      "Design print collateral with QR codes tied to Google reviews",
      "Embed frictionless review prompts into Wave payment experiences",
      "Dashboard visibility into review velocity and response cadence",
    ],
  },
];

const phaseTwoItems = [
  {
    title: "Organic SEO Engine",
    description:
      "Build a deep content strategy covering buyer personas, nationwide verticals, and technical schema to rank across AI-enhanced print searches.",
    bullets: [
      "Keyword clusters for screen printing, DTG, embroidery, and AI customization",
      "Editorial calendar for blogs, FAQs, and long-form guides",
      "Technical SEO (core vitals, structured data, sitemap cadence)",
    ],
  },
  {
    title: "Marketplace Expansion Playbook",
    description:
      "Structure your catalog for TikTok Shop, Google Shopping, and Amazon with unified data governance and creative guidelines.",
    bullets: [
      "Listing optimization templates and AI-driven creative prompts",
      "Channel-specific compliance (brand registry, tax, fulfillment)",
      "Performance dashboards consolidating channel metrics",
    ],
  },
  {
    title: "Content Strategy & Creative Support",
    description:
      "Provide campaign ideas, scripts, and prompts while your team retains creative control. Align every asset with SEO and brand authority goals.",
    bullets: [
      "Monthly creative sync for campaigns and seasonal pushes",
      "Shared storyboard and asset checklist for internal production",
      "AI prompt library for rapid mockups and concept art",
    ],
  },
];

const phaseThreeItems = [
  {
    title: "Unified Order Aggregation",
    description:
      "Evaluate OMS integrations or custom middleware to centralize orders across your site, TikTok Shop, Google, Amazon, and offline intake.",
    bullets: [
      "Requirements gathering with your fulfillment and production leads",
      "System comparison (e.g., Order Desk, SKUs IQ, custom Node/NetSuite bridge)",
      "Automation roadmap for invoicing, art approvals, and status updates",
    ],
  },
  {
    title: "AI-Driven Internal Efficiencies",
    description:
      "Layer AI copilot tools for artwork proofing, job ticketing, and production scheduling once multi-channel demand scales.",
    bullets: [
      "Automated art rejection criteria and proof versioning",
      "Predictive scheduling tied to production capacity",
      "Inventory sync with supplier lead-time intelligence",
    ],
  },
];

const timeline = [
  {
    label: "5–7 Days",
    description:
      "Technical audit, AI customizer prototype, GBP setup, initial review collateral design.",
  },
  {
    label: "7–10 Days",
    description:
      "AI integration merged, website optimizations live, SEO/marketplace foundations in motion, automated review system deployed.",
  },
  {
    label: "2–3 Days",
    description:
      "Final asset swaps, QA, training session, and go-live polish ahead of review/launch cadence.",
  },
];

const definitionOfDone = [
  {
    title: "AI Customizer Ready for Customers",
    description:
      "AI Generate button live within the existing product customizer, commercial-use model confirmed, training content delivered, and analytics tied to usage.",
  },
  {
    title: "Website & GBP Optimized",
    description:
      "Updated copy, visuals, and CTAs across key pages with Lighthouse, accessibility, and schema checks completed; GBP verified and enhanced.",
  },
  {
    title: "Review Engine Live",
    description:
      "QR collateral delivered, Wave invoice prompts activated, and dashboard tracking review submissions and responses.",
  },
  {
    title: "Phase 2 Roadmap Aligned",
    description:
      "SEO content calendar, marketplace integration checklist, and creative collaboration framework confirmed.",
  },
];

const nextSteps = [
  "Confirm Phase 1 scope, pricing, and expedited timeline.",
  "Share current site assets, customizer details, and platform credentials.",
  "Kickoff call to align AI workflow, SEO roadmap, and marketplace priorities.",
  "Schedule live training and set up shared dashboards for launch tracking.",
  "Review final deliverables, approve go-live, and select ongoing support plan.",
];

function Section({ title, summary, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {summary && (
        <div className="section-description">
          <p>{summary}</p>
        </div>
      )}
      {children}
    </section>
  );
}

function CardList({ items }) {
  const getIcon = (title) => {
    const iconMap = {
      "AI Image Generation in Customizer": <IconPaint />,
      "Site Optimization & Service Positioning": <IconLightning />,
      "Google Business Profile Launch": <IconLocation />,
      "Automated Review Flywheel": <IconStar />,
      "Organic SEO Engine": <IconSearch />,
      "Marketplace Expansion Playbook": <IconCart />,
      "Content Strategy & Creative Support": <IconDocument />,
      "Unified Order Aggregation": <IconPackage />,
      "AI-Driven Internal Efficiencies": <IconRobot />,
    };
    return iconMap[title] || <IconGear />;
  };

  return (
    <div className="card-grid">
      {items.map(({ title, description, bullets }) => (
        <div className="card" key={title}>
          <div className="card-content">
            <div className="card-icon">{getIcon(title)}</div>
            <div className="card-text">
              <h3>{title}</h3>
              <p>{description}</p>
              {bullets && (
                <ul>
                  {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="page">
      <header>
        <div className="logo-container">
          <img src="/Auxilium Logo 320 x 132.png" alt="AuxiliumIO" style={{ height: "50px", width: "auto" }} />
        </div>
        <div className="tagline" style={{ marginTop: "-16px", marginBottom: "8px" }}>
          We make it simple. What is your IT?
        </div>
        <div className="badge">
          <span />
          Weprint Custom Tees & AuxiliumIO
        </div>
        <h1>
          Advanced AI Integration & Multi-Channel Growth for{" "}
          <span className="highlight">WePrintCustomTees</span>
        </h1>
        <p>
          Fast, professional solution for your custom print business. You own the code. Not us.
        </p>
        <div className="meta-grid">
          {metaCards.map(({ label, value }) => (
            <div className="meta-card" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </header>

      <Section
        title="Core Objective"
        summary="Establish WePrintCustomTees as a leading, nationwide one-stop print shop by integrating
          advanced AI customization directly into your existing website, optimizing for organic
          search visibility, and expanding sales across multiple online platforms with streamlined
          order management."
      >
      </Section>

      <Section
        title="What Makes This Different"
        summary="You own the code. Not us. We build AI-powered customization, organic growth systems, and
          multi-channel integrations that work—cleanly, clearly, and consistently. When we're
          done, you get the full solution that any developer can maintain."
      >
      </Section>

      <Section
        title="Trust Commitments"
        summary="Our promises to you"
      >
        <div className="card-grid">
          <div className="card">
            <div className="card-content">
              <div className="card-icon"><IconClock /></div>
              <div className="card-text">
                <h3>On-Time Delivery</h3>
                <p>
                  We commit to the agreed timeline. Expedited delivery means we start immediately and
                  ship on schedule.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-icon"><IconLock /></div>
              <div className="card-text">
                <h3>Code Ownership — No Lock-In</h3>
                <p>
                  Full handoff and documentation. You own everything, forever. No gated tooling, no
                  hidden platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-icon"><IconMessage /></div>
              <div className="card-text">
                <h3>Clear, Proactive Communication</h3>
                <p>
                  Houston-based team in your time zone. Fast responses, clear project cadence, and
                  accountable follow-through.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-icon"><IconGear /></div>
              <div className="card-text">
                <h3>Quality-First Engineering</h3>
                <p>
                  Accessibility, performance budgets, maintainable code. We translate technology into
                  business growth that actually works.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-icon"><IconVideo /></div>
              <div className="card-text">
                <h3>Training & Support After Launch</h3>
                <p>
                  We set you up to succeed. Live training, documentation, and ongoing support options
                  available.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-icon"><IconCheck /></div>
              <div className="card-text">
                <h3>Transparent Pricing & Scope</h3>
                <p>
                  Fixed pricing, clear deliverables, no surprises. You know exactly what you're getting
                  and when.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Phase 1 — Foundation & Core Integration">
        <CardList items={phaseOneItems} />
      </Section>

      <Section title="Phase 2 — Organic Go-To-Market & Multi-Channel Expansion">
        <CardList items={phaseTwoItems} />
      </Section>

      <Section title="Phase 3 — Operational Streamlining (Future Consideration)">
        <CardList items={phaseThreeItems} />
      </Section>

      <Section title="Timeline">
        <p>Expedited delivery to get you live fast</p>
        <div className="timeline">
          {timeline.map(({ label, description }) => (
            <div className="timeline-card" key={label}>
              <strong>{label}</strong>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Definition of Done — Phase 1">
        <p>What must be delivered and accepted for Phase 1 to be complete:</p>
        <div className="list-stack">
          {definitionOfDone.map(({ title, description }, index) => (
            <div className="item" key={title}>
              <div className="card-content">
                <div className="card-icon"><IconCheck /></div>
                <div className="card-text">
                  <strong>{title}</strong>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Investment">
        <div className="pricing-card">
          <h3>Phase 1 — Foundation & Core Integration</h3>
          <div className="pricing-details">
            <div style={{ fontSize: "20px", marginBottom: "8px" }}>
              <strong>$4,500</strong> fixed price
            </div>
            <div style={{ fontSize: "14px", marginBottom: "16px", opacity: 0.9 }}>
              Expedited timeline included
            </div>
            <div>
              Includes AI customizer integration, website optimization, GBP launch, and automated
              review system with one revision cycle post-launch.
            </div>
          </div>
          <div className="pricing-divider" />
          <div className="pricing-details">
            <div>
              <strong>Phase 2 & Phase 3</strong> scoped post-launch based on priorities.
            </div>
            <div style={{ marginTop: "12px" }}>
              Optional <strong>Auxilium Care</strong> plan for proactive updates, SEO tuning, and
              content support available starting at <strong>$1,200/month</strong>.
            </div>
          </div>
        </div>
      </Section>

      <Section title="Next Steps">
        <ol className="next-steps">
          {nextSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </Section>

      <footer>
        <div style={{ fontWeight: 600, marginBottom: "4px" }}>AuxiliumIO</div>
        <div className="tagline" style={{ marginBottom: "8px" }}>
          We make it simple. What is your IT?
        </div>
        <div>Houston, Texas | getstarted@auxilium.io</div>
        <div style={{ marginTop: "8px", fontSize: "13px" }}>
          Proposal valid for 5 business days | Version 1.0 | Project ID: WCT-2025-P1
        </div>
      </footer>
    </div>
  );
}

