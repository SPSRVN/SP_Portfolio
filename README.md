# XR Developer Portfolio - Saravana Prakash R

A stunning, interactive portfolio website showcasing XR development expertise with immersive 3D effects and modern design.

## ✨ Features

- **3D Particle Background**: Interactive Three.js particle system that responds to mouse movement
- **Glassmorphism Design**: Premium frosted glass effects with neon accents
- **Smooth Animations**: GSAP-powered scroll animations and transitions
- **Typed Text Effect**: Dynamic hero subtitle with rotating messages
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Project Showcase**: Interactive grid featuring 9+ VR/AR projects
- **Experience Timeline**: Visual timeline of professional journey
- **Skills Display**: Categorized primary and secondary skills
- **Training Section**: Workshops and bootcamps conducted

## 🎨 Design

- **Color Palette**: Futuristic dark theme with cyan (#00f5ff), purple (#a855f7), and pink (#ec4899) accents
- **Typography**: Inter for body text, Orbitron for headings
- **Effects**: Glassmorphism, gradients, neon glows, smooth transitions

## 🚀 Getting Started

### Option 1: Direct Browser (Recommended)

Simply open `index.html` in your browser. All dependencies are loaded via CDN.

```bash
# Navigate to the project directory
cd "c:\Users\901969\Documents\SP Portfolio"

# Open in default browser (Windows)
start index.html
```

### Option 2: Local Server

For best performance, serve the files using a local web server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

**Using Node.js (if available):**
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server -p 8000

# Then visit: http://localhost:8000
```

## 📁 Project Structure

```
SP Portfolio/
├── index.html          # Main HTML structure
├── style.css           # Complete design system
├── main.js             # Interactive features & animations
├── assets/             # Images, videos, icons (add your content here)
└── README.md           # This file
```

## 🎯 Customization

### Adding Project Images

Replace the placeholder icons in project cards with actual images:

1. Add images to the `assets/` folder
2. Update `index.html` project cards:
```html
<div class="project-image">
    <img src="assets/your-project-image.jpg" alt="Project Name">
</div>
```

### Adding a Profile Photo

1. Add your photo to `assets/` folder (e.g., `profile.jpg`)
2. Add to the About section in `index.html`

### Customizing Colors

Edit CSS custom properties in `style.css`:
```css
:root {
    --color-primary: #00f5ff;      /* Change primary accent */
    --color-secondary: #a855f7;    /* Change secondary accent */
    --color-accent: #ec4899;       /* Change tertiary accent */
}
```

## 📱 Browser Support

- Chrome/Edge (recommended) - Full support
- Firefox - Full support
- Safari - Full support
- Mobile browsers - Full support

## 🔧 Technologies Used

- **HTML5**: Semantic markup with SEO optimization
- **CSS3**: Custom properties, Flexbox, Grid, animations
- **JavaScript (ES6+)**: Modern syntax and features
- **Three.js**: 3D particle background
- **GSAP**: Scroll-triggered animations
- **Google Fonts**: Inter & Orbitron typography

## 📝 Content Updates

All content is in `index.html`. Update the following sections as needed:

- **Hero**: Name, title, rotating subtitles
- **About**: Professional summary, stats
- **Experience**: Work history (timeline items)
- **Projects**: Project cards with descriptions and tags
- **Training**: Workshops and bootcamps
- **Skills**: Technology skills and expertise
- **Contact**: Email, phone, location

## 🎬 Performance

- Lazy loading for heavy animations
- Optimized particle count for mobile
- Pauses animations when tab is hidden
- Responsive images and assets
- Minimal dependencies via CDN

## 📄 License

This portfolio website is created for Saravana Prakash R. Feel free to use the code structure for your own portfolio.

## 🤝 Credits

- Design & Development: Created with Antigravity AI
- 3D Effects: Three.js
- Animations: GSAP
- Fonts: Google Fonts (Inter, Orbitron)

---

**Crafting Immersive Experiences Through XR Technology** 🚀
