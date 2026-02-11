# 🚀 FAST DEPLOY - Copy & Paste These Commands

## STEP 1: Open Command Prompt
1. Press `Win + R`
2. Type `cmd` and press Enter

## STEP 2: Navigate to Project
Copy & paste this:
```
cd C:\Users\palay\CascadeProjects\ankii-portfolio
```

## STEP 3: Create GitHub Token
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name: `Portfolio Deploy`
4. Check `repo` (all repo permissions)
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)

## STEP 4: Git Commands (Replace YOUR_TOKEN)
Copy & paste these ONE BY ONE:

```
git init
```

```
git add .
```

```
git commit -m "Initial commit - Yashveer Portfolio"
```

```
git branch -M main
```

```
git remote add origin https://YOUR_TOKEN@github.com/yashveer/yashveer-portfolio.git
```
**IMPORTANT**: Replace `YOUR_TOKEN` with the token you copied

```
git push -u origin main
```

## STEP 5: Create Repository
1. Go to: https://github.com/yashveer
2. Click "New repository"
3. Name: `yashveer-portfolio`
4. Make it **Public**
5. Click "Create repository"

## STEP 6: Deploy to Vercel
1. Go to: https://vercel.com
2. Click "New Project"
3. Connect GitHub
4. Select `yashveer-portfolio`
5. Click "Deploy"

## 🎉 DONE!

Your site will be live at: `https://yashveer-portfolio.vercel.app`

---

**If Step 4 fails**: Make sure you replaced `YOUR_TOKEN` with your actual GitHub token!
