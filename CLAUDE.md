# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Aleksei Deriushev. English only. Pure static HTML/CSS/JavaScript with no frameworks. Deployed via GitHub Pages.

## Build Commands

No build step required - this is a pure static site. No linting, testing, or dev server configured.

## Architecture

### Visual Style

Neubrutalism: thick black borders, hard offset drop shadows (no blur), high-saturation accent palette on cream dot-grid background, chunky `Archivo Black` display type paired with `Space Grotesk` body + `JetBrains Mono` accents, playful card rotations via `--rot` CSS variable.

CSS custom properties define the system: `--bg`, `--ink`, `--paper`, `--accent-1..6`, `--border`, `--shadow-x/y`, `--rot`. Google Fonts are loaded from `index.html`.

## Project Structure

- `index.html` - Main page (source of truth for structure)
- `script.js` - Smooth-scroll behavior for in-page anchor links
- `styles.css` - All styling with CSS variables for theme tokens
- `assets/` - Images (portrait, project thumbnails)
- `cm/`, `palabrino/`, `adchange/`, `n3ws/`, `vispana/`, `pirate/`, `ninja-tch/`, `lovepoints/` - Standalone product landing pages

## Key Patterns

- No bundler or transpilation - edit files directly
- ES modules (`"type": "module"` in package.json)
- Each product landing in its own subdirectory is self-contained
