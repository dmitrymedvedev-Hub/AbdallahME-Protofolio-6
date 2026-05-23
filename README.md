# Kimi AI Portfolio

A modern, responsive portfolio website showcasing innovative design and cutting-edge technology. Built with React, TypeScript, Vite, and Tailwind CSS, featuring interactive 3D elements and smooth animations.

![Portfolio Preview](./public/images/hero-bg.png)

## ✨ Features

- **Modern UI Design**: Clean, contemporary interface with attention to detail
- **Interactive 3D Elements**: Engaging Three.js 3D ASCII sphere animation in the hero section
- **Smooth Animations**: Enhanced user experience with GSAP-powered scroll animations
- **Fully Responsive**: Optimized for all device sizes from mobile to desktop
- **Component-Rich Interface**: Over 40 reusable UI components from shadcn/ui
- **Performance Optimized**: Fast loading times and smooth interactions
- **Mobile-Friendly Navigation**: Intuitive menu system for all devices
- **Contact Integration**: Functional contact form for easy communication

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 3.4.19 + Tailwind Animate
- **Routing**: React Router v7
- **Animations**: GSAP 3.15.0, Three.js 0.184.0, Lenis smooth scrolling
- **UI Components**: Shadcn/UI (40+ components)
- **Icons**: Lucide React
- **Data Visualization**: Recharts
- **Form Management**: React Hook Form + Zod validation

## 🚀 Live Demo

Check out the live deployment: [Portfolio Demo](https://your-demo-url.com)

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) 18 or higher
- npm or yarn package manager

## 🛠️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/username/portfolio-kimi-ai.git
   cd portfolio-kimi-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:3000`

## ▶️ Available Scripts

- `npm run dev` - Start the development server with hot reloading
- `npm run build` - Create a production-ready build
- `npm run preview` - Preview the production build locally
- `npm run lint` - Check code quality and identify potential issues

## 📁 Project Structure

```
src/
  ├── components/          # Reusable React components
  │   ├── ui/             # Shadcn/ui components
  │   ├── Navigation.tsx   # Navigation header
  │   ├── Layout.tsx       # Main layout wrapper
  │   ├── Footer.tsx       # Footer component
  │   └── AsciiSphere.tsx  # 3D ASCII sphere animation
  ├── sections/            # Page sections
  │   ├── HeroSection.tsx
  │   ├── ProjectsSection.tsx
  │   ├── SkillsSection.tsx
  │   ├── AboutSnippet.tsx
  │   └── ContactSection.tsx
  ├── pages/               # Page-level components
  │   ├── HomePage.tsx
  │   └── AboutPage.tsx
  ├── hooks/               # Custom React hooks
  │   └── useScrollAnimation.ts
  ├── lib/                 # Utility functions and helpers
  │   └── utils.ts
  ├── App.tsx              # Main application component
  ├── main.tsx             # Application entry point
  └── index.css            # Global styles
```

## 🎨 Customization

To customize this portfolio for your own use:

1. Update the content in the [sections](./src/sections) folder with your information
2. Replace images in the `public/images` directory
3. Modify color schemes in `tailwind.config.js`
4. Adjust fonts and typography in the CSS files
5. Update metadata in `index.html`

## 🌐 Deployment

Deploy this application with popular hosting platforms:

### Netlify
```
npm run build
```
Then drag and drop the `dist` folder to Netlify.

### Vercel
```
npm run build
```
Connect your GitHub repository to Vercel for automatic deployments.

### GitHub Pages
```
npm run build
```
Enable GitHub Pages in your repository settings, pointing to the `dist` folder.

## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please make sure your code adheres to the existing style and includes appropriate documentation.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💬 Author

**Kimi AI**

- Portfolio: [your-portfolio.com](https://your-portfolio.com)
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [your-linkedin](https://linkedin.com/in/your-profile)

## 🔧 Support & Issues

If you encounter any issues or bugs, please open an issue in the GitHub repository. For questions or support, feel free to contact me through the channels above.

## 🙏 Acknowledgments

- Inspired by modern design principles and creative portfolios
- Built with the amazing open-source tools and libraries listed in the tech stack
- Special thanks to the contributors of all the libraries used in this project
