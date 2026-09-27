# Deploying Paila Nepal Wellness Centre to GitHub Pages

### Why the blank space occurred
When deploying Vite apps to GitHub Pages (at `https://<username>.github.io/<repository-name>/`), Vite by default uses absolute paths (`/assets/...`). Because the app is hosted under the subpath `/<repository-name>/`, the browser tries to fetch scripts from the root domain (`https://<username>.github.io/assets/...`), which returns a 404 HTML response, leading to a blank screen.

### How this has been fixed
1. **Relative Asset Base**: Configured `base: './'` in `vite.config.ts`. All assets are now linked with relative URLs (`./assets/...`), so they work on any GitHub Pages repository path or custom domain.
2. **SPA Fallback**: Automatically generates `dist/404.html` on build to prevent 404 errors on page reloads.
3. **Automated GitHub Actions Workflow**: Added `.github/workflows/deploy.yml` for automated 1-click deployments.

---

### Step-by-Step Deployment Options

#### Option A: GitHub Actions (Recommended, Automatic)
1. Push your code to your GitHub repository.
2. On GitHub, navigate to **Settings** > **Pages** (under Code and automation).
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. That's it! GitHub will automatically trigger the workflow in `.github/workflows/deploy.yml`, build your project, and publish it with no blank screen.

#### Option B: Deploying via `gh-pages` branch
If you prefer building locally and pushing to a `gh-pages` branch:
1. Run `npm run build`
2. Push the contents of the `dist` directory to the `gh-pages` branch.
3. In **Settings** > **Pages**, select **Deploy from a branch** and choose `gh-pages` / `(root)`.
