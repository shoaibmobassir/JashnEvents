# Fix GitHub Pages Environment Protection Error

## Error Message
"Branch "main" is not allowed to deploy to github-pages due to environment protection rules."

## Solution: Configure Environment Protection Rules

You need to allow the `main` branch to deploy to the `github-pages` environment. Here's how:

### Step 1: Go to Environment Settings

1. Go to your repository: https://github.com/shoaibmobassir/JashnEvents
2. Click **Settings** → **Environments** (in the left sidebar)
3. Click on **github-pages** environment

### Step 2: Configure Deployment Branches

1. Under **Deployment branches**, you'll see branch protection rules
2. Select **Selected branches**
3. In the branch dropdown, select **main**
4. Click **Save protection rules**

### Alternative: Disable Protection (Easier)

If you don't need strict protection:

1. Go to **Settings** → **Environments** → **github-pages**
2. Scroll down to **Deployment branches**
3. Select **All branches** (or remove the protection)
4. Click **Save protection rules**

### Step 3: Retry Deployment

After configuring the environment:

1. Go to: https://github.com/shoaibmobassir/JashnEvents/actions
2. Find the failed workflow run
3. Click **Re-run all jobs** or **Re-run failed jobs**

Or trigger a new deployment:

```bash
git commit --allow-empty -m "Retry GitHub Pages deployment"
git push origin main
```

## Quick Fix (If Environment Settings Not Available)

If you don't see the Environments option in Settings, try this:

1. Go to: https://github.com/shoaibmobassir/JashnEvents/settings/environments
2. If the `github-pages` environment doesn't exist, it will be created automatically
3. Configure the deployment branches as described above

## Verify

After fixing, the workflow should:
- ✅ Build successfully
- ✅ Deploy to GitHub Pages
- ✅ Show your site at: https://shoaibmobassir.github.io/JashnEvents/

