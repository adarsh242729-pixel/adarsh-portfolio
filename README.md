# Adarsh Singh — Full-Stack Developer & AI Engineer

**Portfolio Website** | React + Vite + Tailwind CSS + Framer Motion

🔗 **Live:** [https://startling-zuccutto-f87933.netlify.app/](https://startling-zuccutto-f87933.netlify.app/)

---

## 📋 About This Portfolio

A modern, animated portfolio website showcasing full-stack development skills, AI/ML integration experience, and featured projects. Built with cutting-edge web technologies and optimized for performance and SEO.

### ✨ Key Features

- ⚡ **Fast & Performant** - Vite-powered builds with ~90+ Lighthouse score
- 🎨 **Modern Design** - Dark theme with smooth animations via Framer Motion
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🔍 **SEO Optimized** - Meta tags, Open Graph, structured data
- 🧠 **AI-Ready Skills** - Showcasing OpenAI API, Langchain, Vector DBs
- 💼 **Project Showcase** - 6 featured projects with star ratings
- 🎯 **CTA Optimized** - Email copy feature, multiple contact methods

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
# Opens at http://localhost:3000

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📁 Project Structure

```
adarsh-portfolio/
├── src/
│   ├── components/
│   │   └── Adarsh_Singh_Portfolio.jsx  # Main portfolio component
│   ├── App.jsx                          # Root component
│   ├── main.jsx                         # React entry point
│   └── styles.css                       # Global styles
├── public/
│   └── portfolio-config.json            # Editable content config
├── index.html                           # HTML template
├── package.json                         # Dependencies
├── vite.config.js                       # Vite configuration
├── tailwind.config.cjs                  # Tailwind CSS config
├── postcss.config.cjs                   # PostCSS config
└── netlify.toml                         # Netlify deployment config
```

---

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **Vite 5.3.5** - Build tool
- **Tailwind CSS 3.4.14** - Styling
- **Framer Motion 11.11.1** - Animations
- **Lucide React 0.408.0** - Icon library

### DevOps & Deployment
- **Netlify** - Hosting & CI/CD
- **GitHub Actions** - Automated deployments
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility

---

## 📝 Customization

### Update Content

Edit `public/portfolio-config.json`:
```json
{
  "CONFIG": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your@email.com",
    "bio": "Your bio...",
    "skills": {
      "frontend": ["React", "Next.js", ...],
      "backend": ["Node.js", ...],
      ...
    }
  }
}
```

### Update Portfolio Component

Edit `src/components/Adarsh_Singh_Portfolio.jsx` to:
- Change colors and themes
- Add/remove sections
- Update project cards
- Modify animations

### Update Styles

Global styles in `src/styles.css` - customize Tailwind utilities and custom CSS.

---

## 🚀 Deployment

### Deploy to Netlify (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin master
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your GitHub repo
   - Use build command: `npm run build`
   - Use publish directory: `dist`

3. **Deploy automatically**
   - Every push to `master` automatically deploys!

### Custom Domain (Optional)

1. In Netlify dashboard → Site settings → Custom domain
2. Add your domain (e.g., `adarshsingh.dev`)
3. Update DNS records at your domain registrar
4. Enable HTTPS (automatic)

---

## 📊 SEO & Performance

- ✅ Meta tags for all social platforms (OG, Twitter)
- ✅ Mobile-responsive design
- ✅ Fast load times (Vite optimization)
- ✅ Semantic HTML structure
- ✅ Lighthouse optimized

---

## 📞 Contact & Links

- 📧 **Email:** adarsh242729@gmail.com
- 💼 **GitHub:** [github.com/adarsh242729-pixel](https://github.com/adarsh242729-pixel)
- 🔗 **LinkedIn:** [linkedin.com/in/adarsh-singh-dev](https://www.linkedin.com/in/adarsh-singh-dev/)
- 🐦 **Twitter:** [@adarshdev](https://twitter.com/adarshdev)

---

## 📈 Future Enhancements

- [ ] Blog section
- [ ] Resume download
- [ ] Dark/light mode toggle
- [ ] Contact form with backend
- [ ] Testimonials section
- [ ] Analytics tracking
- [ ] Newsletter signup

---

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ by Adarsh Singh**

*Last updated: July 15, 2026*
