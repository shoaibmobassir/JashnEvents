# GitHub Pages Deployment Guide

## ✅ Repository is Now Public!

Your repository is public, so GitHub Pages will work. Follow these steps:

## Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/shoaibmobassir/JashnEvents
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

## Step 2: Verify Workflow Permissions

1. Still in **Settings**, go to **Actions** → **General**
2. Scroll down to **Workflow permissions**
3. Ensure:
   - ✅ **Read and write permissions** is selected
   - ✅ **Allow GitHub Actions to create and approve pull requests** is checked
4. Click **Save** if you made changes

## Step 3: Trigger Deployment

The workflow will automatically run when you push to `main`. To trigger it manually:

1. Go to: https://github.com/shoaibmobassir/JashnEvents/actions
2. Click on **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

Or push a small change:

```bash
git commit --allow-empty -m "Trigger GitHub Pages deployment"
git push origin main
```

## Step 4: Wait for Deployment

1. Go to: https://github.com/shoaibmobassir/JashnEvents/actions
2. Watch the workflow run (usually takes 2-3 minutes)
3. Wait for the green checkmark ✅

## Step 5: Access Your Website

Once deployment completes, your website will be live at:

**https://shoaibmobassir.github.io/JashnEvents/**

## Configuration Details

- ✅ `basePath: '/JashnEvents'` - Set automatically for GitHub Pages
- ✅ `output: 'export'` - Static export enabled for GitHub Pages
- ✅ `unoptimized: true` - Images unoptimized for static export
- ✅ Build output: `./out` directory

## Troubleshooting

### Workflow Fails

1. Check the Actions tab for error messages
2. Ensure GitHub Pages is enabled (Settings → Pages → Source: GitHub Actions)
3. Verify workflow permissions are set correctly

### Site Shows 404

1. Wait a few minutes after deployment (DNS propagation)
2. Clear browser cache
3. Check the deployment URL in the Actions tab

### Build Succeeds but Site Doesn't Load

1. Verify the repository name matches: `JashnEvents`
2. Check that `basePath: '/JashnEvents'` is in `next.config.js`
3. Ensure `GITHUB_PAGES: 'true'` is set in the workflow

## Future Updates

Every time you push to `main`, the site will automatically rebuild and redeploy!

```bash
git add .
git commit -m "Update website"
git push origin main
```

