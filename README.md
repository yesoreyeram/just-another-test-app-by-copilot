# Hello World - Single Page Web App

A modern, enterprise-quality single page web application built with React, TypeScript, and Tailwind CSS.

![Light Mode](https://github.com/user-attachments/assets/4e46b58a-75da-4f26-95b9-9c87ce0d47a4)
![Dark Mode](https://github.com/user-attachments/assets/06350b66-3c22-4127-9f96-ca70af0430b8)
![Theme Selector](https://github.com/user-attachments/assets/ce994d82-e2a0-46ea-98d2-69353612ea81)
![Pink Theme](https://github.com/user-attachments/assets/03579323-4f6e-4636-8aeb-cafe0148cd99)

## Features

- **Clean, Centered UI**: "Hello World" text and "Explore more..." button centered both vertically and horizontally
- **Top Menu Bar**: 
  - Left: "Hello" logo/title
  - Right: Dark/Light mode toggle switch and theme selector dropdown
- **6 Beautiful Themes**: Sky, Sea, Forest, Gold, Pink, and Chocolate
- **Dark/Light Mode**: Toggle between dark and light modes with smooth transitions
- **Responsive Design**: Works beautifully on all screen sizes
- **Production Ready**: Enterprise-quality code with proper testing and CI/CD

## Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library
- **React Testing Library** - Component testing
- **Playwright** - End-to-end testing
- **GitHub Actions** - Automated testing, building, and deployment

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Building

```bash
# Build for production
npm run build
```

### Testing

```bash
# Run unit tests
npm run test

# Run unit tests with UI
npm run test:ui

# Run E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Project Structure

```
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   └── Header.tsx    # Top menu bar component
│   ├── contexts/         # React contexts
│   │   └── ThemeContext.tsx
│   ├── lib/             # Utilities
│   │   └── utils.ts
│   ├── test/            # Test setup
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles
├── e2e/                 # Playwright E2E tests
├── .github/
│   └── workflows/       # GitHub Actions workflows
├── public/              # Static assets
└── dist/               # Build output
```

## Theme System

The app includes 6 pre-built themes:
- **Sky**: Cool blue tones
- **Sea**: Teal and aqua colors
- **Forest**: Natural green shades
- **Gold**: Warm golden hues
- **Pink**: Vibrant pink colors
- **Chocolate**: Rich brown tones

Each theme supports both light and dark modes with carefully chosen color palettes.

## CI/CD

The project includes a complete GitHub Actions workflow that:
1. Lints the code
2. Runs unit tests
3. Runs E2E tests
4. Builds the application
5. Deploys to GitHub Pages (on main branch)

## License

MIT

