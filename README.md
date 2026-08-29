# 🚀 Akarshak Mishra — Developer Portfolio

Welcome to the source code for my personal developer portfolio! This project is a minimalist, highly interactive web portfolio built from the ground up to showcase my skills in Full-Stack Development and Artificial Intelligence.

## 🌟 Live Demo
👉 **[View Live Portfolio](portfolio-lilac-omega-62.vercel.app)**

*(Note: If you deployed to Vercel, replace the link above with your Vercel URL!)*

## 🛠️ Tech Stack & Architecture

This portfolio intentionally avoids heavy JS frameworks (like React or Next.js) to demonstrate core engineering fundamentals, blazing-fast load times, and raw DOM manipulation skills.

- **Frontend:** Pure Semantic HTML5
- **Styling:** Vanilla CSS3 (Custom Variables, Flexbox/Grid, Glassmorphism, Micro-animations)
- **Logic & State:** Vanilla JavaScript (ES6+)
- **Data Layer:** Centralized `data.js` acting as a localized CMS for seamless content updates.
- **Hosting:** Deployed via GitHub Pages / Vercel.

## ✨ Key Features

- **Component-Driven Vanilla JS:** Dynamic rendering of Hackathons, Projects, and Education sections directly from a central JSON-like configuration file.
- **Advanced UI/UX:** Features a sleek dark-mode aesthetic with backdrop-filter glassmorphism, responsive navigation, and smooth intersection-observer fade-in animations.
- **Interactive Modals:** Custom-built modal engine that dynamically loads markdown-style project architectures and seamlessly embeds PDF certificates directly in the browser.
- **Performance:** Optimized for maximum speed and accessibility without relying on external UI libraries.

## 📂 File Structure

```text
├── index.html              # Entry point & semantic structure
├── assets/
│   ├── Akarshak_Mishra_Resume.pdf # Downloadable resume
│   ├── css/
│   │   ├── variables.css   # Global design tokens (colors, fonts, spacing)
│   │   ├── base.css        # Resets, animations, typography
│   │   ├── components.css  # Buttons, cards, modals, tags
│   │   └── sections.css    # Layout for Hero, Projects, Education
│   ├── js/
│   │   ├── data.js         # Single source of truth for all content
│   │   └── app.js          # Rendering Engine, Observers, Modal logic
│   └── certificates/       # Locally hosted PDF certificates
```

## 🚀 Running Locally

Because this project uses pure HTML/CSS/JS, no build steps or package managers are required!

1. Clone the repository:
   ```bash
   git clone https://github.com/akarshakmishra47-afk/Portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Portfolio
   ```
3. Open `index.html` in your browser, or use an extension like VS Code **Live Server** for hot reloading.

## 🤝 Connect with Me

- **LinkedIn:** [Akarshak Mishra](https://www.linkedin.com/in/akarshak-mishra-b75503383)
- **GitHub:** [@akarshakmishra47-afk](https://github.com/akarshakmishra47-afk)
- **Email:** akarshakmishra47@gmail.com
