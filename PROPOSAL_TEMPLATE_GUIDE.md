# Proposal Template System Guide

This widget uses a configuration-based template system that allows you to create multiple proposals while keeping the same hosting structure and codebase.

## How It Works

The widget reads proposal data from JSON configuration files in `src/config/`. You can create as many proposals as you need by adding new JSON files, and the widget will render them using the same beautiful template.

## Current Setup

- **Widget Location**: `/proposals/customtees/` (configured in `vite.config.js` and `vercel.json`)
- **Configuration Files**: `src/config/*.json`
- **Config Loader**: `src/config/proposalConfig.js`

## Creating a New Proposal

### Step 1: Create a New Config File

Create a new JSON file in `src/config/` with your proposal data:

```bash
# Example: src/config/my-new-proposal.json
```

### Step 2: Follow the Config Structure

Use one of the existing configs as a template:
- `weprint-custom-tees.json` - Original proposal
- `example-ecommerce-platform.json` - Example alternative proposal

### Step 3: Register the Config

Add your new config to `src/config/proposalConfig.js`:

```javascript
import myNewProposal from './my-new-proposal.json';

const PROPOSAL_CONFIGS = {
  'weprint-custom-tees': weprintConfig,
  'example-ecommerce-platform': exampleEcommerceConfig,
  'my-new-proposal': myNewProposal, // Add your new one here
};
```

### Step 4: Access Your Proposal

Access your proposal via URL parameter:

```
https://your-domain.com/proposals/customtees?proposal=my-new-proposal
```

Or set it as default in `proposalConfig.js`:

```javascript
const DEFAULT_PROPOSAL_ID = 'my-new-proposal';
```

## Configuration Schema

Each proposal JSON file should follow this structure:

```json
{
  "id": "unique-proposal-id",
  "meta": {
    "proposalType": "Description of proposal type",
    "clientName": "Client Name",
    "preparedBy": "AuxiliumIO",
    "date": "Date string",
    "badgeText": "Badge display text"
  },
  "header": {
    "title": "Main title text",
    "highlightedText": "Text to highlight in title",
    "description": "Subtitle description"
  },
  "hero": {
    "title": "Hero section title",
    "subtitle": "Hero section subtitle",
    "benefits": [
      { "text": "Benefit 1" },
      { "text": "Benefit 2" },
      { "text": "Benefit 3" }
    ]
  },
  "howItWorks": [
    {
      "step": "1",
      "title": "Step title",
      "description": "Step description"
    }
  ],
  "styleOptions": [
    {
      "name": "Option name",
      "description": "Option description"
    }
  ],
  "coreFeatures": {
    "mvp": ["Feature 1", "Feature 2"],
    "advanced": ["Advanced feature 1", "Advanced feature 2"]
  },
  "workflow": [
    {
      "title": "Workflow step title",
      "description": "Workflow step description"
    }
  ],
  "sections": {
    "coreObjective": {
      "title": "Section title",
      "summary": "Section summary text"
    },
    "differentiator": {
      "title": "Section title",
      "summary": "Section summary text"
    },
    "trustCommitments": {
      "title": "Section title",
      "summary": "Section summary text"
    }
  },
  "phase1": [
    {
      "title": "Phase item title",
      "description": "Phase item description",
      "bullets": ["Bullet 1", "Bullet 2"]
    }
  ],
  "phase2": [/* Same structure as phase1 */],
  "phase3": [/* Same structure as phase1 */],
  "timeline": [
    {
      "label": "Time period",
      "description": "What happens in this period"
    }
  ],
  "definitionOfDone": [
    {
      "title": "Definition title",
      "description": "Definition description"
    }
  ],
  "pricing": [
    {
      "name": "Pricing option name",
      "price": "$X,XXX",
      "timeline": "X weeks",
      "features": ["Feature 1", "Feature 2"]
    }
  ],
  "pricingNotes": {
    "phase2": "Note about Phase 2",
    "carePlan": "Note about care plan"
  },
  "nextSteps": [
    "Step 1",
    "Step 2",
    "Step 3"
  ],
  "footer": {
    "company": "AuxiliumIO",
    "tagline": "We make it simple. What is your IT?",
    "location": "Houston, Texas",
    "email": "getstarted@auxilium.io",
    "validity": "Proposal validity text"
  }
}
```

## Customization

### Changing the Default Proposal

Edit `src/config/proposalConfig.js`:

```javascript
const DEFAULT_PROPOSAL_ID = 'your-proposal-id';
```

### Styling

All styling is in `src/App.css`. The template uses CSS variables for easy theming:

- `--bg-primary`: Primary background
- `--bg-card`: Card backgrounds
- `--text-primary`: Primary text color
- `--gradient-start` & `--gradient-end`: Gradient colors
- And more...

### Adding New Sections

1. Add the data to your JSON config
2. Update `App.jsx` to render the new section
3. Add any needed styles to `App.css`

## Deployment

The widget is configured for Vercel deployment:

- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Routes**: Configured in `vercel.json`

After deployment, proposals are accessible at:
```
https://your-domain.com/proposals/customtees?proposal=proposal-id
```

## Examples

### Example 1: Quick Proposal Switch

Switch between proposals using URL parameters:

```
# Original proposal
/proposals/customtees?proposal=weprint-custom-tees

# Example e-commerce proposal
/proposals/customtees?proposal=example-ecommerce-platform
```

### Example 2: Create a New Proposal

1. Copy `src/config/example-ecommerce-platform.json`
2. Rename to `src/config/my-client.json`
3. Edit all the content for your client
4. Register in `proposalConfig.js`
5. Access at `/proposals/customtees?proposal=my-client`

## Best Practices

1. **Keep Config Files Organized**: Use descriptive IDs that match filenames
2. **Version Control**: All configs are in git, so changes are tracked
3. **Consistent Formatting**: Use the same structure across all proposals
4. **Test Before Deploying**: Preview locally with `npm run dev`
5. **Documentation**: Keep this guide updated as you add features

## Support

For questions or issues with the template system, refer to:
- This guide
- Existing config files as examples
- The component code in `src/App.jsx`

---

**Note**: The widget structure and hosting remain the same regardless of which proposal is active. All proposals share the same codebase and styling, making it easy to maintain and update.


