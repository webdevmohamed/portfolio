import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isFinePointer = window.matchMedia('(pointer: fine)').matches;
// Static snapshot mode (for automated screenshots / crawlers)
const SNAP = new URLSearchParams(location.search).has('snap');

/* ------------------------------------------------------------------ */
/* Lenis smooth scroll + ScrollTrigger sync                            */
/* ------------------------------------------------------------------ */
let lenis: Lenis | null = null;
if (!prefersReduced && !SNAP) {
  lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1.05 });
  (window as unknown as Record<string, unknown>).__lenis = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  const raf = (time: number) => lenis!.raf(time * 1000);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);
  lenis.stop(); // frozen until preloader completes
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */
const $$ = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = document) =>
  Array.from(scope.querySelectorAll<T>(sel));

/* ------------------------------------------------------------------ */
/* Live clocks (Europe/Madrid)                                         */
/* ------------------------------------------------------------------ */
function startClocks() {
  const els = $$('[data-clock]');
  if (!els.length) return;
  const fmt = new Intl.DateTimeFormat('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Europe/Madrid',
  });
  const tick = () => {
    const s = fmt.format(new Date());
    els.forEach((el) => (el.textContent = s));
  };
  tick();
  setInterval(tick, 1000);
}
startClocks();

/* ------------------------------------------------------------------ */
/* Snapshot mode: static render, everything visible, no motion          */
/* ------------------------------------------------------------------ */
if (SNAP) {
  document.querySelector('[data-preloader]')?.remove();
  document.documentElement.classList.remove('is-loading');
  document.documentElement.classList.remove('has-cursor');
  // Final counter values
  $$('[data-count]').forEach((el) => {
    const target = Number((el as HTMLElement).dataset.count);
    el.textContent = `${(el as HTMLElement).dataset.prefix ?? ''}${target}${(el as HTMLElement).dataset.suffix ?? ''}`;
  });
  // Single-section render for snapshot tooling: hide every other <main> child
  // so the requested section sits at the top of the viewport (no scrolling —
  // Edge headless screenshots are unreliable once the page is scrolled).
  const only = new URLSearchParams(location.search).get('only');
  if (only && /^[a-z-]+$/i.test(only)) {
    const style = document.createElement('style');
    style.textContent = `main>:not(#${only}){display:none!important}`;
    document.head.appendChild(style);
  }
  // Diagnostic probe (snap+probe): visible overlay listing horizontal overflow offenders
  if (new URLSearchParams(location.search).has('probe')) {
    requestAnimationFrame(() => {
      const vw = document.documentElement.clientWidth;
      const lines: string[] = [`vw${vw} sw${document.documentElement.scrollWidth} iw${innerWidth}`];
      // Header anatomy
      const header = document.querySelector('[data-nav]');
      if (header) {
        const row = header.firstElementChild as HTMLElement;
        const kids = [...row.children] as HTMLElement[];
        lines.push(`header r${Math.round(header.getBoundingClientRect().right)} l${Math.round(header.getBoundingClientRect().left)} w${Math.round(header.getBoundingClientRect().width)}`);
        kids.forEach((k) => {
          const r = k.getBoundingClientRect();
          lines.push(`H>${k.tagName}.${String(k.className).slice(0, 30)} l${Math.round(r.left)} r${Math.round(r.right)} w${Math.round(r.width)}`);
        });
      }
      const offenders: string[] = [];
      document.querySelectorAll('body *').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && (r.right > vw + 2 || r.left < -2) && getComputedStyle(el).position !== 'fixed') {
          offenders.push(`${el.tagName}.${String(el.className).slice(0, 34)} r${Math.round(r.right)} l${Math.round(r.left)}`);
        }
      });
      lines.push(...offenders.slice(0, 10));
      const box = document.createElement('pre');
      box.style.cssText = 'position:fixed;top:0;left:0;z-index:9999;background:#000;color:#0f0;font:14px monospace;padding:8px;max-width:100vw;white-space:pre-wrap;';
      box.textContent = lines.join('\n');
      document.body.appendChild(box);
    });
  }
} else if (!prefersReduced) {
  // (real-motion path continues below)
}

