# Modern React Template

A modern React template with TypeScript, Vite, Bun, TailwindCSS, shadcn/ui, ESLint and Biome.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Lightning fast build tool
- 🏃 [Bun](https://bun.sh/) - Fast JavaScript runtime and package manager
- ⚛️ [React 18](https://react.dev/) - JavaScript library for user interfaces
- 📘 [TypeScript](https://www.typescriptlang.org/) - Type safety
- 🎨 [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- 🎯 [shadcn/ui](https://ui.shadcn.com/) - Re-usable UI components
- 📏 [ESLint](https://eslint.org/) - Linting utility
- ✨ [Biome](https://biomejs.dev/) - Fast formatter and linter
- 🐶 [Husky](https://typicode.github.io/husky/) - Git hooks
- 📋 [lint-staged](https://github.com/okonet/lint-staged) - Run linters on git staged files

## Getting Started

1. Clone this template:

2. Install dependencies:
```sh
bun install
```

3. Start development server:
```sh
bun dev
```

## Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun preview` - Preview production build
- `bun lint` - Run ESLint and Biome linting
- `bun lint:fix` - Fix linting issues
- `bun format` - Format code with Biome

## Project Structure

```
├── src/
│   ├── components/     # React components
│   │   └── ui/        # shadcn/ui components
│   ├── lib/           # Utility functions
│   ├── styles/        # Global styles and Tailwind config
│   ├── App.tsx        # Root component
│   └── main.tsx       # Entry point
├── public/            # Static assets
├── biome.jsonc        # Biome configuration
├── eslint.config.js   # ESLint configuration
├── tailwind.config.ts # Tailwind configuration
└── vite.config.ts     # Vite configuration
```

## Environment Variables

Copy `.env-example` to `.env` and fill in your values:

## Contributing

1. Create a feature branch
2. Commit changes
3. Push your branch
4. Open a PR

Husky will run linting and formatting checks on commit.

## License

MIT
