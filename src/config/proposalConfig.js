// Proposal Configuration Loader
// This file manages which proposal configuration is currently active

// Import all proposal configurations
import weprintConfig from './weprint-custom-tees.json';
import exampleEcommerceConfig from './example-ecommerce-platform.json';

// Map of all available proposals
const PROPOSAL_CONFIGS = {
  'weprint-custom-tees': weprintConfig,
  'example-ecommerce-platform': exampleEcommerceConfig,
};

// Default proposal (can be changed via URL parameter or environment variable)
const DEFAULT_PROPOSAL_ID = 'weprint-custom-tees';

/**
 * Get the current proposal ID from URL parameters or use default
 * URL format: /?proposal=weprint-custom-tees
 */
function getCurrentProposalId() {
  // Check URL parameters first
  const urlParams = new URLSearchParams(window.location.search);
  const proposalParam = urlParams.get('proposal');
  
  if (proposalParam && PROPOSAL_CONFIGS[proposalParam]) {
    return proposalParam;
  }
  
  // Check for hash-based routing
  const hash = window.location.hash.slice(1);
  if (hash && PROPOSAL_CONFIGS[hash]) {
    return hash;
  }
  
  // Use default
  return DEFAULT_PROPOSAL_ID;
}

/**
 * Get the active proposal configuration
 */
export function getProposalConfig() {
  const proposalId = getCurrentProposalId();
  const config = PROPOSAL_CONFIGS[proposalId];
  
  if (!config) {
    console.warn(`Proposal config "${proposalId}" not found. Using default.`);
    return PROPOSAL_CONFIGS[DEFAULT_PROPOSAL_ID];
  }
  
  return config;
}

/**
 * Get all available proposal IDs
 */
export function getAvailableProposals() {
  return Object.keys(PROPOSAL_CONFIGS);
}

/**
 * Switch to a different proposal (updates URL without reload)
 */
export function switchProposal(proposalId) {
  if (!PROPOSAL_CONFIGS[proposalId]) {
    console.error(`Proposal "${proposalId}" not found.`);
    return false;
  }
  
  const url = new URL(window.location);
  url.searchParams.set('proposal', proposalId);
  window.history.pushState({ proposal: proposalId }, '', url);
  window.location.reload(); // Reload to apply new config
  return true;
}

export default getProposalConfig;


