# GitHub Pages Setup Instructions

## ⚠️ Important: Private Repository Limitation

**GitHub Pages for private repositories requires a paid GitHub plan** (Pro, Team, or Enterprise).

With a **free GitHub account**, you have two options:

### Option 1: Make Repository Public (Free)

1. Go to your repository: https://github.com/shoaibmobassir/JashnEvents
2. Click **Settings** → **General**
3. Scroll down to **Danger Zone**
4. Click **Change visibility** → **Make public**
5. Confirm the change

### Option 2: Enable GitHub Pages (After Making Public or If You Have Pro)

1. Go to: https://github.com/shoaibmobassir/JashnEvents/settings/pages
2. Under **Source**, select **GitHub Actions**
3. Click **Save**

## Step-by-Step Setup

### 1. Enable GitHub Pages

**If repository is PUBLIC:**
- Go to: https://github.com/shoaibmobassir/JashnEvents/settings/pages
- Under **Source**, select **GitHub Actions**
- Click **Save**

**If repository is PRIVATE:**
- You need GitHub Pro ($4/month) or make the repo public
- Then follow the steps above

### 2. Verify Workflow Permissions

1. Go to: https://github.com/shoaibmobassir/JashnEvents/settings/actions
2. Under **Workflow permissions**, ensure:
   - ✅ **Read and write permissions** is selected
   - ✅ **Allow GitHub Actions to create and approve pull requests** is checked

### 3. Push Code

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### 4. Check Deployment

1. Go to: https://github.com/shoaibmobassir/JashnEvents/actions
2. Wait for the workflow to complete
3. Your site will be at: https://shoaibmobassir.github.io/JashnEvents/

## Troubleshooting

### Error: "Get Pages site failed"

**Cause:** GitHub Pages is not enabled or repository is private without Pro plan.

**Solution:**
1. Make repository public, OR
2. Upgrade to GitHub Pro, OR
3. Use alternative hosting (Vercel/Netlify)

### Error: "Permission denied"

**Cause:** Workflow doesn't have proper permissions.

**Solution:**
1. Go to Settings → Actions → General
2. Set "Workflow permissions" to "Read and write permissions"
3. Check "Allow GitHub Actions to create and approve pull requests"

### Build succeeds but site doesn't load

**Cause:** Base path might be incorrect.

**Solution:**
- Verify `basePath: '/JashnEvents'` in `next.config.js`
- Check the repository name matches exactly

## Alternative: Use Vercel (Recommended for Private Repos)

Vercel is free and works with private repositories:

1. Go to https://vercel.com
2. Sign in with GitHub
3. Import `shoaibmobassir/JashnEvents`
4. Deploy (automatic)

Your site will be at: `https://jashn-events.vercel.app`

