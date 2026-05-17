# LENS - Multimedia Studio Landing Page

## Overview
A stunning, immersive landing page for a multimedia production company specializing in videography and photography. Features 3D animated backgrounds, smooth animations, and a modern design system.

## Key Features

### 🎨 Design System
- **Style**: Motion-Driven with 3D elements
- **Colors**: 
  - Primary: #2563EB (Blue)
  - Secondary: #FF1493 (Magenta)
  - Background: #0A0A0A (Deep Black)
- **Typography**: Archivo (headings) + Space Grotesk (body)

### ✨ Sections

1. **Hero Section**
   - 3D animated sphere background using Three.js
   - Gradient text effects
   - Smooth scroll indicator
   - Responsive CTAs

2. **Video Showreel**
   - Large video placeholder with play button
   - Hover effects and scaling animations
   - Professional presentation

3. **Featured Work**
   - Full project showcases (not just thumbnails)
   - Alternating layout for visual interest
   - Project details: client, year, category, description, tags
   - Case study CTAs
   - Hover interactions with tag reveals

4. **Meet Our Team**
   - 4 team members with photos
   - Role, bio, and specialty information
   - Social media links on hover
   - Smooth hover animations

5. **Partners Section**
   - Brand partner logos
   - Stats showcase (projects, clients, awards, experience)
   - Hover effects

6. **Contact Section**
   - Email and phone CTAs
   - Social media links (Instagram, LinkedIn, Vimeo)
   - Gradient buttons

### 🎭 Animations & Effects

- **3D Background**: Interactive Three.js sphere with distortion effects
- **Framer Motion**: Smooth page transitions and scroll animations
- **Hover States**: Scale, translate, and color transitions
- **Scroll Animations**: Elements fade in as you scroll
- **Parallax Effects**: Depth and layering
- **Accessibility**: Respects `prefers-reduced-motion`

### 📱 Modern Navigation

- Glassmorphic navbar with blur effect
- Smooth scroll to sections
- Mobile responsive with hamburger menu
- Gradient logo and CTAs
- Underline hover effects

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Three.js** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for Three.js
- **Framer Motion** - Animation library

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Design Principles

1. **Visual First**: Let the work speak through large, immersive imagery
2. **Motion-Driven**: Smooth animations that enhance the experience
3. **Professional**: Clean, modern aesthetic that builds trust
4. **Accessible**: Respects user preferences and follows best practices
5. **Performance**: Optimized animations using GPU acceleration

## Customization

### Update Projects
Edit the `projects` array in `src/app/page.tsx` to add your own work.

### Update Team
Edit the `team` array in `src/app/page.tsx` to showcase your team members.

### Update Partners
Edit the `partners` array in `src/app/page.tsx` to display your brand partners.

### Change Colors
Update the gradient colors throughout the file:
- Primary: `#2563EB` (blue)
- Secondary: `#FF1493` (magenta)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Notes

- 3D background is GPU-accelerated
- Images should be optimized (WebP format recommended)
- Animations respect `prefers-reduced-motion`
- Lazy loading for off-screen content