/* ------------------------------------------------------------------ */
/* Preloader: counter → shutter → hero intro                           */
/* ------------------------------------------------------------------ */
function runPreloader(onDone: () => void) {
  if (SNAP) return;
  const pre = document.querySelector<HTMLElement>('[data-preloader]');
  const counter = pre?.querySelector<HTMLElement>('[data-counter]');
  const shutter = pre?.querySelector<HTMLElement>('[data-shutter]');
  const cover = pre?.querySelector<HTMLElement>('[data-shutter-cover]');
  const enterBtn = pre?.querySelector<HTMLElement>('[data-enter]');

  const finish = () => {
    document.documentElement.classList.remove('is-loading');
    lenis?.start();
    heroIntro();
    onDone();
  };

  if (!pre || !counter || !shutter || prefersReduced) {
    pre?.remove();
    finish();
    return;
  }

  const state = { v: 0 };
  const count = gsap.to(state, {
    v: 100,
    duration: 1.6,
    ease: 'power2.inOut',
    onUpdate: () => {
      counter.textContent = String(Math.round(state.v)).padStart(2, '0');
    },
    onComplete: () => {
      // Release the enter button
      enterBtn?.classList.remove('pointer-events-none');
      if (enterBtn) gsap.to(enterBtn, { opacity: 1, duration: 0.4 });
      // Auto-continue, but keep button for impatient users
      const go = () => {
        if (!cover || !shutter) {
          pre.remove();
          finish();
          return;
        }
        gsap
          .timeline({ onComplete: () => { pre.remove(); finish(); } })
          .to(cover, { scaleY: 0, duration: 0.55, ease: 'power3.inOut' }, 0)
          .to(counter.parentElement!, { opacity: 0, duration: 0.3 }, 0)
          .to(shutter, { y: 0, duration: 0.01 }, 0)
          .to(shutter, { y: '-100%', duration: 0.7, ease: 'power4.inOut' }, 0.28);
      };
      let done = false;
      const once = () => { if (!done) { done = true; go(); } };
      enterBtn?.addEventListener('click', once, { once: true });
      setTimeout(once, 900);
    },
  });
  return count;
}

/* ------------------------------------------------------------------ */
/* Hero intro after preloader                                          */
/* ------------------------------------------------------------------ */
function heroIntro() {
  if (prefersReduced) return;
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

  $$('[data-hero-line]').forEach((line) => {
    const chars = line.querySelectorAll('[data-char]');
    if (chars.length) {
      tl.from(chars, { yPercent: 120, rotate: 6, duration: 1.1, stagger: 0.035 }, 0);
    }
  });
  tl.from($$('[data-hero-fade]'), { y: 26, autoAlpha: 0, duration: 0.9, stagger: 0.08 }, 0.5);
  tl.from('[data-nav]', { y: -24, autoAlpha: 0, duration: 0.8 }, 0.4);
}

/* Split hero name into chars (before preloader finishes) */
function splitHeroChars() {
  $$('[data-split-chars]').forEach((el) => {
    const text = el.textContent ?? '';
    el.textContent = '';
    text.split('').forEach((ch) => {
      const span = document.createElement('span');
      span.className = 'inline-block will-change-transform';
      span.dataset.char = '';
      span.textContent = ch;
      el.appendChild(span);
  });
  });
}
splitHeroChars();

/* ------------------------------------------------------------------ */
/* Scroll-driven animations                                            */
/* ------------------------------------------------------------------ */
function initScrollAnimations() {
  if (prefersReduced || SNAP) return;

  // Reveal: section titles
  $$('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      yPercent: 60,
      autoAlpha: 0,
      duration: 1.1,
      ease: 'power4.out',
      scrollTrigger: { trigger: el, start: 'top 88%' },
    });
  });

  // Generic fades
  $$('[data-fade]').forEach((el) => {
    gsap.from(el, {
      y: 30,
      autoAlpha: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%' },
    });
  });

  // Manifesto word-by-word opacity
  $$('[data-words]').forEach((el) => {
    const split = new SplitText(el as HTMLElement, { type: 'words' });
    gsap.fromTo(
      split.words,
      { opacity: 0.12 },
      {
        opacity: 1,
        stagger: 0.06,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: 0.6 },
      },
    );
  });

  // Timeline spine draw
  const spine = document.querySelector('[data-spine]');
  if (spine) {
    const container = spine.closest('[data-experience]')!;
    gsap.fromTo(
      spine,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: { trigger: container, start: 'top 55%', end: 'bottom 85%', scrub: 0.5 },
      },
    );
  }

  // Jobs slide in
  $$('[data-job]').forEach((job) => {
    gsap.from(job, {
      y: 80,
      autoAlpha: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: job, start: 'top 82%' },
    });
  });

  // Stat counters
  $$('[data-stat]').forEach((stat) => {
    const numEl = stat.querySelector<HTMLElement>('[data-count]');
    if (!numEl) return;
    const target = Number(numEl.dataset.count);
    const prefix = numEl.dataset.prefix ?? '';
    const suffix = numEl.dataset.suffix ?? '';
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: stat,
      start: 'top 85%',
      once: true,
      onEnter: () =>
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: 'power3.out',
          onUpdate: () => {
            numEl.textContent = `${prefix}${Math.round(obj.v)}${suffix}`;
          },
        }),
    });
  });
}

