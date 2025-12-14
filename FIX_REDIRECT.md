# Fix Redirect Issue

The redirect to auxiliumio.com is configured in your **Vercel Dashboard**, not in your code.

## Steps to Fix:

1. **Go to Vercel Dashboard:**
   - Visit: https://vercel.com/dashboard
   - Click on your project: `customtees-widget`

2. **Check Redirect Rules:**
   - Go to **Settings** → **Redirects**
   - Look for any redirect rules pointing to auxiliumio.com
   - **Delete** any redirects you don't want

3. **Check Domain Settings:**
   - Go to **Settings** → **Domains**
   - If you see `customtees.auxiliumio.com` or any auxiliumio.com domain:
     - You can either **remove it** (if you don't need it)
     - Or **check the redirect settings** for that domain

4. **Check Project Settings:**
   - Go to **Settings** → **General**
   - Look for any "Redirects" or "Domain Redirects" settings
   - Make sure no redirects are configured

5. **Redeploy:**
   - After removing redirects, you may need to trigger a new deployment
   - Or just wait a few minutes for changes to propagate

## Alternative: Force No Redirect

If you can't access the dashboard, make sure you're using the direct Vercel URL:
- `https://customtees-widget.vercel.app/` (without any custom domain)

The redirect is happening at the Vercel infrastructure level, so it needs to be fixed in the dashboard.

