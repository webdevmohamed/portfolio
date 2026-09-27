import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { EMAIL } from '../../data/site';

export const prerender = false;

/* ------------------------------------------------------------------ */
/* Config                                                              */
/* ------------------------------------------------------------------ */

// process.env is resolved at runtime (rotating the key needs no rebuild);
// import.meta.env covers `astro dev`, where Vite loads .env into it.
const env = (key: string): string | undefined =>
  process.env[key] ?? (import.meta.env as Record<string, string | undefined>)[key];

const FROM_FALLBACK = 'Portfolio <onboarding@resend.dev>';

/* ------------------------------------------------------------------ */
/* Limits                                                              */
/* ------------------------------------------------------------------ */

const NAME_MAX = 80;
const EMAIL_MAX = 160;
const MESSAGE_MAX = 5000;
const SUBJECT_MAX = 120;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Per-instance best-effort limiter: enough to blunt drive-by spam on a
// portfolio; real abuse protection belongs behind the honeypot + platform.
const hits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => t > now - RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const json = (body: Record<string, unknown>, status: number = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });

const collapse = (v: unknown, max: number): string =>
  typeof v === 'string' ? v.replace(/\s+/g, ' ').trim().slice(0, max) : '';

const escapeHtml = (s: string): string =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

/* ------------------------------------------------------------------ */
/* POST /api/contact                                                   */
/* ------------------------------------------------------------------ */

export const POST: APIRoute = async ({ request }) => {
  const apiKey = env('RESEND_API_KEY');
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set');
    return json({ ok: false, error: 'config' }, 500);
  }

  // Same-origin check when the browser sends Origin (fetch always does).
  const origin = request.headers.get('origin');
  const host = request.headers.get('host');
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) return json({ ok: false, error: 'forbidden' }, 403);
    } catch {
      return json({ ok: false, error: 'forbidden' }, 403);
    }
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (rateLimited(ip)) {
    return json({ ok: false, error: 'rate_limited' }, 429);
  }

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400);
  }

  // Honeypot: the field is visually hidden, so only bots fill it in.
  // Answer 200 so they think they landed it; send nothing.
  if (typeof payload.website === 'string' && payload.website.trim() !== '') {
    return json({ ok: true });
  }

  const name = collapse(payload.name, NAME_MAX);
  const email = collapse(payload.email, EMAIL_MAX);
  const message = typeof payload.message === 'string' ? payload.message.trim().slice(0, MESSAGE_MAX) : '';

  if (!name || !EMAIL_RE.test(email) || message.length < 10) {
    return json({ ok: false, error: 'validation' }, 400);
  }

  const from = env('CONTACT_FROM_EMAIL') ?? FROM_FALLBACK;
  const subject = collapse(`Portfolio — mensaje de ${name}`, SUBJECT_MAX);

  const text = `${message}\n\n— ${name} <${email}>`;
  const html = `<p style="white-space:pre-wrap;font:14px/1.6 sans-serif;color:#111">${escapeHtml(message)}</p><hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0"><p style="font:12px sans-serif;color:#666">— ${escapeHtml(name)} &lt;<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>&gt;</p>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: EMAIL,
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error('[contact] Resend API error:', error);
      return json({ ok: false, error: 'send_failed' }, 502);
    }

    return json({ ok: true });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return json({ ok: false, error: 'send_failed' }, 502);
  }
};
