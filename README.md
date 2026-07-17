# Understory

A component catalog for [@jamidwyer/understory-web-components](https://github.com/jamidwyer/understory-web-components) — a small Express-served static page that shows every component with live examples and the HTML snippet that produced them, similar in spirit to Storybook but purpose-built for this library.

## Setup

This repo depends on [`understory-web-components`](https://github.com/jamidwyer/understory-web-components) via a `file:` path to a sibling checkout, so clone both repos as siblings first:

```bash
git clone https://github.com/jamidwyer/understory-web-components.git simple-components
git clone https://github.com/jamidwyer/understory.git
cd simple-components && npm install && npm run build
cd ../understory
npm install
npm run build
npm start
```

Or, for iterating on both projects together:

```bash
npm run dev   # build then start
```

The server listens on `http://localhost:3000` (override with `PORT`).

## Structure

- `src/server.ts` — Express server, serves `public/` as static files
- `public/index.html` — the catalog: one section per component, each with example markup rendered live plus a code snippet
- `public/app.js` — sidebar selection-highlighting on scroll/navigation
- `public/vendor/understory-web-components.js` — copy of the components library's ESM bundle, refreshed on every `npm run build`

## Component dependency

`@jamidwyer/understory-web-components` is installed as a `file:../simple-components` dependency, so it resolves to a symlink of the sibling checkout. After changing the components library, rebuild it there (`npm run build` in `simple-components`) and then rerun `npm run build` here to refresh `public/vendor/understory-web-components.js`.

## Adding a new component to the catalog

When the components library gains a new component, add a `<section>` to `public/index.html` with a heading, description, one or more live examples wrapped in `.example-render`, and a `<pre class="snippet">` showing the corresponding HTML — then add a matching entry to the `uwc-sidebar-menu`'s `links` list.