/* ------------------------------------------------------------------ */
/* Custom cursor                                                       */
/* ------------------------------------------------------------------ */
function initCursor() {
  if (!isFinePointer || prefersReduced || SNAP) {
    document.documentElement.classList.remove('has-cursor');
    return;
  }
  const dot = document.querySelector<HTMLElement>('[data-cursor-dot]');
  const ring = document.querySelector<HTMLElement>('[data-cursor-ring]');
  if (!dot || !ring) return;

  const pos = { x: innerWidth / 2, y: innerHeight / 2 };
  const quickX = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power2.out' });
  const quickY = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power2.out' });
  const ringX = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' });
  const ringY = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' });

  window.addEventListener('mousemove', (e) => {
    if (!document.documentElement.classList.contains('cursor-on')) {
      document.documentElement.classList.add('cursor-on');
      // Jump to the pointer without lag on first move
      gsap.set([dot, ring], { x: e.clientX, y: e.clientY });
    }
    pos.x = e.clientX;
    pos.y = e.clientY;
    quickX(pos.x);
    quickY(pos.y);
    ringX(pos.x);
    ringY(pos.y);
  });

  const interactive = 'a, button, [data-magnetic]';
  document.addEventListener('mouseover', (e) => {
    if ((e.target as HTMLElement).closest(interactive)) ring.classList.add('is-active');
  });
  document.addEventListener('mouseout', (e) => {
    if ((e.target as HTMLElement).closest(interactive)) ring.classList.remove('is-active');
  });
}

/* ------------------------------------------------------------------ */
/* Magnetic elements                                                   */
/* ------------------------------------------------------------------ */
function initMagnetic() {
  if (!isFinePointer || prefersReduced || SNAP) return;
  $$('[data-magnetic]').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * 0.28);
      yTo((e.clientY - (r.top + r.height / 2)) * 0.28);
    });
    el.addEventListener('mouseleave', () => {
      xTo(0);
      yTo(0);
    });
  });
}

/* ------------------------------------------------------------------ */
/* Scramble hover on nav links                                         */
/* ------------------------------------------------------------------ */
const SCRAMBLE_CHARS = '!<>-_\\/[]{}—=+*^?#________';
function initScramble() {
  if (prefersReduced || SNAP) return;
  $$('[data-scramble]').forEach((el) => {
    const original = el.textContent ?? '';
    let frame = 0;
    let raf = 0;
    const animate = () => {
      frame += 1;
      const reveal = Math.floor(frame / 2);
      const out = original
        .split('')
        .map((ch, i) => (i < reveal || ch === ' ' ? ch : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]))
        .join('');
      el.textContent = out;
      if (reveal < original.length) raf = requestAnimationFrame(animate);
      else el.textContent = original;
    };
    el.addEventListener('mouseenter', () => {
      cancelAnimationFrame(raf);
      frame = 0;
      raf = requestAnimationFrame(animate);
    });
  });
}

/* ------------------------------------------------------------------ */
/* Skill filters                                                       */
/* ------------------------------------------------------------------ */
function initSkillFilters() {
  const buttons = $$('[data-filter]');
  const items = $$('[data-skill]');
  if (!buttons.length || !items.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.filter;
      buttons.forEach((b) => {
        const active = b === btn;
        b.dataset.active = String(active);
        b.setAttribute('aria-selected', String(active));
      });
      items.forEach((item) => {
        const show = cat === 'all' || item.dataset.cat === cat;
        if (show) {
          item.style.display = '';
          if (!prefersReduced) {
            gsap.fromTo(item, { autoAlpha: 0, scale: 0.94 }, { autoAlpha: 1, scale: 1, duration: 0.35, ease: 'power2.out' });
          }
        } else {
          item.style.display = 'none';
        }
      });
      ScrollTrigger.refresh();
    });
  });
}

/* ------------------------------------------------------------------ */
/* Copy email                                                          */
/* ------------------------------------------------------------------ */
function initCopyEmail() {
  $$('[data-copy-email]').forEach((btn) => {
    const label = btn.querySelector<HTMLElement>('[data-copy-label]');
    const copiedText = btn.dataset.copiedText ?? 'Copied!';
    const original = label?.textContent ?? '';
    const flash = () => {
      if (!label) return;
      label.textContent = copiedText;
      btn.classList.add('border-acid', 'text-acid');
      setTimeout(() => {
        label.textContent = original;
        btn.classList.remove('border-acid', 'text-acid');
      }, 1800);
    };
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('mohamed.mortahil@gmail.com');
        flash();
      } catch {
        // Legacy fallback
        const ta = document.createElement('textarea');
        ta.value = 'mohamed.mortahil@gmail.com';
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand('copy');
          flash();
        } catch {
          window.location.href = 'mailto:mohamed.mortahil@gmail.com';
        }
        ta.remove();
      }
    });
  });
}

