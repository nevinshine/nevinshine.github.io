# Nevin Shine | Systems Security Research Engineer

This repository contains the source code for the personal research portfolio and documentation hub of Nevin Shine. It serves as a centralized index for investigations into Linux runtime verification, syscall interception, and behavioral anomaly detection.

## Project Overview

The site is designed with a minimalist, terminal-inspired aesthetic to reflect a focus on low-level systems engineering. It functions as a digital dossier, linking to active research artifacts, technical documentation, and academic records.

### Core Research Areas
* **Runtime Verification:** Active defense systems using Linux `ptrace` and kernel interfaces.
* **Syscall Interception:** Deep introspection of process behavior and argument extraction.
* **Anomaly Detection:** Behavioral modeling using statistical and weightless neural network approaches.

## Architecture

This project is built as a static site for maximum performance and security.

* **Framework:** Astro (Static Site Generation)
* **Styling:** Tailwind CSS
* **Type Safety:** TypeScript
* **Deployment:** GitHub Pages

## Local Development

To clone and run this project locally:

### 1. Installation
Install the required dependencies:

```bash
npm install

```

### 2. Development Server

Start the local development server at `localhost:4321`:

```bash
npm run dev

```

### 3. Production Build

Build the project for production deployment (outputs to `./dist/`):

```bash
npm run build

```

## Project Structure

* `src/pages/`: Contains the route definitions and main entry points.
* `src/components/`: Reusable UI components (Project Cards, Headers).
* `src/layouts/`: Global layout definitions.
* `public/`: Static assets (CV, images).

## License

Copyright © 2026 Nevin Shine. All rights reserved.
