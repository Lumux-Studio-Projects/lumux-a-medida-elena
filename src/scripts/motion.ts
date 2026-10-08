import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;
let cursorInitialized = false;
let clockInterval: ReturnType<typeof setInterval> | null = null;
let themeToggleInitialized = false;

let mouseX = -100;
let mouseY = -100;
let followerX = -100;
let followerY = -100;

export function getLenis() {
  return lenisInstance;
}

export function resetPageScroll() {
  const hash = window.location.hash;
  if (hash) {
    const targetEl = document.querySelector(hash) as HTMLElement | null;
    if (targetEl) {
      if (lenisInstance) {
        lenisInstance.scrollTo(targetEl, { immediate: true, offset: -85 });
      } else {
        targetEl.scrollIntoView();
      }
      return;
    }
  }

  // Force immediate scroll to top on page navigation
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true });
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export function initMinimalMotion() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Kill old ScrollTriggers if re-initializing on page transitions
  ScrollTrigger.getAll().forEach((st) => st.kill());

  // 1. Initialize Lenis Smooth Scroll
  if (!lenisInstance) {
    lenisInstance = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.2,
    });

    lenisInstance.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenisInstance?.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }

  // Always reset scroll on page transition before recalculating triggers
  resetPageScroll();
  lenisInstance.resize();

  // 2. Custom Minimal Cursor
  setupCursor();

  // 3. Anchor links with Lenis smooth scrolling
  setupSmoothAnchors();

  // 4. Live Dual Time Clocks (Zurich & Kyoto)
  setupLiveClocks();

  // 5. Dark / Light Theme Toggle Listener
  setupThemeToggle();

  // 6. Interactive Drawers / Accordions
  setupDrawers();

  // 7. Work Row Floating Preview Image Tracker
  setupWorkPreview();

  // If user prefers reduced motion, make all reveal elements immediately visible
  if (prefersReducedMotion) {
    document.querySelectorAll('[data-reveal], .hero-anim-line, .section-header, .work-visual-card, .principle-card, .matrix-card, .record-row, .dispatch-card').forEach((el) => {
      (el as HTMLElement).style.opacity = '1';
      (el as HTMLElement).style.transform = 'none';
    });
    return;
  }

  // 8. Hero Entrance Animation
  setupHeroAnimation();

  // 9. Section Headers Choreography
  setupSectionHeadersAnimation();

  // 10. Specific Section Choreography
  setupWorksSectionAnimation();
  setupDrasaHomepageAnimation();
  setupManifestoAnimation();
  setupMatrixAnimation();
  setupPressAnimation();
  setupDispatchAnimation();

  // 11. Internal Pages Choreography
  setupInternalPagesAnimation();

  // 12. Generic / Fallback Scroll Reveals
  setupScrollReveals();

  // 13. Image Parallax
  setupImageParallax();

  // Recalculate ScrollTrigger on load & next tick
  ScrollTrigger.refresh();
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 120);
}

function resetCursorFollower() {
  const follower = document.querySelector('.cursor-follower') as HTMLElement;
  if (!follower) return;
  follower.style.width = '32px';
  follower.style.height = '32px';
  follower.style.borderColor = 'rgba(140, 138, 133, 0.4)';
  follower.style.backgroundColor = 'transparent';
}

function expandCursorFollower() {
  const follower = document.querySelector('.cursor-follower') as HTMLElement;
  if (!follower) return;
  follower.style.width = '48px';
  follower.style.height = '48px';
  follower.style.borderColor = 'var(--color-primary)';
  follower.style.backgroundColor = 'rgba(128, 128, 128, 0.08)';
}

