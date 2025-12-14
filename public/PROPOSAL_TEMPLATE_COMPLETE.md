# Auxilium.io Proposal Template System
**Complete Design System & Template for Quick Proposal Creation**

---

## 🎨 Color Scheme & CSS Variables

```css
:root {
  /* Auxiliumio Brand Colors */
  --auxilium-slate: #1c1f26;
  --electric-blue: #007bff;
  --white-smoke: #f5f5f5;
  --jet-gray: #3a3a3a;
  --neon-cyan: #00e0ff;
  --purple: #8b5cf6;
  
  /* Logo Gradient Colors */
  --gradient-start: #00e0ff;
  --gradient-end: #8b5cf6;
  
  /* Semantic Variables - Dark Theme */
  --bg-primary: #0a0d14;
  --bg-card: rgba(20, 25, 35, 0.85);
  --bg-card-solid: #141923;
  --bg-header: var(--auxilium-slate);
  --text-primary: #f5f8fc;
  --text-secondary: #c2c8d6;
  --text-muted: #97a1b5;
  --accent: var(--electric-blue);
  --accent-soft: rgba(0, 123, 255, 0.1);
  --border: rgba(58, 58, 58, 0.15);
  --highlight: var(--neon-cyan);
}
```

### Color Usage Reference
- **Primary Background**: `--bg-primary` (#0a0d14) - Main page background
- **Card Background**: `--bg-card` - Glass-morphism cards with backdrop blur
- **Primary Text**: `--text-primary` (#f5f8fc) - Headings and main text
- **Secondary Text**: `--text-secondary` (#c2c8d6) - Descriptions and body text
- **Muted Text**: `--text-muted` (#97a1b5) - Labels and metadata
- **Accent**: `--electric-blue` (#007bff) - Buttons, links, highlights
- **Gradient**: `linear-gradient(135deg, #00e0ff, #8b5cf6)` - Logo, highlights, special elements

---

## 🖼️ Brand Assets

### Logo
- **Path**: `/Auxilium Logo 320 x 132.png`
- **Display Size**: `height: 50px, width: auto`
- **Alt Text**: `AuxiliumIO`
- **Format**: PNG, 320x132px

### Brand Information
- **Company Name**: AuxiliumIO / Auxilium.io
- **Tagline**: "We make it simple. What is your IT?"
- **Location**: Houston, Texas
- **Email**: getstarted@auxilium.io

---

## 📐 Typography

### Font Stack
```css
font-family: "Poppins", "Source Sans Pro", "Inter", system-ui, -apple-system, sans-serif;
```

### Font Usage
- **Headings (H1-H2)**: Poppins, 600-700 weight
- **Body Text**: Source Sans Pro / Inter, 400 weight
- **Meta/Labels**: Inter, 400 weight, 13px, uppercase with letter-spacing

### Google Fonts Import
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&family=Source+Sans+Pro:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## 🎯 Proposal Structure Template

### Header Section
```
┌─────────────────────────────────────────┐
│  [Auxilium Logo]                        │
│  "We make it simple. What is your IT?"  │
│  ┌───────────────────────────────────┐  │
│  │  [Badge] Client & AuxiliumIO      │  │
│  └───────────────────────────────────┘  │
│                                         │
│  Main Title with                         │
│  Highlighted Client Name                 │
│                                         │
│  Subtitle description                    │
│                                         │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  │
│  │Meta  │ │Meta  │ │Meta  │ │Meta  │  │
│  │Card  │ │Card  │ │Card  │ │Card  │  │
│  └──────┘ └──────┘ └──────┘ └──────┘  │
└─────────────────────────────────────────┘
```

**Meta Cards Structure:**
- Proposal: [Proposal Type]
- Prepared For: [Client Name]
- Prepared By: AuxiliumIO
- Date: [Date]

---

### Hero Section
```
┌─────────────────────────────────────────┐
│  Hero Title (Large, Gradient)           │
│                                         │
│  Hero Subtitle                          │
│                                         │
│  ┌──────────┐ ┌──────────┐ ┌─────────┐ │
│  │ [Icon]   │ │ [Icon]   │ │ [Icon]  │ │
│  │ Benefit  │ │ Benefit  │ │ Benefit │ │
│  └──────────┘ └──────────┘ └─────────┘ │
└─────────────────────────────────────────┘
```

---

### How It Works Section
```
┌─────────┐  →  ┌─────────┐  →  ┌─────────┐
│ Step 1  │     │ Step 2  │     │ Step 3  │
│ Title   │     │ Title   │     │ Title   │
│ Desc    │     │ Desc    │     │ Desc    │
└─────────┘     └─────────┘     └─────────┘
```

**Structure:**
- Numbered circles with gradient background
- Card containers with title and description
- Arrow connectors between steps

---

### Style Options Grid
```
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Style 1 │ │ Style 2 │ │ Style 3 │
│ Desc    │ │ Desc    │ │ Desc    │
└─────────┘ └─────────┘ └─────────┘
┌─────────┐ ┌─────────┐
│ Style 4 │ │ Style 5 │
│ Desc    │ │ Desc    │
└─────────┘ └─────────┘
```

**Card Style:**
- Background: `var(--bg-card)` with backdrop blur
- Border: `1px solid rgba(255, 255, 255, 0.1)`
- Border-radius: `16px`
- Padding: `24px`
- Hover effect: border color change + transform translateY

---

### Feature Comparison Section
```
┌─────────────────────┐  ┌─────────────────────┐
│ Core Package        │  │ Advanced Package    │
├─────────────────────┤  ├─────────────────────┤
│ ✓ Feature 1         │  │ ✓ Feature 1         │
│ ✓ Feature 2         │  │ ✓ Feature 2         │
│ ✓ Feature 3         │  │ ✓ Feature 3         │
│                     │  │ ✓ Advanced Feature  │
│ Timeline: X weeks   │  │ Timeline: X weeks   │
└─────────────────────┘  └─────────────────────┘
```

---

### Workflow Diagram
```
┌──────────┐  →  ┌──────────┐  →  ┌──────────┐  →  ┌──────────┐
│  [Icon]  │     │  [Icon]  │     │  [Icon]  │     │  [Icon]  │
│  Title   │     │  Title   │     │  Title   │     │  Title   │
│  Desc    │     │  Desc    │     │  Desc    │     │  Desc    │
└──────────┘     └──────────┘     └──────────┘     └──────────┘
```

**Icon Mapping:**
- Designs/Products: Shirt icon
- Orders/Cart: Cart icon
- Processing: Package icon
- Print/Production: Printer icon
- Shipping: Package icon
- Data/Arrow: Arrow icon

---

### Phase Cards Section
```
┌─────────────────────────────────────┐
│  Phase Title                        │
├─────────────────────────────────────┤
│  ┌──────────┐ ┌──────────┐         │
│  │ [Icon]   │ │ [Icon]   │         │
│  │ Item 1   │ │ Item 2   │         │
│  │ Desc     │ │ Desc     │         │
│  │ • Bullet │ │ • Bullet │         │
│  └──────────┘ └──────────┘         │
│  ┌──────────┐ ┌──────────┐         │
│  │ [Icon]   │ │ [Icon]   │         │
│  │ Item 3   │ │ Item 4   │         │
│  └──────────┘ └──────────┘         │
└─────────────────────────────────────┘
```

**Card Structure:**
- Icon at top (56x56px, gradient background)
- Title (18px, Poppins, 600 weight)
- Description paragraph
- Bullet list (if applicable)
- Hover: translateY(-4px), border color change, shadow

---

### Timeline Section
```
┌──────────────────────────────────────┐
│  Week 1-2                            │
│  Description of what happens...      │
└──────────────────────────────────────┘
┌──────────────────────────────────────┐
│  Week 3-4                            │
│  Description of what happens...      │
└──────────────────────────────────────┘
┌──────────────────────────────────────┐
│  Week 5-6                            │
│  Description of what happens...      │
└──────────────────────────────────────┘
```

**Timeline Card Style:**
- Background: Gradient from cyan to purple with transparency
- Border: `1px solid rgba(0, 224, 255, 0.3)`
- Padding: `26px`
- Title: 28px, gradient text, bold
- Description: Secondary text color, 17px

---

### Pricing Section
```
┌─────────────────────────┐  ┌─────────────────────────┐
│  Package Name           │  │  Package Name           │
├─────────────────────────┤  ├─────────────────────────┤
│  $X,XXX                 │  │  $X,XXX                 │
│  Timeline: X weeks      │  │  Timeline: X weeks      │
├─────────────────────────┤  ├─────────────────────────┤
│  ✓ Feature 1            │  │  ✓ Feature 1            │
│  ✓ Feature 2            │  │  ✓ Feature 2            │
│  ✓ Feature 3            │  │  ✓ Feature 3            │
│                         │  │  ✓ Advanced Feature     │
└─────────────────────────┘  └─────────────────────────┘
```

**Pricing Card Style:**
- Background: Dark slate gradient
- Border: `1px solid rgba(255, 255, 255, 0.1)`
- Price: 36px, gradient text
- Features: Check icon + feature text
- Hover: TranslateY(-4px), border glow

---

### Definition of Done Section
```
┌──────────────────────────────────────┐
│  [✓ Icon]  Title                     │
│           Description paragraph...    │
└──────────────────────────────────────┘
┌──────────────────────────────────────┐
│  [✓ Icon]  Title                     │
│           Description paragraph...    │
└──────────────────────────────────────┘
```

---

### Next Steps Section
```
┌──────────────────────────────────────┐
│  [1]  First step description...      │
└──────────────────────────────────────┘
┌──────────────────────────────────────┐
│  [2]  Second step description...     │
└──────────────────────────────────────┘
┌──────────────────────────────────────┐
│  [3]  Third step description...      │
└──────────────────────────────────────┘
```

**Next Steps Style:**
- Numbered circles (36px) with gradient background
- Card container with description
- Counter-increment for automatic numbering

---

### Footer Section
```
┌──────────────────────────────────────┐
│  AuxiliumIO                          │
│  We make it simple. What is your IT? │
│  Houston, Texas | getstarted@auxilium.io │
│  Proposal valid for X days | Version X.X | Project ID: XXX │
└──────────────────────────────────────┘
```

---

## 📋 Complete JSON Config Template

```json
{
  "id": "proposal-id",
  "meta": {
    "proposalType": "Phase 1 Launch + Strategic Roadmap",
    "clientName": "Client Name",
    "preparedBy": "AuxiliumIO",
    "date": "Month Day, Year",
    "badgeText": "Client Name & AuxiliumIO"
  },
  "header": {
    "title": "Main Title Text for",
    "highlightedText": "Client Name",
    "description": "Subtitle description text that explains the proposal value proposition."
  },
  "hero": {
    "title": "Hero Section Title",
    "subtitle": "Hero section subtitle explaining the main benefit or value.",
    "benefits": [
      { "text": "Benefit 1 — Quick description" },
      { "text": "Benefit 2 — Quick description" },
      { "text": "Benefit 3 — Quick description" }
    ]
  },
  "howItWorks": [
    { "step": "1", "title": "Step One Title", "description": "What happens in step one" },
    { "step": "2", "title": "Step Two Title", "description": "What happens in step two" },
    { "step": "3", "title": "Step Three Title", "description": "What happens in step three" }
  ],
  "styleOptions": [
    { "name": "Option 1", "description": "Description of option 1" },
    { "name": "Option 2", "description": "Description of option 2" },
    { "name": "Option 3", "description": "Description of option 3" },
    { "name": "Option 4", "description": "Description of option 4" },
    { "name": "Option 5", "description": "Description of option 5" }
  ],
  "coreFeatures": {
    "mvp": [
      "Core feature 1",
      "Core feature 2",
      "Core feature 3",
      "Core feature 4",
      "Core feature 5",
      "Core feature 6"
    ],
    "advanced": [
      "Everything in Core Package, plus:",
      "Advanced feature 1",
      "Advanced feature 2",
      "Advanced feature 3",
      "Advanced feature 4",
      "Advanced feature 5",
      "Advanced feature 6",
      "Advanced feature 7"
    ]
  },
  "workflow": [
    { "title": "Step 1 Title", "description": "What happens in this step" },
    { "title": "Step 2 Title", "description": "What happens in this step" },
    { "title": "Step 3 Title", "description": "What happens in this step" },
    { "title": "Step 4 Title", "description": "What happens in this step" }
  ],
  "sections": {
    "coreObjective": {
      "title": "Core Objective",
      "summary": "Long-form summary explaining the core objective and what the project aims to achieve for the client."
    },
    "differentiator": {
      "title": "What Makes This Different",
      "summary": "Explanation of what makes Auxilium.io's approach unique and valuable compared to alternatives."
    },
    "trustCommitments": {
      "title": "Trust Commitments",
      "summary": "Our promises to you"
    }
  },
  "phase1": [
    {
      "title": "Phase 1 Item Title",
      "description": "Description of what this phase item accomplishes.",
      "bullets": [
        "Specific deliverable or feature 1",
        "Specific deliverable or feature 2",
        "Specific deliverable or feature 3",
        "Specific deliverable or feature 4"
      ]
    }
  ],
  "phase2": [
    {
      "title": "Phase 2 Item Title",
      "description": "Description of what this phase item accomplishes.",
      "bullets": [
        "Specific deliverable or feature 1",
        "Specific deliverable or feature 2",
        "Specific deliverable or feature 3"
      ]
    }
  ],
  "phase3": [
    {
      "title": "Phase 3 Item Title",
      "description": "Description of what this phase item accomplishes.",
      "bullets": [
        "Specific deliverable or feature 1",
        "Specific deliverable or feature 2",
        "Specific deliverable or feature 3"
      ]
    }
  ],
  "timeline": [
    {
      "label": "Week 1-2",
      "description": "What happens during weeks 1-2, detailed description of deliverables and milestones."
    },
    {
      "label": "Week 3-4",
      "description": "What happens during weeks 3-4, detailed description of deliverables and milestones."
    },
    {
      "label": "Week 5-6",
      "description": "What happens during weeks 5-6, detailed description of deliverables and milestones."
    }
  ],
  "definitionOfDone": [
    {
      "title": "Deliverable 1 Complete",
      "description": "Detailed description of what constitutes completion for this deliverable, including acceptance criteria."
    },
    {
      "title": "Deliverable 2 Complete",
      "description": "Detailed description of what constitutes completion for this deliverable, including acceptance criteria."
    },
    {
      "title": "Deliverable 3 Complete",
      "description": "Detailed description of what constitutes completion for this deliverable, including acceptance criteria."
    },
    {
      "title": "Deliverable 4 Complete",
      "description": "Detailed description of what constitutes completion for this deliverable, including acceptance criteria."
    }
  ],
  "pricing": [
    {
      "name": "Option 1: Core Package Name",
      "price": "$X,XXX",
      "timeline": "X-Y weeks",
      "features": [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
        "Feature 6",
        "Feature 7"
      ]
    },
    {
      "name": "Option 2: Advanced Package Name",
      "price": "$X,XXX",
      "timeline": "X-Y weeks total",
      "features": [
        "Everything in Core Package, plus:",
        "Advanced feature 1",
        "Advanced feature 2",
        "Advanced feature 3",
        "Advanced feature 4",
        "Advanced feature 5",
        "Advanced feature 6"
      ]
    }
  ],
  "pricingNotes": {
    "phase2": "Phase 2 & Phase 3 scoped post-launch based on priorities.",
    "carePlan": "Optional Auxilium Care plan for proactive updates, SEO tuning, and content support available starting at $X,XXX/month."
  },
  "nextSteps": [
    "First next step action item.",
    "Second next step action item.",
    "Third next step action item.",
    "Fourth next step action item.",
    "Fifth next step action item."
  ],
  "footer": {
    "company": "AuxiliumIO",
    "tagline": "We make it simple. What is your IT?",
    "location": "Houston, Texas",
    "email": "getstarted@auxilium.io",
    "validity": "Proposal valid for X business days | Version X.X | Project ID: XXX-YYYY-P1"
  }
}
```

---

## 🎨 Visual Effects & Animations

### Background Effects
```css
/* Animated gradient mesh background */
background: 
  radial-gradient(circle at 20% 30%, rgba(0, 224, 255, 0.15) 0%, transparent 50%),
  radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
  radial-gradient(circle at 50% 50%, rgba(0, 224, 255, 0.08) 0%, transparent 60%),
  var(--bg-primary);
animation: meshMove 25s ease-in-out infinite;
```

### Card Hover Effects
- **Transform**: `translateY(-4px)`
- **Border**: Color change to `rgba(0, 224, 255, 0.5)`
- **Shadow**: `0 12px 32px rgba(0, 224, 255, 0.3)`
- **Background**: Slight brightness increase

### Gradient Text
```css
background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### Glass Morphism
```css
background: var(--bg-card);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

---

## 📐 Spacing & Layout

### Page Container
- **Max-width**: `1080px`
- **Padding**: `72px 32px 96px` (desktop)
- **Padding**: `56px 20px 72px` (mobile)

### Section Spacing
- **Margin-top**: `80px` between sections
- **Gap**: `24px` within sections
- **Card Gap**: `20px` between cards

### Responsive Breakpoints
- **Desktop**: `> 1200px` - 4 columns for phase cards
- **Tablet**: `768px - 1200px` - 2 columns
- **Mobile**: `< 768px` - 1 column

---

## 🔧 Quick Reference

### Icon Usage
- **Clock**: Timeline, delivery commitments
- **Lock**: Security, code ownership
- **Message**: Communication
- **Gear**: Technical implementation
- **Video**: Training, support
- **Check**: Completed items, features
- **Paint**: Design, customization
- **Lightning**: Speed, performance
- **Location**: Local presence, GBP
- **Star**: Reviews, ratings
- **Search**: SEO, discovery
- **Cart**: E-commerce, orders
- **Document**: Content, documentation
- **Package**: Shipping, fulfillment
- **Robot**: AI, automation
- **Shirt**: Products, designs
- **Arrow**: Flow, progression
- **Printer**: Production, printing

### Button Styles
- **Primary**: Gradient background, white text
- **Secondary**: Transparent with border
- **Hover**: Scale(1.05), shadow increase

### Badge Style
- **Background**: `var(--bg-card)` with backdrop blur
- **Border**: `1px solid rgba(255, 255, 255, 0.1)`
- **Border-radius**: `999px` (pill shape)
- **Padding**: `12px 20px`
- **Dot Indicator**: `10px` circle with gradient

---

## 📝 Content Guidelines

### Titles
- Use action verbs: "Build", "Create", "Transform", "Launch"
- Keep under 60 characters when possible
- Use client name in highlight when appropriate

### Descriptions
- Lead with value, not features
- Keep sentences under 20 words
- Use specific numbers and timelines
- Avoid jargon, explain clearly

### Bullet Points
- Start with action verbs
- Be specific, not vague
- Limit to 3-4 bullets per item
- Focus on outcomes, not just activities

### Pricing
- Use whole numbers: $4,500 not $4,499.99
- Include timeline with price
- Clearly differentiate packages
- Mention what's included vs. optional

---

## 🚀 Quick Start Checklist

- [ ] Replace `"id"` with unique proposal identifier
- [ ] Update all `"clientName"` references
- [ ] Fill in `"meta"` section with proposal details
- [ ] Customize `"header"` title and description
- [ ] Update `"hero"` section with main value proposition
- [ ] Configure `"howItWorks"` steps (3 steps recommended)
- [ ] Add `"styleOptions"` if applicable
- [ ] Define `"coreFeatures"` for MVP vs Advanced
- [ ] Map out `"workflow"` steps
- [ ] Write `"sections"` summaries
- [ ] Detail `"phase1"`, `"phase2"`, `"phase3"` items
- [ ] Set `"timeline"` with realistic dates
- [ ] Define `"definitionOfDone"` criteria
- [ ] Configure `"pricing"` packages
- [ ] Set `"pricingNotes"` for additional info
- [ ] List `"nextSteps"` for client
- [ ] Update `"footer"` with project ID and validity

---

## 📎 Asset Checklist

- [ ] Auxilium Logo (320x132px PNG) - `/Auxilium Logo 320 x 132.png`
- [ ] All fonts loaded (Google Fonts)
- [ ] CSS variables configured
- [ ] Gradient backgrounds working
- [ ] Icons rendering correctly
- [ ] Responsive breakpoints tested

---

**Template Version**: 1.0  
**Last Updated**: 2025  
**Maintained by**: Auxilium.io

---

*Copy this entire file to your new project and customize the JSON config template to create new proposals quickly!*


