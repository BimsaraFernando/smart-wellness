# Smart Wellness Academy - GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

## 🚀 Quick Start Deployment

### Step 1: Push to GitHub
```bash
# From the repository root
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The site will automatically deploy on push to main

### Step 3: Access Your Site
Your site will be available at: `https://[username].github.io/[repository-name]`

## 📁 Repository Structure
```
smart-wellness/                    # Repository root
├── README.md                      # Repository description
├── .github/workflows/deploy.yml   # GitHub Actions workflow
└── smart-wellness.backend/        # Next.js application
    ├── src/                       # Application source code
    ├── package.json               # Dependencies
    ├── next.config.ts             # Next.js configuration
    └── dist/                      # Built static files (generated)
```

## 🎯 What's Deployed
✅ **Public Website** - Home, Courses, News, Contact pages  
✅ **Admin Portal** - Login and dashboard (demo credentials below)  
✅ **Responsive Design** - Mobile and desktop friendly  
✅ **Static Export** - Fast loading, optimized for GitHub Pages  

### Demo Admin Credentials
- **Username:** `admin`
- **Password:** `wellness123`

## 🔧 Local Development & Testing

### Build and Preview Locally
```bash
# Navigate to the app directory
cd smart-wellness.backend

# Install dependencies
npm install

# Build for production
npm run build

# Preview the built site locally
npm run preview
# Or alternatively: cd dist && npx serve .
```

### Development Server
```bash
cd smart-wellness.backend
npm run dev
# Opens at http://localhost:3000
```

## 📋 Configuration Files

### Next.js Configuration (`next.config.ts`)
- **Static Export**: `output: 'export'`
- **Image Optimization**: Disabled for static hosting
- **Trailing Slashes**: Enabled for better routing
- **Output Directory**: `dist/`

### GitHub Actions (`.github/workflows/deploy.yml`)
- **Trigger**: Runs on push to main branch
- **Node.js**: Uses Node.js 18
- **Build**: Runs `npm run build`
- **Deploy**: Automatically deploys to GitHub Pages

## 🌐 Live Demo Features
- **Homepage**: Showcases academy features and programs
- **Courses**: Browse available wellness programs  
- **News**: Latest academy updates and announcements
- **Contact**: Get in touch form and contact details
- **Admin Dashboard**: Complete management interface (demo)

## 📝 Technical Notes
- **Subdirectory Deployment**: App builds from `smart-wellness.backend/`
- **Static Site**: No server-side functionality
- **Client-side Auth**: Admin uses localStorage (demo only)
- **Firebase**: Configured but not required for static deployment
- **SEO**: All pages are pre-rendered for better search indexing

## 🔄 Updating the Site
Any push to the main branch will automatically:
1. Trigger GitHub Actions workflow
2. Build the static site from `smart-wellness.backend/`
3. Deploy to GitHub Pages
4. Update goes live in ~5 minutes

## 🚨 Troubleshooting

### If GitHub Pages shows repository README instead of app:
1. Ensure `.github/workflows/deploy.yml` is in repository root
2. Check that workflow specifies correct working directory
3. Verify Pages source is set to "GitHub Actions" not "Deploy from branch"

### If build fails:
1. Check Actions tab for error details
2. Ensure all dependencies are in `package.json`
3. Test build locally: `cd smart-wellness.backend && npm run build`

## � Support
- Check the **Issues** tab for known problems
- Review **Actions** tab for deployment status
- Contact through the deployed contact form

---
**Ready to deploy!** Just push to GitHub and enable Pages in settings.