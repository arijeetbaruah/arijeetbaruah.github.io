/* ============================================================
   main.js — particles, theme toggle, filters, scroll reveals
   ============================================================ */

(function () {
  'use strict';

  /* ── Theme ─────────────────────────────────────────── */
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme') || 'dark';
  root.setAttribute('data-theme', saved);

  toggle && toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    initCanvas();
  });

  /* ── Animated Canvas Background ────────────────────── */
  const canvas  = document.getElementById('bg-canvas');
  const ctx     = canvas && canvas.getContext('2d');
  let W, H, nodes, RAF;

  function isDark() { return root.getAttribute('data-theme') !== 'light'; }

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function initCanvas() {
    if (!canvas) return;
    cancelAnimationFrame(RAF);
    resize();

    const COUNT = Math.min(Math.floor((W * H) / 14000), 90);
    nodes = Array.from({ length: COUNT }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r:  Math.random() * 1.8 + 0.4,
    }));

    animate();
  }

  function animate() {
    RAF = requestAnimationFrame(animate);
    ctx.clearRect(0, 0, W, H);

    const dark = isDark();
    const nodeCol  = dark ? 'rgba(0,255,140,0.5)'  : 'rgba(0,150,74,0.4)';
    const lineCol  = dark ? 'rgba(0,255,140,'       : 'rgba(0,150,74,';
    const gridCol  = dark ? 'rgba(0,255,140,0.022)' : 'rgba(0,120,60,0.03)';
    const LINK_DIST = 160;

    /* dot grid */
    ctx.fillStyle = gridCol;
    const STEP = 44;
    for (let x = 0; x < W; x += STEP) {
      for (let y = 0; y < H; y += STEP) {
        ctx.beginPath();
        ctx.arc(x, y, 0.8, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    /* update + draw nodes */
    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = nodeCol;
      ctx.fill();
    });

    /* links */
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK_DIST) {
          const alpha = (1 - d / LINK_DIST) * 0.28;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = lineCol + alpha + ')';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  window.addEventListener('resize', () => { resize(); initCanvas(); });
  initCanvas();

  /* ── Hamburger / mobile nav ─────────────────────────── */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger && hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  mobileMenu && mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  /* ── Project filters ────────────────────────────────── */
  const filterBtns   = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      projectCards.forEach(card => {
        if (f === 'all' || card.dataset.type === f) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* ── Scroll reveal ──────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = Number(e.target.dataset.delay || 0);
        setTimeout(() => e.target.classList.add('visible'), delay * 80);
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => revealObs.observe(el));

  /* ── Skill bar animation ────────────────────────────── */
  const skillFills = document.querySelectorAll('.skill-fill');
  const skillObs   = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.pct + '%';
        skillObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  skillFills.forEach(el => skillObs.observe(el));

  /* ── Stat counter animation ─────────────────────────── */
  function animateCount(el, target, suffix) {
    const dur = 1400;
    const start = performance.now();
    const end   = parseInt(target);
    if (isNaN(end)) { el.textContent = target; return; }
    function step(now) {
      const t    = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(ease * end) + (suffix || '');
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const statNums = document.querySelectorAll('.stat-num[data-count]');
  const countObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCount(e.target, e.target.dataset.count, e.target.dataset.suffix || '');
        countObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  statNums.forEach(el => countObs.observe(el));

  /* ── Active nav highlight on scroll ────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current
        ? 'var(--green)' : '';
    });
  }, { passive: true });

})();
