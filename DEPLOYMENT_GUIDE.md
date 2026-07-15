# 🚀 Portfolio Setup & Deployment Guide

Complete step-by-step guide to get your portfolio running locally and deployed online.

---

## **PART 1: LOCAL SETUP** (5 minutes)

### Step 1: Clone the Repository
```bash
git clone https://github.com/adarsh242729-pixel/adarsh-portfolio.git
cd adarsh-portfolio
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

**✅ Your portfolio is now running at `http://localhost:3000`**

### Step 4: Make Changes
Edit `src/components/Adarsh_Singh_Portfolio.jsx` to customize your portfolio:
- Update project descriptions
- Change colors and animations
- Add/remove sections

---

## **PART 2: CUSTOMIZATION** (10 minutes)

### Update Your Information

Edit `public/portfolio-config.json`:
```json
{
  "CONFIG": {
    "name": "Adarsh Singh",
    "title": "Full-Stack Developer & AI Engineer",
    "email": "adarsh242729@gmail.com",
    "bio": "Your bio...",
    "github": "https://github.com/adarsh242729-pixel",
    "linkedin": "https://www.linkedin.com/in/adarsh-singh-dev/"
  }
}
```

### Update Portfolio Component

**Key sections in `src/components/Adarsh_Singh_Portfolio.jsx`:**

1. **Hero Section** - Title, subtitle, CTA buttons
2. **About Section** - Your bio and highlights
3. **Experience Section** - Work history and education
4. **Skills Section** - Tech stack organized by category
5. **Projects Section** - Featured projects with details
6. **Contact Section** - Email and social links

### Update SEO Tags

Edit `index.html` meta tags:
```html
<meta name="description" content="Your description here">
<meta property="og:title" content="Your title">
```

---

## **PART 3: BUILD FOR PRODUCTION** (2 minutes)

### Build the Project
```bash
npm run build
```

**Output:** Optimized files in `dist/` folder

### Preview Production Build
```bash
npm run preview
```

---

## **PART 4: DEPLOY TO NETLIFY** (15 minutes)

### Option A: Deploy via Netlify UI (Recommended)

1. **Go to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Sign up with GitHub (free account)

2. **Create New Site**
   - Click "New site from Git"
   - Select your GitHub repo
   - Click "Connect"

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy"

4. **Wait for Deployment**
   - Netlify will build and deploy automatically
   - Visit your live site! 🎉

### Option B: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

---

## **PART 5: SETUP CUSTOM DOMAIN** (10 minutes)

### Get a Domain
- Go to [Namecheap](https://namecheap.com), [GoDaddy](https://godaddy.com), or [Google Domains](https://domains.google)
- Search and buy your domain (e.g., `adarshsingh.dev`)
- Note your registrar

### Connect to Netlify

1. **In Netlify Dashboard**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., `adarshsingh.dev`)

2. **Update DNS Records**
   - Netlify will show DNS records to add
   - Go to your domain registrar
   - Add the DNS records Netlify provided
   - Wait 5-24 hours for DNS to propagate

3. **Enable HTTPS**
   - Netlify auto-enables HTTPS (free with Let's Encrypt)

**Your site is now live at your custom domain! 🚀**

---

## **PART 6: SETUP GOOGLE ANALYTICS** (5 minutes)

### Get Your GA ID

1. **Go to Google Analytics**
   - Visit [analytics.google.com](https://analytics.google.com)
   - Sign in with Google account
   - Click "Create" to setup new property

2. **Create Account**
   - Account name: "Portfolio"
   - Property name: "Adarsh Singh Portfolio"
   - Continue through setup

3. **Get Measurement ID**
   - Once setup, you'll get a Measurement ID (looks like `G-XXXXXXXXXX`)
   - Copy this ID

### Add to Your Portfolio

1. **Update `src/main.jsx`**
   ```javascript
   gtag('config', 'G-XXXXXXXXXX'); // Replace with your ID
   ```

2. **Update `.env.local`**
   ```
   VITE_GA_ID=G-XXXXXXXXXX
   ```

3. **Rebuild & Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

**✅ Analytics now tracking your portfolio visits!**

---

## **PART 7: OPTIMIZATION & FINAL CHECKS** (10 minutes)

### Run Lighthouse Audit

1. **Open Portfolio in Chrome**
2. **Right-click → Inspect**
3. **Go to Lighthouse tab**
4. **Click "Analyze page load"**
5. **Aim for 90+ score in all categories**

### Fix Common Issues

| Issue | Fix |
|-------|-----|
| Low Performance | Enable Gzip compression (Netlify does this automatically) |
| Poor SEO | Ensure all meta tags are updated in `index.html` |
| Accessibility | Test with screen readers, fix color contrast |
| Best Practices | Avoid console errors, update deprecated packages |

### Test on Mobile

1. **DevTools → Toggle Device Toolbar** (or `Ctrl+Shift+M`)
2. **Test all interactive elements**
3. **Check responsive design**

### Verify All Links

- [ ] Email copy button works
- [ ] GitHub link opens correctly
- [ ] LinkedIn link opens correctly
- [ ] Project links work
- [ ] Navigation links scroll to sections
- [ ] Social links open in new tabs

---

## **PART 8: KEEP IT UPDATED** (Monthly)

### Update Content Regularly

```bash
# Make changes to your files
git add .
git commit -m "Update portfolio with new project"
git push origin master
```

**Netlify auto-deploys on every push!** 🔄

### Monthly Checklist

- [ ] Add new projects
- [ ] Update skills section
- [ ] Fix broken links
- [ ] Check analytics for traffic
- [ ] Update experience section
- [ ] Refresh project images

---

## **TROUBLESHOOTING**

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Site Not Updating
```bash
# Hard refresh
Ctrl+Shift+R (Windows/Linux)
Cmd+Shift+R (Mac)
```

### Analytics Not Tracking
- Verify GA ID in `src/main.jsx`
- Check Google Analytics dashboard for real-time data
- Wait 24 hours for data to appear in reports

### Custom Domain Not Working
- Verify DNS records added correctly
- Wait for DNS propagation (up to 24 hours)
- Flush browser cache

---

## **USEFUL RESOURCES**

- 📚 [React Documentation](https://react.dev)
- 🎨 [Tailwind CSS Docs](https://tailwindcss.com)
- ⚡ [Vite Guide](https://vitejs.dev)
- 🎬 [Framer Motion Docs](https://www.framer.com/motion/)
- 📊 [Google Analytics Help](https://support.google.com/analytics)
- 🚀 [Netlify Deploy Guide](https://docs.netlify.com)

---

## **NEXT STEPS**

1. ✅ **Complete Steps 1-3** - Get portfolio running locally
2. ✅ **Complete Step 4** - Customize with your info
3. ✅ **Complete Step 5** - Deploy to Netlify
4. ✅ **Complete Step 6** - Add custom domain (optional)
5. ✅ **Complete Step 7** - Setup analytics
6. ✅ **Complete Step 8** - Optimize and test
7. ✅ **Ongoing** - Share and keep updated

---

**Your portfolio is now live and ready to impress! 🎉**

*Last updated: July 15, 2026*
