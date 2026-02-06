# 🚀 FINAL DEPLOY COMMANDS - ayushxpal-portfolio

## STEP 1: Create GitHub Token
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name: `Portfolio Deploy`
4. Check `repo` (all repo permissions)
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)

## STEP 2: Git Commands (Copy & Paste ONE BY ONE)

Open Command Prompt and run:

```
cd C:\Users\palay\CascadeProjects\ayushxpal-portfolio
```

```
git init
```

```
git add .
```

```
git commit -m "Initial commit - Ayush Pal Portfolio"
```

```
git branch -M main
```

```
git remote add origin https://YOUR_TOKEN@github.com/ayushxpal/ayush-portfolio.git
```
**IMPORTANT**: Replace `YOUR_TOKEN` with the token you copied

```
git push -u origin main
```

## STEP 3: Create GitHub Repository
1. Go to: https://github.com/ayushxpal
2. Click "New repository"
3. Name: `ayush-portfolio`
4. Make it **Public**
5. Click "Create repository"

## STEP 4: Deploy to Vercel
1. Go to: https://vercel.com
2. Click "New Project"
3. Connect GitHub
4. Select `ayush-portfolio`
5. Click "Deploy"

## 🎉 SUCCESS!

Your portfolio will be live at: `https://ayush-portfolio.vercel.app`

---

**Repository**: https://github.com/ayushxpal/ayush-portfolio
**Live Site**: https://ayush-portfolio.vercel.app
