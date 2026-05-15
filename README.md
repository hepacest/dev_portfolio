# HEPAC Developer Portfolio

I am Helen Patricia Acero Castro, and this is my portfolio, focused on presenting software projects of interest to me while applying software engineering best practices.

> **Lectura en español:** Este proyecto también está documentado en [español](README.es.md).

## About The Project

This repository contains a personal portfolio. It presents selected projects, a short professional profile, and a language toggle for Spanish and English visitors.

### Functional Requirements

- Display a project catalog with name, category, description, and source code links.
- Support bilingual content switching between Spanish and English.
- Expose a dedicated route for each project and redirect visitors to the deployed application.

### Non-Functional Requirements

- Responsive interface for desktop and mobile browsing.
- Clear, low-friction navigation.
- Maintainable structure with reusable React components and centralized language data.

## Technical Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) 16.2.4 |
| UI | [React](https://react.dev/) 19.2.4 |
| Language | [TypeScript](https://www.typescriptlang.org/) 5 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 4 |
| Linting | [ESLint](https://eslint.org/) 9 |

## Architecture And Logic

The application follows a simple App Router structure:

- `app/` contains the main routes, the global layout, and the project redirect route.
- `components/` contains reusable UI sections such as header, footer, about, and project cards.
- `data/` centralizes project metadata and language dictionaries.
- `public/` stores static assets such as flags.
- `types/` defines shared TypeScript types used in the application.

### Information Flow

1. The main page loads the selected locale in client state.
2. Translation strings are read from `data/languages`.
3. Project metadata is read from `data/projects.ts` and rendered through reusable components.
4. The `app/markdown-editor` route redirects to the project's external deployment.

## Quick Start

### Prerequisites

- Node.js 20+ recommended
- npm 10+ recommended

### Installation

```bash
git clone https://github.com/hepacest/dev_portfolio.git
cd dev_portfolio
npm install
```

### Environment Variables

This project currently does not require a `.env` file for local execution.

### Development

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Production

```bash
npm run build
npm start
```

## Project Structure

```text
.
├── app/                  # App Router pages and layout
├── components/           # Reusable UI sections and cards
├── data/                 # Project data and translations
├── public/               # Static assets
├── types/                # Shared TypeScript types
├── eslint.config.mjs     # ESLint configuration
├── next.config.ts        # Next.js configuration
└── package.json          # Scripts and dependencies
```

## Current Projects

| Project | Description | Stack | Code | Live |
|---|---|---|---|---|
| Markdown Editor | Markdown editor with real-time preview | React, Vite, Tailwind CSS | [GitHub](https://github.com/hepacest/markdown-editor) | [Website](https://markdown-editor.hepac.dev/) |

## Project Status

In production and under continuous improvement.

## Contributing

Contributions are not formally open yet. If you want to suggest improvements or report issues, please open an issue or contact the author first.

## License

No license file is currently defined in this repository.


