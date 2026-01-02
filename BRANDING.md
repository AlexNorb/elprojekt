# Project Branding & Style Guide

This document serves as the single source of truth for the visual identity of the project. It outlines the core colors, typography, and reusable UI styles used throughout the application.

## 🎨 Color Palette

The color scheme is defined in `src/styles/global.css` using CSS variables within the `@theme` directive.

| Name | Variable | Hex Code | Usage |
|------|----------|----------|-------|
| **Brand Primary** | `--color-brand-primary` | `#003ca6` | Main brand color, headers, primary actions |
| **Brand Dark** | `--color-brand-dark` | `#002a75` | Darker shade for hover states or contrast |
| **Brand Accent** | `--color-brand-accent` | `#ff7403` | Call-to-actions, highlights, "pop" elements |
| **Brand Gray** | `--color-brand-gray` | `#f8fafc` | Backgrounds, subtle sections |
| **Brand Surface Dark** | `--color-slate-900` | `#0f172a` | Dark backgrounds, footers, high contrast sections |
| **Hover Accent** | *(Hardcoded)* | `#e66000` | Used on `.btn-accent:hover` |

### Legacy Aliases
*   `--color-elblue` → mapped to `--color-brand-primary`
*   `--color-elorange` → mapped to `--color-brand-accent`

---

## ✍️ Typography

### Primary Font (Body & UI)
*   **Family**: `Inter`
*   **Variable**: `--font-sans`
*   **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)
*   **Source**: [Google Fonts](https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap)

### Display Font (Headings & Logo)
*   **Family**: `Bank Gothic Light`
*   **Variable**: `--font-display`
*   **Source**: Local assets (`src/assets/fonts/`)
*   **Usage**: Primarily for the logo text and stylistic headers.

---

## 🧩 UI Components & Utilities

### Buttons

#### Accent Button (`.btn-accent`)
Standard call-to-action button style.
*   **Background**: Brand Accent (`#ff7403`)
*   **Transition**: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
*   **Hover State**:
    *   Background: `#e66000`
    *   Transform: `translateY(-1px)`
    *   Shadow: `0 4px 12px rgba(255, 116, 3, 0.3)`

### Shadows

| Name | Variable | Value | Usage |
|------|----------|-------|-------|
| **Soft Shadow** | `--shadow-soft` | `0 4px 20px -2px rgba(0, 0, 0, 0.05)` | Cards, containers |
| **Glow Shadow** | `--shadow-glow` | `0 0 15px rgba(255, 116, 3, 0.3)` | Vibrant elements, focus states |

### Special Classes

*   **.logo-text**: Applies the Display font (`Bank Gothic Light`) and a letter spacing of `-1px`.

---

## 🎬 Animations

### Fade In Up
Standard entrance animation for elements.
*   **Name**: `fadeInUp`
*   **Duration**: `0.8s`
*   **Easing**: `ease-out`
*   **Variable**: `--animate-fade-in-up`
*   **Description**: Fades opacity from 0 to 1 while moving up from 20px to 0.

---

## 🛠 Tech Stack Notes
*   **CSS Framework**: Tailwind CSS (v4 / Vite plugin)
*   **Styles Location**: `src/styles/global.css`