function setupCursor() {
  const dot = document.querySelector('.cursor-dot') as HTMLElement;
  const follower = document.querySelector('.cursor-follower') as HTMLElement;

  if (!dot || !follower || !window.matchMedia('(pointer: fine)').matches) return;

  // Always reset follower state on every page load/transition so it never gets stuck
  resetCursorFollower();

  if (cursorInitialized) return;
  cursorInitialized = true;

  window.addEventListener('mousemove', (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.opacity = '1';
    follower.style.opacity = '1';
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  // Smooth follower ticker (registered once)
  gsap.ticker.add(() => {
    followerX += (mouseX - followerX) * 0.16;
    followerY += (mouseY - followerY) * 0.16;
    follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
  });

  // Delegated mouseover/mouseout: never leaks listeners, never gets stuck
  document.addEventListener('mouseover', (e: MouseEvent) => {
    const target = (e.target as HTMLElement)?.closest('a, button, input, textarea, select, .work-row-item, [data-interactive]');
    if (target) {
      expandCursorFollower();
    } else {
      resetCursorFollower();
    }
  });

  // When clicking any link or button, reset immediately so it doesn't stay expanded across page transitions
  document.addEventListener('click', () => {
    resetCursorFollower();
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    follower.style.opacity = '0';
    resetCursorFollower();
  });
}

function setupSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href === '#!') return;

      if (href === '#top') {
        e.preventDefault();
        if (lenisInstance) {
          lenisInstance.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }

      const target = document.querySelector(href);
      if (target && lenisInstance) {
        e.preventDefault();
        lenisInstance.scrollTo(target as HTMLElement, {
          offset: -85,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      }
    });
  });

  // Clicking brand or active nav link while on current page smoothly scrolls to top
  document.querySelectorAll('.brand-link, .nav-link.is-active').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && (window.location.pathname === href || (href === '/' && window.location.pathname === ''))) {
        e.preventDefault();
        if (lenisInstance) {
          lenisInstance.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  });
}

function setupLiveClocks() {
  const zurichEl = document.getElementById('clock-zurich');
  const kyotoEl = document.getElementById('clock-kyoto');

  if (clockInterval) {
    clearInterval(clockInterval);
  }

  const updateClocks = () => {
    const now = new Date();

    if (zurichEl) {
      const zurichTime = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Zurich',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now);
      zurichEl.textContent = zurichTime;
    }

    if (kyotoEl) {
      const kyotoTime = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now);
      kyotoEl.textContent = kyotoTime;
    }
  };

  updateClocks();
  clockInterval = setInterval(updateClocks, 1000);
}

function setupThemeToggle() {
  const validThemes = ['alabastro', 'klein-studio', 'nordic-sage', 'obsidian-noir'];
  const savedTheme = localStorage.getItem('vance_theme');
  if (savedTheme && validThemes.includes(savedTheme)) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else {
    document.documentElement.setAttribute('data-theme', 'alabastro');
  }
}

function setupDrawers() {
  document.querySelectorAll('[data-drawer-trigger]').forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = trigger.closest('[data-drawer-parent]');
      if (!parent) return;

      const drawer = parent.querySelector('[data-drawer-body]') as HTMLElement;
      const icon = trigger.querySelector('[data-drawer-icon]');

      if (drawer) {
        const isOpen = drawer.classList.contains('is-open');
        if (isOpen) {
          drawer.classList.remove('is-open');
          if (icon) icon.textContent = '+';
        } else {
          drawer.classList.add('is-open');
          if (icon) icon.textContent = '—';
        }
        ScrollTrigger.refresh();
      }
    });
  });
}

