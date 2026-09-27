/* Full-page screenshot matrix via Edge headless --screenshot in ?snap=1 mode */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const BASE = 'http://localhost:4321';
const OUT_DIR = path.resolve('shots');
const OUT_WIN = OUT_DIR.replace(/\//g, '\\');

// Edge headless renders at 1.285 device scale on this machine (482/375).
// We request window-size = cssSize * 1.285 and downscale the PNG to CSS pixels.
const DSF = 482 / 375;
const SHOTS = [
  { name: 'mobile-375', w: 375, h: 812 },
  { name: 'mobile-390', w: 390, h: 844 },
  { name: 'tablet-768', w: 768, h: 1024 },
  { name: 'laptop-1366', w: 1366, h: 768 },
  { name: 'desktop-1920', w: 1920, h: 1080 },
  { name: 'ultra-2560', w: 2560, h: 1440 },
];

const SECTIONS = ['hello', 'about', 'work', 'skills', 'contact'];

fs.mkdirSync(OUT_DIR, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitForFile(file, timeoutMs = 45000) {
  const full = path.join(OUT_DIR, file);
  const start = Date.now();
  let stable = 0;
  while (Date.now() - start < timeoutMs) {
    try {
      const st = fs.statSync(full);
      if (st.size > 5000) {
        const before = st.size;
        await sleep(500);
        if (fs.statSync(full).size === before) stable++;
        else stable = 0;
        if (stable >= 2) return true;
      }
    } catch {
      /* not yet */
    }
    await sleep(400);
  }
  return false;
}

(async () => {
  let ok = 0;
  let fail = 0;
  for (const s of SHOTS) {
    for (const page of SECTIONS) {
      const id = page || 'top';
      const file = `${s.name}-${id}.png`;
      const outPath = path.join(OUT_WIN, file);
      // snap + only: render just one section at the top (Edge headless can't
      // capture scrolled pages reliably - hiding siblings avoids scrolling)
      const url = `${BASE}/?snap=1${page !== 'hello' ? `&only=${page}` : ''}`;
      // window-size in physical px = css * DSF
      const winW = Math.round(s.w * DSF);
      const winH = Math.round(s.h * DSF);
      try {
        fs.rmSync(path.join(OUT_DIR, file), { force: true });
        execFileSync(
          EDGE,
          [
            '--headless',
            '--disable-gpu',
            '--enable-unsafe-swiftshader',
            '--use-angle=swiftshader',
            '--hide-scrollbars',
            '--no-first-run',
            `--user-data-dir=C:\\Users\\moham\\AppData\\Local\\Temp\\edge-sn-${s.name}`,
            `--window-size=${winW},${winH}`,
            '--virtual-time-budget=16000',
            `--screenshot=${outPath}`,
            url,
          ],
          { timeout: 100000, stdio: 'ignore' },
        );
        const written = await waitForFile(file);
        if (!written) throw new Error('timeout');
        // downscale to CSS pixel size for pixel-accurate review (via temp file)
        const tmp = outPath + '.tmp.png';
        fs.rmSync(tmp, { force: true });
        execFileSync(
          'ffmpeg',
          ['-y', '-loglevel', 'error', '-i', outPath, '-vf', `scale=${s.w}:${s.h}`, tmp],
          { timeout: 60000 },
        );
        fs.rmSync(outPath, { force: true });
        fs.renameSync(tmp, outPath);
        const kb = Math.round(fs.statSync(path.join(OUT_DIR, file)).size / 1024);
        ok++;
        console.log(`OK  ${file} (${kb} KB)`);
      } catch (e) {
        fail++;
        console.log(`ERR ${file}: ${String(e).slice(0, 70)}`);
      }
    }
  }
  console.log(`done: ${ok} ok, ${fail} failed`);
  process.exit(fail > 0 ? 1 : 0);
})();
