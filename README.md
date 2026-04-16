
# ⚡ NexusDash - The Ultimate SaaS Prototyping Engine
![NexusDash Banner](./public/banner.png)

**NexusDash** is a high-performance **Next.js 16** application designed for developers and SaaS founders to prototype enterprise-grade dashboard interfaces in seconds. Beyond being a visual editor, it is a full-scale engineering tool featuring a **Zustand-powered** state engine, sector-specific template presets, and a dynamic code generator.

-----

## 📍 Table of Contents

- [🚀 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🎥 Demo & Screenshots](#-demo--screenshots)
- [🏗️ Architecture & Performance](#️-architecture--performance)
- [📦 Installation & Setup](#-installation--setup)
- [🔗 Contact](#-contact)

-----

## 🚀 Features

- **Dynamic Template Engine:** One-click presets for E-Commerce, Crypto, and Analytics sectors with tailored data sets and UI components.
- **Live Code Generator (Export):** Instantly transform your custom design into clean, production-ready Next.js + Tailwind CSS code.
- **Responsive Device Simulator:** Test your dashboard across Mobile (375px), Tablet (768px), and Desktop viewports with smooth transitions.
- **Global State Management:** Real-time reactivity for theme colors, border-radius, and layout configurations powered by a high-performance Zustand store.
- **Dark Mode Excellence:** Full support for dark/light themes via `next-themes` and Shadcn/UI integration.

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **State Management:** Zustand (Zero-boilerplate centralized state)
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/UI & Radix UI
- **Data Visualization:** Recharts (Dynamic SVG-based charting)
- **Icons:** Lucide React

## 🎥 Demo & Screenshots
### Live Preview
[View Live Demo](https://nexus-dash-generator.vercel.app/)

-0--

### Application Screenshots

| 🌑 Dark Mode | 📱 Mobile Simulation | 💻 Code Export Modal |
|---|---|---|
| ![Dark Mode](./public/darkmode.png) | ![Mobile](./public/mobile.png) | ![Export](./public/export.png) |

## 🏗️ Architecture & Performance

The application is engineered for scalability and developer efficiency:

- **Atomic Component Structure:** By separating the `editor`, `preview`, and `ui` layers, the codebase remains modular and easy to extend with new dashboard widgets.
- **State Optimization (Zustand):** To avoid the performance overhead of React Context API for frequent UI updates, a centralized Zustand store manages the configuration, ensuring 60fps responsiveness during customization.
- **String Manipulation Engine:** The `lib/generateCode.ts` layer acts as a compiler, mapping the current JSON configuration into a clean JSX template literal for instant clipboard sharing.
- **Viewport Transformation:** Uses CSS transitions combined with dynamic Tailwind `max-w` constraints to simulate device viewports without the need for heavy iframes.

## 📦 Installation & Setup

Follow these steps to run the project locally:

1. **Clone the repository:**

```bash
git clone [https://github.com/kasimugur/nexusdash.git](https://github.com/kasimugur/nexusdash.git)
cd nexusdash
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to start building.

---

# 🔗 Contact

**Developer:** Kasım Uğur  
**GitHub:** [https://github.com/kasimugur/](https://github.com/kasimugur/)  
**LinkedIn:** [https://www.linkedin.com/in/kasimugur/](https://www.linkedin.com/in/kasimugur/)
```