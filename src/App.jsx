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

const metaCards = [
  { label: "Proposal", value: "Phase 1 Launch + Strategic Roadmap" },
  { label: "Prepared For", value: "WePrintCustomTees" },
  { label: "Prepared By", value: "AuxiliumIO" },
  { label: "Date", value: "November 18, 2025" },
];

const phaseOneItems = [
  {
    title: "AI Image Generation Engine",
    description:
      "Build a complete AI-powered image generation system integrated into your product customizer. Customers can create, customize, and apply artwork seamlessly within the purchase flow.",
    bullets: [
      "Evaluate and integrate watermark-free, commercial-use AI models with proper licensing",
      "Design intuitive UX for prompt input, image generation, selection, and editing",
      "Build image layering system for garment placement and preview",
      "Implement real-time preview with multiple design variations",
    ],
  },
  {
    title: "AI Customizer Integration",
    description:
      "Seamlessly integrate the AI tool into your existing product customizer workflow, ensuring smooth user experience from design to order.",
    bullets: [
      "Audit current customizer architecture and identify integration points",
      "Develop API connections between AI engine and customizer",
      "Create image manipulation tools (resize, position, rotate, adjust colors)",
      "Build order data capture system for print-ready file generation",
    ],
  },
  {
    title: "Print Integration & File Generation",
    description:
      "Connect the AI tool directly to WePrintCustomTees with automated order processing and print-ready file generation.",
    bullets: [
      "Automated order data transmission to WePrintCustomTees",
      "Generate print-ready files (PNG, vector formats) with proper specifications",
      "Create size and color variant handling for production",
      "Build order tracking and status updates",
    ],
  },
  {
    title: "Mobile-Responsive AI Interface",
    description:
      "Ensure the AI tool works flawlessly on mobile devices, where many customers will design their custom shirts.",
    bullets: [
      "Responsive design optimization for touch interactions",
      "Mobile-specific UI/UX enhancements for prompt input and image selection",
      "Performance optimization for mobile browsers",
      "Testing across iOS and Android devices",
    ],
  },
];