function setupWorkPreview() {
  const workRows = document.querySelectorAll('.work-row-item');
  workRows.forEach((row) => {
    const preview = row.querySelector('.floating-preview') as HTMLElement;
    if (!preview) return;

    row.addEventListener('mousemove', (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = (row as HTMLElement).getBoundingClientRect();
      const relX = mouseEvent.clientX - rect.left;
      const relY = mouseEvent.clientY - rect.top;

      gsap.to(preview, {
        x: relX - 140,
        y: relY - 90,
        duration: 0.35,
        ease: 'power2.out',
      });
    });

    row.addEventListener('mouseenter', () => {
      gsap.to(preview, { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' });
    });

    row.addEventListener('mouseleave', () => {
      gsap.to(preview, { opacity: 0, scale: 0.94, duration: 0.2, ease: 'power2.in' });
    });

    row.addEventListener('click', () => {
      gsap.to(preview, { opacity: 0, scale: 0.94, duration: 0.15 });
    });
  });
}

function setupHeroAnimation() {
  const heroTitle = document.querySelector('.hero-monumental-title, .hero-title');
  if (!heroTitle) return;

  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

  tl.fromTo(
    '.hero-kicker',
    { opacity: 0, y: -10 },
    { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
  )
  .fromTo(
    heroTitle,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1.15 },
    '-=0.5'
  )
  .fromTo(
    '.scrolldown-badge',
    { opacity: 0, scale: 0.85 },
    { opacity: 1, scale: 1, duration: 0.9, ease: 'back.out(1.5)' },
    '-=0.7'
  )
  .fromTo(
    '.hero-statement-row',
    { opacity: 0, y: 24 },
    { opacity: 1, y: 0, duration: 0.9 },
    '-=0.5'
  )
  .fromTo(
    '.hero-featured-showcase',
    { opacity: 0, y: 35 },
    { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' },
    '-=0.5'
  );
}

function setupSectionHeadersAnimation() {
  const headers = document.querySelectorAll(
    '.section-header, .section-top-header, .statement-side, .case-narrative-section .narrative-marker, .case-gallery-section .gallery-header, .case-specs-section .specs-card-header, .archive-header-row, .page-header-minimal, .locations-header'
  );

  headers.forEach((header) => {
    const badge = header.querySelector('.mono-meta, .section-num, .section-tag, .header-badge');
    const title = header.querySelector('.section-title, .section-big-title, .side-heading, .narrative-section-heading, .gallery-heading, .page-title, h1, h2');
    const lead = header.querySelector('.section-summary, .section-lead, .header-right, .journal-lead, .contact-page-lead, .about-hero-lead');

    const elementsToAnimate = [badge, title, lead].filter(Boolean);

    if (elementsToAnimate.length > 0) {
      gsap.fromTo(
        elementsToAnimate,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.95,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 88%',
            once: true,
          },
        }
      );
    }
  });
}

function setupWorksSectionAnimation() {
  const cards = document.querySelectorAll('.work-card, .work-visual-card');
  cards.forEach((card) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          once: true,
        },
      }
    );
  });
}

function setupDrasaHomepageAnimation() {
  // 1. Philosophy Statement
  const philSplit = document.querySelector('.philosophy-statement-section .split-layout');
  if (philSplit) {
    gsap.fromTo(
      philSplit.children,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: philSplit,
          start: 'top 85%',
          once: true,
        },
      }
    );
  }

  // 2. Founder Section
  const founderLayout = document.querySelector('.founder-section .founder-layout');
  if (founderLayout) {
    gsap.fromTo(
      founderLayout.children,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: founderLayout,
          start: 'top 85%',
          once: true,
        },
      }
    );
  }

  // 3. Labs Grid
  const labCards = document.querySelectorAll('.energy-labs-section .lab-card');
  if (labCards.length > 0) {
    gsap.fromTo(
      labCards,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.energy-labs-section .labs-grid',
          start: 'top 85%',
          once: true,
        },
      }
    );
  }

  // 4. Collective Preview Grid
  const memberCards = document.querySelectorAll('.collective-preview-section .member-card');
  if (memberCards.length > 0) {
    gsap.fromTo(
      memberCards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.collective-preview-section .collective-cards-grid',
          start: 'top 85%',
          once: true,
        },
      }
    );
  }

  // 5. Testimonials Grid
  const testimonials = document.querySelectorAll('.testimonials-section .testimonial-card');
  if (testimonials.length > 0) {
    gsap.fromTo(
      testimonials,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.testimonials-section .testimonials-grid',
          start: 'top 85%',
          once: true,
        },
      }
    );
  }

  // 6. Footer CTA Block
  const footerCta = document.querySelector('.drasa-footer .footer-cta-block');
  if (footerCta) {
    gsap.fromTo(
      footerCta,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerCta,
          start: 'top 85%',
          once: true,
        },
      }
    );
  }
}

function setupManifestoAnimation() {
  const grid = document.querySelector('.principles-grid');
  if (!grid) return;

  const cards = grid.querySelectorAll('.principle-card');
  if (cards.length === 0) return;

  gsap.fromTo(
    cards,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1.0,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: grid,
        start: 'top 85%',
        once: true,
      },
    }
  );
}

function setupMatrixAnimation() {
  const grid = document.querySelector('.matrix-grid');
  if (!grid) return;

  const cards = grid.querySelectorAll('.matrix-card');
  if (cards.length === 0) return;

  gsap.fromTo(
    cards,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1.0,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: grid,
        start: 'top 85%',
        once: true,
      },
    }
  );
}

