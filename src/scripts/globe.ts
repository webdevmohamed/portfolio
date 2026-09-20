/* ------------------------------------------------------------------ */
/* Hero globe — dotted sphere + acid arcs. Three.js is dynamically     */
/* imported so mobile/legacy users never download the chunk.           */
/* ------------------------------------------------------------------ */

const host = document.querySelector<HTMLElement>('[data-globe]');

if (host) {
  const SNAP = new URLSearchParams(location.search).has('snap');
  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

  import('three')
    .then((THREE) => boot(THREE, host, SNAP || REDUCED))
    .catch((err) => {
      console.warn('[globe] failed:', err);
    });
}

async function boot(
  THREE: typeof import('three'),
  host: HTMLElement,
  STATIC: boolean,
) {
  /* ---------- renderer / scene / camera ---------- */
  // preserveDrawingBuffer keeps the frame alive for headless captures
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power', preserveDrawingBuffer: true });
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.style.cssText = 'display:block;width:100%;height:100%;opacity:0;transition:opacity .8s ease;';
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 20);
  camera.position.set(0, 0, 3.15);

  const globe = new THREE.Group();
  scene.add(globe);

  /* ---------- soft round sprite for the dots ---------- */
  const spriteCanvas = document.createElement('canvas');
  spriteCanvas.width = spriteCanvas.height = 64;
  const sctx = spriteCanvas.getContext('2d')!;
  const grad = sctx.createRadialGradient(32, 32, 0, 32, 32, 30);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.45, 'rgba(255,255,255,0.55)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  sctx.fillStyle = grad;
  sctx.fillRect(0, 0, 64, 64);
  const sprite = new THREE.CanvasTexture(spriteCanvas);

  /* ---------- fibonacci dot sphere ---------- */
  const N = 2600;
  const positions = new Float32Array(N * 3);
  const colors = new Float32Array(N * 3);
  const GOLDEN = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = GOLDEN * i;
    positions[i * 3] = Math.cos(theta) * r;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = Math.sin(theta) * r;
    if (Math.random() < 0.055) {
      colors.set([0.776, 0.945, 0.208], i * 3); // acid accents
    } else {
      const v = 0.42 + Math.random() * 0.28; // dim ink dust
      colors.set([v, v, v * 0.97], i * 3);
    }
  }
  const dotsGeo = new THREE.BufferGeometry();
  dotsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  dotsGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const dots = new THREE.Points(
    dotsGeo,
    new THREE.PointsMaterial({
      size: 0.024,
      map: sprite,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    }),
  );
  globe.add(dots);

  /* ---------- faint graticule + tilted orbit rings ---------- */
  const ring = (radius: number, color: number, opacity: number, segments = 160) => {
    const pts: number[] = [];
    for (let i = 0; i < segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      pts.push(Math.cos(a) * radius, 0, Math.sin(a) * radius);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    return new THREE.LineLoop(geo, new THREE.LineBasicMaterial({ color, transparent: true, opacity }));
  };

  const equator = ring(1.002, 0xf5f5f2, 0.05);
  globe.add(equator);

  const orbitA = ring(1.28, 0xc6f135, 0.16);
  orbitA.rotation.set(Math.PI / 2.6, 0.3, 0);
  const orbitB = ring(1.45, 0xf5f5f2, 0.07);
  orbitB.rotation.set(Math.PI / 1.9, -0.55, 0.35);
  globe.add(orbitA, orbitB);

  /* ---------- acid arcs between surface points + travelling pulses ---------- */
  const arcs: { line: import('three').Line; pulse: import('three').Mesh; curve: import('three').QuadraticBezierCurve3; t: number; speed: number }[] = [];
  const randUnit = (): import('three').Vector3 => {
    const v = new THREE.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
    return v.lengthSq() < 0.05 ? randUnit() : v.normalize();
  };
  for (let i = 0; i < 4; i++) {
    const a = randUnit();
    const b = randUnit();
    const mid = a.clone().add(b).normalize().multiplyScalar(1 + a.distanceTo(b) * 0.32);
    const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
    const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(60));
    const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0xc6f135, transparent: true, opacity: 0.35 }));
    const pulse = new THREE.Mesh(
      new THREE.SphereGeometry(0.016, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xc6f135 }),
    );
    globe.add(line, pulse);
    arcs.push({ line, pulse, curve, t: Math.random(), speed: 0.12 + Math.random() * 0.18 });
  }

  /* ---------- sizing ---------- */
  let lastW = -1;
  let lastH = -1;
  const resize = () => {
    const w = host.clientWidth || 1;
    const h = host.clientHeight || 1;
    if (w === lastW && h === lastH) return;
    lastW = w;
    lastH = h;
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    camera.aspect = w / h;
    // Fit sphere + rings in view whatever the container aspect is
    const fov = (camera.fov * Math.PI) / 180;
    const half = 1.55; // desired visible half-extent (ring radius 1.45 + margin)
    const dist = half / Math.tan(fov / 2) / Math.min(1, w / h);
    camera.position.z = dist;
    camera.updateProjectionMatrix();
  };
  resize();
  new ResizeObserver(resize).observe(host);

  /* ---------- interaction: drag with inertia + idle auto-rotate ---------- */
  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  let velY = 0;
  let velX = 0;
  let tiltX = 0;
  let tiltTarget = 0;

  renderer.domElement.addEventListener('pointerdown', (e) => {
    dragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    renderer.domElement.style.cursor = 'grabbing';
    try {
      renderer.domElement.setPointerCapture(e.pointerId);
    } catch {
      /* synthetic events (tests) have no capturable pointer */
    }
  });
  addEventListener('pointermove', (e) => {
    if (dragging) {
      velY = (e.clientX - lastX) * 0.0045;
      velX = (e.clientY - lastY) * 0.0025;
      lastX = e.clientX;
      lastY = e.clientY;
    } else {
      const rect = host.getBoundingClientRect();
      const ny = (e.clientY - rect.top) / Math.max(1, rect.height);
      tiltTarget = (ny - 0.5) * 0.22; // gentle parallax with cursor height
    }
  });
  addEventListener('pointerup', () => {
    dragging = false;
    renderer.domElement.style.cursor = 'grab';
  });

  /* ---------- visibility management ---------- */
  let visible = true;
  new IntersectionObserver(([entry]) => (visible = entry.isIntersecting), { threshold: 0.02 }).observe(host);
  document.addEventListener('visibilitychange', () => (visible = !document.hidden && visible !== false));

  /* ---------- entrance ---------- */
  const started = performance.now();
  const ease = (t: number) => 1 - Math.pow(1 - t, 4);

  /* ---------- loop ---------- */
  let raf = 0;
  const tick = (now: number) => {
    raf = requestAnimationFrame(tick);
    if (!visible || document.hidden) return;

    // Belt & suspenders: ResizeObserver can miss display:none→block flips in
    // some embedders — check the real box every frame (cheap int compare).
    if (host.clientWidth !== lastW || host.clientHeight !== lastH) resize();

    const enter = ease(Math.min(1, (now - started) / 1400));
    globe.scale.setScalar(0.72 + 0.28 * enter);
    renderer.domElement.style.opacity = String(enter);

    if (!dragging) {
      velY *= 0.95;
      velX *= 0.95;
      globe.rotation.y += 0.0016 + velY; // idle auto-rotate + inertia
      globe.rotation.x += velX;
    } else {
      globe.rotation.y += velY;
      globe.rotation.x += velX;
    }
    globe.rotation.x = Math.max(-0.7, Math.min(0.7, globe.rotation.x));
    tiltX += (tiltTarget - tiltX) * 0.04;
    equator.rotation.x = tiltX * 0.6;

    for (const arc of arcs) {
      arc.t = (arc.t + arc.speed / 60) % 1;
      arc.pulse.position.copy(arc.curve.getPoint(arc.t));
      const fade = Math.sin(arc.t * Math.PI); // 0→1→0
      (arc.line.material as import('three').LineBasicMaterial).opacity = 0.12 + fade * 0.3;
    }

    renderer.render(scene, camera);
  };

  renderer.domElement.style.cursor = 'grab';

  if (STATIC) {
    // Settled frame for reduced motion / headless snapshots. Module scripts can
    // run before layout exists (host = 0px), so keep re-rendering until the
    // container reports a real size.
    globe.scale.setScalar(1);
    renderer.domElement.style.opacity = '1';
    let tries = 0;
    const settle = () => {
      tries++;
      resize();
      for (const arc of arcs) {
        arc.pulse.position.copy(arc.curve.getPoint(arc.t));
      }
      renderer.render(scene, camera);
      if (tries < 12 && host.clientWidth < 10) setTimeout(settle, 200);
    };
    const kick = () => requestAnimationFrame(() => requestAnimationFrame(settle));
    if (document.readyState === 'complete') kick();
    else addEventListener('load', kick, { once: true });
    setTimeout(settle, 500); // belt & suspenders for headless timing
    return;
  }
  raf = requestAnimationFrame(tick);
  addEventListener('pagehide', () => cancelAnimationFrame(raf));

  // Debug/test handle
  (window as unknown as Record<string, unknown>).__globe = globe;
}
