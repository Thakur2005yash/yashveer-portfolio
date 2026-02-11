# Yashveer Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- 🎨 Modern dark/light mode toggle
- 📱 Fully responsive design
- ⚡ Fast loading with optimized components
- 📧 Contact form with email integration
- 🎯 Skills section with real tech logos
- 🏆 Coding profiles section
- 📊 GitHub contributions heatmap
- 🔄 Smooth animations and transitions

## Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS v3
- **Build Tool**: Vite
- **Icons**: Devicon
- **Deployment**: Vercel

## Quick Start

1. Clone the repository
```bash
git clone https://github.com/yashveer/yashveer-portfolio.git
cd yashveer-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Hero section
│   ├── About.jsx         # About section
│   ├── Skills.jsx        # Skills with progress bars
│   ├── SkillsLogos.jsx   # Tech stack logos
│   ├── Projects.jsx      # Projects showcase
│   ├── CodingProfiles.jsx # Coding platform links
│   ├── Contact.jsx       # Contact section
│   ├── ContactModal.jsx  # Contact form modal
│   ├── Footer.jsx        # Footer component
│   ├── Navbar.jsx        # Navigation bar
│   ├── BottomNav.jsx     # Floating navigation
│   ├── GitHubContributions.jsx # GitHub heatmap
│   ├── WaveBackground.jsx # Animated background
│   └── LoadingOverlay.jsx # Loading screen
├── App.jsx              # Main app component
└── index.css            # Global styles
```

## Configuration

### GitHub Contributions
Add your GitHub token to `.env.local`:
```
GITHUB_TOKEN=your_github_token_here
```

### Contact Form
The contact form uses mailto integration to open user's email client with pre-filled details.

## Deployment

Deploy to Vercel:
1. Connect your GitHub repository
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy!

## Customization

- Update personal info in `Hero.jsx`, `About.jsx`, and `Contact.jsx`
- Add/remove skills in `Skills.jsx` and `SkillsLogos.jsx`
- Update projects in `Projects.jsx`
- Modify colors in `index.css`

## License

MIT License - feel free to use this template for your own portfolio!

---

Made with ❤️ by [Yashveer](https://github.com/yashveer)
