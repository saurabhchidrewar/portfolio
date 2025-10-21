# Saurabh Chidrewar - Portfolio Website

A modern, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my work experience, projects, skills, and achievements in a visually stunning and responsive design.

## ✨ Features

-   **Modern Design**: Clean, professional UI with smooth animations and transitions
-   **Fully Responsive**: Optimized for all device sizes from mobile to desktop
-   **Data-Driven**: All content is managed through JSON files for easy updates
-   **Type-Safe**: Built with TypeScript for better development experience
-   **Performance Optimized**: Fast loading times with Next.js optimizations
-   **Smooth Animations**: Interactive elements with Framer Motion
-   **SEO Friendly**: Optimized for search engines

## 🚀 Sections

1. **Hero Section**: Eye-catching introduction with animated background
2. **About**: Personal information and expertise areas
3. **Experience**: Professional work history with achievements
4. **Education**: Academic background and accomplishments
5. **Skills**: Technical skills with proficiency levels
6. **Projects**: Featured projects with live demos and source code
7. **Awards**: Recognition and achievements
8. **Contact**: Get in touch form with social links

## 🛠️ Tech Stack

-   **Framework**: Next.js 14
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **Animations**: Framer Motion
-   **Icons**: Lucide React
-   **UI Components**: Custom components with shadcn/ui

## 📁 Project Structure

```
saurabh_portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Home page
│   ├── components/
│   │   ├── HeaderSection.tsx    # Hero section
│   │   ├── AboutSection.tsx     # About section
│   │   ├── ExperienceSection.tsx # Experience section
│   │   ├── EducationSection.tsx  # Education section
│   │   ├── SkillsSection.tsx    # Skills section
│   │   ├── ProjectsSection.tsx  # Projects section
│   │   ├── AwardsSection.tsx    # Awards section
│   │   ├── ContactSection.tsx   # Contact section
│   │   ├── Navigation.tsx       # Navigation bar
│   │   └── ui/                  # Reusable UI components
│   ├── data/
│   │   ├── personal.json        # Personal information
│   │   ├── experience.json      # Work experience
│   │   ├── education.json       # Education details
│   │   ├── skills.json          # Technical skills
│   │   ├── projects.json        # Project portfolio
│   │   └── awards.json          # Awards and achievements
│   ├── types/
│   │   └── index.ts             # TypeScript type definitions
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/                      # Static assets
└── package.json                 # Dependencies
```

## 🎨 Data Management

All content is stored in JSON files in the `src/data/` directory. This makes it easy to update your portfolio without touching the code:

-   `personal.json`: Your name, title, contact info, and social links
-   `experience.json`: Work history with achievements and technologies
-   `education.json`: Academic background and accomplishments
-   `skills.json`: Technical skills organized by category
-   `projects.json`: Portfolio projects with descriptions and links
-   `awards.json`: Awards and recognition

### Updating Content

1. Navigate to the appropriate JSON file in `src/data/`
2. Update the data following the existing structure
3. Save the file - changes will be reflected immediately in development mode

## 🚦 Getting Started

### Prerequisites

-   Node.js 18+
-   npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/saurabhchidrewar/saurabh_portfolio.git
cd saurabh_portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📝 Customization Guide

### 1. Update Personal Information

Edit `src/data/personal.json`:

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "email": "your.email@example.com",
  ...
}
```

### 2. Add New Project

Edit `src/data/projects.json`:

```json
{
  "title": "Project Name",
  "description": "Project description",
  "technologies": ["Tech1", "Tech2"],
  "githubLink": "https://github.com/...",
  "liveLink": "https://...",
  ...
}
```

### 3. Update Experience

Edit `src/data/experience.json` to add or modify work experience entries.

### 4. Modify Skills

Edit `src/data/skills.json` to update your technical skills and proficiency levels.

### 5. Update Awards

Edit `src/data/awards.json` to showcase your achievements and recognition.

## 🎨 Color Scheme

The portfolio uses a modern color palette:

-   Primary: Blue (#2563EB)
-   Secondary: Indigo (#4F46E5)
-   Accent: Purple (#7C3AED)
-   Success: Green (#10B981)
-   Warning: Orange (#F97316)

Gradients are used throughout for a modern, professional look.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

-   Mobile: < 640px
-   Tablet: 640px - 1024px
-   Desktop: > 1024px

## 🔧 Development

### Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run start` - Start production server
-   `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

Saurabh Chidrewar

-   Email: saurabh.c@source.one
-   LinkedIn: [linkedin.com/in/saurabhchidrewar](https://linkedin.com/in/saurabhchidrewar)
-   GitHub: [github.com/saurabhchidrewar](https://github.com/saurabhchidrewar)

## 🌟 Acknowledgments

-   Design inspiration from modern portfolio websites
-   Built with [Next.js](https://nextjs.org/)
-   UI components from [shadcn/ui](https://ui.shadcn.com/)
-   Icons from [Lucide](https://lucide.dev/)
-   Animations with [Framer Motion](https://www.framer.com/motion/)

---

Made with ❤️ by Saurabh Chidrewar
