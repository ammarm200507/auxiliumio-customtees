# Deployment URLs

## Default Vercel URL
After deployment, your project will be accessible at:
- **Main App**: `https://customtees-widget.vercel.app/proposals/customtees/`
- **Markdown File**: `https://customtees-widget.vercel.app/proposals/customtees/PROPOSAL_TEMPLATE_COMPLETE.md`

(Check your Vercel dashboard for the exact URL - it might vary slightly)

## Custom Domain Setup

If you want to use `customtees.auxiliumio.com`:

1. **Add Domain in Vercel:**
   - Go to your project in Vercel dashboard
   - Settings → Domains
   - Add `customtees.auxiliumio.com`

2. **Configure DNS Records:**
   - Vercel will provide you with DNS records to add
   - Add these to your DNS provider (where auxiliumio.com is hosted)
   - Usually requires adding a CNAME or A record

3. **Wait for Propagation:**
   - DNS changes can take up to 24-48 hours to propagate
   - The DNS_PROBE_FINISHED_NXDOMAIN error means DNS isn't set up yet

## Quick Access

For immediate access, use the default Vercel URL instead of waiting for custom domain setup.

