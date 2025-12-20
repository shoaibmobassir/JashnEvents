# JASHN Events & Hospitality - Next.js Website

A premium, luxury website built with Next.js 14, Tailwind CSS, and Three.js for JASHN Events & Hospitality Pvt. Ltd.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for premium styling
- 🎭 **Three.js** with React Three Fiber for 3D animations
- ✨ **Framer Motion** for smooth animations
- 📱 Fully responsive design
- 🚀 Optimized performance
- 🎯 TypeScript support

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Fonts**: Google Fonts (Playfair Display, Poppins)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
Jashn/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── portfolio/
│   │   └── page.tsx          # Portfolio/Gallery page
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── globals.css           # Global styles with Tailwind
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── Footer.tsx            # Footer component
│   ├── Hero3D.tsx            # Three.js hero animation
│   ├── Navbar.tsx            # Navigation component
│   ├── ScrollAnimation.tsx   # Scroll animation wrapper
│   └── WhatsAppButton.tsx    # WhatsApp CTA button
├── public/                   # Static assets
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## Customization

### Update Contact Information

1. **Phone Number**: Update in `components/WhatsAppButton.tsx` and all page components
2. **Email**: Update `info@jashnevents.com` in Footer and Contact page
3. **Address**: Update "Doodh Katora Colony, Arrah, Bihar 802301" in Footer and Contact page

### Update Images

Replace Unsplash image URLs with your own images:
- Add images to `public/images/` folder
- Update Image src paths in page components
- Use Next.js Image component for optimization

### Google Maps

The contact page includes a Google Maps embed. Update the iframe src in `app/contact/page.tsx` with your exact location.

### Three.js Animations

Customize 3D effects in `components/Hero3D.tsx`:
- Adjust particle count
- Change colors
- Modify rotation speeds
- Add more 3D elements

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Custom server with Node.js

## Performance Optimization

- Images are optimized with Next.js Image component
- Code splitting is automatic with Next.js
- CSS is purged automatically in production
- Three.js components are lazy-loaded

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2024 JASHN Events & Hospitality Pvt. Ltd. All rights reserved.

## Support

For questions or support, contact: info@jashnevents.com
