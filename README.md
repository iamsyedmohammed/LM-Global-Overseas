# LM Global Overseas - Immigration Consultancy Website

A modern, high-conversion immigration consultancy website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS v4
- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **SEO Optimized**: Metadata, sitemap, robots.txt, and semantic HTML
- **Interactive Tools**: 
  - Eligibility Checker
  - Document Checklist Generator
  - CRS Points Calculator
- **Dynamic Pages**: Service and country detail pages with static generation
- **Contact Form**: Integrated with Nodemailer for lead generation
- **Performance**: Optimized images, fonts, and Core Web Vitals

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# SMTP Configuration (for contact form)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
SMTP_FROM="LM Global Website" <noreply@lmglobaloverseas.com>
CONTACT_EMAIL=info@lmglobaloverseas.com
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── services/
│   ├── countries/
│   ├── tools/
│   ├── contact/
│   └── api/
├── components/             # React components
│   ├── layout/            # Header, Footer
│   ├── ui/                # Reusable UI components
│   ├── home/              # Home page sections
│   └── forms/             # Form components
├── data/                  # Static data files
│   ├── countries.ts
│   ├── services.ts
│   └── testimonials.ts
└── lib/                   # Utility functions
```

## 🎨 Customization

### Update Contact Information

Edit the following files:
- `src/components/layout/Footer.tsx`
- `src/app/contact/page.tsx`
- `src/components/layout/Header.tsx` (WhatsApp number)

### Update Content

- **Countries**: `src/data/countries.ts`
- **Services**: `src/data/services.ts`
- **Testimonials**: `src/data/testimonials.ts`

### Update Colors

Edit `src/app/globals.css`:

```css
:root {
  --primary: #0033CC;
  --primary-dark: #002299;
  --accent: #FFD700;
}
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build the static export:

```bash
npm run build
```

Deploy the `.next` folder to your hosting provider.

## 📝 TODO

- [ ] Add blog functionality
- [ ] Integrate CMS (optional)
- [ ] Add success gallery with lightbox
- [ ] Implement WhatsApp Business API
- [ ] Add Google Analytics
- [ ] Add live chat widget

## 📄 License

© 2024 LM Global Overseas. All rights reserved.

## 🤝 Support

For support, email info@lmglobaloverseas.com or call +91 98765 43210.
