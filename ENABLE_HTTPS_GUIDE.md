# Enable HTTPS on GitHub Pages - Troubleshooting Guide

## Why HTTPS is Disabled

The "Enforce HTTPS" option is grayed out because GitHub hasn't been able to verify your domain configuration yet. This usually means:

1. DNS records aren't correctly configured
2. DNS hasn't fully propagated (can take 24-48 hours)
3. GitHub can't verify domain ownership

## Step-by-Step Fix

### Step 1: Verify DNS Configuration

Your domain `www.jashnevents.net` needs a **CNAME record** pointing to GitHub.

#### Check Current DNS Configuration

1. Go to your domain registrar (where you bought jashnevents.net)
2. Find **DNS Settings** or **DNS Management**
3. Look for a CNAME record for `www`

#### Required CNAME Record

You should have:
```
Type: CNAME
Name: www
Value: shoaibmobassir.github.io
TTL: 3600 (or default)
```

**OR** (some registrars require a trailing dot):
```
Type: CNAME
Name: www
Value: shoaibmobassir.github.io.
TTL: 3600
```

### Step 2: Verify DNS Propagation

Use these tools to check if DNS is configured correctly:

1. **DNS Checker**: https://dnschecker.org
   - Enter: `www.jashnevents.net`
   - Select: `CNAME`
   - Click "Search"
   - Should show: `shoaibmobassir.github.io` globally

2. **What's My DNS**: https://www.whatsmydns.net
   - Enter: `www.jashnevents.net`
   - Select: `CNAME`
   - Check if it shows the correct value

3. **Command Line** (if you have access):
   ```bash
   dig www.jashnevents.net CNAME
   ```
   Should show: `www.jashnevents.net. IN CNAME shoaibmobassir.github.io.`

### Step 3: Common DNS Issues

#### Issue: CNAME Points to Wrong Value
- **Fix**: Update CNAME to point to `shoaibmobassir.github.io`

#### Issue: Using A Records Instead of CNAME
- **Fix**: Remove A records, add CNAME record instead
- CNAME is required for www subdomain

#### Issue: DNS Not Propagated
- **Fix**: Wait 24-48 hours after making changes
- DNS changes can take time to propagate globally

#### Issue: Multiple Conflicting Records
- **Fix**: Remove any conflicting A records or other CNAME records for www

### Step 4: Wait for GitHub Verification

After DNS is correctly configured:

1. GitHub automatically checks DNS every few hours
2. Once verified, the "Enforce HTTPS" checkbox will become available
3. This can take **up to 24 hours** after DNS is correct

### Step 5: Force GitHub to Re-check

Sometimes you can speed this up:

1. Go to: https://github.com/shoaibmobassir/JashnEvents/settings/pages
2. Click **"Remove"** next to the custom domain
3. Wait 1-2 minutes
4. Re-enter `www.jashnevents.net`
5. Click **"Save"**
6. This forces GitHub to re-verify the domain

### Step 6: Check for Errors

1. Go to: https://github.com/shoaibmobassir/JashnEvents/settings/pages
2. Look for any error messages
3. The "DNS check successful" message should appear
4. If there are errors, fix the DNS configuration

## Expected Timeline

- **DNS Changes**: 0-48 hours to propagate
- **GitHub Verification**: 0-24 hours after DNS is correct
- **HTTPS Certificate**: Automatic after verification
- **Total**: Can take up to 72 hours in worst case

## Quick Checklist

- [ ] CNAME record exists for `www.jashnevents.net`
- [ ] CNAME points to `shoaibmobassir.github.io`
- [ ] DNS propagation verified (dnschecker.org)
- [ ] "DNS check successful" shows in GitHub Pages settings
- [ ] Waited at least 24 hours after DNS configuration
- [ ] No conflicting DNS records

## Alternative: Use Apex Domain

If www subdomain continues to have issues, you can use the apex domain:

1. Remove `www.jashnevents.net` from GitHub Pages
2. Add `jashnevents.net` (without www)
3. Configure A records instead of CNAME (see CUSTOM_DOMAIN_SETUP.md)

However, CNAME is preferred for www subdomains.

## Still Not Working?

If HTTPS is still unavailable after 48 hours:

1. **Double-check DNS**: Use multiple DNS checker tools
2. **Contact Domain Registrar**: Verify DNS settings are correct
3. **Check GitHub Status**: https://www.githubstatus.com
4. **Review GitHub Docs**: https://docs.github.com/en/pages/configuring-a-custom-domain

## Once HTTPS is Available

When the checkbox becomes enabled:

1. Check **"Enforce HTTPS"**
2. Click **"Save"**
3. Your site will redirect all HTTP traffic to HTTPS
4. The "Not Secure" warning will disappear

