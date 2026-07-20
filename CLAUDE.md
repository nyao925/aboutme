# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A static, single-page personal "about me" site with zh/ja language switching, deployed to GitHub Pages. No build step, no package manager, no framework — plain HTML/CSS/JS.

## Running locally

The page fetches locale JSON at runtime, so it must be served over HTTP (not opened as a `file://` URL):

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Architecture

- `index.html` — the entire page shell. All visible text lives in empty elements identified by `id` (e.g. `#intro-0`, `#positioning-title`, `#skills-groups`); a `<script>` block at the bottom of the file fetches a locale JSON file and fills these elements in via `applyLocale()`.
- `i18n/zh.json`, `i18n/ja.json` — all copy, one file per language, sharing an identical key structure. `zh` is the default/fallback (read from `localStorage.getItem('aboutme-lang')`, defaulting to `'zh'`).
- `stylesheets/page-style.css` — page styling. `stylesheets/syntax.css` is unrelated (leftover from the GitHub Skills tutorial scaffolding in `.github/steps/`, not used by `index.html`).
- `static/img/description/my_pic.PNG` — avatar image referenced directly in `index.html`.

## Editing content

When adding or changing copy, edit `i18n/zh.json` and `i18n/ja.json` together and keep their key structures identical — `applyLocale()` in `index.html` indexes into both by the same keys, so a missing key silently renders blank rather than erroring. If you add a new field, wire it up in `applyLocale()`/`renderListSection()`/`renderSkillGroups()` in `index.html` as well.

## Not part of the app

`.github/steps/` and `.github/images/` are leftover instructional content from a GitHub Skills exercise template, unrelated to the site itself.