/* ------------------------------------------------------------------ */
/* Contact form — client-side validation, composes a mailto: draft      */
/* ------------------------------------------------------------------ */
function initContactForm() {
  const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
  if (!form || form.dataset.formBound) return;
  form.dataset.formBound = '1';

  const status = form.querySelector<HTMLElement>('[data-form-status]');
  const submitLabel = form.querySelector<HTMLElement>('[data-submit-label]');
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const fields = {
    name: form.querySelector<HTMLInputElement>('#cf-name'),
    email: form.querySelector<HTMLInputElement>('#cf-email'),
    message: form.querySelector<HTMLTextAreaElement>('#cf-message'),
  };

  const showError = (key: keyof typeof fields, on: boolean) => {
    form.querySelector<HTMLElement>(`[data-error="${key}"]`)?.classList.toggle('hidden', !on);
    fields[key]?.setAttribute('aria-invalid', on ? 'true' : 'false');
  };

  const validate = (): keyof typeof fields | null => {
    let firstBad: keyof typeof fields | null = null;
    const check = (key: keyof typeof fields, ok: boolean) => {
      showError(key, !ok);
      if (!ok && !firstBad) firstBad = key;
    };
    check('name', !!fields.name?.value.trim());
    check('email', EMAIL_RE.test(fields.email?.value.trim() ?? ''));
    check('message', (fields.message?.value.trim().length ?? 0) >= 10);
    return firstBad;
  };

  // Clear errors as the user types
  (Object.keys(fields) as (keyof typeof fields)[]).forEach((key) => {
    fields[key]?.addEventListener('input', () => showError(key, false));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const bad = validate();
    if (bad) {
      if (status) status.textContent = form.dataset.statusErrors ?? '';
      fields[bad]?.focus();
      return;
    }

    const name = fields.name!.value.trim();
    const email = fields.email!.value.trim();
    const message = fields.message!.value.trim();
    const subject = `Portfolio — mensaje de ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;

    if (status) status.textContent = form.dataset.statusSent ?? '';
    if (submitLabel) {
      submitLabel.textContent = '✓ ' + (form.dataset.doneLabel ?? 'Sent!');
    }
    // Paint the success state first, then hand off to the mail client
    setTimeout(() => {
      window.location.href = `mailto:mohamed.mortahil@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }, 60);

    setTimeout(() => {
      form.reset();
      if (submitLabel) submitLabel.textContent = submitLabel.dataset.original ?? '';
      if (status) status.textContent = '';
    }, 5000);
  });

  // Preserve the original button label for the success-state reset
  if (submitLabel) submitLabel.dataset.original = submitLabel.textContent ?? '';
}

/* ------------------------------------------------------------------ */
/* Mobile menu                                                         */
/* ------------------------------------------------------------------ */
function initMobileMenu() {
  const burger = document.querySelector<HTMLButtonElement>('[data-burger]');
  const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
  if (!burger || !menu) return;

  const setOpen = (open: boolean) => {
    burger.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('pointer-events-none', !open);
    menu.classList.toggle('opacity-0', !open);
    document.documentElement.classList.toggle('is-loading', open);
    if (open) lenis?.stop();
    else lenis?.start();
    const [l1, l2] = $$('[data-burger-line]', burger);
    if (l1 && l2) {
      l1.style.transform = open ? 'translateY(3.5px) rotate(45deg)' : '';
      l2.style.transform = open ? 'translateY(-3.5px) rotate(-45deg)' : '';
    }
  };

  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') === 'true';
    setOpen(!open);
  });
  $$('[data-mobile-link]').forEach((l) => l.addEventListener('click', () => setOpen(false)));
}

/* ------------------------------------------------------------------ */
/* Anchor scrolling via Lenis                                          */
/* ------------------------------------------------------------------ */
function initAnchors() {
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href')!.slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -20 });
      else target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
    });
  });
}

/* ------------------------------------------------------------------ */
window.addEventListener('load', () => {
  initCursor();
  initMagnetic();
  initScramble();
  initSkillFilters();
  initCopyEmail();
  initContactForm();
  initMobileMenu();
  initAnchors();
  if (SNAP) return; // static mode: no preloader, no scroll animations
  runPreloader(() => {
    initScrollAnimations();
    ScrollTrigger.refresh();
  });
});
