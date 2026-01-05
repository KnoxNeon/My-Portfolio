# David Michel Portfolio - React & Next.js

A modern, responsive portfolio website built with React, Next.js, Tailwind CSS, and shadcn/ui components. This is a conversion of the original HTML portfolio into a fully functional React application.

## ✅ **Issues Fixed!**

### CSS Parsing Error
The CSS parsing error has been resolved by:
- Moving Google Fonts imports to Next.js font optimization
- Restructuring CSS imports to follow proper order
- Using Next.js font variables for better performance

### Next.js Image Configuration
Fixed external image loading by:
- Configuring `next.config.ts` to allow images from `lh3.googleusercontent.com`
- Using proper `remotePatterns` configuration for security

## Features

- ✨ Modern React with Next.js 15
- 🎨 Tailwind CSS v4 for styling
- 🌙 Dark/Light mode support (defaults to dark)
- 📱 Fully responsive design
- 🎯 shadcn/ui components
- 🚀 TypeScript support
- 📊 Optimized fonts with Next.js Font optimization
- 🖼️ Optimized images with Next.js Image component
- 🔗 Fixed social media sidebar (Facebook, X, LinkedIn, GitHub)
- 💼 Interactive projects showcase with live demos
- 🛠️ Technology logos in skills section
- 📱 Responsive social media bar for mobile devices
- 📧 Contact form with validation and submission handling
- 📞 Complete contact information (email, phone, WhatsApp)
- 🎯 Smooth scrolling navigation between sections

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: Material Icons & Material Symbols
- **Fonts**: Inter & Oswald (Google Fonts)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── Navigation.tsx       # Navigation component
│   ├── HeroSection.tsx      # Hero/landing section
│   ├── AboutSection.tsx     # About me section
│   ├── JourneySection.tsx   # Learning journey timeline
│   ├── SkillsSection.tsx    # Skills and tech stack with logos
│   ├── ProjectsSection.tsx  # Featured projects showcase
│   ├── ContactSection.tsx   # Contact form and information
│   ├── SocialSidebar.tsx    # Fixed social media links
│   └── ThemeProvider.tsx    # Dark/light mode context
└── lib/
    └── utils.ts             # Utility functions
```

## Key Components

### Navigation
- Fixed navigation bar with logo and menu items
- Responsive design with mobile menu button
- Smooth hover effects

### Hero Section
- Large typography with developer name
- Professional portrait with hover effects
- Call-to-action button
- Tech stack tags

### About Section
- Personal introduction and programming journey
- Work preferences and personality showcase
- Gaming hobby and interests outside programming
- Interactive cards highlighting personal traits
- Professional statistics and achievements

### Journey Section
- Detailed roadmap of learning progression
- Timeline layout with alternating sides
- Technology badges with color coding
- Visual timeline with connecting line

### Skills Section
- Categorized skill cards (Frontend, Backend, Database, DevOps)
- Interactive hover effects
- Material Icons for visual appeal

## Customization

### Colors
The primary color is set to `#FFD028` (vibrant yellow). You can modify this in:
- `globals.css` - CSS custom properties
- Component files - Direct color references

### Fonts
- **Display Font**: Oswald (headings)
- **Body Font**: Inter (body text)

### Dark Mode
- Double-click anywhere on the page to toggle dark/light mode
- Defaults to dark mode on load
- Respects system preferences

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Node.js

## Original Design

This React version maintains the exact design and functionality of the original HTML portfolio while adding:
- Component-based architecture
- Type safety with TypeScript
- Better performance with Next.js optimizations
- Reusable UI components with shadcn/ui

## License

This project is for portfolio purposes. Feel free to use as inspiration for your own portfolio!