/* Regenerates public/og.png (the preview image shown when the site URL is
 * shared on WhatsApp / LinkedIn / X / Slack, i.e. og:image + twitter:image).
 *
 * Renders a 1200x630 OG card with the site's current design tokens —
 * void background, acid accent, Clash Display headline, JetBrains Mono
 * labels — using headless Edge, then downscales the 2x capture to exactly
 * 1200x630. Fonts are loaded from the built site (dist/client/_astro) so
 * the card matches the real page without shipping the font files here.
 *
 * Usage:  npm run build && npm run og
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const EDGE =
  process.env.EDGE_PATH ??
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';

const FONT_DIR = path.resolve('dist/client/_astro');
const OUT = path.resolve('public/og.png');

const clash500 = fs
  .readdirSync(FONT_DIR)
  .find((f) => f.startsWith('clash-display-500.'));
const clash700 = fs
  .readdirSync(FONT_DIR)
  .find((f) => f.startsWith('clash-display-700.'));
const jetbrains = fs
  .readdirSync(FONT_DIR)
  .find((f) => f.startsWith('jetbrains-mono-latin-wght-normal.'));
if (!clash500 || !clash700 || !jetbrains)
  throw new Error(
    'Fonts not found in dist/client/_astro — run "npm run build" first.',
  );

const toUrl = (file) => pathToFileURL(path.join(FONT_DIR, file)).href;

const NAME = 'MOHAMED MORTAHIL';
const ROLE = 'DESARROLLADOR WEB FULL STACK';
const STACK =
  'LARAVEL · VUE.JS · NUXT · INERTIA.JS · TYPESCRIPT · IA · CLOUD';
const DOMAIN = 'moham.es';

/* Design notes vs the real hero:
 * - Headline sized so the full name fits the 2400px-wide capture in one line.
 * - `only` helper class from the snap mode hides nav/globe/cursor chunks that
 *   would clutter a 630px-tall crop. */
const html = `<!DOCTYPE html>
<html lang="es" class="snap">
<head>
<meta charset="utf-8">
<style>
  /* Design tokens — keep in sync with src/styles/global.css */
  :root {
    --void: #0a0a0b;
    --ink: #f5f5f2;
    --acid: #c6f135;
    --smoke: #8a8a84;
    --line: rgba(245, 245, 242, 0.09);
  }
  @font-face {
    font-family: 'Clash Display';
    src: url('${toUrl(clash500)}') format('woff2');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Clash Display';
    src: url('${toUrl(clash700)}') format('woff2');
    font-weight: 700;
  }
  @font-face {
    font-family: 'JetBrains Mono';
    src: url('${toUrl(jetbrains)}') format('woff2');
    font-weight: 100 800;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 2400px; height: 1260px; overflow: hidden; }
  body {
    position: relative;
    background: var(--void);
    color: var(--ink);
    font-family: 'Clash Display', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 150px 170px 120px;
  }
  /* Soft acid glow, echoing the hero globe that sits behind the headline */
  .glow {
    position: absolute;
    top: -420px;
    right: -360px;
    width: 1500px;
    height: 1500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(198, 241, 53, 0.11), transparent 62%);
    pointer-events: none;
  }
  .top { position: relative; }
  .rule {
    width: 96px;
    height: 12px;
    background: var(--acid);
    margin-bottom: 64px;
  }
  h1 {
    font-size: 172px;
    font-weight: 700;
    letter-spacing: -0.015em;
    line-height: 0.95;
    white-space: nowrap;
    text-transform: uppercase;
  }
  .role {
    margin-top: 52px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 56px;
    font-weight: 700;
    letter-spacing: 0.14em;
    color: var(--acid);
    text-transform: uppercase;
  }
  .stack {
    margin-top: 40px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 36px;
    letter-spacing: 0.12em;
    color: var(--smoke);
    text-transform: uppercase;
  }
  .bottom {
    position: relative;
    border-top: 1px solid var(--line);
    padding-top: 48px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-family: 'JetBrains Mono', monospace;
    font-size: 40px;
    letter-spacing: 0.14em;
    color: var(--smoke);
    text-transform: uppercase;
  }
  .bottom .mark { color: var(--ink); font-weight: 700; }
  .bottom .mark span { color: var(--acid); }
</style>
</head>
<body>
  <div class="glow"></div>
  <div class="top">
    <div class="rule"></div>
    <h1>${NAME}</h1>
    <div class="role">${ROLE}</div>
    <div class="stack">${STACK}</div>
  </div>
  <div class="bottom">
    <span class="mark">MM<span>©</span>'26</span>
    <span>${DOMAIN}</span>
  </div>
</body>
</html>`;

const tmpHtml = path.join(path.dirname(OUT), '.og-card.html');
fs.writeFileSync(tmpHtml, html);

const tmpPng = path.join(path.dirname(OUT), '.og-card-2x.png');
fs.rmSync(tmpPng, { force: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* Edge (old) headless can exit before the screenshot file is fully flushed,
 * so poll until the file is stable instead of trusting the process exit. */
async function waitForFile(file, timeoutMs = 45000) {
  const start = Date.now();
  let stable = 0;
  while (Date.now() - start < timeoutMs) {
    try {
      if (fs.statSync(file).size > 5000) {
        const before = fs.statSync(file).size;
        await sleep(500);
        if (fs.statSync(file).size === before && ++stable >= 2) return true;
      }
    } catch {
      /* not yet */
    }
    await sleep(400);
  }
  return false;
}

// Edge headless renders at ~1.285 device scale on this machine (see
// scripts/multires-test.mjs); we capture 2400x1260 and downscale to 1200x630.
execFileSync(
  EDGE,
  [
    '--headless',
    '--disable-gpu',
    '--enable-unsafe-swiftshader',
    '--use-angle=swiftshader',
    '--hide-scrollbars',
    '--no-first-run',
    `--user-data-dir=${process.env.TEMP ?? '/tmp'}/edge-og`,
    '--window-size=2400,1260',
    '--virtual-time-budget=12000',
    `--screenshot=${tmpPng}`,
    pathToFileURL(tmpHtml).href,
  ],
  { timeout: 100000, stdio: 'ignore' },
);

if (!(await waitForFile(tmpPng)))
  throw new Error('Edge did not produce the screenshot (missing or empty).');

const sharp = (await import('sharp')).default;
await sharp(tmpPng).resize(1200, 630).png({ quality: 92 }).toFile(OUT);

fs.rmSync(tmpHtml, { force: true });
fs.rmSync(tmpPng, { force: true });

const meta = await sharp(OUT).metadata();
console.log(
  `og.png regenerated: ${meta.width}x${meta.height}, ${Math.round(fs.statSync(OUT).size / 1024)} KB`,
);
