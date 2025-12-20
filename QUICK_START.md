# Quick Start Guide - JASHN Next.js Website

## ✅ Installation Complete!

Your Next.js website with Tailwind CSS and Three.js is ready to use.

## 🚀 Running the Website

The development server should already be running. If not, run:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
Jashn/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page (with Three.js hero)
│   ├── about/page.tsx     # About page
│   ├── services/page.tsx  # Services page
│   ├── portfolio/page.tsx # Portfolio with filters
│   ├── contact/page.tsx   # Contact form & map
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global Tailwind styles
│
├── components/            # Reusable React components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer component
│   ├── Hero3D.tsx        # Three.js 3D particles
│   ├── ScrollAnimation.tsx # Framer Motion animations
│   └── WhatsAppButton.tsx # WhatsApp CTA button
│
└── Configuration files
    ├── tailwind.config.js  # Tailwind CSS config
    ├── next.config.js      # Next.js config
    └── tsconfig.json       # TypeScript config
```

## ✨ Features Implemented

### 🎨 Design
- ✅ Premium luxury color scheme (Charcoal, Ivory, Gold)
- ✅ Elegant typography (Playfair Display + Poppins)
- ✅ Fully responsive design
- ✅ Smooth animations with Framer Motion

### 🎭 Three.js Effects
- ✅ 3D floating particles in hero section
- ✅ Interactive animations
- ✅ Performance optimized

### 📱 Pages
- ✅ Home page with hero, services, portfolio preview
- ✅ About page with company story
- ✅ Services page with detailed descriptions
- ✅ Portfolio page with category filters
- ✅ Contact page with form and Google Maps

### 🛠️ Functionality
- ✅ Mobile-responsive navigation
- ✅ Portfolio filtering
- ✅ Contact form (ready for backend integration)
- ✅ WhatsApp click-to-chat button
- ✅ Scroll animations
- ✅ Smooth page transitions

## 🎯 Next Steps

### 1. Update Contact Information
- Phone: Update in `components/WhatsAppButton.tsx` and contact pages
- Email: Update `info@jashnevents.com`
- Address: Already set to "Doodh Katora Colony, Arrah, Bihar 802301"

### 2. Replace Images
Current images use Unsplash placeholders. Replace with your actual event photos:
- Add images to `public/images/`
- Update image paths in page components
- Next.js Image component will optimize them automatically

### 3. Connect Contact Form
The contact form currently shows an alert. To make it functional:
- Set up a backend API endpoint
- Update form submission in `app/contact/page.tsx`
- Add form validation and error handling

### 4. Customize Three.js Effects
Modify `components/Hero3D.tsx` to:
- Change particle colors
- Adjust particle count
- Add more 3D elements

## 🚢 Deployment

### Deploy to Vercel (Easiest)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Build for Production
```bash
npm run build
npm start
```

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

### Build errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Three.js](https://threejs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)

## 💡 Tips

- Use `npm run dev` for development (hot reload)
- Use `npm run build` to check for build errors
- Images are automatically optimized by Next.js
- Three.js components only load on client side (better performance)

---

**Your website is ready!** 🎉

Open http://localhost:3000 to see it in action.
