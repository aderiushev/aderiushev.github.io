# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Aleksei Deriushev. English only. Pure static HTML/CSS/JavaScript with no frameworks. Deployed via GitHub Pages.

## Build Commands

No build step required - this is a pure static site. No linting, testing, or dev server configured.

## Architecture

### Theme System

Light/dark mode via `data-theme` attribute on `<html>`. Uses CSS custom properties. Persists to localStorage, respects `prefers-color-scheme`.

## Project Structure

- `index.html` - Main page (source of truth for structure)
- `script.js` - Theme toggle, scroll animations, emoji logo
- `styles.css` - All styling with CSS variables for theming
- `cm/`, `palabrino/`, `adchange/`, `n3ws/`, `vispana/`, `pirate/` - Standalone product landing pages

## Key Patterns

- No bundler or transpilation - edit files directly
- ES modules (`"type": "module"` in package.json)
- Intersection Observer for scroll animations
