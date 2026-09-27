# Paila Nepal Wellness Centre (पाइला नेपाल वेलनेस सेन्टर)

> **Healthy Mind • Prepared Community • Resilient Nepal**  
> Promoting mental wellbeing, strengthening psychosocial support, building community capacity and supporting disaster preparedness and resilience in Nepal.

---

## 🚀 How to Deploy on GitHub Pages (No Blank Screen)

This project is fully configured to deploy smoothly on **GitHub Pages** without any white screen issues.

### Method 1: Deploy with `/docs` Folder (Simplest, Recommended)

The production build is already generated and placed inside the `/docs` folder in this repository.

1. Go to your repository on GitHub.
2. Click **Settings** (tab at the top).
3. In the left sidebar, click **Pages** (under *Code and automation*).
4. Under **Build and deployment** > **Source**, keep **Deploy from a branch**.
5. Under **Branch**:
   - Select **`main`** (or `master`)
   - In the folder dropdown right next to it, choose **`/docs`** (instead of `/ (root)`).
6. Click **Save**.
7. Wait 1 minute. GitHub will publish your site at `https://<your-username>.github.io/<repo-name>/`.

---

### Method 2: Deploy with GitHub Actions (Automatic on Push)

A GitHub Actions workflow is already set up in `.github/workflows/deploy.yml`.

1. Go to your repository on GitHub.
2. Click **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, choose **GitHub Actions** from the dropdown.
4. Whenever you push code, GitHub Actions will automatically compile and deploy the latest build.

---

### Method 3: Deploy with `npm run deploy` (gh-pages)

If you are working on your local machine:
```bash
npm run deploy
```
This builds the site and automatically pushes it to the `gh-pages` branch on GitHub.

---

## 🌐 Multi-Language Support (7 Languages)

The website supports 7 languages:
- 🇬🇧 **English** (`en`)
- 🇳🇵 **Nepali** (`ne` - नेपाली)
- 🇨🇳 **Chinese** (`zh` - 中文 简体)
- 🇯🇵 **Japanese** (`ja` - 日本語)
- 🇷🇺 **Russian** (`ru` - Русский)
- 🇩🇪 **German** (`de` - Deutsch)
- 🇫🇷 **French** (`fr` - Français)

Users can toggle languages anytime via:
- The **Language Dropdown** in the header
- The **Quick Toggle** in mobile view
- The **Language Switcher** in the footer

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (updates both /dist and /docs)
npm run build
```

---

## 📞 Contact Information

- **Address**: KC Bhawan, Nearby Lama Petrol Pump, Jorpati, Kathmandu, Nepal
- **Phone**: +977-9863437679 / +977-9868331455
- **Email**: pailanepal26@gmail.com
- **Facebook**: [Paila Nepal Wellness Centre](https://www.facebook.com/profile.php?id=61594427986929)