function setupPressAnimation() {
  const table = document.querySelector('.records-table');
  if (!table) return;

  const rows = table.querySelectorAll('.record-row');
  if (rows.length === 0) return;

  gsap.fromTo(
    rows,
    { opacity: 0, y: 22 },
    {
      opacity: 1,
      y: 0,
      duration: 0.85,
      stagger: 0.07,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: table,
        start: 'top 86%',
        once: true,
      },
    }
  );
}

function setupDispatchAnimation() {
  const card = document.querySelector('.dispatch-card');
  if (!card) return;

  const elements = card.querySelectorAll(
    '.dispatch-header, .dispatch-title, .dispatch-lead, .email-action-row, .dispatch-footer'
  );

  gsap.fromTo(
    card,
    { opacity: 0, y: 35 },
    {
      opacity: 1,
      y: 0,
      duration: 1.0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        once: true,
      },
    }
  );

  if (elements.length > 0) {
    gsap.fromTo(
      elements,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          once: true,
        },
      }
    );
  }
}

function setupInternalPagesAnimation() {
  // 1. Philosophy Principles & Story
  const principleBoxes = document.querySelectorAll('.principles-cards-grid .principle-box');
  if (principleBoxes.length > 0) {
    gsap.fromTo(
      principleBoxes,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.principles-cards-grid',
          start: 'top 85%',
          once: true,
        },
      }
    );
  }

  const credItems = document.querySelectorAll('.credentials-counter-grid .cred-item');
  if (credItems.length > 0) {
    gsap.fromTo(
      credItems,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.credentials-counter-grid',
          start: 'top 85%',
          once: true,
        },
      }
    );
  }

  // 2. Collective Page Members Grid
  const collectiveCards = document.querySelectorAll('.collective-grid .collective-member-card');
  if (collectiveCards.length > 0) {
    gsap.fromTo(
      collectiveCards,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.95,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.collective-grid',
          start: 'top 85%',
          once: true,
        },
      }
    );
  }

  // 3. Work Catalog Grid
  const projectCards = document.querySelectorAll('.project-grid .project-card');
  if (projectCards.length > 0) {
    gsap.fromTo(
      projectCards,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.95,
        stagger: 0.09,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.project-grid',
          start: 'top 85%',
          once: true,
        },
      }
    );
  }

  // 4. Contact Trust Pillars
  const trustCards = document.querySelectorAll('.trust-grid .trust-card');
  if (trustCards.length > 0) {
    gsap.fromTo(
      trustCards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.95,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.trust-grid',
          start: 'top 85%',
          once: true,
        },
      }
    );
  }

  // 5. Contact FAQ Accordions
  const faqItems = document.querySelectorAll('.faq-list .faq-item');
  if (faqItems.length > 0) {
    gsap.fromTo(
      faqItems,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.06,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.faq-list',
          start: 'top 85%',
          once: true,
        },
      }
    );
  }

  // 6. Case Study Gallery Plates & Metrics
  const metricCards = document.querySelectorAll('.metrics-grid .metric-card');
  if (metricCards.length > 0) {
    gsap.fromTo(
      metricCards,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.metrics-grid',
          start: 'top 85%',
          once: true,
        },
      }
    );
  }

  const galleryCards = document.querySelectorAll('.case-gallery-section .gallery-card');
  if (galleryCards.length > 0) {
    gsap.fromTo(
      galleryCards,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.case-gallery-section .gallery-grid',
          start: 'top 85%',
          once: true,
        },
      }
    );
  }

  // 7. Case Study Other Projects
  const otherCards = document.querySelectorAll('.other-cards-grid .other-card');
  if (otherCards.length > 0) {
    gsap.fromTo(
      otherCards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.95,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.other-cards-grid',
          start: 'top 85%',
          once: true,
        },
      }
    );
  }
}

function setupScrollReveals() {
  const revealElements = document.querySelectorAll('[data-reveal]');
  revealElements.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 1.05,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      }
    );
  });
}

function setupImageParallax() {
  const parallaxImages = document.querySelectorAll('[data-parallax]');
  parallaxImages.forEach((img) => {
    gsap.fromTo(
      img,
      { yPercent: -4, scale: 1.12 },
      {
        yPercent: 4,
        scale: 1.12,
        ease: 'none',
        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      }
    );
  });
}
