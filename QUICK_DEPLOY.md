# Quick Deploy to GitHub Pages

## Step 1: Run Setup Script

```bash
./setup-github.sh
```

Or manually:

```bash
git init
git branch -M main
git remote add origin git@github.com:shoaibmobassir/JashnEvents.git
git add .
git commit -m "Initial commit: JASHN Events website"
```

## Step 2: Enable GitHub Pages

1. Go to: https://github.com/shoaibmobassir/JashnEvents/settings/pages
2. Under **Source**, select **GitHub Actions**
3. Click **Save**

## Step 3: Push to GitHub

```bash
git push -u origin main
```

## Step 4: Wait for Deployment

- Go to: https://github.com/shoaibmobassir/JashnEvents/actions
- Wait for the "Deploy to GitHub Pages" workflow to complete (usually 2-3 minutes)

## Step 5: Access Your Website

Your website will be live at:
**https://shoaibmobassir.github.io/JashnEvents/**

## Important Notes

- The website uses the basePath `/JashnEvents` for GitHub Pages
- All internal links automatically include this path
- Images are set to `unoptimized: true` for static export compatibility
- The site is fully static and works without a server

## Troubleshooting

If deployment fails:
1. Check the Actions tab for error messages
2. Ensure `basePath: '/JashnEvents'` is set in `next.config.js`
3. Verify `output: 'export'` is in `next.config.js`
4. Make sure `unoptimized: true` is set for images

