# Personal Site - Astro

This is a personal portfolio website built with Astro and React.

## Tech Stack

- **Framework**: Astro (with React integration)
- **Output**: Static Site Generation (SSG)
- **Styling**: CSS (component-scoped)
- **Node Version**: 22.12.0+

## Project Structure

```
/
├── public/          # Static assets (favicon, manifest, etc.)
├── src/
│   ├── components/  # React components (.jsx)
│   ├── images/      # Image assets
│   ├── layouts/     # Astro layouts
│   ├── pages/       # Astro pages (routes)
│   ├── styles/      # Global styles
│   └── utils/       # Utility functions
├── dist/            # Build output (generated)
└── astro.config.mjs # Astro configuration
```

## Development Commands

### Start Development Server
```bash
yarn dev
```
Starts the dev server at `http://localhost:4321`

### Build for Production
```bash
yarn build
```
Generates static output to `dist/` directory

### Preview Production Build
```bash
yarn preview
```
Serves the built `dist/` directory locally for testing

## Component Hydration

Most components are rendered to static HTML at build time. Interactive components use:
- `client:load` - Hydrates on page load (Header, ThemeButton)
- `client:only="react"` - Only renders in browser (Editor)

## Notes

- The site uses CSS custom properties for theming (dark/light mode)
- Theme preference is persisted in localStorage
- Header navigation uses smooth scrolling to sections
- All content is static - no API calls or dynamic data