/* ============================================================
   Hiroto Nozaki — Portfolio script.js
   ------------------------------------------------------------
   モジュール構成 (IIFE):
     Header       — スクロールでヘッダー背景切替 (rAF スロットリング)
     Drawer       — モバイルメニュー開閉 + aria 同期 + Esc 閉じ
     Reveal       — [data-reveal] を IntersectionObserver でフェードイン
     SmoothScroll — アンカーリンクをヘッダー分オフセットして滑らかに
     ToTop        — 600px以上スクロールで Back to Top 表示
     CurrentYear  — Footer の年号を動的更新
   ============================================================ */

(() => {
  'use strict';

  // ---------- Utility ----------
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const on = (el, type, fn, opts) => el && el.addEventListener(type, fn, opts);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


  /* Header — 16px 以上で背景を切替。rAF でスロットリング */
  const Header = {
    init() {
      const header = $('#header');
      if (!header) return;
      const THRESHOLD = 16;
      let ticking = false;

      const update = () => {
        header.classList.toggle('is-scrolled', window.scrollY > THRESHOLD);
        ticking = false;
      };
      const onScroll = () => {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      };
      on(window, 'scroll', onScroll, { passive: true });
      update();
    }
  };


  /* Drawer — ハンバーガー開閉、aria同期、Esc/リンクタップで閉じる */
  const Drawer = {
    init() {
      const burger = $('#burger');
      const nav = $('#globalNav');
      if (!burger || !nav) return;

      const open = () => {
        nav.classList.add('is-open');
        burger.setAttribute('aria-expanded', 'true');
        burger.setAttribute('aria-label', 'メニューを閉じる');
        document.body.style.overflow = 'hidden';
      };
      const close = () => {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'メニューを開く');
        document.body.style.overflow = '';
      };
      const toggle = () => {
        nav.classList.contains('is-open') ? close() : open();
      };

      on(burger, 'click', toggle);
      // ナビ内のリンクタップで自動的に閉じる
      $$('a', nav).forEach(a => on(a, 'click', close));
      // Esc で閉じる
      on(document, 'keydown', e => {
        if (e.key === 'Escape' && nav.classList.contains('is-open')) {
          close();
          burger.focus();
        }
      });
      // 880px 超で自動クローズ
      const mq = window.matchMedia('(min-width: 880px)');
      const onMq = e => { if (e.matches) close(); };
      mq.addEventListener ? mq.addEventListener('change', onMq) : mq.addListener(onMq);
    }
  };


  /* Reveal — [data-reveal] を IO でフェードイン */
  const Reveal = {
    init() {
      const targets = $$('[data-reveal]');
      if (!targets.length) return;

      if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        targets.forEach(el => el.classList.add('is-revealed'));
        return;
      }

      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            io.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.12
      });

      targets.forEach(el => io.observe(el));
    }
  };


  /* SmoothScroll — アンカーをヘッダー分オフセットして滑らかに */
  const SmoothScroll = {
    init() {
      $$('a[href^="#"]').forEach(a => {
        on(a, 'click', e => {
          const href = a.getAttribute('href');
          if (!href || href === '#') return;
          const target = document.getElementById(href.slice(1));
          if (!target) return;
          e.preventDefault();

          const headerHeight = $('#header')?.offsetHeight ?? 68;
          const top = target.getBoundingClientRect().top + window.scrollY - headerHeight + 1;

          if (prefersReducedMotion) {
            window.scrollTo(0, top);
          } else {
            window.scrollTo({ top, behavior: 'smooth' });
          }
        });
      });
    }
  };


  /* ToTop — 600px 以上で表示 */
  const ToTop = {
    init() {
      const btn = $('#toTop');
      if (!btn) return;
      const THRESHOLD = 600;
      let ticking = false;

      const update = () => {
        btn.classList.toggle('is-visible', window.scrollY > THRESHOLD);
        ticking = false;
      };
      on(window, 'scroll', () => {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      }, { passive: true });
      update();
    }
  };


  /* CurrentYear — Footer 年号を動的に */
  const CurrentYear = {
    init() {
      const el = $('[data-current-year]');
      if (el) el.textContent = String(new Date().getFullYear());
    }
  };


  /* Init */
  const init = () => {
    Header.init();
    Drawer.init();
    Reveal.init();
    SmoothScroll.init();
    ToTop.init();
    CurrentYear.init();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
