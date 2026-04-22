# Next.js Counter App

A simple counter application built with Next.js (App Router), TypeScript, and React.

## Features

- Increment counter with `+1`
- Decrement counter with `-1`
- Reset counter to `0`
- Minimum value limit: `0`
- Maximum value limit: `10`
- Counter value is persisted in `localStorage` so it stays after refresh

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- ESLint

## Getting Started

### 1) Clone repository

```bash
git clone https://github.com/NAUFAL-str/nextjs-counter.git
cd nextjs-counter
```

### 2) Install dependencies

```bash
npm install
```

### 3) Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - build for production
- `npm run start` - run production build
- `npm run lint` - run linting

## Project Structure

```text
nextjs-counter/
  src/
    app/
      globals.css
      layout.tsx
      page.tsx
  package.json
  tsconfig.json
```

## Counter Behavior

- Default value: `0`
- Value is clamped between `0` and `10`
- `localStorage` key used: `simple-counter-value`

## License

This project is created for learning and personal use.
