# Custom Domain Setup for GitHub Pages

## Overview
Configure `jashnevents.net` (or `www.jashnevents.net`) to point to your GitHub Pages site.

## Step-by-Step Guide

### Step 1: Configure Domain in GitHub

1. Go to your repository: **https://github.com/shoaibmobassir/JashnEvents/settings/pages**

2. Scroll down to **"Custom domain"** section

3. Enter your domain:
   - For `jashnevents.net`: Enter `jashnevents.net`
   - For `www.jashnevents.net`: Enter `www.jashnevents.net`
   - **Recommended**: Use `www.jashnevents.net` (with www)

4. Click **Save**

5. GitHub will show you DNS records to configure (see Step 2)

### Step 2: Configure DNS Records

You need to add DNS records at your domain registrar (where you bought jashnevents.net).

#### Option A: Using Apex Domain (jashnevents.net - without www)

Add these **A records** in your DNS settings:

```
Type: A
Name: @ (or leave blank, or jashnevents.net)
Value: 185.199.108.153
TTL: 3600 (or default)

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

#### Option B: Using www Subdomain (www.jashnevents.net - RECOMMENDED)

Add this **CNAME record**:

```
Type: CNAME
Name: www
Value: shoaibmobassir.github.io
TTL: 3600 (or default)
```

**OR** if your registrar requires a full domain:

```
Type: CNAME
Name: www
Value: shoaibmobassir.github.io.
TTL: 3600
```

### Step 3: Where to Add DNS Records

Common domain registrars:

#### GoDaddy
1. Log in to GoDaddy
2. Go to **My Products** → **DNS**
3. Click **Manage DNS**
4. Add the records above
5. Save

#### Namecheap
1. Log in to Namecheap
2. Go to **Domain List**
3. Click **Manage** next to your domain
4. Go to **Advanced DNS** tab
5. Add the records above
6. Save

#### Google Domains / Cloudflare
1. Log in to your domain provider
2. Find **DNS Settings** or **DNS Management**
3. Add the records above
4. Save

### Step 4: Enable HTTPS (Automatic)

1. After DNS propagates (can take 24-48 hours), go back to:
   **https://github.com/shoaibmobassir/JashnEvents/settings/pages**

2. Check **"Enforce HTTPS"** checkbox
   - This will be available after DNS is configured correctly
   - GitHub will automatically issue an SSL certificate

### Step 5: Verify DNS Propagation

Check if DNS is configured correctly:

1. Use online tools:
   - https://dnschecker.org
   - https://www.whatsmydns.net
   - Enter your domain and check for the A or CNAME records

2. Or use command line:
   ```bash
   # For www subdomain
   dig www.jashnevents.net CNAME
   
   # For apex domain
   dig jashnevents.net A
   ```

### Step 6: Update Next.js Configuration (If Needed)

If you're using the apex domain (jashnevents.net), you might need to update the basePath. However, since you're using a custom domain, you can remove the basePath for the custom domain.

Actually, with a custom domain, GitHub Pages serves from the root, so you may want to create a separate build configuration. But for now, the current setup should work.

## Important Notes

### DNS Propagation Time
- DNS changes can take **24-48 hours** to propagate worldwide
- Some changes appear within minutes, others take longer
- Be patient and keep checking

### HTTPS Certificate
- GitHub automatically provisions SSL certificates via Let's Encrypt
- This happens automatically after DNS is configured
- Wait for "Enforce HTTPS" option to appear in settings

### Both www and non-www
- You can configure both `jashnevents.net` and `www.jashnevents.net`
- Add both in GitHub Pages settings
- Configure DNS for both (A records for apex, CNAME for www)

## Troubleshooting

### Domain Not Working After 48 Hours

1. **Verify DNS Records:**
   - Use dnschecker.org to check if records are propagated
   - Make sure all A records (or CNAME) are correct

2. **Check GitHub Pages Settings:**
   - Go to Settings → Pages
   - Verify custom domain is saved
   - Check for any error messages

3. **Clear Browser Cache:**
   - Try incognito/private browsing mode
   - Clear DNS cache: `sudo dscacheutil -flushcache` (Mac) or `ipconfig /flushdns` (Windows)

### HTTPS Not Available

- Wait for DNS to fully propagate
- GitHub needs to verify domain ownership
- Can take up to 24 hours after DNS is correct

### Domain Shows GitHub 404

- Make sure the domain is correctly configured in GitHub Pages settings
- Verify DNS records point to GitHub's IPs
- Wait for DNS propagation

## Quick Checklist

- [ ] Domain added in GitHub Pages settings
- [ ] DNS records (A or CNAME) added at domain registrar
- [ ] DNS propagation verified (24-48 hours)
- [ ] HTTPS enabled in GitHub Pages settings
- [ ] Website accessible at custom domain

## Current GitHub Pages IPs (2024)

If you need the latest IPs, GitHub updates them here:
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#about-custom-domains

The IPs listed above are current as of 2024, but check GitHub's documentation for the most up-to-date values.