const phaseTwoItems = [
  {
    title: "Site Optimization & Service Positioning",
    description:
      "Extend your existing website with high-impact polish—clear services, updated visuals, and conversion-led messaging highlighting the new AI customizer.",
    bullets: [
      "Content and CTA refresh anchored to your nationwide value proposition",
      "Performance and accessibility tune-up for faster browsing",
      "Embed AI-powered hero and showcase modules to spotlight innovation",
      "Update service pages to highlight AI customization capabilities",
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
    label: "Week 1-2",
    description:
      "Technical audit, AI model evaluation and integration, customizer architecture review, and initial AI engine development.",
  },
  {
    label: "Week 3-4",
    description:
      "AI customizer integration, image manipulation tools, print integration with WePrintCustomTees, and mobile optimization.",
  },
  {
    label: "Week 5-6",
    description:
      "Testing, QA, performance optimization, user training, documentation, and final polish before launch.",
  },
];

const definitionOfDone = [
  {
    title: "AI Image Generation Engine Complete",
    description:
      "Fully functional AI image generation system integrated into customizer, commercial-use model confirmed and licensed, real-time preview working, and analytics tracking usage.",
  },
  {
    title: "Customizer Integration Live",
    description:
      "AI tool seamlessly integrated into existing product customizer with image manipulation tools (resize, position, rotate), order data capture working, and user flow tested end-to-end.",
  },
  {
    title: "Print Integration Operational",
    description:
      "Automated order transmission to WePrintCustomTees working, print-ready files (PNG, vector) generating correctly with proper specifications, and order tracking functional.",
  },
  {
    title: "Mobile-Responsive & Production Ready",
    description:
      "AI tool fully responsive on mobile devices, performance optimized, tested across iOS and Android, documentation complete, and team trained on system usage.",
  },
];

const nextSteps = [
  "Confirm Phase 1 scope, pricing, and expedited timeline.",
  "Share current site assets, customizer details, and platform credentials.",
  "Kickoff call to align AI workflow, SEO roadmap, and marketplace priorities.",
  "Schedule live training and set up shared dashboards for launch tracking.",
  "Review final deliverables, approve go-live, and select ongoing support plan.",
];

const heroBenefits = [
  { icon: <IconLightning />, text: "Fast — Generate designs in seconds" },
  { icon: <IconPaint />, text: "Easy — No design skills required" },
  { icon: <IconCheck />, text: "Print-ready — Direct to production" },
];

const beforeAfterSteps = [
  { step: "1", title: "Blank Shirt", description: "Start with a plain garment" },
  { step: "2", title: "AI Design", description: "Generate custom artwork with AI" },
  { step: "3", title: "Order Print", description: "Seamlessly order your design" },
];

const mvpFeatures = [
  "AI image generation in customizer",
  "Basic template library (3 style options)",
  "Mobile-responsive design",
  "Direct order integration with WePrintCustomTees",
  "Print-ready file export (PNG, vector)",
  "Basic analytics dashboard",
];

const midTierFeatures = [
  "Everything in Core AI Designer, plus:",
  "Advanced template library (10+ style categories)",
  "Style options: Streetwear / Minimal / Business / Vintage / Modern",
  "Multi-product support (shirts, hoodies, hats, etc.)",
  "Advanced AI customization (text, colors, patterns)",
  "Order management dashboard",
  "Customer design gallery",
  "Bulk order capabilities",
  "White-label options",
];

const pricingOptions = [
  {
    name: "Option 1: Core AI Designer",
    price: "$4,500",
    timeline: "4-6 weeks",
    features: [
      "AI customizer integration",
      "Basic template library (3 styles)",
      "Mobile-responsive design",
      "Print integration with WePrintCustomTees",
      "Print-ready file formats",
      "Basic analytics",
      "One revision cycle",
    ],
  },
  {
    name: "Option 2: Advanced AI Design Studio",
    price: "$8,500",
    timeline: "8-12 weeks total",
    features: [
      "Everything in Core AI Designer, plus:",
      "Advanced template library (10+ styles)",
      "Multi-product support",
      "Advanced AI customization",
      "Order management dashboard",
      "Customer design gallery",
      "Bulk order capabilities",
      "Two revision cycles",
    ],
  },
];

const workflowSteps = [
  { icon: <IconShirt />, title: "Customer Designs", description: "User creates custom design using AI" },
  { icon: <IconArrow />, title: "Order Data Sent", description: "Automated order & print files" },
  { icon: <IconPrinter />, title: "WePrintCustomTees", description: "Receives order & production files" },
  { icon: <IconPackage />, title: "Fulfillment", description: "Print, package & ship to customer" },
];

const styleOptions = [
  { name: "Streetwear", description: "Bold graphics, urban aesthetics" },
  { name: "Minimal", description: "Clean lines, simple designs" },
  { name: "Business", description: "Professional, corporate-ready" },
  { name: "Vintage", description: "Retro styles, classic looks" },
  { name: "Modern", description: "Contemporary, trend-forward" },
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

      <Section title="Build Your Custom Shirt Using AI">
        <div className="hero-section">
          <div className="hero-content">
            <h2 className="hero-title">Build Your Custom Shirt Using AI</h2>
            <p className="hero-subtitle">
              Transform your ideas into print-ready designs in seconds. No design experience needed.
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
          {beforeAfterSteps.map((item, index) => (
            <div className="before-after-step" key={index}>
              <div className="step-number">{item.step}</div>
              <div className="step-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              {index < beforeAfterSteps.length - 1 && (
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
          {styleOptions.map((style, index) => (
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
              {mvpFeatures.map((feature, index) => (
                <div className="feature-item" key={index}>
                  <IconCheck />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="feature-timeline">Timeline: 4-6 weeks</div>
          </div>
          <div className="feature-column">
            <h3 className="feature-column-title">Advanced AI Design Studio</h3>
            <div className="feature-list">
              {midTierFeatures.map((feature, index) => (
                <div className="feature-item" key={index}>
                  <IconCheck />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="feature-timeline">Timeline: Additional 4-8 weeks (8-12 weeks total)</div>
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
        <CardList items={phaseOneItems} className="phase-one-grid" />
      </Section>

      <Section title="Investment & Pricing">
        <p style={{ textAlign: "center", marginBottom: "32px", fontSize: "18px", color: "var(--text-secondary)" }}>
          Choose the option that fits your needs. Both include full code ownership and documentation.
        </p>
        <div className="pricing-table">
          {pricingOptions.map((option, index) => (
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
            <strong>Phase 2 & Phase 3</strong> scoped post-launch based on priorities.
          </p>
          <p style={{ marginTop: "12px" }}>
            Optional <strong>Auxilium Care</strong> plan for proactive updates, SEO tuning, and
            content support available starting at <strong>$1,200/month</strong>.
          </p>
        </div>
      </Section>

      <Section title="Timeline">
        <p style={{ textAlign: "center", marginBottom: "32px", fontSize: "18px", color: "var(--text-secondary)" }}>
          Expedited delivery to get you live fast
        </p>
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
        <p style={{ textAlign: "center", marginBottom: "32px", fontSize: "18px", color: "var(--text-secondary)" }}>
          What must be delivered and accepted for Phase 1 to be complete:
        </p>
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

      <Section title="Phase 2 — Organic Go-To-Market & Multi-Channel Expansion">
        <CardList items={phaseTwoItems} className="phase-two-grid" />
      </Section>

      <Section title="Phase 3 — Operational Streamlining (Future Consideration)">
        <CardList items={phaseThreeItems} />
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

