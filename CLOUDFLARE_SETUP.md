# Cloudflare DNS Setup for GitHub Pages

## Current Status
You've switched to Cloudflare nameservers. Now you need to configure the DNS records in Cloudflare.

## Step-by-Step Cloudflare Configuration

### Step 1: Complete Nameserver Change

1. **At your domain registrar** (where you bought jashnevents.net):
   - Make sure you've added Cloudflare nameservers:
     - `dahlia.ns.cloudflare.com`
     - `rene.ns.cloudflare.com`
   - Remove old nameservers (like `ns1.dns-parking.com`, `ns2.dns-parking.com`)
   - **Save changes**

2. **Wait for nameserver propagation** (can take 24-48 hours)
   - Check at: https://dnschecker.org
   - Search for your domain's NS records
   - Should show Cloudflare nameservers globally

### Step 2: Configure DNS Records in Cloudflare

1. **Log in to Cloudflare Dashboard**: https://dash.cloudflare.com

2. **Select your domain**: `jashnevents.net`

3. **Go to DNS** → **Records**

4. **Add CNAME Record for www**:
   - Click **"Add record"**
   - **Type**: Select `CNAME`
   - **Name**: Enter `www`
   - **Target**: Enter `shoaibmobassir.github.io`
   - **Proxy status**: Click the cloud icon to turn it **OFF** (gray/orange cloud)
     - ⚠️ **IMPORTANT**: Must be **DNS only** (gray cloud), NOT proxied (orange cloud)
     - GitHub Pages requires direct DNS, not Cloudflare proxy
   - **TTL**: Auto (or 3600)
   - Click **"Save"**

5. **Verify the record**:
   - You should see:
     ```
     Type: CNAME
     Name: www
     Content: shoaibmobassir.github.io
     Proxy: DNS only (gray cloud)
     ```

### Step 3: Remove Conflicting Records

1. **Check for any A records** for `www`:
   - If you see A records for `www`, delete them
   - Only CNAME should exist for www

2. **Check for other CNAME records** for `www`:
   - Delete any that don't point to `shoaibmobassir.github.io`

### Step 4: Wait for DNS Propagation

1. **Check DNS propagation**:
   - Go to: https://dnschecker.org
   - Enter: `www.jashnevents.net`
   - Select: `CNAME`
   - Click "Search"
   - Wait for green checkmarks globally (can take 24-48 hours)

2. **Verify in Cloudflare**:
   - Go to Cloudflare Dashboard → DNS → Records
   - Make sure the CNAME record shows as active

### Step 5: Update GitHub Pages Settings

1. **Go to**: https://github.com/shoaibmobassir/JashnEvents/settings/pages

2. **Remove and re-add the domain** (forces re-verification):
   - Click **"Remove"** next to `www.jashnevents.net`
   - Wait 1-2 minutes
   - Re-enter `www.jashnevents.net`
   - Click **"Save"**

3. **Check for "DNS check successful"** message

### Step 6: Wait for GitHub Verification

- GitHub checks DNS periodically
- After DNS propagates, GitHub will verify (can take 24 hours)
- The "Enforce HTTPS" checkbox will become available once verified

## Important Cloudflare Settings

### ⚠️ Proxy Status Must Be OFF

**Critical**: The CNAME record must be **DNS only** (gray cloud), NOT proxied (orange cloud).

**Why?**
- GitHub Pages needs direct DNS access to verify domain ownership
- Cloudflare proxy can interfere with GitHub's verification
- HTTPS won't work if the domain is proxied through Cloudflare

**How to check:**
- In Cloudflare DNS records, the cloud icon should be **gray** (DNS only)
- If it's **orange** (proxied), click it to turn it off

### SSL/TLS Settings (Optional)

1. Go to Cloudflare Dashboard → SSL/TLS
2. Set encryption mode to **"Full"** or **"Full (strict)"**
3. This works with GitHub Pages HTTPS

## Troubleshooting

### Issue: DNS Not Propagating

**Check:**
1. Nameservers are correctly set at registrar
2. CNAME record exists in Cloudflare
3. Proxy is OFF (gray cloud)
4. Wait 24-48 hours for propagation

### Issue: GitHub Still Can't Verify

**Solutions:**
1. Make sure proxy is OFF (gray cloud)
2. Remove and re-add domain in GitHub Pages
3. Wait 24 hours after DNS is correct
4. Check DNS propagation globally

### Issue: HTTPS Still Not Available

**Wait for:**
1. DNS to fully propagate (24-48 hours)
2. GitHub to verify domain (up to 24 hours after DNS is correct)
3. Total: Can take up to 72 hours

## Quick Checklist

- [ ] Cloudflare nameservers set at domain registrar
- [ ] CNAME record added in Cloudflare for `www`
- [ ] CNAME points to `shoaibmobassir.github.io`
- [ ] Proxy status is OFF (gray cloud, not orange)
- [ ] No conflicting A records for www
- [ ] DNS propagation verified (dnschecker.org)
- [ ] Domain removed and re-added in GitHub Pages
- [ ] "DNS check successful" shows in GitHub
- [ ] Waited 24-48 hours for verification

## Expected Timeline

- **Nameserver propagation**: 24-48 hours
- **DNS record propagation**: 24-48 hours  
- **GitHub verification**: 0-24 hours after DNS is correct
- **HTTPS availability**: Automatic after verification
- **Total**: Up to 72 hours in worst case

## Once Everything is Set Up

After DNS propagates and GitHub verifies:

1. Go to: https://github.com/shoaibmobassir/JashnEvents/settings/pages
2. The "Enforce HTTPS" checkbox will be **clickable**
3. Check it and click **"Save"**
4. Your site will be fully secure with HTTPS!

