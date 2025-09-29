# Technical Task 1

A responsive plumbing service landing page built with React, TypeScript, and Tailwind CSS.

## Preview

| Desktop | Tablet | Mobile |
| --- | --- | --- |
| ![Desktop preview](public/large%20device.png) | ![Tablet preview](public/medium%20device.png) | ![Mobile preview](public/small%20device.png) |

## Features

- Interactive FAQ accordion with smooth open and close state transitions powered by React hooks.
- Bold Get In Touch call to action that pairs persuasive copy with a clear action button.
- Comprehensive footer covering services, useful links, and contact details alongside branded social icons.
- Utility first styling via Tailwind CSS 4 keeps spacing, typography, and colors consistent across breakpoints.

## Tech Stack

- React 19 with TypeScript
- Vite dev server and build tooling
- Tailwind CSS 4
- React Icons for SVG iconography
- ESLint for linting

## Getting Started

1. Ensure Node.js 18 or newer is installed.
2. Install dependencies:

```bash
npm install
```

3. Launch the development server:

```bash
npm run dev
```

4. Build an optimized bundle:

```bash
npm run build
```

5. Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the Vite development server with hot module replacement.
- `npm run build` type checks the project and outputs the production build.
- `npm run preview` serves the production build locally for smoke testing.
- `npm run lint` runs ESLint against the codebase.

## Project Structure

```
technical-task-1/
|-- public/
|   |-- large device.png
|   |-- medium device.png
|   `-- small device.png
|-- src/
|   |-- App.tsx
|   `-- components/
|       |-- FAQAccordion.tsx
|       |-- GetInTouch.tsx
|       `-- Footer.tsx
|-- package.json
`-- vite.config.ts
```

## Customisation Tips

- Update FAQ content in `src/components/FAQAccordion.tsx`.
- Adjust CTA copy and button action in `src/components/GetInTouch.tsx`.
- Replace placeholder footer links, contact details, and branding in `src/components/Footer.tsx`.
- Swap the logo text with your own branding or image inside the footer component.
