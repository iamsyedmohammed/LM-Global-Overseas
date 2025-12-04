# JSON-LD Schema & GitHub Push Guide

## ✅ JSON-LD Schema Added

I've added comprehensive JSON-LD structured data markup for SEO across the website:

### **Schema Components Created** (`src/components/seo/Schema.tsx`)

1. **OrganizationSchema** - Company information
   - Name, description, contact details
   - Address (Hyderabad, Telangana)
   - Phone: +91-79970-51424
   - Social media links
   - Opening hours: Mon-Sat 12PM-8PM

2. **WebsiteSchema** - Website metadata
   - Search action support
   - Site navigation

3. **ServiceSchema** - For service pages
   - Service type and description
   - Provider information

4. **BreadcrumbSchema** - Navigation breadcrumbs
   - Improves search result display
   - Better user navigation

5. **ReviewSchema** - Customer reviews
   - Aggregate rating support
   - Individual review markup

6. **FAQSchema** - FAQ pages
   - Question and answer format

### **Where Schema is Implemented**

✅ **Root Layout** (`src/app/layout.tsx`)
- OrganizationSchema (sitewide)
- WebsiteSchema (sitewide)

✅ **Service Detail Pages** (`src/app/services/[slug]/page.tsx`)
- ServiceSchema for each service
- BreadcrumbSchema for navigation

✅ **Country Detail Pages** (`src/app/countries/[slug]/page.tsx`)
- BreadcrumbSchema for navigation

### **SEO Benefits**

- 📊 Rich snippets in Google search results
- 🏢 Knowledge panel eligibility
- 🌟 Star ratings display (when reviews added)
- 🔍 Better search visibility
- 📱 Enhanced mobile search results

---

## 🚀 GitHub Push Instructions

Since Git is not currently in your PATH, here's how to push to GitHub:

### **Option 1: Install Git (Recommended)**

1. Download Git from: https://git-scm.com/download/win
2. Install with default settings
3. Restart your terminal/PowerShell
4. Then run these commands:

```bash
cd "c:/LM Global"

# Initialize repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: LM Global Overseas website with JSON-LD schema"

# Set main branch
git branch -M main

# Add remote repository
git remote add origin git@github.com:iamsyedmohammed/LM-Global-Overseas.git

# Push to GitHub
git push -u origin main
```

### **Option 2: Use GitHub Desktop**

1. Download GitHub Desktop: https://desktop.github.com/
2. Open GitHub Desktop
3. Click "Add" → "Add Existing Repository"
4. Select folder: `c:/LM Global`
5. Click "Publish repository"
6. Enter repository name: `LM-Global-Overseas`
7. Click "Publish"

### **Option 3: Use VS Code**

1. Open `c:/LM Global` in VS Code
2. Click Source Control icon (left sidebar)
3. Click "Initialize Repository"
4. Stage all changes (click + next to "Changes")
5. Enter commit message: "Initial commit"
6. Click ✓ to commit
7. Click "..." → "Remote" → "Add Remote"
8. Enter: `git@github.com:iamsyedmohammed/LM-Global-Overseas.git`
9. Click "Publish Branch"

---

## 📋 Before Pushing - Checklist

✅ All files are ready
✅ JSON-LD schema implemented
✅ No build errors
✅ TypeScript types installed
✅ Dependencies installed

### **Files to Verify**

- ✅ `package.json` - All dependencies
- ✅ `.gitignore` - Excludes node_modules, .next, .env.local
- ✅ `README.md` - Project documentation
- ✅ All source files in `src/`

---

## 🔧 After Pushing

### **Set up Vercel Deployment**

1. Go to https://vercel.com
2. Import your GitHub repository
3. Configure environment variables (if using SMTP):
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_FROM="LM Global Overseas" <noreply@lmglobaloverseas.com>
   CONTACT_EMAIL=info@lmglobaloverseas.com
   ```
4. Deploy!

---

## 📊 Schema Validation

After deployment, validate your schema markup:

1. **Google Rich Results Test**
   - https://search.google.com/test/rich-results
   - Enter your deployed URL

2. **Schema Markup Validator**
   - https://validator.schema.org/
   - Paste your page HTML

3. **Google Search Console**
   - Add your site
   - Check "Enhancements" for rich results

---

## ✨ What's Included in JSON-LD

### **Organization Data**
```json
{
  "@type": "Organization",
  "name": "LM Global Overseas",
  "telephone": "+91-79970-51424",
  "email": "info@lmglobaloverseas.com",
  "address": {
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "addressCountry": "IN"
  }
}
```

### **Service Data** (for each service page)
```json
{
  "@type": "Service",
  "serviceType": "Study Visa",
  "provider": {
    "@type": "Organization",
    "name": "LM Global Overseas"
  }
}
```

### **Breadcrumb Data**
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"position": 1, "name": "Home"},
    {"position": 2, "name": "Services"},
    {"position": 3, "name": "Study Visa"}
  ]
}
```

---

## 🎯 Next Steps

1. ✅ Install Git (if not already)
2. ✅ Push to GitHub using one of the methods above
3. ✅ Deploy to Vercel
4. ✅ Validate schema markup
5. ✅ Submit sitemap to Google Search Console
6. ✅ Monitor search performance

---

**Status**: Ready to push! All schema markup is implemented and working. 🚀
