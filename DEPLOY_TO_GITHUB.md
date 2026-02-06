# 🚀 Deploy to GitHub - Step by Step

## Step 1: Install Git (if not installed)
Download and install Git from: https://git-scm.com/download/win

## Step 2: Open Command Prompt/Terminal
1. Press `Win + R`
2. Type `cmd` and press Enter
3. Navigate to your project:
   ```bash
   cd C:\Users\palay\CascadeProjects\ankii-portfolio
   ```

## Step 3: Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit - Ayush Pal Portfolio"
```

## Step 4: Create GitHub Repository
1. Go to https://github.com/ayushxpal
2. Click "New repository"
3. Name: `ayush-portfolio`
4. Description: `Modern portfolio website for Ayush Pal`
5. Make it **Public**
6. Click "Create repository"

## Step 5: Push to GitHub
```bash
git remote add origin https://github.com/ayushxpal/ayush-portfolio.git
git branch -M main
git push -u origin main
```

## Step 6: Deploy to Vercel
1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Select `ayush-portfolio` repository
5. Click "Deploy"
6. Your site will be live at: `https://ayush-portfolio.vercel.app`

## 🎉 Done!

Your portfolio will be live and accessible to everyone!

### Repository URL: https://github.com/ayushxpal/ayush-portfolio
### Live Site: https://ayush-portfolio.vercel.app

---

**Note**: If you face any issues, make sure:
- Git is properly installed
- You're logged into GitHub (`git config --global user.name "ayushxpal"`)
- Your GitHub token has push permissions
