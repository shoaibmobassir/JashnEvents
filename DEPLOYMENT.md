# GitHub Pages Deployment Guide

This guide will help you deploy the JASHN Events website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. The repository already created: `https://github.com/shoaibmobassir/JashnEvents`

## Setup Steps

### 1. Initialize Git Repository (if not already done)

```bash
git init
git remote add origin git@github.com:shoaibmobassir/JashnEvents.git
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/shoaibmobassir/JashnEvents`
2. Click on **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 3. Commit and Push Code

```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit: JASHN Events website"

# Push to main branch
git branch -M main
git push -u origin main
```

### 4. Automatic Deployment

Once you push to the `main` branch, GitHub Actions will automatically:
- Build the Next.js static site
- Deploy it to GitHub Pages

The website will be available at:
**https://shoaibmobassir.github.io/JashnEvents/**

## Local Development

For local development without the basePath:

1. Temporarily comment out the `basePath` in `next.config.js`:
```javascript
// basePath: '/JashnEvents',
```

2. Run the development server:
```bash
npm run dev
```

3. Before deploying, uncomment the `basePath` again.

## Manual Build and Test

To test the static export locally:

```bash
npm run build
```

The static files will be in the `out/` directory. You can serve them locally with:

```bash
npx serve out
```

## Troubleshooting

### Images not loading
- Make sure `unoptimized: true` is set in `next.config.js` for static export

### 404 errors on routes
- Ensure `trailingSlash: true` is set in `next.config.js`
- Check that all internal links use relative paths or include the basePath

### Build fails
- Check GitHub Actions logs in the repository's Actions tab
- Ensure all dependencies are listed in `package.json`

## Updating the Website

Simply push changes to the `main` branch:

```bash
git add .
git commit -m "Update website content"
git push origin main
```

GitHub Actions will automatically rebuild and redeploy.

