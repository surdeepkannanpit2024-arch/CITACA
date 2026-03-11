# CIT College Dashboard - Quick Start Guide

## System Requirements
- Node.js 16+ 
- npm 7+
- Modern browser (Chrome, Firefox, Safari, Edge)

## Installation for Fedora KDE

### Step 1: Install Dependencies
```bash
sudo dnf update -y
sudo dnf install -y nodejs npm git
```

### Step 2: Extract and Navigate
```bash
unzip cit-college-dashboard.zip
cd cit-college-dashboard
```

### Step 3: Install Project Dependencies
```bash
npm install
```

### Step 4: Start Development Server
```bash
npm run dev
```

The app will automatically open at `http://localhost:3000`

## Using the Setup Script (Recommended)

```bash
# Extract the zip file
unzip cit-college-dashboard.zip
cd cit-college-dashboard

# Make script executable
chmod +x setup.sh

# Run setup
./setup.sh

# Start the app
npm run dev
```

## Test Login

### Credentials
- **Email**: demo@cit.edu.in
- **Password**: (any password works for demo)

### Test Different Roles
1. **Student** - Full student portal
2. **Faculty** - Teacher portal
3. **HOD** - Head of department
4. **Parent** - Parent monitoring
5. **Admin** - System administration

## Access Different Features

### Student Features
- Dashboard: Auto-redirects after login
- Attendance: `/attendance`
- Marks: `/marks`
- Notes: `/notes`
- Leaderboard: `/leaderboard`
- Competitions: `/competitions`
- Chat: `/chatbot`

### Faculty Features
- Dashboard: Auto-redirects
- Attendance Manager: `/attendance-manager`
- Upload Notes: `/notes-upload`
- Assignments: `/assignments`

### Other Roles
- HOD: `/dashboard`
- Parent: `/dashboard`
- Admin: `/dashboard`

## Building for Production

```bash
# Build optimized version
npm run build

# Preview before deployment
npm run preview
```

Output will be in the `dist/` folder.

## Deployment Options

### 1. Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### 2. Netlify
- Connect your GitHub repo to Netlify
- Auto-deploys on push

### 3. AWS S3 + CloudFront
```bash
npm run build
# Upload dist/ folder to S3
```

## Troubleshooting

### npm install fails
```bash
# Clear npm cache
npm cache clean --force

# Try again
npm install
```

### Port 3000 already in use
```bash
# Use different port
npm run dev -- --port 3001
```

### PWA not installing
- Must be HTTPS (localhost works for testing)
- Check browser DevTools > Application > Manifest

## Customization

### Change Colors
Edit `src/index.css` or `tailwind.config.js`

### Update College Name
Search for "CIT" in `index.html` and screens

### Add Your Logo
Place PNG file in `public/` and update `src/screens/SplashScreen.jsx`

## Features Ready to Use

✅ Complete student dashboard
✅ Attendance tracking with charts
✅ Marks management
✅ Study notes repository
✅ Leaderboard system
✅ Competition listings
✅ AI chatbot interface
✅ Faculty management
✅ Admin controls
✅ Parent monitoring
✅ Dark mode ready
✅ Offline support (PWA)

## Performance Tips

- Use Chrome DevTools for lighthouse testing
- Enable network throttling to test offline mode
- Check build size: `npm run build -- --analyze`

## Support & Documentation

- React: https://react.dev
- Vite: https://vitejs.dev
- Tailwind: https://tailwindcss.com
- Recharts: https://recharts.org

## Next Steps

1. ✅ Install and run locally
2. 📝 Customize with your college data
3. 🎨 Update branding/colors
4. 🔌 Connect to backend API
5. 🚀 Deploy to production

---

**Happy coding! 🚀**
