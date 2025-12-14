// Import proposal configuration
import getProposalConfig from './config/proposalConfig';

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

const IconShirt = () => {
  const gradientId = `iconGradient-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#00E0FF", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#8B5CF6", stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M20 7h-3l-1-4H8L7 7H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
      <path d="M12 7v14" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

const IconArrow = () => {
  const gradientId = `iconGradient-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#00E0FF", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#8B5CF6", stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M5 12h14M12 5l7 7-7 7" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

const IconPrinter = () => {
  const gradientId = `iconGradient-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#00E0FF", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#8B5CF6", stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
      <path d="M6 14h12v8H6z" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
    </svg>
  );
};

// Helper function to get workflow icon by title
function getWorkflowIcon(title) {
  const titleLower = title.toLowerCase();
  if (titleLower.includes("design") || titleLower.includes("product setup") || titleLower.includes("customer")) {
    return <IconShirt />;
  }
  if (titleLower.includes("order") && titleLower.includes("sent")) {
    return <IconArrow />;
  }
  if (titleLower.includes("order") && (titleLower.includes("customer") || titleLower.includes("processing"))) {
    return <IconCart />;
  }
  if (titleLower.includes("weprint") || titleLower.includes("print")) {
    return <IconPrinter />;
  }
  if (titleLower.includes("fulfill") || titleLower.includes("shipping") || titleLower.includes("delivery")) {
    return <IconPackage />;
  }
  return <IconArrow />;
}

// Helper function to get hero benefit icon by text
function getHeroIcon(text) {
  if (text.includes("Fast") || text.includes("Complete")) return <IconLightning />;
  if (text.includes("Easy") || text.includes("Scalable")) return <IconPaint />;
  if (text.includes("Print-ready") || text.includes("Owned")) return <IconCheck />;
  return <IconCheck />;
}

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

function CardList({ items, className }) {
  const getIcon = (title) => {
    const iconMap = {
      "AI Image Generation Engine": <IconPaint />,
      "AI Customizer Integration": <IconPaint />,
      "Print Integration & File Generation": <IconPrinter />,
      "Mobile-Responsive AI Interface": <IconRobot />,
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
    <div className={`card-grid ${className || ""}`}>
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
  // Load proposal configuration
  const config = getProposalConfig();
  
  // Map config data to component structure
  const metaCards = [
    { label: "Proposal", value: config.meta.proposalType },
    { label: "Prepared For", value: config.meta.clientName },
    { label: "Prepared By", value: config.meta.preparedBy },
    { label: "Date", value: config.meta.date },
  ];
  
  const heroBenefits = config.hero.benefits.map(b => ({
    icon: getHeroIcon(b.text),
    text: b.text
  }));
  
  const workflowSteps = config.workflow.map(w => ({
    icon: getWorkflowIcon(w.title),
    title: w.title,
    description: w.description
  }));
  
  return (
    <div className="page">
      <header>
        <div className="logo-container">
          <img src="/Auxilium Logo 320 x 132.png" alt="AuxiliumIO" style={{ height: "50px", width: "auto" }} />
        </div>
        <div className="tagline" style={{ marginTop: "-16px", marginBottom: "8px" }}>
          {config.footer.tagline}
        </div>
        <div className="badge">
          <span />
          {config.meta.badgeText}
        </div>
        <h1>
          {config.header.title}{" "}
          <span className="highlight">{config.header.highlightedText}</span>
        </h1>
        <p>
          {config.header.description}
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

      <Section title={config.hero.title}>
        <div className="hero-section">
          <div className="hero-content">
            <h2 className="hero-title">{config.hero.title}</h2>
            <p className="hero-subtitle">
              {config.hero.subtitle}
            </p>
            <div className="hero-benefits">
              {heroBenefits.map((benefit, index) => (
                <div className="hero-benefit" key={index}>
                  <div className="hero-benefit-icon">{benefit.icon}</div>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="How It Works">
        <div className="before-after">
          {config.howItWorks.map((item, index) => (
            <div className="before-after-step" key={index}>
              <div className="step-number">{item.step}</div>
              <div className="step-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              {index < config.howItWorks.length - 1 && (
                <div className="step-arrow">
                  <IconArrow />
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Template & Style Options">
        <p style={{ textAlign: "center", marginBottom: "32px", fontSize: "18px", color: "var(--text-secondary)" }}>
          Choose from multiple style categories to match your vision. Even in Core AI Designer, you can preview future upgrade options.
        </p>
        <div className="style-grid">
          {config.styleOptions.map((style, index) => (
            <div className="style-card" key={index}>
              <h3>{style.name}</h3>
              <p>{style.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Feature Comparison: Core AI Designer vs Advanced AI Design Studio">
        <div className="feature-comparison">
          <div className="feature-column">
            <h3 className="feature-column-title">Core AI Designer</h3>
            <div className="feature-list">
              {config.coreFeatures.mvp.map((feature, index) => (
                <div className="feature-item" key={index}>
                  <IconCheck />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="feature-timeline">Timeline: {config.pricing[0]?.timeline || "4-6 weeks"}</div>
          </div>
          <div className="feature-column">
            <h3 className="feature-column-title">Advanced AI Design Studio</h3>
            <div className="feature-list">
              {config.coreFeatures.advanced.map((feature, index) => (
                <div className="feature-item" key={index}>
                  <IconCheck />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="feature-timeline">Timeline: {config.pricing[1]?.timeline || "Additional 4-8 weeks (8-12 weeks total)"}</div>
          </div>
        </div>
      </Section>

      <Section title="Print Integration & Workflow">
        <p style={{ textAlign: "center", marginBottom: "32px", fontSize: "18px", color: "var(--text-secondary)" }}>
          Seamless connection from customer design to print fulfillment
        </p>
        <div className="workflow-diagram">
          {workflowSteps.map((step, index) => (
            <div className="workflow-step" key={index}>
              <div className="workflow-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < workflowSteps.length - 1 && (
                <div className="workflow-connector">
                  <IconArrow />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="workflow-details">
          <div className="workflow-detail-card">
            <h4>Print-Ready File Formats</h4>
            <ul>
              <li>PNG (high-resolution, transparent background)</li>
              <li>Vector formats (SVG, EPS for scaling)</li>
              <li>Size variants (S, M, L, XL placement guides)</li>
              <li>Color specifications (CMYK for print, RGB for preview)</li>
            </ul>
          </div>
          <div className="workflow-detail-card">
            <h4>Automated Order Flow</h4>
            <ul>
              <li>Customer completes design → Order data captured</li>
              <li>Print files automatically generated and formatted</li>
              <li>Order sent to WePrintCustomTees with all specifications</li>
              <li>Production-ready files include size, color, and placement data</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title={config.sections.coreObjective.title}
        summary={config.sections.coreObjective.summary}
      >
      </Section>

      <Section
        title={config.sections.differentiator.title}
        summary={config.sections.differentiator.summary}
      >
      </Section>

      <Section
        title={config.sections.trustCommitments.title}
        summary={config.sections.trustCommitments.summary}
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

      <Section title="Phase 1 — AI Tool Development">
        <CardList items={config.phase1} className="phase-one-grid" />
      </Section>

      <Section title="Investment & Pricing">
        <p style={{ textAlign: "center", marginBottom: "32px", fontSize: "18px", color: "var(--text-secondary)" }}>
          Choose the option that fits your needs. Both include full code ownership and documentation.
        </p>
        <div className="pricing-table">
          {config.pricing.map((option, index) => (
            <div className="pricing-option-card" key={index}>
              <div className="pricing-option-header">
                <h3>{option.name}</h3>
                <div className="pricing-option-price">{option.price}</div>
                <div className="pricing-option-timeline">{option.timeline}</div>
              </div>
              <div className="pricing-option-features">
                <ul>
                  {option.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <IconCheck />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="pricing-note">
          <p>
            <strong>{config.pricingNotes.phase2}</strong>
          </p>
          <p style={{ marginTop: "12px" }}>
            {config.pricingNotes.carePlan}
          </p>
        </div>
      </Section>

      <Section title="Timeline">
        <p style={{ textAlign: "center", marginBottom: "32px", fontSize: "18px", color: "var(--text-secondary)" }}>
          Expedited delivery to get you live fast
        </p>
        <div className="timeline">
          {config.timeline.map(({ label, description }) => (
            <div className="timeline-card" key={label}>
              <strong>{label}</strong>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Definition of Done — Phase 1">
        <p style={{ textAlign: "center", marginBottom: "32px", fontSize: "18px", color: "var(--text-secondary)" }}>
          What must be delivered and accepted for Phase 1 to be complete:
        </p>
        <div className="list-stack">
          {config.definitionOfDone.map(({ title, description }, index) => (
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

      <Section title="Phase 2 — Organic Go-To-Market & Multi-Channel Expansion">
        <CardList items={config.phase2} className="phase-two-grid" />
      </Section>

      <Section title="Phase 3 — Operational Streamlining (Future Consideration)">
        <CardList items={config.phase3} />
      </Section>

      <Section title="Next Steps">
        <ol className="next-steps">
          {config.nextSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </Section>

      <footer>
        <div style={{ fontWeight: 600, marginBottom: "4px" }}>{config.footer.company}</div>
        <div className="tagline" style={{ marginBottom: "8px" }}>
          {config.footer.tagline}
        </div>
        <div>{config.footer.location} | {config.footer.email}</div>
        <div style={{ marginTop: "8px", fontSize: "13px" }}>
          {config.footer.validity}
        </div>
      </footer>
    </div>
  );
}

