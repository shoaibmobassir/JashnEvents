# HTTPS Troubleshooting - Why "Enforce HTTPS" Shows X

## Problem
After clicking "Enforce HTTPS", it shows a cross (X) or doesn't enable. This usually means the SSL certificate can't be issued or there's a configuration issue.

## Most Common Cause: Cloudflare Proxy

If you're using Cloudflare, the **most common issue** is that your domain is **proxied** (orange cloud) instead of **DNS only** (gray cloud).

### Fix: Turn Off Cloudflare Proxy

1. **Log in to Cloudflare Dashboard**: https://dash.cloudflare.com
2. **Select your domain**: `jashnevents.net`
3. **Go to DNS** → **Records**
4. **Find the CNAME record** for `www`
5. **Click the cloud icon** to turn it **OFF** (should be gray, not orange)
   - **Gray cloud** = DNS only ✅ (Required for GitHub Pages)
   - **Orange cloud** = Proxied ❌ (Blocks GitHub certificate issuance)
6. **Save the change**

### Why This Matters

- GitHub Pages needs **direct DNS access** to issue SSL certificates
- Cloudflare proxy intercepts traffic, preventing GitHub from verifying domain ownership
- Certificates can't be issued when the domain is proxied

## Other Possible Causes

### 1. Certificate Still Being Issued

- GitHub issues certificates automatically via Let's Encrypt
- Can take **24-48 hours** after DNS verification
- Wait and try again later

### 2. DNS Not Fully Propagated

- Some DNS servers might still show old records
- Check: https://dnschecker.org
- Wait for global propagation (24-48 hours)

### 3. Mixed Content Issues

- Your site might be loading HTTP resources
- Check browser console for mixed content warnings
- Update any hardcoded HTTP URLs to HTTPS

### 4. Certificate Issuance Failed

- GitHub might have failed to issue the certificate
- Try removing and re-adding the domain:
  1. Go to Settings → Pages
  2. Click "Remove" next to the domain
  3. Wait 5 minutes
  4. Re-enter `www.jashnevents.net`
  5. Click "Save"
  6. Wait 24-48 hours for certificate issuance

## Step-by-Step Fix

### Step 1: Verify Cloudflare Proxy is OFF

1. Cloudflare Dashboard → DNS → Records
2. Check `www` CNAME record
3. Cloud icon should be **GRAY** (not orange)
4. If orange, click to turn it off

### Step 2: Verify DNS Configuration

1. Check DNS propagation: https://dnschecker.org
2. Enter: `www.jashnevents.net`
3. Select: `CNAME`
4. Should show: `shoaibmobassir.github.io` globally

### Step 3: Force GitHub to Re-check

1. Go to: https://github.com/shoaibmobassir/JashnEvents/settings/pages
2. Click **"Remove"** next to `www.jashnevents.net`
3. Wait 5 minutes
4. Re-enter `www.jashnevents.net`
5. Click **"Save"**
6. Wait for "DNS check successful"

### Step 4: Wait for Certificate

- GitHub will automatically issue certificate
- Can take 24-48 hours
- Check back tomorrow

### Step 5: Try Enabling HTTPS Again

After 24-48 hours:
1. Go to Settings → Pages
2. Try checking "Enforce HTTPS" again
3. If it still shows X, check Cloudflare proxy status again

## Quick Checklist

- [ ] Cloudflare proxy is OFF (gray cloud, not orange)
- [ ] DNS propagation is complete globally
- [ ] "DNS check successful" shows in GitHub
- [ ] Waited 24-48 hours after DNS verification
- [ ] Removed and re-added domain in GitHub Pages
- [ ] No mixed content errors in browser console

## If Still Not Working

1. **Double-check Cloudflare**: Make absolutely sure proxy is OFF
2. **Check GitHub Status**: https://www.githubstatus.com
3. **Contact Support**: If it's been more than 48 hours and proxy is definitely OFF

## Expected Behavior

- **Before certificate**: Checkbox is grayed out, shows "certificate has not yet been issued"
- **After certificate**: Checkbox becomes clickable, you can enable it
- **If X appears**: Usually means proxy is ON or certificate issuance failed

